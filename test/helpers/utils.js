import { fixture } from '@open-wc/testing';
import { perform } from '@neovici/cfg/web/perform.js';

export const setupOmnitableFixture = async (omnitableFixture, data) => {
	const omnitable = await fixture(omnitableFixture);

	await perform(async ({ page, expect }) => {
		await expect(page.locator('cosmoz-omnitable-header-row')).toBeVisible();
	});

	omnitable.data = data;
	return omnitable;
};

export const rowVisible = async () => {
	await perform(async ({ page, expect }) => {
		await expect(page.locator('.itemRow').first()).toBeVisible();
	});
};

export const ignoreResizeObserverLoopErrors = (setup, teardown) => {
	// called before any tests are run
	const e = window.onerror;

	setup(() => {
		window.onerror = function (err) {
			if (
				err === 'ResizeObserver loop limit exceeded' ||
				err === 'ResizeObserver loop completed with undelivered notifications.'
			) {
				// eslint-disable-next-line no-console
				console.warn('Ignored:', err);
				return false;
			}
			return e(...arguments);
		};
	});

	teardown(() => {
		window.onerror = e;
	});
};
