export interface ColumnLayoutOptions {
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

/** Configure defaults before mounting tables. Individual table properties override these. */
export const columnLayoutDefaults: ColumnLayoutOptions = {
	hideEmptyColumns: false,
};
export const configureColumnLayout = (options: Partial<ColumnLayoutOptions>) =>
	Object.assign(columnLayoutDefaults, options);

export const isEmptyValue = (value: unknown) =>
	value == null ||
	(typeof value === 'string' && value.trim() === '') ||
	(Array.isArray(value) && value.length === 0);
