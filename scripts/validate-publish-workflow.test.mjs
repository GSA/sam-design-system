#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateWorkflowContent, REQUIRED_QUALITY_GATES } from './validate-publish-workflow.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workflowPath = resolve(__dirname, '../.github/workflows/publish.yml');
const workflow = readFileSync(workflowPath, 'utf8');

test('publish.yml satisfies all publish workflow security and structure rules', () => {
  const failures = validateWorkflowContent(workflow);
  assert.deepEqual(failures, []);
});

test('validateWorkflowContent rejects tokens and missing quality gates', () => {
  const badWorkflow = workflow.replace(
    'npm ci',
    'npm ci\n        env:\n          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}',
  );
  const failures = validateWorkflowContent(badWorkflow);
  assert.ok(failures.some((f) => f.includes('does not use long-lived npm token secrets')));
});

test('validateWorkflowContent enforces quality gates', () => {
  for (const gate of REQUIRED_QUALITY_GATES) {
    const stripped = workflow.replace(gate, '# removed');
    const failures = validateWorkflowContent(stripped);
    assert.ok(failures.some((f) => f.includes(`quality gates must run: ${gate}`)));
  }
});
