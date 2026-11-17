import { assert } from '@open-wc/testing';
import { computeLayout } from '../src/lib/compute-layout';

let nextIndex = 0;
const column = (
	name,
	priority,
	{ width = 100, minWidth = 0, flex = 1 } = {},
) => ({
	name,
	priority,
	width,
	minWidth,
	flex,
	index: nextIndex++,
});

const namesOf = (config, widths) =>
	widths
		.map((w, i) => (w == null || w === 0 ? null : config[i].name))
		.filter(Boolean);

suite('compute-layout', () => {
	setup(() => {
		nextIndex = 0;
	});
	// columns deliberately in REVERSE priority order: the priority, not the
	// DOM position, must drive what is dropped
	test('drops and restores columns by priority, not DOM order', () => {
		const config = [
				column('p3', 3),
				column('p1', 1),
				column('p2', 2),
				column('p0', 0),
				column('pm10', -10),
			],
			visibleAt = (canvas) => namesOf(config, computeLayout(config, canvas, 5));

		// 5 × 100px in 800px: everything is visible
		assert.deepEqual(visibleAt(800), ['p3', 'p1', 'p2', 'p0', 'pm10']);

		// 480px: only four columns fit - the highest priority number (p3,
		// sitting at DOM index 0) must drop, NOT the DOM-last column
		assert.deepEqual(
			visibleAt(480),
			['p1', 'p2', 'p0', 'pm10'],
			'the drop follows the priority queue, not the DOM order',
		);

		// and widening the canvas restores the identical set, in DOM order
		assert.deepEqual(
			visibleAt(800),
			['p3', 'p1', 'p2', 'p0', 'pm10'],
			'restoring the canvas brings back the dropped set identically',
		);
	});

	test('a column is never squeezed below its min-width; it overflows instead', () => {
		const config = [column('wide', 0, { minWidth: 500 })],
			widths = computeLayout(config, 400, 1);

		assert.deepEqual(
			widths,
			[500],
			'the min-width wins over the canvas: the column renders at 500px and overflows (pinned by the Wide visual story)',
		);
	});
});
