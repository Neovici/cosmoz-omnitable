/*global Cosmoz, Polymer, window */
(function () {

	'use strict';

	Polymer({

		is: 'cosmoz-omnitable',

		properties: {

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
			 * Whether to display checkboxes for item selection, and to make use of the bottom-bar for selection actions.
			 * Will be enabled automatically if one or more elements has the attribute `action` set in the light DOM.
			 */
			selectionEnabled: {
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

			/**
			 * An object representing current sort of the table.
			 * The object must have the following propreties:
			 * - valuePath: item's value path to sort on
			 * - descending: a boolean indicating of sort is done in descending order.
			 */
			sortOn: {
				type: Object,
				value: null
			},

			// Index of the selected item in the sortOn listbox
			_sortOnSelectorSelected: {
				type: Number
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
			}
		},

		observers: [
			'_sortOnChanged(sortOn.*)',
			'_dataChanged(data.*)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TranslatableBehavior
		],

		listeners: {
			'iron-resize': '_onResize'
		},

		_disabledColumnsIndexes: null,

		_scalingUp: false,

		created: function () {
			/** WARNING: we do not support columns changes yet. */
			this._columnObserver = Polymer.dom(this).observeNodes(function (info) {
				var
					columns = [],
					children = this.getEffectiveChildren(),
					i,
					child;

				for (i = 0 ; i < children.length; i+= 1) {
					child = children[i];
					// `isOmnitableColumn` is a property from cosmoz-omnitable-column-behavior
					if (child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn) {
						columns.push(child);
					}
				}
				if (columns && columns.length > 0) {

					this.columns = columns;

					this.columns.forEach(function (column) {
						this.listen(column, 'filter-changed', '_onColumnFilterChanged');
					}, this);

					this._updateVisibleColumns();

					if (this._webWorkerReady && this.data) {
						this._debounceFilterItems();
					}
				}
			}.bind(this));
		},

		attached: function () {
			var hasActions = Polymer.dom(this.$.actions).getDistributedNodes().length > 0;
			if (hasActions) {
				this.selectionEnabled = true;
			}

			this.$.groupedList.scrollTarget = this.$.scroller;
		},

		/**
		 * Called when data is changed to setup up needs and check workers/filtering
		 */
		_dataChanged: function (change) {

			if (this.data && this.data.length > 0) {
				this._noData = false;
			}

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

		_debounceFilterItems: function () {
			this.debounce('filterItems', this._filterItems);
		},

		_debounceGroupItems: function () {
			this.debounce('groupItems', this._groupItems);
		},

		_debounceSortItems: function () {
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
			var i, removedItems = [], removed;
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
		 * Convienence method for setting a value to an item's path and notifying any
		 * element bound to this item's path.
		 */
		setItemValue: function (item, itemPath, value) {
			var dataColl, key;

			dataColl = Polymer.Collection.get(this.data);

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
			this.$.groupedList.toggleFold(event.model);
		},

		getFoldIcon: function (folded) {
			return folded ? 'expand-more' : 'expand-less';
		},

		// TODO: provides a mean to avoid setting the values for a column
		// TODO: should process (distinct, sort, min, max) the values at the column level depending on the column type
		_setColumnValues: function () {
			this.columns.forEach(function (column, colIndex) {
				if (!column.bindValues) {
					return;
				}
				var	newValues = [];

				this.data.forEach(function (item, index) {
					var value = this.get(column.valuePath, item);
					if (value) {
						newValues.push(value);
					}
				}, this);

				column.set('values', newValues);

			}, this);
		},

		/**
		 * Returns the column corresponding to the current `groupOn` value
		 */
		_getGroupOnColumn: function () {
			var col;

			if (!this.groupOn) {
				return;
			}
			this.columns.some(function (column) {
				if (column.groupOn === this.groupOn) {
					col = column;
					return true;
				}
			}, this);
			return col;
		},

		/**
		 * Returns the column representing the current `sortOn` value
		 */
		_getSortOnColumn: function () {
			var col;

			if (!this.sortOn || !this.sortOn.valuePath) {
				return;
			}
			this.columns.some(function (column) {
				if (column.sortOn === this.sortOn.valuePath) {
					col = column;
					return true;
				}
			}, this);
			return col;
		},

		_groupOnChanged: function (newValue, oldValue) {
			if (this.columns) {
				this._updateVisibleColumns();
			}

			this._debounceGroupItems();
		},

		_updateVisibleColumns: function () {
			var
				visibleColumns,
				i;

			if (this.groupOn) {
				visibleColumns = [];
				this.columns.forEach(function (column) {
					if (column.groupOn !== this.groupOn) {
						visibleColumns.push(column);
					} else {
						this._setGroupOnColumn(column);
					}
				}, this);
			} else {
				visibleColumns = this.columns.slice();
			}

			this.visibleColumns = visibleColumns;
			this.disabledColumns = [];
			this._disabledColumnsIndexes = [];
		},

		_filterItems : function () {
			if (this.data && this.data.length) {
				// Call filtering code only on columns that has a filter
				var filterFunctions = this.columns
						.map(function (column) {
							return column.getFilterFn();
						})
						.filter(function (f) {
							return f !== undefined;
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
				groupOnColumn = this._getGroupOnColumn(),
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

			var
				sortOn = this.sortOn,
				sortOnColumn = this._getSortOnColumn(),
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
					value: sortOnColumn.getComparableValue(item, sortOn.valuePath)
				};
			};
			if (this._groupsCount > 0) {
				this.filteredGroupedItems.forEach(function (group, index) {
					if (group.items && group.items.map) {
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
					}
				}, this);
			} else {
				// No grouping
				mappedItems = this.filteredGroupedItems.map(itemMapper, this);

				this.$.sortWorker.process({
					reverse: sortOn.descending,
					sortOn: 'value',
					data: mappedItems
				}, function (data) {
					items = data.data.map(function (item, index){
						return this.filteredGroupedItems[item.index];
					}, this);
					this.set('sortedFilteredGroupedItems', items);
					this._debounceAdjustColumns();
				}.bind(this));
			}
		},

		// TODO(pasleq): re-implement expand/collapse of single item
		_computeIcon: function (item, expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},

		// TODO(pasleq): re-implement expand/collapse of single item
		toggleExtraColumns: function (event, detail) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},

		_onResize: function (e) {
			this._debounceAdjustColumns();
		},

		_debounceAdjustColumns: function () {
			// 16ms 'magic' number copied from iron-list
			// But this makes headers change width after the table has completed rendering,
			// which might look strange.
			this.debounce('adjustColumns', this._adjustColumns, 16);
		},

		/**
		 * Enable/disable columns to properly fit in the available space.
		 * Adjust headers width according to cells width
		 *
		 * @memberOf element/cz-omnitable
		 */
		_adjustColumns: function () {
			var
				firstRow = this.$.groupedList.getFirstVisibleItemElement(),
				tableContent = this.$ ? this.$.tableContent : null,
				fits,
				cells,
				currentWidth;

			if (!tableContent || !firstRow) {
				this._debounceAdjustColumns();
				return;
			}

			fits = this.$.scroller.scrollWidth <= this.$.scroller.clientWidth;

			currentWidth = tableContent.clientWidth;

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

			cells = Polymer.dom(firstRow).querySelectorAll('cosmoz-omnitable-item-cell');

			this._adjustHeadersWidth(cells);
		},

		_adjustHeadersWidth: function (cells) {
			var
				cell,
				cellWidth,
				headers,
				header,
				i;

			headers = Polymer.dom(this.$.header).querySelectorAll('cosmoz-omnitable-header-cell');
			for (i = 0; i < cells.length; i+=1) {
				cell = cells[i];
				header = headers[i];
				cellWidth = cell.getComputedStyleValue('width');
				header.style.minWidth = cellWidth;
				header.style.maxWidth = cellWidth;
				header.style.width = cellWidth;
			}
		},

		_canScaleUp: function (width) {

			if (this.disabledColumns.length === 0) {
				return false;
			}

			if (!this._overflowConfig) {
				return true;
			}

			if (width > this._overflowConfig.width) {
				return true;
			}

			if ((this.visibleColumns.length + 1) < this._overflowConfig.columns) {
				return true;
			}

			return false;
		},

		_disableColumn: function () {
			var disabledColumn, disabledColumnIndex;
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
			var
				column = this.pop('disabledColumns'),
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

		_getSortDirection: function (column, sortOnChange) {
			var
				sortOn = sortOnChange.base,
				direction = '';

			if (!column) {
				return;
			}
			if (sortOn && sortOn.valuePath === column.sortOn) {
				direction = sortOn.descending ? this._('Descending') : this._('Ascending');
				return '(' + direction + ')';
			}

			return direction;
		},

		/**
		 * Called when a item from the sortOn dropdown is activated (tap)
		 */
		_onSortColumnActivate: function (event) {
			var
				column = event.model ? event.model.column : undefined,
				selected;

			if (!column) {
				this.sortOn = null;
				this._sortOnSelectorSelected = 0;
			} else {
				selected = this.$.sortOnSelector.selected;
				if (!this.sortOn || !this.sortOn.valuePath) {
					this.sortOn = {
						valuePath: column.sortOn,
						descending: false
					};
				} else if (this.sortOn.valuePath === column.sortOn) {
					this.sortOn = {
						valuePath: this.sortOn.valuePath,
						descending: !this.sortOn.descending
					};
				} else {
					this.sortOn = {
						valuePath: column.sortOn,
						descending: false
					};
				}

				// Force dropdown menu to refresh `selectedItemLabel`
				this._sortOnSelectorSelected = 0;
				this._sortOnSelectorSelected = selected;
			}
		},

		// Select the right column if sort has been changed from outside.
		_sortOnChanged: function (sortOnChange) {
			var sortOn = sortOnChange.base;

			if (sortOn && !sortOn.valuePath) {
				this.sortOn = {
					valuePath: sortOn,
					descending: false
				};
				return;
			}
			if (!sortOn || !sortOn.valuePath) {
				this._sortOnSelectorSelected = 0;
			}

			this._updateSelectedSortIndex();

			if (this.data && this.data.length && this._webWorkerReady && this.columns) {
				this._debounceSortItems();
			}
		},

		_updateSelectedSortIndex: function () {
			var newIndex,
				sortOnSelectorItems = this.$.sortOnSelector.items;

			if (!this.sortOn || !this.sortOn.valuePath || !sortOnSelectorItems.length) {
				newIndex = 0;
			} else {
				sortOnSelectorItems.some(function (element, i) {
					var model = this.$.sortColumns.modelForElement(element);
					if (model && model.column && (model.column.sortOn === this.sortOn.valuePath)) {
						newIndex = i;
						return true;
					}
				}, this);
			}

			if (newIndex !== this._sortOnSelectorSelected) {
				this._sortOnSelectorSelected = newIndex;
			}
		}

	});
}());
