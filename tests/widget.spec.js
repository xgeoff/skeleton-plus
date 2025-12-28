const { test, expect } = require('@playwright/test');
const path = require('path');

const fixturePath = path.resolve(__dirname, 'fixtures', 'index.html');
const fixtureUrl = `file://${fixturePath}`;

test.describe('Skeleton-plus fixtures', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(fixtureUrl);
  });

  test('renders every documented widget', async ({ page }) => {
    const headings = page.locator('section h2');
    await expect(headings).toHaveCount(7);
    await expect(headings.nth(0)).toHaveText('Buttons');
    await expect(headings.nth(1)).toHaveText('Forms');
    await expect(headings.nth(2)).toHaveText('Cards');
    await expect(headings.nth(3)).toHaveText('Badges');
    await expect(headings.nth(4)).toHaveText('Alerts');
    await expect(headings.nth(5)).toHaveText('Disclosure');
    await expect(headings.nth(6)).toHaveText('Modal');
  });

  test('button interactions keep transitions', async ({ page }) => {
    await page.locator('.modal.is-open').evaluate((el) =>
      el.classList.remove('is-open')
    );
    const primary = page.locator('.btn--primary').first();
    await primary.hover();
    const transition = await primary.evaluate((el) =>
      getComputedStyle(el).transition
    );
    expect(transition).toContain('transform');
  });

  test('.is-disabled prohibits pointer events', async ({ page }) => {
    const disabled = page.locator('.btn.is-disabled');
    await expect(disabled).toHaveCSS('cursor', 'not-allowed');
  });

  test('.card--interactive indicates clickability', async ({ page }) => {
    const interactive = page.locator('.card--interactive');
    await expect(interactive).toHaveCSS('cursor', 'pointer');
  });

  test('alerts use accent colors for variants', async ({ page }) => {
    const error = page.locator('.alert--error').first();
    const color = await error.evaluate((el) =>
      getComputedStyle(el).borderLeftColor
    );
    expect(color).toContain('rgb(239, 68, 68)');
  });

  test('disclosure toggles open attribute', async ({ page }) => {
    await page.locator('.modal.is-open').evaluate((el) =>
      el.classList.remove('is-open')
    );
    const disclosure = page.locator('.disclosure');
    const summary = disclosure.locator('summary');
    await summary.click();
    const isOpen = await disclosure.evaluate((el) => el.hasAttribute('open'));
    expect(isOpen).toBe(true);
  });

  test('modal visibility toggles with is-open', async ({ page }) => {
    const hiddenModal = page.locator('.modal:not(.is-open)');
    const visibleModal = page.locator('.modal.is-open');
    await expect(hiddenModal).toHaveCSS('display', 'none');
    await expect(visibleModal).toHaveCSS('display', 'flex');
  });

  test('reduced motion removes transitions', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(fixtureUrl);
    const button = page.locator('.btn').first();
    const transition = await button.evaluate((el) =>
      getComputedStyle(el).transition
    );
    expect(transition).toBe('none');
  });
});
