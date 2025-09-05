import { genericSorter } from '../src/lib/generic-sorter';
import { assert } from '@open-wc/testing';

suite('generic sorter', () => {
	test('array sort', () => {
		assert.deepEqual([1, 1, 3, 4, 5].sort(genericSorter), [1, 1, 3, 4, 5]);
		assert.deepEqual([1, null, 3, 4, 5].sort(genericSorter), [
			null,
			1,
			3,
			4,
			5,
		]);
		assert.deepEqual([null, null, 3, 4, 5].sort(genericSorter), [
			null,
			null,
			3,
			4,
			5,
		]);
		assert.deepEqual([1, 2, 3, 4, 5].sort(genericSorter), [1, 2, 3, 4, 5]);
		assert.deepEqual(
			[
				[1, 2],
				[7, 8],
				[3, 4],
			].sort(genericSorter),
			[
				[1, 2],
				[3, 4],
				[7, 8],
			],
		);
		assert.deepEqual(['x', 3, 1, [1, 2], true].sort(genericSorter), [
			'x',
			1,
			3,
			[1, 2],
			true,
		]);
		assert.deepEqual(['x', 'h', 'w', 'p'].sort(genericSorter), [
			'h',
			'p',
			'w',
			'x',
		]);
		assert.deepEqual([false, true, false, true].sort(genericSorter), [
			true,
			true,
			false,
			false,
		]);
	});
});
