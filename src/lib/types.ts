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
	preferredDropdownHorizontalAlign?: string;
	renderCell?: (column: Column, data: ItemRenderData) => unknown;
	renderEditCell?: (
		column: Column,
		data: ItemRenderData,
		onItemChange: (value: unknown) => void,
	) => unknown;
	renderGroup?: <GroupType = Record<string, unknown>>(
		column: Column,
		data: GroupRenderData<GroupType>,
	) => unknown;
	renderMini?: (column: Column, data: ItemRenderData) => unknown;
	renderHeader?: (
		column: Column,
		data: HeaderRenderData,
		setState: (s: unknown) => void,
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
		filter: unknown,
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

export interface ItemRenderData {
	item: Item;
	selected: boolean;
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
