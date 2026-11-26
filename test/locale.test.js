import { assert } from '@open-wc/testing';
import { getString as amountString } from '../src/lib/utils-amount';
import { getString as dateString } from '../src/lib/utils-date';
import { getString as numberString } from '../src/lib/utils-number';

suite('default locale', () => {
	const item = {
		date: '2026-01-31',
		amount: { amount: 768.96, currency: 'SEK' },
		number: 1234.5,
	};

	teardown(() => document.documentElement.removeAttribute('lang'));

	test('formats with the page language when the column has no locale', () => {
		document.documentElement.lang = 'sv';
		assert.equal(dateString({ valuePath: 'date' }, item), '2026-01-31');
		assert.equal(
			amountString({ valuePath: 'amount' }, item),
			new Intl.NumberFormat('sv', {
				style: 'currency',
				currency: 'SEK',
			}).format(768.96),
		);
		assert.equal(
			numberString({ valuePath: 'number' }, item),
			(1234.5).toLocaleString('sv'),
		);
	});

	test('prefers the column locale over the page language', () => {
		document.documentElement.lang = 'sv';
		assert.equal(
			dateString({ valuePath: 'date', locale: 'en-US' }, item),
			'1/31/2026',
		);
	});
});
