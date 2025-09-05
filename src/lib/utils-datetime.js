import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { get } from '@polymer/polymer/lib/utils/path';
import { renderValue, toDate } from './utils-date';

export const

	formatters = {},
	getFormatter = locale => {
		const key = locale || '';

		if (formatters[key]) {
			return formatters[key];
		}

		const timeFormatOption = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
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

	toXlsxValue = ({ valuePath }, item) => {
		if (!valuePath) {
			return '';
		}
		return get(item, valuePath);
	},

	toHashString = value => {
		const date = toDate(value);
		if (date == null) {
			return '';
		}
		//Use utc in hash
		return date.toISOString().slice(0, 19).replace(/:/gu, '.');
	},

	fromHashString = value => {
		if (value == null || value === '') {
			return;
		}
		//Parse utc from hash string
		return toDate(value.replace(/\./gu, ':') + 'Z');
	},

	toInputString = value => {
		const date = toDate(value);
		if (date == null) {
			return null;
		}
		return toLocalISOString(date).slice(0, 19);
	},

	getInputString = ({ valuePath }, item) => toInputString(get(item, valuePath));
