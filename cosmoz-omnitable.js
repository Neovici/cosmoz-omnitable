/* eslint-disable max-lines */
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-spinner/paper-spinner-lite';

import '@neovici/cosmoz-grouped-list';
import '@neovici/cosmoz-bottom-bar';

import './cosmoz-omnitable-column';
import './cosmoz-omnitable-header-row';
import './cosmoz-omnitable-item-row';
import './cosmoz-omnitable-item-expand';
import './cosmoz-omnitable-group-row';
import './cosmoz-omnitable-columns';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { html as litHtml } from 'lit-html';

import { useOmnitable } from './lib/use-omnitable';
import './lib/cosmoz-omnitable-settings';
import { saveAsCsvAction } from './lib/save-as-csv-action';
import { saveAsXlsxAction } from './lib/save-as-xlsx-action';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import { without } from '@neovici/cosmoz-utils/lib/array';
import { component } from 'haunted';
import { renderOmnitable } from './lib/render-omnitable';
/**
 * @polymer
 * @customElement
 * @appliesMixin translatable
 * @group Cosmoz Elements
 * @element cosmoz-omnitable
 * @demo demo/index.html
 */

class OmnitableC extends PolymerElement {
	static get template() {
		return null;
	}

	/* eslint-disable-next-line max-lines-per-function */
	static get properties() {
		return {
			/**
		 * Filename when saving as CSV
		 */
			csvFilename: { type: String, value: 'omnitable.csv' },

			/**
		 * Filename when saving as XLSX
		 */
			xlsxFilename: { type: String, value: 'omnitable.xlsx' },

			/**
		 * Sheet name when saving as XLSX
		 */
			xlsxSheetname: { type: String, value: 'Omnitable' },

			/**
		 * Array used to list items.
		 */
			data: { type: Array },

			/**
			 * This function is used to determine which items are kept selected across data updates
			 * TODO: probably broken
			 */
			compareItemsFn: Function,

			/**
		 * True if data is a valid and not empty array.
		 */
			_dataIsValid: { type: Boolean, value: false, computed: '_computeDataValidity(data.*)' },

			/**
		 * If set to true, then group a row will be displayed for groups that contain no items.
		 */
			displayEmptyGroups: { type: Boolean, value: false },

			/**
		 * Specific columns to enable
		 */
			enabledColumns: { type: Array, notify: true },

			/**
		 * Whether bottom-bar has actions.
		 */
			hasActions: { type: Boolean, value: false },

			/**
		 * Shows a loading overlay to indicate data will be updated
		 */
			loading: { type: Boolean, value: false },

			/**
		 * List of selected rows/items in `data`.
		 */
			descending: { type: Boolean, value: false, notify: true },
			sortOn: { type: String, value: '', notify: true },
			groupOnDescending: { type: Boolean, value: false },

			/**
		 * The column name to group on.
		 */
			groupOn: { type: String, notify: true, value: '' },

			/**
		 	 * List of columns definition for this table.
		 	 */
			columns: { type: Array, notify: true, value: () => []},
			settings: { type: Object, notify: true },
			hashParam: { type: String },

			/**
			 * True when all items are selected.
			 */
			_allSelected: { type: Boolean },
			computedBarHeight: { type: Number },
			settingsId: { type: String, value: undefined },
			topPlacement: {
				value: ['top-right', ...defaultPlacement]
			}
		};
	}

	static get observers() {
		return [
			'_selectedItemsChanged(selectedItems.*)'
		];
	}

	constructor() {
		super();

		this._onKey = this._onKey.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();

		this.$.groupedList.scrollTarget = this.$.scroller;

		
		window.addEventListener('keydown', this._onKey);
		window.addEventListener('keyup', this._onKey);
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		window.removeEventListener('keydown', this._onKey);
		window.removeEventListener('keyup', this._onKey);
	}

	/** ELEMENT BEHAVIOR */

	_computeDataValidity({ base: data } = {}) {
		return data && Array.isArray(data) && data.length > 0;
	}

	_computeFilterIsTooStrict(dataIsValid, visibleItemsLength) {
		console.log({dataIsValid, visibleItemsLength})
		return dataIsValid && visibleItemsLength < 1;
	}

	_computeSortDirection(descending) {
		const direction = descending ? this._('Descending') : this._('Ascending');
		return `(${ direction })`;
	}


	_onKey(e) {
		this._shiftKey = e.shiftKey;
		this._ctrlKey = e.ctrlKey;
	}

	_onCheckboxChange(event) {
		const item = event.model.item,
			selected = event.target.checked;
		if (this._shiftKey) {
			this.$.groupedList.toggleSelectTo(item, selected);
		} else if (this._ctrlKey) {
			event.target.checked = true;
			this.$.groupedList.selectOnly(item);
		} else {
			this.$.groupedList.toggleSelect(item, selected);
		}

		event.preventDefault();
		event.stopPropagation();
	}

	/**
	 * Triggers a download of selected rows as a CSV file.
	 * @returns {undefined}
	 */
	_saveAsCsvAction() {
		saveAsCsvAction(this.columns, this.selectedItems, this.csvFilename);
	}

	/**
	 * Triggers a download of selected rows as a XLSX file.
	 * @returns {undefined}
	 */
	_saveAsXlsxAction() {
		saveAsXlsxAction(this.columns, this.selectedItems, this.xlsxFilename, this.xlsxSheetname);
	}

	/** view functions */

