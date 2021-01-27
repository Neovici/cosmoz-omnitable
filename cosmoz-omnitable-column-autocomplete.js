import '@webcomponents/shadycss/entrypoints/apply-shim.js';

import '@polymer/paper-spinner/paper-spinner-lite.js';
import '@neovici/cosmoz-autocomplete';

import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

import { columnMixin } from './cosmoz-omnitable-column-mixin.js';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';
import {
	prop, strProp, array
} from '@neovici/cosmoz-autocomplete/lib/utils';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends listColumnMixin(columnMixin(PolymerElement)) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			<span class="default-column">[[ getString(item, valuePath) ]]</span>
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-input no-label-float type="text" on-change="_valueChanged" value="[[ getString(item, valuePath) ]]"></paper-input>
		</template>

		<template class="header" strip-whitespace>
			<cosmoz-autocomplete-ui
				class$="external-values-[[ externalValues ]]"
				label="[[ title ]]"
				source="[[ _source ]]"
				text-property="[[ textProperty ]]"
				value="[[  _computeValue(filter, _source) ]]"
				text="[[ query ]]"
				on-change="[[ _onChange ]]"
				on-focus="[[ _onFocus ]]"
				on-text="[[ _onText ]]"
			>
				<template is="dom-if" if="[[ loading ]]">
					<paper-spinner-lite
						style="width: 20px; height: 20px;"
						suffix
						slot="suffix"
						active="[[ loading ]]"
					></paper-spinner-lite>
				</template>
			</cosmoz-autocomplete-ui>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-autocomplete';
	}
	static get properties() {
		return {
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
		const property = this.textProperty ? strProp(this.textProperty) : prop(this.valueProperty),
			values = array(valuePath && this.get(valuePath, item)).map(property);
		return values.length > 1 ? values.filter(Boolean).join(',') : values[0];
	}
}
customElements.define(OmnitableColumnAutocomplete.is, OmnitableColumnAutocomplete);
