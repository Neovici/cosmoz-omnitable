import { useEffect, useMemo, useState } from '@pionjs/pion';
import { get } from '@polymer/polymer/lib/utils/path';
import {
	columnLayoutDefaults,
	contentConfig,
	isEmptyValue,
	type ColumnLayoutHost,
	type ColumnMeasurement,
} from './column-layout';
import type { NormalizedSettings } from './settings/normalize';
import { columnSymbol, type NormalizedColumn } from './use-dom-columns';

const customRenderer = (column: NormalizedColumn) => {
	const element = column[columnSymbol];
	return (
		element && column.renderCell !== Object.getPrototypeOf(element).renderCell
	);
};

const font = (element: Element) => {
	const style = getComputedStyle(element);
	// Font variants can make the computed shorthand empty, notably tabular-nums.
	return (
		style.font ||
		`${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`
	);
};

const measureColumns = (
	host: ColumnLayoutHost,
	columns: NormalizedColumn[],
	data: object[]
) => {
	const context = document.createElement('canvas').getContext('2d');
	if (!context) return new Map();
	return new Map<string, ColumnMeasurement>(
		columns.map((column) => {
			const selector = `.cell[name="${CSS.escape(column.name)}"]`;
			const header = host.shadowRoot!.querySelector(`.header ${selector}`);
			const cell = host.shadowRoot!.querySelector(`.itemRow ${selector}`);
			context.font = font(header || host);
			const headerWidth = Math.ceil(
				context.measureText(column.title || '').width +
					(column.noSort ? 12 : 34)
			);
			context.font = font(cell || host);
			const configured = customRenderer(column)
				? parseInt(column.width || '0', 10)
				: 0;
			let content = 0;
			for (const item of data.slice(0, 100)) {
				const value =
					column.getContentText?.(column, item) ??
					column.getString?.(column, item);
				if (['string', 'number', 'boolean'].includes(typeof value)) {
					content = Math.max(
						content,
						context.measureText(String(value).slice(0, 1000)).width + 18
					);
				}
			}
			return [
				column.name,
				{
					header: headerWidth,
					content: Math.max(configured, Math.min(320, Math.ceil(content))),
				},
			];
		})
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
	const autoSize = host.autoSize ?? columnLayoutDefaults.autoSize;
	const hideEmpty =
		host.hideEmptyColumns ?? columnLayoutDefaults.hideEmptyColumns;
	const data = host.data;
	const [measurements, setMeasurements] = useState(
		new Map<string, ColumnMeasurement>()
	);
	useEffect(() => {
		if (!autoSize) return;
		let frame: number;
		const measure = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() =>
				setMeasurements(
					measureColumns(host, columns, Array.isArray(data) ? data : [])
				)
			);
		};
		measure();
		document.fonts.addEventListener('loadingdone', measure);
		return () => {
			cancelAnimationFrame(frame);
			document.fonts.removeEventListener('loadingdone', measure);
		};
	}, [autoSize, host, columns, data]);
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
											: isEmptyValue(get(item, column.valuePath))
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
		() => contentConfig(settings.columns, measurements, autoSize, hidden),
		[settings.columns, measurements, autoSize, hidden]
	);
	return {
		config,
		autoSize,
		autoHiddenColumns: columns.filter((column) => hidden.has(column.name)),
	};
};
