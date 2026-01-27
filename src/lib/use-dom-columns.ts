import { memooize } from '@neovici/cosmoz-utils/memoize';
import { useLayoutEffect, useState } from '@pionjs/pion';
import {
	columnSymbol,
	DOMColumn,
	Host,
	NormalizedColumn,
	RenderFunction,
} from './types';

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

		renderHeader: column.renderHeader as RenderFunction,
		renderCell: column.renderCell,
		renderEditCell: column.renderEditCell as RenderFunction,
		renderGroup: column.renderGroup as RenderFunction,
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

// Re-export for backwards compatibility
export { columnSymbol } from './types';
