import '@neovici/cosmoz-autocomplete';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html, nothing } from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import {
	getTexts,
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';

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

	renderHeader(column, { filter, query }, setState, source) {
		const spinner = column.loading
			? html`<paper-spinner-lite
					style="width: 20px; height: 20px;"
					suffix
					slot="suffix"
					active
				></paper-spinner-lite>`
			: nothing;
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			.label=${column.title}
			.source=${source}
			.textProperty=${column.textProperty}
			.value=${filter}
			.text=${query}
			.onChange=${onChange(setState)}
			.onFocus=${onFocus(setState)}
			.onText=${onText(setState)}
			>${spinner}</cosmoz-autocomplete-ui
		> `;
	}
}

customElements.define(
	'cosmoz-omnitable-column-list-horizontal',
	OmnitableColumnListHorizontal,
);
