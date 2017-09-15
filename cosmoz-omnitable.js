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
			 * Array used to list items.
			 */
			data: {
				type: Array
			},

			/**
			 * True if data is a valid and not empty array.
			 */
			_dataIsValid: {
				type: Boolean,
				value: false,
				computed: '_computeDataValidity(data)'
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
				computed: '_computeShowCheckboxes(_dataIsValid, hasActions)'
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

			sortDirection: {
				type: String,
				computed: '_computeSortDirection(descending)'
			},

			sortOn: {
				type: String,
				value: ''
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
				observer: '_debounceGroupItems',
				computed: '_computeGroupOnColumn(groupOn, columns)'
			},

			/**
			 * Items matching current set filter(s)
			 */
			filteredItems: {
				type: Array,
				observer: '_debounceGroupItems'
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

			_filterIsTooStrict: {
				type: Boolean,
				computed: '_computeFilterIsTooStrict(_dataIsValid, sortedFilteredGroupedItems.length)'
			}
		},

		observers: [
			'_dataChanged(data.*)',
			'_debounceSortItems(sortOn, descending, filteredGroupedItems)',
			'_updateVisibleColumns(columns, groupOn)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TranslatableBehavior
		],

		listeners: {
			'iron-resize': '_onResize',
			'update-item-size': '_onUpdateItemSize'
		},

		/** ELEMENT LIFECYCLE */

		created: function () {
			/** WARNING: we do not support columns changes yet. */
			// `isOmnitableColumn` is a property from cosmoz-omnitable-column-behavior
			this._columnObserver = Polymer.dom(this).observeNodes(info => {
				var changedColumns = info.addedNodes
					.concat(info.removedNodes)
					.filter(function (child) {
						return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn && !this._hiddenAttr(child);
					}, this);

				if (changedColumns.length === 0) {
					return;
				}

				this._updateColumns();
			});
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

		/** ELEMENT BEHAVIOR */

		_disabledColumnsIndexes: null,

		_scalingUp: false,

		_computeGroupOnColumn(groupOn) {
			return this._getColumn(groupOn);
		},

		_computeDataValidity(data) {
			return data && Array.isArray(data) && data.length > 0;
		},

		_computeFilterIsTooStrict(dataIsValid, visibleItemsLength) {
			return dataIsValid && visibleItemsLength < 1;
		},

		_computeSortDirection(descending) {
			var direction = descending ? this._('Descending') : this._('Ascending');
			return `(${direction})`;
		},

		_computeShowCheckboxes(dataIsValid, hasActions) {
			return dataIsValid && hasActions;
		},

		_onUpdateItemSize: function (event, detail) {
			if (detail && detail.item) {
				this.$.groupedList.updateSize(detail.item);
			}
			event.stopPropagation();
		},

		_onColumnFilterChanged: function () {
			this._debounceFilterItems();
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
		_onItemCheckboxChange: function (event) {
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

		_onResize: function () {
			this._debounceAdjustColumns();
		},

		_dataChanged() {
			if (!this._webWorkerReady || !this.columns) {
				return;
			}
			this._setColumnValues();
			this._debounceFilterItems();
		},

		_updateColumns: function () {
			var columns = this.getEffectiveChildren().filter((child, index) => {
					child.__index = index;
					return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn && !this._hiddenAttr(child);
				}),
				columnNames = columns.map(c => c.name),
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

			// Check if column names are set and unique
			columns
				.filter((column) => {
					var name = column.name;
					if (!name) {
						console.error('The name attribute needs to be set on all columns! Missing on column', column.title, column);
						return;
					}
					return columnNames.indexOf(name) !== columnNames.lastIndexOf(name);
				})
				.forEach(column => {
					console.error('The name attribute needs to be unique among all columns! Not unique on column', column.title, column);
				});

			// TODO: Un-listen from old columns ?
			columns.forEach(function (column) {
				this.listen(column, 'filter-changed', '_onColumnFilterChanged');

				if (!column.name){
					// No name set; Try to set name attribute via valuePath
					if (!valuePathNames) {
						valuePathNames = columns.map(c => c.valuePath);
					}
					var hasUniqueValuePath = valuePathNames.indexOf(column.valuePath) === valuePathNames.lastIndexOf(column.valuePath);
					if (hasUniqueValuePath && columnNames.indexOf(column.valuePath) === -1) {
						column.name = column.valuePath;
					}
				}
			}, this);

			this.columns = columns;

			if (this._webWorkerReady && this.data) {
				this._debounceFilterItems();
			}
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
					.map(function (item) {
						return this.get(column.valuePath, item);
					}, this)
					.filter(function (value, index, self) {
						return value !== undefined && value !== null && self.indexOf(value) === index;
					}));

			}, this);
		},
		/*
		 * Returns a column based on an attribute.
		 * @param {String} attributeValue The value of the column attribute.
		 * @param {String} attribute The attribute name of the column.
		 * @returns {Object} The found column.
		 */
		_getColumn(attributeValue, attribute = 'name') {
			if (!attributeValue) {
				return;
			}
			var column = this.columns.find(column => column[attribute] === attributeValue);
			if (!column) {
				console.warn(`Cannot find column with ${attribute} ${attributeValue}`);
			}
			return column;
		},

		_updateVisibleColumns: function () {
			var visibleColumns = this.columns.slice();

			if (this.groupOn) {
				visibleColumns = visibleColumns.filter(c => c.name !== this.groupOn);
			}

			this.visibleColumns = visibleColumns;
			this.disabledColumns = [];
			this._disabledColumnsIndexes = [];
		},

		_debounceFilterItems: function () {
			this.debounce('filterItems', this._filterItems);
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
			} else {
				this.filteredItems = [];
				this.filteredGroupedItems  = [];
				this.sortedFilteredGroupedItems = [];
				this._groupsCount = 0;
			}
		},

		_debounceGroupItems: function () {
			this.debounce('groupItems', this._groupItems);
		},

		_groupItems: function () {
			if (!this.filteredItems || this.filteredItems.length === 0) {
				this.filteredGroupedItems  = [];
				this.sortedFilteredGroupedItems = [];
				this._groupsCount = 0;
				return;
			}

			var groupOnColumn = this.groupOnColumn,
				groups = [],
				itemStructure = {};

			if (!groupOnColumn || !groupOnColumn.groupOn) {
				this.filteredGroupedItems = this.filteredItems;
				this._groupsCount = 0;
				return;
			}

			this.filteredItems.forEach(function (item) {
				var groupOnValue = groupOnColumn.getComparableValue(item, groupOnColumn.groupOn);

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
					v1 = groupOnColumn.getComparableValue(a.items[0], groupOnColumn.groupOn),
					v2 = groupOnColumn.getComparableValue(b.items[0], groupOnColumn.groupOn);

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
			this.filteredGroupedItems = groups;
		},

		_debounceSortItems: function () {
			if (!this.data || !this.data.length || !this._webWorkerReady || !this.columns) {
				return;
			}
			this.debounce('sortItems', this._sortFilteredGroupedItems);
		},

		_sortFilteredGroupedItems: function () {
			if (!this.filteredGroupedItems) {
				return;
			}

			var sortOnColumn = this._getColumn(this.sortOn),
				items = [],
				numGroups = this.filteredGroupedItems.length,
				mappedItems,
				results = 0,
				itemMapper;

			if (!this.sortOn || !sortOnColumn) {
				this.sortedFilteredGroupedItems = this.filteredGroupedItems;
				this._debounceAdjustColumns();
				return;
			}

			itemMapper = function (item, originalItemIndex) {
				return {
					index: originalItemIndex,
					value: sortOnColumn.getComparableValue(item, sortOnColumn.sortOn)
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
							reverse: this.descending,
							sortOn: 'value',
							data: mappedItems
						}, function (data) {
							results += 1;
							items[data.meta.index] = {
								name: data.meta.groupName,
								id: data.meta.groupId
							};
							items[data.meta.index].items = data.data.map(function (item) {
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
					reverse: this.descending,
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

					this.set('sortedFilteredGroupedItems', data.data.map(function (item){
						return this.filteredGroupedItems[item.index];
					}, this));
					this._debounceAdjustColumns();
				}.bind(this));
			}
		},
		/**
		 * True if the current list is visible.
		 */
		get _isVisible() {
			return Boolean(this.offsetWidth || this.offsetHeight);
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
		 * @memberOf element/cz-omnitable
		 * @returns {Boolean} Return
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
		 * ^memberOf element/cz-omnitable
		 */
		_isEmpty: function (obj) {
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
        /**
         * Helper method to get a node's hidden attribute as a boolean.
         * @param {any} node The node.
         * @returns {Boolean} True if node's hidden attribute is set `hidden` or `hidden="true"`.
         */
		_hiddenAttr(node) {
			var v = node.getAttribute('hidden');
			return (v ? v.toLowerCase() : v) === 'false' ? false : !!v;
		},

		_onWebWorkerReady: function () {
			this._webWorkerReady = true;
			if (this.data && this.columns) {
				this._setColumnValues();
				this._debounceFilterItems();
			}
		},

		_makeCsvField: function (str) {
			var result = str.replace(/"/g, '""');
			if (result.search(/("|,|\n)/g) >= 0) {
				return '"' + result + '"';
			}
			return str;
		},
		/**
		 * Triggers a download of selected rows as a CSV file.
		 * @returns {undefined}
		 */
		_saveAsCsvAction: function () {
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
		},

		/** view functions */

		_getItemRowClasses: function (selected) {
			return selected ?  'itemRow itemRow-selected' : 'itemRow';
		},

		_getGroupRowClasses: function (folded) {
			return folded ? 'groupRow groupRow-folded' : 'groupRow';
		},

		_getFoldIcon: function (expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},
		/**
		 * Called if an item from the sortOn dropdown gets tapped.
		 * Reverses the descending value if the sortOn value did not change.
		 * @param {Event} e The event with the column model.
		 * @returns {undefined}
		 */
		_reverseSortDirection(e) {
			var column = e.model.column;
			if (column.name === this.sortOn) {
				this.descending = !this.descending;
				return;
			}
			this.descending = false;
		},
		/**
		 * Toggle folding of a group
		 * @param  {Event} event event
		 * @returns {undefined}
		 */
		_toggleGroup: function (event) {
			var firstRow = this.$.groupedList.getFirstVisibleItemElement(),
				folded = event.model.folded;

			this.$.groupedList.toggleFold(event.model);

			if (!firstRow && folded) {
				this._debounceAdjustColumns();
			}
		},

		_toggleItem: function (event) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},
		/**
		 * Turn an `action` event into a `run` event
		 * @param  {Event} event  `action` event
		 * @param  {Object} detail `action` event details
		 * @returns {undefined}
		 */
		_onAction: function (event, detail) {
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

		_onAllCheckboxChange: function (event) {
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

		/** PUBLIC */

		/**
		 * Remove multiple items from `data`
		 * @param {Array} items Array of items to remove
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
		 * Convenience method for setting a value to an item's path and notifying any
		 * element bound to this item's path.
		 * @param {Object} item The item.
		 * @param {itemPath} itemPath The path of the item.
		 * @param {String} value The new value of the item.
		 * @returns {undefined}
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
		}
	});
}());
