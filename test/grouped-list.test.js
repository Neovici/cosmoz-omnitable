/* eslint-disable max-lines */
import { spy as sinonSpy } from 'sinon';
import { assert, html, fixture, nextFrame } from '@open-wc/testing';
import { setupIgnoreWindowResizeObserverLoopErrors } from '@lit-labs/virtualizer/support/resize-observer-errors.js';

import '../src/grouped-list/index';

const nextEvent = (element, eventName) =>
	new Promise((resolve) =>
		element.addEventListener(eventName, resolve, { once: true }),
	);

const renderItem = (item, index, { selected, expanded }) => html`
		I:${item.id}-${item.name}-${item.value}-${selected}-${expanded}
	`,
	renderGroup = (item, index, { selected, folded }) => html`
		G:${item.name}-${item.value}-${selected}-${folded}
	`,
	basicHtmlFixture = html`
		<cosmoz-grouped-list
			style="min-height: 300px"
			.renderItem=${renderItem}
			.renderGroup=${renderGroup}
		></cosmoz-grouped-list>
	`;

suite('empty', () => {
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element;

	setup(async () => {
		element = await fixture(basicHtmlFixture);
		element.data = [];
	});

	test('does not render any items', () => {
		assert.equal(element.innerText, '');
	});

	test('during init, it only updates selectedItems once', async () => {
		const el = document.createElement('cosmoz-grouped-list'),
			spy = sinonSpy();

		el.addEventListener('selected-items-changed', spy);
		el.data = [];

		document.body.appendChild(el);

		await nextFrame();

		assert.isTrue(spy.calledOnce);
	});

	test('it maintains selection accross data updates', async () => {
		const data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

		element.data = data;
		await nextEvent(element, 'visibilityChanged');

		element.select(data[2]);
		element.select(data[3]);

		element.data = data.concat([{ id: 4 }, { id: 5 }]);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---false-false\nI:1---false-false\nI:2---true-false\nI:3---true-false\nI:4---false-false\nI:5---false-false',
		);

		element.data = [data[2]];
		await nextFrame();
		await nextFrame();

		assert.equal(element.innerText, 'I:2---true-false');

		element.data = data;
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---false-false\nI:1---false-false\nI:2---true-false\nI:3---false-false',
		);

		element.deselect(data[2]);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---false-false\nI:1---false-false\nI:2---false-false\nI:3---false-false',
		);

		element.data = [{ id: 6 }];
		await nextFrame();
		await nextFrame();

		assert.equal(element.innerText, 'I:6---false-false');
	});

	test('it clears selection when all selected items are removed from the dataset', async () => {
		const data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

		element.data = data;
		await nextEvent(element, 'visibilityChanged');

		element.select(data[2]);
		element.select(data[3]);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---false-false\nI:1---false-false\nI:2---true-false\nI:3---true-false',
		);

		element.data = data.splice(0, 2);
		await nextFrame();
		await nextFrame();

		assert.equal(element.innerText, 'I:0---false-false\nI:1---false-false');
	});
});

suite('flat data', () => {
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element, items;

	setup(async () => {
		element = await fixture(basicHtmlFixture);
		items = [
			{
				id: 'i0',
				name: 'item 0',
				value: 0,
			},
			{
				id: 'i1',
				name: 'item 1',
				value: 1,
			},
			{
				id: 'i2',
				name: 'item 2',
				value: 1,
			},
		];

		element.data = items;
		await nextFrame();
		await nextFrame();
	});

	test('selects items', async () => {
		const item = items[0];
		element.select(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:i0-item 0-0-true-false\nI:i1-item 1-1-false-false\nI:i2-item 2-1-false-false',
		);
	});

	test('removing a selected item does not clear rest of selection [#41]', async () => {
		element.select(items[0]);
		element.select(items[1]);
		element.select(items[2]);
		element.data = [items[1], items[2]];

		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:i1-item 1-1-true-false\nI:i2-item 2-1-true-false',
		);
	});

	test('select all items [#977]', async () => {
		element.selectAll();

		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:i0-item 0-0-true-false\nI:i1-item 1-1-true-false\nI:i2-item 2-1-true-false',
		);
	});
});

