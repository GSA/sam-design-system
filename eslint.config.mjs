// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

/**
 * Downgrades every rule in the given angular-eslint/typescript-eslint configs
 * from its recommended severity to `warn`, preserving any rule options. This
 * lets the ESLint migration (GSA/sam-design-system#1605) stand up `ng lint`
 * across all five projects without red-walling the repo on pre-existing
 * TSLint-era debt. Warnings are tracked per-project via eslint-baseline.json
 * (scripts/check-lint-baseline.mjs) and tightened to `error` as debt is paid
 * down (ADR-0006/ADR-0010 on mcaas-iae/iae-angular-upgrade).
 */
const asWarnings = (configs) =>
  Object.fromEntries(
    configs
      .flatMap((config) => Object.entries(config.rules || {}))
      .map(([rule, setting]) => [
        rule,
        setting === 'off' || setting === 0 ? 'off' : Array.isArray(setting) ? ['warn', ...setting.slice(1)] : 'warn',
      ]),
  );

const recommendedTypeScriptWarnings = asWarnings([...tseslint.configs.recommended, ...angular.configs.tsRecommended]);

// angular-eslint 21 added `prefer-inject` and `prefer-standalone` to its
// `tsRecommended` set (both at `error`, which `asWarnings` downgrades to
// `warn`). Enabling them here would add ~800 warnings across the workspace
// purely from the toolchain bump — 154 in components, 88 in sam-formly, 19 in
// sam-material-extensions, 555 in documentation — none of which correspond to
// a code change in this PR. That would blow every per-project ceiling in
// eslint-baseline.json, and `scripts/check-baseline-not-increased.mjs`
// correctly refuses to let a PR raise a ceiling to accommodate its own new
// warnings.
//
// Both rules flag real modernization work (constructor DI -> `inject()`,
// NgModule declarations -> standalone components), but that is a deliberate
// refactor across every component in the repo, not something to smuggle into
// an LTS upgrade. Turn them off here so the existing baselines keep gating
// actual regressions; re-enable each rule per project under its dedicated
// modernization issue.
const angular21DeferredModernizationRules = {
  '@angular-eslint/prefer-inject': 'off',
  '@angular-eslint/prefer-standalone': 'off',
};

// Template accessibility (ADR-0006): warn-first across the whole workspace,
// including libs/documentation, so the gate exists everywhere immediately
// rather than excluding the largest template surface in the repo. Tightened
// to `error` per project as its a11y warnings are burned down to zero.
const accessibilityWarnings = asWarnings(angular.configs.templateAccessibility);

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'storybook-static/**',
      '**/*.spec.ts',
      // Generated compodoc JSON dumps re-exported as .ts modules for the
      // Storybook API-doc pages; not hand-written source, and multi-MB.
      'libs/documentation/src/lib/apidoc/**/*.ts',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [...tseslint.configs.recommended, ...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    rules: { ...recommendedTypeScriptWarnings, ...angular21DeferredModernizationRules },
  }, // Selector prefixes are project-specific and were enforced per-project by
  // the old per-project tslint.json overrides (see the deleted files this PR
  // removes): sds for components/sam-material-extensions, sam for
  // sam-formly/sam-design-system-site, docs for documentation. Keep that
  // contract intact rather than unioning every prefix across every project,
  // which would let e.g. a `sam-` component slip into `components` unflagged.
  {
    files: ['libs/packages/components/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': ['warn', { type: 'attribute', prefix: 'sds', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['warn', { type: 'element', prefix: 'sds', style: 'kebab-case' }],
    },
  },
  {
    files: ['libs/packages/sam-material-extensions/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': ['warn', { type: 'attribute', prefix: 'sds', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['warn', { type: 'element', prefix: 'sds', style: 'kebab-case' }],
    },
  },
  {
    files: ['libs/packages/sam-formly/**/*.ts', 'apps/sam-design-system-site/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': ['warn', { type: 'attribute', prefix: 'sam', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['warn', { type: 'element', prefix: 'sam', style: 'kebab-case' }],
    },
  },
  {
    files: ['libs/documentation/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': ['warn', { type: 'attribute', prefix: 'docs', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['warn', { type: 'element', prefix: 'docs', style: 'kebab-case' }],
    },
  },
  {
    files: ['**/*.html'],
    extends: angular.configs.templateAccessibility,
    rules: accessibilityWarnings,
  },
  // libs/documentation: template accessibility was cleared of all 14 legacy
  // warnings in #1624; promote template accessibility to `error`.
  {
    files: ['libs/documentation/**/*.html'],
    extends: angular.configs.templateAccessibility,
  },
  // apps/sam-design-system-site: fully burned down to 0 warnings in #1624;
  // promote all TypeScript and template rules to `error`.
  {
    files: ['apps/sam-design-system-site/**/*.ts'],
    extends: [...tseslint.configs.recommended, ...angular.configs.tsRecommended],
    rules: {
      ...angular21DeferredModernizationRules,
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'sam', style: 'camelCase' }],
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'sam', style: 'kebab-case' }],
    },
  },
  {
    files: ['apps/sam-design-system-site/**/*.html'],
    extends: angular.configs.templateAccessibility,
  },
  storybook.configs['flat/recommended'],
);
