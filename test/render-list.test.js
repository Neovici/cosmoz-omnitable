import { t, init } from 'i18next';
import { renderList } from '../src/lib/render-list';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';
import i18next from 'i18next';

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
