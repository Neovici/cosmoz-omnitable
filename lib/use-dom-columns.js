import { useEffect, useLayoutEffect, useState } from 'haunted';
import { memooize } from '@neovici/cosmoz-utils/memoize';

const columnSymbol = Symbol('column'),
	verifyColumnSetup = (columns) => {
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
				column
			);
		});

		columns.forEach((column) => {
			if (
				columnNames.indexOf(column.name) ===
				columnNames.lastIndexOf(column.name)
			) {
				return;
			}
			ok = false;
			// eslint-disable-next-line no-console
			console.error(
				'The name attribute needs to be unique among all columns! Not unique on column',
				column
			);
		});
		return ok;
	},
	// eslint-disable-next-line max-lines-per-function
	domColumnsToConfig = (host, { enabledColumns }) => {
		const domColumns = host.shadowRoot
			.querySelector('#columnsSlot')
			.assignedElements({ flatten: true })
			.filter((child) => child.isOmnitableColumn && !child.hidden);

		if (!verifyColumnSetup(domColumns)) {
			return [];
		}

		const columns = Array.isArray(enabledColumns)
			? domColumns.filter((column) => enabledColumns.includes(column.name))
			: domColumns.filter((column) => !column.disabled);

		// eslint-disable-next-line max-lines-per-function
		return columns.map((column) => ({
			name: column.name,
			title: column.title,

			valuePath: column.valuePath ?? column.name,
			groupOn: column.groupOn ?? column.valuePath,
			sortOn: column.sortOn ?? column.valuePath,

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

			// @deprecated
			loading: column.loading,
			externalValues: column.externalValues,
			computeSource: column.computeSource,

			// boolean columns
			trueLabel: column.trueLabel,
			falseLabel: column.falseLabel,

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
		}));
	},
	useDOMColumns = (host, { enabledColumns }) => {
		const [columns, setColumns] = useState([]);

		useLayoutEffect(() => {
			setColumns(domColumnsToConfig(host, { enabledColumns }));
		}, []);

		useEffect(() => {
			const slot = host.shadowRoot.querySelector('#columnsSlot'),
				handler = () =>
					setColumns(domColumnsToConfig(host, { enabledColumns }));

			handler();
			slot.addEventListener('slotchange', handler);
			host.addEventListener('cosmoz-column-prop-changed', handler);
			return () => {
				slot.removeEventListener('slotchange', handler);
				host.removeEventListener('cosmoz-column-prop-changed', handler);
			};
		}, [enabledColumns]);

		return columns;
	};

export { columnSymbol, useDOMColumns };
