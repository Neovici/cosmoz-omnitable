/* eslint-disable max-lines */
import '@webcomponents/shadycss/entrypoints/apply-shim';

import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-label/iron-label';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-spinner/paper-spinner-lite';

import '@neovici/cosmoz-grouped-list';
import '@neovici/cosmoz-bottom-bar';
import '@neovici/cosmoz-page-router/cosmoz-page-location';

import './cosmoz-omnitable-column';
import './cosmoz-omnitable-header-row';
import './cosmoz-omnitable-item-row';
import './cosmoz-omnitable-item-expand';
import './cosmoz-omnitable-item-expand-line';
import './cosmoz-omnitable-group-row';
import './cosmoz-omnitable-styles';
import './cosmoz-omnitable-item';
import './cosmoz-omnitable-columns';

import { NullXlsx } from '@neovici/nullxlsx';

import { saveAs } from 'file-saver';

import {
	timeOut, animationFrame
} from '@polymer/polymer/lib/utils/async';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';
import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { html as litHtml } from 'lit-html';

import { translatable } from '@neovici/cosmoz-i18next';
import { mixin } from '@neovici/cosmoz-utils';
import { isEmpty } from '@neovici/cosmoz-utils/lib/template.js';
import { getEffectiveChildrenLegacyMixin } from './get-effective-children-legacy-mixin';

const PROPERTY_HASH_PARAMS = ['sortOn', 'groupOn', 'descending', 'groupOnDescending'];

/**
 * @polymer
 * @customElement
 * @appliesMixin translatable
 * @group Cosmoz Elements
 * @element cosmoz-omnitable
 * @demo demo/index.html
 */

