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

interface Column {
    valuePath?: string;
    rates?: Rates;
    locale?: string;
}

interface FilterColumn extends Column {
    valuePath: string;
}

interface FilterValue extends Record<string, unknown> {
    min?: AmountValue | null;
    max?: AmountValue | null;
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
    const limitInBase = (limitAmount.amount as number) * (rates[limitAmount.currency] || 1);
    
    const lNumber = toNumber(valueInBase, limitInBase, limitFunc);

    return  lNumber === valueInBase ? amount : limitAmount;
};


interface GetComparableValueProps {
    valuePath:  "amount" | "min" | "max";
    rates?: Rates;
}

interface MinMaxObj {
    min: AmountValue
    max: AmountValue
}

interface AmountObj {
    amount: AmountValue
    bool: boolean
    date: Date
    dateJSON: string
    group: string
    id: number
    list: string[]
    name: string
    object: {
        label: string
        value: number
    }
    objectList: Array<{
        name: string
        value: number
    }>
    randomString: string
    randomString2: string
    randomString3: string
    randomString4: string
    sub: {
    subProp: string
    }
    value: number
    Symbol(index: number): number
}

type Item = MinMaxObj | AmountObj;


export const getComparableValue = (
    { valuePath, rates }: GetComparableValueProps,
    item: Item,
): number | undefined => {
    if (item == null) {
        return;
    }

    let value: unknown = item;

    if (valuePath !== null) {
        value = get(item, valuePath);
    }

    const amountValue = toAmount(rates, value);

    if (amountValue == null) {
        return;
    }

    const amount = toNumber(amountValue.amount);

    if (rates === null || amount === null) {
        return amount;
    }

    return amount * ((rates?.[amountValue.currency] ?? 1));
};

export const applySingleFilter =
    (column: FilterColumn, filter: FilterValue) =>
    (item: Item): boolean => {
        const value = getComparableValue(column, item);

        if (value == null) {
            return false;
        }

        const min = getComparableValue({ ...column, valuePath: 'min' }, filter);
        const max = getComparableValue({ ...column, valuePath: 'max' }, filter);

        return !(value < (min ?? -Infinity) || value > (max ?? Infinity));
    };

const formatters: Record<string, Intl.NumberFormat> = {};

export const getFormatter = (
    currency: string,
    locale?: string,
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
    value: unknown,
    locale?: string,
): string => {
    const amount = toAmount(rates, value);
    if (amount == null) {
        return '';
    }
    return getFormatter(amount.currency, locale).format(amount.amount as number);
};

export const getString = (
    {
        valuePath,
        rates,
        locale,
    }: { valuePath?: string; rates?: Rates; locale?: string },
    item: Item,
): string => {
    const value = toAmount(rates, valuePath ? get(item, valuePath) : undefined);
    if (value === undefined) {
        return '';
    }
    if (value === null) {
        return 'Invalid value';
    }
    return renderValue(rates, value, locale);
};

export const toHashString = (value: AmountValue | null | undefined): string => {
    if (!value) {
        return '';
    }
    return value.amount + value.currency;
};

export const fromHashString = (
    value: string | null | undefined,
): AmountValue | null | undefined => {
    if (value == null || value === '') {
        return;
    }
    const params = value.match(/^(-?[\d]+)([\D]+?)$/iu);
    if (!Array.isArray(params) || params.length < 3) {
        return null;
    }
    return { amount: params[1], currency: params[2] as Currency };
};

export const getCurrency = (
    { valuePath }: { valuePath?: string },
    item: Item,
): string | undefined =>
    valuePath ? get(item, valuePath)?.currency : undefined;

export const getInputString = (
    { valuePath }: { valuePath?: string },
    item: Item,
): string | number | undefined =>
    valuePath ? get(item, valuePath)?.amount : undefined;

