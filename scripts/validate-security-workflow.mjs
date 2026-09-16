import { existsSync, readFileSync } from 'node:fs';

const failures = [];
const workflowPath = '.github/workflows/security.yml';
const ciWorkflowPath = '.github/workflows/ci.yaml';
const severityGatePath = 'scripts/check-zap-severity.mjs';
const serverPath = 'scripts/serve-security-scan.mjs';
const rulesPath = '.zap/rules.tsv';
const documentationPath = 'docs/security-scanning.md';

function contents(path) {
  return existsSync(path) ? readFileSync(path, 'utf8') : '';
}

const workflow = contents(workflowPath);
if (!workflow) {
  failures.push(`${workflowPath} exists`);
} else {
  const required = [
    ['runs on pull requests and master pushes', /pull_request:[\s\S]*push:[\s\S]*branches:\s*\[master\]/],
    ['uses least-privilege permissions', /^permissions:\s*\n\s+contents:\s*read\s*$/m],
    ['uses SHA-pinned actions', /uses:\s+[^@\s]+@[0-9a-f]{40}/],
    ['builds production Storybook', /npm run build-storybook/],
    // The apidoc modules libs/documentation imports are generated, not tracked, so
    // Storybook's build fails with TS2307 unless they are produced first.
    ['generates apidoc before building Storybook', /npm run demo:docs[\s\S]*npm run build-storybook/],
    [
      'serves the build to the ZAP container',
      /SECURITY_SCAN_ROOT=storybook-static SECURITY_SCAN_HOST=0\.0\.0\.0 node scripts\/serve-security-scan\.mjs/,
    ],
    [
      'runs OWASP ZAP against the local site',
      /zaproxy\/action-baseline@[0-9a-f]{40}[\s\S]*target:\s*["']http:\/\/127\.0\.0\.1:4200/,
    ],
    ['keeps ZAP action findings report-only before our gate', /fail_action:\s*false/],
    ['runs the medium/high severity gate', /node scripts\/check-zap-severity\.mjs report_json\.json \.zap\/rules\.tsv/],
  ];
  for (const [description, condition] of required) if (!condition.test(workflow)) failures.push(description);
  if (/uses:\s+[^@\s]+@(?![0-9a-f]{40}(?:\s|#|$))/.test(workflow)) failures.push('uses SHA-pinned actions only');
  if (/security-events:\s*write/.test(workflow)) failures.push('does not grant security-events write');
}

if (!/npm run validate:security-workflow/.test(contents(ciWorkflowPath))) {
  failures.push('runs the policy validator in the CI workflow');
}
if (!contents(severityGatePath).includes('Number(alert.riskcode) < 2'))
  failures.push('provides a medium/high ZAP severity gate');
if (!contents(serverPath).includes('Content-Security-Policy')) failures.push('provides the security-header server');
if (!existsSync(rulesPath)) failures.push('provides the reviewed ZAP exception baseline');
if (!/CodeQL[\s\S]*DAST[\s\S]*Required status checks/.test(contents(documentationPath))) {
  failures.push('documents CodeQL and required DAST status-check administration');
}

if (failures.length) {
  console.error('Security CI policy validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('Security CI policy validation passed.');
