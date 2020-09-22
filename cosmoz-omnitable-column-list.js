import '@webcomponents/shadycss/entrypoints/apply-shim';

import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { listColumnMixin } from './cosmoz-omnitable-column-list-mixin';
import '@neovici/cosmoz-autocomplete';

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
					items="[[ getTexts(item,valuePath, textProperty) ]]"
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
		return 'cosmoz-omnitable-column-list';
	}

}

customElements.define(OmnitableColumnList.is, OmnitableColumnList);
