import { toLocalISOString, ensureDate } from '@neovici/cosmoz-utils/date';
import { get } from '@polymer/polymer/lib/utils/path';
import { toNumber } from './utils-number';
import { DateColumn, Item, LimitFunction, Limit } from './types';

export const getTimezoneString = (localISOString: string) => {
	const off = -new Date(localISOString).getTimezoneOffset() / 60;

	return (
		(off < 0 ? '-' : '+') + ['0', Math.abs(off)].join('').substr(-2) + ':00'
	);
};

export const getAbsoluteISOString = (localISOString: string) => {
	// Most browsers use local timezone when no timezone is specified
	// but Safari uses UTC, so we set it implicitly
	// TODO: Consider removing this when/if Safari handles local timezone correctly
	if (localISOString.length === 19) {
		return localISOString + getTimezoneString(localISOString);
	}

	return localISOString;
};

export const parseDate = (value: unknown): Date | null | undefined => {
	if (value == null || value === '') {
		return;
	}

	// convert value to Date
	let date = value as unknown;

	const isDate = date instanceof Date;

	if (!isDate) {
		// if the value is an ISO string, make sure that it has an explicit timezone
		if (typeof value === 'string') {
			date = getAbsoluteISOString(date as string);
		}

		date = ensureDate(date);

		if (!date) {
			return null;
		}
	}

	if (Number.isNaN((date as Date).getTime())) {
		return null;
	}

	return date as Date;
};

export const getComparableValue = <T extends DateColumn>(
	{ valuePath }: T,
	item: Item,
): number | undefined => {
	if (item == null) {
		return;
	}

	let value = item;

	if (valuePath != null) {
		value = get(item, valuePath);
	}

	const date = parseDate(value);

	if (date == null) {
		return;
	}

	return toNumber(date.getTime());
};

export const toDate = (
	value: unknown,
	limit?: unknown,
	limitFunc?: LimitFunction,
): Date | null => {
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
		comparableLDate = getComparableValue({}, lDate);

	if (comparableDate == null || comparableLDate == null) {
		return date;
	}

	const limitedValue = limitFunc(comparableDate, comparableLDate);

	return limitedValue === comparableDate ? date : lDate;
};

export const renderValue = (
	value: unknown,
	formatter?: Intl.DateTimeFormat,
): string | undefined => {
	if (formatter == null) {
		return;
	}

	const date = toDate(value);

	if (date == null) {
		return;
	}

	return formatter.format(date);
};

const formatters: Record<string, Intl.DateTimeFormat> = {};

export const getFormatter = (locale?: string): Intl.DateTimeFormat => {
	const key = locale || '';

	if (formatters[key]) {
		return formatters[key];
	}

	formatters[key] = new Intl.DateTimeFormat(locale || undefined);

	return formatters[key];
};

export const getString = <T extends DateColumn>(
	{ valuePath, locale }: T,
	item: unknown,
): string | undefined => {
	let value = get(item as object, valuePath || '');

	if (value === undefined) {
		return '';
	}

	value = toDate(value);

	if (value === null) {
		return 'Invalid Date';
	}

	return renderValue(value, getFormatter(locale));
};

export const toInputString = (value: unknown) => {
	const date = toDate(value);

	if (date == null) {
		return null;
	}

	const local = toLocalISOString(date);

	if (local == null) {
		return null;
	}

	return local.slice(0, 10);
};

export const getInputString = ({ valuePath }: DateColumn, item: unknown) =>
	toInputString(get(item as object, valuePath || ''));

export const fromInputString = (
	value: unknown,
	property?: keyof Limit<Date>,
): Date | undefined => {
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
};

export const toHashString = (value: unknown) => {
	const string = toInputString(value);

	if (string == null) {
		return '';
	}

	return string;
};

export const toXlsxValue = <T extends DateColumn>(
	{ valuePath }: T,
	item: Item,
) => {
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
};

export const applySingleFilter =
	(column: DateColumn, filter: Limit<Date | undefined>) => (item: Item) => {
		const value = getComparableValue(column, item);

		if (value == null) {
			return false;
		}

		const min = getComparableValue(
				{ ...column, valuePath: 'min' } as DateColumn,
				filter,
			),
			max = getComparableValue(
				{ ...column, valuePath: 'max' } as DateColumn,
				filter,
			);

		if (min == null || max == null) {
			return false;
		}

		return !(value < min || value > max);
	};
