import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-input/paper-input';

import './ui-helpers/cosmoz-clear-button';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';
import { columnMixin } from './cosmoz-omnitable-column-mixin';
import { dateColumnMixin } from './cosmoz-omnitable-column-date-mixin';

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
	static get template() {
		return html`
		<template class="cell">
			[[ getString(item, valuePath, formatter) ]]
		</template>

		<template class="edit-cell">
			<paper-input no-label-float type="time" on-change="_timeValueChanged" value="[[ getInputString(item, valuePath) ]]">
			</paper-input>
		</template>

		<template class="header">
			<cosmoz-clear-button on-click="resetFilter" visible="[[ hasFilter(filter.*) ]]"></cosmoz-clear-button>
			<paper-dropdown-menu label="[[ title ]]" placeholder="[[ _filterText ]]"
				title="[[ _tooltip ]]" horizontal-align="[[ preferredDropdownHorizontalAlign ]]" opened="{{ headerFocused }}">
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">[[ title ]]</h3>
					<paper-input type="time" label="[[ _('From time', t) ]]" step="[[ filterStep ]]" value="{{ _filterInput.min }}">
					</paper-input>
					<paper-input type="time" label="[[ _('Until time', t) ]]" step="[[ filterStep ]]" value="{{ _filterInput.max }}">
					</paper-input>
				</div>
			</paper-dropdown-menu>
		</template>
`;
	}

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
