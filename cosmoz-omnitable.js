/*global Polymer, window */
(function () {

	"use strict";

	Polymer({
		is: 'cosmoz-omnitable',
		disabledHeaders: 0,
		// help variable, by changing this variable, polymer gets a "kick" and refreshes. Same reasoning in similar variables below.
		groupIndex: {},
		needs: {},
		properties: {
			data: {
				type: Array,
				observer: '_dataChanged',
				value: null
			},
			filterKick: {
				type: Number,
				value: 0
			},
			filteredSortedGroupedItems: {
				type: Object,
				computed: 'filterSortedGroupedItems(sortedGroupedItems, filterKick)'
			},
			forceMobile: {
				type: Boolean,
				value: false
			},
			// The collection and the structure for the grouping of the data.
			groupedItems: {
				type: Array,
				computed: 'groupItems(groupKick)'
			},
			headersWithoutGroupOnHeader: {
				type: Object,
				computed: 'getHeadersWithoutGroupOnHeader(headers, groupOn, forceMobile)'
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
			headers: {
				type: Array
			},
			noData: {
				type: Boolean,
				computed: 'isEmpty(data)'
			},
			selectedItems: {
				type: Array
			},
			// calculated decides mobile or application view mode.
			simpleMobileMode: {
				type: Boolean,
				// computed: 'forceMobile || (((headersWithoutGroupOnHeader.length - disabledHeaders) <= 3) && disabledHeaders > 0)',
				value: false
			},
			sortedGroupedItems: {
				type: Array,
				computed: 'sortGroupedItems(groupedItems, sortOn)'
			},
			sortOn: {
				type: String,
				value: "name"
			},
			groupKick: {
				type: Number,
				value: 0
			},
			groupOn: {
				type: String,
				value: null,
				observer: '_groupOnChanged'
			},
			// collection of opened groups over the omnitable. This for minimizing overhead when sorting, allowing for bypassing closed groups.
			toggledGroups: {
				type: Object,
				computed: 'toggleGroupVisibility(filteredSortedGroupedItems, toggleGroupKick)'
			},

			// private
			_hasActions: {
				type: Boolean,
				value: false
			}
		},
		refreshKick: 0,
		toggleGroupKick: 0,
		visibilityKick: 0,
		_dataChanged: function () {
			this.needs.grouping = true;
			this.needs.filtering = true;
			this.needs.sorting = true;
			// Delay the computing of groupedItems property until domReady, i.e. until the headers are defined.
			if (this.headers) {
				console.log('headers!');
				this.groupKick += 1;
			}
			this.fire('data-changed', {
				action: 'replace',
				data: this.data
			});
			console.log('_dataChanged');
		},
		removeItem: function (item) {
			var dataIndex, change = false;
			// Removes item from selection if needed.
			if (this.selectedItems) {
				dataIndex = this.selectedItems.indexOf(item);
				if (dataIndex > -1) {
					this.selectedItems.splice(dataIndex, 1);
					change = true;
				}
			}
			dataIndex = this.data.indexOf(item);
			if (dataIndex > -1) {
				this.data.splice(dataIndex, 1);
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
		onAction: function (event, detail, element) {
			detail.item.dispatchEvent(new window.CustomEvent('run', {
				bubbles: true,
				cancelable: true,
				detail: {
					omnitable: this,
					items: this.selectedItems
				}
			}));
			element.selected = undefined;
			event.stopPropagation();
		},
		getSelection: function () {
			return this.selectedItems;
		},
		created: function () {
			this.disabledHeaders = 0;
			this.rendered = false;
			this.mobileView = {
				headers: [],
				linkHeader: undefined
			};
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
			// TODO: cz.state.app.addEventListener('resize', this.updateWidths.bind(this));
		},
		attached: function () {
			this._hasActions = Polymer.dom(this.$.actions).getDistributedNodes().length > 0;
			this.setHeadersFromMarkup();
			this.rendered = true;
		},
		_groupOnChanged: function (oldValue, newValue) {
			console.log('asdfsd');
			this.needs.grouping = true;
			this.groupKick += 1;
		},
		onAllCheckboxChange: function (event, detail) {

			if (event.target === null) {
				return;
			}

			console.log('onAllCheckboxChange', event.target, detail);

			var element = event.target,
				checked = element.checked,
				that = this;

			if (!this.groupedItems) {
				return;
			}

			this.groupedItems.forEach(function (group, index) {
				group.checked = checked;
				that.selectGroupItems(group);
			});
		},
		onGroupCheckboxChange: function (event, detail, element) {
			var group = event.target.templateInstance.model.groupModel;
			this.selectGroupItems(group);
		},
		onItemCheckboxChange: function (event, detail) {
			console.log('onItemCheckboxChange', event, detail);
			var item = event.model.__data__.item;
			this.selectItem(item);
		},
		selectGroupItems: function (group) {
			var that = this,
				groupIndex = this.groupedItems.indexOf(group),
				groupGroup = this.filteredSortedGroupedItems[groupIndex];

			groupGroup.forEach(function (item, index) {
				item.checked = group.checked;
				if (!item.placeholder) {
					that.selectItem(item);
				}
			});
		},
		selectItem: function (item) {
			var itemIndex;
			if (item.checked) {
				this.selectedItems = this.selectedItems || [];
				if (this.selectedItems.indexOf(item) === -1) {
					this.selectedItems.push(item);
				}
			} else if (this.selectedItems) {
				itemIndex = this.selectedItems.indexOf(item);
				if (itemIndex > -1) {
					this.selectedItems.splice(itemIndex, 1);
				}
			}
		},
		toggleGroup: function (event, detail, element) {
			var group = event.target.templateInstance.model.groupModel;
			group.visible = !group.visible;
			this.toggleGroupKick += 1;
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
						if (typeof itemVal === 'object' && that.renderObject(itemVal, false, header.type) === headerFilter.label) {
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
			this.headers.forEach(function (header) {
				header.values = [];
			});
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
			return this.renderObject(prop, ui, header.type);
		},
		renderObject: function (obj, ui, type) {
			if (obj === undefined || obj === '') {
				return '';
			}
			if (type) {
				switch (type) {
				case 'amount':
				case 'money':
					return cz.tools.money.render(obj, ui);
				case 'date':
				case 'datetime':
					return 'date';
					// return cz.tools.date.render(obj, ui);
				}
			}
			if (typeof obj !== 'object') {
				return obj;
			}
			var ret = cz.tools.renderObject(obj, ui), uo = 'unknown object';
			if (ret === uo) {
				console.warn(uo, obj);
			}
			return ret;
		},
		setHeaderValues: function (item) {
			var that = this;
			this.headers.forEach(function (header, headerIndex) {
				var
					value = that.resolveProp(item, header.id),
					hasValue = false,
					label = that.renderObject(value, false, header.type);

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
			var
				outerModel = sender.templateInstance.model,
				keys = Object.keys(outerModel),
				key,
				n = keys.length,
				i = 0,
				item;

			for (; i < n; i += 1) {
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
			this.headers.forEach(function (header, index) {
				if (!header.disabled && (headerToDisable === undefined || headerToDisable.priority >= header.priority)) {
					headerToDisable = header;
				}
			});
			if (headerToDisable) {
				headerToDisable.disabled = true;
				this.disabledHeaders += 1;
				this.async(this.updateWidths);
			}
		},
		enableColumn: function () {
			var headerToEnable;
			this.headers.forEach(function (header, index) {
				if (header.disabled && (headerToEnable === undefined || headerToEnable.priority < header.priority)) {
					headerToEnable = header;
				}
			});
			headerToEnable.disabled = false;
			this.disabledHeaders -= 1;
			// Fake a resize bigger event, in the off chance that we go past
			// the size of two columns in one resize, like maximizing a window
			this.async(function () {
				this.scalingUp = true;
				this.updateWidths({
					detail: {
						bigger: true,
						second: true
					}
				});
			});
		},
		filterSortedGroupedItems: function (sortedGroupedItems, filterKick) {
			console.log('filterSortedGroupedItems', sortedGroupedItems);
			if (!this.sortedGroupedItems) {
				return null;
			}

			var that = this,
				filteredGroupedItems = [];

			this.clearHeaderValues();

			this.sortedGroupedItems.forEach(function (groupItems, index) {
				filteredGroupedItems[index] = [{ placeholder: true }];
				groupItems.forEach(function (item, itemIndex) {
					that.setHeaderValues(item);
					if (that.needs.filtering) {
						that.filterItem(item);
					}
					if (item.visible) {
						filteredGroupedItems[index].push(item);
						that.selectItem(item);
					}
				});
			});
			this.needs.filtering = false;
			return filteredGroupedItems;
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
		getHeadersWithoutGroupOnHeader: function (headers, groupOn, forceMobile) {
			if (!headers) {
				return;
			}
			if (forceMobile) {
				return this.mobileView.headers;
			}
			var filteredHeaders = [];
			headers.forEach(function (header, index) {
				if (header.id !== groupOn) {
					filteredHeaders.push(header);
				}
			});
			return filteredHeaders;
		},
		groupItems: function (groupKick) {
			// Computed properties are created and evaluated as soon as the component is created.
			// This function needs the headers, but they are set in the ready callback (and cannot be set earlier as it needs the DOM children),
			// so we might be in situations where the data is available but not the headers.
			// (was the case in invoice view, the omnitable that display invoice rows).
			if (!this.headers) {
				return null;
			}
			if (!this.data || this.data.length === 0) {
				this.needs.grouping = false;
				this.needs.sorting = false;
				this.needs.filtering = false;
				return;
			}
			if (!this.needs.grouping) {
				console.log('no grouping needed!', this.groupedItems);
				return this.groupedItems;
			}
			console.log('groupItems');
			this._groupOnHeader = this.getHeader(this.groupOn);

			var groups = [],
				itemStructure = {},
				that = this;

			if (that.groupOn) {
				this.data.forEach(function (item, index) {
					var groupOnValue = that.resolveProp(item, that.groupOn);
					if (typeof groupOnValue === 'object') {
						groupOnValue = that.renderObject(groupOnValue, false, that._groupOnHeader.type);
					}
					if (groupOnValue !== undefined) {
						if (!itemStructure[groupOnValue]) {
							itemStructure[groupOnValue] = [];
						}
						itemStructure[groupOnValue].push(item);
					}
				});
			} else {
				itemStructure[''] = this.data.slice(0);
			}
			console.log(itemStructure);
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
			this.needs.sorting = true;
			console.log(groups);
			return groups;
		},
		setHeadersFromMarkup: function () {
			var ctx = this,
				markupHeaders = Polymer.dom(this).querySelectorAll('header'),
				mobileHeaders = [], newHeaders = [];

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
				mobileHeaders.push(header);
				newHeaders.push(header);
			});
			mobileHeaders.sort(function (a, b) {
				if (a.priority === b.priority) {
					return 0;
				}
				return a.priority > b.priority ? -1 : 1;
			});
			mobileHeaders.splice(3, mobileHeaders.length - 3);
			this.mobileView.headers = mobileHeaders;
			mobileHeaders.some(function (header, index) {
				header.mobile = true;
				if (header.linkbase && !ctx.mobileView.linkHeader) {
					ctx.mobileView.linkHeader = header;
					return true;
				}
			});
			this.headers = newHeaders;
			if (this.needs.grouping) {
				this.groupKick += 1;
			}
			console.log(this.headers);
		},
		_computeClass: function (data) {
			console.log('_computeClass', data);
		},
		sortGroupedItems: function (groupedItemsKick, sortOn) {
			console.log('sortGroupedItems');
			if (!this.groupedItems) {
				return null;
			}
			var items = [],
				that = this,
				lastIndex,
				mappedItems;

			this.groupedItems.forEach(function (group, index) {
				lastIndex = index;
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
								group: group,
								index: index
							},
							sortOn: 'value',
							data: mappedItems
						}, function (data) {
							items[data.meta.index] = data.data.map(function (item, index) {
								return group.items[item.index];
							});
							if (data.meta.group.visible || data.meta.index === lastIndex) {
								that.needs.filtering = true;
								that.filterKick += 1;
							}
						});
					}
				}
			});
			this.filterKick += 1;
			return items;
		},
		toggleExtraColumns: function (event, detail, sender) {
			var item = event.target.templateInstance.model.model;
			item.expanded = !item.expanded;
		},
		toggleGroupVisibility: function (filteredSortedGroupedItems, toggleGroupKick) {
			var groups = [], that = this, visibleGroups = [];
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
		updateWidths: function (event) {
			if (!this.rendered) {
				return;
			}
			var body = this.$ ? this.$.body : null, bigger = event && event.detail && event.detail.bigger, coreList, fits, headerTds, widthSetter, widthTds;
			if (!body) {
				return;
			}
			coreList = Polymer.dom(body).querySelector('#coreList');
			fits = coreList.scrollWidth <= coreList.clientWidth;
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
			if (fits && bigger && this.disabledHeaders > 0) {
				/**
				 * Only scale up if:
				 * * It's the first scale up step - a native 'resize' event without detail.second
				 * * it's the second scale up step - scalingup set by first event and detail.second
				 */
				/**
				 * Convert undefined to false
				 */
				event.detail.second = event.detail.second || false;
				/**
				 * Make sure to sync scalingUp and detail.second since a mismatch can occur if a
				 * 'resize' triggers a scalingUp process that hasn't completed.
				 */
				if (this.scalingUp === event.detail.second) {
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
			if (!fits) {
				this.async(this.disableColumn);
				return;
			}
			widthSetter = Polymer.dom(coreList).querySelector('.width-setter');
			if (widthSetter === null) {
				return;
			}
			headerTds = Polymer.dom(this.$.header).querySelectorAll('.header');
			// not found in this.$ since it's not present in Simple Mobile Mode
			widthTds = Polymer.dom(widthSetter).querySelectorAll('.cell');
			if (this.simpleMobileMode) {
				headerTds.forEach(function (headerElement, index) {
					headerElement.style.width = 'inherit';
					headerElement.style.maxWidth = 'inherit';
				});
			} else {
				widthTds.forEach(function (element, index) {
					var headerElement = headerTds[index], csElement = window.getComputedStyle(element, null), newWidth = element.clientWidth - parseInt(csElement.getPropertyValue('padding-left'), 10) - parseInt(csElement.getPropertyValue('padding-right'), 10);
					headerElement.style.width = newWidth + 'px';
					headerElement.style.maxWidth = newWidth + 'px';
				});
			}
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
		//TODO: @memberOf behavior/cz-common-behavior
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
			if (typeof obj === 'string' && obj.length === 0) {
				return true;
			}
			return false;
		},
		//TODO: @memberOf behavior/cz-common-behavior
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

		_computeItemClasses: function (item) {
			var classes = [
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

		_getClass: function (className, arg) {
			var classAttr = 'layout vertical fit';
			if (arg) {
				classAttr = classAttr + ' ' + className;
			}
			return classAttr;
		},

		// TODO: Generalize into behavior, more args
		_allTrue: function (arg1, arg2) {
			return arg1 && arg2;
		}
	});
}());