suite('empty-groups', () => {
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element;

	setup(async () => {
		element = await fixture(basicHtmlFixture);
		element.data = [
			{
				name: 'Group 0',
				id: 'g0',
				items: [],
			},
			{
				name: 'Group 1',
				id: 'g1',
				items: [
					{
						id: 'g1-0',
						name: 'Group 1 item 0',
						value: 0,
					},
					{
						id: 'g1-1',
						name: 'Group 1 item 1',
						value: 1,
					},
				],
			},
		];
		await nextEvent(element, 'visibilityChanged');
	});

	test('does not render empty groups by default', () => {
		assert.equal(
			element.innerText,
			'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('renders empty groups when `displayEmptyGroups` is true', async () => {
		element.displayEmptyGroups = true;

		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nG:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});
});

suite('basic', () => {
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element, groups;

	setup(async () => {
		element = await fixture(basicHtmlFixture);

		groups = [
			{
				name: 'Group 0',
				id: 'g0',
				items: [
					{
						id: 'g0-0',
						name: 'Group 0 item 0',
						value: 0,
					},
					{
						id: 'g0-1',
						name: 'Group 0 item 1',
						value: 1,
					},
				],
			},
			{
				name: 'Group 1',
				id: 'g1',
				items: [
					{
						id: 'g1-0',
						name: 'Group 1 item 0',
						value: 0,
					},
					{
						id: 'g1-1',
						name: 'Group 1 item 1',
						value: 1,
					},
				],
			},
		];
		element.data = groups;
		await nextFrame();
		await nextFrame();
	});

	test('selects an item', async () => {
		const item = groups[0].items[0];

		element.select(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-true-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('deselects an item', async () => {
		const item = groups[1].items[0];

		element.select(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.deselect(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('selects a group', async () => {
		const group = groups[1];

		element.toggleSelect(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--true-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-true-false',
		);
	});

	test('deselects a group', async () => {
		const group = groups[0];

		element.toggleSelect(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nI:g0-0-Group 0 item 0-0-true-false\nI:g0-1-Group 0 item 1-1-true-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.toggleSelect(group, false);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('deselecting an item from group deselects the group', async () => {
		const group = groups[1],
			item = group.items[1];

		element.toggleSelect(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--true-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-true-false',
		);

		element.deselect(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('removing a selected item does not clear rest of selection [#41]', async () => {
		const group = groups[0];

		element.toggleSelect(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nI:g0-0-Group 0 item 0-0-true-false\nI:g0-1-Group 0 item 1-1-true-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.data = [{ ...groups[0], items: [group.items[1]] }, groups[1]];
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nI:g0-1-Group 0 item 1-1-true-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('selects all items', async () => {
		element.selectAll();
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nI:g0-0-Group 0 item 0-0-true-false\nI:g0-1-Group 0 item 1-1-true-false\n' +
				'G:Group 1--true-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-true-false',
		);
	});

	test('deselect all items', async () => {
		element.selectAll();
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--true-false\nI:g0-0-Group 0 item 0-0-true-false\nI:g0-1-Group 0 item 1-1-true-false\n' +
				'G:Group 1--true-false\nI:g1-0-Group 1 item 0-0-true-false\nI:g1-1-Group 1 item 1-1-true-false',
		);

		element.deselectAll();
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('folds a group', async () => {
		const group = groups[1];

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.toggleFold(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-true',
		);
	});

	test('unfolds a folded group', async () => {
		const group = groups[1];

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.toggleFold(group, true);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-true',
		);

		element.toggleFold(group, false);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});

	test('toggles collapse on an item', async () => {
		const item = groups[1].items[1];
		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);

		element.toggleCollapse(item);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 0--false-false\nI:g0-0-Group 0 item 0-0-false-false\nI:g0-1-Group 0 item 1-1-false-false\n' +
				'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-true',
		);
	});

	test('updates after data changes', async () => {
		element.data = [groups[1]];
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'G:Group 1--false-false\nI:g1-0-Group 1 item 0-0-false-false\nI:g1-1-Group 1 item 1-1-false-false',
		);
	});
});

suite('compare items function', () => {
	setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

	let element;

	setup(async () => {
		element = await fixture(basicHtmlFixture);
		element.data = [];
		await nextFrame();
		await nextFrame();
	});

	test('compare by id', async () => {
		const data = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];

		element.data = data;
		element.compareItemsFn = (a, b) => a.id === b.id;

		element.select(data[0]);
		element.select(data[1]);
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---true-false\nI:1---true-false\nI:2---false-false\nI:3---false-false',
		);

		element.data = [{ id: 0 }, { id: 1 }, { id: 5 }];
		await nextFrame();
		await nextFrame();

		assert.equal(
			element.innerText,
			'I:0---true-false\nI:1---true-false\nI:5---false-false',
		);

		element.data = [{ id: 0 }, { id: 5 }];
		await nextFrame();
		await nextFrame();

		assert.equal(element.innerText, 'I:0---true-false\nI:5---false-false');
	});
});
