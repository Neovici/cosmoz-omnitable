export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = 'SEK' | 'USD' | 'EUR' | 'AUD';

export interface Amount {
	amount: string | number;
	currency: Currency | string;
}

export type GetPath = string | (string | number)[];

export interface NumberColumn {
	valuePath?: GetPath;
	locale?: string;
	minimumFractionDigits?: number | null;
	maximumFractionDigits?: number | null;
}

export interface Limit<T> {
	min: T;
	max: T;
}
export type AmountLimit = Limit<Amount>;

export type Item = object;
