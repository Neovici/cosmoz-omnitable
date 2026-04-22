import './cosmoz-omnitable-column-list-data';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

import '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-input';
import {
	getString,
	getTexts,
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { columnSymbol } from './lib/use-dom-columns';

const getDisplayText = (filter, source, textProperty) => {
	if (!filter || (Array.isArray(filter) && filter.length === 0)) return '';
	const items = Array.isArray(filter) ? filter : [filter];
	return items
		.map((item) => {
			if (typeof item === 'object' && item !== null) {
				return String(item[textProperty] ?? '');
			}
			const found = source?.find((s) => s.value === item);
			return found
				? String(found.text ?? found[textProperty] ?? '')
				: String(item ?? '');
		})
		.filter(Boolean)
		.join(', ');
};

/**
 * @polymer
 * @customElement
 * @appliesMixin listColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnList extends listColumnMixin(columnMixin(PolymerElement)) {
	static get properties() {
		return {
			keepOpened: { type: Boolean, value: true },
			keepQuery: { type: Boolean },
			textual: { type: Function },
		};
	}

	getConfig(column) {
		return {
			...super.getConfig?.(column),
			keepOpened: column.keepOpened,
			keepQuery: column.keepQuery,
			textual: column.textual,
		};
	}

	renderCell({ valuePath, textProperty }, { item }) {
		return html`<cosmoz-omnitable-column-list-data
			.items=${getTexts(item, valuePath, textProperty)}
		></cosmoz-omnitable-column-list-data>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange(event.target.value.split(/,\s*/gu));

		return html`<cosmoz-input
			no-label-float
			type="text"
			.value=${getString(column, item)}
			@change=${onChange}
		></cosmoz-input>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		if (column.disabledFiltering) {
			const displayText = getDisplayText(filter, source, column.textProperty);
			return html`<cosmoz-input
				disabled
				label=${column.title}
				.value=${displayText}
			></cosmoz-input>`;
		}
		return html`<cosmoz-autocomplete-ui
			class="external-values-${column.externalValues}"
			?disabled=${column.disabledFiltering}
			?keep-opened=${column.keepOpened}
			?keep-query=${column.keepQuery}
			.textual=${column.textual}
			.column=${column}
			.label=${column.title}
			.source=${source}
			.textProperty=${column.textProperty}
			.valueProperty=${column.valueProperty}
			.itemRenderer=${column[columnSymbol]?.itemRenderer}
			.value=${filter}
			.text=${query}
			.onChange=${onChange(setState)}
			@opened-changed=${(e) => onFocus(setState)(e.detail.value)}
			.onText=${onText(setState)}
			>${when(
				column.loading,
				() => html`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`,
			)}</cosmoz-autocomplete-ui
		>`;
	}
}

customElements.define('cosmoz-omnitable-column-list', OmnitableColumnList);
