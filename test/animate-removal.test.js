import { assert, aTimeout, html, nextFrame } from '@open-wc/testing';
import { emulateMedia } from '@web/test-runner-commands';

import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const rowOf = (omnitable, item) =>
	[...omnitable.shadowRoot.querySelectorAll('cosmoz-grouped-list-row')].find(
		(r) => r.item === item
	);

const mount = async () => {
	const omnitable = await setupOmnitableFixture(
		html`<cosmoz-omnitable animate-removal>
			<cosmoz-omnitable-column name="name" value-path="name">
			</cosmoz-omnitable-column>
		</cosmoz-omnitable>`,
		generateTableDemoData(10, 11, 25)
	);
	await nextFrame();
	return omnitable;
};

suite('animate-removal', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	teardown(() => emulateMedia({ reducedMotion: 'no-preference' }));

	test('fades the row out before removing the item', async () => {
		const omnitable = await mount(),
			item = omnitable.data[2],
			below = omnitable.data[3],
			length = omnitable.data.length;

		assert.equal(omnitable.removeItem(item), item);
		assert.lengthOf(rowOf(omnitable, item).getAnimations(), 1);
		assert.include(omnitable.data, item);

		await aTimeout(200);
		assert.notInclude(omnitable.data, item);
		assert.lengthOf(omnitable.data, length - 1);
		assert.isNotEmpty(rowOf(omnitable, below).getAnimations());
	});

	test('removes several items in one commit', async () => {
		const omnitable = await mount(),
			items = omnitable.data.slice(1, 3),
			length = omnitable.data.length;

		assert.sameMembers(omnitable.removeItems(items), items);
		await aTimeout(200);
		assert.lengthOf(omnitable.data, length - 2);
	});

	test('removes at once under reduced motion', async () => {
		await emulateMedia({ reducedMotion: 'reduce' });
		const omnitable = await mount(),
			item = omnitable.data[2];

		omnitable.removeItem(item);
		assert.notInclude(omnitable.data, item);
	});
});
