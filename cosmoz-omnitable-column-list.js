import '@webcomponents/shadycss/entrypoints/apply-shim';

import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';
import '@neovici/cosmoz-autocomplete';
import {
	prop, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(
	columnMixin(translatable(PolymerElement))
) {
	static get template() {
		return html`
			<template class="cell" strip-whitespace>
				<cosmoz-omnitable-column-list-data
					items="[[ getTexts(valuePath, item, textProperty) ]]"
				>
				</cosmoz-omnitable-column-list-data>
			</template>

			<template class="edit-cell" strip-whitespace>
				<paper-input
					no-label-float
					type="text"
					on-change="_valueChanged"
					value="[[ getString(item, valuePath) ]]"
				></paper-input>
			</template>

			<template class="header" strip-whitespace>
				<cosmoz-autocomplete-ui
					class$="external-values-[[ externalValues ]]"
					label="[[ title ]]"
					source="[[ _source ]]"
					text-property="[[ textProperty ]]"
					value="[[  _computeValue(filter) ]]"
					focused="{{ headerFocused }}"
					on-change="_headerValueChanged"
				>
					<paper-spinner-lite
						style="width: 20px; height: 20px;"
						suffix
						slot="suffix"
						active="[[ loading ]]"
						hidden="[[ !loading ]]"
					></paper-spinner-lite>
				</cosmoz-autocomplete-ui>
			</template>
		`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-list';
	}

	static get properties() {
		return {
			_source: {
				type: Array,
				computed: '_computeSource(values, valueProperty, textProperty)'
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
		return array(this.get(valuePath, item)).map(prop(textProperty));
	}

	_applyMultiFilter(filters, item) {
		const values = array(this.get(this.valuePath, item)).map(prop(this.valueProperty));
		return filters.some(filter => values.includes(filter));
	}

	_computeSource(values, valueProperty) {
		return this._unique(values, valueProperty) || [];
	}

	_computeValue(
		filter,
		source = this._source,
		valueProperty = this.valueProperty
	) {
		return source.filter(item =>
			filter.includes(prop(valueProperty)(item))
		);
	}

	_headerValueChanged({ detail: { value }}) {
		this.filter = value.map(prop(this.valueProperty));
	}

	/**
	 * Get the comparable value of an item.
	 *
	 * @param {Object} item Item to be processed
	 * @param {String} valuePath Property path
	 * @returns {String|void} Valid value or void
	 */
	getComparableValue(item, valuePath) {
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
}

customElements.define(OmnitableColumnList.is, OmnitableColumnList);
