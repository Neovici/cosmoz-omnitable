import { toLocalISOString } from '@neovici/cosmoz-utils/lib/date';
import { get } from '@polymer/polymer/lib/utils/path';
import { getAbsoluteISOString, renderValue, toDate as superToDate } from './utils-date';
import { toNumber } from './utils-number';

export const

	_fixedDate = '1970-01-01',

	/**
	 * Converts time to date optionaly limiting it.
	 *
	 * @param	 {Date|Number} value	 Date or Timestamp ( miliseconds since property _fixedDate ) to be converted
	 * @param	 {Date|Number} limit	 Optional value to limit the date.
	 * @param	 {Function} limitFunc	 Function used to limit the date (Math.min|Math.max)
	 * @returns {Date|void}					 Value converted to date optionaly limitated
	 */
	toDate = (value, limit, limitFunc) => {
		// Most browsers use local timezone when no timezone is specified
		// but Safari uses UTC, so we set it implicitly
		// TODO: Consider removing this when/if Safari handles local timezone correctly
		const date = typeof value === 'string' && value.length > 3 && value.length <= 9
			? getAbsoluteISOString(_fixedDate + 'T' + value)
			: value;
		return superToDate(date, limit, limitFunc);
	},

	formatters = {},
	getFormatter = locale => {
		const key = locale || '';

		if (formatters[key]) {
			return formatters[key];
		}

		const timeFormatOption = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};
		formatters[key] = new Intl.DateTimeFormat(locale || undefined, timeFormatOption);

		return formatters[key];
	},
	getString = ({ valuePath, locale }, item) => {
		const value = toDate(get(item, valuePath));
		if (value === undefined) {
			return '';
		}
		if (value === null) {
			return 'Invalid Date';
		}
		return renderValue(value, getFormatter(locale));
	},

	toXlsxValue = (column, item) => {
		if (!column.valuePath) {
			return '';
		}
		return getString(column, item);
	},
	toInputString = value => {
		const date = toDate(value);
		if (date == null) {
			return null;
		}
		return toLocalISOString(date).slice(11, 19);
	},

	getComparableValue = ({ valuePath }, item) => {
		if (item == null) {
			return;
		}
		let value = toInputString(valuePath == null ? item : get(item, valuePath));
		if (value == null) {
			return;
		}
		value = toDate(getAbsoluteISOString(_fixedDate + 'T' + value));
		if (value == null) {
			return;
		}
		return toNumber(value.getTime());
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

	toHashString = value => {
		const date = toDate(value);
		if (date == null) {
			return '';
		}
		//Use utc in hash
		return date.toISOString().slice(11, 19).replace(/:/gu, '.');
	},

	fromHashString = value => {
		if (value == null || value === '') {
			return;
		}
		//Parse utc from hash string
		return toDate(value.replace(/\./gu, ':') + 'Z');
	};

