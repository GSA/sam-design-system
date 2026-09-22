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
import { mkdtempSync, writeFileSync, readFileSync, existsSync, rmSync, mkdirSync } from 'node:fs';
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

test('moves nested ./coverage/<project> directly to coverage-reports/<project>', () => {
  withTempDir((dir) => {
    const nestedDir = join(dir, 'coverage', 'components');
    mkdirSync(nestedDir, { recursive: true });
    writeFileSync(join(nestedDir, 'coverage-summary.json'), JSON.stringify({ total: {} }));

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

test('rejects a project name outside the known allowlist without touching the filesystem', () => {
  withTempDir((dir) => {
    seedCoverageDir(dir);
    writeFileSync(join(dir, 'sentinel.txt'), 'must survive');
    const { status, stderr } = run(['..'], dir);
    assert.equal(status, 1);
    assert.match(stderr, /Unknown project/);
    // The destructive rename must never have run.
    assert.equal(existsSync(join(dir, 'coverage')), true);
    assert.equal(existsSync(join(dir, 'sentinel.txt')), true);
  });
});

test('sanitizes colons out of nested lcov html file and directory names', () => {
  withTempDir((dir) => {
    seedCoverageDir(dir);
    const lcovDir = join(dir, 'coverage', 'lcov-report', 'angular:script');
    mkdirSync(lcovDir, { recursive: true });
    writeFileSync(join(lcovDir, 'global:scripts.js.html'), '<html></html>');

    const { status } = run(['components'], dir);
    assert.equal(status, 0);

    const sanitizedDir = join(dir, 'coverage-reports', 'components', 'lcov-report', 'angular-script');
    assert.equal(existsSync(join(dir, 'coverage-reports', 'components', 'lcov-report', 'angular:script')), false);
    assert.equal(existsSync(sanitizedDir), true);
    assert.equal(existsSync(join(sanitizedDir, 'global-scripts.js.html')), true);
  });
});

test('rewrites HTML links so a renamed index page can still be followed', () => {
  withTempDir((dir) => {
    seedCoverageDir(dir);
    const lcovRoot = join(dir, 'coverage', 'lcov-report');
    const nestedDir = join(lcovRoot, 'angular:script');
    mkdirSync(nestedDir, { recursive: true });
    // A parent index page links to the nested directory's index.html and to
    // a leaf report inside it, exactly as istanbul-reports' html reporter
    // does — using the pre-sanitization, colon-bearing names.
    writeFileSync(join(lcovRoot, 'index.html'), '<a href="angular:script/index.html">angular:script</a>');
    writeFileSync(
      join(nestedDir, 'index.html'),
      '<a href="../index.html">up</a> <a href="global:scripts.js.html">global:scripts.js</a>',
    );
    writeFileSync(join(nestedDir, 'global:scripts.js.html'), '<html>leaf report</html>');

    const { status } = run(['components'], dir);
    assert.equal(status, 0);

    const reportRoot = join(dir, 'coverage-reports', 'components', 'lcov-report');

    // Follow the root index's link to the renamed nested directory.
    const rootHtml = readFileSync(join(reportRoot, 'index.html'), 'utf8');
    const rootLink = rootHtml.match(/href="([^"]+)"/)[1];
    const nestedIndexPath = join(reportRoot, rootLink);
    assert.equal(existsSync(nestedIndexPath), true, `root index links to a path that doesn't exist: ${rootLink}`);

    // Follow that page's link to the renamed leaf report.
    const nestedHtml = readFileSync(nestedIndexPath, 'utf8');
    const leafLink = nestedHtml.match(/href="(?!\.\.\/)([^"]+)"/)[1];
    const leafPath = join(dirname(nestedIndexPath), leafLink);
    assert.equal(existsSync(leafPath), true, `nested index links to a path that doesn't exist: ${leafLink}`);
    assert.equal(readFileSync(leafPath, 'utf8'), '<html>leaf report</html>');
  });
});
