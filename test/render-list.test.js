import { renderList } from '../lib/render-list';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';

suite('render-list', () => {
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
