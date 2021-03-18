/* eslint-disable no-return-assign */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/paper-input/paper-input';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import {
	translatable, _
} from '@neovici/cosmoz-i18next';
import { dateColumnMixin } from './cosmoz-omnitable-column-date-mixin';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { ifDefined } from 'lit-html/directives/if-defined';

class OmnitableColumnDate extends dateColumnMixin(columnMixin(translatable(
	PolymerElement
))) {
	static get is() {
		return 'cosmoz-omnitable-column-date';
	}

	static get properties() {
		return {
			headerCellClass: {
				type: String,
				value: 'date-header-cell'
			},
			minWidth: {
				type: String,
				value: '82px'
			},
			editMinWidth: {
				type: String,
				value: '82px'
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

		return html`<paper-input
			no-label-float
			type="date"
			@change=${ onChange }
			.value=${ column.getInputString(item, column.valuePath) }
		></paper-input>`;
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
					<paper-input
						type="date"
						label=${ _('From date') }
						min=${ column._toInputString(column._limit.fromMin) }
						max=${ column._toInputString(column._limit.fromMax) }
						.value=${ column._filterInput.min }
						@value-changed=${ event => column.set('_filterInput.min', event.detail.value) }
					></paper-input>
					<paper-input
						type="date"
						label=${ _('Until date') }
						min=${ column._toInputString(column._limit.toMin) }
						max=${ column._toInputString(column._limit.toMax) }
						.value=${ column._filterInput.max }
						@value-changed=${ event => column.set('_filterInput.max', event.detail.value) }
					></paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	_fromInputString(value, property) {
		const date = this.toDate(value);
		if (date == null) {
			return;
		}
		if (property === 'min') {
			date.setHours(0, 0, 0, 0);
		}
		if (property === 'max') {
			date.setHours(23, 59, 59);
		}
		return date;
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		const date = this.toValue(this.get(valuePath, item));
		if (!date) {
			return '';
		}
		const localDate = this.toValue(this._toLocalISOString(date));
		localDate.setHours(0, 0, 0, 0);
		return localDate;
	}

	_filterInputChanged(change, autoupdate) {
		const path = change.path.split('.')[1],
			value = path && change.value;

		// don't trigger change when date input begins with 0; Year (starting from 0000) was limited before the needed value was typed.
		if (value && value.match(/^0+/u)) {
			this._limitInputDebouncer.cancel();
			return;
		}
		super._filterInputChanged(change, autoupdate);
	}
}
customElements.define(OmnitableColumnDate.is, OmnitableColumnDate);
