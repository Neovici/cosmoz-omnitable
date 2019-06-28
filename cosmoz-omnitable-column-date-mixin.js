import '@webcomponents/shadycss/entrypoints/apply-shim';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import { toLocalISOString } from '@neovici/cosmoz-utils/lib/date';

import { rangeColumnMixin } from './cosmoz-omnitable-column-range-mixin';

/**
* @polymer
* @mixinFunction
* @appliesMixin rangeColumnMixin

* @param {class} base The base class
* @returns {class} The base class with the mixin applied
*/
export const dateColumnMixin = dedupingMixin(base => // eslint-disable-line max-lines-per-function
	/**
	 * @polymer
	 * @mixinClass
	 */
	class extends rangeColumnMixin(base) {
		static get properties() {
			return {
				max: {
					type: Date,
					value: null
				},

				min: {
					type: Date,
					value: null
				},

				_filterText: {
					type: String,
					computed: '_computeFilterText(filter.*, formatter)'
				},

				width: {
					type: String,
					value: '100px'
				},

				editWidth: {
					type: String,
					value: '150px'
				},

				/**
				 * No need to grow, as the values in a date column should have known fixed width
				 * @returns {String} Default flex
				 */
				flex: {
					type: String,
					value: '0'
				},
				formatter: {
					type: Object,
					computed: '_computeFormatter(locale)'
				}
			};
		}

		/**
		 * Converts an value to date optionaly limiting it.
		 *
		 * @param	 {Date|String} value	 Value to convert to date
		 * @param	 {Date|String} limit	 Value used to limit the date
		 * @param	 {Function} limitFunc	 Function used to limit the date (Math.min|Math.max)
		 * @returns {Date|void} Value converted to date optionaly limitated
		 */
		toDate(value, limit, limitFunc) { // eslint-disable-line max-statements
			if (value == null || value === '') {
				return;
			}

			// convert value to Date
			let date = value;
			if (!(date instanceof Date)) {
				// if the value is an ISO string, make sure that it has an explicit timezone
				if (typeof value === 'string') {
					date = this.getAbsoluteISOString(date);
				}

				date = new Date(date);
			}

			if (Number.isNaN(date.getTime())) {
				return null;
			}

			if (limitFunc == null || limit == null) {
				return date;
			}

			const lDate = this.toDate(limit);
			if (lDate == null) {
				return date;
			}

			const comparableDate = this.getComparableValue(date),
				comparableLDate = this.getComparableValue(lDate),
				limitedValue = limitFunc(comparableDate, comparableLDate);
			return limitedValue === comparableDate ? date : lDate;
		}

		toValue() {
			return this.toDate.apply(this, arguments);
		}

		/**
		 * Get comparable number from date
		 *
		 * @param	 {Object} item			 Item to be processed
		 * @param	 {String} valuePath	 Property path
		 * @returns {Number|void} Valid value or void
		 */
		getComparableValue(item, valuePath) {
			const value = super.getComparableValue(item, valuePath);
			if (value == null) {
				return;
			}
			return this.toNumber(value.getTime());
		}

		/**
		 * Get date of item as string
		 *
		 * @param	 {Object} item											 Item to be processed
		 * @param	 {String} valuePath = this.valuePath Property path
		 * @param	 {Object} formatter = this.formatter Property formatter
		 * @returns {String}													 Date rendered as string or 'Invalid Date'
		 */
		getString(item, valuePath = this.valuePath, formatter = this.formatter) {
			const value = this.toValue(this.get(valuePath, item));
			if (value === undefined) {
				return '';
			}
			if (value === null) {
				return 'Invalid Date';
			}
			return this.renderValue(value, formatter);
		}

		/**
		* Computes the local timezone and adds it to a local ISO string
		* @param	{String} localISOString an ISO date string, without timezone info
		* @return {String}								an ISO date string, with timezone info
		*/
		getAbsoluteISOString(localISOString) {
			// Most browsers use local timezone when no timezone is specified
			// but Safari uses UTC, so we set it implicitly
			// TODO: Consider removing this when/if Safari handles local timezone correctly
			if (localISOString.length === 19) {
				return localISOString + this._getTimezoneString(localISOString);
			}
			return localISOString;
		}

		/**
		 * Calculates the local timezone offset and formats it to ISO Timezone string.
		 * @param	 {String} localISOString an ISO date string
		 * @return {String}								 the ISO timezone
		 */
		_getTimezoneString(localISOString) {
			const off = -new Date(localISOString).getTimezoneOffset() / 60;
			return (off < 0 ? '-' : '+') + ['0', Math.abs(off)].join('').substr(-2) + ':00';
		}

		renderValue(value, formatter = this.formatter) {
			if (formatter == null) {
				return;
			}
			const date = this.toValue(value);
			if (date == null) {
				return;
			}
			return formatter.format(date);
		}

		_computeFormatter(locale) {
			return new Intl.DateTimeFormat(locale || undefined);
		}

		_toInputString(value) {
			const date = this.toValue(value);
			if (date == null) {
				return null;
			}
			return this._toLocalISOString(date).slice(0, 10);
		}

		_dateValueChanged(event) {
			const input = event.currentTarget,
				value = input.value,
				item = event.model.item,
				oldValue = this.get(this.valuePath, item),
				date = this._fromInputString(value);
			if (date == null) {
				return;
			}
			this.set(this.valuePath, date, item);
			this._fireItemChangeEvent(item, this.valuePath, oldValue, this.renderValue.bind(this));
		}

		_toLocalISOString(date) {
			return toLocalISOString(date);
		}
	}
);
