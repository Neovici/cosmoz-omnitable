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
			_currentGroupOnColumn: {
				type: Object
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
				type: Array
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

			columns: {
				type: Array,
				notify: true
			},

			visibleColumns: {
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
			'iron-resize': 'updateWidths'
		},

		/**
		 * Keeps track of data re-evaluation needs when it comes to sorting, filtering and grouping.
		 * This is to avoid making too generic property observations but rather to make well-informed
		 * decisions when to use computing power.
		 */
		_needs: {},

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

			var pathParts, key, dataColl, item;

			if (change.path === 'data') {
				// Data reference changed
				this._newData(change.value);
			} else if (change.path === 'data.splices') {
				this._dataAddedOrRemoved(change.value);
			} else {
				// Data item changed
				pathParts = change.path.split('.').slice(1);
				if (pathParts.length >= 2) {
					key = pathParts[0];
					dataColl = Polymer.Collection.get(this.data);
					item = dataColl.getItem(key);
					this.$.groupedList.notifyItemPath(item, pathParts.slice(1).join('.'), change.value);
				}
			}

			if (this.data && this.data.length > 0) {
				this._noData = false;
			}
		},

		_newData: function (data) {
			if (this._webWorkerReady && this.columns) {
				this._setColumnValues();
				this._debounceFilterItems();
			}

		},

		_dataAddedOrRemoved: function (change) {
			var itemsAdded, splices;

			if (!change) {
				return;
			}

			splices = change.indexSplices;

			itemsAdded = splices.some(function (splice) {
				return splice.addedCount > 0;
			}, this);

			if (itemsAdded && this._webWorkerReady && this.columns) {
				this._debounceFilterItems();
			} else {
				// When only removing items, no need to process the data again
				splices.forEach(function (splice) {
					splice.removed.forEach(function (item) {
						this.$.groupedList.removeItem(item);
					}, this);
				}, this);
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

		_debounceUpdateWidths: function () {
			// 16ms 'magic' number copied from iron-list
			// But this makes headers change width after the table has completed rendering,
			// which might look strange.
			this.debounce('updateWidths', this.updateWidths, 16);

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
				var
					currValues = column.values,
					newValues = [];

				this.data.forEach(function (item, index) {
					var value = this.get(column.valuePath, item);
					newValues.push(value);
				}, this);

				this.splice.apply(this, ['columns.' + colIndex + '.values', 0, currValues.length].concat(newValues));

			}, this);
		},

		disableColumn: function () {
			var headerToDisable;
			// disables/hides columns that for example does not fit in the current screen size.
			this.columnHeaders.forEach(function (header, index) {
				if (headerToDisable === undefined || headerToDisable.priority >= header.priority) {
					headerToDisable = header;
				}
			});

			if (headerToDisable) {
				this.push('disabledHeaders', headerToDisable);
				this.async(this.updateWidths);
			}
		},

		enableColumn: function () {
			var
				headerToEnable,
				headerToEnableIndex;
			this.disabledHeaders.forEach(function (header, index) {
				if (headerToEnable === undefined || headerToEnable.priority < header.priority) {
					headerToEnable = header;
					headerToEnableIndex = index;
				}
			});

			this.splice('disabledHeaders', headerToEnableIndex, 1);
			// Fake a resize bigger event, in the off chance that we go past
			// the size of two columns in one resize, like maximizing a window
			this.async(function () {
				this.scalingUp = true;
				this.updateWidths({
					detail: {
						second: true
					}
				});
			});
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
			var
				oldGroupColumnIndex = -1,
				oldGroupColumn,
				groupColumnIndex = -1,
				groupColumn,
				i;
			if (this.columns && this.visibleColumns) {
				for (i = 0 ; i < this.columns.length; i += 1) {
					if (oldValue && this.columns[i].groupOn === oldValue) {
						oldGroupColumnIndex = i;
						oldGroupColumn = this.columns[i];
					}
					if (newValue && this.columns[i].groupOn === newValue) {
						groupColumnIndex = i;
						groupColumn = this.columns[i];
					}
				}

				if (oldGroupColumnIndex >= 0) {
					this.splice('visibleColumns', oldGroupColumnIndex, 0, oldGroupColumn);
				}
				if (groupColumnIndex >= 0) {
					this.splice('visibleColumns', groupColumnIndex, 1);
				}
				this._currentGroupOnColumn = groupColumn;
			} else if (this.columns) {
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
						this._currentGroupOnColumn = column;
					}
				}, this);
			} else {
				visibleColumns = this.columns.slice();
			}

			this.visibleColumns = visibleColumns;
		},

		_filterItems : function () {
			var
				filteredItems,
				filteredColumns;

			if (this.data && this.data.length) {
				// Call filtering code only on columns that has a filter
				filteredColumns = this.columns.filter(function (column) {
					return column.hasFilter();
				});
				if (filteredColumns.length) {
					filteredItems = this.data.filter(function (item) {
						return filteredColumns.every(function (column) {
							return column.applyFilter(item);
						}, this);
					}, this);
				} else {
					filteredItems = this.data.slice();
				}

				this.filteredItems = filteredItems;
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

			var
				groupOn = this.groupOn,
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

				Object.keys(itemStructure).forEach(function (key) {
					groups.push({
						name: key,
						id: key,
						items: itemStructure[key]
					});
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

			if (!sortOn) {
				this.sortedFilteredGroupedItems = this.filteredGroupedItems;
				this._debounceUpdateWidths();
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
								this._debounceUpdateWidths();
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
					this._debounceUpdateWidths();
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

		updateWidths: function (e) {
			var
				firstVisibleItemElement = this.$.groupedList.getFirstVisibleItemElement(),
				cells,
				cell,
				cellWidth,
				headers,
				header,
				i;

			if (firstVisibleItemElement) {
				cells = Polymer.dom(firstVisibleItemElement).querySelectorAll('cosmoz-omnitable-item-cell');
				headers = Polymer.dom(this.$.header).querySelectorAll('cosmoz-omnitable-header-cell');
				for (i = 0; i < cells.length; i+=1) {
					cell = cells[i];
					header = headers[i];
					cellWidth = cell.getComputedStyleValue('width');
					header.style.minWidth = cellWidth;
					header.style.maxWidth = cellWidth;
					header.style.width = cellWidth;

				}
			} else if (!e) {
				// updateWidths was not triggered by a resize event, and it seems cosmoz-grouped-list did not
				// finishes to render list items. Try to updateWidths after next repaint.
				this._debounceUpdateWidths();
			}
		},


		/**
		 * Enable/disable columns to properly fit in the available space.
		 *
		 * @param  {Event} event    (optional) Resize event, required for "bigger" events
		 * (set event.detail.bigger = true)
		 * @memberOf element/cz-omnitable
		 */
		_adjustColumns: function (event, detail, a) {

			if (!this.rendered || !this.visibleColumns) {
				return;
			}

			var body = this.$ ? this.$.body : null,
				bigger,
				groupedList,
				fits,
				headerTds,
				visibleColumns = this.columnHeaders.length,
				second = (event && event.detail && event.detail.second) || false,
				widthSetter,
				widthTds;

			if (!body) {
				return;
			}

			groupedList = this.$$('#groupedList');

			// TODO(pasleq): have encountered situations where groupedList was not available yet. Should check why.
			if (!groupedList) {
				return;
			}

			fits = this.$.scroller.scrollWidth <= this.$.scroller.clientWidth;
			/* Weird bug
			** In certain scenarios (sizing the window so that a column barely fits)
			** body.clientWidth actually expands by itself, causing a 'bigger' event.
			** This triggers a resize scale up, which adds a column, that doesn't fit, causing a resize down.
			** = endless loop.
			** Since 'disableColumn' doesn't send any parameters to 'updateWidths', we can check for an event
			** parameter = not caused by 'disableColumn' but rather 'enableColumn' or actual resize.
			*/
			bigger = body.clientWidth > this._previousWidth && event;
			this._previousWidth = body.clientWidth;
			/**
			* To prevent infinite loops by multiple events, we need to check for 'bigger' events first
			* to avoid triggering a 'disableColumn' action in the upscaling process.
			*
			* Also make sure that the body is not overflowing (fits), when receiving multiple resize up
			* events during a "scale up", we can hit an async infinite loop otherwise.
			*
			* Finally, there's no point in trying to enable a header if there aren't any disabled ones,
			* but we don't want to return since this event might be the final one - actually updating
			* column widths.
			*/
			if (fits && bigger && this.disabledHeaders.length > 0) {
				/**
				 * Only scale up if:
				 * * It's the first scale up step - a native 'resize' event without detail.second
				 * * it's the second scale up step - scalingup set by first event and detail.second
				 */
				/**
				 * Make sure to sync scalingUp and detail.second since a mismatch can occur if a
				 * 'resize' triggers a scalingUp process that hasn't completed.
				 */
				if (this.scalingUp === second) {
					this.enableColumn();
				}
				/**
				 * Discard any 'resize'-up events until the scale up is completed.
				 */
				return;
			}
			/**
			* Reset scale-up status as soon as a non-'bigger' event occurs.
			*/
			this.scalingUp = false;
			if (!fits && visibleColumns > 1) {
				this.async(this.disableColumn);
				return;
			}

			widthSetter = groupedList.$$('template-selector:not([hidden]) .item:not([style])');

			if (widthSetter === null) {
				return;
			}
			headerTds = Polymer.dom(this.$.header).querySelectorAll('.header');
			widthTds = Polymer.dom(widthSetter).querySelectorAll('.cell');
			widthTds.forEach(function (element, index) {
				var headerElement = headerTds[index],
					csElement = window.getComputedStyle(element, null),
					newWidth = element.clientWidth - parseInt(csElement.getPropertyValue('padding-left'), 10) - parseInt(csElement.getPropertyValue('padding-right'), 10);
				headerElement.style.width = newWidth + 'px';
				headerElement.style.maxWidth = newWidth + 'px';
			});
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
			var specificScope = column.getSpecificStyleScope();
			return 'itemRow-cell' + (specificScope ? ' ' + specificScope : '') + (columnIndex === 0 ? ' itemRow-cell0' : '');
		},

		_computeGroupRowClasses: function (folded) {
			return folded ? 'groupRow groupRow-folded' : 'groupRow';
		},

		_onWebWorkerReady: function () {
			this._webWorkerReady = true;
			if (this.data && this.columns) {
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
				direction = sortOn.descending ? ' (Descending)': ' (Ascending)';
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

			this._debounceSortItems();
		},

		_updateSelectedSortIndex: function () {
			var
				newIndex,
				sortOnSelectorItems = this.$.sortOnSelector.items,
				sortColumns;

			if (!this.sortOn || !this.sortOn.valuePath || !sortOnSelectorItems.length) {
				newIndex = 0;
			} else {
				sortColumns = this.$.sortColumns;
				sortOnSelectorItems.some(function (element, i) {
					var model = sortColumns.modelForElement(element);
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
