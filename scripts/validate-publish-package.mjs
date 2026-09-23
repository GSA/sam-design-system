#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DEFAULT_REPO_ROOT = resolve(__dirname, '..');

export const EXPECTED_PACKAGES = ['components', 'sam-material-extensions', 'sam-formly'];
export const EXPECTED_REPO_REGEX = /^(git\+)?https:\/\/github\.com\/GSA\/sam-design-system(\.git)?$/;

export function normalizeTag(tag) {
  if (!tag) return null;
  return tag.replace(/^v/, '');
}

export function validatePublishableProjects(angularJson) {
  const publishable = Object.keys(angularJson.projects || {}).filter((name) => {
    const proj = angularJson.projects[name];
    return proj.projectType === 'library' && proj.architect?.build;
  });

  const sortedActual = [...publishable].sort();
  const sortedExpected = [...EXPECTED_PACKAGES].sort();

  if (JSON.stringify(sortedActual) !== JSON.stringify(sortedExpected)) {
    throw new Error(
      `angular.json publishable libraries mismatch.\n` +
        `Expected: [${sortedExpected.join(', ')}]\n` +
        `Actual:   [${sortedActual.join(', ')}]\n` +
        (sortedActual.includes('experimental')
          ? 'Error: @gsa-sam/experimental must not be configured for publishing (removed per #1603).'
          : ''),
    );
  }

  return publishable;
}

export function validateManifest(pkgName, manifest, expectedVersion, normalizedTag = null) {
  const errors = [];

  if (manifest.version !== expectedVersion) {
    errors.push(`Package ${pkgName} version (${manifest.version}) does not match root version (${expectedVersion}).`);
  }

  if (normalizedTag && manifest.version !== normalizedTag) {
    errors.push(`Package ${pkgName} version (${manifest.version}) does not match release tag (${normalizedTag}).`);
  }

  const repoUrl = typeof manifest.repository === 'string' ? manifest.repository : manifest.repository?.url;
  if (!repoUrl || !EXPECTED_REPO_REGEX.test(repoUrl)) {
    errors.push(
      `Package ${pkgName} repository URL (${repoUrl || 'MISSING'}) must match https://github.com/GSA/sam-design-system.git (ADR-0011).`,
    );
  }

  const peerDeps = manifest.peerDependencies || {};
  if (pkgName === 'sam-material-extensions') {
    const expected = `^${expectedVersion}`;
    if (peerDeps['@gsa-sam/components'] !== expected) {
      errors.push(
        `sam-material-extensions peerDependency @gsa-sam/components is "${peerDeps['@gsa-sam/components']}", expected "${expected}".`,
      );
    }
  }

  if (pkgName === 'sam-formly') {
    const expected = `^${expectedVersion}`;
    if (peerDeps['@gsa-sam/components'] !== expected) {
      errors.push(
        `sam-formly peerDependency @gsa-sam/components is "${peerDeps['@gsa-sam/components']}", expected "${expected}".`,
      );
    }
    if (peerDeps['@gsa-sam/sam-material-extensions'] !== expected) {
      errors.push(
        `sam-formly peerDependency @gsa-sam/sam-material-extensions is "${peerDeps['@gsa-sam/sam-material-extensions']}", expected "${expected}".`,
      );
    }
  }

  return errors;
}

export function validateDistPackage(pkgName, distDir, expectedVersion) {
  const distPkgPath = resolve(distDir, 'package.json');
  if (!existsSync(distPkgPath)) {
    throw new Error(`Built dist manifest not found at ${distPkgPath}. Run ng build first.`);
  }

  const distManifest = JSON.parse(readFileSync(distPkgPath, 'utf8'));
  const manifestErrors = validateManifest(pkgName, distManifest, expectedVersion);
  if (manifestErrors.length > 0) {
    throw new Error(`Built package ${pkgName} failed manifest validation:\n- ${manifestErrors.join('\n- ')}`);
  }

  const output = execFileSync('npm', ['pack', '--dry-run', '--json'], {
    cwd: distDir,
    encoding: 'utf8',
  });
  const parsed = JSON.parse(output);
  const result = Array.isArray(parsed) ? parsed[0] : parsed;
  const packedFiles = new Set((result?.files || []).map((f) => f.path));

  const requiredFiles = [
    'package.json',
    'README.md',
    `fesm2022/gsa-sam-${pkgName}.mjs`,
    `types/gsa-sam-${pkgName}.d.ts`,
  ];

  const missing = requiredFiles.filter((rf) => !packedFiles.has(rf));
  if (missing.length > 0) {
    throw new Error(`Built package ${pkgName} tarball is missing required files: ${missing.join(', ')}`);
  }

  return { filesCount: packedFiles.size, distManifest };
}

export function validateAll(rootDir = DEFAULT_REPO_ROOT, explicitTag = null) {
  const rootPackageJsonPath = resolve(rootDir, 'package.json');
  const angularJsonPath = resolve(rootDir, 'angular.json');

  const rootPackageJson = JSON.parse(readFileSync(rootPackageJsonPath, 'utf8'));
  const angularJson = JSON.parse(readFileSync(angularJsonPath, 'utf8'));

  const rawTag = explicitTag || process.env.GITHUB_REF_NAME || null;
  const normalizedTag = normalizeTag(rawTag);

  console.log(`Validating lockstep publish packages (root version: ${rootPackageJson.version})...`);
  if (rawTag) {
    console.log(`Checking against release tag: ${rawTag} (normalized: ${normalizedTag})`);
  }

  validatePublishableProjects(angularJson);
  console.log(`Verified publishable projects: [${EXPECTED_PACKAGES.join(', ')}] (no experimental package)`);

  const allErrors = [];

  for (const pkg of EXPECTED_PACKAGES) {
    const manifestPath = resolve(rootDir, `libs/packages/${pkg}/package.json`);
    if (!existsSync(manifestPath)) {
      allErrors.push(`Manifest not found at ${manifestPath}`);
      continue;
    }

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
    const errors = validateManifest(pkg, manifest, rootPackageJson.version, normalizedTag);
    if (errors.length > 0) {
      allErrors.push(...errors);
    } else {
      console.log(`Verified manifest for ${manifest.name}@${manifest.version}`);
    }

    const distDir = resolve(rootDir, `dist/libs/${pkg}`);
    if (existsSync(distDir)) {
      try {
        const { filesCount } = validateDistPackage(pkg, distDir, rootPackageJson.version);
        console.log(`Verified dist tarball for ${pkg} (${filesCount} files)`);
      } catch (distErr) {
        allErrors.push(distErr.message);
      }
    }
  }

  if (allErrors.length > 0) {
    console.error('\nPublish preflight validation failed:');
    for (const err of allErrors) {
      console.error(`- ${err}`);
    }
    return false;
  }

  console.log('\nAll publish preflight package checks passed.');
  return true;
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(__filename)) {
  const tagArgIndex = process.argv.indexOf('--tag');
  const explicitTag = tagArgIndex !== -1 ? process.argv[tagArgIndex + 1] : null;

  const success = validateAll(DEFAULT_REPO_ROOT, explicitTag);
  if (!success) {
    process.exit(1);
  }
}
