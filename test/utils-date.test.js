import { renderValue } from '../lib/utils-date';
import { assert } from '@open-wc/testing';

suite('utils-date', () => {
	suite('renderValue', () => {
		const formatter = { format: date => date.toLocaleString('en-GB', { timeZone: 'UTC' }) };

		test('handles null formatter', () => {
			assert.equal(renderValue(1644319121000, null), undefined);
		});

		test('formats a timestamp to human locale', () => {
			assert.equal(renderValue(1644319121000, formatter), '08/02/2022, 11:18:41');
		});

		test('handles non-date values', () => {
			assert.equal(renderValue('some value', formatter), undefined);
		});

		test('formats a date string to locale', () => {
			assert.equal(renderValue('2022-02-08T11:18:41+02:00', formatter), '08/02/2022, 09:18:41');
		});

		test('formats a date string to locale', () => {
			assert.equal(renderValue(Date.UTC(2022, 1, 8, 13, 32, 0), formatter), '08/02/2022, 13:32:00');
		});
	});
});
