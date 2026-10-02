import { assert, html, nextFrame } from '@open-wc/testing';

import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

suite('headerColumns', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('limits the header strip to the listed columns', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable .headerColumns=${['name', 'amount', 'nonexistent']}>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="amount"
						value-path="amount"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="bool"
						value-path="bool"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();

		const names = Array.from(
			omnitable.shadowRoot.querySelectorAll('.header-cell')
		).map((cell) => cell.getAttribute('name'));
		assert.deepEqual(names, ['name', 'amount'], 'intersection, no phantoms');

		assert.exists(
			omnitable.shadowRoot.querySelector('.header .checkbox.all'),
			'select-all alive'
		);
		assert.exists(
			omnitable.shadowRoot.querySelector(
				'.header cosmoz-omnitable-header-row cosmoz-omnitable-settings'
			),
			'⋮ alive inside the header-row'
		);
	});

	test('null restores the full strip', async () => {
		const omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable>
					<cosmoz-omnitable-column
						name="name"
						value-path="name"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="amount"
						value-path="amount"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="bool"
						value-path="bool"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(10, 11, 25)
		);

		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.shadowRoot.querySelectorAll('.header-cell').length,
			3
		);

		omnitable.headerColumns = ['amount'];
		await nextFrame();
		await nextFrame();
		assert.deepEqual(
			Array.from(omnitable.shadowRoot.querySelectorAll('.header-cell')).map(
				(cell) => cell.getAttribute('name')
			),
			['amount']
		);

		omnitable.headerColumns = null;
		await nextFrame();
		await nextFrame();
		assert.equal(
			omnitable.shadowRoot.querySelectorAll('.header-cell').length,
			3
		);
	});
});
