import { assert, html, nextFrame } from '@open-wc/testing';
import i18next from 'i18next';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const deepLabel = (root) => {
	const label = root.querySelector('label');
	if (label) return label;
	for (const el of root.querySelectorAll('*')) {
		const found = el.shadowRoot && deepLabel(el.shadowRoot);
		if (found) return found;
	}
	return null;
};

suite('header hierarchy', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('sets column titles a step below the cells, nested inputs included', async () => {
		await i18next.init({ lng: 'en', resources: {} });
		const table = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					style="width: 500px; height: 300px; --cz-color-text-secondary: rgb(1, 2, 3); --cz-color-text-quaternary: rgb(4, 5, 6); --cz-text-sm: 14px; --cz-text-sm-line-height: 20px; --cz-text-base: 16px; --cz-text-base-line-height: 24px"
				>
					<cosmoz-omnitable-column
						name="description"
						title="Description"
						value-path="description"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column-autocomplete
						name="group"
						title="Group"
						value-path="group"
					></cosmoz-omnitable-column-autocomplete>
				</cosmoz-omnitable>
			`,
			[{ description: 'First', group: 'A' }]
		);
		await rowVisible();
		await nextFrame();
		const header = (name) =>
			deepLabel(table.shadowRoot.querySelector(`.header-cell[name="${name}"]`));
		const color = (el) => getComputedStyle(el).color;

		assert.equal(color(header('description')), 'rgb(4, 5, 6)');
		assert.equal(color(header('group')), 'rgb(4, 5, 6)');
		assert.equal(
			color(table.shadowRoot.querySelector('.itemRow-cell')),
			'rgb(1, 2, 3)'
		);
		assert.equal(
			header('description').getBoundingClientRect().top,
			header('group').getBoundingClientRect().top,
			'titles of plain and autocomplete filters share a line'
		);
	});
});
