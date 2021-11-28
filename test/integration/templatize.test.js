import {
	expect, html, nextFrame
} from '@open-wc/testing';

import { setupOmnitableFixture } from '../helpers/utils';
import { flush as polymerFlush } from '@polymer/polymer/lib/utils/flush';

import '../../cosmoz-omnitable.js';
import '../helpers/fixtures/basic-column.js';
import { columnSymbol } from '../../lib/normalize-settings';

suite('Basic omnitable functionality', () => {
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable id="omnitable" selection-enabled style="min-height: 500px;" .resizeSpeedFactor=${ 1 }>
				<basic-column name="basic" value-path="name"></basic-column>
				<basic-column
					name="override"
					value-path="name"
					.renderCell=${ (column, { item }) => html`<span class="overriden-column-cell">Overriden ${ item.name }</span>` }
					.renderHeader=${ () => html`<span class="overriden-column-header">Overriden Header</span>` }
				></basic-column>
				<!-- this column requires that host props are properly forwarded to the cell templates -->
				<cosmoz-omnitable-column-list title="List" name="list" value-path="list">
				</cosmoz-omnitable-column-list>
				<!-- this column requires that the cell events are decorated with the parent model -->
				<cosmoz-omnitable-column-boolean title="Boolean" name="bool" value-path="bool"
					sort-on="bool" group-on="bool" true-label="Yes" false-label="No">
				</cosmoz-omnitable-column-boolean>
			</cosmoz-omnitable>
		`, [{
			id: 1,
			name: 'item 1',
			list: ['a', 'b', 'c'],
			bool: true
		}, {
			id: 2,
			name: 'item 2',
			list: ['a', 'b', 'c'],
			bool: false
		}, {
			id: 3,
			name: 'item 3',
			list: ['a', 'b', 'c'],
			bool: true
		}]);
		polymerFlush();
		await nextFrame();
		await nextFrame();
	});

	test('should display headers as configured', () => {
		const headers = Array.from(omnitable.shadowRoot.querySelectorAll('.basic-column-header, .overriden-column-header'));
		expect(headers).to.not.be.empty;
		expect(headers.length).to.equal(2);
		expect(headers.map(i => i.innerText)).to.deep.equal(['Header', 'Overriden Header']);
	});

	test('should display cells as configured', () => {
		const cells = Array.from(omnitable.shadowRoot.querySelectorAll('.basic-column-cell, .overriden-column-cell'));
		expect(cells).to.not.be.empty;
		expect(cells.length).to.equal(6);
		expect(cells.map(c => c.innerText)).to.deep.equal(['item 1', 'Overriden item 1', 'item 2', 'Overriden item 2', 'item 3', 'Overriden item 3']);
	});

	test('forwards changes to the data', async () => {
		omnitable.data = [{
			id: 4,
			name: 'item 4'
		}, {
			id: 5,
			name: 'item 5'
		}, {
			id: 6,
			name: 'item 6'
		}];

		await nextFrame();
		polymerFlush();
		await nextFrame();

		const cells = Array.from(omnitable.shadowRoot.querySelectorAll('.basic-column-cell, .overriden-column-cell'));
		expect(cells.map(c => c.innerText)).to.deep.equal(['item 4', 'Overriden item 4', 'item 5', 'Overriden item 5', 'item 6', 'Overriden item 6']);
	});

	test('should use editable template when the column is editable', async () => {
		omnitable.columns.forEach(c => {
			c[columnSymbol].editable = true;
		});

		await nextFrame();

		const cells = Array.from(omnitable.shadowRoot.querySelectorAll('.basic-column-cell'));
		expect(cells.map(c => c.innerText)).to.deep.equal(['Edit: item 1', 'Edit: item 1', 'Edit: item 2', 'Edit: item 2', 'Edit: item 3', 'Edit: item 3']);
	});

	test('should detach all template instances when omnitable is detached');
});
