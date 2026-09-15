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
        setting === 'off' || setting === 0
          ? 'off'
          : Array.isArray(setting)
            ? ['warn', ...setting.slice(1)]
            : 'warn',
      ])
  );

const recommendedTypeScriptWarnings = asWarnings([
  ...tseslint.configs.recommended,
  ...angular.configs.tsRecommended,
]);

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
    rules: {
      ...recommendedTypeScriptWarnings,
      '@angular-eslint/directive-selector': [
        'warn',
        { type: 'attribute', prefix: ['sds', 'sam'], style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'warn',
        { type: 'element', prefix: ['sds', 'sam', 'gsa-sam', 'docs'], style: 'kebab-case' },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: angular.configs.templateAccessibility,
    rules: accessibilityWarnings,
  }
);
