import type { ColumnConfigInput } from './layout';

export interface ColumnLayoutOptions {
	autoSize: boolean;
	hideEmptyColumns: boolean;
}

export interface ColumnLayoutHost
	extends HTMLElement,
		Partial<ColumnLayoutOptions> {
	/** True only after all rows in the current result have loaded successfully. */
	dataComplete?: boolean;
	data?: object[];
	loading?: boolean;
	error?: unknown;
}

export interface ColumnMeasurement {
	header: number;
	content: number;
}

/** Configure defaults before mounting tables. Individual table properties override these. */
export const columnLayoutDefaults: ColumnLayoutOptions = {
	autoSize: false,
	hideEmptyColumns: false,
};
export const configureColumnLayout = (options: Partial<ColumnLayoutOptions>) =>
	Object.assign(columnLayoutDefaults, options);

export const isEmptyValue = (value: unknown) =>
	value == null ||
	(typeof value === 'string' && value.trim() === '') ||
	(Array.isArray(value) && value.length === 0);

/** Widths are transient. Never write measured widths or automatic hiding into settings. */
export const contentConfig = (
	config: ColumnConfigInput[],
	measurements: Map<string, ColumnMeasurement>,
	autoSize: boolean,
	hidden: Set<string>
): ColumnConfigInput[] =>
	config.map((setting) => {
		const size = measurements.get(setting.name);
		if (!autoSize || !size) {
			return { ...setting, hidden: hidden.has(setting.name) };
		}
		const minWidth = Math.max(setting.minWidth, size.header);
		return {
			...setting,
			minWidth,
			width: Math.max(
				minWidth,
				setting.flex === 0 ? setting.width : size.content
			),
			hidden: hidden.has(setting.name),
		};
	});
