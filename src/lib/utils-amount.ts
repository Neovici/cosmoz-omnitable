import { get } from '@polymer/polymer/lib/utils/path';
import { toNumber } from './utils-number';

type Currency = 'SEK' | 'USD' | 'EUR' | 'AUD';

interface AmountValue {
	amount: string | number;
	currency: Currency;
}

type Rates = Partial<Record<Currency, number>>;

type Limit = number | null;

type LimitFunc = (a: number, b: number) => number | undefined;

type ValuePath = 'amount' | 'min' | 'max';

interface Column {
	valuePath?: ValuePath;
	rates?: Rates;
	locale?: Currency;
}

const isValidAmountValue = (value: unknown): value is AmountValue => {
	return (
		typeof value === 'object' &&
		value != null &&
		'currency' in value &&
		'amount' in value &&
		(value as AmountValue).currency != null
	);
};

const convertToAmount = (value: AmountValue): AmountValue | null => {
	const number = toNumber(value.amount);

	if (number === null || Number.isNaN(number)) {
		return null;
	}

	return { currency: value.currency, amount: number };
};

export const toAmount = (
	rates: Rates = {},
	value: AmountValue | number | null | '' | unknown,
	limit?: Limit | null,
	limitFunc?: LimitFunc,
): AmountValue | null => {
	if (value === null || value === '' || !isValidAmountValue(value)) {
		return null;
	}

	const amount = convertToAmount(value);

	if (amount === null || limitFunc === null || limit == null) {
		return amount;
	}

	const limitAmount = toAmount(rates, limit);

	if (limitAmount === null) {
		return amount;
	}

	const valueInBase = (amount.amount as number) * (rates[amount.currency] || 1);
	const limitInBase =
		(limitAmount.amount as number) * (rates[limitAmount.currency] || 1);

	const lNumber = toNumber(valueInBase, limitInBase, limitFunc);

	return lNumber === valueInBase ? amount : limitAmount;
};

interface GetComparableValueProps {
	valuePath: ValuePath;
	rates?: Rates;
	autodetect?: boolean;
}

interface FilterObj {
	min: AmountValue;
	max: AmountValue;
}

interface AmountObj {
	amount: AmountValue;
	bool: boolean;
	date: Date;
	dateJSON: string;
	group: string;
	id: number;
	list: string[];
	name: string;
	object: {
		label: string;
		value: number;
	};
	objectList: Array<{
		name: string;
		value: number;
	}>;
	randomString: string;
	randomString2: string;
	randomString3: string;
	randomString4: string;
	sub: {
		subProp: string;
	};
	value: number;
	Symbol(index: number): number;
}

type Item = FilterObj | AmountObj;

export const getComparableValue = (
	{ valuePath, rates }: GetComparableValueProps,
	item: Item,
): number | null => {
	if (item == null) {
		return null;
	}

	let value: unknown = item;

	if (valuePath !== null) {
		value = get(item, valuePath);
	}

	const amountValue = toAmount(rates, value);

	if (amountValue == null) {
		return null;
	}

	const amount = toNumber(amountValue.amount);

	if (rates === null || amount === null) {
		return amount;
	}

	return amount * (rates?.[amountValue.currency] ?? 1);
};

export const applySingleFilter =
	(column: GetComparableValueProps, filter: FilterObj) =>
	(item: Item): boolean => {
		const value = getComparableValue(column, item);

		if (value === null) {
			return false;
		}

		const min = getComparableValue({ ...column, valuePath: 'min' }, filter);
		const max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		// needs checking
		if (min === null || max === null) {
			return false;
		}

		return !(value < min || value > max);
	};

const formatters: Record<string, Intl.NumberFormat> = {};

export const getFormatter = (
	currency: Currency,
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
	value: AmountValue | number | null | '' | unknown,
	locale?: Currency,
): Intl.NumberFormat | string => {
	const amount = toAmount(rates, value);

	if (amount == null) {
		return '';
	}

	return getFormatter(amount.currency, locale).format(amount.amount as number);
};

export const getString = (
	{ valuePath, rates, locale }: Column,
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

export const toHashString = (value: AmountValue | null): string => {
	if (!value) {
		return '';
	}

	return value.amount + value.currency;
};

export const fromHashString = (
	value: string | null,
): AmountValue | null | undefined => {
	if (value === null || value === '') {
		return null;
	}
	const params = value.match(/^(-?[\d]+)([\D]+?)$/iu);
	if (!Array.isArray(params) || params.length < 0) {
		return null;
	}
	return { amount: params[1], currency: params[2] as Currency };
};

export const getCurrency = (
	{ valuePath }: { valuePath?: ValuePath },
	item: Item,
): string | null => (valuePath ? get(item, valuePath)?.currency : null);

export const getInputString = (
	{ valuePath }: { valuePath?: ValuePath },
	item: Item,
): string | number | undefined =>
	valuePath ? get(item, valuePath)?.amount : undefined;
