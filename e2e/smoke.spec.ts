import { expect, test } from '@playwright/test';

for (const initialPreview of ['ready', 'not yet booted']) {
  test(`demo Storybook build boots and renders without console errors (initial preview ${initialPreview})`, async ({
    page,
  }) => {
    let stubbedPreviewLoads = 0;
    if (initialPreview === 'not yet booted') {
      // Model a slow initial preview without depending on machine speed or sleeps.
      // A preview that has not booted cannot select the default story yet.
      await page.route(
        (url) => url.pathname === '/iframe.html' && url.searchParams.get('id') === '*',
        (route) => {
          stubbedPreviewLoads += 1;
          return route.fulfill({ contentType: 'text/html', body: '<!doctype html><title>Preview loading</title>' });
        },
      );
    }
    const consoleErrors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') {
        consoleErrors.push(message.text());
      }
    });

    await page.goto('/');

    await expect(page).toHaveTitle(/Storybook/);
    // The skip link exists only after the preview selects a story. Check the
    // accessible manager navigation instead, independently of preview startup.
    const stories = page.getByRole('navigation', { name: 'Stories', exact: true });
    await expect(stories).toBeVisible();
    await expect(stories.getByRole('button', { name: 'Actions Menu', exact: true })).toBeVisible();
    if (initialPreview === 'not yet booted') {
      // Guard against the stub silently no longer matching Storybook's default preview URL.
      expect(stubbedPreviewLoads).toBeGreaterThan(0);
    }

    // Navigate to a story that actually renders the sds-actions-menu component
    // (the default "Introduction" story does not) and assert it renders inside
    // Storybook's preview iframe, proving the Angular app content boots.
    await page.goto('/?path=/story/components-actions-menu--model-trigger');
    const preview = page.frameLocator('#storybook-preview-iframe');
    await expect(preview.getByRole('button', { name: 'Open Default Actions Menu' }).first()).toBeVisible();
    // Once a story is selected the manager must expose its skip link.
    await expect(page.getByRole('link', { name: 'Skip to sidebar' })).toBeVisible();

    expect(consoleErrors).toEqual([]);
  });
}
