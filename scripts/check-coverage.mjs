#!/usr/bin/env node
/**
 * Ratcheting coverage gate for the three publishable libraries
 * (components, sam-formly, sam-material-extensions).
 *
 * The `@angular/build:unit-test` (Vitest) builder starts Vitest with
 * `config: false`, so a `vitest.config.ts` `coverage.thresholds` block is
 * ignored. The builder's schema also exposes no threshold option. We therefore
 * enforce coverage floors here, after `ng test` has written each library's v8
 * `coverage-summary.json` report (relocated to `coverage-reports/<project>/`
 * by `scripts/collect-coverage.mjs`, since Vitest's coverage provider always
 * clears the shared workspace-root `coverage/` directory at the start of
 * every run — a per-library path *inside* `coverage/` would get wiped out by
 * the next library's test run).
 *
 * Policy: each library owns its own floor file,
 * `libs/packages/<library>/coverage-floor.json`, and each is a *ratchet per
 * project* — a library's own floor may only ever move up, independently of
 * the other two. This is deliberately three separate files, not one pooled
 * number or one shared root file: a single shared floor would let a
 * regression in one library hide behind a gain in another, and a single
 * shared *file* (even with per-project keys inside it) would still make
 * every parallel coverage PR touching a different library contend over the
 * same file.
 *
 * Feature and test PRs should NOT edit a floor file; they just need to keep
 * each library's current coverage at or above its own floor. When coverage
 * has genuinely improved, lock the gain in with a dedicated bump:
 *
 *     npm run coverage:bump
 *
 * which rewrites the floor file(s) for the requested project(s) (all three,
 * with no arguments) to the current measured values. Commit that on its own
 * (ideally a small standalone PR) so each library's floor file changes in
 * isolation and rarely conflicts with unrelated work on another library.
 *
 * Usage:
 *   node scripts/check-coverage.mjs
 *   node scripts/check-coverage.mjs --bump
 *   node scripts/check-coverage.mjs [project ...]
 *   node scripts/check-coverage.mjs --bump [project ...]
 *
 * With no project arguments, all three projects below are checked/bumped.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const METRICS = ['statements', 'branches', 'functions', 'lines'];

/**
 * Project name -> { summaryPath, floorPath }, both relative to the current
 * working directory (this script is always run via an `npm run` script, so
 * that's the repo root in practice). Each project's floor lives alongside
 * its library, not in one shared root-level file, so unrelated coverage
 * bumps never touch the same file.
 */
const PROJECTS = {
  components: {
    summaryPath: 'coverage-reports/components/coverage-summary.json',
    floorPath: 'libs/packages/components/coverage-floor.json',
  },
  'sam-formly': {
    summaryPath: 'coverage-reports/sam-formly/coverage-summary.json',
    floorPath: 'libs/packages/sam-formly/coverage-floor.json',
  },
  'sam-material-extensions': {
    summaryPath: 'coverage-reports/sam-material-extensions/coverage-summary.json',
    floorPath: 'libs/packages/sam-material-extensions/coverage-floor.json',
  },
};

const args = process.argv.slice(2);
const bump = args.includes('--bump');
const requested = args.filter((arg) => !arg.startsWith('--'));
const projects = requested.length > 0 ? requested : Object.keys(PROJECTS);

for (const project of projects) {
  if (!(project in PROJECTS)) {
    console.error(`✖ Unknown project "${project}". Known projects: ${Object.keys(PROJECTS).join(', ')}`);
    process.exit(1);
  }
}

function readFloor(project) {
  const floorPath = resolve(PROJECTS[project].floorPath);
  try {
    return { floorPath, floor: JSON.parse(readFileSync(floorPath, 'utf8')) };
  } catch (error) {
    console.error(`✖ [${project}] Could not read coverage floor at ${floorPath}`);
    console.error(`  ${error.message}`);
    return { floorPath, floor: null };
  }
}

