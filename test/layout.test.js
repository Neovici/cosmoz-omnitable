import { assert } from '@open-wc/testing';
import { FORCE_FIT, layout } from '../lib/layout';

const toObj = ([width, minWidth, flex]) => ({ width, minWidth, flex });

suite('layout algorithm', () => {
	test('it works', () => {
		const cases = [
			[
				[[100, 50, 0], [100, 50, 0]],
				200,
				[100, 100]
			],
			[
				[[100, 50, 1], [100, 50, 1]],
				200,
				[100, 100]
			],
			[
				[[100, 50, 1], [0, 0, 0], [100, 50, 1]],
				200,
				[100, 0, 100]
			],
			[
				[[50, 50, 1], [50, 50, 1]],
				100,
				[50, 50]
			],
			[
				[[100, 50, 1], [100, 50, 1]],
				300,
				[150, 150]
			],
			[
				[[100, 50, 1], [100, 50, 1]],
				400,
				[200, 200]
			],
			[
				[[50, 50, 1], [100, 50, 1]],
				400,
				[175, 225]
			],
			[
				[[50, 50, 2], [100, 50, 1]],
				300,
				[150, 150]
			],
			[
				[[50, 50, 2], [100, 50, 1]],
				400,
				[216.66666666666666, 183.33333333333331]
			],
			[
				[[100, 50, 1]],
				90,
				[90]
			],
			[
				[[50, 50, 2], [100, 50, 1]],
				150,
				[50, 100]
			],
			[
				[[50, 50, 2], [100, 50, 1]],
				140,
				[50, 90]
			],
			[
				[[50, 25, 2], [100, 50, 1]],
				120,
				[40, 80]
			],
			[
				[[50, 25, 2], [100, 50, 1], [100, 50, 1]],
				120,
				[25, 50, 50]
			],
			[
				[[50, 25, 2], [100, 50, 1], [100, 50, 1]],
				150,
				[30, 60, 60]
			],
			[
				[[50, 25, 2], [100, 50, 1], [100, 65, 1]],
				150,
				[28.333333333333332, 56.666666666666664, 65]
			],
			[
				[[50, 25, 2], [100, 50, 3], [200, 50, 1]],
				150,
				[25, 50, 75]
			],
			[
				[[50, 25, 2], [100, 50, 3], [200, 50, 1]],
				224,
				[32, 64, 128]
			],
			[
				[[50, 25, 2], [100, 100, 3], [200, 50, 1]],
				224,
				[24.8, 100, 99.2]
			],
			[
				[[50, 25, 3], [100, 100, 3], [200, 50, 0]],
				400,
				[75, 125, 200]
			],
			[
				[[50, 25, 3], [100, 100, 3], [200, 50, 0], [100, 20, 0]],
				700,
				[175, 225, 200, 100]
			],
			[
				[[75, 55, 2], [70, 40, 1], [100, 82, 0], [40, 55, 0], [75, 40, 0], [125, 55, 0]],
				1106,
				[479, 272, 100, 55, 75, 125]
			]
		];
		cases.forEach(([columns, container, result]) => {
			assert.deepEqual(layout(columns.map(toObj), container), result);
		});
	});


	test('forceFit', () => {
		const cases = [
			[
				[[50, 50, 0], [50, 50, 0]],
				200,
				[150, 50]
			]
		];
		cases.forEach(([columns, container, result]) => {
			assert.deepEqual(layout(columns.map(toObj), container, FORCE_FIT), result);
		});
	});
});
