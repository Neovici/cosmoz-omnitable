import { prop, array } from '@neovici/cosmoz-autocomplete/lib/utils';
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
			return unique(values, valueProperty);
		}

		if (typeof values === 'object') {
			const valProp = valueProperty ?? 'id',
				textProp = textProperty ?? 'label';
			return Object.entries(values)
				.map(([id, label]) => ({
					[valProp]: id,
					[textProp]: label,
				}))
				.sort((a, b) => {
					if (a[textProp] < b[textProp]) {
						return -1;
					}
					if (a[textProp] > b[textProp]) {
						return 1;
					}
					return 0;
				});
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
					values.some((value) => val(value) === val(filter))
			);
		},
	onChange = (setState) => (value) =>
		setState((state) => ({ ...state, filter: value })),
	onFocus = (setState) => (focused) =>
		setState((state) => ({ ...state, headerFocused: focused })),
	onText = (setState) => (text) =>
		setState((state) => ({ ...state, query: text })),
	computeSource = (
		{
			valuePath,
			valueProperty,
			textProperty,
			emptyLabel,
			emptyValue,
			emptyProperty,
		},
		data
	) => {
		const values = valuesFrom(data, valuePath),
			source = toAutocompleteSource(values, valueProperty, textProperty);

		if (
			!emptyLabel ||
			emptyValue === undefined ||
			!textProperty ||
			!(emptyProperty || valueProperty) ||
			source.length < 0
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
					valueProperty: column.valueProperty,
					textProperty: column.textProperty,
					emptyLabel: column.emptyLabel,
					emptyValue: column.emptyValue,
					emptyProperty: { type: String },
				};
			}

			getString(column, item) {
				return getString(column, item);
			}

			toXlsxValue(column, item) {
				return toXlsxValue(column, item);
			}

			cellTitleFn(column, item) {
				return getString(column, item);
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
					? column.values
					: computeSource(column, data);
			}
		};

export {
	unique,
	getTexts,
	getString,
	toXlsxValue,
	applyMultiFilter,
	onChange,
	onFocus,
	onText,
	computeSource,
	toAutocompleteSource,
	listColumnMixin,
};
