import type {
	RenderGroupParams as GroupedListGroupParams,
	RenderItemParams as GroupedListRowParams,
} from '../grouped-list/use-cosmoz-grouped-list';
import type { GroupItem } from '../grouped-list/utils';
import type { indexSymbol } from './utils';

export type LimitFunction = (a: number, b: number) => number | undefined;

export type Currency = string;

export type Rates = Partial<Record<Currency, number>> & Record<string, number>;

export interface Amount {
	amount: number;
	currency: Currency;
}

export type GetPath = string | (string | number)[];

export interface Column {
	valuePath?: GetPath;
	locale?: Currency;
	name?: string;
	title?: string;
	minWidth?: string;
	priority?: number;
	flex?: string;
	width?: string;
	sortOn?: GetPath;
	groupOn?: GetPath;
	noSort?: boolean;
	editable?: boolean;
	mini?: number | null;
	hidden?: boolean;
	disabled?: boolean;
	disabledFiltering?: boolean;
	cellClass?: string;
	headerCellClass?: string;
	align?: string;
	headerAlign?: string | null;
	renderCell?: (column: Column, data: ItemRenderData) => unknown;
	renderEditCell?: (
		column: Column,
		data: ItemRenderData,
		onItemChange: (value: unknown) => void
	) => unknown;
	renderGroup?: <GroupType = Record<string, unknown>>(
		column: Column,
		data: GroupRenderData<GroupType>
	) => unknown;
	renderMini?: (column: Column, data: ItemRenderData) => unknown;
	renderHeader?: (
		column: Column,
		data: HeaderRenderData,
		setState: (s: unknown) => void
	) => unknown;
	cellTitleFn?: (column: Column, item: Item) => string;
	headerTitleFn?: (column: Column) => string | undefined;
	toXlsxValue?: (column: Column, item: Item) => unknown;
	getString?: (column: Column, item: Item) => unknown;
	getComparableValue?: (column: Column, item: Item) => unknown;
	serializeFilter?: (column: Column, filter: unknown) => unknown;
	deserializeFilter?: (column: Column, filter: unknown) => unknown;
	getFilterFn?: (
		column: Column,
		filter: unknown
	) => ((item: Item) => boolean) | undefined;
	computeSource?: (column: Column, data: unknown) => unknown;
	values?: unknown[];
	noLocalFilter?: boolean;
	loading?: boolean;
	externalValues?: unknown;
	trueLabel?: string;
	falseLabel?: string;
	valueProperty?: string;
	textProperty?: string;
	emptyLabel?: string;
	emptyValue?: unknown;
	emptyProperty?: string;
	min?: number;
	max?: number;
	autoupdate?: boolean;
	maximumFractionDigits?: number | null;
	minimumFractionDigits?: number | null;
	currency?: string;
	rates?: Rates;
	autodetect?: boolean;
	ownerTree?: unknown;
	keyProperty?: string;
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

export interface ListColumn extends Column {
	textProperty?: string;
	valueProperty?: string;
	emptyLabel?: string;
	emptyValue?: unknown;
	emptyProperty?: string;
}

export interface Limit<T> {
	min: T;
	max: T;
}
export type AmountLimit = Limit<Amount>;

export type Item = object;

export type Items = Item[];

/** Item annotated with its flat (groups interleaved) position. */
export interface IndexedItem extends Item {
	[indexSymbol]: number;
}

/** Group annotated with its position in the flat list. */
export interface IndexedGroup extends GroupItem<IndexedItem> {
	[indexSymbol]: number;
}

export interface ItemRenderData {
	item: Item;
	selected?: boolean;
	expanded?: boolean;
	index?: number;
}

export interface GroupRenderData<GroupType = Record<string, unknown>> {
	item: Item;
	selected: boolean;
	folded: boolean;
	group: GroupType;
}

export interface HeaderRenderData {
	filter?: unknown;
	inputValue?: unknown;
	headerFocused?: boolean;
}

/**
 * Params a host-provided `renderItem` receives for item rows.
 *
 * Extends the grouped-list contract (`selected`, `expanded`, `toggleSelect`,
 * `toggleCollapse`) with data only omnitable owns.
 */
export interface ItemRenderParams extends GroupedListRowParams {
	/** Full enabled, normalized columns. */
	columns: Column[];
	/** Columns the layout engine collapsed (the default row surfaces them in the expand block). */
	collapsedColumns: Column[];
	/** Dispatches `omnitable-item-click`; ignores clicks on `a`, `.checkbox` and `.expand`. */
	onItemClick: (event: Event) => void;
	/**
	 * Default checkbox wiring. Mark your checkbox with `.dataItem=${item}` and
	 * `@input=${onCheckboxChange}` — carries shift-range and ctrl select-only
	 * semantics, and keeps the input from mutating state.
	 */
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
}

/**
 * Params a host-provided `renderGroup` receives for group rows.
 *
 * Extends the grouped-list contract (`selected`, `folded`, `toggleSelect`,
 * `toggleFold`). The fold affordance is the custom renderer's responsibility.
 */
export interface GroupRenderParams extends GroupedListGroupParams {
	/** Full enabled, normalized columns. */
	columns: Column[];
	/**
	 * Default checkbox wiring. Mark your checkbox with `.dataItem=${group}`
	 * (the group!) — selection is group-aware, so checking it selects all
	 * contained items, with shift-range and ctrl select-only semantics.
	 */
	onCheckboxChange: (event: Event) => void;
	dataIsValid: boolean;
}

/**
 * Host-provided full row renderer, set as the `renderItem` property on
 * `<cosmoz-omnitable>`. Its output replaces the entire default row.
 *
 * `index` is the position in the flat (groups interleaved) list — use
 * `item[indexSymbol]` for stable part naming, like the default row does.
 * Use a stable reference (module-level function or `guard([], ...)`);
 * inline arrows re-assert on every render.
 */
export type HostRenderItem = (
	item: IndexedItem,
	index: number,
	params: ItemRenderParams
) => unknown;

/** Host-provided full group-row renderer, set as the `renderGroup` property. */
export type HostRenderGroup = (
	group: IndexedGroup,
	index: number,
	params: GroupRenderParams
) => unknown;
