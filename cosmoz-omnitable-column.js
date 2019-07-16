import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-input/paper-input';
import './ui-helpers/cosmoz-clear-button';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumn extends columnMixin(PolymerElement) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			<span class="default-column">[[ getString(item, valuePath) ]]</span>
		</template>

		<template class="edit-cell" strip-whitespace>
			<paper-input no-label-float type="text" on-change="_valueChanged" value="[[ getString(item, valuePath) ]]">
			</paper-input>
		</template>

		<template class="header" strip-whitespace>
			<paper-input label="[[ title ]]" value="{{ filter }}" focused="{{ headerFocused }}">
				<cosmoz-clear-button suffix slot="suffix" visible="[[ hasFilter(filter.*) ]]" light on-click="resetFilter"></cosmoz-clear-button>
			</paper-input>
		</template>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column';
	}

	static get properties() {
		return {
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

	_serializeFilter(filter = this.filter) {
		return filter || null;
	}

	_deserializeFilter(obj) {
		return obj || null;
	}

	resetFilter() {
		this.filter = null;
	}
}
customElements.define(OmnitableColumn.is, OmnitableColumn);
