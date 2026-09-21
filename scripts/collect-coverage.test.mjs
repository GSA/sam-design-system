#!/usr/bin/env node
/**
 * Tests for the coverage-relocation script (scripts/collect-coverage.mjs).
 *
 * Run as a child process against a temp working directory so we exercise the
 * real CLI surface (argument validation, move semantics, overwrite behavior)
 * without touching the repo's own coverage output.
 *
 * Run: node --test scripts/collect-coverage.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, 'collect-coverage.mjs');

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

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'covcollect-'));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

function seedCoverageDir(cwd) {
  const coverageDir = join(cwd, 'coverage');
  mkdirSync(coverageDir, { recursive: true });
  writeFileSync(join(coverageDir, 'coverage-summary.json'), JSON.stringify({ total: {} }));
}

test('moves ./coverage to coverage-reports/<project>', () => {
  withTempDir((dir) => {
    seedCoverageDir(dir);
    const { status, stdout } = run(['components'], dir);
    assert.equal(status, 0);
    assert.match(stdout, /Moved coverage report/);
    assert.equal(existsSync(join(dir, 'coverage')), false);
    assert.equal(existsSync(join(dir, 'coverage-reports', 'components', 'coverage-summary.json')), true);
  });
});

test('overwrites a pre-existing destination for the same project', () => {
  withTempDir((dir) => {
    mkdirSync(join(dir, 'coverage-reports', 'components'), { recursive: true });
    writeFileSync(join(dir, 'coverage-reports', 'components', 'stale.txt'), 'stale');
    seedCoverageDir(dir);
    const { status } = run(['components'], dir);
    assert.equal(status, 0);
    assert.equal(existsSync(join(dir, 'coverage-reports', 'components', 'stale.txt')), false);
    assert.equal(existsSync(join(dir, 'coverage-reports', 'components', 'coverage-summary.json')), true);
  });
});

test('does not disturb a different project already collected', () => {
  withTempDir((dir) => {
    mkdirSync(join(dir, 'coverage-reports', 'sam-formly'), { recursive: true });
    writeFileSync(join(dir, 'coverage-reports', 'sam-formly', 'coverage-summary.json'), '{"total":{}}');
    seedCoverageDir(dir);
    const { status } = run(['components'], dir);
    assert.equal(status, 0);
    assert.equal(existsSync(join(dir, 'coverage-reports', 'sam-formly', 'coverage-summary.json')), true);
    assert.equal(existsSync(join(dir, 'coverage-reports', 'components', 'coverage-summary.json')), true);
  });
});

test('fails with a clear message when no coverage directory exists', () => {
  withTempDir((dir) => {
    const { status, stderr } = run(['components'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /No coverage output found/);
  });
});

test('fails when no project name is given', () => {
  const { status, stderr } = run([]);
  assert.equal(status, 1);
  assert.match(stderr, /Usage:/);
});
