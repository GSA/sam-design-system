import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: 'http://127.0.0.1:4310',
    trace: 'on-first-retry',
  },
  webServer: {
    // Storybook already builds and serves the same app content via its
    // Angular framework integration, and pins the E2E smoke test to a
    // static, deterministic artifact rather than the live dev server.
    command: 'npm run build-storybook && npx http-server storybook-static -p 4310 -s',
    url: 'http://127.0.0.1:4310',
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    // Matches the heap size given to this same Storybook build in the
    // Build-Storybook CI job (.github/workflows/build.yml) to avoid running
    // out of memory on the default Node heap.
    env: {
      NODE_OPTIONS: '--max_old_space_size=4096',
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
