import { useGroupFilterSort } from '../lib/use-group-filter-sort';
import { component } from 'haunted';
import {
	assert, html, fixture, nextFrame
} from '@open-wc/testing';
import { generateTableDemoData } from '../demo/table-demo-helper';

customElements.define(
	'group-filter-sort-performance-test',
	component(function (props) {
		// eslint-disable-next-line no-invalid-this
		this.current = useGroupFilterSort(props);
	})
);

const
	config = {
		amount: { type: Object },
		bool: { type: Boolean },
		date: { type: Date },
		dateJSON: { type: String },
		group: { type: String },
		id: { type: Number },
		list: { type: Array },
		name: { type: String },
		object: { type: Number },
		objectList: { type: Array },
		randomString: { type: String },
		randomString2: { type: String },
		randomString3: { type: String },
		randomString4: { type: String },
		sub: { type: Object },
		value: { type: Number }
	},
	// NOTE: with less than 5000 items, operations normally take <5ms, ~1ms in most cases
	// even with 20000 items, when filtering is used, sorting and grouping takes <10ms
	// the slowest operation is sorting large datasets with no filtering
	maxDuration = 100,
	maxAvgDuration = 30;

suite('performance tests', () => {
	[1, 10, 100, 1000, 3000, 5000, 10000, 20000].forEach(numItems => {
		let items,
			result;
		setup(async () => {
			items = generateTableDemoData(Math.sqrt(numItems), Math.sqrt(numItems), 1000);
			await nextFrame();

			result = await fixture(
				html`<group-filter-sort-performance-test .config="${config}" .items="${items}" />`
			);
			await nextFrame();
		});

		test(`test with ${numItems} items`, async () => {
			performance.mark('mark1');

			result.sortBy = 'value';
			await nextFrame();

			performance.mark('mark2');

			result.sortBy = undefined;
			await nextFrame();

			performance.mark('mark3');

			result.filters = [
				({ value }) => value < 1000
			];
			result.sortBy = 'bool';
			await nextFrame();

			performance.mark('mark4');

			result.sortBy = 'value';
			await nextFrame();

			performance.mark('mark5');

			result.groupBy = 'group';
			result.sortBy = undefined;
			result.filters = undefined;
			await nextFrame();

			performance.mark('mark6');

			result.groupBy = 'group';
			result.sortBy = 'value';
			result.filters = undefined;
			await nextFrame();

			performance.mark('mark7');

			result.groupBy = 'group';
			result.sortBy = 'value';
			result.filters = [({ value }) => value < 1000];
			await nextFrame();

			performance.mark('mark8');

			performance.measure('sort by value', 'mark1', 'mark2');
			performance.measure('clear sort', 'mark2', 'mark3');
			performance.measure('sort and filter', 'mark3', 'mark4');
			performance.measure('sort and filter by value', 'mark4', 'mark5');
			performance.measure('only group', 'mark5', 'mark6');
			performance.measure('group and sort', 'mark6', 'mark7');
			performance.measure('group, sort and filter', 'mark7', 'mark8');

			// Pull out all of the measurements.
			const measurements = performance.getEntriesByType('measure');
			measurements.forEach(measure =>
				// NOTE: each measurement duration is at least 16ms,
				// due to the way the haunted state is updated (only once every animation frame)
				assert.isAtMost(measure.duration, maxDuration, measure.name)
			);
			const avg = measurements.reduce((sum, measure) => sum + measure.duration, 0) / measurements.length;
			assert.isAtMost(avg, maxAvgDuration);
		});

		teardown(() => {
			performance.clearMarks();
			performance.clearMeasures();
		});
	});
});
