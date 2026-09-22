#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const script = join(scriptDir, 'lint-inventory.mjs');

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

function writeReport(filePath, messages) {
  const fileReport = [
    {
      filePath: 'test.ts',
      errorCount: messages.filter((m) => m.severity === 2).length,
      warningCount: messages.filter((m) => m.severity === 1).length,
      messages,
    },
  ];
  writeFileSync(filePath, JSON.stringify(fileReport));
}

test('generates inventory from explicit project report arguments', (t) => {
  const dir = mkdtempSync(join(tmpdir(), 'lint-inv-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));

  const repA = join(dir, 'rep-a.json');
  writeReport(repA, [
    { ruleId: 'rule-1', severity: 1, message: 'msg1' },
    { ruleId: 'rule-1', severity: 1, message: 'msg1 again' },
    { ruleId: 'rule-2', severity: 1, message: 'msg2' },
  ]);

  const repB = join(dir, 'rep-b.json');
  writeReport(repB, [
    { ruleId: 'rule-3', severity: 2, message: 'err1' },
    { ruleId: 'rule-2', severity: 1, message: 'msg2' },
  ]);

  const result = run(['--json', `projA=${repA}`, `projB=${repB}`]);
  assert.equal(result.status, 0, result.stderr);

  const inventory = JSON.parse(result.stdout);
  assert.equal(inventory.projA.totalWarnings, 3);
  assert.equal(inventory.projA.totalErrors, 0);
  assert.equal(inventory.projA.rules['rule-1'], 2);
  assert.equal(inventory.projA.rules['rule-2'], 1);

  assert.equal(inventory.projB.totalWarnings, 1);
  assert.equal(inventory.projB.totalErrors, 1);
  assert.equal(inventory.projB.rules['rule-3'], 1);
  assert.equal(inventory.projB.rules['rule-2'], 1);
});

test('generates markdown output with --markdown', (t) => {
  const dir = mkdtempSync(join(tmpdir(), 'lint-inv-'));
  t.after(() => rmSync(dir, { recursive: true, force: true }));

  const rep = join(dir, 'rep.json');
  writeReport(rep, [{ ruleId: 'prefer-const', severity: 1, message: 'use const' }]);

  const result = run(['--markdown', `components=${rep}`]);
  assert.equal(result.status, 0);
  assert.match(result.stdout, /### components/);
  assert.match(result.stdout, /prefer-const/);
});

test('fails with clear error if report file does not exist', () => {
  const result = run(['proj=/non/existent/path/report.json']);
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /Could not read ESLint report/);
});
