import '@neovici/cosmoz-autocomplete';

import '@neovici/cosmoz-spinner';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

import { array } from '@neovici/cosmoz-utils/array';
import { prop, strProp } from '@neovici/cosmoz-utils/object';
import {
	listColumnMixin,
	onChange,
	onFocus,
	onText,
} from './cosmoz-omnitable-column-list-mixin';
import { columnMixin, getString } from './cosmoz-omnitable-column-mixin.js';

import { lift } from '@pionjs/pion';
import { get } from '@polymer/polymer/lib/utils/path';
import { columnSymbol } from './lib/use-dom-columns';

export const getComparableValue = (
		{ valuePath, textProperty, valueProperty },
		item,
	) => {
		const property = textProperty ? strProp(textProperty) : prop(valueProperty),
			values = array(valuePath && get(item, valuePath)).map(property);
		return values.length > 1 ? values.filter(Boolean).join(',') : values[0];
	},
	applyExcludingMultiFilter = (
		{ valueProperty, valuePath, emptyValue, emptyProperty },
		filters,
	) => {
		const val = prop(valueProperty),
			emptyVal = prop(emptyProperty || valueProperty),
			excluded = new Set(
				filters.filter((f) => f.excluded).map((f) => val(f.item)),
			),
			included = new Set(
				filters.filter((f) => !f.excluded).map((f) => val(f.item)),
			),
			emptyExcluded = filters.some(
				(f) => f.excluded && emptyVal(f.item) === emptyValue,
			),
			emptyIncluded = filters.some(
				(f) => !f.excluded && emptyVal(f.item) === emptyValue,
			);

		return (item) => {
			const values = array(get(item, valuePath)).map(val);
			if (values.length === 0) {
				return !emptyExcluded && (emptyIncluded || included.size === 0);
			}
			return (
				!values.some((v) => excluded.has(v)) &&
				(included.size === 0 || values.some((v) => included.has(v)))
			);
		};
	};

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAutocomplete extends listColumnMixin(
	columnMixin(PolymerElement),
) {
	static get properties() {
		return {
			headerCellClass: { type: String, value: 'autocomplete-header-cell' },
			minWidth: { type: String, value: '55px' },
			editMinWidth: { type: String, value: '55px' },
			keepOpened: { type: Boolean, value: true },
			keepQuery: { type: Boolean },
			showSingle: { type: Boolean },
			preserveOrder: { type: Boolean },
			limit: { type: Number },
			textual: { type: Function },
		};
	}

	getConfig(column) {
		return {
			...super.getConfig?.(column),
			keepOpened: column.keepOpened,
			keepQuery: column.keepQuery,
			showSingle: column.showSingle,
			preserveOrder: column.preserveOrder,
			limit: column.limit,
			textual: column.textual,
		};
	}

	renderCell(column, { item }) {
		return html`<span class="default-column"
			>${column.getString(column, item)}</span
		>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) => onItemChange(event.target.value);
		return html`<cosmoz-input
			no-label-float
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></cosmoz-input>`;
	}

	renderHeader(column, { filter, query }, setState, source) {
		return html`<cosmoz-autocomplete-excluding
			class="external-values-${column.externalValues}"
			?disabled=${column.disabledFiltering}
			?keep-opened=${column.keepOpened}
			?keep-query=${column.keepQuery}
			?show-single=${column.showSingle}
			?preserve-order=${column.preserveOrder}
			.textual=${column.textual}
			.label=${column.title}
			.source=${source}
			.textProperty=${column.textProperty}
			.valueProperty=${column.valueProperty}
			.itemRenderer=${column[columnSymbol]?.itemRenderer}
			.value=${filter}
			.text=${query}
			.limit=${column.limit}
			@opened-changed=${(e) => onFocus(setState)(e.detail.value)}
			@value-changed=${lift(onChange(setState))}
			@text-changed=${lift(onText(setState))}
			>${when(
				column.loading,
				() => html`<cosmoz-spinner slot="suffix"></cosmoz-spinner>`,
			)}</cosmoz-autocomplete-excluding
		>`;
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	getFilterFn(column, filters) {
		if (!filters || !Array.isArray(filters) || filters.length === 0) {
			return;
		}

		return applyExcludingMultiFilter(column, filters);
	}
}
customElements.define(
	'cosmoz-omnitable-column-autocomplete-excluding',
	OmnitableColumnAutocomplete,
);
