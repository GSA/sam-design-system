import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const WORKFLOW_PATH = '.github/workflows/dependabot-auto-merge.yml';
const CONFIG_PATH = '.github/dependabot.yml';

test('dependabot.yml is present and matches the team standard', () => {
  assert.ok(existsSync(CONFIG_PATH), `${CONFIG_PATH} must exist`);
  const raw = readFileSync(CONFIG_PATH, 'utf8');

  assert.match(raw, /^version:\s*2/m, 'version must be 2');
  assert.match(raw, /package-ecosystem:\s*['"]npm['"]/, 'must configure npm ecosystem');
  assert.match(raw, /interval:\s*['"]weekly['"]/, 'must run on weekly interval');
  assert.match(raw, /open-pull-requests-limit:\s*10/, 'must limit open PRs to 10');
  assert.match(raw, /default-days:\s*5/, 'must set cooldown default-days to 5');
  assert.match(raw, /semver-major-days:\s*60/, 'must set cooldown semver-major-days to 60');

  // Groups
  assert.match(
    raw,
    /minor:\s*\n\s+patterns:\s*\n\s+-\s*['"]?\*['"]?\s*\n\s+update-types:\s*\n\s+-\s*['"]minor['"]/,
    'minor group must exist'
  );
  assert.match(
    raw,
    /patch:\s*\n\s+patterns:\s*\n\s+-\s*['"]?\*['"]?\s*\n\s+update-types:\s*\n\s+-\s*['"]patch['"]/,
    'patch group must exist'
  );
  assert.doesNotMatch(raw, /update-types:\s*\n\s+-\s*['"]major['"]/, 'major updates must NOT be grouped');

  // github-actions
  assert.match(raw, /package-ecosystem:\s*['"]github-actions['"]/, 'must configure github-actions ecosystem');
  assert.match(
    raw,
    /github-actions:\s*\n\s+patterns:\s*\n\s+-\s*['"]?\*['"]?/,
    'must configure grouped github-actions'
  );
});

test('dependabot-auto-merge.yml is present, gated, and least-privilege', () => {
  assert.ok(existsSync(WORKFLOW_PATH), `${WORKFLOW_PATH} must exist`);
  const raw = readFileSync(WORKFLOW_PATH, 'utf8');

  assert.match(raw, /^name:\s*Dependabot auto-merge/m, 'workflow name must match');
  assert.match(raw, /^on:\s*pull_request/m, 'must trigger on pull_request');
  assert.match(
    raw,
    /permissions:\s*\n\s+contents:\s*write\s*\n\s+pull-requests:\s*write/,
    'least-privilege write permissions'
  );
  assert.match(raw, /if:\s*github\.actor\s*==\s*['"]dependabot\[bot\]['"]/, 'must gate job on dependabot[bot]');
  assert.match(
    raw,
    /uses:\s*dependabot\/fetch-metadata@[0-9a-f]{40}\s+#\s*v3\.1\.0/,
    'must use SHA-pinned fetch-metadata'
  );
  assert.match(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-minor['"]/,
    'must allow semver-minor'
  );
  assert.match(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-patch['"]/,
    'must allow semver-patch'
  );
  assert.doesNotMatch(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-major['"]/,
    'must NOT allow semver-major'
  );
  assert.match(raw, /gh pr merge --auto --squash/, 'must execute gh pr merge --auto --squash');
});
