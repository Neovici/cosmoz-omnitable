import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';
import { enqueueDebouncer } from '@polymer/polymer/lib/utils/flush.js';
import { invoke } from '@neovici/cosmoz-utils/function';

const getCloseableParent = (el) =>
	typeof el.close === 'function' ? el : getCloseableParent(el.parentElement);

/**
 * @polymer
 * @mixinFunction
 * @param {class} base The base class
 * @returns {class} The base class with the mixin applied
 */
export const rangeInputMixin = (base) =>
	/**
	 * @polymer
	 * @mixinClass
	 */
	class extends base {
		static get properties() {
			return {
				filter: { type: Object, notify: true },

				values: {
					type: Array,
					value() {
						return [];
					},
				},

				headerFocused: { type: Boolean, notify: true },

				min: { type: Number, value: null },

				max: { type: Number, value: null },

				limits: { type: Function },

				/**
				 * If true, _limitInput and _updateFilter will be called after each value change
				 */
				autoupdate: { type: String, value: true },

				locale: { type: String, value: null },

				_filterInput: {
					type: Object,
					value() {
						return { min: null, max: null };
					},
				},

				_range: { type: Object, computed: '_computeRange(values.*)' },

				_limit: {
					type: Object,
					computed: '_computeLimit(_range, _filterInput.*, min, max)',
					value() {
						return {};
					},
				},

				_tooltip: {
					type: String,
					computed: '_computeTooltip(title, _filterText)',
				},

				_fromClasses: {
					type: String,
					computed: '_computeInputClasses(_filterInput.min)',
				},

				_toClasses: {
					type: String,
					computed: '_computeInputClasses(_filterInput.max)',
				},
			};
		}

		static get observers() {
			return [
				'_filterInputChanged(_filterInput.*, autoupdate)',
				'_filterChanged(filter.*)',
				'_updateLimits(limits, headerFocused)',
			];
		}

		disconnectedCallback() {
			if (this._limitInputDebouncer) {
				this._limitInputDebouncer.cancel();
			}
			super.disconnectedCallback();
		}

		_computeInputClasses(value) {
			return value != null && value !== '' ? 'has-value' : '';
		}

		/**
		 * Converts a value to number optionaly limiting it.
		 *
		 * @param	 {Number|*} value	 The value to convert to number
		 * @param	 {Number|*} limit	 The value used to limit the number
		 * @param	 {Function} limitFunc	 The function used to limit the number (Math.min|Math.max)
		 * @returns {Number|void}		 Value converted to Number or void
		 */
		toNumber(value, limit, limitFunc) {
			if (value == null || value === '') {
				return;
			}
			const number = typeof value === 'number' ? value : Number(value);
			if (Number.isNaN(number)) {
				return;
			}
			if (limitFunc == null || limit == null) {
				return number;
			}
			const lNumber = this.toNumber(limit);
			if (lNumber == null) {
				return number;
			}
			return limitFunc(number, lNumber);
		}

		toValue() {
			return this.toNumber.apply(this, arguments);
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
			let value = item;
			if (valuePath != null) {
				value = this.get(valuePath, item);
			}
			return this.toValue(value);
		}
		renderValue() {
			//overrideable
		}

		getInputString(item, valuePath = this.valuePath) {
			const value = this.toValue(this.get(valuePath, item));
			return this._toInputString(value);
		}

		/**
		 * Computes min/max range from values.
		 *
		 * @param	 {Object} change `values` property changes
		 * @returns {Object} Computed min/max
		 */
		_computeRange(change) {
			const allValues = change.base,
				values =
					Array.isArray(allValues) &&
					allValues.length &&
					allValues.map((v) => this.toValue(v)).filter((n) => n != null);

			if (!values || values.length < 1) {
				return { min: null, max: null };
			}
			return values.reduce((p, n) => {
				return {
					min: this.toValue(n, p.min, Math.min),
					max: this.toValue(n, p.max, Math.max),
				};
			}, {});
		}

		_computeLimit(range, inputChange, min, max) {
			if (!range) {
				return;
			}
			const input = inputChange.base,
				nMin = this.toValue(min),
				nMax = this.toValue(max),
				aMin = nMin != null ? nMin : this.toValue(range.min),
				aMax = nMax != null ? nMax : this.toValue(range.max);

			return {
				fromMin: aMin,
				fromMax: this.toValue(
					aMax,
					this._fromInputString(input.max, 'max'),
					Math.min,
				),
				toMin: this.toValue(
					aMin,
					this._fromInputString(input.min, 'min'),
					Math.max,
				),
				toMax: aMax,
			};
		}

		_computeFilterText(change) {
			if (change.base == null) {
				return undefined;
			}
			const filter = change.base,
				min = this.toValue(filter.min),
				max = this.toValue(filter.max),
				text = [];

			if (min != null) {
				text.push(this.renderValue(min));
			}
			text.push(' - ');
			if (max != null) {
				text.push(this.renderValue(max));
			}
			return text.length > 1 ? text.join('') : undefined;
		}

		_computeTooltip(title, text) {
			if (text == null) {
				return title;
			}
			return `${title}: ${text}`;
		}

		_fromInputString(value) {
			return this.toValue(value);
		}

		_toInputString(value) {
			const val = this.toValue(value);
			if (val == null) {
				return null;
			}
			return val;
		}

		_getDefaultFilter() {
			return { min: null, max: null };
		}

		/**
		 * Observes changes of _filterInput, saves the path, debounces _limitInput.
		 *
		 * @param	 {Object} change '_filterInput' property changes
		 * @param	 {Boolean} autoupdate whether to auto-update on value changes
		 * @returns {void}
		 */
		_filterInputChanged(change, autoupdate) {
			const path = change.path.split('.')[1];
			this.__inputChangePath = path || null;

			if (!autoupdate) {
				return;
			}

			this._limitInputDebouncer = Debouncer.debounce(
				this._limitInputDebouncer,
				timeOut.after(600),
				() => {
					this._limitInput();
					this._updateFilter();
				},
			);
			enqueueDebouncer(this._limitInputDebouncer);
		}

		_clearFrom() {
			this.set('_filterInput.min', null);
			this._updateFilter();
		}

		_clearTo() {
			this.set('_filterInput.max', null);
			this._updateFilter();
		}

		_onBlur() {
			this._limitInput();
			this._updateFilter();
		}

		_onKeyDown(event) {
			const input = event.currentTarget,
				inputs = Array.from(
					input.parentElement.querySelectorAll('cosmoz-input'),
				),
				nextInput = inputs[inputs.findIndex((i) => i === input) + 1],
				isLastInput = !nextInput,
				isFirstInput = inputs[0] === input;

			switch (event.keyCode) {
				case 13: // Enter
					event.preventDefault();

					if (!isLastInput) {
						nextInput.focus();
					} else {
						// if this is the last input, update the filter
						const limited = this._limitInput();
						this._updateFilter();
						// and close the dropdown if the value was not out of bounds
						if (!limited) {
							this._closeParent(input);
						}
					}
					break;

				case 9: // Tab
					if (
						(isLastInput && !event.shiftKey) ||
						(isFirstInput && event.shiftKey)
					) {
						this._closeParent(input);
					}
			}
		}

		_closeParent(input) {
			getCloseableParent(input).close();
		}

		_onDropdownOpenedChanged({ currentTarget, detail: { value } }) {
			if (!value) {
				return;
			}

			// focus the first input after the dropdown is visible
			setTimeout(
				() => currentTarget.querySelector('cosmoz-input').focus(),
				100,
			);
		}

		/**
		 * Debounced function called by `_filterInputChanged` when `_filterInput` changes.
		 *
		 * @returns {void}
		 */
		_limitInput() {
			const input = this._filterInput,
				path = this.__inputChangePath,
				value = path
					? this._fromInputString(this.get(path, input), path)
					: null;

			this.__inputChangePath = null;

			if (value == null) {
				//Don't limit a null value
				return false;
			}

			const limit = this._limit,
				limitPath = path === 'min' ? 'from' : 'to',
				lowerLimit = this.get(limitPath + 'Min', limit),
				upperLimit = this.get(limitPath + 'Max', limit),
				minValue = this.toValue(value, lowerLimit, Math.max),
				limitedValue = this.toValue(minValue, upperLimit, Math.min);

			if (
				this.getComparableValue(value) !== this.getComparableValue(limitedValue)
			) {
				//set value without debouncing _limitInput again.
				this.set(
					['_filterInput', path],
					this._toInputString(limitedValue, path),
				);
				if (this._limitInputDebouncer) {
					this._limitInputDebouncer.cancel();
				}
				return true;
			}

			return false;
		}

		_updateFilter() {
			const input = this._filterInput,
				filter = this.filter,
				min = this._fromInputString(input.min, 'min'),
				max = this._fromInputString(input.max, 'max');

			if (
				this.getComparableValue(min) ===
					this.getComparableValue(filter, 'min') &&
				this.getComparableValue(max) === this.getComparableValue(filter, 'max')
			) {
				return;
			}

			this.set('filter', { min, max });
		}

		_filterChanged(change) {
			if (this._filterInput == null) {
				return;
			}
			const input = this._filterInput,
				filter = change.base,
				min = this._fromInputString(input.min, 'min'),
				max = this._fromInputString(input.max, 'max');

			if (
				this.getComparableValue(min) ===
					this.getComparableValue(filter, 'min') &&
				this.getComparableValue(max) === this.getComparableValue(filter, 'max')
			) {
				return;
			}

			this.set('_filterInput', {
				min: this._toInputString(filter.min),
				max: this._toInputString(filter.max),
			});
			if (this._limitInputDebouncer) {
				this._limitInputDebouncer.cancel();
			}
		}

		hasFilter() {
			const filter = this.filter;
			if (filter == null) {
				return false;
			}
			return (
				this.toValue(filter.min) != null || this.toValue(filter.max) != null
			);
		}

		resetFilter() {
			this.filter = this._getDefaultFilter();
		}

		_updateLimits(limits, headerFocused) {
			if (!limits) return;
			Promise.resolve(invoke(limits, { active: headerFocused })).then((res) => {
				const { min, max } = res ?? {};
				Object.assign(this, {
					...(min != null ? { min } : {}),
					...(max != null ? { max } : {}),
				});
			});
		}
	};
