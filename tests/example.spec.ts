import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('visual testing', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
















test('accessibility testing', async ({ page }) => {
  await page.goto('/');
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
});












test('performance testing', async ({ page }) => {
  test.setTimeout(2_000);
  await page.goto('/');
});













test('interaction testing', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*checkout/);
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/.*checkout/);
  await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
});
