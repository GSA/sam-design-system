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
