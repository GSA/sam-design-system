#!/usr/bin/env node
/**
 * Tests for the ESLint warning-baseline gate script
 * (scripts/check-lint-baseline.mjs).
 *
 * These run on the Node built-in test runner (no extra deps) by invoking the
 * script as a child process against temp fixture files, so we exercise the
 * real CLI surface (exit codes, --bump, error precedence, malformed
 * baselines) rather than internals.
 *
 * Run: node --test scripts/check-lint-baseline.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, 'check-lint-baseline.mjs');
const baselinePath = resolve(scriptDir, '..', 'eslint-baseline.json');

/** Run the gate, returning { status, stdout, stderr }. */
function run(args) {
  try {
    const stdout = execFileSync('node', [script, ...args], {
      encoding: 'utf8',
    });
    return { status: 0, stdout, stderr: '' };
  } catch (error) {
    return {
      status: error.status ?? 1,
      stdout: error.stdout?.toString() ?? '',
      stderr: error.stderr?.toString() ?? '',
    };
  }
}

/** Writes a minimal ESLint JSON-formatter report with the given totals. */
function writeReport(dir, { errors = 0, warnings = 0 } = {}) {
  const path = join(dir, 'eslint-report.json');
  const results = [];
  if (errors > 0 || warnings > 0) {
    results.push({
      filePath: join(dir, 'fixture.ts'),
      messages: [],
      errorCount: errors,
      warningCount: warnings,
    });
  } else {
    results.push({
      filePath: join(dir, 'fixture.ts'),
      messages: [],
      errorCount: 0,
      warningCount: 0,
    });
  }
  writeFileSync(path, JSON.stringify(results));
  return path;
}

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'lintgate-'));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Runs `fn` with the real eslint-baseline.json swapped for `baselines`,
 * restoring the original afterwards. The script always reads the repo-root
 * baseline file, so we back it up rather than parameterise the path.
 */
function withBaselines(baselines, fn) {
  const backup = readFileSync(baselinePath, 'utf8');
  try {
    writeFileSync(baselinePath, `${JSON.stringify(baselines, null, 2)}\n`);
    return fn();
  } finally {
    writeFileSync(baselinePath, backup);
  }
}

test('passes when warnings are at the baseline', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 10 });
      const { status, stdout } = run(['components', report]);
      assert.equal(status, 0);
      assert.match(stdout, /Lint baseline gate passed/);
    });
  });
});

test('passes when warnings are below the baseline', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 3 });
      const { status } = run(['components', report]);
      assert.equal(status, 0);
    });
  });
});

test('fails and reports expected vs. actual when warnings exceed the baseline', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 11 });
      const { status, stderr } = run(['components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /baseline exceeded/);
      assert.match(stderr, /expected:\s*<=\s*10/);
      assert.match(stderr, /actual:\s*11/);
    });
  });
});

test('fails on any error regardless of the warning count', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { errors: 1, warnings: 0 });
      const { status, stderr } = run(['components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /1 ESLint error/);
    });
  });
});

test('fails on errors even when warnings are within baseline', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { errors: 2, warnings: 5 });
      const { status, stderr } = run(['components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /2 ESLint error/);
    });
  });
});

test('--bump lowers the baseline to the measured warning count', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 6 });
      const { status } = run(['--bump', 'components', report]);
      assert.equal(status, 0);
      const written = JSON.parse(readFileSync(baselinePath, 'utf8'));
      assert.equal(written.components, 6);
      assert.equal(written['documentation'], 4);
    });
  });
});

test('--bump never raises a baseline (ratchet-only)', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 15 });
      const { status, stdout } = run(['--bump', 'components', report]);
      assert.equal(status, 0);
      assert.match(stdout, /nothing to bump/);
      const written = JSON.parse(readFileSync(baselinePath, 'utf8'));
      assert.equal(written.components, 10);
    });
  });
});

test('--bump refuses to run when there are errors', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { errors: 1, warnings: 2 });
      const { status, stderr } = run(['--bump', 'components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /fix errors before bumping/);
      const written = JSON.parse(readFileSync(baselinePath, 'utf8'));
      assert.equal(written.components, 10);
    });
  });
});

test('--bump on an unknown workspace fails loudly instead of silently reporting nothing to bump', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 3 });
      const { status, stderr } = run(['--bump', 'componentsx', report]);
      assert.equal(status, 1);
      assert.match(stderr, /missing or invalid entry/);
      const written = JSON.parse(readFileSync(baselinePath, 'utf8'));
      assert.ok(!('componentsx' in written));
    });
  });
});

test('a missing workspace entry in the baseline file fails loudly', () => {
  withBaselines({ documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 1 });
      const { status, stderr } = run(['components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /missing or invalid entry/);
    });
  });
});

test('a malformed (non-numeric) baseline entry fails loudly', () => {
  withBaselines({ components: 'ten', documentation: 4 }, () => {
    withTempDir((dir) => {
      const report = writeReport(dir, { warnings: 1 });
      const { status, stderr } = run(['components', report]);
      assert.equal(status, 1);
      assert.match(stderr, /missing or invalid entry/);
    });
  });
});

test('exits non-zero when the ESLint report is missing', () => {
  withBaselines({ components: 10, documentation: 4 }, () => {
    const { status, stderr } = run(['components', join(tmpdir(), 'does-not-exist-lintgate.json')]);
    assert.equal(status, 1);
    assert.match(stderr, /Could not read ESLint report/);
  });
});

test('exits non-zero with usage when arguments are missing', () => {
  const { status, stderr } = run([]);
  assert.equal(status, 1);
  assert.match(stderr, /Usage:/);
});
