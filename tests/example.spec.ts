import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('kiltir kode #2 should', () => {

  test('visual testing', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveScreenshot('visual-testing_landing.png');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  test('accessibility testing', async ({ page }) => {
    await page.goto('/');
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag2aaa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'EN-301-549', /*'best-practice'*/])
      .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  
  
  
  
  
  
  
  
  
  
  


  test('performance testing', async ({ page }) => {
    test.setTimeout(1_000);
    await page.goto('/');
  });
  
  
  
  
  
  
  
  
  
  
  
  
  




  
  test('interaction testing', async ({ page }) => {
    await test.step('landing', async() => {
      await page.goto('/');
      await expect(page).toHaveScreenshot('interaction-testing_landing.png');  
    });
    await test.step('docs', async() => {
      await page.getByRole('link', { name: 'Docs -> Find in-depth' }).click();
      await expect(page).toHaveURL("https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app");
      await expect(page).toHaveScreenshot('interaction-testing_docs-landing.png');  
    });
    await test.step('docs > routing', async() => {
      await page.getByRole('row', { name: 'Routing A file-system based' }).getByRole('link').click();
      await expect(page).toHaveURL("https://nextjs.org/docs/app/building-your-application/routing");
      await expect(page).toHaveScreenshot('interaction-testing_docs-routing-landing.png');
    });
  });
});