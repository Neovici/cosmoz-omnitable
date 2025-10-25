import '@neovici/cosmoz-input';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import {
	getComparableValue,
	getString,
	toXlsxValue,
	applySingleFilter,
	toDate,
	toHashString,
	fromHashString,
} from './lib/utils-time';
import './lib/cosmoz-omnitable-time-range-input';
import { defaultComputeSource } from './lib/utils-data';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnTime extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			min: { type: Number, value: null, notify: true },
			max: { type: Number, value: null, notify: true },
			locale: { type: String, value: null, notify: true },
			headerCellClass: { type: String, value: 'time-header-cell' },
			minWidth: { type: String, value: '63px' },
			width: { type: String, value: '210px' },
			flex: { type: String, value: '0' },
			/*
			 * Specifies the value granularity of the time input's value in the filter.
			 * 1 => full seconds
			 * 0.1 => milliseconds
			 */
			filterStep: { type: String, value: '1' },
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

		return { min: fromHashString(matches[1]), max: fromHashString(matches[2]) };
	}

	renderCell(column, { item }) {
		return getString(column, item);
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

	renderHeader(
		{ title, min, max, locale, filterStep },
		{ filter },
		setState,
		source,
	) {
		return html`<cosmoz-omnitable-time-range-input
			.title=${title}
			.filter=${filter}
			.values=${source}
			.min=${min}
			.max=${max}
			.locale=${locale}
			.filterStep=${filterStep}
			@filter-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, filter: value }))}
			@header-focused-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, headerFocused: value }))}
		></cosmoz-omnitable-time-range-input>`;
	}

	computeSource(column, data) {
		return defaultComputeSource(column, data);
	}
}
customElements.define('cosmoz-omnitable-column-time', OmnitableColumnTime);
