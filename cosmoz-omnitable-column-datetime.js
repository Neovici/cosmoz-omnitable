/* eslint-disable no-return-assign */
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@neovici/cosmoz-datetime-input';
import './ui-helpers/cosmoz-clear-button';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import {
	fromHashString,
	getString,
	toHashString,
	toXlsxValue,
} from './lib/utils-datetime';
import {
	applySingleFilter,
	fromInputString,
	getComparableValue,
	toDate,
} from './lib/utils-date';
import { defaultComputeSource } from './lib/utils-data';
import './lib/cosmoz-omnitable-datetime-range-input';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnDatetime extends columnMixin(PolymerElement) {
	static get is() {
		return 'cosmoz-omnitable-column-datetime';
	}

	static get properties() {
		return {
			min: { type: Number, value: null, notify: true },
			max: { type: Number, value: null, notify: true },
			locale: { type: String, value: null, notify: true },
			headerCellClass: { type: String, value: 'datetime-header-cell' },
			width: { type: String, value: '210px' },
			minWidth: { type: String, value: '128px' },
			flex: { type: String, value: '0' },
			filterStep: { type: Number, value: 1 },
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
			min: fromHashString(matches[1]),
			max: fromHashString(matches[2]),
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
			type="text"
			@change=${onChange}
			.value=${getString(column, item)}
		></paper-input>`;
	}

	// eslint-disable-next-line max-lines-per-function
	renderHeader(
		{ title, min, max, locale, filterStep },
		{ filter },
		setState,
		source
	) {
		return html`<cosmoz-omnitable-datetime-range-input
			class="editable-header"
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
		></cosmoz-omnitable-datetime-range-input>`;
	}

	computeSource(column, data) {
		return defaultComputeSource(column, data);
	}
}

customElements.define(OmnitableColumnDatetime.is, OmnitableColumnDatetime);
