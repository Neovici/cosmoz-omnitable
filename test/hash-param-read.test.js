import { assert, html } from '@open-wc/testing';

import { ignoreResizeObserverLoopErrors, setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-column-autocomplete.js';
import '../cosmoz-omnitable-column.js';

let omnitable;
const data = [
		{
			id: 0,
			group: 'group0',
			name: 'Item 0',
		},
		{
			id: 1,
			group: 'group0',
			name: 'Item 1',
		},
		{
			id: 2,
			group: 'group1',
			name: 'Item 2',
		},
		{
			id: 3,
			group: 'group1',
			name: 'Item 3',
		},
	],
	location = window.location,
	instantiate = async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					hash-param="test"
					style="height:300px"
					.resizeSpeedFactor=${1}
				>
					<cosmoz-omnitable-column-autocomplete
						width="40px"
						title="Id"
						name="id"
						value-path="id"
						sort-on="id"
						group-on="id"
					>
					</cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column-autocomplete
						title="Group"
						name="group"
						value-path="group"
						flex="0"
						width="125px"
					>
					</cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column
						title="Name"
						name="name"
						value-path="name"
						sort-on="name"
						group-on="name"
						flex="2"
					>
					</cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			data,
		);
	};

suite('basic-read', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	setup(() => {
		location.hash = '#!/';
	});
	test('updates sortOn from url hash', async () => {
		location.hash = '#!/#test-sortOn=id';
		await instantiate();
		assert.equal(omnitable.sortOn, 'id');
		assert.isUndefined(omnitable.descending);
	});

	test('updates groupOn from url hash', async () => {
		location.hash = '#!/#test-groupOn=group';
		await instantiate();
		assert.equal(omnitable.groupOn, 'group');
		assert.isUndefined(omnitable.descending);
	});

	test('updates groupOn, sortOn and descending from url hash', async () => {
		location.hash = '#!/#test-groupOn=id&test-sortOn=name&test-descending';
		await instantiate();
		assert.equal(omnitable.groupOn, 'id');
		assert.equal(omnitable.sortOn, 'name');
		assert.isTrue(omnitable.descending);
	});

	test('updates filter from url hash', async () => {
		location.hash = '#!/#test-filter--id=["1"]';
		await instantiate();
		assert.isArray(omnitable.filters.id);
		assert.lengthOf(omnitable.filters.id, 1);
		assert.include(omnitable.filters.id, '1');
	});

	test('updates filter from url hash (text column)', async () => {
		location.hash = '#!/#test-filter--name=john';
		await instantiate();
		assert.equal(omnitable.filters.name, 'john');
		assert.equal(
			omnitable.shadowRoot
				.querySelector('.header-cell[title=Name]')
				.querySelector('cosmoz-input').value,
			'john',
		);
	});
});
