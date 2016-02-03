/*global Cosmoz, Polymer, window */
(function () {

	"use strict";

	Polymer({

		is: 'cosmoz-omnitable',

		properties: {
			disabledHeaders: {
				type: Array,
				notify: true,
				value: function () {
					return [];
				}
			},

			data: {
				type: Array,
				observer: '_dataChanged',
				value: null
			},

			headers: {
				type: Array,
				notify: true
			},

			columnHeaders: {
				type: Object,
				computed: '_computeColumnHeaders(headers.length, sortedFilteredGroupedItems, groupOn, disabledHeaders.length)'
			},

			// hide all groups except first
			hideButFirst: {
				type: Boolean,
				value: true
			},

			hideEmptyGroups: {
				type: Boolean,
				value: true
			},

			noData: {
				type: Boolean,
				computed: 'isEmpty(data)'
			},

			expandedItems: {
				type: Array,
				value: function () {
					return [];
				}
			},

			// FIXME: Needed to properly notify item-templates of redraw?
			numExpandedItems: {
				type: Number,
				value: 0
			},

			selectionEnabled: {
				type: Boolean,
				value: false
			},

			selectedItems: {
				type: Array
			},

			sortOn: {
				type: String,
				value: 'name'
			},

			groupOn: {
				type: String,
				value: null,
				observer: '_groupOnChanged'
			},

			groupKick: {
				type: Number,
				value: 0
			},

			filterKick: {
				type: Number,
				value: 0
			},

			filteredItems: {
				type: Array,
				computed: '_filterItems(filterKick)'
			},

			// The collection and the structure for the grouping of the data.
			filteredGroupedItems: {
				type: Array,
				computed: '_groupItems(filteredItems, groupOn, groupKick)'
			},

			// will be computed by observer
			sortedFilteredGroupedItems: {
				type: Array
			},

			// collection of opened groups over the omnitable. This for minimizing overhead when sorting, allowing for bypassing closed groups.
			toggledGroups: {
				type: Object,
				computed: 'toggleGroupVisibility(filteredSortedGroupedItems, toggleGroupKick)'
			},

			toggleGroupKick: {
				type: Number,
				value: 0
			},

			// Keep track of width-changes to identify if we go bigger or smaller
			_previousWidth: {
				type: Number,
				value: 0
			}
		},

		observers: [
			'_sortFilteredGroupedItems(filteredGroupedItems, sortOn)'
		],

		behaviors: [
			Polymer.IronResizableBehavior,
			Cosmoz.TranslatableBehavior
		],

		listeners: {
			'iron-resize': 'updateWidths'
		},

		groupIndex: {},

		needs: {},

		// FIXME: Obsolete this, please!
		_returnValue: function (value) {
			return value;
		},

		// FIXME: Template design calls this infinitely too much, horrible performance.
		isExpanded: function (expandnotify, item, a) {
			console.log('isExpanded', expandnotify, item, a);
			return this.expandedItems.indexOf(item) !== -1;
		},

		_dataChanged: function () {
			console.log('_dataChanged');

			this.needs.grouping = true;
			this.needs.filtering = true;
			this.needs.sorting = true;

			if (this._webWorkerReady && this.headers) {
				this.filterKick += 1;
			}
		},
		removeItem: function (item) {
			var dataIndex, change = false;
			// Removes item from selection if needed.
			if (this.selectedItems) {
				dataIndex = this.selectedItems.indexOf(item);
				if (dataIndex > -1) {
					this.splice('selectedItems', dataIndex, 1);
					change = true;
				}
			}
			dataIndex = this.data.indexOf(item);
			if (dataIndex > -1) {
				this.splice('data', dataIndex, 1);
				change = true;
			}
			if (change && item.checked) {
				delete item.checked;
			}
			return change;
		},
		removeItems: function (items) {
			var groupKick = false, i;
			for (i = items.length - 1; i >= 0; i -= 1) {
				groupKick = this.removeItem(items[i]) ? true : groupKick;
			}
			if (groupKick) {
				this.groupKick += 1;
				this.fire('data-changed', {
					action: 'removeItem',
					data: this.data
				});
			}
		},
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
		getSelection: function () {
			return this.selectedItems;
		},
		created: function () {
			this.rendered = false;
			this.needs = {
				grouping: true,
				filtering: true,
				sorting: true
			};
		},
		ready: function () {
			this.needs = {
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
			this.setHeadersFromMarkup();
			this.rendered = true;
		},

		_groupOnChanged: function (newValue, oldValue) {
			this.needs.grouping = true;
			if (this.filteredItems) {
				this.groupKick += 1;
			}
		},

		onAllCheckboxChange: function (event, detail) {

			if (event.target === null) {
				return;
			}

			var checked = event.target.checked;

			if (!this.sortedFilteredGroupedItems) {
				return;
			}

			this.sortedFilteredGroupedItems.forEach(function (group, index) {
				this.setGroupProperty(index, "checked", checked);
				this.selectGroupItems(group);
			}.bind(this));
		},
		onGroupCheckboxChange: function (event) {
			var group = event.model.item;
			this.selectGroupItems(group);
			event.preventDefault();
			event.stopPropagation();
		},
		onItemCheckboxChange: function (event, detail) {
			var item = event.model.item;
			this.selectItem(item);
		},
		selectGroupItems: function (group) {
			var
				that = this,
				groupIndex = this.sortedFilteredGroupedItems.indexOf(group);

			group.items.forEach(function (item, index) {
				that.setItemPropery(groupIndex, index, 'checked', group.checked);

				if (!item.placeholder) {
					that.selectItem(item);
				}
			});
		},

		setItemPropery: function (groupIndex, itemIndex, path, value) {
			this.set('sortedFilteredGroupedItems.#' + groupIndex + '.items.#' + itemIndex + '.' + path, value);
		},

		setGroupProperty: function (groupIndex, path, value) {
			this.set('sortedFilteredGroupedItems.#' + groupIndex + '.' + path, value);
		},

		selectItem: function (item) {
			var itemIndex;
			if (item.checked) {
				this.selectedItems = this.selectedItems || [];
				if (this.selectedItems.indexOf(item) === -1) {
					this.push('selectedItems', item);
				}
			} else if (this.selectedItems) {
				itemIndex = this.selectedItems.indexOf(item);
				if (itemIndex > -1) {
					this.splice('selectedItems', itemIndex, 1);
				}
			}
		},
		toggleGroup: function (event) {
			this.$.body.querySelector('#groupedList').toggleFold(event.model);
		},

		getFoldIcon: function (folded) {
			if (folded) {
				return 'expand-more';
			}
			return 'expand-less';
		},

		filterItem: function (item) {
			var hide = false, that = this;
			this.headers.some(function (header, headerIndex) {
				if (header.filters !== undefined && header.filters.length > 0) {
					var filterFail = true;
					header.filters.some(function (headerFilter, headerFilterIndex) {
						var itemVal = that.resolveProp(item, header.id);
						if (itemVal === headerFilter.value) {
							filterFail = false;
							return true;
						}
						if (typeof itemVal === 'object' && that.renderObject(itemVal, false, header) === headerFilter.label) {
							filterFail = false;
							return true;
						}
					});
					if (filterFail) {
						hide = true;
						return true;
					}
				}
			});
			item.visible = !hide;
		},

		filterItems: function (event, detail, sender) {
			this.needs.filtering = true;
			this.filterKick += 1;
		},

		clearHeaderValues: function () {
			if (!this.headers) {
				return;
			}
			this.headers.forEach(function (header, index) {
				console.log('clearing', header);
				this.set('headers.' + index + '.values', []);
			}.bind(this));
		},
		renderItemProperty: function (item, header, ui) {
			if (item === undefined || header === undefined) {
				return '';
			}
			// TODO: Cleaner solution?
			if (item.placeholder) {
				return '';
			}
			var prop = this.resolveProp(item, header.id);
			return this.renderObject(prop, ui, header);
		},
		renderObject: function (obj, ui, header) {
			if (obj === undefined || obj === '') {
				return '';
			}

			if (header.renderFunc) {
				return header.renderFunc.call(this.dataHost, obj);
			}
			return obj;
		},
		setHeaderValues: function (item) {
			var that = this;
			this.headers.forEach(function (header, headerIndex) {
				var
					value = that.resolveProp(item, header.id),
					hasValue = false,
					label = that.renderObject(value, false, header);

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
				header.values.sort(function (a, b) {
					if (a.label < b.label) {
						return -1;
					}
					return 1;
				});
			});
		},
		dataRowChanged: function (event, detail, sender) {
			console.log('dataRowChanged');
			var
				outerModel = sender.templateInstance.model,
				keys = Object.keys(outerModel),
				key,
				i,
				item;

			for (i = 0; i < keys.length; i += 1) {
				key = keys[i];
				if (key[0] === '@') {
					item = outerModel[key].item;
					break;
				}
			}

			//item[outerModel.header.id] = sender.value;
			this.fire('cz-data-row-changed', item);
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
			console.log('disableColumn', this.disabledHeaders);
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

			console.log('enableColumn', this.disabledHeaders);
			this.splice('disabledHeaders', headerToEnableIndex, 1);
			// Fake a resize bigger event, in the off chance that we go past
			// the size of two columns in one resize, like maximizing a window
			console.log('enabling', headerToEnable);
			this.async(function () {
				this.scalingUp = true;
				this.updateWidths({
					detail: {
						second: true
					}
				});
			});
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
			console.log('_computeColumnHeaders');
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
				console.log('host function', name);
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
					disabled: false,
					editable: headerElement.hasAttribute('editable'),
					id: headerElement.id,
					linkbase: headerElement.getAttribute('linkbase'),
					linkprop: headerElement.getAttribute('linkprop'),
					name: Polymer.dom(headerElement).innerHTML,
					priority: parseInt(headerElement.getAttribute('priority') || 0, 10),
					type: headerElement.getAttribute('type') || 'default',
					values: [],
					filters: [],
					wrap: headerElement.hasAttribute('wrap')
				};
				header.renderFunc = ctx._getFunctionByName(headerElement.getAttribute('render-func') || 'render' + header.type.charAt(0).toUpperCase() + header.type.substr(1), window);
				newHeaders.push(header);
			});
			this.headers = newHeaders;
			if (this.needs.grouping) {
				this.groupKick += 1;
			}
		},

		_filterItems : function (filterKick) {
			if (!this.headers) {
				return null;
			}
			if (!this.data || this.data.length === 0) {
				this.needs.grouping = false;
				this.needs.sorting = false;
				this.needs.filtering = false;
				return;
			}

			var
				that = this,
				filteredItems = [];

			this.clearHeaderValues();

			this.data.forEach(function (item, index) {
				that.setHeaderValues(item);
				if (that.needs.filtering) {
					that.filterItem(item);
				}
				if (item.visible) {
					filteredItems.push(item);
				}
			});
			that.needs.filtering = false;
			that.needs.grouping = true;
			return filteredItems;
		},


		_groupItems: function (filteredItems, groupOn) {
			if (!this.headers) {
				return null;
			}

			if (!filteredItems || filteredItems.length === 0) {
				return;
			}
			if (!this.needs.grouping) {
				return filteredItems;
			}

			this._groupOnHeader = this.getHeader(groupOn);

			var groups = [],
				itemStructure = {},
				that = this;

			if (groupOn) {
				filteredItems.forEach(function (item, index) {
					var groupOnValue = that.resolveProp(item, that.groupOn);
					if (typeof groupOnValue === 'object') {
						groupOnValue = that.renderObject(groupOnValue, false, that._groupOnHeader);
					}
					if (groupOnValue !== undefined) {
						if (!itemStructure[groupOnValue]) {
							itemStructure[groupOnValue] = [];
						}
						itemStructure[groupOnValue].push(item);
					}
				});
			} else {
				itemStructure[''] = this.filteredItems;
			}

			Object.keys(itemStructure).forEach(function (key) {
				groups.push({
					name: key,
					id: key,
					items: itemStructure[key],
					visible: true
				});
			});

			groups.sort(function (a, b) {
				var v1 = that.resolveProp(a.items[0], that.groupOn), v2 = that.resolveProp(b.items[0], that.groupOn);
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
			});

			if (this.hideButFirst && groups.length > 1) {
				groups.forEach(function (group, index) {
					if (index === 0) {
						return;
					}
					group.visible = false;
				});
			}

			this.needs.grouping = false;

			return groups;
		},

		_sortFilteredGroupedItems: function (filteredGroupedItems, sortOn) {
			console.log('sortGroupedItems', filteredGroupedItems, sortOn);
			if (!filteredGroupedItems) {
				return null;
			}
			var items = [],
				that = this,
				numGroups = filteredGroupedItems.length,
				mappedItems,
				results = 0;

			filteredGroupedItems.forEach(function (group, index) {
				if (group.items) {
					if (!sortOn) {
						items[index] = group.items;
					} else if (group.items.map) {
						// create a reduced version of the items array to transfer to the worker
						// with item index and property to sort on
						mappedItems = group.items.map(function (item, originalItemIndex) {
							return {
								index: originalItemIndex,
								value: item[sortOn]
							};
						});
						// Sort the reduced version of the array
						that.$.sortWorker.process({
							meta: {
								groupName: group.name,
								groupId: group.id,
								index: index
							},
							sortOn: 'value',
							data: mappedItems
						}, function (data) {
							results += 1;
							items[data.meta.index] =  {
								name: data.meta.groupName,
								id: data.meta.groupId
							};
							items[data.meta.index].items = data.data.map(function (item, index) {
								return group.items[item.index];
							});
							if (results === numGroups) {
								that.needs.filtering = true;
								that.sortedFilteredGroupedItems = items;
								that.async(that.updateWidths);
							}
						});
					}
				}
			});
		},

		_computeIcon: function (item, expanded) {
			return expanded ? 'expand-less' : 'expand-more';
		},

		toggleExtraColumns: function (event, detail) {
			var item = event.model.item;
			this.$.groupedList.toggleCollapse(item);
		},

		toggleGroupVisibility: function (filteredSortedGroupedItems, toggleGroupKick) {
			console.log('toggleGroupVisibility', filteredSortedGroupedItems);
			var groups = [],
				that = this,
				visibleGroups = [];
			this.async(this.updateWidths);
			if (filteredSortedGroupedItems === undefined) {
				return;
			}
			filteredSortedGroupedItems.forEach(function (groupItems, index) {
				if (groupItems.length > 1 || !that.hideEmptyGroups) {
					groups.push(that.groupedItems[index]);
					var items = [];
					if (that.groupedItems[index].visible) {
						items = groupItems;
					} else {
						items.push({ placeholder: true });
					}
					visibleGroups.push(items);
				}
			});
			if (groups.length === 1 && !groups[0].visible) {
				groups[0].visible = true;
				this.toggleGroupKick += 1;
				return {};
			}
			return {
				groups: groups,
				items: visibleGroups
			};
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
				groupedListList,
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

			// FIXME: Ugly to dive into component local dom
			groupedListList = groupedList.$.list;
			widthSetter = groupedListList.$$('template-selector:not([hidden]) .item:not([style])');

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

		_computeClasses: function (type, headerType, index) {
			return [
				type,
				"c" + index,
				"header-type-" + headerType
			].join(" ");
		},

		_computeHeaderClasses: function (headerType, index) {
			return [
				"header",
				"c" + index,
				"header-type-" + headerType
			].join(" ");
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
			if (this.needs.filtering) {
				this.filterKick += 1;
			}
		}
	});
}());