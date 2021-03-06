/* eslint-disable no-return-assign */
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-input/paper-input';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from 'lit-html';

import {
	translatable, _
} from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { dateColumnMixin } from './cosmoz-omnitable-column-date-mixin';
import { ifDefined } from 'lit-html/directives/if-defined';

/**
 * @polymer
 * @customElement
 * @appliesMixin dateColumnMixin
 * @appliesMixin columnMixin
 */
class OmnitableColumnTime extends
	dateColumnMixin(
		columnMixin(
			translatable(PolymerElement)
		)
	) {
	static get is() {
		return 'cosmoz-omnitable-column-time';
	}

	static get properties() {
		return {
			/*
			 * Specifies the value granularity of the time input's value in the filter.
			 * 1 => full seconds
			 * 0.1 => milliseconds
			 */
			filterStep: {
				type: String,
				value: '1'
			},

			headerCellClass: {
				type: String,
				value: 'time-header-cell'
			},

			minWidth: {
				type: String,
				value: '63px'
			},

			editMinWidth: {
				type: String,
				value: '63px'
			}
		};
	}

	renderCell(column, { item }) {
		return column.getString(item, column.valuePath, column.formatter);
	}

	renderEditCell(column, { item }) {
		const onChange = event => {
			event.model = { item };
			return column._timeValueChanged(event);
		};

		return html`<paper-input
			no-label-float
			type="time"
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
			>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ column.title }</h3>
					<paper-input
						type="time"
						label=${ _('From time') }
						step=${ column.filterStep }
						.value=${ column._filterInput.min }
						@value-changed=${ event => column.set('_filterInput.min', event.detail.value) }
					></paper-input>
					<paper-input
						type="time"
						label=${ _('Until time') }
						step=${ column.filterStep }
						.value=${ column._filterInput.max }
						@value-changed=${ event => column.set('_filterInput.max', event.detail.value) }
					></paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	get _fixedDate() {
		return '1970-01-01';
	}

	/**
	 * Converts time to date optionaly limiting it.
	 *
	 * @param	 {Date|Number} value	 Date or Timestamp ( miliseconds since property _fixedDate ) to be converted
	 * @param	 {Date|Number} limit	 Optional value to limit the date.
	 * @param	 {Function} limitFunc	 Function used to limit the date (Math.min|Math.max)
	 * @returns {Date|void}					 Value converted to date optionaly limitated
	 */
	toDate(value, limit, limitFunc) {
	// Most browsers use local timezone when no timezone is specified
	// but Safari uses UTC, so we set it implicitly
	// TODO: Consider removing this when/if Safari handles local timezone correctly
		const date = typeof value === 'string' && value.length > 3 && value.length <= 9
			? this.getAbsoluteISOString(this._fixedDate + 'T' + value)
			: value;
		return super.toDate(date, limit, limitFunc);
	}

	_toInputString(value) {
		const date = this.toValue(value);
		if (date == null) {
			return null;
		}
		return this._toLocalISOString(date).slice(11, 19);
	}

	_toHashString(value) {
		const date = this.toValue(value);
		if (date == null) {
			return '';
		}
		//Use utc in hash
		return date.toISOString().slice(11, 19).replace(/:/gu, '.');
	}

	_fromHashString(value) {
		if (value == null || value === '') {
			return;
		}
		//Parse utc from hash string
		return this.toValue(value.replace(/\./gu, ':') + 'Z');
	}

	/**
	 *	 Get the comparable value of an item.
	 *
	 * @param	 {Object} item			 Item to be processed
	 * @param	 {String} valuePath	 Property path
	 * @returns {Number|void}			 Valid value or void
	 */
	getComparableValue(item, valuePath) {
		if (item == null) {
			return;
		}
		let value = this._toInputString(valuePath == null ? item : this.get(valuePath, item));
		if (value == null) {
			return;
		}
		value = this.toValue(this.getAbsoluteISOString(this._fixedDate + 'T' + value));
		if (value == null) {
			return;
		}
		return this.toNumber(value.getTime());
	}

	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.getString(item, valuePath);
	}

	_timeValueChanged(e) {
		const input = e.target,
			timeString = input.value,
			item = e.model.item,
			oldTime = this.toDate(item.date),
			newTime = this.toDate(oldTime != null
				? oldTime.toISOString().slice(0, 10) + 'T' + timeString
				: timeString),
			formatFn = value => value;
		if (newTime != null) {
			return;
		}
		this.set(this.valuePath, newTime, item);
		this._fireItemChangeEvent(item, this.valuePath, oldTime, formatFn.bind(this));
	}

	// OVERRIDES

	_computeFormatter(locale) {
		const timeFormatOption = {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};
		return new Intl.DateTimeFormat(locale || undefined, timeFormatOption);
	}
}
customElements.define(OmnitableColumnTime.is, OmnitableColumnTime);
