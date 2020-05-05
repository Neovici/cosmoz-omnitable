import '@webcomponents/shadycss/entrypoints/apply-shim';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import {
	prop, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

/**
 * @polymer
 * @mixinFunction
 */
export const listColumnMixin = dedupingMixin(base =>	class extends base {
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

			suggestionsWidth: {
				type: String
			},

			_source: {
				type: Array,
				computed: '_computeSource(values, valueProperty, textProperty)'
			}
		};
	}

	constructor() {
		super();
		this._onFocusChange = this._onFocusChange.bind(this);
	}

	getString(item, valuePath = this.valuePath, textProperty = this.textProperty) {
		return this.getTexts(item, valuePath, textProperty)
			.filter(Boolean)
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
		const subValues = value.reduce((acc, subItem) => {
			acc.push(this.get(this.valueProperty, subItem));
			return acc;
		}, []);
		return subValues.sort().join(' ');
	}

	_getDefaultFilter() {
		return [];
	}

	_computeSource(values, valueProperty) {
		return this._unique(values, valueProperty) || [];
	}

	_applyMultiFilter(filters, item) {
		const values = array(this.get(this.valuePath, item)).map(prop(this.valueProperty));
		return filters.some(filter => values.includes(filter));
	}

	_computeValue(
		filter,
		source = this._source || [],
		valueProperty = this.valueProperty
	) {
		return source.filter(item =>
			filter.includes(prop(valueProperty)(item))
		);
	}

	_headerValueChanged({ detail: { value }}) {
		this.filter = value.map(prop(this.valueProperty));
	}

	_onFocusChange(focused) {
		this.headerFocused = focused;
	}
});

