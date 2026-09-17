import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cpSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const tracked = [
  '.github/workflows/security.yml',
  '.github/workflows/ci.yaml',
  '.zap/rules.tsv',
  'docs/security-scanning.md',
  'scripts/check-zap-severity.mjs',
  'scripts/serve-security-scan.mjs',
  'scripts/validate-security-workflow.mjs',
];

function withMirror(mutate) {
  const directory = mkdtempSync(join(tmpdir(), 'security-validator-'));
  try {
    for (const file of tracked) {
      const destination = join(directory, file);
      mkdirSync(dirname(destination), { recursive: true });
      cpSync(join(root, file), destination);
    }
    mutate?.(directory);
    try {
      return {
        status: 0,
        stdout: execFileSync('node', [join(directory, 'scripts/validate-security-workflow.mjs')], {
          cwd: directory,
          encoding: 'utf8',
        }),
      };
    } catch (error) {
      return { status: error.status, stderr: error.stderr.toString() };
    }
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('accepts the tracked security policy', () => {
  assert.equal(withMirror().status, 0);
});

test('rejects an unpinned action and a removed severity gate', () => {
  const result = withMirror((directory) => {
    const workflow = join(directory, '.github/workflows/security.yml');
    writeFileSync(
      workflow,
      readFileSync(workflow, 'utf8')
        .replace(/actions\/checkout@[0-9a-f]{40}/, 'actions/checkout@v4')
        .replace('node scripts/check-zap-severity.mjs report_json.json .zap/rules.tsv', 'true'),
    );
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /SHA-pinned/);
  assert.match(result.stderr, /severity gate/);
});

test('rejects when CI stops running the policy validator', () => {
  const result = withMirror((directory) => {
    const workflow = join(directory, '.github/workflows/ci.yaml');
    writeFileSync(workflow, readFileSync(workflow, 'utf8').replace('npm run validate:security-workflow', 'true'));
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /CI workflow/);
});

const rulesRow = (overrides = {}) => {
  const row = {
    ruleId: '10055',
    action: 'IGNORE',
    scope: '*',
    issue: 'https://github.com/GSA/sam-design-system/issues/1633',
    owner: 'sam-design-system maintainers',
    expiry: '2099-01-01',
    rationale: 'reviewed toolchain finding',
    ...overrides,
  };
  return [row.ruleId, row.action, row.scope, row.issue, row.owner, row.expiry, row.rationale].join('\t');
};

function withRules(row) {
  return withMirror((directory) => {
    writeFileSync(join(directory, '.zap/rules.tsv'), `# header\n${row}\n`);
  });
}

test('accepts a well-formed, unexpired exception row', () => {
  assert.equal(withRules(rulesRow()).status, 0);
});

test('rejects an exception row whose expiry has passed', () => {
  const result = withRules(rulesRow({ expiry: '2020-01-01' }));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /unexpired ZAP exception row/);
});

test('rejects an expiry that is not a real calendar date', () => {
  // A bare regex would accept both of these.
  for (const expiry of ['2027-02-30', '9999-99-99', 'someday', '']) {
    const result = withRules(rulesRow({ expiry }));
    assert.equal(result.status, 1, `expected exit 1 for expiry=${expiry}`);
    assert.match(result.stderr, /unexpired ZAP exception row/);
  }
});

test('rejects an exception row missing a scope, owner, issue, or rationale', () => {
  for (const overrides of [
    { scope: '' },
    { owner: '' },
    { rationale: '' },
    { issue: 'https://example.com/not-an-issue' },
    { issue: 'https://github.com/GSA/ngx-uswds/issues/272' },
    { ruleId: 'not-a-rule-id' },
    { action: 'WARN' },
  ]) {
    const result = withRules(rulesRow(overrides));
    assert.equal(result.status, 1, `expected exit 1 for ${JSON.stringify(overrides)}`);
    assert.match(result.stderr, /ZAP exception row/);
  }
});

test('rejects an exception row with extra columns', () => {
  const result = withRules(`${rulesRow()}\tunexpected-eighth-column`);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /ZAP exception row/);
});

test('rejects a severity gate that stops failing closed on a bad riskcode', () => {
  const result = withMirror((directory) => {
    const gate = join(directory, 'scripts/check-zap-severity.mjs');
    writeFileSync(gate, readFileSync(gate, 'utf8').replace('Number.isNaN(riskcodeOf(alert))', 'false /* disabled */'));
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /fails closed/);
});

test('rejects documentation that drops the exception rationale and expiry policy', () => {
  const result = withMirror((directory) => {
    const docs = join(directory, 'docs/security-scanning.md');
    writeFileSync(
      docs,
      readFileSync(docs, 'utf8')
        .replace(/rationale/gi, 'reason')
        .replace(/expir\w*/gi, 'lapses'),
    );
  });
  assert.equal(result.status, 1);
  assert.match(result.stderr, /rationale and expiry/);
});
