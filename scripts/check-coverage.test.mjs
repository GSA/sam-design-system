#!/usr/bin/env node
/**
 * Tests for the coverage gate script (scripts/check-coverage.mjs).
 *
 * These run on the Node built-in test runner (no extra deps) by invoking the
 * script as a child process against a temp working directory (so the
 * per-project `coverage/<project>/coverage-summary.json` paths resolve
 * against fixture files, not the real coverage output), exercising the real
 * CLI surface (exit codes, --bump, malformed floors, multi-project ratchet)
 * rather than internals.
 *
 * Run: node --test scripts/check-coverage.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, 'check-coverage.mjs');
const floorPath = resolve(scriptDir, '..', 'coverage-floor.json');

const PROJECT_SUMMARY_PATHS = {
  components: 'coverage-reports/components/coverage-summary.json',
  'sam-formly': 'coverage-reports/sam-formly/coverage-summary.json',
  'sam-material-extensions': 'coverage-reports/sam-material-extensions/coverage-summary.json',
};

/** Run the gate in `cwd`, returning { status, stdout, stderr }. */
function run(args, cwd) {
  try {
    const stdout = execFileSync('node', [script, ...args], { encoding: 'utf8', cwd });
    return { status: 0, stdout, stderr: '' };
  } catch (error) {
    return {
      status: error.status ?? 1,
      stdout: error.stdout?.toString() ?? '',
      stderr: error.stderr?.toString() ?? '',
    };
  }
}

function writeSummary(cwd, project, pcts) {
  const total = Object.fromEntries(Object.entries(pcts).map(([k, v]) => [k, { pct: v }]));
  const relPath = PROJECT_SUMMARY_PATHS[project];
  const path = join(cwd, relPath);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify({ total }));
}

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'covgate-'));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Runs `fn` with the real coverage-floor.json swapped for `floors`, restoring
 * the original afterwards. The script always reads the repo-root floor file
 * (resolved relative to the script's own location, not `cwd`), so we back it
 * up rather than parameterise the path.
 */
function withFloors(floors, fn) {
  const backup = readFileSync(floorPath, 'utf8');
  try {
    writeFileSync(floorPath, `${JSON.stringify(floors, null, 2)}\n`);
    return fn();
  } finally {
    writeFileSync(floorPath, backup);
  }
}

const FLOORS = {
  components: { statements: 81, branches: 83, functions: 48, lines: 81 },
  'sam-formly': { statements: 60, branches: 60, functions: 10, lines: 60 },
  'sam-material-extensions': { statements: 50, branches: 70, functions: 5, lines: 50 },
};

test('passes when a single project meets its own floor', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
      const { status, stdout } = run(['components'], dir);
      assert.equal(status, 0);
      assert.match(stdout, /Coverage gate passed/);
    });
  });
});

test('fails and names the metric below its floor, scoped to the failing project', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 80, branches: 86, functions: 55, lines: 80 });
      const { status, stderr } = run(['components'], dir);
      assert.equal(status, 1);
      assert.match(stderr, /\[components\] Coverage gate failed/);
      assert.match(stderr, /statements/);
      assert.match(stderr, /lines/);
      assert.doesNotMatch(stderr, /branches\s+8/);
    });
  });
});

test('checking multiple projects: one failing project does not mask a passing one', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
      writeSummary(dir, 'sam-formly', { statements: 10, branches: 10, functions: 1, lines: 10 });
      const { status, stdout, stderr } = run(['components', 'sam-formly'], dir);
      assert.equal(status, 1);
      assert.match(stdout, /components:/);
      assert.match(stderr, /\[sam-formly\] Coverage gate failed/);
    });
  });
});

test('--bump raises only the floors for the projects measured, ratcheting per project', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 90, branches: 90, functions: 90, lines: 90 });
      const { status } = run(['--bump', 'components'], dir);
      assert.equal(status, 0);
      const written = JSON.parse(readFileSync(floorPath, 'utf8'));
      assert.deepEqual(written.components, { statements: 90, branches: 90, functions: 90, lines: 90 });
      // Untouched projects keep their original floors.
      assert.deepEqual(written['sam-formly'], FLOORS['sam-formly']);
      assert.deepEqual(written['sam-material-extensions'], FLOORS['sam-material-extensions']);
    });
  });
});

test('--bump never lowers a floor (ratchet-only)', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 10, branches: 10, functions: 10, lines: 10 });
      const { status, stdout } = run(['--bump', 'components'], dir);
      assert.equal(status, 0);
      assert.match(stdout, /nothing to bump/);
      const written = JSON.parse(readFileSync(floorPath, 'utf8'));
      assert.deepEqual(written.components, FLOORS.components);
    });
  });
});

test('a malformed floor (string/null) fails the gate without emitting NaN', () => {
  const malformed = { ...FLOORS, components: { statements: '81', branches: null, functions: 48, lines: 81 } };
  withFloors(malformed, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
      const { status, stderr, stdout } = run(['components'], dir);
      assert.equal(status, 1);
      assert.match(stderr, /statements: missing or invalid/);
      assert.match(stderr, /branches: missing or invalid/);
      assert.doesNotMatch(stdout + stderr, /NaN/);
    });
  });
});

test('--bump treats a malformed floor as 0 and writes clean numbers', () => {
  const malformed = { ...FLOORS, components: { statements: '81', branches: null, functions: 48, lines: 81 } };
  withFloors(malformed, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
      const { status } = run(['--bump', 'components'], dir);
      assert.equal(status, 0);
      const written = JSON.parse(readFileSync(floorPath, 'utf8'));
      assert.deepEqual(written.components, { statements: 85, branches: 86, functions: 55, lines: 85 });
      for (const value of Object.values(written.components)) {
        assert.ok(Number.isFinite(value));
      }
    });
  });
});

test('exits non-zero when a project coverage summary is missing', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      const { status, stderr } = run(['components'], dir);
      assert.equal(status, 1);
      assert.match(stderr, /Could not read coverage summary/);
    });
  });
});

test('rejects an unknown project name', () => {
  const { status, stderr } = run(['not-a-real-project']);
  assert.equal(status, 1);
  assert.match(stderr, /Unknown project/);
});

test('with no arguments, checks all three known projects', () => {
  withFloors(FLOORS, () => {
    withTempDir((dir) => {
      writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
      writeSummary(dir, 'sam-formly', { statements: 65, branches: 65, functions: 15, lines: 65 });
      writeSummary(dir, 'sam-material-extensions', { statements: 55, branches: 75, functions: 6, lines: 55 });
      const { status, stdout } = run([], dir);
      assert.equal(status, 0);
      assert.match(stdout, /components:/);
      assert.match(stdout, /sam-formly:/);
      assert.match(stdout, /sam-material-extensions:/);
    });
  });
});
