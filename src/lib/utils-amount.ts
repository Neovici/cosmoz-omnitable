import { get } from '@polymer/polymer/lib/utils/path';
import { toNumber } from './utils-number';
import {
	Amount,
	Currency,
	GetPath,
	AmountColumn,
	Item,
	AmountLimit,
	Rates,
	LimitFunction,
} from './types';

const isValidAmountValue = (value: unknown): value is Amount => {
	return (
		typeof value === 'object' &&
		value != null &&
		'currency' in value &&
		'amount' in value &&
		(value as Amount).currency !== null &&
		(value as Amount).currency !== ''
	);
};

const convertToAmount = (value: Amount): Amount | null => {
	const number: unknown = toNumber(value.amount);

	if (typeof number === 'number') {
		return { currency: value.currency, amount: number };
	}

	return null;
};

// Converts a value to an amount object optionaly limiting it.
export const toAmount = (
	rates: Rates = {},
	value: unknown,
	limit?: AmountLimit | null,
	limitFunc?: LimitFunction,
): Amount | null | undefined => {
	if (value == null || value === '') {
		return;
	}

	if (!isValidAmountValue(value)) {
		return null;
	}

	const amount = convertToAmount(value);

	if (amount == null || limitFunc == null || limit == null) {
		return amount;
	}

	const limitAmount = toAmount(rates, limit);

	if (limitAmount == null || limitAmount == null) {
		return amount;
	}

	// calculate value and limit amounts with rates
	const valueInBase = (amount.amount as number) * (rates[amount.currency] || 1);
	const limitInBase =
		(limitAmount.amount as number) * (rates[limitAmount.currency] || 1);

	const lNumber = toNumber(valueInBase, limitInBase, limitFunc);

	return lNumber === valueInBase ? amount : limitAmount;
};

export const getComparableValue = <T extends AmountColumn>(
	{ valuePath, rates }: T,
	item: Item,
): number | undefined => {
	if (item == null) {
		return;
	}

	let value: unknown = item;

	if (valuePath != null) {
		value = get(item, valuePath);
	}

	const amountValue = toAmount(rates, value);

	if (amountValue == null) {
		return;
	}

	const amount = toNumber(amountValue.amount);

	if (rates == null || amount == null) {
		return amount;
	}

	return amount * (rates?.[amountValue.currency] || 1);
};

export const applySingleFilter =
	(column: AmountColumn, filter: AmountLimit) =>
	(item: Item): boolean => {
		const value = getComparableValue(column, item);

		if (value === undefined) {
			return false;
		}

		const min = getComparableValue({ ...column, valuePath: 'min' }, filter);
		const max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		if (min === undefined || max === undefined) {
			return true;
		}

		return !(value < min || value > max);
	};

const formatters: Record<string, Intl.NumberFormat> = {};

export const getFormatter = (
	currency: Currency | string,
	locale?: Currency,
): Intl.NumberFormat => {
	const id = locale ? locale : '';
	const key = currency + id || '';
	if (formatters[key]) {
		return formatters[key];
	}

	formatters[key] = new Intl.NumberFormat(locale || undefined, {
		style: 'currency',
		currency,
	});

	return formatters[key];
};

export const renderValue = (
	rates: Rates | undefined,
	value: Amount | unknown,
	locale?: Currency,
): Intl.NumberFormat | string => {
	const amount = toAmount(rates, value);

	if (amount == null) {
		return '';
	}

	return getFormatter(amount.currency, locale).format(amount.amount as number);
};

export const getString = <T extends AmountColumn>(
	{ valuePath, rates, locale }: T,
	item: Item,
): Intl.NumberFormat | string => {
	const value = toAmount(rates, valuePath ? get(item, valuePath) : undefined);

	if (value === undefined) {
		return '';
	}
	if (value === null) {
		return 'Invalid value';
	}

	return renderValue(rates, value, locale);
};

export const toHashString = (value: Amount | null): string => {
	if (!value) {
		return '';
	}

	return value.amount + value.currency;
};

export const fromHashString = (
	value: string | null,
): Amount | null | undefined => {
	if (value == null || value === '') {
		return undefined;
	}
	const params = value.match(/^(-?[\d]+)([\D]+?)$/iu);
	if (!Array.isArray(params) || params.length < 0) {
		return undefined;
	}
	return { amount: Number(params[1]), currency: params[2] as Currency };
};

export const getCurrency = (
	{ valuePath }: { valuePath?: GetPath },
	item: Item,
): string | null => (valuePath ? get(item, valuePath)?.currency : null);

export const getInputString = (
	{ valuePath }: { valuePath?: GetPath },
	item: Item,
): string | number | undefined =>
	valuePath ? get(item, valuePath)?.amount : undefined;
