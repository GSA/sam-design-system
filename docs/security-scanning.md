# Security scanning

The `Security` workflow complements dependency updates and GitHub's managed
CodeQL default setup. It runs on pull requests and pushes to `master`.

## Gates

- **SAST:** CodeQL default setup is the repository's static-analysis control.
  It is configured under **Settings → Code security → Code scanning** rather
  than in a committed workflow. GitHub must continue to require new CodeQL
  medium-or-higher findings to be resolved before merge.
- **DAST:** the `DAST (medium/high gate)` job builds production Storybook,
  serves it on localhost with production-style security headers,
  and runs the OWASP ZAP baseline scanner. `check-zap-severity.mjs` makes the
  job fail for any unexcepted ZAP JSON alert with medium (`2`) or high (`3`)
  risk. Low and informational alerts remain visible in the uploaded report.

## Initial baseline and triage

This change deliberately starts from an almost-empty `.zap/rules.tsv`: the
first Security workflow run against production Storybook is the initial
baseline. It surfaced one medium finding, triaged rather than fixed here:

- **`10055` CSP: style-src unsafe-inline (Medium)** — Storybook 8's manager UI
  injects inline `<style>` blocks that require `style-src 'unsafe-inline'` to
  render. This is Storybook's own toolchain output, not styling authored in
  this repository's components or in `serve-security-scan.mjs`'s CSP header
  (every other directive omits `unsafe-inline`). Mirrors the identical
  toolchain finding accepted in GSA/sam-ui-elements#679/#614. **Tracked in
  GSA/sam-design-system#1633**, to revisit alongside the Storybook 8→10
  upgrade (#1608), which may support a nonce/hash-based CSP.

Any _new_ finding surfaced by a future run must be triaged the same way: fix
it where possible, and only add a reviewed exception row if it cannot be
addressed in the current toolchain. Never lower the gate to clear a finding.
This preserves ADR-0010's new-code scoping.

## Required status checks (admin-owned)

Repository administrators or DevSecOps must update the `master` ruleset to
require the `DAST (medium/high gate)` status check. They must also preserve the
CodeQL code-scanning requirement for new medium-or-higher alerts. This account
could not read or change the repository ruleset, so that configuration is
tracked as an explicit administrative follow-up to this repository change.

## CI wiring

The policy validator runs in the `Lint` job of `.github/workflows/ci.yaml`
(`npm run validate:security-workflow`), so a change that weakens the security
workflow, the exception baseline, or this document fails CI.

## Local validation

```sh
npm run validate:security-workflow
npm run test:scripts
```

The full ZAP scan only runs in GitHub Actions; download the `zap-report`
artifact to inspect its report.
