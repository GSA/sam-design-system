import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import yaml from 'js-yaml';

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
    'minor group must exist',
  );
  assert.match(
    raw,
    /patch:\s*\n\s+patterns:\s*\n\s+-\s*['"]?\*['"]?\s*\n\s+update-types:\s*\n\s+-\s*['"]patch['"]/,
    'patch group must exist',
  );
  assert.doesNotMatch(raw, /^\s*major:\s*$/m, 'major group must NOT exist');
  const updateTypesBlocks = raw.match(/update-types:\s*(?:\n\s+-\s*['"]?[^\n]+)+/g) ?? [];
  for (const block of updateTypesBlocks) {
    assert.doesNotMatch(block, /['"]?major['"]?/, 'major updates must NOT be grouped in any update-types list');
  }

  // github-actions
  assert.match(raw, /package-ecosystem:\s*['"]github-actions['"]/, 'must configure github-actions ecosystem');
  assert.match(
    raw,
    /github-actions:\s*\n\s+patterns:\s*\n\s+-\s*['"]?\*['"]?/,
    'must configure grouped github-actions',
  );

  // Angular 21 toolchain pins: ignore Angular 22 and TypeScript 6+ while pinned to Angular 21.
  // Verify that ignore rules are specifically configured on the npm ecosystem update block.
  const parsed = yaml.load(raw);
  const npmUpdate = parsed?.updates?.find((entry) => entry?.['package-ecosystem'] === 'npm');
  assert.ok(npmUpdate, 'npm update configuration must exist in updates');

  const EXPECTED_IGNORES = [
    { name: '@angular-devkit/architect', versions: ['>= 0.2200.0'] },
    { name: '@angular/*', versions: ['>= 22.0.0'] },
    { name: '@angular-devkit/*', versions: ['>= 0.2200.0 < 1.0.0', '>= 22.0.0'] },
    { name: '@gsa-sam/*', versions: ['>= 22.0.0'] },
    { name: 'angular-eslint', versions: ['>= 22.0.0'] },
    { name: 'ng-packagr', versions: ['>= 22.0.0'] },
    { name: 'ngx-markdown', versions: ['>= 22.0.0'] },
    { name: 'typescript', versions: ['>= 6.0.0'] },
  ];

  for (const { name, versions } of EXPECTED_IGNORES) {
    const entry = npmUpdate?.ignore?.find((item) => item?.['dependency-name'] === name);
    assert.ok(entry, `npm update block must have an ignore entry for ${name}`);
    assert.deepEqual(
      entry?.versions,
      versions,
      `must ignore ${name} versions ${versions.join(', ')} in npm updates while pinned to Angular 21`,
    );
  }
});

test('dependabot-auto-merge.yml is present, gated, and least-privilege', () => {
  assert.ok(existsSync(WORKFLOW_PATH), `${WORKFLOW_PATH} must exist`);
  const raw = readFileSync(WORKFLOW_PATH, 'utf8');

  assert.match(raw, /^name:\s*Dependabot auto-merge/m, 'workflow name must match');
  assert.match(raw, /^on:\s*pull_request/m, 'must trigger on pull_request');
  assert.match(
    raw,
    /permissions:\s*\n\s+contents:\s*write\s*\n\s+pull-requests:\s*write/,
    'least-privilege write permissions',
  );
  assert.match(raw, /if:\s*github\.actor\s*==\s*['"]dependabot\[bot\]['"]/, 'must gate job on dependabot[bot]');
  assert.match(
    raw,
    /uses:\s*dependabot\/fetch-metadata@[0-9a-f]{40}\s+#\s*v3\.1\.0/,
    'must use SHA-pinned fetch-metadata',
  );
  assert.match(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-minor['"]/,
    'must allow semver-minor',
  );
  assert.match(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-patch['"]/,
    'must allow semver-patch',
  );
  assert.doesNotMatch(
    raw,
    /steps\.metadata\.outputs\.update-type\s*==\s*['"]version-update:semver-major['"]/,
    'must NOT allow semver-major',
  );
  assert.match(raw, /gh pr merge --auto --squash/, 'must execute gh pr merge --auto --squash');
});
