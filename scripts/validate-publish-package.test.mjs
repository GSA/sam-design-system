#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  EXPECTED_PACKAGES,
  normalizeTag,
  validatePublishableProjects,
  validateManifest,
  validateDistPackage,
} from './validate-publish-package.mjs';

test('EXPECTED_PACKAGES specifies the exact three published packages', () => {
  assert.deepEqual(EXPECTED_PACKAGES.sort(), ['components', 'sam-formly', 'sam-material-extensions']);
});

test('normalizeTag strips an optional leading v', () => {
  assert.equal(normalizeTag('v21.0.0'), '21.0.0');
  assert.equal(normalizeTag('21.0.0'), '21.0.0');
  assert.equal(normalizeTag(null), null);
  assert.equal(normalizeTag(''), null);
});

test('validatePublishableProjects accepts exact three libraries in angular.json', () => {
  const angularJson = {
    projects: {
      components: { projectType: 'library', architect: { build: {} } },
      'sam-material-extensions': { projectType: 'library', architect: { build: {} } },
      'sam-formly': { projectType: 'library', architect: { build: {} } },
      site: { projectType: 'application', architect: { build: {} } },
      documentation: { projectType: 'library' },
    },
  };

  const publishable = validatePublishableProjects(angularJson);
  assert.deepEqual(publishable.sort(), ['components', 'sam-formly', 'sam-material-extensions']);
});

test('validatePublishableProjects rejects if experimental is publishable (#1603)', () => {
  const angularJson = {
    projects: {
      components: { projectType: 'library', architect: { build: {} } },
      'sam-material-extensions': { projectType: 'library', architect: { build: {} } },
      'sam-formly': { projectType: 'library', architect: { build: {} } },
      experimental: { projectType: 'library', architect: { build: {} } },
    },
  };

  assert.throws(() => validatePublishableProjects(angularJson), /experimental must not be configured for publishing/);
});

test('validateManifest passes when manifest matches root version, tag, repo, and peers', () => {
  const manifest = {
    name: '@gsa-sam/sam-formly',
    version: '21.0.0',
    repository: { type: 'git', url: 'https://github.com/GSA/sam-design-system.git' },
    peerDependencies: {
      '@gsa-sam/components': '^21.0.0',
      '@gsa-sam/sam-material-extensions': '^21.0.0',
    },
  };

  const errors = validateManifest('sam-formly', manifest, '21.0.0', '21.0.0');
  assert.deepEqual(errors, []);
});

test('validateManifest flags version mismatch against root or tag', () => {
  const manifest = {
    name: '@gsa-sam/sam-material-extensions',
    version: '19.0.4',
    repository: { type: 'git', url: 'https://github.com/GSA/sam-design-system.git' },
    peerDependencies: {
      '@gsa-sam/components': '^21.0.0',
    },
  };

  const errors = validateManifest('sam-material-extensions', manifest, '21.0.0', '21.0.0');
  assert.ok(errors.some((e) => e.includes('does not match root version')));
  assert.ok(errors.some((e) => e.includes('does not match release tag')));
});

test('validateManifest flags missing or incorrect repository URL (ADR-0011 provenance trap)', () => {
  const manifestNoRepo = {
    name: '@gsa-sam/components',
    version: '21.0.0',
  };

  const errors = validateManifest('components', manifestNoRepo, '21.0.0');
  assert.ok(errors.some((e) => e.includes('repository URL (MISSING) must match')));

  const manifestBadRepo = {
    name: '@gsa-sam/components',
    version: '21.0.0',
    repository: { type: 'git', url: 'https://github.com/someone/other.git' },
  };

  const badErrors = validateManifest('components', manifestBadRepo, '21.0.0');
  assert.ok(badErrors.some((e) => e.includes('must match https://github.com/GSA/sam-design-system.git')));
});

test('validateManifest flags outdated internal peerDependencies', () => {
  const manifest = {
    name: '@gsa-sam/sam-formly',
    version: '21.0.0',
    repository: { type: 'git', url: 'https://github.com/GSA/sam-design-system.git' },
    peerDependencies: {
      '@gsa-sam/components': '^19.0.0',
      '@gsa-sam/sam-material-extensions': '^19.0.0',
    },
  };

  const errors = validateManifest('sam-formly', manifest, '21.0.0');
  assert.ok(errors.some((e) => e.includes('sam-formly peerDependency @gsa-sam/components is "^19.0.0"')));
  assert.ok(errors.some((e) => e.includes('sam-formly peerDependency @gsa-sam/sam-material-extensions is "^19.0.0"')));
});
