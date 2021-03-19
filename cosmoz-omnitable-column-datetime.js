/* eslint-disable no-return-assign */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@neovici/cosmoz-datetime-input';
import './ui-helpers/cosmoz-clear-button';

import { dateColumnMixin } from './cosmoz-omnitable-column-date-mixin';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import {
	translatable, _
} from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
window.Cosmoz = window.Cosmoz || {};

/**
 * @polymer
 * @customElement
 * @appliesMixin dateColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnDatetime extends
	dateColumnMixin(
		columnMixin(
			translatable(PolymerElement)
		)
	) {
	static get is() {
		return 'cosmoz-omnitable-column-datetime';
	}

	static get properties() {
		return {
			filterStep: {
				type: Number,
				value: 1
			},

			width: {
				type: String,
				value: '210px'
			},

			editWidth: {
				type: String,
				value: '320px'
			},

			minWidth: {
				type: String,
				value: '128px'
			},

			editMinWidth: {
				type: String,
				value: '128px'
			},

			headerCellClass: {
				type: String,
				value: 'datetime-header-cell'
			}
		};
	}

	renderCell(column, { item }) {
		return column.getString(item, column.valuePath, column.formatter);
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._dateValueChanged(event);
		};

		return html`<cosmoz-datetime-input
			no-label-float
			@value-changed=${ onChange }
			.value=${ column.getInputString(item, column.valuePath) }
		></cosmoz-datetime-input>`;
	}

	renderHeader(column) {
		return html`
			<cosmoz-clear-button @click=${ event => column.resetFilter(event) } ?visible=${ column.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ column.title }
				placeholder=${ ifDefined(column._filterText) }
				class="external-values-${ column.externalValues }"
				title=${ column._tooltip }
				horizontal-align=${ column.preferredDropdownHorizontalAlign }
				?opened=${ column.headerFocused }
				@opened-changed=${ event => column.headerFocused = event.detail.value }>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ column.title }</h3>
					<cosmoz-datetime-input
						date-label=${ _('From date') }
						time-label=${ _('From time') }
						min=${ column._toInputString(column._limit.fromMin) }
						max=${ column._toInputString(column._limit.fromMax) }
						step=${ column.filterStep }
						.value=${ column._filterInput.min }
						@value-changed=${ event => column.set('_filterInput.min', event.detail.value) }
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${ _('To date') }
						time-label=${ _('To time') }
						min=${ column._toInputString(column._limit.toMin) }
						max=${ column._toInputString(column._limit.toMax) }
						step=${ column.filterStep }
						.value=${ column._filterInput.max }
						@value-changed=${ event => column.set('_filterInput.max', event.detail.value) }
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	_toInputString(value) {
		const date = this.toValue(value);
		if (date == null) {
			return;
		}
		return this._toLocalISOString(date).slice(0, 19);
	}

	_toHashString(value) {
		const date = this.toValue(value);
		if (date == null) {
			return '';
		}
		//Use utc in hash
		return date.toISOString().slice(0, 19).replace(/:/gu, '.');
	}

	_fromHashString(value) {
		if (value == null || value === '') {
			return;
		}
		//Parse utc from hash string
		return this.toValue(value.replace(/\./gu, ':') + 'Z');
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.get(valuePath, item);
	}

	// OVERRIDES
	_computeFormatter(locale) {
		const timeFormatOption = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
		return new Intl.DateTimeFormat(locale || undefined, timeFormatOption);
	}
}

customElements.define(OmnitableColumnDatetime.is, OmnitableColumnDatetime);
