import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import { render } from 'lit-html';
import { set } from '@polymer/polymer/lib/utils/path';

/**
 * Allows manipulation of elements.
 * @callback OmnitableRepeaterMixin~forEachElementCallback
 * @param {HTMLElement} element
 * @param {OmnitableColumn} column
 * @param {TemplateInstance} instance
 * @return {void}
 */

const editableRegex = /columns\.(\d*)\.editable/iu;

/**
 *
 * @polymer
 * @mixinFunction
 */
export const repeaterMixin = dedupingMixin(base => class extends base { // eslint-disable-line max-lines-per-function
	static get properties() {
		return {
			columns: {
				type: Array
			},

			groupOnColumn: {
				type: Object,
				observer: '_groupOnColumnChanged'
			}
		};
	}

	constructor() {
		super();
		this._elements = [];
		this._columnsObserver = null;
	}

	/**
	 * Adds an observer to render the cells when the columns are changed.
	 * @return {void}
	 */
	trackColumns() {
		if (this._columnsObserver) {
			throw new Error('The columns are already tracked.');
		}

		this._createMethodObserver('_columnsChanged(columns.*)');

		// HACK we have to muck around with the property effect references because
		// _createMethodObserver does not provide any reference to the property
		// effect so we can easily remove it
		this._columnsObserver = this[this.PROPERTY_EFFECT_TYPES.OBSERVE]['columns']
			.find(fx => fx.info.methodName === '_columnsChanged');
	}

	/**
	 * Stops reacting to column changes.
	 * @return {void}
	 */
	stopTrackingColumns() {
		if (!this._columnsObserver) {
			throw new Error('The columns are not tracked.');
		}

		this._removePropertyEffect('columns', this.PROPERTY_EFFECT_TYPES.OBSERVE, this._columnsObserver);
		this._columnsObserver = null;
	}

	/**
	 * Renders all cells.
	 * @return {void}
	 */
	renderCells() {
		this._addElements(0, this.columns.length);
	}

	/**
	 * Destroys all cells.
	 * @return {void}
	 */
	destroyCells() {
		this._removeElements(0, this.columns);
	}

	/**
	 * Forwards a property change to all cells.
	 * @param	 {String} property the property
	 * @param	 {any}		value		 the new value
	 * @return {void}
	 */
	forwardChange(property, value) {
		this.forwardPathChange({
			path: property,
			value
		});
	}

	/**
	 * Forwards a path change to all cells.
	 * @param	 {Object} changeRecord the change record
	 * @return {void}
	 */
	forwardPathChange(changeRecord) {
		this._elements.forEach(element =>
			this._forwardNotifyPath(element.__instance, changeRecord.path, changeRecord.value, true)
		);
	}

	/**
	 * Runs a callback on each element.
	 * @param	 {OmnitableRepeaterMixin~forEachElementCallback} callback the callback
	 * @return {void}
	 */
	forEachElement(callback) {
		this._elements.forEach(element => callback(element, element.__column, element.__instance));
	}

	/* eslint-disable no-empty-function, no-unused-vars */

	/**
	 * The type of element to be repeated.
	 * Must be defined in implementors.
	 * @return {String} The type of element to be repeated.
	 */
	get _elementType() {
		return null;
	}

	/**
	 * Slot name assigned to the repeated elements.
	 * Must be defined in implementors.
	 * @return {String} Slot name assigned to the repeated elements.
	 */
	get _slotName() {
		return null;
	}

	/**
	 * Get a template instance for the specified column
	 * Must be defined in implementors.
	 * @abstract
	 * @param {OmnitableColumnMixin} column - The column.
	 * @return {Object} - The instance.
	 */
	_getTemplateInstance(column) {}

	/**
	 * Get a render function for the specified column
	 * Must be defined in implementors.
	 * @abstract
	 * @param {OmnitableColumnMixin} column - The column.
	 * @return {Function} - The render function.
	 */
	_getRenderFn(column) {}

	/* eslint-enable no-empty-function, no-unused-vars */

	/**
	 * Configure a newly created repeated element
	 *
	 * @param	 {HTMLElement}					element	 the root cell element
	 * @param	 {OmnitableColumnMixin} column	 the column
	 * @param	 {TemplateInstance}			instance the template instance
	 * @return {void}
	 */
	_configureElement(element, column, instance) {
		element.__instance = instance;
		element.__column = column;

		if (column === this.groupOnColumn) {
			element.setAttribute('hidden', true);
		}

		element.setAttribute('slot', this._slotName);

		// TODO: cleanup when templatizer is dropped
		if (instance.render) {
			column.addEventListener('cosmoz-column-prop-changed', instance.render);
		}

		element.__cleanup = () => {
			element.__column.recycleInstance(element.__instance);
			element.__instance = element.__column = element.column = null;
			column.removeEventListener('cosmoz-column-prop-changed', instance.render);
		};
	}

	_columnsChanged({
		path, base, value
	}) {
		const reMatch = editableRegex.exec(path);

		if (path === 'columns') {
			if (this._elements && this._elements.length) {
				const removedColumns = this._elements.map(element => {
					return element.__column;
				});
				this._removeElements(0, removedColumns);
			} else {
				this._elements = [];
			}
			this._addElements(0, this.columns.length);
		} else if (path === 'columns.splices') {
			this._renderSplices(value.indexSplices);
		} else if (reMatch) {
			// eslint-disable-next-line no-bitwise
			const index = reMatch[1] >> 0,
				column = base[index];
			this._removeElements(index, [column]);
			this._addElements(index, 1);
		} else if (path !== 'columns.length') {
			// column property change
			// eslint-disable-next-line no-console
			console.warn('column property change', path);
		}
	}

	_renderSplices(splices) {
		splices.forEach(splice => {
			if (splice.removed.length) {
				this._removeElements(splice.index, splice.removed);
			}
			if (splice.addedCount > 0) {
				this._addElements(splice.index, splice.addedCount);
			}
		});
	}

	_getLitInstance(updateFn) {
		const state = {
			item: this.item,
			selected: this.selected,
			expanded: this.expanded,
			folded: this.folded
		};
		updateFn(state);

		return {
			_setPendingPropertyOrPath(path, value) {
				set(state, path, value);
			},
			_flushProperties() {
				updateFn(state);
			},
			render() {
				updateFn(state);
			}
		};
	}

	_addElements(start, count) {
		const end = start + count;
		for (let i = start; i < end; i++) {
			const element = document.createElement(this._elementType),
				column = this.columns[i],
				renderFn = this._getRenderFn?.(column);

			if (renderFn) {
				const instance = this._getLitInstance(state => render(renderFn(column, state), element));
				this._configureElement(element, column, instance);
			} else {
				const instance = this._getTemplateInstance(column);
				this._configureElement(element, column, instance);
				element.appendChild(instance.root);
			}

			if (i < this._elements.length) {
				this.insertBefore(element, this._elements[i]);
			} else {
				this.appendChild(element);
			}

			this._elements.splice(i, 0, element);
		}
	}

	_removeElements(start, removedColumns) {
		this._elements
			.splice(start, removedColumns.length)
			.forEach(element => {
				element.__cleanup();
				this.removeChild(element);
			});
	}

	_groupOnColumnChanged(column, previousColumn) {
		if (!this._elements || !this._elements.length) {
			return;
		}
		if (previousColumn) {
			const previousElement = this._elements.find(e => e.__column === previousColumn);
			if (previousElement) {
				previousElement.removeAttribute('hidden');
			}
		}
		if (column) {
			const element = this._elements.find(e => e.__column === column);
			if (element) {
				element.setAttribute('hidden', '');
			}
		}
	}

	_forwardNotifyPath(instance, path, value, flush = false) {
		instance._setPendingPropertyOrPath(path, value, false, true);
		if (flush) {
			instance._flushProperties(true);
		}
	}
});
