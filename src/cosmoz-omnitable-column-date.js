import { html } from 'lit-html';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@neovici/cosmoz-input';

import './ui-helpers/cosmoz-clear-button';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import './lib/cosmoz-omnitable-date-range-input';
import { defaultComputeSource } from './lib/utils-data';
import {
	getString,
	getComparableValue,
	toDate,
	toHashString,
	toXlsxValue,
	applySingleFilter,
	getInputString,
	fromInputString,
} from './lib/utils-date';

class OmnitableColumnDate extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			min: { type: Number, value: null, notify: true },
			max: { type: Number, value: null, notify: true },
			limits: { type: Function },
			locale: { type: String, value: null, notify: true },
			headerCellClass: { type: String, value: 'date-header-cell' },
			width: { type: String, value: '100px' },
			minWidth: { type: String, value: '82px' },
			flex: { type: String, value: '0' },
		};
	}

	getConfig(column) {
		return { limits: column.limits };
	}

	getFilterFn(column, filter) {
		const min = getComparableValue({ ...column, valuePath: 'min' }, filter),
			max = getComparableValue({ ...column, valuePath: 'max' }, filter);

		if (min == null && max == null) {
			return;
		}
		return applySingleFilter(column, filter);
	}

	getString(column, item) {
		return getString(column, item);
	}

	toXlsxValue(column, item) {
		return toXlsxValue(column, item);
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	serializeFilter(column, filter) {
		if (filter == null) {
			return;
		}
		const min = toDate(filter.min),
			max = toDate(filter.max);

		if (min == null && max == null) {
			return;
		}
		return toHashString(min) + '~' + toHashString(max);
	}

	deserializeFilter(column, filter) {
		if (filter == null || filter === '') {
			return null;
		}
		const matches = filter.match(/^([^~]+)?~([^~]+)?/iu);

		if (!Array.isArray(matches)) {
			return null;
		}

		return { min: toDate(matches[1]), max: toDate(matches[2]) };
	}

	renderCell(column, { item }) {
		return html`<div class="omnitable-cell-date">
			${getString(column, item)}
		</div>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange(fromInputString(event.target.value));
		return html`<cosmoz-input
			no-label-float
			type="date"
			@change=${onChange}
			.value=${getInputString(column, item)}
		></cosmoz-input>`;
	}

	renderHeader(
		{ title, min, max, limits, locale, noSort },
		{ filter },
		setState,
		source,
	) {
		return html`<cosmoz-omnitable-date-range-input
			.title=${title}
			.filter=${filter}
			.values=${source}
			.min=${min}
			.max=${max}
			.limits=${limits}
			.locale=${locale}
			.column=${{ noSort }}
			@filter-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, filter: value }))}
			@header-focused-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, headerFocused: value }))}
		></cosmoz-omnitable-date-range-input>`;
	}

	computeSource(column, data) {
		return defaultComputeSource(column, data);
	}
}
customElements.define('cosmoz-omnitable-column-date', OmnitableColumnDate);
