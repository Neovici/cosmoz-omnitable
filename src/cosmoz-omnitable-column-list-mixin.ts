import { array } from '@neovici/cosmoz-utils/array';
import { invoke } from '@neovici/cosmoz-utils/function';
import { prop } from '@neovici/cosmoz-utils/object';
import { get } from '@polymer/polymer/lib/utils/path';
import type { Column, GetPath, Item, Items, ListColumn } from './lib/types';
import { valuesFrom } from './lib/utils-data';

const unique = (
		values: unknown[] | undefined,
		valueProperty?: string,
	): unknown[] | undefined => {
		if (!Array.isArray(values)) {
			return;
		}
		const used: unknown[] = [];
		return values
			.reduce((acc: unknown[], cur: unknown) => {
				if (Array.isArray(cur)) {
					cur.forEach((subcur) => {
						acc.push(subcur);
					});
					return acc;
				}
				acc.push(cur);
				return acc;
			}, [])
			.filter((item, index, arr) => {
				if (arr.indexOf(item) !== index) {
					return false;
				}
				if (valueProperty) {
					const value = get(item as object, valueProperty);
					if (used.indexOf(value) !== -1) {
						return false;
					}
					used.push(value);
				}
				return true;
			});
	},
	toAutocompleteSource = (
		values: unknown,
		valueProperty?: string,
		textProperty?: string,
	): Record<string, unknown>[] => {
		if (values == null) {
			return [];
		}

		if (Array.isArray(values)) {
			const result = unique(values, valueProperty);
			if (!result?.length) return [];
			const textProp = textProperty ?? 'label';
			const getText = (item: unknown): string =>
				typeof item === 'object' && item != null
					? String(get(item, textProp ?? '') ?? '')
					: String(item ?? '');
			return result.sort((a, b) =>
				getText(a).localeCompare(getText(b)),
			) as Record<string, unknown>[];
		}

		if (typeof values === 'object') {
			const valProp = valueProperty ?? 'id',
				textProp = textProperty ?? 'label';
			return Object.entries(values)
				.map(([id, label]) => ({
					[valProp]: id,
					[textProp]: label,
				}))
				.sort((a, b) =>
					String(a[textProp] ?? '').localeCompare(String(b[textProp] ?? '')),
				);
		}

		return [];
	},
	getTexts = (
		item: Item,
		valuePath: GetPath | undefined,
		textProperty: string | undefined,
	): string[] =>
		array(valuePath && get(item, valuePath)).map(prop(textProperty)),
	getString = ({ valuePath, textProperty }: ListColumn, item: Item): string => {
		return getTexts(item, valuePath, textProperty)
			.filter((i) => i != null)
			.join(', ');
	},
	toXlsxValue = getString,
	applyMultiFilter =
		(
			{ valueProperty, valuePath, emptyValue, emptyProperty }: ListColumn,
			filters: unknown[],
		) =>
		(item: Item): boolean => {
			const val = prop(valueProperty),
				values = array(get(item, valuePath!));
			return filters.some(
				(filter: unknown) =>
					(values.length === 0 &&
						prop(emptyProperty || valueProperty)(filter) === emptyValue) ||
					values.some((value: unknown) => val(value) === val(filter)),
			);
		},
	onChange =
		(
			setState: (
				fn: (state: Record<string, unknown>) => Record<string, unknown>,
			) => void,
		) =>
		(value: unknown) =>
			setState((state) => ({ ...state, filter: value })),
	onFocus =
		(
			setState: (
				fn: (state: Record<string, unknown>) => Record<string, unknown>,
			) => void,
		) =>
		(focused: boolean) =>
			setState((state) => ({ ...state, headerFocused: focused })),
	onText =
		(
			setState: (
				fn: (state: Record<string, unknown>) => Record<string, unknown>,
			) => void,
		) =>
		(text: string) =>
			setState((state) => ({ ...state, query: text })),
	computeValues = (
		{
			emptyValue,
			emptyLabel,
			emptyProperty,
			textProperty,
			valueProperty,
		}: {
			emptyValue?: unknown;
			emptyLabel?: string;
			emptyProperty?: string;
			textProperty?: string;
			valueProperty?: string;
		},
		rawSource: unknown,
	): Record<string, unknown>[] => {
		const source = toAutocompleteSource(rawSource, valueProperty, textProperty);
		if (
			!emptyLabel ||
			emptyValue === undefined ||
			!textProperty ||
			!(emptyProperty || valueProperty) ||
			!source
		) {
			return source;
		}
		return [
			{
				[textProperty!]: emptyLabel,
				[emptyProperty || valueProperty!]: emptyValue,
			},
			...source,
		];
	},
	_computeSource = (column: ListColumn, data: Items): unknown =>
		computeValues(column, valuesFrom(data, column.valuePath!)),
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	listColumnMixin = (base: any) =>
		class extends base {
			static get properties() {
				return {
					textProperty: { type: String },
					valueProperty: { type: String },
					emptyLabel: { type: String },
					emptyValue: { type: Object },
					emptyProperty: { type: String },
				};
			}

			getConfig(column: ListColumn): {
				emptyProperty?: string;
			} {
				return {
					emptyProperty: column.emptyProperty,
				};
			}

			getString(column: ListColumn, item: Item): string {
				return getString(column, item);
			}

			toXlsxValue(column: ListColumn, item: Item): string {
				return toXlsxValue(column, item);
			}

			getComparableValue(
				{ valuePath, valueProperty }: ListColumn,
				item: Item,
			): string {
				const value = get(item, valuePath!);
				if (valueProperty == null) {
					return value;
				}
				return array(value).map(prop(valueProperty)).sort().join(' ');
			}

			getFilterFn(
				column: ListColumn,
				filters: unknown[] | undefined,
			): ((item: Item) => boolean) | undefined {
				if (!filters || !Array.isArray(filters) || filters.length === 0) {
					return;
				}

				return applyMultiFilter(column, filters);
			}

			serializeFilter(_column: Column, filter: unknown): string | null {
				if (!Array.isArray(filter)) return JSON.stringify(filter);
				return filter.length === 0 ? null : JSON.stringify(filter);
			}

			deserializeFilter(_column: Column, filter: unknown): unknown {
				if (filter == null) {
					return null;
				}

				try {
					return JSON.parse(decodeURIComponent(filter as string));
				} catch (error: unknown) {
					const err = error as { name?: string; message?: string };
					// eslint-disable-next-line no-console
					console.error('Failed to deserialize filter value:', {
						error: err?.name,
						message: err?.message,
						filterLength: typeof filter === 'string' ? filter.length : null,
					});
					return null;
				}
			}

			computeSource(
				column: ListColumn & {
					externalValues?: boolean;
					values?: unknown[] | (() => Promise<unknown>);
				},
				data: Items,
			): unknown {
				return column.externalValues || typeof column.values === 'function'
					? async (...args: unknown[]) =>
							computeValues(
								column,
								await Promise.resolve(
									(invoke as (...a: unknown[]) => unknown)(
										column.values,
										...args,
									),
								),
							)
					: _computeSource(column, data);
			}
		};

export {
	applyMultiFilter,
	_computeSource as computeSource,
	getString,
	getTexts,
	listColumnMixin,
	onChange,
	onFocus,
	onText,
	toAutocompleteSource,
	toXlsxValue,
	unique,
};
