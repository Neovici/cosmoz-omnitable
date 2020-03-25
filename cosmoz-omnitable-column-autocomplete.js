import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@neovici/paper-autocomplete-chips';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import { columnMixin } from './cosmoz-omnitable-column-mixin.js';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends columnMixin(PolymerElement) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			<span class="default-column">[[ getString(item, valuePath) ]]</span>
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-input no-label-float type="text" on-change="_valueChanged" value="[[ getString(item, valuePath) ]]"></paper-input>
		</template>

		<template class="header" strip-whitespace>
			<style>
				paper-spinner-lite {
					width: 20px;
					height: 20px;
				}
				paper-spinner-lite[aria-hidden] {
					display: none !important;
				}
			</style>

			<paper-autocomplete-chips text="{{ query }}"
				class$="external-values-[[ externalValues ]]"
				source="[[ getValueList(values, valueProperty, textProperty) ]]" label="[[ title ]]"
				selected-items="{{ filter }}" text-property="[[ textProperty ]]"
				value-property="[[ valueProperty ]]" focused="{{ headerFocused }}"
				show-results-on-focus>
				<paper-spinner-lite suffix slot="suffix" active="[[ loading ]]" hidden$="[[ !loading ]]"></paper-spinner-lite>
			</paper-autocomplete-chips>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-autocomplete';
	}
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

			query: {
				type: String,
				notify: true
			},

			textProperty: {
				type: String,
				value: 'text'
			},

			valueProperty: {
				type: String,
				value: ''
			},

			headerCellClass: {
				type: String,
				value: 'autocomplete-header-cell'
			},

			minWidth: {
				type: String,
				value: '55px'
			},

			editMinWidth: {
				type: String,
				value: '55px'
			}
		};
	}

	getComparableValue(item, valuePath = this.valuePath) {
		return this.getString(item, valuePath);
	}

	getString(item, valuePath = this.valuePath) {
		if (valuePath === undefined) {
			// eslint-disable-next-line no-console
			console.error(this, 'has undefined valuePath', valuePath, 'for item', item);
			return;
		}
		const itemValue = this.get(valuePath, item),
			textProp = this.textProperty;
		if (Array.isArray(itemValue)) {
			return itemValue.join(', ');
		}
		if (textProp && typeof itemValue === 'object') {
			return this.get(textProp, itemValue);
		}
		return itemValue;
	}

	getValueList(values, valueProperty, textProperty) {
		if (values == null) {
			return;
		}
		if (Array.isArray(values)) {
			return this._unique(values, valueProperty);
		}
		return Object.entries(values).map(([key, value]) => ({
			[valueProperty]: key,
			[textProperty]: value
		}));
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.getString(item, valuePath);
	}

	_applySingleFilter(filterString, item) {
		const value = this.get(this.valuePath, item).toString().toLowerCase();
		return value === filterString;
	}

	_applyMultiFilter(filter, item) {
		// check if the item does not have a value for the filtered property
		let value = this.get(this.valuePath, item);

		if (value == null) {
			return false;
		}
		if (this.valueProperty) {
			value = value[this.valueProperty];
		}
		if (value == null) {
			return false;
		}
		value = value.toString().toLowerCase();

		return filter
			.map(element => {
				let val = element;
				if (this.valueProperty) {
					val = element[this.valueProperty];
				}
				if (val == null) {
					return val;
				}
				return val.toString().toLowerCase();
			})
			.indexOf(value) !== -1;
	}

	_getDefaultFilter() {
		return [];
	}
}
customElements.define(OmnitableColumnAutocomplete.is, OmnitableColumnAutocomplete);
