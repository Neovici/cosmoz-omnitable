export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = 'SEK' | 'USD' | 'EUR' | 'AUD';

export type Rates = Partial<Record<Currency, number>> & Record<string, number>;

export interface Amount {
	amount: string | number;
	currency: Currency | string;
}

export type GetPath = string | (string | number)[];

export interface Column {
export interface Column {
	valuePath?: GetPath;
	locale?: Currency;
}

export interface NumberColumn extends Column {
	minimumFractionDigits?: number | null;
	maximumFractionDigits?: number | null;
}

export interface AmountColumn extends Column {
	rates?: Rates;
}

export type DateColumn = Column;

export interface Limit<T> {
	min: T;
	max: T;
}
export type AmountLimit = Limit<Amount>;

export type Item = object;