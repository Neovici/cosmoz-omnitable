import '@neovici/cosmoz-input';
import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin';

import './lib/cosmoz-omnitable-number-range-input';
import { defaultComputeSource } from './lib/utils-data';
import {
	applySingleFilter,
	getComparableValue,
	getInputString,
	getString,
	toHashString,
	toNumber,
} from './lib/utils-number';
import { get } from '@polymer/polymer/lib/utils/path';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnNumber extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			min: { type: Number, value: null, notify: true },
			max: { type: Number, value: null, notify: true },
			limits: { type: Function },
			locale: { type: String, value: null, notify: true },
			autoupdate: { type: Boolean, value: false, notify: true },
			cellClass: { type: String, value: 'number-cell align-right' },
			width: { type: String, value: '30px' },
			minWidth: { type: String, value: '30px' },
			headerCellClass: { type: String, value: 'number-header-cell' },
			maximumFractionDigits: { type: Number, value: null },
			minimumFractionDigits: { type: Number, value: null }, // browser default 0 for numbers, currency-specific or 2 for currency
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

	toXlsxValue({ valuePath }, item) {
		return get(item, valuePath);
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	serializeFilter(column, filter) {
		if (filter == null) {
			return;
		}
		const min = toNumber(filter.min),
			max = toNumber(filter.max);

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
			min: toNumber(matches[1]),
			max: toNumber(matches[2]),
		};
	}

	renderCell(column, { item }) {
		return html`<div class="omnitable-cell-number">
			${getString(column, item)}
		</div>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) => onItemChange(event.target.value);

		return html`<cosmoz-input
			no-label-float
			type="number"
			@change=${onChange}
			.value=${getInputString(column, item)}
		></cosmoz-input>`;
	}

	renderHeader(
		{
			title,
			min,
			max,
			limits,
			locale,
			maximumFractionDigits,
			minimumFractionDigits,
			autoupdate,
		},
		{ filter },
		setState,
		source,
		{ sortHandle } = {},
	) {
		return html`<cosmoz-omnitable-number-range-input
			.title=${title}
			.filter=${filter}
			.values=${source}
			.min=${min}
			.max=${max}
			.limits=${limits}
			.locale=${locale}
			.maximumFractionDigits=${maximumFractionDigits}
			.minimumFractionDigsits=${minimumFractionDigits}
			.autoupdate=${autoupdate}
			.sortHandle=${sortHandle}
			@filter-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, filter: value }))}
			@header-focused-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, headerFocused: value }))}
		></cosmoz-omnitable-number-range-input>`;
	}

	computeSource(column, data) {
		return defaultComputeSource(column, data);
	}
}
customElements.define('cosmoz-omnitable-column-number', OmnitableColumnNumber);
