import '@neovici/cosmoz-input';
import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { defaultComputeSource } from './lib/utils-data';
import './lib/cosmoz-omnitable-amount-range-input';
import {
	getComparableValue,
	getCurrency,
	applySingleFilter,
	getString,
	getInputString,
	toAmount,
	toHashString,
	fromHashString,
} from './lib/utils-amount';
import { get } from '@polymer/polymer/lib/utils/path';

/**
 * @polymer
 * @customElement
 * @appliesMixin columnMixin
 */
class OmnitableColumnAmount extends columnMixin(PolymerElement) {
	static get properties() {
		return {
			min: { type: Number, value: null, notify: true },
			max: { type: Number, value: null, notify: true },
			limits: { type: Function },
			locale: { type: String, value: null, notify: true },
			autoupdate: { type: Boolean, value: false, notify: true },
			currency: { type: String, notify: true },
			autodetect: { type: Boolean, value: false, notify: true },
			rates: { type: Object, notify: true },
			width: { type: String, value: '70px' },
			cellClass: { type: String, value: 'amount-cell align-right' },
			headerCellClass: { type: String, value: 'amount-header-cell' },
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
		return getString(column, item);
	}

	getComparableValue(column, item) {
		return getComparableValue(column, item);
	}

	serializeFilter({ rates }, filter) {
		if (filter == null) {
			return;
		}
		const min = toAmount(rates, filter.min),
			max = toAmount(rates, filter.max);

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
		return html`<span>${column.getString(column, item)}</span>`;
	}

	renderEditCell(column, { item }, onItemChange) {
		const onChange = (event) =>
			onItemChange({
				amount: event.target.value,
				currency: get(item, column.valuePath)?.currency,
			});

		return html`<cosmoz-input
			no-label-float
			type="number"
			@change=${onChange}
			.value=${getInputString(column, item)}
		>
			<div slot="suffix">${getCurrency(column, item)}</div>
		</cosmoz-input>`;
	}

	renderHeader(
		{
			title,
			min,
			max,
			limits,
			locale,
			rates,
			currency,
			autoupdate,
			autodetect,
			noSort,		},
		{ filter },
		setState,
		source,
	) {
		return html`<cosmoz-omnitable-amount-range-input
			.title=${title}
			.filter=${filter}
			.values=${source}
			.rates=${rates}
			.min=${min}
			.max=${max}
			.limits=${limits}
			.locale=${locale}
			.currency=${currency}
			.autoupdate=${autoupdate}
			.autodetect=${autodetect}
			.column=${{ noSort }}
			@filter-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, filter: value }))}
			@header-focused-changed=${({ detail: { value } }) =>
				setState((state) => ({ ...state, headerFocused: value }))}
		></cosmoz-omnitable-amount-range-input>`;
	}

	computeSource(column, data) {
		return defaultComputeSource(column, data);
	}
}

customElements.define('cosmoz-omnitable-column-amount', OmnitableColumnAmount);
