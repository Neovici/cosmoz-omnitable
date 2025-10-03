import { toLocalISOString } from '@neovici/cosmoz-utils/date';
import { get } from '@polymer/polymer/lib/utils/path';
import {
	getAbsoluteISOString,
	renderValue,
	toDate as superToDate,
} from './utils-date';
import { toNumber } from './utils-number';
import { Limit, LimitFunction, DateColumn, Item } from './types';

export const _fixedDate = '1970-01-01' as const;

export const toDate = (
	value: unknown,
	limit?: Limit<unknown>,
	limitFunc?: LimitFunction,
) => {
	// Most browsers use local timezone when no timezone is specified
	// but Safari uses UTC, so we set it implicitly
	// TODO: Consider removing this when/if Safari handles local timezone correctly
	const date =
		typeof value === 'string' && value.length > 3 && value.length <= 9
			? getAbsoluteISOString(_fixedDate + 'T' + value)
			: value;
	return superToDate(date, limit, limitFunc);
};

export const formatters: Record<string, Intl.DateTimeFormat> = {};

export const getFormatter = (locale?: string): Intl.DateTimeFormat => {
	const key = locale || '';

	if (formatters[key]) {
		return formatters[key];
	}

	const timeFormatOption = {
		hour: 'numeric' as const,
		minute: 'numeric' as const,
		second: 'numeric' as const,
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

export const toXlsxValue = (column: DateColumn, item: Item) => {
	if (!column.valuePath) {
		return '';
	}
	return getString(column, item);
};

export const toInputString = (value: unknown) => {
	const date = toDate(value);

	if (date == null) {
		return null;
	}

	const localISOString = toLocalISOString(date);

	return localISOString ? localISOString.slice(11, 19) : localISOString;
};

export const getComparableValue = <T extends DateColumn>(
	{ valuePath }: T,
	item: Item,
) => {
	if (item == null) {
		return;
	}

	const value = toInputString(valuePath == null ? item : get(item, valuePath));

	if (value == null) {
		return;
	}

	const dateValue = toDate(getAbsoluteISOString(_fixedDate + 'T' + value));

	if (dateValue == null) {
		return dateValue;
	}

	return toNumber(dateValue.getTime());
};
export const applySingleFilter =
	(column: DateColumn, filter: Limit<Date>) => (item: Item) => {
		const value = getComparableValue(column, item);

		if (value == null) {
			return false;
		}

		const min = getComparableValue({ ...column, valuePath: 'min' }, filter),
			max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		if (min == null || max == null) {
			return false;
		}

		return !(value < min || value > max);
	};

export const toHashString = (value: unknown) => {
	const date = toDate(value);

	if (date == null) {
		return '';
	}

	//Use utc in hash
	return date.toISOString().slice(11, 19).replace(/:/gu, '.');
};

export const fromHashString = (value: unknown) => {
	if (value == null || value === '') {
		return;
	}
	//Parse utc from hash string
	return typeof value === 'string'
		? toDate(value.replace(/\./gu, ':') + 'Z')
		: toDate(value);
};
