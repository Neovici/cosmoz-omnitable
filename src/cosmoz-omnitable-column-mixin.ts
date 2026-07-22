import { get } from '@polymer/polymer/lib/utils/path';
import type { Column, GetPath, Item } from './lib/types';

export const getString = ({ valuePath }: { valuePath?: GetPath }, item: Item) =>
		get(item, valuePath!),
	toXlsxValue = getString,
	getComparableValue = getString,
	applySingleFilter =
		({ valuePath }: { valuePath?: GetPath }, filter: string) =>
		(item: Item): boolean => {
			const value = get(item, valuePath!);
			if (value == null) {
				return false;
			}
			return value
				.toString()
				.toLowerCase()
				.trim()
				.includes(filter.toLowerCase().trim());
		},
	serializeFilter = (_column: Column, filter: unknown): unknown =>
		filter === '' || filter == null ? null : filter,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	columnMixin = (base: any) =>
		class extends base {
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
					filter: { type: Object },
					noLocalFilter: { type: Boolean },
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
					/**
					 * If true, the column cannot be sorted
					 */
					noSort: { type: Boolean, value: false },
					/**
					 * If true, the column header filter input is disabled
					 */
					disabledFiltering: { type: Boolean, value: false },
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
					renderGroup: { type: Function },

					/**
					 * The priority of the column in the mini mode. If missing the column is disabled in the mini mode.
					 */
					mini: { type: Number, value: null },
					/**
					 * An alternative render to use in mini mode. Takes the same params as `renderCell`.
					 */
					renderMini: { type: Function },
				};
			}

			static get observers() {
				return ['notifyFilterChange(filter)'];
			}

			notifyFilterChange(filter: unknown): void {
				if (this.__ownChange) {
					return;
				}
				this.dispatchEvent(
					new CustomEvent('legacy-filter-changed', {
						detail: {
							name: this.name,
							state: this.legacyFilterToState(filter),
						},
						bubbles: true,
					}),
				);
			}

			legacyFilterToState(filter: unknown): { filter: unknown } {
				return { filter };
			}

			/**
			 * Override this in column elements if you need a different default width
			 */

			// eslint-disable-next-line no-empty-function
			getFilterFn(): void {}

			getString(column: Column, item: Item): unknown {
				return getString(column, item);
			}

			toXlsxValue(column: Column, item: Item): unknown {
				return toXlsxValue(column, item);
			}

			cellTitleFn(column: Column, item: Item): unknown {
				return this.getString(column, item);
			}

			headerTitleFn(column: Column): string | undefined {
				return column.title;
			}

			serializeFilter(_column: Column, filter: unknown): unknown {
				return serializeFilter(_column, filter);
			}

			deserializeFilter(_column: Column, filter: unknown): unknown {
				if (filter == null) {
					return null;
				}

				if (typeof filter === 'string') {
					try {
						return window.decodeURIComponent(filter);
					} catch {
						return null;
					}
				}
				return filter;
			}

			getComparableValue(column: Column, item: Item): unknown {
				return getComparableValue(column, item);
			}

			computeSource(_column: Column, data: unknown): unknown {
				return data;
			}

			_propertiesChanged(
				currentProps: Record<string, unknown>,
				changedProps: Record<string, unknown>,
				oldProps: Record<string, unknown>,
			): void {
				super._propertiesChanged(currentProps, changedProps, oldProps);
				this.dispatchEvent(
					new CustomEvent('cosmoz-column-prop-changed', { bubbles: true }),
				);
			}
		};
