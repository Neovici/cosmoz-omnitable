import { array } from '@neovici/cosmoz-utils/array';
import { invoke } from '@neovici/cosmoz-utils/function';
import { prop } from '@neovici/cosmoz-utils/object';
import { get } from '@polymer/polymer/lib/utils/path';
import { valuesFrom } from './lib/utils-data';

const unique = (values, valueProperty) => {
		if (!Array.isArray(values)) {
			return;
		}
		const used = [];
		return values
			.reduce((acc, cur) => {
				if (Array.isArray(cur)) {
					cur.forEach((subcur) => {
						acc.push(subcur);
					});
					return acc;
				}
				acc.push(cur);
				return acc;
			}, [])
			.filter((item, index, array) => {
				if (array.indexOf(item) !== index) {
					return false;
				}
				if (valueProperty) {
					const value = get(item, valueProperty);
					if (used.indexOf(value) !== -1) {
						return false;
					}
					used.push(value);
				}
				return true;
			});
	},
	toAutocompleteSource = (values, valueProperty, textProperty) => {
		if (values == null) {
			return [];
		}

		if (Array.isArray(values)) {
			const result = unique(values, valueProperty);
			if (!result?.length) return result;
			const textProp = textProperty ?? 'label';
			const getText = (item) =>
				typeof item === 'object' && item != null
					? String(get(item, textProp) ?? '')
					: String(item ?? '');
			return result.sort((a, b) => getText(a).localeCompare(getText(b)));
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
	getTexts = (item, valuePath, textProperty) =>
		array(valuePath && get(item, valuePath)).map(prop(textProperty)),
	getString = ({ valuePath, textProperty }, item) => {
		return getTexts(item, valuePath, textProperty)
			.filter((i) => i != null)
			.join(', ');
	},
	toXlsxValue = getString,
	applyMultiFilter =
		({ valueProperty, valuePath, emptyValue, emptyProperty }, filters) =>
		(item) => {
			const val = prop(valueProperty),
				values = array(get(item, valuePath));
			return filters.some(
				(filter) =>
					(values.length === 0 &&
						prop(emptyProperty || valueProperty)(filter) === emptyValue) ||
					values.some((value) => val(value) === val(filter)),
			);
		},
	onChange = (setState) => (value) =>
		setState((state) => ({ ...state, filter: value })),
	onFocus = (setState) => (focused) =>
		setState((state) => ({ ...state, headerFocused: focused })),
	onText = (setState) => (text) =>
		setState((state) => ({ ...state, query: text })),
	computeValues = (
		{ emptyValue, emptyLabel, emptyProperty, textProperty, valueProperty },
		rawSource,
	) => {
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
				[textProperty]: emptyLabel,
				[emptyProperty || valueProperty]: emptyValue,
			},
			...source,
		];
	},
	computeSource = (column, data) =>
		computeValues(column, valuesFrom(data, column.valuePath)),
	listColumnMixin = (base) =>
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

			getConfig(column) {
				return {
					emptyProperty: column.emptyProperty,
				};
			}

			getString(column, item) {
				return getString(column, item);
			}

			toXlsxValue(column, item) {
				return toXlsxValue(column, item);
			}

			getComparableValue({ valuePath, valueProperty }, item) {
				const value = get(item, valuePath);
				if (valueProperty == null) {
					return value;
				}
				const subValues = array(value).reduce((acc, subItem) => {
					acc.push(get(subItem, valueProperty));
					return acc;
				}, []);
				return subValues.sort().join(' ');
			}

			getFilterFn(column, filters) {
				if (!filters || !Array.isArray(filters) || filters.length === 0) {
					return;
				}

				return applyMultiFilter(column, filters);
			}

			serializeFilter(column, filter) {
				return filter.length === 0 ? null : JSON.stringify(filter);
			}

			deserializeFilter(column, filter) {
				return JSON.parse(decodeURIComponent(filter));
			}

			computeSource(column, data) {
				return column.externalValues || typeof column.values === 'function'
					? async (...args) =>
							computeValues(
								column,
								await Promise.resolve(invoke(column.values, ...args)),
							)
					: computeSource(column, data);
			}
		};

export {
	applyMultiFilter,
	computeSource,
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
