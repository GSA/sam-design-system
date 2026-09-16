import { expect, test } from '@playwright/test';

test('demo Storybook build boots and renders without console errors', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/');

  await expect(page).toHaveTitle(/Storybook/);
  await expect(page.getByRole('link', { name: 'Skip to sidebar' })).toBeVisible();

  // Navigate to a story that actually renders the sds-actions-menu component
  // (the default "Introduction" story does not) and assert it renders inside
  // Storybook's preview iframe, proving the Angular app content boots.
  await page.goto('/?path=/story/components-actions-menu--model-trigger');
  const preview = page.frameLocator('#storybook-preview-iframe');
  await expect(preview.getByRole('button', { name: 'Open Default Actions Menu' }).first()).toBeVisible();

  expect(consoleErrors).toEqual([]);
});
