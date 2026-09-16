#!/usr/bin/env node
import { readFileSync } from 'node:fs';

const [reportPath = 'report_json.json', rulesPath = '.zap/rules.tsv'] = process.argv.slice(2);

function fail(message) {
  console.error(message);
  process.exit(1);
}

let report;
try {
  report = JSON.parse(readFileSync(reportPath, 'utf8'));
} catch (error) {
  fail(`Unable to read or parse ZAP JSON report: ${error.message}`);
}

if (report === null || typeof report !== 'object' || !Array.isArray(report.site)) {
  fail('ZAP report is missing the expected "site" array.');
}
if (report.site.some((site) => site === null || typeof site !== 'object' || !Array.isArray(site.alerts))) {
  fail('ZAP report has a site with no "alerts" array.');
}

let exceptions = [];
try {
  exceptions = readFileSync(rulesPath, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => line.split('\t'))
    .filter((columns) => columns[1] === 'IGNORE')
    .map(([pluginId, , scope]) => ({ pluginId, scope }));
} catch {
  // The absence of a baseline means no exceptions, never a weaker gate.
}

const alerts = report.site.flatMap((site) => site.alerts);
const invalidRisk = alerts.filter((alert) => !Number.isFinite(Number(alert.riskcode)));
if (invalidRisk.length > 0) {
  fail('ZAP report has alerts with a missing or non-numeric riskcode.');
}

const blocking = alerts.filter((alert) => {
  if (Number(alert.riskcode) < 2) return false;
  return !exceptions.some(
    ({ pluginId, scope }) =>
      pluginId === String(alert.pluginid) && (scope === '*' || (scope && String(alert.url ?? '').includes(scope))),
  );
});

if (blocking.length > 0) {
  console.error('ZAP found medium- or high-risk alerts:');
  for (const alert of blocking)
    console.error(`- [${alert.pluginid}] ${alert.alert}: ${alert.riskdesc} (${alert.url ?? 'no URL'})`);
  process.exit(1);
}

console.log('ZAP found no unexcepted medium- or high-risk alerts.');