class Omnitable extends mixin({ isEmpty }, getEffectiveChildrenLegacyMixin(translatable(PolymerElement))) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		const template = html`
		<style include="cosmoz-omnitable-styles">
			/* polymer-cli v1.7.x linter breaks with empty line */
		</style>

		<cosmoz-page-location id="location" route-hash="{{ _routeHash }}"></cosmoz-page-location>

		<div class="mainContainer">
			<div class="header" id="header">
				<div class="selectAllCheckbox" hidden$="[[ !_dataIsValid ]]">
					<paper-checkbox checked$="{{ _allSelected }}" on-change="_onAllCheckboxChange" hidden$="[[ !_dataIsValid ]]">
					</paper-checkbox>
				</div>
				<cosmoz-omnitable-header-row columns="[[ visibleColumns ]]" group-on-column="[[ groupOnColumn ]]"></cosmoz-omnitable-header-row>
			</div>
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
					<cosmoz-grouped-list id="groupedList"
						data="{{ sortedFilteredGroupedItems }}"
						selected-items="{{ selectedItems }}"
						highlighted-items="{{ highlightedItems }}"
						display-empty-groups="[[ displayEmptyGroups ]]"
						compare-items-fn="[[ compareItemsFn ]]"
					>
						<template slot="templates" data-type="item">
							<div class="item-row-wrapper">
								<div selected$="[[selected]]" class="itemRow" highlighted$="[[highlighted]]">
									<div class="selectItemCheckbox" hidden$="[[ !_dataIsValid ]]">
										<paper-checkbox checked="{{ selected }}" on-change="_onItemCheckboxChange"></paper-checkbox>
									</div>
									<cosmoz-omnitable-item-row columns="[[ visibleColumns ]]"
										selected="{{ selected }}" expanded="{{ expanded }}" item="[[ item ]]" group-on-column="[[ groupOnColumn ]]">
									</cosmoz-omnitable-item-row>
									<div class="item-expander" hidden="[[ isEmpty(disabledColumns.length) ]]">
										<paper-icon-button icon="[[ _getFoldIcon(expanded) ]]" on-tap="_toggleItem"></paper-icon-button>
									</div>
								</div>
								<cosmoz-omnitable-item-expand columns="[[ disabledColumns ]]"
									item="[[item]]" selected="{{ selected }}" expanded="{{ expanded }}" group-on-column="[[ groupOnColumn ]]">
								</cosmoz-omnitable-item-expand>
							</div>
						</template>
						<template slot="templates" data-type="group">
							<div class$="[[ _getGroupRowClasses(folded) ]]">
								<div class="selectGroupCheckbox" hidden$="[[ !_dataIsValid ]]">
									<paper-checkbox checked="{{ selected }}" on-change="_onGroupCheckboxChange"></paper-checkbox>
								</div>

								<h3 class="groupRow-label">
									<div><span>[[ groupOnColumn.title ]]</span>: &nbsp;</div>
									<cosmoz-omnitable-group-row column="[[ groupOnColumn ]]" item="[[ item.items.0 ]]" selected="[[ selected ]]" folded="[[ folded ]]">
									</cosmoz-omnitable-group-row>
								</h3>
								<div>[[ item.items.length ]]</div>
								<paper-icon-button icon="[[ _getFoldIcon(folded) ]]" on-tap="_toggleGroup"></paper-icon-button>
							</div>
						</template>
					</cosmoz-grouped-list>
				</div>
			</div>
			<div class="footer">
				<div class="footer-controls">
					<div class="footer-control">
						<paper-dropdown-menu id="groupOnSelector" vertical-align="bottom"
							horizontal-align="left" label="[[ _('Group on', t) ]] [[ _computeSortDirection(groupOnDescending, t) ]]">
							<paper-listbox class="dropdown-content menu" slot="dropdown-content" selected="{{ groupOn }}" attr-for-selected="data-group-on">
								<cosmoz-omnitable-item data-group-on style="font-style: italic" label="[[ _('No grouping', t) ]]"></cosmoz-omnitable-item>
								<template is="dom-repeat" items="[[ columns ]]" as="column">
									<cosmoz-omnitable-item data-group-on$="[[ column.name ]]"
										hidden$="[[ !column.groupOn ]]" label="[[ column.title ]]" on-tap="_applySortingDirection">
									</cosmoz-omnitable-item>
								</template>
							</paper-listbox>
						</paper-dropdown-menu>
					</div>
					<div class="footer-control">
						<paper-dropdown-menu id="sortOnSelector" vertical-align="bottom"
							horizontal-align="right" label="[[_('Sort on', t)]] [[ _computeSortDirection(descending, t) ]]">
							<paper-listbox slot="dropdown-content" class="dropdown-content menu" attr-for-selected="data-name" selected="{{ sortOn }}">
								<cosmoz-omnitable-item data-name label="[[ _('No sorting', t) ]]"></cosmoz-omnitable-item>
								<template is="dom-repeat" items="[[ columns ]]" as="column">
									<cosmoz-omnitable-item hidden$="[[ !column.sortOn ]]"
										data-name$="[[ column.name ]]" label="[[ column.title ]]" on-tap="_applySortingDirection">
									</cosmoz-omnitable-item>
								</template>
							</paper-listbox>
						</paper-dropdown-menu>
					</div>
				</div>
				<div class="footer-tableStats">
					<span>[[ ngettext('{0} group', '{0} groups', _groupsCount, t) ]]</span>
					<span>[[ ngettext('{0} row', '{0} rows', filteredItems.length, t) ]]</span>
				</div>
				<cosmoz-bottom-bar id="bottomBar" class="footer-actionBar" match-parent
					on-action="_onAction" active$="[[ !isEmpty(selectedItems.length) ]]" computed-bar-height="{{ computedBarHeight }}">
					<slot name="info" slot="info">[[ ngettext('{0} selected item', '{0} selected items', selectedItems.length, t) ]]</slot>
					<slot name="actions" id="actions"></slot>
					<!-- These slots are needed by cosmoz-bottom-bar
						as it might change the slot of the actions to distribute them in the menu -->
					<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
					<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
					<paper-menu-button id="extraMenu" slot="extra" no-animations
						vertical-offset="[[ computedBarHeight ]]" vertical-align="bottom" horizontal-align="right">
						<paper-icon-button id="dropdownExtraButton" class="dropdown-trigger" slot="dropdown-trigger" icon="file-download" toggles raised>
						</paper-icon-button>
						<paper-listbox id="dropdownExtra" class="dropdown-content" slot="dropdown-content">
							<span id="listboxSizer"></span>
							<paper-button on-click="_saveAsCsvAction">[[ _('Save as CSV', t) ]]</paper-button>
							<paper-button on-click="_saveAsXlsxAction">[[ _('Save as XLSX', t) ]]</paper-button>
							<slot name="download-menu"></slot>
						</paper-listbox>
					</paper-menu-button>

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

	static get is() {
		return 'cosmoz-omnitable';
	}

	/* eslint-disable-next-line max-lines-per-function */
	static get properties() {
		return {

			/**
		 * Filename when saving as CSV
		 */
			csvFilename: {
				type: String,
				value: 'omnitable.csv'
			},

			/**
		 * Filename when saving as XLSX
		 */
			xlsxFilename: {
				type: String,
				value: 'omnitable.xlsx'
			},

			/**
		 * Sheet name when saving as XLSX
		 */
			xlsxSheetname: {
				type: String,
				value: 'Omnitable'
			},

			/**
		 * Array used to list items.
		 */
			data: {
				type: Array
			},

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
				computed: '_computeDataValidity(data.*)'
			},

			/**
		 * If set to true, then group a row will be displayed for groups that contain no items.
		 */
			displayEmptyGroups: {
				type: Boolean,
				value: false
			},

			/**
		 * Specific columns to enable
		 */
			enabledColumns: {
				type: Array,
				observer: '_debounceUpdateColumns'
			},

			/**
		 * Whether bottom-bar has actions.
		 */
			hasActions: {
				type: Boolean,
				value: false
			},

			/**
		 * Shows a loading overlay to indicate data will be updated
		 */
			loading: {
				type: Boolean,
				value: false
			},

			/**
		 * List of selected rows/items in `data`.
		 */
			selectedItems: {
				type: Array,
				notify: true
			},

			highlightedItems: {
				type: Array,
				notify: true
			},

			descending: {
				type: Boolean,
				value: false,
				notify: true
			},

			sortOn: {
				type: String,
				value: '',
				notify: true
			},

			sortOnColumn: {
				type: Object,
				computed: '_getColumn(sortOn, "name", columns)'
			},

			groupOnDescending: {
				type: Boolean,
				value: false,
				observer: '_debounceGroupItems'
			},
			/**
		 * The column name to group on.
		 */
			groupOn: {
				type: String,
				notify: true,
				value: ''
			},

			/**
		 * The column that matches the current `groupOn` value.
		 */
			groupOnColumn: {
				type: Object,
				notify: true,
				observer: '_groupOnColumnChanged',
				computed: '_getColumn(groupOn, "name", columns)'
			},

			/**
		 * Items matching current set filter(s)
		 */
			filteredItems: {
				type: Array,
				observer: '_debounceGroupItems',
				value: () => []
			},

			/**
		 * Grouped items structure after filtering.
		 */
			filteredGroupedItems: {
				type: Array
			},

			/**
		 * Sorted items structure after filtering and grouping.
		 */
			sortedFilteredGroupedItems: {
				type: Array,
				notify: true
			},

			/**
		 * Keep track of width-changes to identify if we go bigger or smaller
		 */
			_previousWidth: {
				type: Number,
				value: 0
			},

			_groupsCount: {
				type: Number,
				value: 0
			},

			/**
		 * List of columns definition for this table.
		 */
			columns: {
				type: Array,
				notify: true
			},

			visible: {
				type: Boolean,
				notify: true,
				readOnly: true,
				value: false,
				observer: 'visibleChanged'
			},

			/**
		 * List of <b>visible</b> columns.
		 */
			visibleColumns: {
				type: Array,
				notify: true,
				observer: '_visibleColumnsChanged'
			},

			disabledColumns: {
				type: Array,
				notify: true
			},

			_filterIsTooStrict: {
				type: Boolean,
				computed: '_computeFilterIsTooStrict(_dataIsValid, sortedFilteredGroupedItems.length)'
			},

			hashParam: {
				type: String
			},

			_routeHash: {
				type: Object

			},
			_routeHashKeyRule: {
				type: RegExp,
				computed: '_computeRouteHashKeyRule(hashParam)'
			},

			/**
			 * True when all items are selected.
			 */
			_allSelected: {
				type: Boolean
			},
			computedBarHeight: {
				type: Number
			}
		};
	}

	static get observers() {
		return [
			'_dataChanged(data.*)',
			'_debounceSortItems(sortOn, descending, filteredGroupedItems)',
			'_selectedItemsChanged(selectedItems.*)'
		];
	}

	constructor() {
		super();

		this.disabledColumnsIndexes = null;

		this.debouncers = {};
		this._adjustColumns = this._adjustColumns.bind(this);
		this._updateColumns = this._updateColumns.bind(this);
		this._filterItems = this._filterItems.bind(this);
		this._groupItems = this._groupItems.bind(this);
		this._sortFilteredGroupedItems = this._sortFilteredGroupedItems.bind(this);
		this._resizeObserver = new ResizeObserver(this._onResize.bind(this));
	}

	connectedCallback() {
		super.connectedCallback();
		/** WARNING: we do not support columns changes yet. */
		// `isOmnitableColumn` is a property from cosmoz-omnitable-column-behavior
		this._columnObserver = new FlattenedNodesObserver(this.$.columnsSlot, info => {
			const colFilter = child => child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn,
				addedColumns = info.addedNodes.filter(colFilter),
				removedColumns = info.removedNodes.filter(colFilter),
				changedColumns = addedColumns.concat(removedColumns);

			if (changedColumns.length === 0) {
				return;
			}

			this._setColumnValues(addedColumns);

			this._debounceUpdateColumns();
		});

		this.$.groupedList.scrollTarget = this.$.scroller;
		this.addEventListener('cosmoz-column-hidden-changed', this._debounceUpdateColumns);
		this.addEventListener('cosmoz-column-disabled-changed', this._debounceUpdateColumns);

		this.addEventListener('update-item-size', this._onUpdateItemSize);
		this.addEventListener('cosmoz-column-title-changed', this._onColumnTitleChanged);
		this.addEventListener('cosmoz-column-filter-changed', this._filterChanged);
		this.addEventListener('cosmoz-column-editable-changed', this._onColumnEditableChanged);
		this.addEventListener('cosmoz-column-values-update', this._onColumnValuesUpdate);
		this._fitDropdowns();
		this._resizeObserver.observe(this);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this._columnObserver) {
			this._columnObserver.disconnect();
			this._columnObserver = null;
		}

		this.removeEventListener('cosmoz-column-hidden-changed', this._debounceUpdateColumns);
		this.removeEventListener('cosmoz-column-disabled-changed', this._debounceUpdateColumns);
		// Just in case we get detached before a planned debouncer has not run yet.
		this._cancelDebouncers();

		this.removeEventListener('update-item-size', this._onUpdateItemSize);
		this.removeEventListener('cosmoz-column-title-changed', this._onColumnTitleChanged);
		this.removeEventListener('cosmoz-column-filter-changed', this._filterChanged);
		this.removeEventListener('cosmoz-column-editable-changed', this._onColumnEditableChanged);
		this.removeEventListener('cosmoz-column-values-update', this._onColumnValuesUpdate);
		this._resizeObserver.unobserve(this);
	}

	flush() {
		// NOTE: in some instances flushing a debouncer causes another debouncer
		// to be set, so we must test each debouncer independently and in this order
		if (this.debouncers._adjustColumnsDebouncer) {
			this.debouncers._adjustColumnsDebouncer.flush();
		}

		if (this.debouncers._updateColumnsDebouncer) {
			this.debouncers._updateColumnsDebouncer.flush();
		}

		if (this.debouncers._filterItemsDebouncer) {
			this.debouncers._filterItemsDebouncer.flush();
		}

		if (this.debouncers._groupItemsDebouncer) {
			this.debouncers._groupItemsDebouncer.flush();
		}

		if (this.debouncers._sortItemsDebouncer) {
			this.debouncers._sortItemsDebouncer.flush();
		}
	}

	_cancelDebouncers() {
		Object.values(this.debouncers).forEach(d => d.cancel());
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
		return `(${ direction })`;
	}

	visibleChanged(turnedVisible) {
		if (turnedVisible) {
			this._debounceUpdateColumns();
		}
	}

	_visibleColumnsChanged() {
		this.disabledColumns = [];
		this._disabledColumnsIndexes = [];
	}

	_onUpdateItemSize(event) {
		const { detail } = event;
		if (detail && detail.item) {
			this.$.groupedList.updateSize(detail.item);
		}
		event.stopPropagation();
	}

	_onColumnTitleChanged(event) {

		event.stopPropagation();

		if (!Array.isArray(this.columns)) {
			return;
		}

		const column = event.target,
			columnIndex = this.columns.indexOf(column);

		// re-notify column change to make dom-repeat re-render menu item title
		this.notifyPath(['columns', columnIndex, 'title']);

		if (column === this.groupOnColumn) {
			this.notifyPath(['groupOnColumn', 'title']);
		}
	}

	_onColumnEditableChanged(event) {
		event.stopPropagation();
		const { detail: { column }} = event,
			{ visibleColumns: columns } = this;

		if (!Array.isArray(columns) || columns.length === 0) {
			return;
		}

		const index = columns.indexOf(column);
		if (index < 0) {
			return;
		}
		this.notifyPath(['visibleColumns', index, 'editable']);
	}

	// Handle selection/deselection of a group
	_onGroupCheckboxChange(event) {
		const group = event.model.item,
			selected = this.$.groupedList.isGroupSelected(group);

		this.$.groupedList.toggleSelectGroup(group, selected);

		event.preventDefault();
		event.stopPropagation();
	}

	// Handle selection/deselection of an item
	_onItemCheckboxChange(event) {
		const item = event.model.item;
		if (this.isItemSelected(item)) {
			this.deselectItem(item);
		} else {
			this.selectItem(item);
		}

		event.preventDefault();
		event.stopPropagation();
	}

	_itemRowTapped(event) {
		const item = event.model.item;
		this.highlight(item, this.isItemHighlighted(item));
	}

	_onResize([entry]) {
		const hidden = entry.borderBoxSize?.[0]?.blockSize === 0 || entry.contentRect?.height === 0;
		this._setVisible(!hidden);
		if (hidden) {
			return;
		}
		this.$.groupedList.$.list._render();
		this._debounceAdjustColumns();
	}

	_getItemUpdateEffects(splices) {
		return splices.reduce((acc, splice) => {
			if (acc.refilter) {
				return acc;
			}
			const itemsReplaced = splice.type === 'splice' && splice.addedCount === splice.removed.length;
			if (!itemsReplaced) {
				acc.refilter = true;
				return acc;
			}
			const filterFunctions = this.columns
					.map(col => col.getFilterFn())
					.filter(fn => fn !== undefined),
				comparer = (oldItem, newItem, path) =>
					this.get(path, oldItem) !== this.get(path, newItem);

			splice.removed.some((oldItem, index) => {
				const newItem = splice.object[splice.index + index];
				if (!acc.refilter) {
					const wasFiltered = this.filteredItems.includes(oldItem),
						isFiltered = filterFunctions.every(filterFn => filterFn(newItem));
					acc.refilter = wasFiltered !== isFiltered;
					if (acc.refilter) {
						return true;
					}
				}
				acc.regroup = acc.regroup || !!this.groupOnColumn && comparer(oldItem, newItem, this.groupOnColumn.valuePath);
				acc.resort = acc.regroup || acc.resort || !!this.sortOnColumn && comparer(oldItem, newItem, this.sortOnColumn.valuePath);
				return false;
			});
			return acc;
		}, {
			refilter: false,
			regroup: false,
			resort: false
		});
	}

	_dataChanged(notify) {
		if (!Array.isArray(this.columns) || notify == null || notify.path === 'data.length') {
			return;
		}
		this._setColumnValues();

		if (notify.path !== 'data.splices') {
			this._debounceFilterItems();
			return;
		}
		const effects = this._getItemUpdateEffects(notify.value.indexSplices);
		if (effects.refilter) {
			this._debounceFilterItems();
		} else if (effects.regroup) {
			this._debounceGroupItems();
		} else if (effects.resort) {
			this._debounceSortItems();
		}
	}

	_debounceUpdateColumns() {
		this._debounce('_updateColumnsDebouncer', this._updateColumns, timeOut.after(10));
	}

	/* eslint-disable-next-line max-lines-per-function, max-statements */
	_updateColumns() {
		if (!this.isConnected) {
			return;
		}

		this._setVisible(this.offsetParent != null);

		if (!this.visible) {
			return;
		}

		// NOTE: it's important to get all children, including those projected in slots
		let columns = this.getEffectiveChildren().filter((child, index) => {
				child.__index = index;
				// filter only omnitable columns
				return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn
					// filter out elements that are hidden
					&& !child.hidden;
			}),
			valuePathNames;

		const columnNames = columns.map(c => c.name);

		if (Array.isArray(this.enabledColumns)) {
			columns = columns.filter(column =>
				this.enabledColumns.indexOf(column.name) !== -1
			);
		} else {
			columns = columns.filter(column => !column.disabled);
		}

		const columnsChanged = !Array.isArray(this.columns) ||
			this.columns.length !== columns.length ||
			this.columns.some(col => columns.indexOf(col) === -1);

		if (!columns || columns.length === 0 || !columnsChanged) {
			return;
		}

		this._verifyColumnSetup(columns, columnNames);

		columns.forEach((column, index) => {
			if (!column.name) {
				// No name set; Try to set name attribute via valuePath
				if (!valuePathNames) {
					valuePathNames = columns.map(c => c.valuePath);
				}
				const hasUniqueValuePath = valuePathNames.indexOf(column.valuePath) === valuePathNames.lastIndexOf(column.valuePath);
				if (hasUniqueValuePath && columnNames.indexOf(column.valuePath) === -1) {
					column.name = column.valuePath;
				}
			}
			column.columnIndex = index;
		});

		if (!Array.isArray(this.columns) || this.columns.length === 0) {
			this._setColumnValues(columns);
		}

		this.columns = columns;
		this._updateParamsFromHash();
		this.visibleColumns = columns.slice();

		if (Array.isArray(this.data)) {
			this._debounceFilterItems();
		}
	}
	/**
	 * Checks if the column setup is valid and logs errors.
	 * As a separate functions to make testing easier.
	 * @param {any} columns The columns.
	 * @param {any} columnNames The column names.
	 * @returns {Boolean} True if setup is valid.
	 */
	_verifyColumnSetup(columns, columnNames = columns.map(c => c.name)) {
		// Check if column names are set and unique
		const columnsMissingNameAttribute = columns
			.filter(column => {
				const name = column.name;
				if (!name) {
					// eslint-disable-next-line no-console
					console.error('The name attribute needs to be set on all columns! Missing on column', column.title, column);
					return false;
				}
				return columnNames.indexOf(name) !== columnNames.lastIndexOf(name);
			});

		columnsMissingNameAttribute.forEach(column => {
			// eslint-disable-next-line no-console
			console.error('The name attribute needs to be unique among all columns! Not unique on column', column.title, column);
		});

		return columnsMissingNameAttribute.length === 0;
	}

	_onColumnValuesUpdate({ detail }) {
		if (detail == null || detail.column == null) {
			return;
		}
		this._setColumnValues([detail.column]);
	}
	// TODO: provides a mean to avoid setting the values for a column
	// TODO: should process (distinct, sort, min, max) the values at the column level depending on the column type
	_setColumnValues(columns = this.columns) {
		if (!Array.isArray(this.data) || this.data.length < 1 || !Array.isArray(columns) || columns.length < 1) {
			return;
		}
		columns.forEach(column => {
			if (!column.bindValues || column.externalValues) {
				return;
			}

			if (!column.valuePath) {
				// eslint-disable-next-line no-console
				console.error('value path is not defined for column', column, 'with bindValues');
				return;
			}

			column.set('values', this.data
				.map(item => this.get(column.valuePath, item))
				.filter((value, index, self) =>
					value != null && self.indexOf(value) === index
				)
			);
		});
	}
	/*
	 * Returns a column based on an attribute.
	 * @param {String} attributeValue The value of the column attribute.
	 * @param {String} attribute The attribute name of the column.
	 * @returns {Object} The found column.
	 */
	_getColumn(attributeValue, attribute = 'name', columns = this.columns) {
		if (!attributeValue || !columns) {
			return;
		}
		const column = columns.find(column => column[attribute] === attributeValue);
		if (!column) {
			// eslint-disable-next-line no-console
			console.warn(`Cannot find column with ${ attribute } ${ attributeValue }`);
		}
		return column;
	}

	_filterChanged({ detail }) {
		if (!Array.isArray(this.columns) || this.columns.length < 1 || this.columns.indexOf(detail.column) < 0) {
			return;
		}
		this._debounceFilterItems();
		this._filterForRouteChanged(detail.column);
	}

	_debounceFilterItems() {
		this._debounce('_filterItemsDebouncer', this._filterItems);
	}

	_filterItems() {
		if (Array.isArray(this.data) && this.data.length > 0 && Array.isArray(this.columns)) {
			// Call filtering code only on columns that has a filter
			const filterFunctions = this.columns
				.map(col => col.getFilterFn())
				.filter(fn => fn !== undefined);

			if (filterFunctions.length) {
				this.filteredItems = this.data.filter(item =>
					filterFunctions.every(filterFn => filterFn(item))
				);
			} else {
				this.filteredItems = this.data.slice();
			}
		} else {
			this.filteredItems = [];
			this.filteredGroupedItems = [];
			this.sortedFilteredGroupedItems = [];
			this._groupsCount = 0;
		}
	}

	_groupOnColumnChanged(column) {
		if (column && column.hasFilter()) {
			column.resetFilter();
		} else {
			this._debounce('_groupItemsDebouncer', this._groupItems);
		}
	}

	_debounceGroupItems() {
		if (!this.isConnected || !Array.isArray(this.filteredItems)) {
			return;
		}
		this._debounce('_groupItemsDebouncer', this._groupItems);
	}

	/* eslint-disable-next-line max-statements */
	_groupItems() {
		// do not attempt to group items if no columns are defined
		if (!Array.isArray(this.columns) || this.columns.length === 0) {
			return;
		}

		this._updateRouteParam('groupOn');

		if (!Array.isArray(this.filteredItems) || this.filteredItems.length === 0) {
			this.filteredGroupedItems = [];
			this.sortedFilteredGroupedItems = [];
			this._groupsCount = 0;
			return;
		}

		const groupOnColumn = this.groupOnColumn;

		if (!groupOnColumn || !groupOnColumn.groupOn) {
			this.filteredGroupedItems = this.filteredItems;
			this._groupsCount = 0;
			return;
		}

		const groups = this.filteredItems.reduce((array, item) => {
			const gval = groupOnColumn.getComparableValue(item, groupOnColumn.groupOn);

			if (gval === undefined) {
				return array;
			}

			let group = array.find(g => g.id === gval);
			if (!group) {
				group = {
					id: gval,
					name: gval,
					items: []
				};
				array.push(group);
			}
			group.items.push(item);
			return array;
		}, []);

		groups.sort((a, b) => {
			const v1 = groupOnColumn.getComparableValue(a.items[0], groupOnColumn.groupOn),
				v2 = groupOnColumn.getComparableValue(b.items[0], groupOnColumn.groupOn);

			return this._genericSorter(v1, v2);
		});

		if (this.groupOnDescending) {
			groups.reverse();
		}

		this._groupsCount = groups.length;
		this.filteredGroupedItems = groups;
	}

	_debounceSortItems() {
		if (!Array.isArray(this.data) || this.data.length < 1 || !Array.isArray(this.columns)) {
			return;
		}
		this._debounce('_sortItemsDebouncer', this._sortFilteredGroupedItems);
	}


	/* eslint-disable-next-line max-statements */
	_genericSorter(a, b) {
		if (a === b) {
			return 0;
		}

		if (a === undefined) {
			return -1;
		}

		if (b === undefined) {
			return 1;
		}

		if (typeof a === 'object' && typeof b === 'object') {
			// HACK(pasleq): worst case, compare using values converted to string
			return a.toString() < b.toString() ? -1 : 1;
		}

		if (typeof a === 'number' && typeof b === 'number') {
			return a - b;
		}

		if (typeof a === 'string' && typeof b === 'string') {
			return a < b ? -1 : 1;
		}

		if (typeof a === 'boolean' && typeof b === 'boolean') {
			return a ? -1 : 1;
		}

		// eslint-disable-next-line no-console
		console.warn('unsupported sort', typeof a, a, typeof b, b);
		return 0;
	}

	/**
	 * compareFunction for sort(), can be overridden
	 * @see Array.prototype.sort()
	 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
	 * @param {*} a First compare value
	 * @param {*} b Second compare value
	 * @returns {number} -1 if a has lower index, 0 if a and b index are same, 1 if b is lower
	*/
	sorter(a, b) {
		const v1 = this.sortOnColumn.getComparableValue(a, this.sortOnColumn.sortOn),
			v2 = this.sortOnColumn.getComparableValue(b, this.sortOnColumn.sortOn);

		return this._genericSorter(v1, v2);
	}

	/* eslint-disable-next-line max-statements */
	_sortFilteredGroupedItems() {
		if (!this.filteredGroupedItems) {
			return;
		}

		this._updateRouteParam('sortOn');
		this._updateRouteParam('descending');
		this._updateRouteParam('groupOnDescending');

		if (!this.sortOn || !this.sortOnColumn) {
			this.sortedFilteredGroupedItems = this.filteredGroupedItems;
			this._debounceAdjustColumns();
			return;
		}

		const sorter = this.sorter.bind(this);

		if (this._groupsCount > 0) {
			this.set('sortedFilteredGroupedItems', this.filteredGroupedItems
				.filter(group => Array.isArray(group.items))
				.map(group => {
					group.items.sort(sorter);
					if (this.descending) {
						group.items.reverse();
					}
					return {
						name: group.name,
						id: group.id,
						items: group.items
					};
				}));
			this._debounceAdjustColumns();
			return;
		}


		// No grouping
		this.filteredGroupedItems.sort(sorter);
		if (this.descending) {
			this.filteredGroupedItems.reverse();
		}

		this.set('sortedFilteredGroupedItems', this.filteredGroupedItems.slice());
		this._debounceAdjustColumns();
	}

	_debounceAdjustColumns() {
		// 16ms 'magic' number copied from iron-list
		// But this makes headers change width after the table has completed rendering,
		// which might look strange.
		this._debounce('_adjustColumnsDebouncer', this._adjustColumns, animationFrame);
	}
	/**
	 * Enable/disable columns to properly fit in the available space.
	 * Adjust headers width according to cells width
	 * @memberOf element/cz-omnitable
	 * @returns {Boolean} Return
	 */
	_adjustColumns() { /* eslint-disable-line max-statements */
		// Safety check, but should never happen
		if (!this.isConnected || !this.visible) {
			return;
		}

		const firstRow = this.$.groupedList.getFirstVisibleItemElement(),
			visibleData = this.sortedFilteredGroupedItems,
			hasVisibleData = Array.isArray(visibleData) && visibleData.length > 0;

		if (!hasVisibleData || !firstRow && this.$.groupedList.hasRenderedData) {
			// reset headers width
			const headerRow = this.$.header.querySelector('cosmoz-omnitable-header-row');
			Array
				.from(headerRow.children)
				.forEach(header => {
					header.style.minWidth = 'auto';
					header.style.maxWidth = 'none';
					header.style.width = 'auto';
				});
			return;
		}

		if (!firstRow) {
			// There is visible data, but nothing rendered in cosmoz-grouped-list yet.
			// Retry later.
			this._debounceAdjustColumns();
			return;
		}

		const scroller = this.$.scroller,
			currentWidth = this.$.tableContent.clientWidth,
			itemRow = firstRow.querySelector('cosmoz-omnitable-item-row'),
			cells = Array.from(itemRow.children);

		let fits = scroller.scrollWidth <= scroller.clientWidth;

		if (fits) {
			fits = cells.every(cell => cell.__column &&
				cell.__column.overflow || cell.scrollWidth <= cell.clientWidth
			);
		}

		if (fits) {
			if (this._canScaleUp(currentWidth)) {
				this._enableColumn();
				return;
			}
		} else {
			this._overflowConfig = {
				columns: this.visibleColumns.length,
				width: currentWidth
			};
			this._disableColumn();
			return;
		}

		this._adjustHeadersWidth(cells);
	}

	_adjustHeadersWidth(cells) {
		const headerRow = this.$.header.querySelector('cosmoz-omnitable-header-row'),
			headers = Array.from(headerRow.children);

		cells.forEach((cell, index) => {
			const header = headers[index];

			// disabled column headers
			if (header === undefined) {
				return;
			}

			const width = getComputedStyle(cell).getPropertyValue('width');
			header.style.minWidth = width;
			header.style.maxWidth = width === 'auto' ? 'none' : width;
			header.style.width = width;
		});
	}

	_canScaleUp(width) {
		if (!this.disabledColumns || this.disabledColumns.length === 0) {
			return false;
		}

		if (!this._overflowConfig) {
			return true;
		}

		if (width > this._overflowConfig.width) {
			return true;
		}

		if (this.visibleColumns.length + 1 < this._overflowConfig.columns) {
			return true;
		}

		return false;
	}

	_disableColumn() {
		let disabledColumn,
			disabledColumnIndex;
		// disables/hides columns that for example does not fit in the current screen size.
		this.visibleColumns.forEach((column, index) => {
			if (disabledColumn === undefined || disabledColumn.priority >= column.priority) {
				disabledColumn = column;
				disabledColumnIndex = index;
			}
		});

		if (disabledColumn) {
			this.push('disabledColumns', disabledColumn);
			this._disabledColumnsIndexes.push(disabledColumnIndex);
			this.splice('visibleColumns', disabledColumnIndex, 1);
			this._debounceAdjustColumns();
		}
	}

	_enableColumn() {
		// Columns are disabled by priority, so we can re-enable them
		const column = this.pop('disabledColumns'),
			columnIndex = this._disabledColumnsIndexes.pop();

		this.splice('visibleColumns', columnIndex, 0, column);

		this._debounceAdjustColumns();
	}

	_makeCsvField(str) {
		const result = str.replace(/"/gu, '""');
		if (result.search(/("|,|\n)/gu) >= 0) {
			return '"' + result + '"';
		}
		return str;
	}
	/**
	 * Triggers a download of selected rows as a CSV file.
	 * @returns {undefined}
	 */
	_saveAsCsvAction() {
		const separator = ';',
			lf = '\n',
			header = this.columns.map(col => this._makeCsvField(col.title)).join(separator) + lf,
			rows = this.selectedItems.map(item => {
				return this.columns.map(column => {
					const cell = column.getString(item);
					if (cell === undefined || cell === null) {
						return '';
					}
					return this._makeCsvField(String(cell));
				}).join(separator) + lf;
			});

		rows.unshift(header);

		saveAs(new File(rows, this.csvFilename, {
			type: 'text/csv;charset=utf-8'
		}));
	}

	/**
	 * Makes the data ready to be exported as XLSX.
	 * @returns {Array} data Array of prepared rows.
	 */
	_prepareXlsxData() {
		const headers = this.columns.map(col => col.title),
			data = this.selectedItems.map(item =>
				this.columns.map(column => {
					const value = column.toXlsxValue(item);
					return value == null ? '' : value;
				})
			);

		data.unshift(headers);
		return data;
	}

	/**
	 * Triggers a download of selected rows as a XLSX file.
	 * @param {Object} data The prepared rows to be saved as file with default value this._prepareXlsxData().
	 * @returns {undefined}
	 */
	_saveAsXlsxAction() {
		const data = this._prepareXlsxData(),
			xlsx = new NullXlsx(this.xlsxFilename).addSheetFromData(data, this.xlsxSheetname).generate();

		saveAs(new File([xlsx], this.xlsxFilename, {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}));
	}

	/** view functions */

	_getGroupRowClasses(folded) {
		return folded ? 'groupRow groupRow-folded' : 'groupRow';
	}
	_getFoldIcon(expanded) {
		return expanded ? 'expand-less' : 'expand-more';
	}

	/**
	 * Called if an item from the sortOn dropdown gets tapped.
	 * Reverses the descending value if the sortOn value did not change.
	 * @param {Event} e The event with the column model.
	 * @returns {undefined}
	 */
	_applySortingDirection(e) {
		const column = e.model.column,
			data = e.target.dataset,
			isGroup = data.groupOn != null,
			compareTo = isGroup ? this.groupOnColumn : this.sortOnColumn,
			property = isGroup ? 'groupOnDescending' : 'descending';

		if (column === compareTo) {
			this.set(property, !this.get(property));
			return;
		}
		this.set(property, false);
	}
	/**
	 * Toggle folding of a group
	 * @param	 {Event} event event
	 * @returns {undefined}
	 */
	_toggleGroup(event) {
		const firstRow = this.$.groupedList.getFirstVisibleItemElement(),
			{
				model: {
					folded, item
				}
			} = event;

		this.$.groupedList.toggleFold(item);

		if (!firstRow && folded) {
			this._debounceAdjustColumns();
		}
	}

	_toggleItem(event) {
		const item = event.model.item;
		this.$.groupedList.toggleCollapse(item);
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
		if (event.target === null) {
			return;
		}

		if (event.target.checked) {
			this.$.groupedList.selectAll();
		} else {
			this.$.groupedList.deselectAll();
		}
	}

	/** PUBLIC */

	suppressNextScrollReset() {
		const list = this.$.groupedList.$.list;
		// HACK: Replace _resetScrollPosition for one call to maintain scroll position
		if (list._scrollTop > 0) {
			const reset = list._resetScrollPosition;
			list._resetScrollPosition = () => {
				// restore hack
				list._resetScrollPosition = reset;
			};
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
		this.$.groupedList.selectItem(item);
	}

	deselectItem(item) {
		this.$.groupedList.deselectItem(item);
	}

	isItemSelected(item) {
		return this.$.groupedList.isItemSelected(item);
	}

	isItemHighlighted(item) {
		return this.$.groupedList.isItemHighlighted(item);
	}

	highlight(items, reverse) {
		if (!items) {
			return;
		}
		const gl = this.$.groupedList;
		if (Array.isArray(items)) {
			items.forEach(item => gl.highlightItem(item, reverse));
			return;
		}
		gl.highlightItem(items, reverse);
	}

	_routeHashPropertyChanged(key, value) {
		const deserialized = this._deserializeValue(value, Omnitable.properties[key].type);
		if (deserialized === this.get(key)) {
			return;
		}
		this.set(key, deserialized);
	}

	_routeHashFilterChanged(key, value) {
		const column = this.columns.find(c => c.name === key);

		if (!column) {
			// eslint-disable-next-line no-console
			console.warn('column with name', name, 'for param', key, 'not found!');
			return;
		}

		if (column === this.groupOnColumn) {
			return;
		}
		if (value === column._serializeFilter()) {
			return;
		}

		const deserialized = column._deserializeFilter(value);

		if (deserialized === null) {
			column.resetFilter();
			return;
		}
		column.set('filter', deserialized);
	}
	_computeRouteHashKeyRule(hashParam) {
		if (!hashParam) {
			return;
		}
		return new RegExp('^' + hashParam + '-(.+?)(?=(?:--|$))(?:-{2})?([A-Za-z0-9-_]+)?$', 'u');
	}
	_routeHashKeyChanged(key, value) {
		const match = key.match(this._routeHashKeyRule);

		if (!Array.isArray(match)) {
			return;
		}

		if (match[2] == null && PROPERTY_HASH_PARAMS.indexOf(match[1]) > -1) {
			this._routeHashPropertyChanged(match[1], value);
			return;
		}
		if (match[2] !== null && match[1] === 'filter') {
			this._routeHashFilterChanged(match[2], value);
		}
	}

	_updateParamsFromHash() {
		if (!this.hashParam || !this._routeHash) {
			return;
		}
		const hash = this._routeHash;
		Object.keys(hash).forEach(key => {
			this._routeHashKeyChanged(key, hash[key]);
		});
	}

	_updateRouteParam(key) {
		if (!this.hashParam || !this._routeHash) {
			return;
		}

		const path = ['_routeHash', this.hashParam + '-' + key],
			hashValue = this.get(path),
			value = this.get(key),
			serialized = this._serializeValue(value, Omnitable.properties[key].type);

		if (serialized === hashValue) {
			return;
		}
		this.set(path, serialized === undefined ? null : serialized);
	}

	_filterForRouteChanged(column) {
		if (!this.hashParam || !this._routeHash || !Array.isArray(this.data)) {
			return;
		}

		const path = ['_routeHash', this.hashParam + '-filter--' + column.name],
			hashValue = this.get(path),
			serialized = column._serializeFilter();

		if (serialized === hashValue) {
			return;
		}

		this.set(path, serialized === undefined ? null : serialized);
	}

	_fitDropdowns() {
		[this.$.groupOnSelector, this.$.sortOnSelector]
			.map(d => d.$.menuButton)
			.concat([this.$.bottomBar.$.menu])
			.forEach(button => {
				button.$.dropdown.fitInto = this;
			});
	}

	_debounce(name, fn, asyncModule = timeOut.after(0)) {
		this.debouncers[name] = Debouncer.debounce(this.debouncers[name], asyncModule, fn);
	}
}
customElements.define(Omnitable.is, Omnitable);

const tmplt = `
	<slot name="actions" slot="actions"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const
	actionSlots = litHtml([tmplt]),
	actionSlotsPolymer = html([tmplt]);
