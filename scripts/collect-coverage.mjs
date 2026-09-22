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
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

// `project` is used to build a path that this script then recursively
// deletes (`destination`, below) before the rename. It must never be taken
// from the caller uninspected: a value like `..` would resolve `destination`
// to the repository root, and the existing-destination cleanup would delete
// the checkout out from under CI. Restrict it to the five known npm-script
// callers (see the `test:*` scripts in package.json) rather than trying to
// sanitize an arbitrary path.
const KNOWN_PROJECTS = [
  'components',
  'sam-formly',
  'sam-material-extensions',
  'documentation',
  'sam-design-system-site',
];

const project = process.argv[2];
if (!project) {
  console.error('Usage: node scripts/collect-coverage.mjs <project-name>');
  process.exit(1);
}
if (!KNOWN_PROJECTS.includes(project)) {
  console.error(`✖ Unknown project "${project}". Known projects: ${KNOWN_PROJECTS.join(', ')}`);
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
const nestedProjectDir = join(source, project);
if (existsSync(nestedProjectDir) && statSync(nestedProjectDir).isDirectory()) {
  renameSync(nestedProjectDir, destination);
  rmSync(source, { recursive: true, force: true });
} else {
  renameSync(source, destination);
}

// The lcov html reporter mirrors Vitest's virtual module names (e.g.
// `angular:script/global:scripts.js.html`) verbatim into file/directory
// names on disk. Colons are invalid in `actions/upload-artifact` uploads
// (and on some filesystems), so sanitize them out of the copied tree. The
// generated HTML itself still links to the *original* colon-bearing names
// (istanbul-reports computes hrefs from the report tree it built in memory,
// not from what ends up on disk), so every renamed path needs its links
// rewritten too, or "All files" -> that file's report becomes a dead link.
const renames = collectColonRenames(destination);
applyRenames(destination, renames);
rewriteHtmlLinks(destination, renames);

console.log(`✓ Moved coverage report to ${destination}`);

/**
 * Recursively finds every file or directory under `dir` whose name contains
 * a colon, returning `{ from, to }` pairs (both absolute paths, deepest
 * entries first) with colons replaced by hyphens. Doesn't rename anything
 * itself, so the original tree — and the original names any HTML in it
 * still links to — stays intact until `applyRenames` runs.
 */
function collectColonRenames(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const entryPath = join(dir, entry);
    if (statSync(entryPath).isDirectory()) {
      collectColonRenames(entryPath, acc);
    }
    if (entry.includes(':')) {
      acc.push({ from: entryPath, to: join(dir, entry.replaceAll(':', '-')) });
    }
  }
  return acc;
}

/**
 * Performs the renames `collectColonRenames` found. Deepest paths are
 * renamed first (children before parents) so a parent rename never
 * invalidates an already-computed child path.
 */
function applyRenames(dir, renames) {
  for (const { from, to } of renames) {
    renameSync(from, to);
  }
}

/**
 * Rewrites every `.html` file under `dir` in place, replacing any literal
 * occurrence of a renamed path's *original* basename with its sanitized
 * basename. istanbul's html reporter always links to a sibling/descendant by
 * that basename (as an `href`, or as a sortable `data-value`), so a plain
 * string replacement fixes every reference without needing an HTML parser.
 * Longest basenames are replaced first so a shorter renamed name that
 * happens to be a substring of a longer one can't partially clobber it.
 */
function rewriteHtmlLinks(dir, renames) {
  const basenameRenames = renames
    .map(({ from, to }) => ({ from: basenameOf(from), to: basenameOf(to) }))
    .sort((a, b) => b.from.length - a.from.length);
  if (basenameRenames.length === 0) {
    return;
  }
  for (const htmlFile of findHtmlFiles(dir)) {
    const original = readFileSync(htmlFile, 'utf8');
    let rewritten = original;
    for (const { from, to } of basenameRenames) {
      rewritten = rewritten.split(from).join(to);
    }
    if (rewritten !== original) {
      writeFileSync(htmlFile, rewritten);
    }
  }
}

function basenameOf(path) {
  return path.slice(path.lastIndexOf('/') + 1);
}

function findHtmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const entryPath = join(dir, entry);
    if (statSync(entryPath).isDirectory()) {
      findHtmlFiles(entryPath, acc);
    } else if (entry.endsWith('.html')) {
      acc.push(entryPath);
    }
  }
  return acc;
}
