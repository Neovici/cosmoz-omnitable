import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@neovici/paper-autocomplete-chips';

import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends	listColumnMixin(columnMixin(translatable(
	PolymerElement
))) {
	static get template() {
		return html`
		<template class="cell">
			<cosmoz-omnitable-column-list-data items="[[ getTexts(valuePath, item, textProperty) ]]">
			</cosmoz-omnitable-column-list-data>
		</template>

		<template class="edit-cell">
			<paper-input no-label-float type="text" on-change="_valueChanged" value="[[ getString(item, valuePath) ]]"></paper-input>
		</template>

		<template class="header">
			<paper-autocomplete-chips source="[[ autocompleteItems ]]" label="[[ title ]]"
				selected-items="{{ filter }}" text-property="[[ textProperty ]]" value-property="[[ valueProperty ]]" show-results-on-focus>
			</paper-autocomplete-chips>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-list';
	}

	static get properties() {
		return {
			autocompleteItems: {
				type: Array,
				notify: true,
				computed: '_computeAutocompleteItems(valueProperty, values.length)'
			},

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
				type: String,
				value: ''
			},

			valueProperty: {
				type: String,
				value: ''
			}
		};
	}

	getTexts(valuePath, item, textProperty) {
		let values = this.get(valuePath, item);
		if (textProperty) {
			values = values.map(value => this.get(textProperty, value));
		}
		return values;
	}

	_computeAutocompleteItems(valueProperty) {
		if (!Array.isArray(this.values)) {
			return;
		}
		const used = [];
		return this.values
			// flatten two-dimensional arrays to one
			.reduce((acc, val) => acc.concat(val), [])
			// Make the item list unique
			.filter((item, index, array) => {
				if (array.indexOf(item) !== index) {
					return false;
				}
				if (valueProperty) {
					const value = this.get(valueProperty, item);
					if (used.includes(value)) {
						return false;
					}
					used.push(value);
				}
				return true;
			})
			.sort();
	}

	_applyMultiFilter(filters, item) {
		let itemValues = this.get(this.valuePath, item);
		if (!Array.isArray(itemValues)) {
			itemValues = [itemValues];
		}
		if (!this.valueProperty) {
			return filters.some(filter => itemValues.includes(filter));
		}
		return filters
			.map(filter => filter[this.valueProperty])
			.some(filterValue =>
				itemValues
					.map(itemValue => itemValue[this.valueProperty])
					.some(itemValue => itemValue === filterValue)
			);
	}

	_getDefaultFilter() {
		return [];
	}
}
customElements.define(OmnitableColumnList.is, OmnitableColumnList);
