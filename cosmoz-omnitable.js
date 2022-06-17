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
import styles from './cosmoz-omnitable-styles';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { html as litHtml } from 'lit-html';

import { translatable } from '@neovici/cosmoz-i18next';
import { mixin, hauntedPolymer } from '@neovici/cosmoz-utils';
import { isEmpty } from '@neovici/cosmoz-utils/lib/template.js';
import { useOmnitable } from './lib/use-omnitable';
import { saveAsCsvAction } from './lib/save-as-csv-action';
import { saveAsXlsxAction } from './lib/save-as-xlsx-action';
import { defaultPlacement } from '@neovici/cosmoz-dropdown';
import { without } from '@neovici/cosmoz-utils/lib/array';
import { indexSymbol } from './lib/utils';

/**
 * @polymer
 * @customElement
 * @appliesMixin translatable
 * @group Cosmoz Elements
 * @element cosmoz-omnitable
 * @demo demo/index.html
 */

class Omnitable extends hauntedPolymer(useOmnitable)(
	mixin({ isEmpty }, translatable(PolymerElement))
) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		const template = html`
			${html(Object.assign([styles], { raw: [styles] }))}
			<div id="layoutStyle"></div>

			<div class="mainContainer">
				<sort-and-group-provider value="[[ sortAndGroup ]]">
					<div class="header" id="header">
						<input
							class="checkbox all"
							type="checkbox"
							checked="[[ _allSelected ]]"
							on-input="_onAllCheckboxChange"
							disabled$="[[ !_dataIsValid ]]"
						/>
						<cosmoz-omnitable-header-row
							data="[[ data ]]"
							columns="[[ columns ]]"
							filters="[[ filters ]]"
							group-on-column="[[ groupOnColumn ]]"
							set-filter-state="[[ setFilterState ]]"
							settings-config="[[ settingsConfig ]]"
						></cosmoz-omnitable-header-row>
					</div>
				</sort-and-group-provider>
				<div class="tableContent" id="tableContent">
					<template is="dom-if" if="[[ !_dataIsValid ]]">
						<div class="tableContent-empty">
							<slot name="empty-set-message">
								<iron-icon icon="icons:announcement"></iron-icon>
								<div class="tableContent-empty-message">
									<h3>[[ _('Working set empty', t) ]]</h3>
									<p>[[ _('No data to display', t) ]]</p>
								</div>
							</slot>
						</div>
					</template>
					<template is="dom-if" if="[[ _filterIsTooStrict ]]">
						<div class="tableContent-empty">
							<iron-icon icon="icons:announcement"></iron-icon>
							<div>
								<h3>[[ _('Filter too strict', t) ]]</h3>
								<p>[[ _('No matches for selection', t) ]]</p>
							</div>
						</div>
					</template>
					<template is="dom-if" if="[[ loading ]]">
						<div class="tableContent-empty overlay">
							<paper-spinner-lite active="[[ loading ]]"></paper-spinner-lite>
							<div>
								<h3>[[ _('Data set is updating', t) ]]</h3>
							</div>
						</div>
					</template>
					<div class="tableContent-scroller" id="scroller">
						<cosmoz-grouped-list
							id="groupedList"
							data="{{ sortedFilteredGroupedItems }}"
							selected-items="{{ selectedItems }}"
							display-empty-groups="[[ displayEmptyGroups ]]"
							compare-items-fn="[[ compareItemsFn ]]"
							render-item="[[ renderItem(collapsedColumns) ]]"
							render-group="[[ renderGroup ]]"
						></cosmoz-grouped-list>
					</div>
				</div>
				<div class="footer">
					<div class="footer-controls" part="footer-controls">
						<cosmoz-autocomplete
							label="[[ _('Group on', t) ]] [[ _computeSortDirection(groupOnDescending, t) ]]"
							placeholder="[[ _('No grouping', t) ]]"
							source="[[ _onCompleteValues(columns, 'groupOn', groupOnColumn) ]]"
							value="[[ groupOnColumn ]]"
							limit="1"
							text-property="title"
							always-float-label
							item-height="48"
							item-limit="8"
							class="footer-control"
							on-change="[[ _onCompleteChange('groupOn') ]]"
							on-select="[[ _onCompleteSelect ]]"
							default-index="-1"
							show-single
						>
							<svg
								slot="suffix"
								viewBox="0 0 24 24"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								width="24"
								fill="currentColor"
							>
								<path d="M7 10l5 5 5-5z"></path>
							</svg>
						</cosmoz-autocomplete>
						<cosmoz-autocomplete
							label="[[ _('Sort on', t) ]] [[ _computeSortDirection(descending, t) ]]"
							placeholder="[[ _('No sorting', t) ]]"
							source="[[ _onCompleteValues(columns, 'sortOn', sortOnColumn) ]]"
							value="[[ sortOnColumn ]]"
							limit="1"
							text-property="title"
							always-float-label
							item-height="48"
							item-limit="8"
							class="footer-control"
							on-change="[[ _onCompleteChange('sortOn') ]]"
							on-select="[[ _onCompleteSelect ]]"
							default-index="-1"
							show-single
						>
							<svg
								slot="suffix"
								viewBox="0 0 24 24"
								preserveAspectRatio="xMidYMid meet"
								focusable="false"
								width="24"
								fill="currentColor"
							>
								<path d="M7 10l5 5 5-5z"></path>
							</svg>
						</cosmoz-autocomplete>
						<slot id="controlsSlot" name="controls"></slot>
					</div>
					<div class="footer-tableStats">
						<span
							>[[ ngettext('{0} group', '{0} groups', groupsCount, t) ]]</span
						>
						<span
							>[[ _renderRowStats(numProcessedItems, totalAvailable, t) ]]</span
						>
					</div>
					<cosmoz-bottom-bar
						id="bottomBar"
						class="footer-actionBar"
						match-parent
						on-action="_onAction"
						active$="[[ !isEmpty(selectedItems.length) ]]"
					>
						<slot name="info" slot="info"
							>[[ ngettext('{0} selected item', '{0} selected items',
							selectedItems.length, t) ]]</slot
						>
						<slot name="actions" id="actions"></slot>
						<!-- These slots are needed by cosmoz-bottom-bar
						as it might change the slot of the actions to distribute them in the menu -->
						<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
						<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
						<cosmoz-dropdown-menu slot="extra" placement="[[ topPlacement ]]">
							<svg
								slot="button"
								width="14"
								height="18"
								viewBox="0 0 14 18"
								fill="none"
								stroke="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 8.5L7.00024 14.5L13 8.5"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
								<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
							</svg>
							<button on-click="_saveAsCsvAction">
								[[ _('Save as CSV', t) ]]
							</button>
							<button on-click="_saveAsXlsxAction">
								[[ _('Save as XLSX', t) ]]
							</button>
							<slot name="download-menu"></slot>
						</cosmoz-dropdown-menu>
					</cosmoz-bottom-bar>
				</div>
			</div>

			<div id="columns">
				<slot id="columnsSlot"></slot>
			</div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}

	renderItem(collapsedColumns) {
		return (item, index, { selected, expanded, toggleCollapse }) => {
			return litHtml`
			<div class="item-row-wrapper">
				<div ?selected=${selected}
					part="itemRow itemRow-${item[indexSymbol]}"
					.dataIndex=${item[indexSymbol]}
					.dataItem=${item}
					class="itemRow"
					@click=${this.onItemClick}
				>
					<input class="checkbox"
						type="checkbox"
						.checked=${selected}
						.dataItem=${item}
						@input=${this._onCheckboxChange}
						?disabled=${!this._dataIsValid} />
					<cosmoz-omnitable-item-row
						.columns=${this.columns}
						.index=${index}
						.selected=${selected}
						.expanded=${expanded}
						.item=${item}
						.groupOnColumn=${this.groupOnColumn}
						.onItemChange=${this.onItemChange}>
					</cosmoz-omnitable-item-row>
					<paper-icon-button
						class="expand"
						?hidden=${isEmpty(collapsedColumns.length)}
						.icon=${this._getFoldIcon(expanded)}
						@click=${toggleCollapse}
					></paper-icon-button>
				</div>
				<cosmoz-omnitable-item-expand .columns=${collapsedColumns}
					.item=${item}
					.index=${index}
					?selected=${selected}
					?expanded=${expanded}
					.groupOnColumn=${this.groupOnColumn}
					part="item-expand">
				</cosmoz-omnitable-item-expand>
			</div>`;
		};
	}

	renderGroup(item, index, { selected, folded, toggleFold }) {
		return litHtml`
			<div class="${this._getGroupRowClasses(folded)}"
					part="groupRow groupRow-${item[indexSymbol]}">
				<input class="checkbox"
					type="checkbox"
					.checked=${selected}
					.dataItem=${item}
					@input=${this._onCheckboxChange}
					?disabled=${!this._dataIsValid} />
				<h3 class="groupRow-label">
					<div><span>${this.groupOnColumn?.title}</span>: &nbsp;</div>
					<cosmoz-omnitable-group-row
						.column=${this.groupOnColumn}
						.item=${item.items?.[0]}
						.selected=${selected}
						.folded=${folded}
						.group=${item}
					></cosmoz-omnitable-group-row>
				</h3>
				<div class="groupRow-badge">${item.items.length}</div>
				<paper-icon-button
					class="fold"
					.icon=${this._getFoldIcon(folded)}
					@click=${toggleFold}></paper-icon-button>
			</div>`;
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
			 */
			compareItemsFn: Function,

			/**
			 * True if data is a valid and not empty array.
			 */
			_dataIsValid: {
				type: Boolean,
				value: false,
				computed: '_computeDataValidity(data.*)',
			},

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
			selectedItems: { type: Array, notify: true, value: () => [] },
			descending: { type: Boolean, value: false, notify: true },
			sortOn: { type: String, value: '', notify: true },
			groupOnDescending: { type: Boolean, value: false },

			/**
			 * The column name to group on.
			 */
			groupOn: { type: String, notify: true, value: '' },

			/**
			 * Sorted items structure after filtering and grouping.
			 */
			sortedFilteredGroupedItems: { type: Array, notify: true },

			/**
			 * List of columns definition for this table.
			 */
			columns: { type: Array, notify: true, value: () => [] },
			settings: { type: Object, notify: true },
			_filterIsTooStrict: {
				type: Boolean,
				computed:
					'_computeFilterIsTooStrict(_dataIsValid, sortedFilteredGroupedItems.length)',
			},
			hashParam: { type: String },

			/**
			 * True when all items are selected.
			 */
			_allSelected: { type: Boolean },
			computedBarHeight: { type: Number },
			settingsId: { type: String, value: undefined },
			topPlacement: {
				value: ['top-right', ...defaultPlacement],
			},
		};
	}

	static get observers() {
		return ['_selectedItemsChanged(selectedItems.*)'];
	}

	constructor() {
		super();

		this._onKey = this._onKey.bind(this);
		this._onCheckboxChange = this._onCheckboxChange.bind(this);
		this.renderItem = this.renderItem.bind(this);
		this.renderGroup = this.renderGroup.bind(this);
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
		return dataIsValid && visibleItemsLength < 1;
	}

	_computeSortDirection(descending) {
		const direction = descending ? this._('Descending') : this._('Ascending');
		return `(${direction})`;
	}

	_onKey(e) {
		this._shiftKey = e.shiftKey;
		this._ctrlKey = e.ctrlKey;
	}

	_onCheckboxChange(event) {
		const item = event.target.dataItem,
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
		saveAsXlsxAction(
			this.columns,
			this.selectedItems,
			this.xlsxFilename,
			this.xlsxSheetname
		);
	}

	/** view functions */

	_getGroupRowClasses(folded) {
		return folded ? 'groupRow groupRow-folded' : 'groupRow';
	}
	_getFoldIcon(expanded) {
		return expanded ? 'expand-less' : 'expand-more';
	}

	/**
	 * Turn an `action` event into a `run` event
	 * @param	 {Event} event	`action` event
	 * @param	 {Object} detail `action` event details
	 * @returns {undefined}
	 */
	_onAction(event, detail) {
		detail.item.dispatchEvent(
			new window.CustomEvent('run', {
				bubbles: true,
				cancelable: true,
				detail: {
					omnitable: this,
					items: this.selectedItems,
				},
			})
		);
		event.stopPropagation();
	}

	_selectedItemsChanged(change) {
		if (
			change.path === 'selectedItems' ||
			change.path === 'selectedItems.splices'
		) {
			this._allSelected =
				this.data &&
				this.data.length > 0 &&
				change.base.length === this.data.length;
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
			return this.ngettext(
				'{1} / {0} row',
				'{1} / {0} rows',
				totalAvailable,
				numRows
			);
		}
		return this.ngettext('{0} row', '{0} rows', numRows);
	}

	_onCompleteValues(columns, type, value) {
		return (
			columns
				?.filter?.((c) => c[type])
				/* eslint-disable-next-line no-bitwise */
				.sort((a, b) => ((b === value) >> 0) - ((a === value) >> 0))
		);
	}

	_onCompleteSelect(newVal, { value, onChange, onText, limit }) {
		onText('');
		onChange([...without(newVal)(value), newVal].slice(-limit));
	}

	_onCompleteChange(type) {
		return (val, close) => {
			const value = (val[0] ?? val)?.name ?? '',
				setter = type === 'groupOn' ? this.setGroupOn : this.setSortOn,
				directionSetter =
					type === 'groupOn' ? this.setGroupOnDescending : this.setDescending;

			setter((oldValue) => {
				if (value) {
					directionSetter((oldDirection) =>
						value === oldValue ? !oldDirection : false
					);
				} else {
					directionSetter(null);
				}
				return value;
			});

			value && close(); /* eslint-disable-line no-unused-expressions */
		};
	}

	onItemClick(e) {
		const composedPath = e.composedPath(),
			path = composedPath.slice(0, composedPath.indexOf(e.currentTarget));

		if (path.find((e) => e.matches?.('a, .checkbox, .expand'))) {
			return;
		}

		this.dispatchEvent(
			new window.CustomEvent('omnitable-item-click', {
				bubbles: true,
				composed: true,
				detail: {
					item: e.currentTarget.dataItem,
					index: e.currentTarget.dataIndex,
				},
			})
		);
	}
}
customElements.define('cosmoz-omnitable', Omnitable);

const tmplt = `
	<slot name="actions" slot="actions"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const actionSlots = litHtml(Object.assign([tmplt], { raw: [tmplt] })),
	actionSlotsPolymer = html(Object.assign([tmplt], { raw: [tmplt] }));
