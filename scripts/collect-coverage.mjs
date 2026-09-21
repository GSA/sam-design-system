#!/usr/bin/env node
/**
 * Moves the coverage report Vitest just wrote to the workspace-root
 * `./coverage` directory into a stable per-library location.
 *
 * The `@angular/build:unit-test` builder (v20.3.x) calls `startVitest` with an
 * explicit coverage config and no `reportsDirectory` override, so every
 * library's Vitest run always writes to the same `<workspaceRoot>/coverage`
 * — there is no schema option to change it at this Angular version.
 *
 * Critically, `@vitest/coverage-v8`'s default `clean: true` behavior *deletes
 * the entire `coverage/` directory* at the start of every run, before writing
 * the new report. Since `npm test` runs the three libraries' Vitest
 * invocations serially, a destination *inside* `coverage/` (e.g.
 * `coverage/libs/components`) would be wiped out the moment the next
 * library's `ng test` starts. We therefore relocate each library's report to
 * `coverage-reports/<project>`, a directory Vitest's coverage provider never
 * touches, immediately after each run.
 *
 * Usage:
 *   node scripts/collect-coverage.mjs <project-name>
 *
 * Example:
 *   node scripts/collect-coverage.mjs components
 */
import { existsSync, mkdirSync, renameSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const project = process.argv[2];
if (!project) {
  console.error('Usage: node scripts/collect-coverage.mjs <project-name>');
  process.exit(1);
}

const source = resolve('coverage');
const destination = resolve('coverage-reports', project);

if (!existsSync(source)) {
  console.error(`✖ No coverage output found at ${source}. Did the test run with --code-coverage?`);
  process.exit(1);
}

if (existsSync(destination)) {
  rmSync(destination, { recursive: true, force: true });
}

mkdirSync(dirname(destination), { recursive: true });
renameSync(source, destination);

console.log(`✓ Moved coverage report to ${destination}`);
