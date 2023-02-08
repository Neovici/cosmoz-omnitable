/* eslint-disable no-return-assign */
import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

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
			locale: { type: String, value: null, notify: true },
			headerCellClass: { type: String, value: 'date-header-cell' },
			width: { type: String, value: '100px' },
			minWidth: { type: String, value: '82px' },
			flex: { type: String, value: '0' },
		};
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

	cellTitleFn(column, item) {
		return getString(column, item);
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

		return {
			min: toDate(matches[1]),
			max: toDate(matches[2]),
		};
	}

	renderCell(column, { item }) {
		return getString(column, item);
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange(fromInputString(event.target.value));

		return html`<paper-input
			no-label-float
			type="date"
			@change=${onChange}
			.value=${getInputString(column, item)}
		></paper-input>`;
	}

	renderHeader({ title, min, max, locale }, { filter }, setState, source) {
		return html`<cosmoz-omnitable-date-range-input
			class="editable-header"
			.title=${title}
			.filter=${filter}
			.values=${source}
			.min=${min}
			.max=${max}
			.locale=${locale}
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
