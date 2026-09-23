#!/usr/bin/env node
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { updatePackageVersion, main, INTERNAL_PACKAGES } = require('../tools/scripts/update-libs-version.js');

test('INTERNAL_PACKAGES lists all three published design-system libraries', () => {
  assert.deepEqual(INTERNAL_PACKAGES.sort(), [
    '@gsa-sam/components',
    '@gsa-sam/sam-formly',
    '@gsa-sam/sam-material-extensions',
  ]);
});

test('updatePackageVersion updates version and internal peerDependencies in lockstep', () => {
  const manifest = {
    name: '@gsa-sam/sam-formly',
    version: '19.0.0',
    peerDependencies: {
      '@angular/core': '>=21.0.0 <22.0.0',
      '@gsa-sam/components': '^19.0.0',
      '@gsa-sam/sam-material-extensions': '^19.0.0',
      rxjs: '^7.5.0',
    },
  };

  const updated = updatePackageVersion(manifest, '21.0.0');

  assert.equal(updated.version, '21.0.0');
  assert.equal(updated.peerDependencies['@gsa-sam/components'], '^21.0.0');
  assert.equal(updated.peerDependencies['@gsa-sam/sam-material-extensions'], '^21.0.0');
  assert.equal(updated.peerDependencies['@angular/core'], '>=21.0.0 <22.0.0');
  assert.equal(updated.peerDependencies['rxjs'], '^7.5.0');
  assert.equal(manifest.version, '19.0.0', 'original manifest must not be mutated');
});

test('updatePackageVersion handles packages with no peerDependencies', () => {
  const manifest = {
    name: '@gsa-sam/components',
    version: '19.0.0',
  };

  const updated = updatePackageVersion(manifest, '21.0.0');
  assert.equal(updated.version, '21.0.0');
  assert.equal(updated.peerDependencies, undefined);
});

test('main bumps every library discovered in angular.json', () => {
  const tempDir = mkdtempSync(join(tmpdir(), 'sds-bump-test-'));

  try {
    const angularJson = {
      projects: {
        components: {
          projectType: 'library',
          root: 'libs/packages/components',
          architect: { build: {} },
        },
        'sam-formly': {
          projectType: 'library',
          root: 'libs/packages/sam-formly',
          architect: { build: {} },
        },
        site: {
          projectType: 'application',
          root: 'apps/site',
          architect: { build: {} },
        },
      },
    };

    writeFileSync(join(tempDir, 'angular.json'), JSON.stringify(angularJson, null, 2));

    mkdirSync(join(tempDir, 'libs/packages/components'), { recursive: true });
    mkdirSync(join(tempDir, 'libs/packages/sam-formly'), { recursive: true });

    writeFileSync(
      join(tempDir, 'libs/packages/components/package.json'),
      JSON.stringify({ name: '@gsa-sam/components', version: '19.0.0' }, null, 2),
    );
    writeFileSync(
      join(tempDir, 'libs/packages/sam-formly/package.json'),
      JSON.stringify(
        {
          name: '@gsa-sam/sam-formly',
          version: '19.0.0',
          peerDependencies: { '@gsa-sam/components': '^19.0.0' },
        },
        null,
        2,
      ),
    );

    main(tempDir, '21.0.0');

    const compPkg = JSON.parse(readFileSync(join(tempDir, 'libs/packages/components/package.json'), 'utf8'));
    const formlyPkg = JSON.parse(readFileSync(join(tempDir, 'libs/packages/sam-formly/package.json'), 'utf8'));

    assert.equal(compPkg.version, '21.0.0');
    assert.equal(formlyPkg.version, '21.0.0');
    assert.equal(formlyPkg.peerDependencies['@gsa-sam/components'], '^21.0.0');
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }
});
