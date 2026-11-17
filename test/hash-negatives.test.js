import { assert, html, nextFrame } from '@open-wc/testing';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const data = [
	{ id: 0, name: 'Alice', age: 30 },
	{ id: 1, name: 'Bob', age: 25 },
];

const omnitableFixture = html`
	<cosmoz-omnitable
		hash-param="neg"
		style="height: 300px"
		selection-enabled
		.resizeSpeedFactor=${1}
	>
		<cosmoz-omnitable-column
			title="Name"
			name="name"
			value-path="name"
			sort-on="name"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column-number
			title="Age"
			name="age"
			value-path="age"
			sort-on="age"
		></cosmoz-omnitable-column-number>
	</cosmoz-omnitable>
`;

suite('hash param negatives', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	teardown(() => {
		location.hash = '#!/';
	});

	test('documents the gap: unknown column sortOn is adopted, table still renders', async () => {
		location.hash = '#!/#neg-sortOn=doesNotExist';
		const omni = await setupOmnitableFixture(omnitableFixture, data);
		await nextFrame();

		assert.deepEqual(
			omni.shadowRoot.querySelectorAll('.itemRow').length > 0,
			true,
			'the table renders its rows with unknown hash params',
		);
		// GAP (W5 spec): the hash reader does not validate column names - an
		// unknown column's sortOn is adopted verbatim. Pinned as the current
		// behavior; the assert flips to isUndefined when a fix lands.
		assert.equal(
			omni.sortOn,
			'doesNotExist',
			'current gap: unknown column sortOn is applied verbatim',
		);
	});

	test('unknown groupOn param is adopted verbatim but rendering survives', async () => {
		location.hash = '#!/#neg-groupOn=zero&neg-filter--none=%5B%2210%22%5D';
		const omni = await setupOmnitableFixture(omnitableFixture, data);
		await nextFrame();

		assert.lengthOf(
			omni.sortedFilteredGroupedItems,
			2,
			'both items remain visible with unknown params',
		);
		// GAP (W5 spec): groupOn is not validated either - it is adopted
		// verbatim. The load-bearing assert is that rendering survives.
		assert.equal(
			omni.groupOn,
			'zero',
			'current gap: unknown column groupOn is applied verbatim',
		);
	});
});
