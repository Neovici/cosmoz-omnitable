/*global Cosmoz, Polymer, window */
(function () {

	'use strict';

	Polymer({

		is: 'cosmoz-omnitable',

		properties: {
			/**
			 * List of "disabled headers" - headers not fitting in the current screen due to screen size.
			 */
			disabledHeaders: {
				type: Array,
				notify: true,
				value: function () {
					return [];
				}
			},

			/**
			 * List of data to display
			 */
			data: {
				type: Array
			},

			/**
			 * Table headers/column definitions, usually configued with markup.
			 */
			headers: {
				type: Array,
				notify: true
			},

			/**
			 * Table headers to display (headers not disabled or grouped on)
			 */
			columnHeaders: {
				type: Object,
				computed: '_computeColumnHeaders(headers.length, sortedFilteredGroupedItems, groupOn, disabledHeaders.length)'
			},

			/**
			 * Whether to hide all groups but the first on initial load
			 */
			hideButFirst: {
				type: Boolean,
				value: true
			},

			/**
			 * Whether to hide groups with no items.
			 */
			hideEmptyGroups: {
				type: Boolean,
				value: true
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

			/*
			 * Whether to reverse sort order
			 */
			sortDescending: {
				type: Boolean,
				value: false
			},

			/**
			 * The header ID to sort on.
			 */
			sortOn: {
				type: String,
				value: null
			},

			/**
			 * The header ID to group on.
			 */
			groupOn: {
				type: String,
				value: null,
				observer: '_groupOnChanged'
			},

			/**
			 * Workaround kicker to cause regrouping.
			 */
			groupKick: {
				type: Number,
				value: 0
			},

			/**
			 * Workaround kicker to cause refiltering.
			 */
			filterKick: {
				type: Number,
				value: 0
			},

			/**
			 * Items matching current set filter(s)
			 */
			filteredItems: {
				type: Array,
				computed: '_filterItems(filterKick)'
			},

			/**
			 * Grouped items structure after filtering.
			 */
			filteredGroupedItems: {
				type: Array,
				computed: '_groupItems(filteredItems, groupKick)'
			},

			/**
			 * Sorted items structure after filtering and grouping.
			 * Set by `_sortFilteredGroupedItems()` due to the async nature of web workers.
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
				notify: true,
				observer: '_columnsChanged'
			}
		},

		observers: [
			'_sortFilteredGroupedItems(filteredGroupedItems, sortOn, sortDescending)',
			'_dataChanged(data.*)',
			'_filtersChanged(filters.*)'
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
			this._columnObserver = Polymer.dom(this).observeNodes(function (info) {
				var
					columns = [],
					children = this.getEffectiveChildren(),
					i,
					child;

				for (i = 0 ; i < children.length; i+= 1) {
					child = children[i];
					if (child.nodeType === Node.ELEMENT_NODE && child.nodeName.indexOf('COSMOZ-OMNITABLE-COLUMN') === 0) {
						columns.push(child);
					}
				}
				if (columns && columns.length > 0) {
					this.set('columns', columns);
				}
			}.bind(this));

			this.rendered = false;
			this._needs = {
				grouping: true,
				filtering: true,
				sorting: true
			};
		},

		ready: function () {
			this._needs = {
				grouping: true,
				filtering: true,
				sorting: true
			};
		},

		attached: function () {
			var hasActions = Polymer.dom(this.$.actions).getDistributedNodes().length > 0;
			if (hasActions) {
				this.selectionEnabled = true;
			}
			this.$.groupedList.scrollTarget = this.$.scroller;
			//this.setHeadersFromMarkup();
			this.rendered = true;
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

			this._needs.grouping = true;
			this._needs.filtering = true;
			this._needs.sorting = true;

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

			if (itemsAdded) {
				// If some items were added, it's easier to re-sort/re-group/re-filter
				this._needs.grouping = true;
				this._needs.filtering = true;
				this._needs.sorting = true;
			} else {
				// When only removing items, no need to process the data again
				splices.forEach(function (splice) {
					splice.removed.forEach(function (item) {
						this.$.groupedList.removeItem(item);
					}, this);
				}, this);
			}

			if (this._webWorkerReady && this.headers && this._needs.filtering) {
				this._debounceFilterItems();
			}
		},

		_columnsChanged: function (columns, oldColumns) {
			this.columns.forEach(function (column) {
				this.listen(column, 'filter-changed', '_onColumnFilterChanged');
			}, this);
		},

		_onColumnFilterChanged: function (event) {
			this._needs.filtering = true;
			this._debounceFilterItems();
		},

		_debounceFilterItems: function () {
			this.debounce('filterItems', function () {
				this.filterKick += 1;
			});
		},
		/**
		 * Helper method to remove an item from `data`.
		 * @param  {Object} item Item to remove
		 * @return {Boolean}      Whether `data` or `selectedItems` changed
		 */
		removeItem: function (item) {
			this.arrayDelete('data', item);
		},

		/**
		 * Remove multiple items from `data`
		 */
		removeItems: function (items) {
			var i;
			for (i = items.length - 1; i >= 0; i -= 1) {
				this.arrayDelete('data', items[i]);

			}
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

		_groupOnChanged: function (newValue, oldValue) {
			this._needs.grouping = true;
			if (this.filteredItems) {
				this.groupKick += 1;
			}
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

		onGroupCheckboxChange: function (event) {
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

		onItemCheckboxChange: function (event, detail) {
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

		isItemSelect: function (item) {
			this.$.groupedList.isItemSelected(item);
		},

		toggleGroup: function (event) {
			this.$.body.querySelector('#groupedList').toggleFold(event.model);
		},

		getFoldIcon: function (folded) {
			return folded ? 'expand-more' : 'expand-less';
		},

		renderItemProperty: function (itemNotify, header, ui) {
			var
				item = itemNotify.base,
				prop;
			if (item === undefined || header === undefined) {
				return '';
			}
			// TODO: Cleaner solution?
			if (item.placeholder) {
				return '';
			}
			prop = this.resolveProp(item, header.id);
			return this.renderObject(prop, ui, header);
		},

		renderObject: function (obj, ui, header) {
			if (obj === undefined || obj === '') {
				return '';
			}

			if (header.renderFunc) {
				return header.renderFunc.call(this.dataHost, obj);
			}

			if (obj instanceof Object) {
				return "Can't render " + JSON.stringify(obj);
			}

			return obj;
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

		/**
		 * Render a unique list of possible values to filter the dataset with, for each header/column.
		 * @param {[type]} item [description]
		 */
		setHeaderValues: function () {
			this.data.forEach(function (item, index) {
				this.headers.forEach(function (header, headerIndex) {
					var
						value = this.resolveProp(item, header.id),
						hasValue = false,
						label = this.renderObject(value, false, header);

					header.values.some(function (headerValue, headerValueIndex) {
						if (headerValue.label === label) {
							hasValue = true;
							return true;
						}
					});
					if (!hasValue) {
						header.values.push({
							label: label,
							value: value
						});
					}
				}.bind(this));
			}.bind(this));
			this._sortHeaderValues();
		},

		_sortHeaderValues: function () {
			this.headers.forEach(function (header, headerIndex) {
				var valueLength = header.values.length;
				header.values.sort(function (a, b) {
					if (a.label < b.label) {
						return -1;
					}
					return 1;
				});

				if (header.type === 'amount') {
					header.values.sort(function (a, b) {
						if (a.value.amount < b.value.amount) {
							return -1;
						}
						return 1;
					});

					header.rangeMin = header.values[0].value.amount;
					header.rangeMax = header.values[valueLength - 1].value.amount;
				}
			}.bind(this));

		},

		dataRowChanged: function (event, detail) {
			var
				element = event.target,
				model = event.model,
				header = event.model.__data__.header,
				item = event.model.__data__.item,
				value = element.value;

			if (header.type === 'number') {
				value = parseInt(value, 10);
			}
			model.set('item.' + header.id, value);

			//item[outerModel.header.id] = sender.value;
			this.fire('cz-data-row-changed', {
				model: model,
				item: item
			});
			this.fire('data-changed', {
				action: 'updateItem',
				data: this.data
			});
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

		getColumnById: function (id) {
			var col;
			this.columns.some(function (column) {
				if (column.id === id) {
					col = column;
					return true;
				}
			});
			return col;
		},

		getHeader: function (id) {
			var foundHeader;
			this.headers.some(function (header, index) {
				if (header.id === id) {
					foundHeader = header;
					return true;
				}
			});
			return foundHeader;
		},

		_computeColumnHeaders: function (headersNotify, sortedFilteredGroupedItems, groupOn, numDisabledHeaders) {
			if (!this.headers) {
				return;
			}
			var filteredHeaders = [];
			this.headers.forEach(function (header, index) {
				if (header.id !== groupOn && this.disabledHeaders.indexOf(header) === -1) {
					filteredHeaders.push(header);
				}
			}.bind(this));
			return filteredHeaders;
		},

		_getFunctionByName: function (name, context) {
			if (!name) {
				return undefined;
			}

			var
				parts = name.split('.'),
				func,
				funcName,
				i;
			if (parts.length === 1) {
				func = this.dataHost[name];
			} else {
				funcName = parts.pop();
				for(i = 0; i < parts.length; i += 1) {
					context = context[parts[i]];
				}
				func = context[funcName];
			}
			return typeof func === 'function' ? func : undefined;
		},

		setHeadersFromMarkup: function () {
			var ctx = this,
				markupHeaders = Polymer.dom(this).querySelectorAll('header'),
				newHeaders = [];

			markupHeaders.forEach(function (headerElement, index) {
				var header = {
						disabled: 	false,
						editable: 	headerElement.hasAttribute('editable'),
						id: 		headerElement.id,
						linkbase: 	headerElement.getAttribute('linkbase'),
						linkprop: 	headerElement.getAttribute('linkprop'),
						name: 		Polymer.dom(headerElement).innerHTML,
						priority: 	parseInt(headerElement.getAttribute('priority') || 0, 10),
						type: 		headerElement.getAttribute('type') || 'default',
						values: 	[],
						filters: 	[],
						rangeFilter: {},
						wrap: 		headerElement.hasAttribute('wrap'),
						rangeSelect: headerElement.getAttribute('range-select') === 'true'
					},
					defaultRenderFunc = 'render' + header.type.charAt(0).toUpperCase() + header.type.substr(1),
					defaultFilterFunc = 'filter' + header.type.charAt(0).toUpperCase() + header.type.substr(1);
				header.renderFunc = ctx._getFunctionByName(headerElement.getAttribute('render-func') || defaultRenderFunc, window);
				header.filterFunc = ctx._getFunctionByName(headerElement.getAttribute('filter-func') || defaultFilterFunc, window);
				newHeaders.push(header);
			});
			this.headers = newHeaders;
			if (this._needs.grouping) {
				this.groupKick += 1;
			}
		},

		_filterItems : function (filterKick) {
			if (!this.columns) {
				return null;
			}
			if (!this.data || this.data.length === 0) {
				this._needs.grouping = false;
				this._needs.sorting = false;
				this._needs.filtering = false;
				return;
			}

			var filteredItems = this.data.filter(function (item) {
				return this._filterItem(item);
			}, this);

			this._needs.filtering = false;
			this._needs.grouping = true;
			return filteredItems;
		},

		_filterItem: function (item) {
			return this.columns.every(function (column) {
				return column.applyFilter(item);
			}, this);
		},


		_groupItems: function (filteredItems, groupKick) {
			if (!this.columns) {
				return null;
			}

			if (!filteredItems || filteredItems.length === 0) {
				return [];
			}
			if (!this._needs.grouping) {
				return filteredItems;
			}


			var
				groupOnColumn = this.getColumnById(this.groupOn),
				groups = [],
				itemStructure = {};

			if (this.groupOn) {
				filteredItems.forEach(function (item, index) {
					var groupOnValue = this.resolveProp(item, this.groupOn);
					if (typeof groupOnValue === 'object') {
						groupOnValue = this.renderObject(groupOnValue, false, groupOnColumn);
					}
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
						items: itemStructure[key],
						visible: true
					});
				});

				groups.sort(function (a, b) {
					var v1 = this.resolveProp(a.items[0], this.groupOn), v2 = this.resolveProp(b.items[0], this.groupOn);
					if (typeof v1 === 'object' && typeof v2 === 'object') {
						return cz.tools.sortObject(v1, v2);
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
					console.warn('unsupported sort', typeof v1, v1, typeof v2, v2);
					return 0;
				}.bind(this));

				if (this.hideButFirst && groups.length > 1) {
					groups.forEach(function (group, index) {
						if (index === 0) {
							return;
						}
						group.visible = false;
					});
				}

				this._groupsCount = groups.length;
			} else {
				groups = filteredItems;
				this._groupsCount = 0;
			}

			this._needs.grouping = false;

			return groups;
		},

		_sortFilteredGroupedItems: function (filteredGroupedItems, sortOn, descending) {
			if (!filteredGroupedItems) {
				return;
			}

			if (!sortOn) {
				this.set('sortedFilteredGroupedItems', filteredGroupedItems);
				this.async(this.updateWidths);
				return;
			}

			var items = [],
				numGroups = filteredGroupedItems.length,
				mappedItems,
				results = 0;

			if (this._groupsCount > 0) {
				filteredGroupedItems.forEach(function (group, index) {
					if (group.items && group.items.map) {
						// create a reduced version of the items array to transfer to the worker
						// with item index and property to sort on
						mappedItems = group.items.map(function (item, originalItemIndex) {
							return {
								index: originalItemIndex,
								value: item[sortOn]
							};
						});
						// Sort the reduced version of the array
						this.$.sortWorker.process({
							meta: {
								groupName: group.name,
								groupId: group.id,
								index: index,
								checked: group.checked,
								visible: group.visible
							},
							reverse: descending,
							sortOn: 'value',
							data: mappedItems
						}, function (data) {
							results += 1;
							items[data.meta.index] = {
								name: data.meta.groupName,
								id: data.meta.groupId,
								// HACK(pasleq): set a checked property to all groups to workaround issue with paper-checkbox
								checked: data.meta.checked,
								visible: data.meta.visible
							};
							items[data.meta.index].items = data.data.map(function (item, index) {
								return group.items[item.index];
							});
							if (results === numGroups) {
								this.set('sortedFilteredGroupedItems', items);
								this.async(this.updateWidths);
							}
						}.bind(this));
					}
				}, this);
			} else {
				// No grouping
				mappedItems = filteredGroupedItems.map(function (item, originalItemIndex) {
					return {
						index: originalItemIndex,
						value: item[sortOn]
					};
				});

				this.$.sortWorker.process({
					reverse: descending,
					sortOn: 'value',
					data: mappedItems
				}, function (data) {
					items = data.data.map(function (item, index){
						return filteredGroupedItems[item.index];
					});
					this.set('sortedFilteredGroupedItems', items);
					this.async(this.updateWidths);
				}.bind(this));
			}
		},

		_computeIcon: function (item, expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},

		toggleExtraColumns: function (event, detail) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},

		getNumFiltered: function (group) {
			if (group === undefined || group === null) {
				return;
			}
			var groupIndex = this.groupedItems.indexOf(group), filteredItems = this.filteredSortedGroupedItems[groupIndex].length;
			return filteredItems - 1;
		},
		/**
		 * Enable/disable columns to properly fit in the available space.
		 *
		 * @param  {Event} event    (optional) Resize event, required for "bigger" events
		 * (set event.detail.bigger = true)
		 * @memberOf element/cz-omnitable
		 */
		updateWidths: function (event, detail, a) {

			if (!this.rendered || !this.columnHeaders) {
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
		renderLink: function (header, model) {
			var link;
			if (!header || !model) {
				return '';
			}
			if (!header.linkbase || !header.linkprop) {
				return '#!/invalid/link';
			}
			if (header.linkbase[0] === '#') {
				// static url
				link = header.linkbase;
			} else {
				link = this.resolveProp(model, header.linkbase);
			}
			return link + this.resolveProp(model, header.linkprop);
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
		//TODO: Use cosmoz-behaviors
		/**
		 * Resolve a JS object path to its property value
		 * @param  {Object} item The JS object
		 * @param  {String} path The (recursive) object property such as "counterParty.name"
		 * @return {mixed}      The value of the object property
		 * @memberOf element/cz-omnitable
		 */
		resolveProp: function (item, path) {
			if (item === undefined || path === undefined) {
				return '';
			}
			// TODO: Cleaner solution ?
			if (item.placeholder && Object.keys(item).length === 1) {
				return '';
			}
			if (item.hasOwnProperty(path)) {
				return item[path];
			}
			var firstDotIndex = path.indexOf('.'), firstProp, restOfPropPath;
			if (firstDotIndex > 0) {
				firstProp = path.substring(0, firstDotIndex);
				restOfPropPath = path.substring(firstDotIndex + 1);
				return this.resolveProp(item[firstProp], restOfPropPath);
			}
			console.warn('item does not have property/path', item, path);
			return '';
		},

		_computeCellClasses: function (column, columnIndex) {
			return 'cell ' + 'cell'+ columnIndex;
		},

		_computeClasses: function (type, headerType, index) {
			return [
				type,
				'c' + index,
				'type-' + headerType
			].join(' ');
		},

		_computeHeaderClasses: function (headerType, index) {
			return [
				'header',
				'c' + index,
				'header-type-' + headerType
			].join(' ');
		},

		_computeItemClasses: function (item, expanded, disabledHeadersCount) {
			var	classes = [
				'item'
			];

			if (disabledHeadersCount > 0) {
				classes.push('expandable');
			}

			if (expanded) {
				classes.push('expanded');
			}

			return classes.join(' ');
		},

		_computeItemRowClasses: function (change) {
			var
				item = change.base,
				classes = [
					'item-row'
				];

			if (item.checked) {
				classes.push('selected');
			}
			if (item.placeholder) {
				classes.push('width-setter');
			}
			return classes.join(' ');
		},

		// TODO: Generalize into behavior, more args
		_allTrue: function (arg1, arg2) {
			return arg1 && arg2;
		},

		_onWebWorkerReady: function () {
			this._webWorkerReady = true;
			if (this._needs.filtering) {
				this._debounceFilterItems();
			}
		},

		onSortSelected: function (event, detail) {
			if (detail.selected === this.sortOn) {
				// FIXME: Causes double re-sort
				this.sortDescending = !this.sortDescending;
				// FIXME: Needed to update menu label text
				this.sortOn = '';
				this.sortOn = detail.selected;
				return;
			}
			this.sortDescending = false;
		},

		getSortOrder: function (id, sortOn, descending) {
			if (id !== sortOn) {
				return;
			}
			var dir;
			if (descending) {
				dir = this._('Descending');
			} else {
				dir = this._('Ascending');
			}
			return ' (' + dir + ')';
		},

		addFilter: function (id, value) {
			var header = this.getHeader(id),
				headerIndex = this.headers.indexOf(header),
				ac = this.$$('#header .header.c' + headerIndex + ' cosmoz-autocomplete');
			if (!ac) {
				console.warn("wtf?", ac);
				return;
			}
			ac.selectByValue(value);
		}
	});
}());