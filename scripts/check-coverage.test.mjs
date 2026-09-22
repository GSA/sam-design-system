#!/usr/bin/env node
/**
 * Tests for the coverage gate script (scripts/check-coverage.mjs).
 *
 * These run on the Node built-in test runner (no extra deps) by invoking the
 * script as a child process against a temp working directory (so the
 * per-project `coverage-reports/<project>/coverage-summary.json` paths and
 * each project's `libs/packages/<project>/coverage-floor.json` resolve
 * against fixture files, not the real repo), exercising the real CLI surface
 * (exit codes, --bump, malformed floors, multi-project ratchet) rather than
 * internals.
 *
 * Run: node --test scripts/check-coverage.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, 'check-coverage.mjs');

const PROJECT_PATHS = {
  components: {
    summary: 'coverage-reports/components/coverage-summary.json',
    floor: 'libs/packages/components/coverage-floor.json',
  },
  'sam-formly': {
    summary: 'coverage-reports/sam-formly/coverage-summary.json',
    floor: 'libs/packages/sam-formly/coverage-floor.json',
  },
  'sam-material-extensions': {
    summary: 'coverage-reports/sam-material-extensions/coverage-summary.json',
    floor: 'libs/packages/sam-material-extensions/coverage-floor.json',
  },
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
  const path = join(cwd, PROJECT_PATHS[project].summary);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify({ total }));
}

function writeFloor(cwd, project, floor) {
  const path = join(cwd, PROJECT_PATHS[project].floor);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, JSON.stringify(floor));
}

function readFloor(cwd, project) {
  return JSON.parse(readFileSync(join(cwd, PROJECT_PATHS[project].floor), 'utf8'));
}

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'covgate-'));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const FLOORS = {
  components: { statements: 81, branches: 83, functions: 48, lines: 81 },
  'sam-formly': { statements: 60, branches: 60, functions: 10, lines: 60 },
  'sam-material-extensions': { statements: 50, branches: 70, functions: 5, lines: 50 },
};

function seedFloors(dir, floors = FLOORS) {
  for (const [project, floor] of Object.entries(floors)) {
    writeFloor(dir, project, floor);
  }
}

test('passes when a single project meets its own floor', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
    const { status, stdout } = run(['components'], dir);
    assert.equal(status, 0);
    assert.match(stdout, /Coverage gate passed/);
  });
});

test('fails and names the metric below its floor, scoped to the failing project', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    writeSummary(dir, 'components', { statements: 80, branches: 86, functions: 55, lines: 80 });
    const { status, stderr } = run(['components'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /\[components\] Coverage gate failed/);
    assert.match(stderr, /statements/);
    assert.match(stderr, /lines/);
    assert.doesNotMatch(stderr, /branches\s+8/);
  });
});

test('checking multiple projects: one failing project does not mask a passing one', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
    writeSummary(dir, 'sam-formly', { statements: 10, branches: 10, functions: 1, lines: 10 });
    const { status, stdout, stderr } = run(['components', 'sam-formly'], dir);
    assert.equal(status, 1);
    assert.match(stdout, /components:/);
    assert.match(stderr, /\[sam-formly\] Coverage gate failed/);
  });
});

test('--bump raises only the floor file for the project measured, ratcheting per project', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    writeSummary(dir, 'components', { statements: 90, branches: 90, functions: 90, lines: 90 });
    const { status } = run(['--bump', 'components'], dir);
    assert.equal(status, 0);
    assert.deepEqual(readFloor(dir, 'components'), { statements: 90, branches: 90, functions: 90, lines: 90 });
    // Untouched projects' floor files are not written at all.
    assert.deepEqual(readFloor(dir, 'sam-formly'), FLOORS['sam-formly']);
    assert.deepEqual(readFloor(dir, 'sam-material-extensions'), FLOORS['sam-material-extensions']);
  });
});

test('--bump never lowers a floor (ratchet-only)', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    writeSummary(dir, 'components', { statements: 10, branches: 10, functions: 10, lines: 10 });
    const { status, stdout } = run(['--bump', 'components'], dir);
    assert.equal(status, 0);
    assert.match(stdout, /nothing to bump/);
    assert.deepEqual(readFloor(dir, 'components'), FLOORS.components);
  });
});

test('a malformed floor (string/null) fails the gate without emitting NaN', () => {
  withTempDir((dir) => {
    seedFloors(dir, { ...FLOORS, components: { statements: '81', branches: null, functions: 48, lines: 81 } });
    writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
    const { status, stderr, stdout } = run(['components'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /statements: missing or invalid/);
    assert.match(stderr, /branches: missing or invalid/);
    assert.doesNotMatch(stdout + stderr, /NaN/);
  });
});

test('--bump treats a malformed floor as 0 and writes clean numbers', () => {
  withTempDir((dir) => {
    seedFloors(dir, { ...FLOORS, components: { statements: '81', branches: null, functions: 48, lines: 81 } });
    writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
    const { status } = run(['--bump', 'components'], dir);
    assert.equal(status, 0);
    const written = readFloor(dir, 'components');
    assert.deepEqual(written, { statements: 85, branches: 86, functions: 55, lines: 85 });
    for (const value of Object.values(written)) {
      assert.ok(Number.isFinite(value));
    }
  });
});

test('exits non-zero when a project coverage summary is missing', () => {
  withTempDir((dir) => {
    seedFloors(dir);
    const { status, stderr } = run(['components'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /Could not read coverage summary/);
  });
});

test('exits non-zero when a project floor file is missing', () => {
  withTempDir((dir) => {
    writeSummary(dir, 'components', { statements: 85, branches: 86, functions: 55, lines: 85 });
    const { status, stderr } = run(['components'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /Could not read coverage floor/);
    assert.equal(existsSync(join(dir, PROJECT_PATHS.components.floor)), false);
  });
});

test('rejects an unknown project name', () => {
  const { status, stderr } = run(['not-a-real-project']);
  assert.equal(status, 1);
  assert.match(stderr, /Unknown project/);
});

test('with no arguments, checks all three known projects', () => {
  withTempDir((dir) => {
    seedFloors(dir);
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
