import { get } from '@polymer/polymer/lib/utils/path';
import { toNumber } from './utils-number';

export const
	/**
	 * Converts a value to an amount object optionaly limiting it.
	 *
	 * @param {Object} rates The rates
	 * @param {Object} value The value to convert to number
	 * @param {Object} limit The value used to limit the number
	 * @param {Function} limitFunc The function used to limit the number (Math.min|Math.max)
	 * @returns {Object|void} Value converted to Number or void
	 */
	toAmount = (rates = {}, value, limit, limitFunc) => { // eslint-disable-line max-statements
		if (value == null || value === '') {
			return;
		}

		if (typeof value !== 'object' || value.currency == null || value.currency === '') {
			return null;
		}

		const number = toNumber(value.amount);
		if (number == null || Number.isNaN(number)) {
			return null;
		}
		const amount = {
			currency: value.currency,
			amount: number
		};

		if (limitFunc == null || limit == null) {
			return amount;
		}
		const lAmount = toAmount(rates, limit);
		if (lAmount == null) {
			return amount;
		}

		// calculate value and limit amounts with rates
		const
			valAmount = amount.amount * (rates[amount.currency] || 1),
			limAmount = lAmount.amount * (rates[lAmount.currency] || 1),
			lNumber = toNumber(valAmount, limAmount, limitFunc);
		return lNumber === valAmount ? amount : lAmount;
	},

	getComparableValue = ({ valuePath, rates }, item) => {
		if (item == null) {
			return;
		}

		let value = item;

		if (valuePath != null) {
			value = get(item, valuePath);
		}
		value = toAmount(rates, value);

		if (value == null) {
			return;
		}
		const amount = toNumber(value.amount);

		if (rates == null) {
			return amount;
		}

		return amount * (rates[value.currency] || 1);
	},

	applySingleFilter = (column, filter) => item => {
		const value = getComparableValue(column, item);

		if (value == null) {
			return false;
		}

		const
			min = getComparableValue({ ...column, valuePath: 'min' }, filter),
			max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		return !(value < min || value > max);
	},

	formatters = {},
	getFormatter = (currency, locale) => {
		const id = locale ? locale : '',
			key = currency + id || '';

		if (formatters[key]) {
			return formatters[key];
		}

		formatters[key] = new Intl.NumberFormat(locale || undefined, {
			style: 'currency',
			currency
		});

		return formatters[key];
	},

	renderValue = (rates, value, locale) => {
		const amount = toAmount(rates, value);
		if (amount == null) {
			return '';
		}
		return getFormatter(amount.currency, locale)
			.format(value.amount);
	},


	getString = ({ valuePath, rates, locale }, item) => {
		const value = toAmount(rates, get(item, valuePath));
		if (value === undefined) {
			return '';
		}
		if (value === null) {
			return 'Invalid value';
		}
		return renderValue(rates, value, locale);
	},

	toHashString = value => {
		if (!value) {
			return '';
		}
		return value.amount + value.currency;
	},

	fromHashString = value => {
		if (value == null || value === '') {
			return;
		}
		const params = value.match(/^(-?[\d]+)([\D]+?)$/iu);
		if (!Array.isArray(params) || params.length < 0) {
			return null;
		}
		return {
			amount: params[1],
			currency: params[2]
		};
	},

	getCurrency = ({ valuePath }, item) => get(item, valuePath)?.currency,

	getInputString = ({ valuePath }, item) => get(item, valuePath)?.amount;
