import { applySingleFilter, renderValue } from '../src/lib/utils-date';
import { assert } from '@open-wc/testing';

suite('utils-date', () => {
	suite('renderValue', () => {
		const formatter = {
			format: (date) => date.toLocaleString('en-GB', { timeZone: 'UTC' }),
		};

		test('handles null formatter', () => {
			assert.equal(renderValue(1644319121000, null), undefined);
		});

		test('formats a timestamp to human locale', () => {
			assert.equal(
				renderValue(1644319121000, formatter),
				'08/02/2022, 11:18:41',
			);
		});

		test('handles non-date values', () => {
			assert.equal(renderValue('some value', formatter), undefined);
		});

		test('formats a date string to locale', () => {
			assert.equal(
				renderValue('2022-02-08T11:18:41+02:00', formatter),
				'08/02/2022, 09:18:41',
			);
		});

		test('formats a date number to locale', () => {
			assert.equal(
				renderValue(Date.UTC(2022, 1, 8, 13, 32, 0), formatter),
				'08/02/2022, 13:32:00',
			);
		});
	});

	suite('applySingleFilter', () => {
		test('creates a filter for a range', () => {
			const filter = applySingleFilter(
				{ valuePath: 'startDate' },
				{ min: '2023-01-01', max: '2023-12-31' },
			);
			assert.isFalse(filter({ startDate: '2022-03-15' }));
			assert.isTrue(filter({ startDate: '2023-03-15' }));
			assert.isFalse(filter({ startDate: '2024-03-15' }));
		});

		test('creates a filter for a range with only a minimum value', () => {
			const filter = applySingleFilter(
				{ valuePath: 'startDate' },
				{ min: '2023-01-01', max: null },
			);
			assert.isFalse(filter({ startDate: '2022-03-15' }));
			assert.isTrue(filter({ startDate: '2023-03-15' }));
			assert.isTrue(filter({ startDate: '2024-03-15' }));
		});

		test('creates a filter for a range with only a maximum value', () => {
			const filter = applySingleFilter(
				{ valuePath: 'startDate' },
				{ min: null, max: '2023-12-31' },
			);
			assert.isTrue(filter({ startDate: '2022-03-15' }));
			assert.isTrue(filter({ startDate: '2023-03-15' }));
			assert.isFalse(filter({ startDate: '2024-03-15' }));
		});

		test('creates a filter for an empty range', () => {
			const filter = applySingleFilter(
				{ valuePath: 'startDate' },
				{ min: null, max: null },
			);
			assert.isTrue(filter({ startDate: '2022-03-15' }));
			assert.isTrue(filter({ startDate: '2023-03-15' }));
			assert.isTrue(filter({ startDate: '2024-03-15' }));
		});
	});
});
