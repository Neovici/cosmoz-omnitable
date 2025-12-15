import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-spinner';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import {
	getTexts,
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';

import { renderLabel } from './lib/cosmoz-omnitable-dropdown-input';

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnListHorizontal extends listColumnMixin(
	columnMixin(PolymerElement),
) {
	renderCell({ valuePath, textProperty }, { item }) {
		const list = getTexts(item, valuePath, textProperty).map(
			(item) => html`<li>${item}</li>`,
		);

		return html`
			<style>
				ul {
					padding: 0;
					display: inline;
					list-style: none;
				}
				ul li {
					display: inline;
				}
				ul li:after {
					content: ', ';
				}
				ul li:last-child:after {
					content: '';
				}
			</style>
			<ul>
				${list}
			</ul>
		`;
	}

	renderEditCell() {
		return 'not implemented';
	}

	renderHeader(column, { filter, query }, setState, source, sortAndGroup) {
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			.label=${renderLabel(column.title, column, sortAndGroup)}
			.source=${source}
			.textProperty=${column.textProperty}
			.value=${filter}
			.text=${query}
			.onChange=${onChange(setState)}
			.onFocus=${onFocus(setState)}
			.onText=${onText(setState)}
			>${when(
				column.loading,
				() => html`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`,
			)}</cosmoz-autocomplete-ui
		> `;
	}
}

customElements.define(
	'cosmoz-omnitable-column-list-horizontal',
	OmnitableColumnListHorizontal,
);
