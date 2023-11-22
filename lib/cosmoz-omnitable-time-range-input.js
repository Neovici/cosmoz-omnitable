import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import '@neovici/cosmoz-input';
import { dateInputMixin } from './cosmoz-omnitable-date-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class TimeRangeInput extends dateInputMixin(polymerHauntedRender(PolymerElement)) {
	// eslint-disable-next-line max-lines-per-function
	render() {
		return html`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>

			<cosmoz-clear-button @click=${ () => this.resetFilter() } ?visible=${ this.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ this.title }
				placeholder=${ ifDefined(this._filterText) }
				class="external-values-${ this.externalValues }"
				title=${ this._tooltip }
				horizontal-align="right"
				?opened=${ this.headerFocused }
				@opened-changed=${ event => this.set('headerFocused', event.detail.value) }>
			>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ this.title }</h3>
					<cosmoz-input
						type="time"
						label=${ _('From time') }
						step=${ this.filterStep }
						.value=${ this._filterInput.min }
						@value-changed=${ event => this.set('_filterInput.min', event.detail.value) }
					></cosmoz-input>
					<cosmoz-input
						type="time"
						label=${ _('Until time') }
						step=${ this.filterStep }
						.value=${ this._filterInput.max }
						@value-changed=${ event => this.set('_filterInput.max', event.detail.value) }
					></cosmoz-input>
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


customElements.define('cosmoz-omnitable-time-range-input', TimeRangeInput);
