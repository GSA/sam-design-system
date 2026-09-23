# npm Publish Runbook

This document describes the security model, approval flow, and release procedure for publishing the three `sam-design-system` libraries to the public npm registry in lockstep:

- `@gsa-sam/components`
- `@gsa-sam/sam-material-extensions`
- `@gsa-sam/sam-formly`

See also: `.github/workflows/publish.yml` for the full workflow source.

---

## Security layers (defence-in-depth)

Three independent guardrails must all be satisfied before a live publish can reach npm. An attacker would need to defeat all three simultaneously.

| Layer                 | What it guards                                                                                                             | Where it lives                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| 1 — CODEOWNERS        | Merge-time: any change to `/.github/` requires `@GSA/sam-shared-frontend-admin` review                                     | `CODEOWNERS`                                    |
| 2 — Branch protection | Merge-time: `master` requires a passing PR review, code-owner approval, and forbids direct pushes                          | GitHub repo Settings → Branches                 |
| 3 — Environment gate  | Run-time: the `release` environment pauses every publish job for a named human approver **before** OIDC mints a credential | GitHub repo Settings → Environments → `release` |

Layers 1 and 2 prevent an unauthorized workflow change from landing on `master`. Layer 3 catches anything that somehow slips through — even a legitimately-merged change cannot actually publish until a human explicitly approves the pending deployment.

---

## Multi-package lockstep model (ADR-0016)

Unlike single-package libraries (`sam-styles`, `ngx-uswds`, `ngx-uswds-icons`, `sam-ui-elements`), `sam-design-system` publishes **three packages from a single repository**:

1. **Lockstep versioning:** A single workspace version (e.g. `21.0.0`) governs all three libraries and the root workspace. Bumping via `npm version` invokes `tools/scripts/update-libs-version.js`, which updates the three library manifests (`libs/packages/*/package.json`) and internal peer dependencies (`@gsa-sam/*`) to `^${version}` in lockstep.
2. **Three tarballs, one release tag:** Cutting a single GitHub Release (e.g. `v21.0.0`) triggers quality gates and packages exactly three tarballs (`gsa-sam-components-21.0.0.tgz`, `gsa-sam-sam-material-extensions-21.0.0.tgz`, `gsa-sam-sam-formly-21.0.0.tgz`).
3. **Preflight loop (ADR-0011):** `scripts/validate-publish-package.mjs` loops over all three manifests, verifying version alignment, repository provenance metadata (`https://github.com/GSA/sam-design-system.git`), internal peer dependency bounds, and tarball contents.
4. **No experimental package:** `@gsa-sam/experimental` was decommissioned in #1603 and is asserted absent by the preflight.

---

## How the approval flow works at runtime

1. A GitHub Release is published (for live publish or Release dry-run), or a maintainer triggers rehearsal-only `workflow_dispatch` with `dry-run: true`. Manual `workflow_dispatch` runs with `dry-run: false` fail before any build or publish commands execute.
2. The `quality-gates` job runs first:
   - Format check (`npm run format:check`)
   - ESLint warning baselines (`npm run lint:baseline`)
   - Security CI policy validation (`npm run validate:security-workflow`)
   - Publish workflow policy validation (`npm run validate:publish-workflow`)
   - Script unit tests (`npm run test:scripts`)
   - Builds for all three libraries (`components`, `sam-material-extensions`, `sam-formly`)
   - Unit tests with coverage floors for all three libraries
   - Coverage ratchet verification (`npm run coverage:check`)
   - Playwright E2E smoke tests (`npm run test:e2e`)
3. On success, the `publish` job is queued **but paused** at the `environment: release` gate.
4. GitHub sends a notification to the required reviewers configured on the `release` environment.
5. A named DevSecOps approver reviews the pending deployment in **Actions → the workflow run → Review deployments** and clicks **Approve**.
6. Only after approval does the job continue:
   - Node runs with npm configured against the public registry (`https://registry.npmjs.org`).
   - Trusted Publishing floor version (`npm >= 11.5.1`) is verified.
   - Preflight package validation (`validate-publish-package.mjs`) loops over all three library manifests and built tarballs.
   - GitHub mints a short-lived OIDC credential via `id-token: write`.
7. `npm publish` runs with that credential. No long-lived token is stored anywhere in the repo or GitHub Secrets.

If the approver clicks **Reject**, the job is cancelled and nothing is published.

---

## Authorization & one-time setup checklist (DevSecOps)

Per **ADR-0013**, npm authorization is **per package**. npm answers unauthorized PUT requests with `404 Not Found` rather than `403 Forbidden`. Under lockstep, partial authorization could burn versions for failed packages while succeeding on others.

Therefore, **confirm Trusted Publisher registration for all three packages by name** before cutting any release tag:

```bash
for p in components sam-material-extensions sam-formly; do
  npm view @gsa-sam/$p maintainers --userconfig /dev/null --registry https://registry.npmjs.org
done
```

### 1. `release` environment configuration

Create the `release` environment in repository settings:

- **Required reviewers:** configured with DevSecOps approvers (`@GSA/sam-shared-frontend-admin`).
- **Deployment branches/tags policy:** deployment tag policy must be set to `v[0-9]*.[0-9]*.[0-9]*` (to match two-digit majors like `v21.0.0`).

Location: `https://github.com/GSA/sam-design-system/settings/environments`

### 2. npm Trusted Publisher registration (three packages)

Log in to npmjs.com as the `@gsa-sam` maintainer / org owner and register each package:

- Target packages:
  1. `@gsa-sam/components`
  2. `@gsa-sam/sam-material-extensions`
  3. `@gsa-sam/sam-formly`
- In each package → **Settings** → **Trusted Publishers** → Add GitHub Actions:
  - **Organization:** `GSA`
  - **Repository:** `sam-design-system`
  - **Workflow filename:** `publish.yml`
  - **Environment name:** `release`

### 3. Live publish activation

Until registration is complete across all three packages:

- The workflow defaults to `DRY_RUN=true`.
- After registration is confirmed by package name for all three, set repository/environment variable `DRY_RUN = false` in **Settings → Secrets and variables → Actions → Variables**.

---

## Verifying the gate (smoke test)

1. Trigger a manual rehearsal dry-run: **Actions → Publish to npm → Run workflow** → leave `dry-run: true` → **Run workflow**.
2. Watch the run: after `quality-gates` pass, the `publish` job pauses with **Waiting for review** under the `release` environment.
3. DevSecOps approves. The job proceeds, packs all three tarballs, runs `npm publish <tarball> --dry-run` for each, and verifies npm packaging acceptance.
4. Trigger a negative rehearsal test: **Actions → Publish to npm → Run workflow** → enter `dry-run: false` → **Run workflow**. The run fails immediately with `workflow_dispatch runs must use dry-run=true`.
