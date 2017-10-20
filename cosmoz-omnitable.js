/*global Cosmoz, Polymer, window, saveAs */
(function () {

	'use strict';

	const PROPERTY_HASH_PARAMS = ['sortOn', 'groupOn', 'descending'];

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

			highlightedItems: {
				type: Array,
				notify: true
			},

			descending: {
				type: Boolean,
				value: false
			},

			sortDirection: {
				type: String,
				computed: '_computeSortDirection(descending, t)'
			},

			sortOn: {
				type: String,
				value: ''
			},

			sortOnColumn: {
				type: Object,
				computed: '_getColumn(sortOn, "name", columns)'
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
				computed: '_getColumn(groupOn, "name", columns)'
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
				notify: true,
				computed: '_computeVisibleColumns(columns, groupOn)',
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

			_routeHashParams: {
				type: Object,
				notify: true
			},
		},

		observers: [
			'_dataChanged(data.*)',
			'_debounceSortItems(sortOn, descending, filteredGroupedItems)',
			'_routeHashParamsChanged(_routeHashParams.*, hashParam, columns)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TranslatableBehavior
		],

		listeners: {
			'iron-resize': '_onResize',
			'update-item-size': '_onUpdateItemSize',
			'cosmoz-column-title-changed': '_onColumnTitleChanged',
			'cosmoz-column-hidden-changed': '_debounceUpdateColumns',
			'cosmoz-column-filter-changed': '_filterChanged',
		},

		/** ELEMENT LIFECYCLE */

		created: function () {
			/** WARNING: we do not support columns changes yet. */
			// `isOmnitableColumn` is a property from cosmoz-omnitable-column-behavior
			this._columnObserver = Polymer.dom(this).observeNodes(info => {
				var changedColumns = info.addedNodes
					.concat(info.removedNodes)
					.filter(child =>
						child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn
					);
				if (changedColumns.length === 0) {
					return;
				}

				this._debounceUpdateColumns();
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

		_computeVisibleColumns(columns, groupOn) {
			return groupOn ? columns.filter(c => c.name !== this.groupOn) : columns.slice();
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

		_visibleColumnsChanged() {
			this.disabledColumns = [];
			this._disabledColumnsIndexes = [];
		},

		_onUpdateItemSize: function (event, detail) {
			if (detail && detail.item) {
				this.$.groupedList.updateSize(detail.item);
			}
			event.stopPropagation();
		},

		_onColumnTitleChanged: function (event) {
			var column = event.target,
				columnIndex;

			event.stopPropagation();

			if (!this.columns) {
				return;
			}

			columnIndex = this.columns.indexOf(column);

			// re-notify column change to make dom-repeat re-render menu item title
			this.notifyPath(['columns', columnIndex, 'title']);

			if (column === this.groupOnColumn) {
				this.notifyPath(['groupOnColumn', 'title']);
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
		_onItemCheckboxChange: function (event) {
			var item = event.model.item;
			if (this.isItemSelected(item)) {
				this.deselectItem(item);
			} else {
				this.selectItem(item);
			}

			event.preventDefault();
			event.stopPropagation();
		},

		_itemRowTapped(event) {
			var item = event.model.item;
			this.highlight(item, this.isItemHighlighted(item));
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

		_debounceUpdateColumns() {
			this.debounce('updateColumns', this._updateColumns);
		},

		_updateColumns: function () {
			let columns = this.getEffectiveChildren().filter((child, index) => {
					child.__index = index;
					return child.nodeType === Node.ELEMENT_NODE && child.isOmnitableColumn && !child.hidden;
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

			if (!columns || columns.length === 0) {
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

			this.columns = columns;

			if (this._webWorkerReady && this.data) {
				this._debounceFilterItems();
			}
		},
		/**
		 * Checks if the column setup is valid and logs errors.
		 * As a separate functions to make testing easier.
		 * @param {any} columns The columns.
		 * @param {any} columnNames The column names.
		 * @returns {Boolean} True if setup is valid.
		 */
		_verifyColumnSetup(columns, columnNames = columns.map(c => c.name)) {
			// Check if column names are set and unique
			var columnsMissingNameAttribute = columns
				.filter(column => {
					var name = column.name;
					if (!name) {
						console.error('The name attribute needs to be set on all columns! Missing on column', column.title, column);
						return;
					}
					return columnNames.indexOf(name) !== columnNames.lastIndexOf(name);
				});

			columnsMissingNameAttribute.forEach(column => {
				console.error('The name attribute needs to be unique among all columns! Not unique on column', column.title, column);
			});

			return columnsMissingNameAttribute.length === 0;
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
					.map(item => this.get(column.valuePath, item))
					.filter((value, index, self) =>
						value !== undefined && value !== null && self.indexOf(value) === index
					)
				);
			}, this);
		},
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
				console.warn(`Cannot find column with ${attribute} ${attributeValue}`);
			}
			return column;
		},

		_filterChanged: function (e, detail) {
			this._debounceFilterItems();
			this._filterForRouteChanged(detail.column);
		},

		_debounceFilterItems: function () {
			this.debounce('filterItems', this._filterItems);
		},

		_filterItems: function () {
			if (this.data && this.data.length && this.columns) {
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

			this._updateRouteParam('groupOn');

			var groupOnColumn = this.groupOnColumn,
				groups;

			if (!groupOnColumn || !groupOnColumn.groupOn) {
				this.filteredGroupedItems = this.filteredItems;
				this._groupsCount = 0;
				return;
			}

			groups = this.filteredItems.reduce((array, item) => {
				var gval = groupOnColumn.getComparableValue(item, groupOnColumn.groupOn),
					group;

				if (gval === undefined) {
					return array;
				}

				group = array.find(g => g.id === gval);
				if (!group) {
					group = { id: gval, name: gval, items: [] };
					array.push(group);
				}
				group.items.push(item);
				return array;
			}, []);

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

			var sortOnColumn = this.sortOnColumn,
				items = [],
				numGroups = this.filteredGroupedItems.length,
				mappedItems,
				results = 0,
				itemMapper;

			this._updateRouteParam('sortOn');
			this._updateRouteParam('descending');

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

					this.set('sortedFilteredGroupedItems', data.data.map(function (item) {
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
					width;

				// disabled column headers
				if (header === undefined) {
					return;
				}

				width = getComputedStyle(cell).getPropertyValue('width');
				header.style.minWidth = width;
				header.style.maxWidth = width === 'auto' ? 'none' : width;
				header.style.width = width;
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
		},

		/** view functions */

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
			return this.$.groupedList.isItemSelected(item);
		},

		isItemHighlighted(item) {
			return this.$.groupedList.isItemHighlighted(item);
		},

		highlight(i, reverse) {
			if (!i) {
				return;
			}
			var gl = this.$.groupedList;
			if (Array.isArray(i)) {
				i.forEach(item => gl.highlightItem(item, reverse));
				return;
			}
			gl.highlightItem(i, reverse);
		},

		_serializeFilter: function (obj) {
			const type = {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
			let value = obj;

			if (type === 'array' && !value.length) {
				value =  null;
			} else if (type === 'object') {
				value =  Object.keys(obj).filter(k => obj[k] != null)
					.reduce((acc = {}, k) => (acc[k] = obj[k]) && acc, undefined) || null;
			}
			return this.serialize(value);
		},

		_deserializeFilter: function (obj, type = Object) {
			if (type === Object && obj == null) {
				return {};
			}
			if (type === Array && obj == null) {
				return [];
			}
			return this.deserialize(obj, type);
		},

		_routeHashParamsChanged: function (changes, hashParam, columns) {
			if (!changes || !hashParam || !columns || !columns.length) {
				return;
			}

			PROPERTY_HASH_PARAMS.forEach(key => {
				const hashValue =  this.get(['_routeHashParams', hashParam + '-' + key]),
					deserialized = this.deserialize(hashValue, this.properties[key].type);

				if (hashValue === undefined ||  deserialized === this.get(key)) {
					return;
				}

				this.set(key, deserialized);
			});

			let rule = new RegExp('^' + hashParam + '-filter\-\-([a-z0-9\-]+)$'),
				routeParams = changes.base;

			Object.keys(routeParams).forEach(key => {
				const hashValue = routeParams[key],
					matches = key.match(rule),
					name = matches && matches[1],
					column = name && columns.find(c => c.name === name);

				if (!column) {
					console.warn('column with name', name, 'for param', key, 'not found!');
					return;
				}

				let filter = column.filter;

				if (hashValue === this._serializeFilter(filter)) {
					return;
				}
				column.set('filter', this._deserializeFilter(hashValue, filter && filter.constructor || undefined));
			});

		},

		_updateRouteParam: function (key) {
			if (!this.hashParam || !this._routeHashParams) {
				return;
			}

			const path = ['_routeHashParams', this.hashParam + '-' + key],
				hashValue =  this.get(path),
				value = this.get(key),
				serialized = this.serialize(value, this.properties[key].type);

			if (serialized === hashValue || hashValue == null && value === '') {
				return;
			}

			this.set(path, serialized === undefined ? null : serialized);
		},

		_filterForRouteChanged: function (column) {
			if (!this.hashParam || !this._routeHashParams || !this.data || !this.data.length)  {
				return;
			}

			const path = ['_routeHashParams', this.hashParam + '-filter--' + column.name],
				hashValue = this.get(path),
				serialized = this._serializeFilter(column.filter);

			if (serialized === hashValue) {
				return;
			}

			this.set(path, serialized === undefined ? null : serialized);
		}
	});
}());
