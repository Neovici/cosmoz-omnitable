import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@neovici/cosmoz-autocomplete';

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
class OmnitableColumnListHorizontal extends listColumnMixin(
	columnMixin(
		translatable(
			PolymerElement
		)
	)
) {
	static get template() {
		return html`
		<template class="cell" strip-whitespace>
			<style>
				ul {
					display: inline;
					list-style: none;
				}
				ul li {
					display: inline;
				}
				ul li:after {
					content: ", ";
				}
				ul li:last-child:after {
					content: "";
				}
			</style>
			<ul>
				<template is="dom-repeat" items="[[ getTexts(valuePath, item, textProperty) ]]" as="listitem">
					<li>[[ listitem ]]</li>
				</template>
			</ul>
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
				value="[[  _computeValue(filter) ]]"
				text="[[ query ]]"
				on-change="[[ _onChange ]]"
				on-focus="[[ _onFocus ]]"
				on-text="[[ _onText ]]"
				suggestions-width="[[ suggestionsWidth ]]"
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
		return 'cosmoz-omnitable-column-list-horizontal';
	}

}

customElements.define(
	OmnitableColumnListHorizontal.is,
	OmnitableColumnListHorizontal
);
