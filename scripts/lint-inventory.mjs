#!/usr/bin/env node
/**
 * Generates an auditable inventory of ESLint warn- and error-rule violations
 * across workspaces in sam-design-system.
 *
 * Usage:
 *   node scripts/lint-inventory.mjs [--json] [--markdown] [project=report.json ...]
 *
 * If no project=report arguments are given, looks for eslint-report-<project>.json
 * for the five known projects in the current working directory.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DEFAULT_PROJECTS = [
  'components',
  'sam-formly',
  'sam-material-extensions',
  'sam-design-system-site',
  'documentation',
];

export function buildProjectInventory(report) {
  let totalErrors = 0;
  let totalWarnings = 0;
  const rules = {};

  for (const file of report) {
    totalErrors += file.errorCount ?? 0;
    totalWarnings += file.warningCount ?? 0;
    for (const msg of file.messages ?? []) {
      const ruleId = msg.ruleId || 'unknown';
      rules[ruleId] = (rules[ruleId] || 0) + 1;
    }
  }

  return { totalErrors, totalWarnings, rules };
}

export function generateInventory(reportsByProject) {
  const result = {};
  for (const [project, report] of Object.entries(reportsByProject)) {
    result[project] = buildProjectInventory(report);
  }
  return result;
}

function formatMarkdown(inventory) {
  const lines = ['# ESLint Warn-Debt Inventory\n'];

  for (const [project, data] of Object.entries(inventory)) {
    lines.push(`### ${project}`);
    lines.push(`- **Warnings**: ${data.totalWarnings}`);
    lines.push(`- **Errors**: ${data.totalErrors}`);
    lines.push('');

    const sortedRules = Object.entries(data.rules).sort((a, b) => b[1] - a[1]);
    if (sortedRules.length === 0) {
      lines.push('*No violations (0 warnings, 0 errors).*\n');
      continue;
    }

    lines.push('| Rule | Count | Severity |');
    lines.push('|---|---|---|');
    for (const [rule, count] of sortedRules) {
      lines.push(`| \`${rule}\` | ${count} | warn |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

function formatTerminal(inventory) {
  const lines = [];
  for (const [project, data] of Object.entries(inventory)) {
    lines.push(`=== ${project} (Warnings: ${data.totalWarnings}, Errors: ${data.totalErrors}) ===`);
    const sortedRules = Object.entries(data.rules).sort((a, b) => b[1] - a[1]);
    for (const [rule, count] of sortedRules) {
      lines.push(`  ${count.toString().padStart(4)}: ${rule}`);
    }
    if (sortedRules.length === 0) {
      lines.push('  (0 violations)');
    }
    lines.push('');
  }
  return lines.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const isJson = args.includes('--json');
  const isMarkdown = args.includes('--markdown') || args.includes('--format=markdown');
  const projectArgs = args.filter((a) => !a.startsWith('--'));

  const reportsByProject = {};

  if (projectArgs.length > 0) {
    for (const item of projectArgs) {
      const eqIdx = item.indexOf('=');
      if (eqIdx === -1) {
        console.error(`Invalid argument "${item}". Expected format: <project>=<path/to/report.json>`);
        process.exit(1);
      }
      const project = item.slice(0, eqIdx);
      const filePath = resolve(item.slice(eqIdx + 1));
      try {
        reportsByProject[project] = JSON.parse(readFileSync(filePath, 'utf8'));
      } catch (err) {
        console.error(`✖ Could not read ESLint report at ${filePath}`);
        console.error(`  ${err.message}`);
        process.exit(1);
      }
    }
  } else {
    for (const project of DEFAULT_PROJECTS) {
      const defaultPath = resolve(`eslint-report-${project}.json`);
      if (existsSync(defaultPath)) {
        try {
          reportsByProject[project] = JSON.parse(readFileSync(defaultPath, 'utf8'));
        } catch (err) {
          console.error(`✖ Could not read ESLint report at ${defaultPath}`);
          console.error(`  ${err.message}`);
          process.exit(1);
        }
      }
    }
  }

  const inventory = generateInventory(reportsByProject);

  if (isJson) {
    console.log(JSON.stringify(inventory, null, 2));
  } else if (isMarkdown) {
    console.log(formatMarkdown(inventory));
  } else {
    console.log(formatTerminal(inventory));
  }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isDirectRun) {
  main();
}
