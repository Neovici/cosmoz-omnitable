import { get } from '@polymer/polymer/lib/utils/path';

export const
	getString = ({ valuePath }, item) => get(item, valuePath),
	toXlsxValue = getString,

	applySingleFilter = ({ valuePath }, filter) => item => {
		const value = get(item, valuePath);
		if (value == null) {
			return false;
		}
		return value.toString().toLowerCase().includes(filter.toLowerCase());
	},

	serializeFilter = (column, filter) => filter === '' || filter == null ? null : filter,

	// eslint-disable-next-line max-lines-per-function
	columnMixin = base => class extends base {
		static get properties() {
			return {
			/**
			 * Used to indicate that an element using this behavior is a column definition that can be used
			 * in cosmoz-omnitable
			 */
				isOmnitableColumn: { type: Boolean, value: true },
				title: { type: String },
				valuePath: { type: String, notify: true },
				values: { type: Array, notify: true },
				/**
			 * If the column should be disabled until enabled with enabledColumns
			 */
				disabled: { type: Boolean, value: false, notify: true },
				/**
			 * If true, the column will be editable by using an input element for rendering.
			 */
				editable: { type: Boolean, notify: true },
				/**
			 * Indicate that the column is loading/performing work
			 */
				loading: { type: Boolean, value: false, notify: true },
				externalValues: { type: Boolean, value: false, notify: true },
				/**
			 * Column name for use with enabledColumns
			 */
				name: { type: String },
				sortOn: { type: String },
				groupOn: { type: String },
				width: { type: String, value: '75px' },
				minWidth: { type: String, value: '40px' },
				flex: { type: String, value: '1' },
				cellClass: { type: String, value: 'default-cell' },
				headerCellClass: { type: String, value: 'default-header-cell' },
				priority: { type: Number, value: 0 },
				hidden: { type: Boolean, notify: true },
				preferredDropdownHorizontalAlign: { type: String, value: 'right' },
				renderHeader: { type: Function },
				renderCell: { type: Function },
				renderEditCell: { type: Function },
				renderGroup: { type: Function }
			};
		}

		/**
	 * Override this in column elements if you need a different default width
	 */

		// eslint-disable-next-line no-empty-function
		getFilterFn() {}

		getString(column, item) {
			return getString(column, item);
		}

		toXlsxValue(column, item) {
			return toXlsxValue(column, item);
		}

		cellTitleFn(column, item) {
			return getString(column, item);
		}

		serializeFilter(column, filter) {
			return serializeFilter(column, filter);
		}

		deserializeFilter(column, filter) {
			return filter;
		}

		getComparableValue(item, valuePath) {
			return get(item, valuePath);
		}

		computeSource(column, data) {
			return data;
		}

		_propertiesChanged(currentProps, changedProps, oldProps) {
			super._propertiesChanged(currentProps, changedProps, oldProps);
			this.dispatchEvent(new CustomEvent('cosmoz-column-prop-changed', { bubbles: true }));
		}
	};