if (bump) {
  let anyRaised = false;

  for (const project of projects) {
    const summaryPath = resolve(PROJECTS[project].summaryPath);
    let total;
    try {
      total = JSON.parse(readFileSync(summaryPath, 'utf8')).total;
    } catch (error) {
      console.error(`✖ [${project}] Could not read coverage summary at ${summaryPath}`);
      console.error(`  ${error.message}`);
      process.exit(1);
    }

    const { floorPath, floor } = readFloor(project);
    if (floor === null) {
      process.exit(1);
    }

    const next = {};
    let raised = false;
    console.log(`${project}:`);
    for (const metric of METRICS) {
      const pct = total?.[metric]?.pct;
      if (typeof pct !== 'number') {
        console.error(`✖ [${project}] ${metric}: missing from coverage summary; cannot bump.`);
        process.exit(1);
      }
      const floored = Math.floor(pct);
      const rawCurrent = floor[metric];
      // Treat a missing or malformed floor as 0 so a corrupt coverage-floor.json
      // can never poison the ratchet with NaN/null values.
      const current = Number.isFinite(rawCurrent) ? rawCurrent : 0;
      // Ratchet only ever moves up.
      next[metric] = Math.max(current, floored);
      if (next[metric] > current) {
        raised = true;
        console.log(`  ↑ ${metric.padEnd(11)} ${current}% → ${next[metric]}% (measured ${pct.toFixed(2)}%)`);
      } else {
        console.log(`  = ${metric.padEnd(11)} ${current}% (measured ${pct.toFixed(2)}%)`);
      }
    }
    if (raised) {
      anyRaised = true;
      writeFileSync(floorPath, `${JSON.stringify(next, null, 2)}\n`);
      console.log(`  ✓ Wrote raised floor to ${floorPath}.`);
    }
  }

  if (!anyRaised) {
    console.log('\n✓ Floors already at or above current coverage; nothing to bump.');
    process.exit(0);
  }
  console.log('\n✓ Commit the raised floor file(s) on their own.');
  process.exit(0);
}

let anyFailures = false;
for (const project of projects) {
  const summaryPath = resolve(PROJECTS[project].summaryPath);
  let total;
  try {
    total = JSON.parse(readFileSync(summaryPath, 'utf8')).total;
  } catch (error) {
    console.error(`✖ [${project}] Could not read coverage summary at ${summaryPath}`);
    console.error(`  ${error.message}`);
    console.error(
      `  Run \`npm run test:${project === 'components' ? 'components' : project === 'sam-formly' ? 'sam-formly' : 'material-extensions'}\` first to generate it.`,
    );
    anyFailures = true;
    continue;
  }

  const { floorPath, floor: projectFloors } = readFloor(project);
  if (projectFloors === null) {
    anyFailures = true;
    continue;
  }

  console.log(`${project}:`);
  const failures = [];
  for (const metric of METRICS) {
    const floor = projectFloors[metric];
    const pct = total?.[metric]?.pct;
    if (!Number.isFinite(floor)) {
      failures.push(`${metric}: missing or invalid in ${floorPath}`);
      continue;
    }
    if (typeof pct !== 'number') {
      failures.push(`${metric}: missing from coverage summary`);
      continue;
    }
    const status = pct >= floor ? '✓' : '✖';
    const line = `  ${status} ${metric.padEnd(11)} ${pct.toFixed(2)}% (floor ${floor}%)`;
    if (pct < floor) {
      failures.push(line.trim());
    }
    console.log(line);
  }

  if (failures.length > 0) {
    anyFailures = true;
    console.error(`\n✖ [${project}] Coverage gate failed:`);
    for (const failure of failures) {
      console.error(`  ${failure}`);
    }
  }
}

if (anyFailures) {
  console.error(
    '\nCoverage dropped below a committed ratchet.\n' + 'Add tests to restore it — do not lower a floor to go green.',
  );
  process.exit(1);
}

console.log('\n✓ Coverage gate passed.');
