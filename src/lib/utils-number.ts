import { get } from '@polymer/polymer/lib/utils/path';
import { memoooize } from '@neovici/cosmoz-utils/memoize';
import { LimitFunction, Value, Item, FilterObj } from './types.js';

export const toNumber = (
	value?: unknown,
	limit?: unknown,
	limitFunc?: LimitFunction,
): number | undefined => {
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
};

export const toInputString = (value?: unknown): string | null => {
	const val = toNumber(value);

	if (val == null) {
		return null;
	}

	return val.toString();
};

export const getInputString = (
	{ valuePath }: Pick<Value, 'valuePath'>,
	item: Item,
): string | null => {
	const value = toNumber(valuePath ? get(item, valuePath) : item);

	return toInputString(value);
};

export const toHashString = (value: unknown): string => {
	const string = toInputString(value);

	if (string == null) {
		return '';
	}

	return string;
};

export const getComparableValue = (
	{ valuePath, maximumFractionDigits }: Partial<Value>,
	item?: Item | FilterObj,
): number | undefined => {
	if (item == null) {
		return;
	}

	const value = valuePath ? get(item, valuePath) : item;
	const numValue = toNumber(value);

	if (numValue == null) {
		return;
	}

	if (maximumFractionDigits !== null) {
		return toNumber(numValue.toFixed(maximumFractionDigits));
	}

	return numValue;
};

export const makeFormatter = memoooize(
	(
		locale?: string,
		minimumFractionDigits?: number | null,
		maximumFractionDigits?: number | null,
	): Intl.NumberFormat => {
		const options: Intl.NumberFormatOptions = {
			localeMatcher: 'best fit', // chrome expects this when using custom options
		};

		if (minimumFractionDigits !== null) {
			options.minimumFractionDigits = minimumFractionDigits;
		}

		if (maximumFractionDigits !== null) {
			options.maximumFractionDigits = maximumFractionDigits;
		}

		return new Intl.NumberFormat(locale || undefined, options);
	},
);

export const getString = (
	{
		valuePath,
		locale,
		minimumFractionDigits,
		maximumFractionDigits,
	}: Partial<Value>,
	item: Item,
): string | undefined => {
	const value = valuePath ? get(item, valuePath) : item;

	if (value == null) {
		return '';
	}

	const number = toNumber(value);

	if (number == null) {
		return;
	}

	const formatter = makeFormatter(
		locale,
		minimumFractionDigits,
		maximumFractionDigits,
	);

	return formatter.format(number);
};

export const applySingleFilter =
	(column: Value, filter: FilterObj) =>
	(item: Item): boolean => {
		const value = getComparableValue(column, item);

		if (value == null) {
			return false;
		}

		const min = getComparableValue({ ...column, valuePath: 'min' }, filter);
		const max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		return !(value < (min ?? -Infinity) || value > (max ?? Infinity));
	};
