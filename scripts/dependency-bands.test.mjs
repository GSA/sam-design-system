#!/usr/bin/env node
/**
 * Regression lock for the Angular 21 / @gsa-sam upstream dependency bump
 * (GSA/sam-design-system#1617). Asserts the manifests carry the versions
 * the migration requires, rather than re-checking them by hand on every
 * future dependency train.
 *
 * Run: node --test scripts/dependency-bands.test.mjs
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '..');

function readJson(relativePath) {
  return JSON.parse(readFileSync(resolve(repoRoot, relativePath), 'utf8'));
}

const rootPackageJson = readJson('package.json');

const ANGULAR_CORE_PACKAGES = [
  '@angular/animations',
  '@angular/cli',
  '@angular/common',
  '@angular/compiler',
  '@angular/compiler-cli',
  '@angular/core',
  '@angular/forms',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router',
];

test('root package.json pins every @angular/* core package to the 21 line', () => {
  for (const name of ANGULAR_CORE_PACKAGES) {
    const version = rootPackageJson.dependencies[name];
    assert.ok(version, `expected ${name} to be listed in root dependencies`);
    assert.match(version, /^21\./, `expected ${name} to be pinned to the 21.x line, got ${version}`);
  }
});

const ANGULAR_UI_PACKAGES = ['@angular/cdk', '@angular/material'];

test('root package.json pins @angular/cdk and @angular/material to the 21 line', () => {
  for (const name of ANGULAR_UI_PACKAGES) {
    const version = rootPackageJson.dependencies[name];
    assert.ok(version, `expected ${name} to be listed in root dependencies`);
    assert.match(version, /^21\./, `expected ${name} to be pinned to the 21.x line, got ${version}`);
  }
});

const ANGULAR_TOOLCHAIN_PACKAGES = ['@angular/build', '@angular/language-service', 'ng-packagr'];
const ANGULAR_DEVKIT_PACKAGES = ['@angular-devkit/build-angular'];

test('root package.json pins the Angular 21 toolchain and TypeScript 5.9', () => {
  for (const name of ANGULAR_TOOLCHAIN_PACKAGES) {
    const version = rootPackageJson.dependencies[name] ?? rootPackageJson.devDependencies[name];
    assert.ok(version, `expected ${name} to be listed in root dependencies or devDependencies`);
    assert.match(version, /^21\./, `expected ${name} to be pinned to the 21.x line, got ${version}`);
  }

  for (const name of ANGULAR_DEVKIT_PACKAGES) {
    const version = rootPackageJson.dependencies[name];
    assert.ok(version, `expected ${name} to be listed in root dependencies`);
    assert.match(version, /^21\./, `expected ${name} to be pinned to the Angular 21 DevKit line, got ${version}`);
  }

  assert.match(
    rootPackageJson.dependencies['@angular-devkit/architect'],
    /^0\.2102\./,
    `expected @angular-devkit/architect to be pinned to the Angular 21.2 line, got ${rootPackageJson.dependencies['@angular-devkit/architect']}`,
  );

  const typescriptVersion = rootPackageJson.dependencies.typescript ?? rootPackageJson.devDependencies.typescript;
  assert.match(
    typescriptVersion,
    /^5\.9\./,
    `expected TypeScript to be pinned to the 5.9.x line, got ${typescriptVersion}`,
  );
});

const LIB_MANIFESTS = {
  components: 'libs/packages/components/package.json',
  'sam-formly': 'libs/packages/sam-formly/package.json',
  'sam-material-extensions': 'libs/packages/sam-material-extensions/package.json',
};

const ANGULAR_PEER_KEYS = {
  components: [
    '@angular/animations',
    '@angular/cdk',
    '@angular/common',
    '@angular/core',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/router',
  ],
  'sam-formly': [
    '@angular/animations',
    '@angular/common',
    '@angular/core',
    '@angular/forms',
    '@angular/material',
    '@angular/platform-browser',
    '@angular/router',
  ],
  'sam-material-extensions': [
    '@angular/animations',
    '@angular/common',
    '@angular/core',
    '@angular/material',
    '@angular/platform-browser',
    '@angular/router',
  ],
};

test('each library peerDependencies pins its Angular peers to >=21.0.0 <22.0.0', () => {
  for (const [lib, manifestPath] of Object.entries(LIB_MANIFESTS)) {
    const manifest = readJson(manifestPath);
    for (const key of ANGULAR_PEER_KEYS[lib]) {
      const band = manifest.peerDependencies[key];
      assert.equal(
        band,
        '>=21.0.0 <22.0.0',
        `expected ${lib}'s ${key} peer band to be ">=21.0.0 <22.0.0", got ${band}`,
      );
    }
  }
});

test('@gsa-sam/ngx-uswds and ngx-uswds-icons are pinned to ^21.0.0 in root deps and lib peers', () => {
  assert.equal(rootPackageJson.dependencies['@gsa-sam/ngx-uswds'], '^21.0.0');
  assert.equal(rootPackageJson.dependencies['@gsa-sam/ngx-uswds-icons'], '^21.0.0');

  const componentsManifest = readJson(LIB_MANIFESTS.components);
  assert.equal(componentsManifest.peerDependencies['@gsa-sam/ngx-uswds'], '^21.0.0');
  assert.equal(componentsManifest.peerDependencies['@gsa-sam/ngx-uswds-icons'], '^21.0.0');

  const samFormlyManifest = readJson(LIB_MANIFESTS['sam-formly']);
  assert.equal(samFormlyManifest.peerDependencies['@gsa-sam/ngx-uswds'], '^21.0.0');
  assert.equal(samFormlyManifest.peerDependencies['@gsa-sam/ngx-uswds-icons'], '^21.0.0');

  const samMaterialExtensionsManifest = readJson(LIB_MANIFESTS['sam-material-extensions']);
  assert.equal(samMaterialExtensionsManifest.peerDependencies['@gsa-sam/ngx-uswds-icons'], '^21.0.0');
});

test('@gsa-sam/sam-styles is pinned to ^3.1.1 in root dependencies', () => {
  assert.equal(rootPackageJson.dependencies['@gsa-sam/sam-styles'], '^3.1.1');
});

// marked 16 dropped the prebuilt `marked.min.js` UMD bundle from the published
// tarball; only `lib/marked.esm.js` and `lib/marked.umd.js` ship now. The
// site's `build` target listed that file under `scripts`, which is a hard
// webpack resolve, so bumping marked to 17 (required by ngx-markdown 21) broke
// `build-storybook` with "Can't resolve 'node_modules/marked/marked.min.js'"
// and cascaded into the E2E job, whose Playwright webServer builds Storybook.
//
// The global was dead weight regardless: nothing in first-party source reads a
// `window.marked`, and the only consumer of marked is ngx-markdown, which
// imports it as an ES module. Dropping the entry fixes the build without
// changing behavior. This test keeps it from being reintroduced.
test('the site build does not inject marked as a global script', () => {
  const angularJson = readJson('angular.json');
  const scripts = angularJson.projects['sam-design-system-site'].architect.build.options.scripts ?? [];
  for (const entry of scripts) {
    const path = typeof entry === 'string' ? entry : entry.input;
    assert.doesNotMatch(
      path,
      /marked/,
      `expected no marked global-script entry in the site build target, got ${path}. ` +
        'marked is consumed as an ES module via ngx-markdown, and marked >=16 no longer ' +
        'publishes marked.min.js, so a global-script entry breaks the Storybook build.',
    );
  }
});

test('marked and ngx-markdown are on the versions ngx-markdown 21 requires', () => {
  assert.match(
    rootPackageJson.dependencies['marked'],
    /^17\./,
    `expected marked to be pinned to the 17.x line (ngx-markdown 21 peer), got ${rootPackageJson.dependencies['marked']}`,
  );
  assert.match(
    rootPackageJson.dependencies['ngx-markdown'],
    /^21\./,
    `expected ngx-markdown to be pinned to the 21.x line, got ${rootPackageJson.dependencies['ngx-markdown']}`,
  );
});

test('no protractor builder or "ng e2e" target remains in the workspace', () => {
  assert.doesNotMatch(JSON.stringify(readJson('angular.json')), /protractor/i);
  assert.ok(
    !rootPackageJson.scripts['e2e'] && !rootPackageJson.scripts['test:e2e']?.includes('protractor'),
    'expected no protractor-backed e2e script in root package.json',
  );
});

test('lockfile resolves @gsa-sam/* and @angular/* packages from the public npm registry', () => {
  const lockfile = readJson('package-lock.json');
  let checkedAngular = 0;
  let checkedGsaSam = 0;
  for (const [pkgPath, entry] of Object.entries(lockfile.packages)) {
    if (!pkgPath) continue;
    const name = pkgPath.replace(/^node_modules\//, '');
    const isAngular = name.startsWith('@angular/');
    const isGsaSam = name.startsWith('@gsa-sam/');
    if (!isAngular && !isGsaSam) continue;

    assert.ok(entry.resolved, `expected ${name} (${pkgPath}) to have a resolved URL in package-lock.json`);
    assert.match(
      entry.resolved,
      /^https:\/\/registry\.npmjs\.org\//,
      `expected ${name} to resolve from the public npm registry, got ${entry.resolved}`,
    );

    if (isAngular) checkedAngular += 1;
    if (isGsaSam) checkedGsaSam += 1;
  }
  assert.ok(checkedAngular > 0, `expected at least one @angular/* entry to check, found ${checkedAngular}`);
  assert.ok(checkedGsaSam > 0, `expected at least one @gsa-sam/* entry to check, found ${checkedGsaSam}`);
});
