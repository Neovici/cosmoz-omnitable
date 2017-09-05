/*global Cosmoz, Polymer, window, saveAs */
(function () {

	'use strict';

	Polymer({

		is: 'cosmoz-omnitable',

		properties: {

			/**
			 * Filename when saving as CSV
			 */
			csvFilename: {
				type: String,
				value: 'omnitable.csv'
			},

			/**
			 * List of data to display
			 */
			data: {
				type: Array
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
				observer: '_updateColumns'
			},

			/**
			 * Whether bottom-bar has actions.
			 */
			hasActions: {
				type: Boolean,
				value: false
			},

			/**
			 * Whether to show checkboxes to perform bottom-bar actions on
			 */
			_showCheckboxes: {
				type: Boolean,
				computed: '_computeShowCheckboxes(_noData, hasActions)'
			},

			/**
			 * List of selected rows/items in `data`.
			 */
			selectedItems: {
				type: Array,
				notify: true
			},

			descending: {
				type: Boolean,
				value: false
			},

			descendingText: {
				type: String,
				computed: '_computeDescendingString(_sortOn)',
				observer: '_reselectDropdownItem'
			},

			sortOn: {
				type: String
			},

			/**
			 * An object representing current sort of the table.
			 * The object must have the following propreties:
			 * - columnName: item's value path to sort on
			 * - descending: a boolean indicating of sort is done in descending order.
			 */
			_sortOn: {
				type: Object,
				value: null,
				observer: '_debounceSortItems'
			},

			// Index of the selected item in the sortOn listbox
			_sortOnSelectorSelected: {
				type: Number,
				value: 0
			},

			/**
			 * The item's value path to group on
			 */
			groupOn: {
				type: String,
				notify: true,
				value: '',
				observer: '_groupOnChanged'
			},

			/**
			 * Column that matches the current `groupOn` value.
			 */
			groupOnColumn: {
				type: Object,
				readOnly: true,
				notify: true
			},

			/**
			 * Items matching current set filter(s)
			 */
			filteredItems: {
				type: Array
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

			/**
			 * When we don't have data.
			 * Saved in its own property since `data` will be undefined at first and not trigger evaluation
			 */
			_noData: {
				type: Boolean,
				value: true
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

			/**
			 * List of <b>visible</b> columns.
			 */
			visibleColumns: {
				type: Array,
				notify: true
			},

			disabledColumns: {
				type: Array,
				notify: true
			},

			_tooStrictFilterInfo: {
				type: Boolean,
				computed: '_computeTooStrictFilterInfo(_noData, sortedFilteredGroupedItems.length)'
			}
		},

		observers: [
			'_createSortOnObject(sortOn, descending)',
			'_dataChanged(data.*)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TranslatableBehavior
		],

		listeners: {
			'iron-resize': '_onResize',
			'update-item-size': '_onUpdateItemSize'
		},

		_disabledColumnsIndexes: null,

		_scalingUp: false,

		_updateColumns: function () {
			var columns = this.getEffectiveChildren().filter(function (child, index) {
					child.__index = index;
					return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn;
				}),
				columnNames = {},
				valuePathNames;

			if (Array.isArray(this.enabledColumns)) {
				columns = columns.filter(function (column) {
					return this.enabledColumns.indexOf(column.name) !== -1;
				}, this);
			} else {
				columns = columns.filter(function (column) {
					return !column.disabled;
				});
			}

			if (!columns || columns.length === 0) {
				return;
			}

			// TODO: Un-listen from old columns ?

			this.columns = columns;

			this.columns.forEach(function (column) {
				this.listen(column, 'filter-changed', '_onColumnFilterChanged');

				// Check correct column setup
				if (column.name && columnNames[column.name]) {
					console.error('The name attribute needs to be unique among all columns! Not unique on column', column.name);
				} else

				if (!column.name){
					console.error('The name attribute needs to be set on all columns! Missing on column', column.title);
					// No name set; Try to set name attribute via valuePath
					if (!valuePathNames) {
						valuePathNames = this.columns.map(c => c.valuePath);
					}
					var hasUniqueValuePath = valuePathNames.filter(n => n === column.valuePath).length === 1;
					if (hasUniqueValuePath && !columnNames[column.valuePath]) {
						column.setAttribute('name', column.valuePath);
					}
				}

				columnNames[column.name] = true;
			}, this);

			this._updateVisibleColumns();

			if (this._webWorkerReady && this.data) {
				this._debounceFilterItems();
			}
		},

		created: function () {
			/** WARNING: we do not support columns changes yet. */
			// `isOmnitableColumn` is a property from cosmoz-omnitable-column-behavior
			this._columnObserver = Polymer.dom(this).observeNodes(function (info) {
				var changedColumns = info.addedNodes
					.concat(info.removedNodes)
					.filter(function (child) {
						return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn;
					});

				if (changedColumns.length === 0) {
					return;
				}

				this._updateColumns();
			}.bind(this));
		},

		attached: function () {
			this.$.groupedList.scrollTarget = this.$.scroller;
			this._isDetached = false;
		},

		detached: function () {
			// Just in case we get detached before a planned debouncer has not run yet.
			this.cancelDebouncer('adjustColumns');
			this._isDetached = true;
		},

		_computeDescendingString(sortOn) {
			if (!sortOn) {
				return '';
			}
			var direction = sortOn.descending ? this._('Descending') : this._('Ascending');
			return `(${direction})`;
		},

		_showSortDirection(column, sortOnChange) {
			var sortOn = sortOnChange.base;
			if (!column || !sortOn) {
				return false;
			}
			return sortOn.columnName === column.name;
		},

		_reselectDropdownItem() {
			var i = this._sortOnSelectorSelected;
			this._sortOnSelectorSelected = 0;
			this._sortOnSelectorSelected = i;
		},

		/**
		 * Called when data is changed to setup up needs and check workers/filtering
		 */
		_dataChanged: function (change) {

			this._noData = !this.data || !Array.isArray(this.data) || this.data.length < 1;

			// Since Polymer 2.0 removed key-based path and splice notifications,
			// handle data changes by reset the array.
			this._newData();
		},

		_newData: function (data) {
			if (this._webWorkerReady && this.columns) {
				this._setColumnValues();
				this._debounceFilterItems();
			}
		},

		_onUpdateItemSize: function (event, detail) {
			if (detail && detail.item) {
				this.$.groupedList.updateSize(detail.item);
			}
			event.stopPropagation();
		},

		_computeTooStrictFilterInfo: function (noData, numVisibleItems) {
			return !noData && numVisibleItems < 1;
		},

		_debounceFilterItems: function () {
			this.debounce('filterItems', this._filterItems);
		},

		_debounceGroupItems: function () {
			this.debounce('groupItems', this._groupItems);
		},

		_debounceSortItems: function () {
			if (!this.data || !this.data.length || !this._webWorkerReady || !this.columns) {
				return;
			}
			this.debounce('sortItems', this._sortFilteredGroupedItems);
		},

		_onColumnFilterChanged: function (event) {
			this._debounceFilterItems();
		},

		/**
		 * Helper method to remove an item from `data`.
		 * @param  {Object} item Item to remove
		 * @return {Object} item removed
		 */
		removeItem: function (item) {
			var removed = this.arrayDelete('data', item);
			if (removed && removed.length) {
				return removed[0];
			}
		},

		/**
		 * Remove multiple items from `data`
		 * @param {Array} an array of items to remove
		 * @return {Array} Array containing removed items
		 */
		removeItems: function (items) {
			var i,
				removedItems = [],
				removed;

			for (i = items.length - 1; i >= 0; i -= 1) {
				removed = this.arrayDelete('data', items[i]);
				if (removed) {
					removedItems = removedItems.concat(removed);
				}
			}
			return removed;
		},

		/**
		 * Turn an `action` event into a `run` event
		 * @param  {Event} event  `action` event
		 * @param  {Object} detail `action` event details
		 */
		onAction: function (event, detail) {
			detail.item.dispatchEvent(new window.CustomEvent('run', {
				bubbles: true,
				cancelable: true,
				detail: {
					omnitable: this,
					items: this.selectedItems
				}
			}));
			event.stopPropagation();
		},

		onAllCheckboxChange: function (event, detail) {

			if (event.target === null) {
				return;
			}

			var checked = event.target.checked;

			if (checked) {
				this.$.groupedList.selectAll();
			} else {
				this.$.groupedList.deselectAll();
			}

		},

		// Handle selection/deselection of a group
		_onGroupCheckboxChange: function (event) {
			var
				group = event.model.item,
				selected = this.$.groupedList.isGroupSelected(group);

			if (selected) {
				this.$.groupedList.deselectGroup(group);
			} else {
				this.$.groupedList.selectGroup(group);
			}

			event.preventDefault();
			event.stopPropagation();
		},

		// Handle selection/deselection of an item
		_onItemCheckboxChange: function (event, detail) {
			var
				item = event.model.item,
				selected = this.$.groupedList.isItemSelected(item);

			if (selected) {
				this.$.groupedList.deselectItem(item);
			} else {
				this.$.groupedList.selectItem(item);
			}

			event.preventDefault();
			event.stopPropagation();
		},

		/**
		 * Convenience method for setting a value to an item's path and notifying any
		 * element bound to this item's path.
		 */
		setItemValue: function (item, itemPath, value) {
			var dataColl = Polymer.Collection.get(this.data),
				key = dataColl.getKey(item);

			this.set('data.' + key + '.' + itemPath, value);
		},

		selectItem: function (item) {
			this.$.groupedList.selectItem(item);
		},

		deselectItem: function (item) {
			this.$.groupedList.deselectItem(item);
		},

		isItemSelected: function (item) {
			this.$.groupedList.isItemSelected(item);
		},

		/**
		 * Toggle folding of a group
		 */
		toggleGroup: function (event) {
			var firstRow = this.$.groupedList.getFirstVisibleItemElement(),
				folded = event.model.folded;

			this.$.groupedList.toggleFold(event.model);

			if (!firstRow && folded) {
				this._debounceAdjustColumns();
			}
		},

		toggleItem: function (event, detail) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},

		getFoldIcon: function (expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},

		// TODO: provides a mean to avoid setting the values for a column
		// TODO: should process (distinct, sort, min, max) the values at the column level depending on the column type
		_setColumnValues: function () {
			if (!this.data || !Array.isArray(this.data) || this.data.length < 1) {
				return;
			}
			this.columns.forEach(function (column) {
				if (!column.bindValues || column.externalValues) {
					return;
				}

				if (!column.valuePath) {
					console.error('value path is not defined for column', column, 'with bindValues');
					return;
				}

				column.set('values', this.data
					.map(function (item, index) {
						return this.get(column.valuePath, item);
					}, this)
					.filter(function (value, index, self) {
						return value !== undefined && value !== null && self.indexOf(value) === index;
					}));

			}, this);
		},
		/*
		 * Returns a column based on an attribute
		 */
		_getColumn(attributeValue, attribute = 'name') {
			if (!attributeValue) {
				return;
			}
			return this.columns.find(column => column[attribute] === attributeValue);
		},

		_groupOnChanged: function (newValue, oldValue) {
			if (this.columns) {
				this._updateVisibleColumns();
			}

			this._debounceGroupItems();
		},

		_updateVisibleColumns: function () {
			var visibleColumns = this.columns.slice();

			if (this.groupOn) {
				visibleColumns = visibleColumns.filter(function (column) {
					if (column.groupOn === this.groupOn) {
						this._setGroupOnColumn(column);
						return false;
					}
					return true;
				}, this);
			}

			this.visibleColumns = visibleColumns;
			this.disabledColumns = [];
			this._disabledColumnsIndexes = [];
		},

		_filterItems: function () {
			if (this.data && this.data.length) {
				// Call filtering code only on columns that has a filter
				var filterFunctions = this.columns
						.map(function (column) {
							return column.getFilterFn();
						})
						.filter(function (fn) {
							return fn !== undefined;
						});

				if (filterFunctions.length) {
					this.filteredItems = this.data.filter(function (item) {
						return filterFunctions.every(function (filterFn) {
							return filterFn(item);
						}, this);
					}, this);
				} else {
					this.filteredItems = this.data.slice();
				}

				this._debounceGroupItems();

			} else {
				this.filteredItems = [];
				this.filteredGroupedItems  = [];
				this.sortedFilteredGroupedItems = [];
				this._groupsCount = 0;
			}
		},

		_groupItems: function () {

			if (!this.filteredItems || this.filteredItems.length === 0) {
				this.filteredGroupedItems  = [];
				this.sortedFilteredGroupedItems = [];
				this._groupsCount = 0;
				return;
			}

			var groupOn = this.groupOn,
				groupOnColumn = this._getColumn(this.groupOn),
				groups = [],
				itemStructure = {};

			if (groupOn) {
				if (!groupOnColumn) {
					console.warn('Cannot group on ' + groupOn + ' as there is no columm configured to group on this value path.');
					return;
				}

				this.filteredItems.forEach(function (item, index) {
					var groupOnValue = groupOnColumn.getComparableValue(item, groupOn);

					if (groupOnValue !== undefined) {
						if (!itemStructure[groupOnValue]) {
							itemStructure[groupOnValue] = [];
						}
						itemStructure[groupOnValue].push(item);
					}
				}, this);

				groups = Object.keys(itemStructure).map(function (key) {
					return {
						name: key,
						id: key,
						items: itemStructure[key]
					};
				});

				groups.sort(function (a, b) {
					var
						v1 = groupOnColumn.getComparableValue(a.items[0], groupOn),
						v2 = groupOnColumn.getComparableValue(b.items[0], groupOn);

					if (typeof v1 === 'object' && typeof v2 === 'object') {
						// HACK(pasleq): worst case, compare using values converted to string
						v1 = v1.toString();
						v2 = v2.toString();
					}
					if (typeof v1 === 'number' && typeof v2 === 'number') {
						return v1 - v2;
					}
					if (typeof v1 === 'string' && typeof v2 === 'string') {
						return v1 < v2 ? -1 : 1;
					}
					if (typeof v1 === 'boolean' && typeof v2 === 'boolean') {
						if (v1 === v2) {
							return 0;
						}
						return v1 ? -1 : 1;
					}

					return 0;
				});

				this._groupsCount = groups.length;

			} else {
				groups = this.filteredItems;
				this._groupsCount = 0;
			}

			this.filteredGroupedItems = groups;

			this._debounceSortItems();
		},

		_sortFilteredGroupedItems: function () {
			if (!this.filteredGroupedItems) {
				return;
			}

			var sortOn = this._sortOn,
				sortOnColumn = this._getColumn(this._sortOn ? this._sortOn.columnName : null),
				items = [],
				numGroups = this.filteredGroupedItems.length,
				mappedItems,
				results = 0,
				itemMapper;

			if (!sortOn || !sortOnColumn) {
				this.sortedFilteredGroupedItems = this.filteredGroupedItems;
				this._debounceAdjustColumns();
				return;
			}

			itemMapper = function (item, originalItemIndex) {
				return {
					index: originalItemIndex,
					value: sortOnColumn.getComparableValue(item, sortOn.columnName)
				};
			};
			if (this._groupsCount > 0) {
				this.filteredGroupedItems
					.filter(function (group) {
						return group.items && group.items.map;
					})
					.forEach(function (group, index) {
						// create a reduced version of the items array to transfer to the worker
						// with item index and property to sort on
						mappedItems = group.items.map(itemMapper, this);

						// Sort the reduced version of the array
						this.$.sortWorker.process({
							meta: {
								groupName: group.name,
								groupId: group.id,
								index: index
							},
							reverse: sortOn.descending,
							sortOn: 'value',
							data: mappedItems
						}, function (data) {
							results += 1;
							items[data.meta.index] = {
								name: data.meta.groupName,
								id: data.meta.groupId
							};
							items[data.meta.index].items = data.data.map(function (item, index) {
								return group.items[item.index];
							});
							if (results === numGroups) {
								this.set('sortedFilteredGroupedItems', items);
								this._debounceAdjustColumns();
							}
						}.bind(this));
					}, this);
			} else {
				// No grouping
				mappedItems = this.filteredGroupedItems.map(itemMapper, this);

				this.$.sortWorker.process({
					reverse: sortOn.descending,
					sortOn: 'value',
					data: mappedItems
				}, function (data) {
					// If this omnitable was detached while the web worker was working,
					// we can't do anything with the sort result.
					// We should definitively not call _debounceAdjustColumns,
					// as this will result in a reference to this omnitable being kept
					// in Polymer debouncers list.
					if (this._isDetached) {
						return;
					}

					this.set('sortedFilteredGroupedItems', data.data.map(function (item, index){
						return this.filteredGroupedItems[item.index];
					}, this));
					this._debounceAdjustColumns();
				}.bind(this));
			}
		},

		// TODO(pasleq): re-implement expand/collapse of single item
		_computeIcon: function (item, expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},

		_computeShowCheckboxes: function (noData, hasActions) {
			return !noData && hasActions;
		},

		// TODO(pasleq): re-implement expand/collapse of single item
		toggleExtraColumns: function (event, detail) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},

		_onResize: function (event) {
			this._debounceAdjustColumns();
		},

		_debounceAdjustColumns: function () {
			// 16ms 'magic' number copied from iron-list
			// But this makes headers change width after the table has completed rendering,
			// which might look strange.
			this.debounce('adjustColumns', this._adjustColumns, 16);
		},

		/**
		 * True if the current list is visible.
		 */
		get _isVisible() {
			return Boolean(this.offsetWidth || this.offsetHeight);
		},

		/**
		 * Enable/disable columns to properly fit in the available space.
		 * Adjust headers width according to cells width
		 *
		 * @memberOf element/cz-omnitable
		 */
		_adjustColumns: function () {
			var firstRow,
				fits,
				cells,
				currentWidth,
				scroller,
				itemRow,
				hasVisibleData,
				visibleData,
				headerRow,
				headers;

			// Safety check, but should never happen
			if (this._isDetached || !this._isVisible) {
				return;
			}

			visibleData = this.sortedFilteredGroupedItems;
			hasVisibleData = visibleData && Array.isArray(visibleData) && visibleData.length > 0;
			firstRow = this.$.groupedList.getFirstVisibleItemElement();
			if (!hasVisibleData || !firstRow && this.$.groupedList.hasRenderedData) {
				// reset headers width
				headerRow = Polymer.dom(this.$.header).querySelector('cosmoz-omnitable-header-row');
				headers = Polymer.dom(headerRow).children;
				headers.forEach(function (header) {
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

			scroller = this.$.scroller;
			fits = scroller.scrollWidth <= scroller.clientWidth;
			currentWidth = this.$.tableContent.clientWidth;
			itemRow = Polymer.dom(firstRow).querySelector('cosmoz-omnitable-item-row');
			cells = Polymer.dom(itemRow).children;

			if (fits) {
				fits = cells.every(function (cell) {
					return cell.__column.overflow || cell.scrollWidth <= cell.clientWidth;
				});
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
		},

		_adjustHeadersWidth: function (cells) {
			var headerRow = Polymer.dom(this.$.header).querySelector('cosmoz-omnitable-header-row'),
				headers = Polymer.dom(headerRow).children;

			cells.forEach(function (cell, index) {
				var header = headers[index],
					cellWidth;

				// disabled column headers
				if (header === undefined) {
					return;
				}

				cellWidth = getComputedStyle(cell).getPropertyValue('width');
				header.style.minWidth = cellWidth;
				header.style.maxWidth = cellWidth === 'auto' ? 'none' : cellWidth;
				header.style.width = cellWidth;
			}, this);
		},

		_canScaleUp: function (width) {

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
		},

		_disableColumn: function () {
			var disabledColumn,
				disabledColumnIndex;
			// disables/hides columns that for example does not fit in the current screen size.
			this.visibleColumns.forEach(function (column, index) {
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
		},

		_enableColumn: function () {

			// Columns are disabled by priority, so we can re-enable them
			var column = this.pop('disabledColumns'),
				columnIndex = this._disabledColumnsIndexes.pop();

			this.splice('visibleColumns', columnIndex, 0, column);

			this._debounceAdjustColumns();
		},

		//TODO: Use cosmoz-behaviors
		/**
		 * Helper method for Polymer 1.0+ templates - check if variable
		 * is undefined, null, empty Array list or empty String.
		 * @param  {Object}  obj variable
		 * @return {Boolean}  true if "empty", false otherwise
		 * @memberOf element/cz-omnitable
		 */
		isEmpty: function (obj) {
			if (obj === undefined || obj === null) {
				return true;
			}
			if (obj instanceof Array && obj.length === 0) {
				return true;
			}
			var objType = typeof obj;
			if (objType === 'string' && obj.length === 0) {
				return true;
			}
			if (objType === 'number' && obj === 0) {
				return true;
			}
			return false;
		},

		_computeItemRowClasses: function (selected) {
			return selected ?  'itemRow itemRow-selected' : 'itemRow';
		},

		_computeItemRowCellClasses: function (column, columnIndex) {
			var originalIndex = this.columns.indexOf(column);
			return 'itemRow-cell'
				+ (column.cellClass ? ' ' + column.cellClass + ' ' : '')
				+ ' cosmoz-omnitable-column-' + originalIndex;
		},

		_computeGroupRowClasses: function (folded) {
			return folded ? 'groupRow groupRow-folded' : 'groupRow';
		},

		_onWebWorkerReady: function () {
			this._webWorkerReady = true;
			if (this.data && this.columns) {
				this._setColumnValues();
				this._debounceFilterItems();
			}
		},
		/**
		 * Called when a item from the sortOn dropdown is activated (tap)
		 */
		_sortItemTapped: function (event) {
			var column = event.model ? event.model.column : undefined,
				descending = this._sortOn && this._sortOn.columnName === column.sortOn ? !this._sortOn.descending : false;
			this.set('_sortOn', {columnName: column.sortOn, descending: descending});
		},

		_createSortOnObject(columnName, descending) {
			this.set('_sortOn', {columnName: columnName, descending: descending});
			this._selectSortSelectorItem(columnName);
		},

		_selectSortSelectorItem(value, dataAttribute = 'name') {
			this._sortOnSelectorSelected = this.$.sortOnSelector.items.findIndex(item => item.dataset[dataAttribute] === value);
		},

		_makeCsvField: function (str) {
			var result = str.replace(/"/g, '""');
			if (result.search(/("|,|\n)/g) >= 0) {
				return '"' + result + '"';
			}
			return str;
		},

		saveAsCsvAction: function (event) {
			var separator = ';',
				lf = '\n',
				header = this.columns.map(function (column) {
					return this._makeCsvField(column.title);
				}, this).join(separator) + lf,
				rows = this.selectedItems.map(function (item) {
					return this.columns.map(function (column) {
						var cell = column.getString(item);
						if (cell === undefined || cell === null) {
							cell = '';
						}
						return this._makeCsvField(String(cell));
					}, this).join(separator) + lf;
				}, this);

			rows.unshift(header);

			saveAs(new File(rows, this.csvFilename, {
				type: 'text/csv;charset=utf-8'
			}));
		}

	});
}());
