
import { get } from '@polymer/polymer/lib/utils/path';
import { memoooize } from './memoize';

export const
	/**
	 * Converts a value to number optionaly limiting it.
	 *
	 * @param	 {Number|*} value	 The value to convert to number
	 * @param	 {Number|*} limit	 The value used to limit the number
	 * @param	 {Function} limitFunc	 The function used to limit the number (Math.min|Math.max)
	 * @returns {Number|void}		 Value converted to Number or void
	 */
	toNumber = (value, limit, limitFunc) => {
		if (value == null || value === '') {
			return;
		}
		const number = typeof value === 'number' ? value : Number(value);
		if (Number.isNaN(number)) {
			return;
		}
		if (limitFunc == null || limit == null) {
			return number;
		}
		const lNumber = toNumber(limit);
		if (lNumber == null) {
			return number;
		}
		return limitFunc(number, lNumber);
	},

	toInputString = value => {
		const val = toNumber(value);
		if (val == null) {
			return null;
		}
		return val.toString();
	},

	getInputString = ({ valuePath }, item) => {
		const value = toNumber(get(item, valuePath));
		return toInputString(value);
	},

	toHashString = value => {
		const string = toInputString(value);
		if (string == null) {
			return '';
		}
		return string;
	},

	getComparableValue = ({ valuePath, maximumFractionDigits }, item) => {
		if (item == null) {
			return;
		}
		let value = item;
		if (valuePath != null) {
			value = get(item, valuePath);
		}
		value = toNumber(value);
		if (value == null) {
			return;
		}

		if (maximumFractionDigits !== null) {
			return toNumber(value.toFixed(maximumFractionDigits));
		}
		return value;
	},

	makeFormatter = memoooize((locale, minimumFractionDigits, maximumFractionDigits) => {
		const options = {
			localeMatcher: 'best fit' // chrome expects this when using custom options
		};
		if (minimumFractionDigits !== null) {
			options.minimumFractionDigits = minimumFractionDigits;
		}
		if (maximumFractionDigits !== null) {
			options.maximumFractionDigits = maximumFractionDigits;
		}
		return new Intl.NumberFormat(locale || undefined, options);
	}),

	getString = ({ valuePath, locale, minimumFractionDigits, maximumFractionDigits }, item) => {
		const value = get(item, valuePath);

		if (value == null) {
			return '';
		}

		const number = toNumber(value);
		if (number == null) {
			return;
		}
		const formatter = makeFormatter(locale, minimumFractionDigits, maximumFractionDigits);
		return formatter.format(number);
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
	};
