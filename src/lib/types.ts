export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = 'SEK' | 'USD' | 'EUR' | 'AUD';

export interface Amount {
	amount: string | number;
	currency: Currency | string;
}

export type GetPath = string | (string | number)[];

export interface Column {
	valuePath?: GetPath;
	locale?: string;
	name: string;
	title: string;
	minWidth: string;
	priority: number;
	flex: string;
	width: string;
}

export interface NumberColumn extends Column {
	minimumFractionDigits?: number | null;
	maximumFractionDigits?: number | null;
}

export type DateColumn = Column;

export interface Limit<T> {
	min: T;
	max: T;
}
export type AmountLimit = Limit<Amount>;

export type Item = object;
