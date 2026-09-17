#!/usr/bin/env node
/**
 * OWASP ZAP severity gate for the Storybook runtime scanned by the DAST job.
 *
 * The DAST job (`.github/workflows/security.yml`) runs the ZAP baseline scanner
 * with `fail_action: false`, so ZAP's own rule actions (WARN/FAIL) never decide
 * the build outcome. This script does: it parses ZAP's JSON report and fails
 * the build for any alert whose JSON `riskcode` is medium (`2`) or high (`3`),
 * unless a reviewed exception in `.zap/rules.tsv` matches it.
 *
 * Fail-closed posture:
 *   - An unreadable or non-object report exits non-zero.
 *   - A report whose `site`/`alerts` shape does not match ZAP's schema exits
 *     non-zero rather than silently reporting "no findings" (a truncated or
 *     changed report must not bypass the gate).
 *   - A missing, non-numeric, or non-scalar `riskcode` is treated as blocking,
 *     not as "informational".
 *
 * Exception scope:
 *   Exceptions are matched on plugin id AND an instance scope (a URL substring),
 *   so a baseline row suppresses only the reviewed instance(s) of a finding, not
 *   every current and future instance of that ZAP rule across all URLs. This
 *   preserves the new-code gate and the "narrowest available scope" policy in
 *   docs/security-scanning.md. A literal `*` in the scope column means
 *   rule-wide and must be justified in review.
 *
 *   Scope is matched against `instances[].uri` (and a legacy top-level `url`),
 *   because ZAP does not put a URL on the alert object itself. A scoped row
 *   applies only when every affected URL falls inside its scope.
 *
 *   Expiry is enforced by `scripts/validate-security-workflow.mjs`, which fails
 *   the lint workflow for a row whose expiry is not a real calendar date or has
 *   passed. Keeping that check in the policy validator means an expired
 *   exception is a reviewable CI failure rather than a silently reopened gate
 *   the next time a scan happens to run.
 *
 * Note: this file is deliberately NOT passed to ZAP via `-c`/`rules_file_name`.
 * ZAP's baseline config parser expects two columns (`id<TAB>action`); our rows
 * carry seven so every suppression is auditable, and handing it to ZAP fails the
 * scan with "too many values to unpack".
 *
 * Usage:
 *   node scripts/check-zap-severity.mjs [report_json.json] [.zap/rules.tsv]
 */
import { readFileSync } from 'node:fs';

const reportPath = process.argv[2] ?? 'report_json.json';
const rulesPath = process.argv[3] ?? '.zap/rules.tsv';

function fail(message) {
  console.error(message);
  process.exit(1);
}

function readJson(path, description) {
  let raw;
  try {
    raw = readFileSync(path, 'utf8');
  } catch (error) {
    fail(`Unable to read ${description} at ${path}: ${error.message}`);
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    fail(`Unable to parse ${description} at ${path}: ${error.message}`);
  }
}

/**
 * Read reviewed exceptions as { pluginId, scope } pairs. `scope` is a URL
 * substring (or `*` for rule-wide). Column layout mirrors the validator:
 *   rule-id  IGNORE  scope  issue-url  owner  expiry  rationale
 */
function readExceptions(path) {
  let contents;
  try {
    contents = readFileSync(path, 'utf8');
  } catch {
    // No rules file means no exceptions — the gate stays strict.
    return [];
  }
  return contents
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split('\t'))
    .filter((columns) => columns[1] === 'IGNORE')
    .map((columns) => ({ pluginId: columns[0]?.trim(), scope: columns[2]?.trim() ?? '' }));
}

/**
 * ZAP's JSON report does not put a URL on the alert itself: it aggregates
 * affected URLs into `instances[].uri` (a `url` field only appears in some
 * hand-written fixtures and older schemas). Read both so a URL-scoped exception
 * actually matches a real report instead of silently never applying.
 */
function urlsOf(alert) {
  const urls = [];
  if (typeof alert?.url === 'string' && alert.url) urls.push(alert.url);
  if (Array.isArray(alert?.instances)) {
    for (const instance of alert.instances) {
      const uri = instance?.uri ?? instance?.url;
      if (typeof uri === 'string' && uri) urls.push(uri);
    }
  }
  return urls;
}

/**
 * An exception suppresses an alert only when every affected URL falls inside its
 * scope. If a rule also fires on a URL the reviewer did not scope, the alert
 * still blocks — that is what keeps a narrow row from silently widening as the
 * app grows. A rule-wide `*` row covers all URLs by definition.
 */
function isException(alert, exceptions) {
  const pluginId = String(alert.pluginid);
  const urls = urlsOf(alert);
  return exceptions.some((exception) => {
    if (exception.pluginId !== pluginId) return false;
    if (exception.scope === '*') return true;
    if (exception.scope.length === 0) return false;
    // A scoped row cannot vouch for an alert with no reported URL at all.
    if (urls.length === 0) return false;
    return urls.every((url) => url.includes(exception.scope));
  });
}

/**
 * ZAP reports risk as a numeric string. Anything that is not a number or a
 * non-empty numeric string is suspicious: `Number(null)`, `Number('')`, and
 * `Number(false)` are all `0`, which would otherwise read as "informational"
 * and silently clear the gate.
 */
function riskcodeOf(alert) {
  const raw = alert?.riskcode;
  if (typeof raw === 'number') return Number.isFinite(raw) ? raw : Number.NaN;
  if (typeof raw !== 'string' || raw.trim() === '') return Number.NaN;
  const value = Number(raw);
  return Number.isFinite(value) ? value : Number.NaN;
}

const report = readJson(reportPath, 'ZAP JSON report');
const exceptions = readExceptions(rulesPath);

// Fail closed on a report shape we do not recognise: ZAP always emits a `site`
// array (even if empty). A missing/non-array `site`, or a `site` entry whose
// `alerts` is not an array, means the report is truncated or schema-changed and
// must not be read as "no findings".
if (report === null || typeof report !== 'object' || !Array.isArray(report.site)) {
  fail('ZAP report is missing the expected "site" array — refusing to pass a malformed report.');
}
for (const site of report.site) {
  if (site === null || typeof site !== 'object' || !Array.isArray(site.alerts)) {
    fail('ZAP report has a site with no "alerts" array — refusing to pass a malformed report.');
  }
}

const alerts = report.site.flatMap((site) => site.alerts);

// A non-numeric riskcode is treated as blocking so a corrupted severity field
// cannot silently downgrade a finding below the gate.
const suspicious = alerts.filter((alert) => Number.isNaN(riskcodeOf(alert)));
if (suspicious.length > 0) {
  console.error('ZAP report has alerts with a missing or non-numeric riskcode:');
  for (const alert of suspicious) {
    console.error(`- [${alert?.pluginid ?? '?'}] ${alert?.alert ?? 'unknown'}: riskcode=${alert?.riskcode}`);
  }
  process.exit(1);
}

const blockingAlerts = alerts.filter((alert) => riskcodeOf(alert) >= 2 && !isException(alert, exceptions));

if (blockingAlerts.length > 0) {
  console.error('ZAP found medium- or high-risk alerts:');
  for (const alert of blockingAlerts) {
    const urls = urlsOf(alert);
    const where = urls.length > 0 ? urls.slice(0, 5).join(', ') : 'no url reported';
    console.error(`- [${alert.pluginid}] ${alert.alert}: ${alert.riskdesc} (${where})`);
  }
  process.exit(1);
}

console.log('ZAP found no unexcepted medium- or high-risk alerts.');
