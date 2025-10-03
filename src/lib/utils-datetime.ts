import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { get } from '@polymer/polymer/lib/utils/path';
import { renderValue, toDate } from './utils-date';
import { DateColumn, Item } from './types';

export const formatters: Record<string, Intl.DateTimeFormat> = {};

export const getFormatter = (locale?: string) => {
	const key = locale || '';

	if (formatters[key]) {
		return formatters[key];
	}

	const timeFormatOption = {
		year: 'numeric' as const,
		month: 'numeric' as const,
		day: 'numeric' as const,
		hour: 'numeric' as const,
		minute: 'numeric' as const,
	};

	formatters[key] = new Intl.DateTimeFormat(
		locale || undefined,
		timeFormatOption,
	);

	return formatters[key];
};

export const getString = <T extends DateColumn>(
	{ valuePath, locale }: T,
	item: Item,
) => {
	const value = toDate(get(item, valuePath || ''));

	if (value === undefined) {
		return '';
	}
	if (value === null) {
		return 'Invalid Date';
	}
	return renderValue(value, getFormatter(locale));
};

export const toXlsxValue = <T extends DateColumn>(
	{ valuePath }: T,
	item: Item,
) => {
	if (!valuePath) {
		return '';
	}

	return get(item, valuePath);
};

export const toHashString = (value: unknown) => {
	const date = toDate(value);
	if (date == null) {
		return '';
	}
	//Use utc in hash
	return date.toISOString().slice(0, 19).replace(/:/gu, '.');
};

export const fromHashString = (value: unknown) => {
	if (value == null || value === '') {
		return;
	}
	//Parse utc from hash string
	if (typeof value !== 'string') {
		return;
	}
	return toDate(value.replace(/\./gu, ':') + 'Z');
};

export const toInputString = (value: unknown) => {
	const date = toDate(value);
	if (date == null) {
		return null;
	}

	const localISOString = toLocalISOString(date);

	return localISOString ? localISOString.slice(0, 19) : localISOString;
};

export const getInputString = ({ valuePath }: DateColumn, item: Item) =>
	toInputString(get(item, valuePath || ''));
