import { dedupingMixin } from '@polymer/polymer/lib/utils/mixin';
import { templatize } from '@polymer/polymer/lib/utils/templatize';

/**
 * Prepares instances of templates and re-uses recycled instances.
 * @polymer
 * @mixinFunction
 */
export const
	HEADER_TEMPLATE = 'header',
	CELL_TEMPLATE = 'cell',
	EDIT_TEMPLATE = 'edit-cell',
	templatizeMixin = dedupingMixin(base => class extends base { // eslint-disable-line max-lines-per-function
		constructor() {
			super();

			this._templateCtors = {};
			this._templateInstances = [];
			this._recycledInstance = [];
		}

		/**
	 * Creates a new template instance of the required type.
	 *
	 * The light and shadow DOM is searched for templates matching the selector
	 * `template.<type>`.
	 *
	 * @param	 {String} type	the type of the template
	 * @param	 {Object} props the instance's properties
	 * @return {TemplateInstance} the template instance
	 */
		getTemplateInstance(type, props) {
		// first search in the recycled instances pool
			let instance = this._recycledInstance.find(i => i._type === type);

			if (instance) {
			// reuse recycled instance
				instance = this._reuseInstance(instance, props);
			} else {
			// if no recycled instance is available, create a new one
				instance = this._createInstance(type, props);
			}

			// add to active instances pool
			this._templateInstances.push(instance);
			return instance;
		}

		/**
	 * Marks an instance for re-use.
	 *
	 * @param	 {TemplateInstance} instance an instance
	 * @return {TemplateInstance}					 the detached instance
	 */
		recycleInstance(instance) {
			const index = this._templateInstances.indexOf(instance);
			if (index < 0) {
				return instance;
			}

			// remove from active instances pool
			this._templateInstances.splice(index, 1);
			this._recycledInstance.push(instance);
			return instance;
		}

		/**
	 * Tests whether the instance is marked for re-use.
	 * @param	 {TemplateInstance}	 instance an instance
	 * @return {Boolean}										true if instance is recycled
	 */
		isRecycledInstance(instance) {
			return this._recycledInstance.includes(instance);
		}

		/**
	 * Cleans up references to recycled instances when the element is detached.
	 *
	 * @return {void}
	 */
		disconnectedCallback() {
			super.disconnectedCallback();
			this._recycledInstance = [];
		}

		/**
	 * Reuses an already created instance.
	 *
	 * @param	 {TemplateInstance} instance an instance
	 * @param	 {Object}						props		 the instances properties
	 * @return {TemplateInstance}					 the instance
	 */
		_reuseInstance(instance, props) {
		// remove from recycled pool
			this._recycledInstance.splice(this._recycledInstance.indexOf(instance), 1);

			// update props
			this._forwardProperties(instance, props);

			// add children to DOM
			const {
				children, root
			} = instance;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				root.appendChild(child);
			}
			return instance;
		}

		/**
	 * Creates a new instance of the required type.
	 *
	 * @param	 {String} type	the type of the template
	 * @param	 {Object} props the instance's properies
	 * @return {TemplateInstance} the instance
	 */
		_createInstance(type, props) {
		// initialize a new instance of the template
			const instance = new (this._getTemplateCtor(type))(props);
			// store the type of the template on the instance, for future reference
			instance._type = type;
			return instance;
		}

		/**
	 * Searches for a template node of the required type and templatizes it.
	 *
	 * @see https://polymer-library.polymer-project.org/2.0/api/namespaces/Polymer.Templatize
	 * @param	 {String} type the type of the template
	 * @return {TemplateInstanceBase} the templatized template
	 */
		_getTemplateCtor(type) {
			if (this._templateCtors[type]) {
				return this._templateCtors[type];
			}

			// search for the template in the light and shadow DOM
			const template = this.querySelector('template.' + type) || this.root.querySelector('template.' + type);

			// throw error if template does not exist
			if (!template) {
				throw new Error('No template of type ' + type + ' found.');
			}

			// templatize the DOM template node
			this._templateCtors[type] = templatize(template, this, {
			// populate events with event.model
				parentModel: true,
				// forward host property changes to the instances
				forwardHostProp: this._forwardHostProp(type)
			});

			return this._templateCtors[type];
		}

		/**
	 * Generates a function that forwards properties to instances of a certain type.
	 *
	 * @param	 {String} type the type of the template
	 * @return {Function}		 a function that forwards props to instances
	 */
		_forwardHostProp(type) {
		/**
		 * Forwards properties to instances.
		 *
		 * @this Cosmoz.OmnitableTemplatizeMixin
		 * @param	 {String} prop	the host property
		 * @param	 {String} value the properties' value
		 * @return {void}
		 */
			return function (prop, value) {
				this._templateInstances
					.filter(i => i._type === type)
					.forEach(instance => {
						instance.forwardHostProp(prop, value);
					});
			};
		}

		/**
	 * Forward one property.
	 * @param {object} instance Instance.
	 * @param {string} name Property name.
	 * @param {any} value Property value.
	 * @param {boolean} flush Whether to flush properties.
	 * @returns {void}
	 */
		_forwardProperty(instance, name, value, flush = false) {
			instance._setPendingProperty(name, value);

			if (flush && instance._flushProperties) {
				instance._flushProperties(true);
			}
		}

		/**
	 * Forward many properties.
	 * @param {object} instance Instance.
	 * @param {object} props Properties to forward.
	 * @param {boolean} flush Whether to flush properties.
	 * @returns {void}
	 */
		_forwardProperties(instance, props = {}, flush = true) {
			Object.keys(props).forEach(key => this._forwardProperty(instance, key, props[key]));

			if (flush && instance._flushProperties) {
				instance._flushProperties(true);
			}
		}
	});
