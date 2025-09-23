import { toLocalISOString, ensureDate } from '@neovici/cosmoz-utils/date';
import { get } from '@polymer/polymer/lib/utils/path';
import { toNumber } from './utils-number';

export const /**
	 * Calculates the local timezone offset and formats it to ISO Timezone string.
	 * @param	 {String} localISOString an ISO date string
	 * @return {String}								 the ISO timezone
	 */
	getTimezoneString = (localISOString) => {
		const off = -new Date(localISOString).getTimezoneOffset() / 60;
		return (
			(off < 0 ? '-' : '+') + ['0', Math.abs(off)].join('').substr(-2) + ':00'
		);
	},
	/**
	 * Computes the local timezone and adds it to a local ISO string
	 * @param	{String} localISOString an ISO date string, without timezone info
	 * @return {String}								an ISO date string, with timezone info
	 */
	getAbsoluteISOString = (localISOString) => {
		// Most browsers use local timezone when no timezone is specified
		// but Safari uses UTC, so we set it implicitly
		// TODO: Consider removing this when/if Safari handles local timezone correctly
		if (localISOString.length === 19) {
			return localISOString + getTimezoneString(localISOString);
		}
		return localISOString;
	},
	parseDate = (value) => {
		if (value == null || value === '') {
			return;
		}

		// convert value to Date
		let date = value;
		if (!(date instanceof Date)) {
			// if the value is an ISO string, make sure that it has an explicit timezone
			if (typeof value === 'string') {
				date = getAbsoluteISOString(date);
			}

			date = ensureDate(date);

			if (!date) {
				return null;
			}
		}

		if (Number.isNaN(date.getTime())) {
			return null;
		}

		return date;
	},
	/**
	 * Get comparable number from date
	 *
	 * @param	 {String} valuePath	 Property path
	 * @param	 {Object} item			 Item to be processed
	 * @returns {Number|void} Valid value or void
	 */
	getComparableValue = ({ valuePath }, item) => {
		if (item == null) {
			return;
		}
		let value = item;
		if (valuePath != null) {
			value = get(item, valuePath);
		}
		value = parseDate(value);

		if (value == null) {
			return;
		}
		return toNumber(value.getTime());
	},
	/**
	 * Converts an value to date optionaly limiting it.
	 *
	 * @param	 {Date|String} value	 Value to convert to date
	 * @param	 {Date|String} limit	 Value used to limit the date
	 * @param	 {Function} limitFunc	 Function used to limit the date (Math.min|Math.max)
	 * @returns {Date|void} Value converted to date optionaly limitated
	 */
	toDate = (value, limit, limitFunc) => {
		const date = parseDate(value);

		if (date == null) {
			return null;
		}

		if (limitFunc == null || limit == null) {
			return date;
		}

		const lDate = toDate(limit);
		if (lDate == null) {
			return date;
		}

		const comparableDate = getComparableValue({}, date),
			comparableLDate = getComparableValue({}, lDate),
			limitedValue = limitFunc(comparableDate, comparableLDate);
		return limitedValue === comparableDate ? date : lDate;
	},
	renderValue = (value, formatter) => {
		if (formatter == null) {
			return;
		}
		const date = toDate(value);
		if (date == null) {
			return;
		}
		return formatter.format(date);
	},
	formatters = {},
	getFormatter = (locale) => {
		const key = locale || '';

		if (formatters[key]) {
			return formatters[key];
		}

		formatters[key] = new Intl.DateTimeFormat(locale || undefined);

		return formatters[key];
	},
	getString = ({ valuePath, locale }, item) => {
		let value = get(item, valuePath);
		if (value === undefined) {
			return '';
		}
		value = toDate(value);
		if (value === null) {
			return 'Invalid Date';
		}
		return renderValue(value, getFormatter(locale));
	},
	toInputString = (value) => {
		const date = toDate(value);
		if (date == null) {
			return null;
		}
		return toLocalISOString(date).slice(0, 10);
	},
	getInputString = ({ valuePath }, item) => toInputString(get(item, valuePath)),
	fromInputString = (value, property) => {
		const date = toDate(value);
		if (date == null) {
			return;
		}
		if (property === 'min') {
			date.setHours(0, 0, 0, 0);
		}
		if (property === 'max') {
			date.setHours(23, 59, 59);
		}
		return date;
	},
	toHashString = (value) => {
		const string = toInputString(value);
		if (string == null) {
			return '';
		}
		return string;
	},
	toXlsxValue = ({ valuePath }, item) => {
		if (!valuePath) {
			return '';
		}
		const date = toDate(get(item, valuePath));
		if (!date) {
			return '';
		}
		const localDate = toDate(toLocalISOString(date));
		if (!localDate) {
			return '';
		}
		localDate.setHours(0, 0, 0, 0);
		return localDate;
	},
	applySingleFilter = (column, filter) => (item) => {
		const value = getComparableValue(column, item);

		if (value == null) {
			return false;
		}

		const min = getComparableValue({ ...column, valuePath: 'min' }, filter),
			max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		return !(value < min || value > max);
	};
