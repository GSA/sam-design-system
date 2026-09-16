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
