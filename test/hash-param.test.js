import {
	assert, html, nextFrame
} from '@open-wc/testing';

import { setupOmnitableFixture } from './helpers/utils';

import '../cosmoz-omnitable.js';
import '../cosmoz-omnitable-column-autocomplete.js';
import '../cosmoz-omnitable-column.js';

let omnitable;
const data = [{
		id: 0,
		group: 'group0',
		name: 'Item 0'
	}, {
		id: 1,
		group: 'group0',
		name: 'Item 1'
	}, {
		id: 2,
		group: 'group1',
		name: 'Item 2'
	}, {
		id: 3,
		group: 'group1',
		name: 'Item 3'
	}],
	location = window.location,
	instantiate = async () => {
		omnitable = await setupOmnitableFixture(html`
			<cosmoz-omnitable hash-param="test" style='height:300px' .resizeSpeedFactor=${ 1 }>
				<cosmoz-omnitable-column-autocomplete width="40px" title="Id" name="id" value-path="id" sort-on="id" group-on="id">
				</cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column-autocomplete title="Group" name="group" value-path="group" flex="0" width="125px">
				</cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column title="Name" name="name" value-path="name" sort-on="name" group-on="name" flex="2">
				</cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`, data);
		await nextFrame();
	};

suite('basic-read', () => {
	teardown(() => {
		location.hash = '';
	});
	test('updates sortOn from url hash', async () => {
		location.hash = '#/#test-sortOn=id';
		await instantiate();
		assert.equal(omnitable.sortOn, 'id');
		assert.isFalse(omnitable.descending);
	});

	test('updates groupOn from url hash', async () => {
		location.hash = '#/#test-groupOn=group';
		await instantiate();
		assert.equal(omnitable.groupOn, 'group');
		assert.isFalse(omnitable.descending);

	});

	test('updates groupOn, sortOn and descending from url hash', async () => {
		location.hash = '#/#test-groupOn=id&test-sortOn=name&test-descending';
		await instantiate();
		assert.equal(omnitable.groupOn, 'id');
		assert.equal(omnitable.sortOn, 'name');
		assert.isTrue(omnitable.descending);

	});

	test('updates filter from url hash', async () => {
		location.hash = '#/#test-filter--id=["1"]';
		await instantiate();
		assert.isArray(omnitable.columns[0].filter);
		assert.lengthOf(omnitable.columns[0].filter, 1);
		assert.include(omnitable.columns[0].filter, '1');

	});

	test('updates filter from url hash (text column)', async () => {
		location.hash = '#/#test-filter--name=john';
		await instantiate();
		assert.equal(omnitable.columns[2].filter, 'john');
		assert.equal(
			omnitable
				.shadowRoot
				.querySelector('.header-cell[title=Name]')
				.querySelector('paper-input')
				.value,
			'john'
		);

	});
});

suite('basic-write', () => {
	setup(instantiate);
	teardown(() => {
		location.hash = '';
	});
	test('updates _routeHash with defaults', () => {
		const hash = omnitable._routeHash;
		assert.equal(hash['test-sortOn'], '');
		assert.equal(hash['test-groupOn'], '');
		assert.isUndefined(hash['test-descending']);
	});

	test('updates _routeHash from sortOn', () => {
		const hash = omnitable._routeHash;

		omnitable.sortOn = 'name';
		omnitable.debouncers._sortItemsDebouncer.flush();
		assert.equal(hash['test-sortOn'], 'name');

		omnitable.sortOn = '';
		omnitable.debouncers._sortItemsDebouncer.flush();
		assert.equal(hash['test-sortOn'], '');
	});

	test('updates _routeHash from groupOn', () => {
		const hash = omnitable._routeHash;

		omnitable.groupOn = 'name';
		omnitable.debouncers._groupItemsDebouncer.flush();
		assert.equal(hash['test-groupOn'], 'name');

		omnitable.groupOn = '';
		omnitable.debouncers._groupItemsDebouncer.flush();
		assert.equal(hash['test-groupOn'], '');
	});

	test('updates _routeHash from descending', () => {
		const hash = omnitable._routeHash;
		assert.isUndefined(hash['test-descending']);

		omnitable.descending = true;
		omnitable.flush();
		assert.equal(hash['test-descending'], '');

		omnitable.descending = false;
		omnitable.flush();
		assert.isNull(hash['test-descending']);
	});

	test('updates _routeHash from filter', () => {
		const column = omnitable.columns[0],
			hash = omnitable._routeHash;

		column.filter = [0, 1];
		omnitable.flush();
		assert.equal(hash['test-filter--id'], '[0,1]');

		column.resetFilter();
		omnitable.flush();
		assert.equal(hash['test-filter--id'], null);
	});

});
