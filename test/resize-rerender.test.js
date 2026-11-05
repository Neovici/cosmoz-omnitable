import { assert, html, nextFrame } from '@open-wc/testing';

import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const frames = async (n = 3) => {
	for (let i = 0; i < n; i++) await nextFrame();
};

suite('width changes', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable, renders;

	setup(async () => {
		renders = 0;
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					style="width: 900px"
					.renderItem=${(item, index) => {
						renders++;
						return html`<div class="itemRow">${index}</div>`;
					}}
				>
					${['a', 'b', 'c', 'd'].map(
						(name) =>
							html`<cosmoz-omnitable-column
								name=${name}
								value-path=${name}
								title=${name}
							></cosmoz-omnitable-column>`
					)}
				</cosmoz-omnitable>
			`,
			generateTableDemoData(5, 10, 20)
		);
		await rowVisible();
		await frames();
	});

	test('do not re-render rows while no column collapses', async () => {
		renders = 0;
		for (let width = 899; width > 880; width--) {
			omnitable.style.width = `${width}px`;
			await frames(2);
		}
		assert.equal(renders, 0);
	});

	test('re-render rows when a column collapses', async () => {
		renders = 0;
		omnitable.style.width = '200px';
		await frames();
		assert.isAbove(renders, 0);
	});
});
