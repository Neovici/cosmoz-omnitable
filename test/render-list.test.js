import { expect, fixture, html, nextFrame } from '@open-wc/testing';
import i18next, { init, t } from 'i18next';
import { renderList } from '../src/lib/render-list';

suite('render-list', () => {
	suiteSetup(() => init());

	test('error', async () => {
		const el = await fixture(
			html` <div class="tableContent" id="tableContent">
				${renderList(
					{ settingsConfig: {} },
					{ error: { message: 'An error occurred' } },
				)}
			</div>`,
		);
		await nextFrame();
		await expect(el).to.equalSnapshot();
	});
});
