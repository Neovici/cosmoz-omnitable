import { memooize } from '@neovici/cosmoz-utils/memoize';
import { useLayoutEffect, useState } from '@pionjs/pion';
import { Column, Host, Item, RenderFunction } from './types';

const columnSymbol = Symbol('column');

interface ColumnProperties {
	getString?: (item: Item, valuePath?: string) => string;
	getComparableValue?: (column: NormalizedColumn, item: Item) => unknown;
	serializeFilter?: (
		column: NormalizedColumn,
		filter: unknown,
	) => string | undefined;
	deserializeFilter?: (
		column: NormalizedColumn,
		filter: string | null,
	) => unknown;
	toXlsxValue?: (item: Item, valuePath?: string) => unknown;

	renderHeader?: RenderFunction;
	renderEditCell?: RenderFunction;
	renderGroup?: RenderFunction;
	cellTitleFn?: (item: Item) => string;
	headerTitleFn?: () => string;

	getFilterFn?: (
		column: NormalizedColumn,
		filter: unknown,
	) => ((item: Item) => boolean) | null | undefined;
	headerCellClass?: string;
	cellClass?: string;

	editable?: boolean;
	values?: unknown[];
	noLocalFilter?: boolean;
	mini?: boolean;

	// @deprecated
	loading?: boolean;
	externalValues?: unknown[];

	// boolean columns
	trueLabel?: string;
	falseLabel?: string;

	// list columns
	valueProperty?: string;
	textProperty?: string;
	emptyLabel?: string;
	emptyValue?: unknown;

	// range columns
	min?: unknown;
	max?: unknown;
	locale?: string;
	autoupdate?: boolean;

	// number columns
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;

	// amount columns
	currency?: string;
	rates?: Record<string, number>;
	autodetect?: boolean;

	// treenode columns
	ownerTree?: unknown;
	keyProperty?: string;
}

interface DOMColumn extends HTMLElement, ColumnProperties {
	// DOM-specific properties
	isOmnitableColumn: boolean;
	hidden: boolean;
	name: string;
	title: string;
	disabled?: boolean;

	// Column configuration
	valuePath?: string;
	groupOn?: string;
	sortPath?: string;
	sortOn?: string;
	noSort?: boolean;

	// Layout
	minWidth?: string;
	width?: string;
	flex?: string;
	priority?: number;

	// DOM-specific render functions
	renderCell?: RenderFunction;
	renderMini?: RenderFunction;

	computeSource: (valuePath: string, values: unknown[]) => unknown[];
	getConfig?: (column: DOMColumn) => Record<string, unknown>;

	__ownChange?: boolean;
	[key: string]: unknown;
}

interface NormalizedColumn extends Column, ColumnProperties {
	source?: (valuePath: string, values: unknown[]) => unknown[];

	// @deprecated
	computeSource: (valuePath: string, values: unknown[]) => unknown[];

	[columnSymbol]: DOMColumn;
	[key: string]: unknown;
}

const verifyColumnSetup = (columns: DOMColumn[]) => {
	let ok = true;
	const columnNames = columns.map((c) => c.name);
	// Check if column names are set
	columns.forEach((column) => {
		if (column.name != null) {
			return;
		}
		ok = false;
		// eslint-disable-next-line no-console
		console.error(
			'The name attribute needs to be set on all columns! Missing on column',
			column,
		);
	});

	columns.forEach((column) => {
		if (
			columnNames.indexOf(column.name) === columnNames.lastIndexOf(column.name)
		) {
			return;
		}
		ok = false;
		// eslint-disable-next-line no-console
		console.error(
			'The name attribute needs to be unique among all columns! Not unique on column',
			column,
		);
	});
	return ok;
};

