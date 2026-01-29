import type { Renderable } from '@pionjs/pion';
import { indexSymbol } from './utils';

export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = string;

export type Rates = Partial<Record<Currency, number>> & Record<string, number>;

export interface Amount {
	amount: number;
	currency: Currency;
}

export type GetPath = string | (string | number)[];

export type Item = object;

export type Items = Item[];

export interface RenderContext {
	item: Item;
	index?: number;
	selected?: boolean;
	expanded?: boolean;
	folded?: boolean;
	group?: unknown;
}

// Base column interface with all properties
export interface Column {
	// Core properties
	name?: string;
	title?: string;
	valuePath?: GetPath;
	groupOn?: GetPath;
	sortPath?: GetPath;
	noSort?: boolean;
	minWidth?: string;
	width?: string;
	flex?: string;
	priority?: number;
	locale?: string;

	// Value accessors - signatures are flexible to allow specialized overrides
	getString?: (...args: unknown[]) => string | number | null | undefined;
	getComparableValue?: (column: Column, item: Item) => unknown;
	toXlsxValue?: (...args: unknown[]) => unknown;

	// Filter methods
	serializeFilter?: (column: Column, filter: unknown) => string | undefined;
	deserializeFilter?: (column: Column, filter: string | null) => unknown;
	getFilterFn?: (
		column: Column,
		filter: unknown,
	) => ((item: Item) => boolean) | null | undefined;

	// Render functions
	renderHeader?: RenderFunction;
	renderCell?: RenderFunction;
	renderEditCell?: RenderFunction;
	renderGroup?: RenderFunction;
	renderMini?: RenderFunction;
	cellTitleFn?: (item: Item) => string;
	headerTitleFn?: () => string;

	// Styling
	headerCellClass?: string;
	cellClass?: string;

	// Behavior flags
	editable?: boolean;
	noLocalFilter?: boolean;
	mini?: number;

	// Values
	values?: unknown[];

	// @deprecated
	loading?: boolean;
	externalValues?: unknown[];

	// Boolean columns
	trueLabel?: string;
	falseLabel?: string;

	// List columns
	valueProperty?: string;
	textProperty?: string;
	emptyLabel?: string;
	emptyValue?: unknown;

	// Range columns
	min?: unknown;
	max?: unknown;
	autoupdate?: boolean;

	// Number columns
	maximumFractionDigits?: number | null;
	minimumFractionDigits?: number | null;

	// Amount columns
	currency?: string;
	rates?: Rates;
	autodetect?: boolean;

	// Treenode columns
	ownerTree?: unknown;
	keyProperty?: string;

	[key: symbol]: unknown;
}

export type RenderFunction = (
	column: Column,
	context: RenderContext,
) => Renderable;

// DOM Column - represents a column element in the DOM
export interface DOMColumn extends HTMLElement, Column {
	isOmnitableColumn: boolean;
	hidden: boolean;
	name: string; // required in DOM context
	title: string; // required in DOM context
	disabled?: boolean;
	sortOn?: string; // deprecated alias for sortPath
	computeSource: (valuePath: string, values: unknown[]) => unknown[];
	getConfig?: (column: DOMColumn) => Record<string, unknown>;
	[key: string]: unknown;
}

// Symbol for column reference - defined as a type for use in interfaces
export type ColumnSymbol = typeof columnSymbol;
export const columnSymbol: unique symbol = Symbol('column');

// Normalized Column - internal representation after processing
export interface NormalizedColumn extends Column {
	name: string; // required after normalization
	title: string; // required after normalization
	source?: (valuePath: string, values: unknown[]) => unknown[];
	computeSource: (valuePath: string, values: unknown[]) => unknown[];
	[columnSymbol]: DOMColumn;
	[key: string]: unknown;
}

// Specialized column types
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

export interface Host extends HTMLElement {
	shadowRoot: ShadowRoot;
}

export interface GroupItem<T = Item> {
	items: T[];
	[key: string]: unknown;
	[indexSymbol]?: number;
}

export interface SortAndGroupOptions {
	groupOnColumn?: NormalizedColumn;
	groupOnDescending?: boolean;
	sortOnColumn?: NormalizedColumn;
	descending?: boolean;
}
