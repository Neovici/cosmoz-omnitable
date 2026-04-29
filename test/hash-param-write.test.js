import { assert, html, nextFrame } from '@open-wc/testing';

import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-column-autocomplete.js';
import '../src/cosmoz-omnitable-column.js';
import '../src/cosmoz-omnitable.js';

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
	basicFixture = html`
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
	savedSettingsFixture = html`
		<cosmoz-omnitable
			hash-param="test"
			settings-id="test-settings"
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
	instantiate = async () => {
		await nextFrame();
		omnitable = await setupOmnitableFixture(basicFixture, data);
		await nextFrame();
	},
	instantiateWithSettings = async () => {
		await nextFrame();
		omnitable = await setupOmnitableFixture(savedSettingsFixture, data);
		await nextFrame();
	};

suite('basic-write', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

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
		omnitable.setFilterState('id', { filter: [0, 1] });
		await nextFrame();
		assert.equal(location.hash, '#!/#test-filter--id=%5B0%2C1%5D');

		omnitable.setFilterState('id', { filter: null });
		await nextFrame();
		assert.equal(location.hash, '#!/');
	});
});

suite('hash params vs saved settings', () => {
	const SETTINGS_KEY = 'omnitable-test-settings';

	ignoreResizeObserverLoopErrors(setup, teardown);

	setup(() => {
		localStorage.removeItem(SETTINGS_KEY);
	});

	teardown(() => {
		localStorage.removeItem(SETTINGS_KEY);
	});

	test('hash params override saved settings', async () => {
		localStorage.setItem(
			SETTINGS_KEY,
			JSON.stringify({ sortOn: 'name', descending: false }),
		);
		location.hash = '#!/#test-sortOn=id&test-descending=true';
		await instantiateWithSettings();

		assert.equal(omnitable.sortOn, 'id');
		assert.equal(omnitable.descending, true);
		assert.equal(location.hash, '#!/#test-sortOn=id&test-descending=true');
	});

	test('saved settings sync to hash when no hash params', async () => {
		localStorage.setItem(
			SETTINGS_KEY,
			JSON.stringify({ sortOn: 'name', descending: true }),
		);
		location.hash = '#!/';
		await instantiateWithSettings();

		// Wait for async settings load
		await new Promise((resolve) => setTimeout(resolve, 50));
		await nextFrame();

		assert.equal(omnitable.sortOn, 'name');
		assert.equal(omnitable.descending, true);
		assert.equal(location.hash, '#!/#test-sortOn=name&test-descending=true');
	});

	test('host attribute syncs to hash when no hash params and no saved', async () => {
		location.hash = '#!/';
		await nextFrame();

		// Set host attribute before columns ready
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable
					hash-param="test"
					sort-on="group"
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
		await nextFrame();

		assert.equal(omnitable.sortOn, 'group');
		assert.equal(location.hash, '#!/#test-sortOn=group');
	});

	test('saved settings load async does not overwrite explicit hash', async () => {
		localStorage.setItem(
			SETTINGS_KEY,
			JSON.stringify({ sortOn: 'name', descending: true }),
		);
		location.hash = '#!/#test-sortOn=id&test-descending=false';
		await instantiateWithSettings();

		// Wait for async settings load
		await new Promise((resolve) => setTimeout(resolve, 50));

		assert.equal(omnitable.sortOn, 'id');
		assert.equal(omnitable.descending, false);
		assert.equal(location.hash, '#!/#test-sortOn=id&test-descending=false');
	});

	test('multiple params: hash params take precedence individually', async () => {
		localStorage.setItem(
			SETTINGS_KEY,
			JSON.stringify({ sortOn: 'name', groupOn: 'group' }),
		);
		location.hash = '#!/#test-sortOn=id';
		await instantiateWithSettings();

		// Wait for async settings load
		await new Promise((resolve) => setTimeout(resolve, 50));

		assert.equal(omnitable.sortOn, 'id');
		assert.equal(omnitable.groupOn, 'group');
		assert.include(location.hash, 'test-sortOn=id');
		assert.include(location.hash, 'test-groupOn=group');
	});
});
