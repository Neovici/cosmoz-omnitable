import type { Renderable } from '@pionjs/pion';

export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = string;

export type Rates = Partial<Record<Currency, number>> & Record<string, number>;

export interface Amount {
	amount: number;
	currency: Currency;
}

export type GetPath = string | (string | number)[];

export interface RenderContext {
	item: Item;
	index?: number;
	selected?: boolean;
	expanded?: boolean;
	folded?: boolean;
	group?: unknown;
}

export type RenderFunction = (
	column: Column,
	context: RenderContext,
) => Renderable;

export interface Column {
	valuePath?: GetPath;
	locale?: Currency;
	name?: string;
	title?: string;
	minWidth?: string;
	priority?: number;
	flex?: string;
	width?: string;
	sortPath?: string;
	groupOn?: string;
	noSort?: boolean;
	renderCell?: RenderFunction;
	renderMini?: RenderFunction;
	renderGroup?: RenderFunction;
	[key: symbol]: unknown;
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

export type Items = Item[];

export interface Host extends HTMLElement {
	shadowRoot: ShadowRoot;
}
