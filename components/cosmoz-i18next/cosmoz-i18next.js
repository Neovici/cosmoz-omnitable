/*global Cosmoz, i18n, Polymer */

if (typeof Cosmoz === 'undefined') {
	var Cosmoz = {};
}

(function () {

	"use strict";

	var translationElements = [];

	/**
	 * @polymerBehavior Cosmoz.TranslatableBehavior
	 * @demo demo/index.html
	**/
	Cosmoz.TranslatableBehavior = {
		properties: {
			t: {
				type: Object,
				value: function () {
					return {};
				}
			}
		},

		_argumentsToObject: function (args, skipnum) {
			var argsArray = Array.prototype.slice.call(args, skipnum);
			return this._arrayToObject(argsArray);
		},
		_arrayToObject: function (array) {
			var ctx = this,
				object = {};

			array.forEach(function (item, index) {
				if (object.count === undefined && typeof item === "number") {
					object.count = item;
				}
				// Don't send the 't' kicker to i18n for arguments
				if (item !== ctx.t) {
					object[index] = item;
				}
			});
			return object;
		},

		_ensureInitialized: function () {
			if (!i18n.isInitialized()) {
				// default i18n init, to ensure translate function will return something
				// even when there is no <i18next> element in the page.
				i18n.init({lng: 'en', resStore: { en: {}}, fallbackLng: false});
			}
		},

		/**
		 * Convenience method for `gettext`
		 */
		_: function (key) {
			this._ensureInitialized();

			var args = this._argumentsToObject(arguments, 1);
			// Don't make i18next fetch more translations
			delete args.count;
			return i18n.t(key, args);
		},
		ready: function () {
			translationElements.push(this);
		},
		detached: function () {
			var i = translationElements.indexOf(this);
			if (i >= 0) {
				translationElements.splice(i, 1);
			}
		},

		/**
		 * #### Basic functionality
		 * ##### `_(string, t)`
		 *     <div>{{ _(‘My translation’, t) }}</div>
		 *
		 * #### Interpolation
		 * ##### `_(string, [args], t)`
		 *     <div>{{ _(‘Hello {0}’, user.name, t) }}</div>
		 *
		 * @param {String} key String to translate
		 * @param {Object} t Behavior t object
		 * @return {String} Translated string
		 */
		gettext: function (key) {
			this._ensureInitialized();

			var args = this._argumentsToObject(arguments, 1);
			// Don't make i18next fetch more translations
			delete args.count;
			return i18n.t(key, args);
		},

		/**
		 * #### Plurals
		 * ##### `ngettext(singular, plural, count, t)`
		 *     <div>{{ ngettext(‘My translation’,
		 *     		‘My translations’, count, t) }}</div>
		 *
		 * #### Plurals with interpolation
		 * ##### `ngettext(singular, plural, [count and other args], t)`
		 *     <div>{{ ngettext(‘My translation for “{1}”’,
		 *         	‘My {0} translations for “{1}”’,
		 *         	count, ‘hello’, t) }}</div>
		 * _The first number-argument found will be used as ‘count’ to decide plural._
		 *
		 * @param {String} singular Singular string
		 * @param {String} plural Plural string
		 * @return {String} Translated string
		 */
		ngettext: function (singular, plural) {
			this._ensureInitialized();

			var
				args = this._argumentsToObject(arguments, 2),
				n = args.count,
				key;

			delete args.count;

			if (i18n.pluralExtensions.needsPlural(i18n.lng(), n)) {
				args.defaultValue = plural;
				key = i18n.options.ns.defaultNs + i18n.options.nsseparator + singular + i18n.options.pluralSuffix;
			} else {
				key = singular;
				args.defaultValue = singular;
			}
			return i18n.t(key, args);
		},

		/**
		 * #### Context
		 * ##### `pgettext(context, ‘text’, t)`
		 *     <div>{{ pgettext(‘Cancel Invoice’,
		 *     		‘Cancel’, t) }}</div>
		 *
		 * #### Context with interpolation
		 * ##### `pgettext(context, ‘text’, [args], t)`
		 *     <div>{{ pgettext(‘Cancel Invoice’, ‘Cancel {0}’,
		 *     		document.type, t) }}</div>
		 *
		 * @param {String} context Context string
		 * @param {String} key String to translate
		 * @return {String} Translated string
		 */
		pgettext: function (context, key) {
			this._ensureInitialized();

			var args = this._argumentsToObject(arguments, 2);
			args.context = context;
			// Don't make i18next fetch more translations
			delete args.count;
			return i18n.t(key, args);
		},

		/**
		 * #### Plurals and context
		 * ##### `npgettext(context, singular, plural, count, t)`
		 *     <div>{{ npgettext('Cancel invoice',
		 *     		‘My cancellation’,
		 *     		‘My {0} cancellations’,
		 *     		count, t) }}</div>
		 *
		 * #### Plurals and context with interpolation
		 * ##### `npgettext(context, singular, plural, count, t)`
		 *     <div>{{ npgettext('Cancel invoice',
		 *     		‘My {1} cancellation’,
		 *     		‘My {0} {1} cancellations’,
		 *     		count, document.type, t) }}</div>
		 *
		 * @param {String} context Context string
		 * @param {String} singular Singular string
		 * @param {String} plural Plural string
		 * @return {String} Translated string
		 */
		npgettext: function (context, singular, plural) {
			this._ensureInitialized();

			var
				args = this._argumentsToObject(arguments, 3),
				n = args.count,
				key = singular,
				contextKeyPart = context
					? '_' + context
					: '';

			delete args.count;

			if (i18n.pluralExtensions.needsPlural(i18n.lng(), n)) {
				args.defaultValue = plural;
				key = i18n.options.ns.defaultNs + i18n.options.nsseparator + singular + contextKeyPart + i18n.options.pluralSuffix;
			} else {
				key = singular;
				args.context = context;
			}

			return i18n.t(key, args);
		}
	};

	Polymer({
		is: 'cosmoz-i18next',
		properties: {
			domain: {
				type: String,
				value: "messages"
			},
			interpolationPrefix: {
				type: String,
				value: '__'
			},
			interpolationSuffix: {
				type: String,
				value: '__'
			},
			language: {
				type: String,
				value: "en"
			},
			namespace: {
				type: String,
				value: 'translation'
			},
			translations: {
				type: Object,
				observer: '_setTranslations'
			},
			keySeparator: {
				type: String,
				value: '.'
			},
			nsSeparator: {
				type: String,
				value: ':'
			}
		},
		_setTranslations: function () {
			i18n.removeResourceBundle(this.language, this.namespace);
			i18n.addResources(this.language, this.namespace, this.translations);
			translationElements.forEach(function (element) {
				element.set('t', {});
			});
		},
		ready: function () {
			i18n.init({
				interpolationPrefix: this.interpolationPrefix,
				interpolationSuffix: this.interpolationSuffix,
				keyseparator: this.keySeparator,
				lng: this.language,
				nsseparator: this.nsSeparator,
				resStore: {}
			});
		}
	});
}());