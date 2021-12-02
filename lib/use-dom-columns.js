import { useEffect, useState } from 'haunted';
import { memooize } from './memoize';
import { columnSymbol } from './normalize-settings';

const
	verifyColumnSetup = columns => {
		let ok = true;
		const columnNames = columns.map(c => c.name);
		// Check if column names are set
		columns.forEach(column => {
			if (column.name != null) {
				return;
			}
			ok = false;
			// eslint-disable-next-line no-console
			console.error('The name attribute needs to be set on all columns! Missing on column', column);
		});

		columns.forEach(column => {
			if (columnNames.indexOf(name) === columnNames.lastIndexOf(name)) {
				return;
			}
			ok = false;
			// eslint-disable-next-line no-console
			console.error('The name attribute needs to be unique among all columns! Not unique on column', column);
		});
		return ok;
	},

	// eslint-disable-next-line max-lines-per-function
	domColumnsToConfig = (host, { enabledColumns }) => {
		const domColumns = host.shadowRoot.querySelector('#columnsSlot')
			.assignedElements({ flatten: true })
			.filter(child => child.isOmnitableColumn && !child.hidden);

		if (!verifyColumnSetup(domColumns)) {
			return [];
		}

		const columns = Array.isArray(enabledColumns)
			?	domColumns.filter(column => enabledColumns.includes(column.name))
			: domColumns.filter(column => !column.disabled);

		return columns.map(column => ({
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
			cellClass: column.cellClass,

			editable: column.editable,

			values: column.values,
			source: memooize((column, data) => column.externalValues || typeof column.values === 'function'
				? column.values
				: column.computeSource(column, data)),

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
			showMaxNodes: column.showMaxNodes,
			keyProperty: column.keyProperty,

			[columnSymbol]: column
		}));
	};

export const useDOMColumns = (host, { enabledColumns }) => {
	const
		[columns, setColumns] = useState(() => domColumnsToConfig(host, { enabledColumns }));

	useEffect(() => {
		const
			slot = host.shadowRoot.querySelector('#columnsSlot'),
			handler = () => {
				host.suppressNextScrollReset();
				setColumns(domColumnsToConfig(host, { enabledColumns }));
			};

		slot.addEventListener('slotchange', handler);
		host.addEventListener('cosmoz-column-prop-changed', handler);
		return () => {
			slot.removeEventListener('slotchange', handler);
			host.removeEventListener('cosmoz-column-prop-changed', handler);
		};
	}, []);

	return columns;
};
