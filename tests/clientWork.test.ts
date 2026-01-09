import { test, expect } from '@playwright/test';

test('Verify Client Work page visibility', async ({ page }) => {
  // Navigate to the EPAM homepage
  await page.goto('https://www.epam.com/');

  // Resize browser to full-screen
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Click on "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Click on "Explore Our Client Work" link
  await page.getByText('Explore Our Client Work').nth(1).click();

  // Verify "Client Work" text is visible on the page
  const clientWorkText = await page.getByText('Client Work');
  await expect(clientWorkText).toBeVisible();
});