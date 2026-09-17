import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const script = new URL('./check-zap-severity.mjs', import.meta.url);

function run(report, rules = '') {
  const dir = mkdtempSync(join(tmpdir(), 'zap-gate-'));
  try {
    const reportPath = join(dir, 'report.json');
    const rulesPath = join(dir, 'rules.tsv');
    writeFileSync(reportPath, JSON.stringify(report));
    writeFileSync(rulesPath, rules);
    try {
      return {
        status: 0,
        stdout: execFileSync('node', [script.pathname, reportPath, rulesPath], { encoding: 'utf8' }),
      };
    } catch (error) {
      return { status: error.status, stderr: error.stderr.toString() };
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const alert = (riskcode, url = 'http://127.0.0.1:4200/') => ({
  pluginid: '10055',
  alert: 'CSP',
  riskcode,
  riskdesc: 'risk',
  url,
});
const reportWith = (alerts) => ({ site: [{ alerts }] });

test('permits informational and low ZAP alerts', () => {
  const result = run(reportWith([alert('0'), alert('1')]));
  assert.equal(result.status, 0);
});

test('fails on unexcepted medium and high ZAP alerts', () => {
  for (const risk of ['2', '3']) {
    const result = run(reportWith([alert(risk)]));
    assert.equal(result.status, 1);
    assert.match(result.stderr, /medium- or high-risk/);
  }
});

test('permits only the URL-scoped reviewed exception', () => {
  const rules =
    '10055\tIGNORE\t/docs\thttps://github.com/GSA/sam-design-system/issues/1611\tmaintainers\t2027-12-31\tlegacy Angular inline style';
  assert.equal(run(reportWith([alert('2', 'http://127.0.0.1:4200/docs')]), rules).status, 0);
  assert.equal(run(reportWith([alert('2', 'http://127.0.0.1:4200/other')]), rules).status, 1);
});

test('scopes exceptions against ZAP instances[].uri, not just a top-level url', () => {
  // Real ZAP reports carry no `url` on the alert; affected URLs live in
  // `instances[].uri`. A scoped row must still match those.
  const rules =
    '10055\tIGNORE\t/docs\thttps://github.com/GSA/sam-design-system/issues/1611\tmaintainers\t2027-12-31\tscoped to docs';
  const withInstances = (uris) => {
    const { url, ...rest } = alert('2');
    return reportWith([{ ...rest, instances: uris.map((uri) => ({ uri })) }]);
  };
  assert.equal(run(withInstances(['http://127.0.0.1:4200/docs/intro']), rules).status, 0);
  assert.equal(run(withInstances(['http://127.0.0.1:4200/other']), rules).status, 1);
  // Mixed instances: one URL outside the reviewed scope still blocks.
  assert.equal(run(withInstances(['http://127.0.0.1:4200/docs', 'http://127.0.0.1:4200/other']), rules).status, 1);
  // No URL at all cannot be vouched for by a scoped row.
  assert.equal(run(withInstances([]), rules).status, 1);
});

test('a rule-wide exception covers an alert regardless of reported URLs', () => {
  const rules =
    '10055\tIGNORE\t*\thttps://github.com/GSA/sam-design-system/issues/1633\tmaintainers\t2027-12-31\tjustified rule-wide';
  const { url, ...rest } = alert('2');
  assert.equal(run(reportWith([{ ...rest, instances: [{ uri: 'http://127.0.0.1:4200/anything' }] }]), rules).status, 0);
  assert.equal(run(reportWith([rest]), rules).status, 0);
});

test('fails closed for malformed reports and severity values', () => {
  assert.equal(run({}).status, 1);
  assert.equal(run(reportWith([{ ...alert('not-a-risk') }])).status, 1);
});

test('fails closed for a malformed report shape rather than reporting no findings', () => {
  // ZAP always emits a `site` array; a truncated or schema-changed report must
  // not be read as "no findings".
  for (const report of [{ site: null }, { site: {} }, { site: [{ alerts: null }] }, { site: [null] }, null]) {
    const result = run(report);
    assert.equal(result.status, 1, `expected exit 1 for ${JSON.stringify(report)}`);
    assert.match(result.stderr, /malformed report/);
  }
});

test('treats non-scalar and empty risk values as blocking, not informational', () => {
  // Number(null), Number('') and Number(false) are all 0, which would otherwise
  // read as "informational" and silently clear the gate.
  for (const risk of [null, '', '   ', false, true, {}, []]) {
    const result = run(reportWith([{ ...alert('1'), riskcode: risk }]));
    assert.equal(result.status, 1, `expected exit 1 for riskcode=${JSON.stringify(risk)}`);
    assert.match(result.stderr, /missing or non-numeric riskcode/);
  }
});

test('treats a missing riskcode field as blocking', () => {
  const { riskcode, ...withoutRisk } = alert('1');
  const result = run(reportWith([withoutRisk]));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /missing or non-numeric riskcode/);
});

test('a missing rules file yields no exceptions rather than a weaker gate', () => {
  // Exercised by pointing the gate at a rules path that does not exist.
  const dir = mkdtempSync(join(tmpdir(), 'zap-gate-norules-'));
  try {
    const reportPath = join(dir, 'report.json');
    writeFileSync(reportPath, JSON.stringify(reportWith([alert('2')])));
    assert.throws(() =>
      execFileSync('node', [script.pathname, reportPath, join(dir, 'absent.tsv')], { encoding: 'utf8' }),
    );
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});
