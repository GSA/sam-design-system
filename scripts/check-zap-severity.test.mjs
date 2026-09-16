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

test('fails closed for malformed reports and severity values', () => {
  assert.equal(run({}).status, 1);
  assert.equal(run(reportWith([{ ...alert('not-a-risk') }])).status, 1);
});
