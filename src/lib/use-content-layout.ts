import { useMemo } from '@pionjs/pion';
import { get } from '@polymer/polymer/lib/utils/path';
import {
	columnLayoutDefaults,
	isEmptyValue,
	type ColumnLayoutHost,
} from './column-layout';
import type { NormalizedSettings } from './settings/normalize';
import { columnSymbol, type NormalizedColumn } from './use-dom-columns';

// Only built-in cell renderers have a known relationship to valuePath.
const textColumnTags = new Set([
	'cosmoz-omnitable-column',
	'cosmoz-omnitable-column-amount',
	'cosmoz-omnitable-column-autocomplete',
	'cosmoz-omnitable-column-autocomplete-excluding',
	'cosmoz-omnitable-column-boolean',
	'cosmoz-omnitable-column-date',
	'cosmoz-omnitable-column-datetime',
	'cosmoz-omnitable-column-list',
	'cosmoz-omnitable-column-list-horizontal',
	'cosmoz-omnitable-column-number',
	'cosmoz-omnitable-column-time',
]);

const customRenderer = (column: NormalizedColumn) => {
	const element = column[columnSymbol];
	return (
		element &&
		(!textColumnTags.has(element.localName) ||
			column.renderCell !== Object.getPrototypeOf(element).renderCell)
	);
};

interface Params {
	host: ColumnLayoutHost;
	columns: NormalizedColumn[];
	settings: NormalizedSettings;
	filters?: Record<string, { filter?: unknown }>;
}

export const useContentLayout = ({
	host,
	columns,
	settings,
	filters = {},
}: Params) => {
	const hideEmpty =
		host.hideEmptyColumns ?? columnLayoutDefaults.hideEmptyColumns;
	const data = host.data;
	const hidden = useMemo(
		() =>
			new Set(
				hideEmpty &&
				host.dataComplete === true &&
				!host.loading &&
				!host.error &&
				Array.isArray(data) &&
				data.length
					? columns
							.filter(
								(column) =>
									!column.editable &&
									isEmptyValue(filters[column.name]?.filter) &&
									!settings.columns.find((s) => s.name === column.name)
										?.showWhenEmpty &&
									(!customRenderer(column) || column.isEmpty) &&
									data.every((item) =>
										column.isEmpty
											? column.isEmpty(column, item)
											: isEmptyValue(get(item, column.valuePath)) &&
											  isEmptyValue(column.getString?.(column, item)) &&
											  isEmptyValue(column.getContentText?.(column, item))
									)
							)
							.map((column) => column.name)
					: []
			),
		[
			hideEmpty,
			host.dataComplete,
			host.loading,
			host.error,
			data,
			columns,
			settings,
			filters,
		]
	);
	const config = useMemo(
		() =>
			settings.columns.map((setting) => ({
				...setting,
				hidden: hidden.has(setting.name),
			})),
		[settings.columns, hidden]
	);
	return {
		config,
		autoHiddenColumns: columns.filter((column) => hidden.has(column.name)),
	};
};
