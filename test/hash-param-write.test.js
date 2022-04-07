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
		await nextFrame();
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

suite('basic-write', () => {
	setup(async () => {
		location.hash = '#!/';
		await instantiate();
	});

	test('does not change the hash with default settings', () => {
		assert.equal(location.hash, '#!/');
	});

	test('updates location from sortOn', async () => {
		omnitable.setSortOn('name');
		await nextFrame();
		assert.equal(location.hash, '#!/#test-sortOn=name');

		omnitable.setSortOn('');
		await nextFrame();
		assert.equal(location.hash, '#!/');
	});

	test('updates location from groupOn', async () => {
		omnitable.setGroupOn('name');
		await nextFrame();
		assert.equal(location.hash, '#!/#test-groupOn=name');

		omnitable.setGroupOn('');
		await nextFrame();
		assert.equal(location.hash, '#!/');
	});

	test('updates location from descending', async () => {
		assert.equal(location.hash, '#!/');

		omnitable.setDescending(true);
		await nextFrame();
		assert.equal(location.hash, '#!/#test-descending=true');

		omnitable.setDescending(false);
		await nextFrame();
		assert.equal(location.hash, '#!/#test-descending=false');

		omnitable.setDescending(null);
		await nextFrame();
		assert.equal(location.hash, '#!/');
	});

	test('updates location from filter', async () => {
		omnitable.setFilterState('id', { filter: [0, 1]});
		await nextFrame();
		assert.equal(location.hash, '#!/#test-filter--id=%5B0%2C1%5D');

		omnitable.setFilterState('id', { filter: null });
		await nextFrame();
		assert.equal(location.hash, '#!/');
	});

});
