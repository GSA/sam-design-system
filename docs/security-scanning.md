# Security scanning

The `Security` workflow complements dependency updates and GitHub's managed
CodeQL default setup. It runs on pull requests and pushes to `master`.

## Gates

- **SAST:** CodeQL default setup is the repository's static-analysis control.
  It is configured under **Settings → Code security → Code scanning** rather
  than in a committed workflow. The `default` ruleset on `master` currently
  requires CodeQL results with `security_alerts_threshold: high_or_higher` and
  `alerts_threshold: errors`, so a **new high-severity** alert blocks a merge
  but a new **medium**-severity alert does not — it stays visible under
  **Security → Code scanning** for triage. Raising that threshold to
  `medium_or_higher`, to match this workflow's DAST gate, is an admin-owned
  ruleset change (see [Required status checks](#required-status-checks-admin-owned)).
- **DAST:** the `DAST (medium/high gate)` job builds production Storybook,
  serves it on localhost with production-style security headers,
  and runs the OWASP ZAP baseline scanner. `check-zap-severity.mjs` makes the
  job fail for any unexcepted ZAP JSON alert with medium (`2`) or high (`3`)
  risk. Low and informational alerts remain visible in the uploaded report.

  ZAP runs with `fail_action: false`, so ZAP's own WARN/FAIL rule actions never
  decide the build outcome — our gate reads the JSON risk codes instead. The
  reviewed exception file (`.zap/rules.tsv`) is consumed **only** by that gate
  and is deliberately **not** handed to ZAP via `-c`/`rules_file_name`: ZAP's
  baseline config parser expects a two-column `id<TAB>action` file, whereas our
  rows carry seven columns so every suppression is auditable. Passing it to ZAP
  directly fails the scan with "too many values to unpack".

  **Scope caveat:** the DAST job scans **Storybook**, which is internal
  documentation tooling and is not a published artifact. The packages built
  from `libs/packages/` are what ship to consumers, and they have no standalone
  runtime surface to scan. This is defense-in-depth on the docs runtime, not a
  control that protects the delivered libraries; CodeQL (SAST), which analyzes
  the code we actually ship, is the primary control.

## Initial baseline and triage

Pre-existing findings are triaged and burned down rather than red-walled up
front (ADR-0010). The first scan run against production Storybook is the
initial baseline; it surfaced one medium finding, carried as a reviewed,
expiring exception rather than fixed:

- **`10055` CSP: style-src unsafe-inline (Medium)** — ZAP flags the **scan
  harness's own CSP header**, not a finding in any page: `serve-security-scan.mjs`
  must send `style-src 'unsafe-inline'` for Storybook's manager and preview
  shells to render. The exception is rule-wide (`*`) because ZAP re-reports the
  policy on every scanned URL, so a URL-scoped row cannot suppress it.

  A strict CSP was attempted and verified unattainable for this toolchain:

  1. Replacing `'unsafe-inline'` with SHA-256 hashes of Storybook's inline
     `<style>` blocks does clear 10055 — but Storybook also ships two inline
     `<script>` blocks (the `window['FEATURES']` config and the ESM manager
     import list) which then fail to execute, so the UI never boots and ZAP
     would scan an empty ~2 KB shell instead of a working app.
  2. Allowing those scripts in turn exposes a harder limit: Storybook compiles
     Angular stories with the **JIT** compiler, which fails with
     `EvalError: Evaluating a string as JavaScript violates ... 'unsafe-eval'`.
     Every story renders blank without `script-src 'unsafe-eval'` — a strictly
     weaker policy than `'unsafe-inline'` on `style-src` alone.

  Accepting this one exception therefore keeps both the scan meaningful and the
  policy as tight as the toolchain allows. This is Storybook/Angular-JIT
  behavior on an unpublished docs build, not styling authored in the shipped
  packages. The same finding is baselined in GSA/ngx-uswds#272 and
  GSA/sam-ui-elements#679. **Tracked in GSA/sam-design-system#1633**, to revisit
  alongside the Storybook 8→10 upgrade and AOT story compilation, which remove
  the JIT eval requirement.

Any _new_ finding surfaced by a future run must be triaged the same way: fix
it where possible, and only add a reviewed exception row if it cannot be
addressed in the current toolchain. Never lower the gate to clear a finding.
This preserves ADR-0010's new-code scoping.

## Exception policy

Use one tab-separated row per ZAP exception:

```text
rule-id<TAB>IGNORE<TAB>scope<TAB>issue-url<TAB>owner<TAB>expiry(YYYY-MM-DD)<TAB>rationale
```

The `scope` column is a **URL substring** the exception is limited to (the
narrowest available scope), or a literal `*` for a rule-wide exception that
must be explicitly justified in review. Matching on plugin id plus scope means
a baseline row suppresses only the reviewed instance(s) of a finding, not every
current and future instance of that rule across all URLs — which is what
preserves the new-code gate.

`validate-security-workflow.mjs` rejects malformed rows, rows missing a scope
or owner, rows whose issue link is not a `GSA/sam-design-system` issue, and
rows whose expiry is not a real calendar date (`2027-02-30` and `9999-99-99`
both fail) or is in the past. Every exception must be reviewed in a pull
request and include:

1. the scanner rule or alert identifier;
2. the narrowest URL scope it applies to (or `*` with justification);
3. a link to its triage or remediation issue;
4. the technical rationale for accepting or suppressing it; and
5. an owner and an expiry date.

Expired exceptions must be removed or explicitly renewed through review — an
expired row fails the lint workflow, so it surfaces as a reviewable CI failure
rather than silently reopening the gate. Never lower the workflow threshold or
broadly ignore medium/high findings to make CI pass.

## Required status checks (admin-owned)

Branch protection, required status checks, and the CodeQL new-alert threshold
are **admin-owned settings** that this repository change cannot apply. This
account has `maintain` but not `admin` permission, so the following are tracked
as explicit administrative follow-ups:

- add `DAST (medium/high gate)` as a required status check on `master` (the
  `default` ruleset currently has no `required_status_checks` rule);
- preserve the existing CodeQL code-scanning requirement, and consider raising
  `security_alerts_threshold` from `high_or_higher` to `medium_or_higher` so
  SAST and DAST gate at the same severity.

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