const normalizeColumn = (column: DOMColumn): NormalizedColumn => {
	const valuePath = column.valuePath ?? column.name;

	const normalized: NormalizedColumn = {
		name: column.name,
		title: column.title,

		valuePath,
		groupOn: column.groupOn ?? valuePath,
		sortPath: column.sortPath ?? column.sortOn ?? valuePath,
		noSort: column.noSort,

		minWidth: column.minWidth,
		width: column.width,
		flex: column.flex,
		priority: column.priority,

		getString: column.getString,
		getComparableValue: column.getComparableValue,
		serializeFilter: column.serializeFilter,
		deserializeFilter: column.deserializeFilter,
		toXlsxValue: column.toXlsxValue,

		renderHeader: column.renderHeader,
		renderCell: column.renderCell,
		renderEditCell: column.renderEditCell,
		renderGroup: column.renderGroup,
		cellTitleFn: column.cellTitleFn,
		headerTitleFn: column.headerTitleFn,

		getFilterFn: column.getFilterFn,
		headerCellClass: column.headerCellClass,
		cellClass: column.cellClass,

		editable: column.editable,

		values: column.values,
		source: memooize(column.computeSource),

		noLocalFilter: column.noLocalFilter,

		mini: column.mini,
		renderMini: column.renderMini,

		// @deprecated
		loading: column.loading,
		externalValues: column.externalValues,
		computeSource: column.computeSource,

		// boolean columns
		trueLabel: column.trueLabel,
		falseLabel: column.falseLabel,

		// list columns
		valueProperty: column.valueProperty,
		textProperty: column.textProperty,
		emptyLabel: column.emptyLabel,
		emptyValue: column.emptyValue,

		// range columns
		min: column.min,
		max: column.max,
		locale: column.locale,
		autoupdate: column.autoupdate,

		// number columns
		maximumFractionDigits: column.maximumFractionDigits,
		minimumFractionDigits: column.minimumFractionDigits,

		// amount columns
		currency: column.currency,
		rates: column.rates,
		autodetect: column.autodetect,

		// treenode columns
		ownerTree: column.ownerTree,
		keyProperty: column.keyProperty,

		...column.getConfig?.(column),

		[columnSymbol]: column,
	};

	return normalized;
};

const isVisibleColumn = (child: Element): child is DOMColumn => {
	const column = child as Partial<DOMColumn>;
	return Boolean(column.isOmnitableColumn && !column.hidden);
};

const collectDomColumns = (assignedElements: Element[]): DOMColumn[] => {
	const domColumns = assignedElements.filter(isVisibleColumn);

	if (!verifyColumnSetup(domColumns)) return [];
	return domColumns;
};

const normalizeColumns = (
	domColumns: DOMColumn[],
	enabledColumns: string[] | undefined,
): NormalizedColumn[] => {
	const columns = Array.isArray(enabledColumns)
		? domColumns.filter((column) => enabledColumns.includes(column.name))
		: domColumns.filter((column) => !column.disabled);

	return columns.map(normalizeColumn);
};

export const useDOMColumns = (
	host: Host,
	{ enabledColumns }: { enabledColumns?: string[] },
): NormalizedColumn[] => {
	const [columns, setColumns] = useState<NormalizedColumn[]>([]);

	useLayoutEffect(() => {
		let sched: number;
		let previous: Node[] = [];
		const slot = host.shadowRoot.querySelector(
			'#columnsSlot',
		) as HTMLSlotElement;
		const update = (force?: boolean) => () => {
			const current = slot.assignedNodes({ flatten: true });

			if (!force) {
				const added = current.filter((n) => !previous.includes(n));
				const removed = previous.filter((n) => !current.includes(n));
				const columnsChanged = [...added, ...removed].some(
					(element) => (element as Partial<DOMColumn>).isOmnitableColumn,
				);

				previous = current;

				if (!columnsChanged) return;
			} else {
				previous = current;
			}

			setColumns(
				normalizeColumns(
					collectDomColumns(current as Element[]),
					enabledColumns,
				),
			);
		};
		const scheduleUpdate = (ev?: Event) => {
			cancelAnimationFrame(sched);
			sched = requestAnimationFrame(
				update(ev?.type === 'cosmoz-column-prop-changed'),
			);
		};

		scheduleUpdate();

		slot.addEventListener('slotchange', scheduleUpdate);
		host.addEventListener('cosmoz-column-prop-changed', scheduleUpdate);

		return () => {
			slot.removeEventListener('slotchange', scheduleUpdate);
			host.removeEventListener('cosmoz-column-prop-changed', scheduleUpdate);
			cancelAnimationFrame(sched);
		};
	}, [enabledColumns]);

	return columns;
};

export { columnSymbol };
export type { ColumnProperties, DOMColumn, NormalizedColumn };
