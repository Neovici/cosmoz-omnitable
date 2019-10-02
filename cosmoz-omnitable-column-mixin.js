import '@webcomponents/shadycss/entrypoints/apply-shim';
import { templatizeMixin } from './cosmoz-omnitable-templatize-mixin';
import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';

/**
 * @polymer
 * @mixinFunction
 * @appliesMixin templatizeMixin
 */
export const columnMixin = dedupingMixin(base => class extends templatizeMixin(base) { // eslint-disable-line max-lines-per-function
	static get properties() { // eslint-disable-line max-lines-per-function
		return {
			title: {
				type: String,
				observer: '_titleChanged'
			},

			valuePath: {
				type: String
			},

			/**
			 * If the column should be disabled until enabled with enabledColumns
			 */
			disabled: {
				type: Boolean,
				value: false,
				observer: '_disabledChanged'
			},

			/**
			 * If true, the column will be editable by using an input element for rendering.
			 */
			editable: {
				type: Boolean,
				observer: '_editableChanged'
			},

			/**
			 * Values to filter this column will be managed outside of omnitable
			 */
			externalValues: {
				type: Boolean,
				value: false,
				observer: '_externalValuesChanged'
			},

			filter: {
				type: Object,
				notify: true,
				value() {
					return this._getDefaultFilter();
				}
			},

			/**
			 * Indicates whether the user has engaged with the
			 * header/filter component of the column
			 */
			headerFocused: {
				type: Boolean,
				value: false,
				notify: true
			},

			/**
			 * Indicate that the column is loading/performing work
			 */
			loading: {
				type: Boolean,
				value: false
			},

			/**
			 * Whether the column wants a list of all distinct values for the column in `values`
			 */
			bindValues: {
				type: Boolean,
				readOnly: true,
				value: false
			},

			/**
			 * Column name for use with enabledColumns
			 */
			name: {
				type: String
			},

			/**
			 * All values for this column.
			 */
			values: {
				type: Array
			},

			sortOn: {
				type: String
			},

			groupOn: {
				type: String
			},

			/**
			 * Used to indicate that an element using this behavior is a column definition that can be used
			 * in cosmoz-omnitable
			 */
			isOmnitableColumn: {
				type: Boolean,
				value: true,
				readOnly: true
			},

			/**
			 * Base width of this column.
			 */
			width: {
				type: String,
				value: '75px'
			},

			/**
			 * Base width of this column when in edit mode.
			 */
			editWidth: {
				type: String,
				value: '75px'
			},

			/**
			 * The minimum width of this column.
			 */
			minWidth: {
				type: String,
				value: '40px'
			},

			/**
			 * The minimum width of this column in edit mode.
			 */
			editMinWidth: {
				type: String,
				value: '40px'
			},

			/**
			 * Width growing factor for this column.
			 */
			flex: {
				type: String,
				value: '1'
			},

			cellClass: {
				type: String,
				value: 'default-cell'
			},

			headerCellClass: {
				type: String,
				value: 'default-header-cell'
			},

			styleModule: {
				type: String
			},

			/**
			 * Allow column to overflow without triggering
			 * column folding (good for long descriptions)
			 */
			overflow: {
				type: Boolean,
				value: false
			},

			priority: {
				type: Number,
				value: 0
			},

			/**
			 * Cell title function, can be overriden.
			 */
			cellTitleFn: {
				type: Function,
				value() {
					/**
					 * @this item
					 * @param {object} item Row item.
					 * @param {string} valuePath Path in the item.
					 * @returns {string} Cell title.
					 */
					return function (item, valuePath = this.valuePath) {
						return this.getString(item, valuePath);
					};
				}
			},

			hidden: {
				type: Boolean,
				reflectToAttribute: true,
				observer: '_hiddenChanged'
			},
			/**
			 * Index of this column in the list of displayed columns (excluding disabled/hidden columns).
			 */
			columnIndex: {
				type: Number
			},

			preferredDropdownHorizontalAlign: {
				type: String,
				computed: '_computePreferredDropdownHorizontalAlign(columnIndex)'
			}
		};
	}

	static get observers() {
		return [
			'__filterChanged(filter.*)',
			'_pathsChanged(valuePath, groupOn, sortOn)'
		];
	}

	ready() {
		super.ready();
		this._itemCells = [];
	}

	_externalValuesChanged(newExternalValuesValue) {
		if (newExternalValuesValue) {
			return;
		}
		this.dispatchEvent(new CustomEvent('cosmoz-column-values-update', {
			bubbles: true,
			composed: true,
			detail: {
				column: this
			}
		}));
	}

	/**
	 * Override this in column elements if you need a different default width
	 */

	_computePreferredDropdownHorizontalAlign(columnIndex) {
		return columnIndex === 0 ? 'left' : 'right';
	}
	getString(item, valuePath = this.valuePath) {
		if (valuePath === undefined) {
			// eslint-disable-next-line no-console
			console.error(this, 'has undefined valuePath arg', valuePath, 'for item', item);
			return;
		}
		return this.get(valuePath, item);
	}
	toXlsxValue(item, valuePath = this.valuePath) {
		if (!valuePath) {
			return '';
		}
		return this.get(valuePath, item);
	}
	_unique(values, valueProperty) {
		if (!Array.isArray(values)) {
			return;
		}
		const used = [];
		return values.reduce((acc, cur) => {
			if (Array.isArray(cur)) {
				return acc.concat(cur);
			}
			acc.push(cur);
			return acc;
		}, [])
			.filter((item, index, array) => {
				if (array.indexOf(item) !== index) {
					return false;
				}
				if (valueProperty) {
					const value = this.get(valueProperty, item);
					if (used.indexOf(value) !== -1) {
						return false;
					}
					used.push(value);
				}
				return true;
			});
	}
	_pathsChanged(valuePath, groupOn, sortOn) {
		if (valuePath == null) {
			return;
		}

		if (groupOn == null) {
			this.set('groupOn', valuePath);
		}

		if (sortOn == null) {
			this.set('sortOn', valuePath);
		}
	}

	getComparableValue(item, valuePath) {
		return this.get(valuePath, item);
	}

	_valueChanged(event) {
		const input = event.target,
			value = input.value,
			item = event.model.item,
			oldValue = this.get(this.valuePath, item);

		this.set(this.valuePath, value, item);
		this._fireItemChangeEvent(item, this.valuePath, oldValue);
	}

	_fireItemChangeEvent(item, valuePath, oldValue, formatFn) {
		const value = this.get(valuePath, item),
			change = {
				item,
				valuePath: this.valuePath,
				value: formatFn ? formatFn(value) : value,
				oldValue: formatFn ? formatFn(oldValue) : oldValue
			};

		this.dispatchEvent(new CustomEvent('column-item-changed', {bubbles: true, detail: change}));
	}

	getFilterFn() {
		if (!this.filter) {
			return;
		}
		if (!Array.isArray(this.filter)) {
			return this._applySingleFilter.bind(this, this.filter.toString().toLowerCase());
		}
		if (this.filter.length === 0) {
			return;
		}
		return this._applyMultiFilter.bind(this, this.filter);
	}

	resetFilter() {
		this.filter = this._getDefaultFilter();
	}

	/**
	 * Returns whether `filterNotify.base` or `filter` is set to a usable value.
	 * @param {Object|void} filterNotify filter.*
	 * @returns {Boolean}	 True if filter or filterNotify.base is set
	 */
	hasFilter(filterNotify) {
		const filter = filterNotify == null ? this.filter : filterNotify.base;

		if (filter == null || filter === '') {
			return false;
		}

		if (Array.isArray(filter)) {
			return filter.length > 0;
		}

		if (typeof filter === 'object') {
			const setFilters = Object.keys(filter).filter(k => filter[k] != null);
			return setFilters.length > 0;
		}

		return true;
	}

	_getDefaultFilter() {
		const type = this.get('properties.filter.type');

		if (type === Array) {
			return [];
		}
		return null;
	}

	_applySingleFilter(filterString, item) {
		const value = this.get(this.valuePath, item);
		if (value == null) {
			return false;
		}
		return value.toString().toLowerCase().indexOf(filterString) > -1;
	}

	_applyMultiFilter(filter, item) {
		const filterArray = filter.map(element => element.toString().toLowerCase()),
			value = this.get(this.valuePath, item).toString().toLowerCase();

		return filterArray.some(filter => value.indexOf(filter) >= 0);
	}

	_titleChanged() {
		this.dispatchEvent(new CustomEvent('cosmoz-column-title-changed', {bubbles: true, detail: { column: this }}));
	}

	_hiddenChanged() {
		this.dispatchEvent(new CustomEvent('cosmoz-column-hidden-changed', {bubbles: true, detail: { column: this }}));
	}
	_disabledChanged() {
		this.dispatchEvent(new CustomEvent('cosmoz-column-disabled-changed', {bubbles: true, detail: { column: this }}));
	}

	_editableChanged() {
		this.dispatchEvent(new CustomEvent('cosmoz-column-editable-changed', {bubbles: true, detail: { column: this }}));
	}

	__filterChanged() {
		this.dispatchEvent(new CustomEvent('cosmoz-column-filter-changed', {bubbles: true, detail: { column: this }}));
	}

	_serializeFilter(obj = this.filter) {
		const type = {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
		let value = obj;

		if (type === 'array' && !value.length) {
			value = null;
		} else if (type === 'object') {
			const keys = Object.keys(obj).filter(k => obj[k] != null);
			if (keys.length > 0) {
				value = keys.reduce((acc, k) => {
					acc[k] = obj[k];
					return acc;
				}, {});
			} else {
				value = null;
			}
		}
		return super._serializeValue(value);
	}

	_deserializeFilter(obj) {
		const type = this.filter && this.filter.constructor || Object;

		if (type === Object && obj == null) {
			return {};
		}
		if (type === Array && obj == null) {
			return [];
		}
		return super._deserializeValue(obj, type);
	}

});
