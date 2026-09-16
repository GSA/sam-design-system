import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const template = readFileSync('.github/PULL_REQUEST_TEMPLATE.md', 'utf8');

test('PR template enforces the current contribution and quality gates', () => {
  const contributingLinkPattern =
    /\[CONTRIBUTING\.md\]\(https:\/\/github\.com\/GSA\/sam-design-system\/blob\/master\/CONTRIBUTING\.md\)/g;
  const contributingLinkCount = [...template.matchAll(contributingLinkPattern)].length;
  assert.equal(
    contributingLinkCount,
    2,
    'expected both the "I have read" and reviewer-checklist items to link to this repo\'s CONTRIBUTING.md',
  );
  assert.doesNotMatch(template, /Internet Explorer 11/i);
  for (const browser of ['Edge', 'Chrome', 'Firefox', 'Safari']) {
    assert.match(template, new RegExp(`- \\[ \\] ${browser}\\b`));
  }
  assert.match(template, /a11y lint gate/i);
  assert.match(template, /WCAG 2\.1 AA/);
  assert.match(template, /coverage floor.*not regressed/i);
  assert.match(template, /lint baseline.*not raised/i);
});

test('PR template retains gren imperative-title guidance', () => {
  assert.match(template, /release notes through gren/i);
  assert.match(template, /imperative mood/i);
});
