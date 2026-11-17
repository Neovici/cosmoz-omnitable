import { expect, test, type Locator, type Page } from '@playwright/test';

// The table's row pipeline settles across frames (mount → measure → row
// hydration), so a screenshot taken at the first visible row may capture a
// pre-hydration frame that misses later-rendered row state (row cells,
// checkboxes). Wait until fonts are ready AND the row DOM stops changing
// across consecutive animation frames.
const settleRows = async (page: Page) => {
	await page.evaluate(async () => {
		await document.fonts.ready;
		const state = () => {
			const parts: string[] = [];
			document.querySelectorAll('cosmoz-omnitable').forEach((omnitable) => {
				const root = omnitable.shadowRoot!;
				const rows = root.querySelectorAll('cosmoz-omnitable-item-row');
				let text = 0;
				let children = 0;
				rows.forEach((itemRow) => {
					text += (itemRow.textContent ?? '').length;
					children += itemRow.querySelectorAll('*').length;
				});
				parts.push(`${rows.length}-${text}-${children}`);
			});
			return parts.join('|');
		};
		let prev = state();
		for (let i = 0; i < 50; i++) {
			await new Promise((resolve) =>
				requestAnimationFrame(() => requestAnimationFrame(resolve)),
			);
			const cur = state();
			if (cur === prev) {
				return;
			}
			prev = cur;
		}
	});
};

// The settled state is only trustworthy when two captures taken ~250 ms
// apart are byte-identical: a DOM-quiet gap between hydration bursts can
// otherwise masquerade as settle (the suite previously captured frames
// without the row checkboxes / separators that appear after full commit).
const settleCapture = async (page: Page, table: Locator) => {
	let prev = await table.screenshot();
	for (let i = 0; i < 8; i++) {
		await page.waitForTimeout(250);
		const cur = await table.screenshot();
		if (prev.equals(cur)) {
			return;
		}
		prev = cur;
	}
	throw new Error('table render never settled to a stable screenshot');
};

type OpenOptions = {
	id?: string;
	scrollTop?: number;
};

const open = async (
	page: Page,
	{ id = 'visual-cosmozomnitable--hierarchy', scrollTop = 0 }: OpenOptions = {},
) => {
	await page.goto(`iframe.html?id=${id}&viewMode=story`);
	const table = page.locator('cosmoz-omnitable').first();
	await expect(page.locator('cosmoz-omnitable-item-row').first()).toBeVisible();
	await settleRows(page);
	if (scrollTop > 0) {
		await page
			.locator('.tableContent-scroller')
			.first()
			.evaluate((el, top) => {
				el.scrollTop = top;
			}, scrollTop);
		await settleRows(page);
	}
	await settleCapture(page, table);
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

	test('grouped, one group folded', async ({ page }) => {
		await open(page, { id: 'visual-cosmozomnitable--grouped' });
		await page.locator('.groupRow .expand').first().click();
		await page.mouse.move(0, 0);
		await settleRows(page);
		await settleCapture(page, table(page));
		await expect(table(page)).toHaveScreenshot('grouped.png');
	});

	test('wide', async ({ page }) => {
		await open(page, { id: 'visual-cosmozomnitable--wide' });
		await page.mouse.move(0, 0);
		await expect(table(page)).toHaveScreenshot('wide.png');
	});

	test('tall rows, captured mid-list', async ({ page }) => {
		await open(page, {
			id: 'visual-cosmozomnitable--tall-rows-scrolled',
			scrollTop: 900,
		});
		await page.mouse.move(0, 0);
		await expect(table(page)).toHaveScreenshot('tall-rows-scrolled.png');
	});
});
