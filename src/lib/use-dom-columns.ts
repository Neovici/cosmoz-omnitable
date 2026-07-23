import { memooize } from '@neovici/cosmoz-utils/memoize';
import { useLayoutEffect, useState } from '@pionjs/pion';
import type { Column, GetPath } from './types';

export const columnSymbol: unique symbol = Symbol('column');

export interface DomColumn
	extends HTMLElement, Omit<Column, 'title' | 'hidden'> {
	isOmnitableColumn: boolean;
	hidden: boolean;
	disabled?: boolean;
	disabledFiltering?: boolean;
	computeSource: (column: Column, data: unknown) => unknown;
	getConfig?: (column: DomColumn) => Record<string, unknown>;
}

export interface NormalizedColumn extends Column {
	name: string;
	valuePath: GetPath;
	groupOn: GetPath;
	sortOn: GetPath;
	disabledFiltering?: boolean;
	source: (column: Column, data: unknown) => unknown;
	[columnSymbol]: DomColumn;
}

const verifyColumnSetup = (columns: DomColumn[]): boolean => {
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

const normalizeColumn = (
	column: DomColumn,
	disabledFiltering?: boolean,
): NormalizedColumn => {
	const valuePath: GetPath = column.valuePath ?? column.name!;

	return {
		name: column.name!,
		title: column.title,

		valuePath,
		groupOn: column.groupOn ?? valuePath,
		sortOn: column.sortOn ?? valuePath,
		noSort: column.noSort,
		disabledFiltering: disabledFiltering || column.disabledFiltering,

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
};

const isVisibleColumn = (child: Node): child is DomColumn =>
	(child as DomColumn).isOmnitableColumn && !(child as DomColumn).hidden;

const collectDomColumns = (assignedElements: Node[]): DomColumn[] => {
	const domColumns = assignedElements.filter(isVisibleColumn);

	if (!verifyColumnSetup(domColumns)) return [];
	return domColumns;
};

const normalizeColumns = (
	domColumns: DomColumn[],
	enabledColumns: string[] | undefined,
	disabledFiltering?: boolean,
): NormalizedColumn[] => {
	const columns = Array.isArray(enabledColumns)
		? domColumns.filter((column) => enabledColumns.includes(column.name!))
		: domColumns.filter((column) => !column.disabled);

	return columns.map((col) => normalizeColumn(col, disabledFiltering));
};

interface UseDOMColumnsParams {
	enabledColumns?: string[];
	disabledFiltering?: boolean;
}

export const useDOMColumns = (
	host: HTMLElement,
	{ enabledColumns, disabledFiltering }: UseDOMColumnsParams,
): NormalizedColumn[] => {
	const [columns, setColumns] = useState<NormalizedColumn[]>([]);

	useLayoutEffect(() => {
		let sched: number | undefined;
		let previous: Node[] = [];
		const slot =
			host.shadowRoot!.querySelector<HTMLSlotElement>('#columnsSlot')!;
		const update = (force?: boolean) => () => {
			const current = slot.assignedNodes({ flatten: true });

			if (!force) {
				const added = current.filter((n) => !previous.includes(n));
				const removed = previous.filter((n) => !current.includes(n));
				const columnsChanged = [...added, ...removed].some(
					(element) => (element as Partial<DomColumn>).isOmnitableColumn,
				);

				previous = current;

				if (!columnsChanged) return;
			} else {
				previous = current;
			}

			setColumns(
				normalizeColumns(
					collectDomColumns(current),
					enabledColumns,
					disabledFiltering,
				),
			);
		};

		const scheduleUpdate = (ev?: Event) => {
			cancelAnimationFrame(sched!);
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
			cancelAnimationFrame(sched!);
		};
	}, [enabledColumns, disabledFiltering]);

	return columns;
};
