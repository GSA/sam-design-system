import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DEFAULT_WORKFLOW_PATH = resolve(__dirname, '../.github/workflows/publish.yml');

export const REQUIRED_QUALITY_GATES = [
  'npm run format:check',
  'npm run lint:baseline',
  'npm run validate:security-workflow',
  'npm run validate:publish-workflow',
  'npm run test:scripts',
  'npm run test:components',
  'npm run test:sam-formly',
  'npm run test:material-extensions',
  'npm run coverage:check',
  'npm run test:e2e',
];

export const WORKFLOW_RULES = [
  [
    'triggers when a full GitHub Release is published',
    /on:\s*\n(?:[^\n]*\n)*?\s*release:\s*\n(?:[^\n]*\n)*?\s*types:\s*\[released\]/,
  ],
  [
    'supports manual dry-run rehearsals',
    /workflow_dispatch:\s*\n(?:[^\n]*\n)*?\s*dry-run:\s*\n(?:[^\n]*\n)*?\s*type:\s*boolean(?:[^\n]*\n)*?\s*default:\s*true/,
  ],
  ['keeps top-level permissions least-privilege', /permissions:\s*\n\s*contents:\s*read\b/],
  ['gates the publish job through the release environment', /publish:\s*\n(?:[^\n]*\n)*?\s*environment:\s*release\b/],
  [
    'grants OIDC only to the publish job',
    /publish:\s*\n(?:[^\n]*\n)*?\s*permissions:\s*\n\s*contents:\s*read\b\s*\n\s*id-token:\s*write\b/,
  ],
  ['sets up npm against the public registry', /registry-url:\s*["']https:\/\/registry\.npmjs\.org["']/],
  ['runs the ADR-0011 preflight package validator', /node scripts\/validate-publish-package\.mjs/],
  [
    'builds all three libraries before publishing',
    /npx ng build components --configuration production[\s\S]*npx ng build sam-material-extensions --configuration production[\s\S]*npx ng build sam-formly --configuration production/,
  ],
  ['enforces workflow_dispatch as dry-run only', /workflow_dispatch runs must use dry-run=true/],
  [
    'runs npm publish in dry-run mode by default',
    /npm publish "\$tarball" --dry-run --access public --registry https:\/\/registry\.npmjs\.org/,
  ],
  [
    'can run live npm publish only for release events when dry-run is false',
    /if:\s*github\.event_name\s*==\s*(['"])release\1\s*&&\s*steps\.mode\.outputs\[(['"])dry-run\2\]\s*==\s*(['"])false\3[\s\S]*?run:\s*[\s\S]*?npm publish "\$tarball" --access public --registry https:\/\/registry\.npmjs\.org/,
  ],
  ['does not use long-lived npm token secrets', /NODE_AUTH_TOKEN|NPM_TOKEN|npm_[A-Za-z0-9]/, true],
];

export function validateWorkflowContent(workflowContent) {
  const failures = [];

  for (const [description, pattern, mustNotMatch = false] of WORKFLOW_RULES) {
    const matched = pattern.test(workflowContent);
    if (mustNotMatch ? matched : !matched) {
      failures.push(description);
    }
  }

  let doc;
  try {
    doc = yaml.load(workflowContent);
  } catch (err) {
    failures.push(`Failed to parse workflow YAML: ${err.message}`);
    return failures;
  }

  const qualityGatesJob = doc?.jobs?.['quality-gates'];
  if (!qualityGatesJob) {
    failures.push('jobs.quality-gates must exist');
    return failures;
  }

  const qualityGatesSteps = qualityGatesJob.steps || [];
  const activeRunCommands = qualityGatesSteps
    .map((step) => (typeof step?.run === 'string' ? step.run.trim() : ''))
    .filter(Boolean);

  for (const gate of REQUIRED_QUALITY_GATES) {
    const isRun = activeRunCommands.some((cmd) => cmd === gate || cmd.split('\n').some((line) => line.trim() === gate));
    if (!isRun) {
      failures.push(`quality gates must actively run: ${gate}`);
    }
  }

  const publishJob = doc?.jobs?.publish;
  if (!publishJob) {
    failures.push('jobs.publish must exist');
    return failures;
  }

  const publishNeeds = Array.isArray(publishJob.needs) ? publishJob.needs : publishJob.needs ? [publishJob.needs] : [];

  if (!publishNeeds.includes('quality-gates')) {
    failures.push('jobs.publish must declare needs: [quality-gates]');
  }

  return failures;
}

export function validatePublishWorkflow(workflowPath = DEFAULT_WORKFLOW_PATH) {
  const content = readFileSync(workflowPath, 'utf8');
  const failures = validateWorkflowContent(content);

  if (failures.length > 0) {
    console.error(`${workflowPath} failed validation:`);
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    return false;
  }

  console.log(`${workflowPath} passes publish workflow validation.`);
  return true;
}

if (process.argv[1] && resolve(process.argv[1]) === resolve(__filename)) {
  const success = validatePublishWorkflow();
  if (!success) {
    process.exit(1);
  }
}
