import { useMemo, useLayoutEffect, useState } from '@pionjs/pion';
import { memooize } from '@neovici/cosmoz-utils/memoize';

const columnSymbol = Symbol('column');
const verifyColumnSetup = (columns) => {
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

// eslint-disable-next-line max-lines-per-function
const normalizeColumn = (column) => {
	const valuePath = column.valuePath ?? column.name;

	return {
		name: column.name,
		title: column.title,

		valuePath,
		groupOn: column.groupOn ?? valuePath,
		sortOn: column.sortOn ?? valuePath,

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

const isVisibleColumn = (child) => child.isOmnitableColumn && !child.hidden;

const collectDomColumns = (slot) => {
	const domColumns = slot
		.assignedElements({ flatten: true })
		.filter(isVisibleColumn);

	if (!verifyColumnSetup(domColumns)) return [];
	return domColumns;
};

const normalizeColumns = (domColumns, enabledColumns) => {
	const columns = Array.isArray(enabledColumns)
		? domColumns.filter((column) => enabledColumns.includes(column.name))
		: domColumns.filter((column) => !column.disabled);

	return columns.map(normalizeColumn);
};

export const useDOMColumns = (host, { enabledColumns }) => {
	const [columns, setColumns] = useState([]);

	useLayoutEffect(() => {
		let sched;
		const slot = host.shadowRoot.querySelector('#columnsSlot');
		const update = () => {
			setColumns(normalizeColumns(collectDomColumns(slot), enabledColumns));
		};
		const scheduleUpdate = () => {
			cancelAnimationFrame(sched);
			sched = requestAnimationFrame(update);
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
