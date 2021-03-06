import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import {
	prop, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

/**
 * @polymer
 * @mixinFunction
 */
// eslint-disable-next-line max-lines-per-function
export const listColumnMixin = dedupingMixin(base => class extends base {
	static get properties() {
		return {
			/**
			 * Ask for a list of values
			 */
			bindValues: {
				type: Boolean,
				readOnly: true,
				value: true
			},

			filter: {
				type: Array,
				notify: true,
				value() {
					return this._getDefaultFilter();
				}
			},

			textProperty: {
				type: String
			},

			valueProperty: {
				type: String
			},

			query: {
				type: String,
				notify: true
			},

			emptyLabel: {
				type: String
			},
			emptyValue: {
				type: Object
			},

			_source: {
				type: Array,
				computed: '_computeSource(values, valueProperty, textProperty, emptyLabel, emptyValue)'
			}
		};
	}
	constructor() {
		super();
		this._onFocus = this._onFocus.bind(this);
		this._onChange = this._onChange.bind(this);
		this._onText = this._onText.bind(this);
	}

	getString(item, valuePath = this.valuePath, textProperty = this.textProperty) {
		return this.getTexts(item, valuePath, textProperty)
			.filter(i => i != null)
			.join(', ');
	}

	getTexts(item, valuePath = this.valuePath, textProperty = this.textProperty) {
		return array(valuePath && this.get(valuePath, item)).map(prop(textProperty));
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		return this.getString(item, valuePath);
	}

	/**
	 * Get the comparable value of an item.
	 *
	 * @param {Object} item Item to be processed
	 * @param {String} valuePath Property path
	 * @returns {String|void} Valid value or void
	 */
	getComparableValue(item, valuePath = this.valuePath) {
		const value = super.getComparableValue(item, valuePath);
		if (this.valueProperty == null) {
			return value;
		}
		const subValues = array(value).reduce((acc, subItem) => {
			acc.push(this.get(this.valueProperty, subItem));
			return acc;
		}, []);
		return subValues.sort().join(' ');
	}

	_getDefaultFilter() {
		return [];
	}

	_getSource(values, valueProperty = this.valueProperty, textProperty = this.textProperty) {
		if (values != null && !Array.isArray(values) && typeof values === 'object') {
			const valProp = valueProperty ?? 'id',
				textProp = textProperty ?? 'label';
			if (valueProperty == null) {
				this.valueProperty = valProp;
			}
			if (textProperty == null) {
				this.textProperty = textProp;
			}
			return Object
				.entries(values)
				.map(([id, label]) => ({
					[valProp]: id,
					[textProp]: label
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
		return this._unique(values, valueProperty) || [];
	}

	_computeSource(values, valueProperty, textProperty, emptyLabel, emptyValue) {
		const source = this._getSource(values, valueProperty, textProperty);
		if (!emptyLabel || emptyValue === undefined || source.length < 0) {
			return source;
		}
		return [{
			[this.textProperty]: emptyLabel,
			[this.valueProperty]: emptyValue
		}, ...source];
	}


	_applyMultiFilter(filters, item) {
		const val = prop(this.valueProperty),
			values = array(this.get(this.valuePath, item));
		return filters.some(
			filter => values.length === 0 && val(filter) === this.emptyValue || values.some(value => val(value) === val(filter))
		);
	}

	_computeValue(filters, source = [], valueProperty = this.valueProperty) {
		if ((filters?.length || 0) < 1) {
			return;
		}
		const val = prop(valueProperty),
			sourced = source.filter(item => filters.some(filter => val(filter) === val(item)));
		return filters.map(filter => sourced.find(item => val(item) === val(filter)) || filter);
	}

	_onChange(value) {
		this.filter = value;
	}

	_onFocus(focused) {
		this.headerFocused = focused;
	}

	_onText(text) {
		this.query = text;
	}
});