	_getGroupRowClasses(folded) {
		return folded ? 'groupRow groupRow-folded' : 'groupRow';
	}

	/**
	 * Toggle folding of a group
	 * @param	 {Event} event event
	 * @returns {undefined}
	 */
	_toggleGroup(event) {
		this.$.groupedList.toggleFold(event.model.item);
	}

	_toggleItem(event) {
		const item = event.model.item;
		this.$.groupedList.toggleCollapse(item);
	}

	onExpanded() {
		requestAnimationFrame(() => this.$.groupedList.$.list._render());
	}
	/**
	 * Turn an `action` event into a `run` event
	 * @param	 {Event} event	`action` event
	 * @param	 {Object} detail `action` event details
	 * @returns {undefined}
	 */
	_onAction(event, detail) {
		detail.item.dispatchEvent(new window.CustomEvent('run', {
			bubbles: true,
			cancelable: true,
			detail: {
				omnitable: this,
				items: this.selectedItems
			}
		}));
		event.stopPropagation();
	}

	_selectedItemsChanged(change) {
		if (change.path === 'selectedItems' || change.path === 'selectedItems.splices') {
			this._allSelected = this.data && this.data.length > 0 && change.base.length === this.data.length;
		}
	}

	_onAllCheckboxChange(event) {
		if (event.target.checked) {
			this.$.groupedList.selectAll();
		} else {
			this.$.groupedList.deselectAll();
		}
	}

	// TODO: move to publicInterface mixin
	/** PUBLIC */

	suppressNextScrollReset() {
		return;
		const list = this.$.groupedList.$.list;
		// HACK: Replace _resetScrollPosition for one call to maintain scroll position
		if (list._scrollTop > 0 && !list._resetScrollPosition.suppressed) {
			const reset = list._resetScrollPosition;
			list._resetScrollPosition = () => {
				// restore hack
				list._resetScrollPosition = reset;
			};
			list._resetScrollPosition.suppressed = true;
		}
	}

	/**
	 * Remove multiple items from `data`
	 * @param {Array} items Array of items to remove
	 * @return {Array} Array containing removed items
	 */
	removeItems(items) {
		const removedItems = [];

		for (let i = items.length - 1; i >= 0; i -= 1) {
			const removed = this.removeItem(items[i]);
			if (removed != null) {
				removedItems.push(removed);
			}
		}
		return removedItems;
	}
	/**
	 * Helper method to remove an item from `data`.
	 * @param	 {Object} item Item to remove
	 * @return {Object} item removed
	 */
	removeItem(item) {
		const index = this.data.indexOf(item);

		if (index < 0) {
			return null;
		}

		const removed = this.splice('data', index, 1);
		this.data = this.data.slice();
		if (Array.isArray(removed) && removed.length > 0) {
			return removed[0];
		}
	}
	replaceItem(oldItem, newItem) {
		const itemIndex = this.data.indexOf(oldItem);
		if (itemIndex > -1) {
			return this.replaceItemAtIndex(itemIndex, newItem);
		}
	}
	replaceItemAtIndex(index, newItem) {
		this.suppressNextScrollReset();
		this.splice('data', index, 1, newItem);
		this.data = this.data.slice();
	}
	/**
	 * Convenience method for setting a value to an item's path and notifying any
	 * element bound to this item's path.
	 * @param {Object} item The item.
	 * @param {itemPath} itemPath The path of the item.
	 * @param {String} value The new value of the item.
	 * @returns {void}
	 */
	setItemValue(item, itemPath, value) {
		const key = this.data.indexOf(item);

		this.set('data.' + key + '.' + itemPath, value);
	}

	selectItem(item) {
		this.$.groupedList.select(item);
	}

	deselectItem(item) {
		this.$.groupedList.deselect(item);
	}

	isItemSelected(item) {
		return this.$.groupedList.isItemSelected(item);
	}

	_renderRowStats(numRows, totalAvailable) {
		if (Number.isInteger(totalAvailable) && totalAvailable > numRows) {
			return this.ngettext('{1} / {0} row', '{1} / {0} rows', totalAvailable, numRows);
		}
		return this.ngettext('{0} row', '{0} rows', numRows);
	}

	_onCompleteValues(columns, type, value) { /* eslint-disable-next-line no-bitwise */
		return columns?.filter?.(c => c[type]).sort((a, b) => ((b === value) >> 0) - ((a === value) >> 0));
	}

	_onCompleteSelect(newVal, {value, onChange, onText, limit}) {
		onText('');
		onChange([...without(newVal)(value), newVal].slice(-limit));
	}

	_onCompleteChange(type) {
		return (val, close) => {
			const value = (val[0] ?? val)?.name ?? '',
				setter = type === 'groupOn' ? this.setGroupOn : this.setSortOn,
				directionSetter = type === 'groupOn' ? this.setGroupOnDescending : this.setDescending;

			setter(oldValue => {
				if (value) {
					directionSetter(oldDirection => value === oldValue ? !oldDirection : false);
				} else {
					directionSetter(null);
				}
				return value;
			});

			value && close(); /* eslint-disable-line no-unused-expressions */
		};
	}
}

const Omnitable = host => renderOmnitable(useOmnitable(host));

customElements.define('cosmoz-omnitable', component(Omnitable, {
	baseElement: OmnitableC
}));

const tmplt = `
	<slot name="actions" slot="actions"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const
	actionSlots = litHtml([tmplt]),
	actionSlotsPolymer = html([tmplt]);
