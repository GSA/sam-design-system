#!/usr/bin/env node
/**
 * Guards against the ESLint warning baseline being raised directly in
 * eslint-baseline.json rather than earned via --bump.
 *
 * The per-workspace gate (check-lint-baseline.mjs) only evaluates the
 * baseline committed in the branch being checked, so a contributor could
 * raise a ceiling (e.g. bumping "root" from 1631 to 5000) in the same PR
 * that introduces new warnings, and both guard steps would pass. This script
 * closes that hole by comparing the baseline on the PR branch against the
 * baseline on the trusted base branch and failing if any shared workspace's
 * ceiling increased.
 *
 * New workspace keys that don't exist on the base branch are allowed (they
 * can't be "increased" if there's nothing to compare against). Any decrease
 * or unchanged value is allowed, matching the ratchet-only semantics of
 * --bump.
 *
 * Usage:
 *   node scripts/check-baseline-not-increased.mjs <base-baseline.json> <head-baseline.json>
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const [baseArg, headArg] = process.argv.slice(2);

if (!baseArg || !headArg) {
  console.error(
    "Usage: node scripts/check-baseline-not-increased.mjs <base-baseline.json> <head-baseline.json>"
  );
  process.exit(1);
}

function loadBaselines(label, path) {
  try {
    return JSON.parse(readFileSync(resolve(path), "utf8"));
  } catch (error) {
    console.error(`✖ Could not read ${label} baselines at ${path}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

const base = loadBaselines("base-branch", baseArg);
const head = loadBaselines("pull-request", headArg);

let hasIncrease = false;

for (const workspace of Object.keys(head)) {
  if (!(workspace in base)) {
    // New workspace entry — nothing to compare against, so it can't be an
    // increase over a previously-trusted value.
    continue;
  }

  const baseValue = base[workspace];
  const headValue = head[workspace];

  if (!Number.isFinite(baseValue) || !Number.isFinite(headValue)) {
    console.error(
      `✖ ${workspace}: invalid baseline value (base: ${baseValue}, head: ${headValue})`
    );
    hasIncrease = true;
    continue;
  }

  if (headValue > baseValue) {
    console.error(
      `✖ ${workspace}: baseline increased ${baseValue} → ${headValue}. ` +
        "The accepted warning ceiling can only go down (via --bump), never up. " +
        "Revert this change to eslint-baseline.json."
    );
    hasIncrease = true;
  }
}

if (hasIncrease) {
  process.exit(1);
}

console.log(
  "✓ eslint-baseline.json: no workspace's warning ceiling increased vs. the base branch."
);
