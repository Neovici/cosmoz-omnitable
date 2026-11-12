import { expect, test, type Page } from '@playwright/test';

const open = async (page: Page) => {
	await page.goto(
		'iframe.html?id=visual-cosmozomnitable--hierarchy&viewMode=story',
	);
	await expect(page.locator('cosmoz-omnitable-item-row').first()).toBeVisible();
	await page.evaluate(() => document.fonts.ready);
};

const table = (page: Page) => page.locator('cosmoz-omnitable');
const row = (page: Page, i: number) =>
	page.locator('cosmoz-omnitable-item-row').nth(i);

test.describe('omnitable visual', () => {
	test('default', async ({ page }) => {
		await open(page);
		await expect(table(page)).toHaveScreenshot('default.png');
	});

	test('hovered row', async ({ page }) => {
		await open(page);
		await row(page, 1).hover();
		await expect(table(page)).toHaveScreenshot('row-hover.png');
	});

	test('selection', async ({ page }) => {
		await open(page);
		await row(page, 1).hover();
		await page.locator('.itemRow input.checkbox').nth(1).check();
		await row(page, 3).hover();
		await page.locator('.itemRow input.checkbox').nth(3).check();
		await page.mouse.move(0, 0);
		await expect(table(page)).toHaveScreenshot('selection.png');
	});

	test('expanded row', async ({ page }) => {
		await open(page);
		await row(page, 0).hover();
		await page.locator('.itemRow .expand').first().click();
		await page.mouse.move(0, 0);
		await expect(table(page)).toHaveScreenshot('row-expanded.png');
	});

	test('focused filter', async ({ page }) => {
		await open(page);
		await page.locator('.header-cell[name="company"] input').focus();
		await expect(table(page)).toHaveScreenshot('filter-focused.png');
	});

	test('filter matches nothing', async ({ page }) => {
		await open(page);
		await page.locator('.header-cell[name="company"] input').fill('zzz');
		await expect(page.locator('.tableContent-empty')).toBeVisible();
		await page.mouse.move(0, 0);
		await expect(table(page)).toHaveScreenshot('filter-empty.png');
	});

	test('renders some rows', async ({ page }) => {
		await page.goto(
			'iframe.html?id=visual-cosmozomnitable--rows&viewMode=story',
		);
		await expect(row(page, 0)).toBeVisible();
		await page.evaluate(() => document.fonts.ready);
		await expect(table(page)).toHaveScreenshot('rows.png');

		await page.locator('.tableContent-scroller').evaluate((scroller) => {
			scroller.scrollTop = 400;
		});
		await expect(row(page, 12)).toBeVisible();
		await expect(table(page)).toHaveScreenshot('rows-scrolled.png');
	});
});
