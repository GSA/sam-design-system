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
    assert.match(
      version,
      /^21\./,
      `expected ${name} to be pinned to the 21.x line, got ${version}`,
    );
  }
});

const ANGULAR_UI_PACKAGES = ['@angular/cdk', '@angular/material'];

test('root package.json pins @angular/cdk and @angular/material to the 21 line', () => {
  for (const name of ANGULAR_UI_PACKAGES) {
    const version = rootPackageJson.dependencies[name];
    assert.ok(version, `expected ${name} to be listed in root dependencies`);
    assert.match(
      version,
      /^21\./,
      `expected ${name} to be pinned to the 21.x line, got ${version}`,
    );
  }
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
  assert.equal(
    samMaterialExtensionsManifest.peerDependencies['@gsa-sam/ngx-uswds-icons'],
    '^21.0.0',
  );
});

test('@gsa-sam/sam-styles is pinned to ^3.1.1 in root dependencies', () => {
  assert.equal(rootPackageJson.dependencies['@gsa-sam/sam-styles'], '^3.1.1');
});
