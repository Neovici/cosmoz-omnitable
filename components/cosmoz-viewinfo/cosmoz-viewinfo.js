/*global Cosmoz, Polymer, ResizeSensor, window */

if (typeof Cosmoz === 'undefined') {
	var Cosmoz = {};
}

(function () {

	"use strict";

	var
		viewInfoInstances = [],
		sharedViewInfo = {
			desktop: false,
			effects: 10,
			height: 0,
			landscape: false,
			mobile: false,
			portrait: true,
			tablet: false,
			width: 0
		};

	/**
	 * Behavior to inherit the viewInfo property with device and viewport info
	 @polymerBehavior
	 */
	Cosmoz.ViewInfoBehavior = {
		properties: {
			/**
			 * viewInfo object
			 * {
			 * 	desktop: Boolean,
			 * 	effects: Number (1-10),
			 * 	height: Number,
			 * 	landscape: Boolean,
			 * 	mobile: Boolean,
			 * 	portrait: Boolean,
			 * 	tablet: Boolean,
			 * 	width: Number
			 * }
			 */
			viewInfo: {
				type: Object,
				notify: true
			}
		},

		attached: function () {
			viewInfoInstances.push(this);
			// Needed to make template views trigger on load and not only on resize
			this.viewInfo = sharedViewInfo;
		},

		detached: function () {
			var i = viewInfoInstances.indexOf(this);
			if (i >= 0) {
				viewInfoInstances.splice(i, 1);
			}
		}
	};

	Polymer({
		behaviors: [
			Polymer.IronResizableBehavior
		],
		is: 'cosmoz-viewinfo',
		properties: {
			/**
			 * Level of effects to use (0-10)<br/>
			 * NOT_IN_USE
			 */
			effects: {
				type: Number,
				value: 10,
				observer: '_effectsChanged'
			},
			/**
			 * Width breakpoint for mobile<br/>
			 * https://www.google.com/design/spec/layout/adaptive-ui.html#adaptive-ui-breakpoints
			 */
			mobileBreakpoint: {
				type: Number,
				value: 600
			},
			/**
			 * Width breakpoint for tablet<br/>
			 * https://www.google.com/design/spec/layout/adaptive-ui.html#adaptive-ui-breakpoints
			 */
			tabletBreakpoint: {
				type: Number,
				value: 960
			},
			/**
			 * Minimum delay between each viewinfo-resize event (ms)
			 */
			throttleTimeout: {
				type: Number,
				value: 250
			},
			/**
			 * Placeholder for ResizeSensor
			 */
			_sensor: {
				type: Object
			},
			/**
			 * Whether we're currently throttling resize-events
			 */
			_throttling: {
				type: Boolean,
				value: false
			}
		},
		listeners: {
			'iron-resize': '_onResize'
		},
		attached: function () {
			// this._sensor = new ResizeSensor(this, this._onResize.bind(this));
			// (pasleq) Calling _onResize here is not needed as this will be done by IronResizableBehavior.attached.
			// this._onResize();
		},
		_effectsChanged: function (newValue) {
			this._notifyInstances({ effects: newValue });
		},
		/**
		 * Loop over registered ViewInfoBehavior components and notify of changes<br/>
		 * TODO: Don't reset the viewInfo property, but rather notify specific properties
		 */
		_notifyInstances: function (delta) {
			viewInfoInstances.forEach(function (instance) {
				if (!instance) {
					return;
				}
				Object.keys(delta).forEach(function (key) {
					instance.notifyPath('viewInfo.' + key, delta[key]);
				});
			});
		},
		/**
		 * Called when ResizeSensor detects a resize, throttles `viewinfo-resize` events
		 */
		_onResize: function () {
			console.log('iron-resize!');
			var
				update = this._updateViewSize(),
				throttleFunction;

			if (update === undefined) {
				return;
			}

			throttleFunction = function () {
				viewInfoInstances.forEach(function (element) {
					// Only fire on visible elements, offsetParent should be null for hidden
					// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
					if (element.offsetParent !== null) {
						element.fire('viewinfo-resize', {
							bigger: update
						});
					}
				});
				this._throttling = false;
			}.bind(this);

			if (!this._throttling) {
				window.setTimeout(throttleFunction, this.throttleTimeout);
				this._throttling = true;
			}
		},
		/**
		 * Recalculate viewInfo and updated sharedViewInfo accordingly
		 */
		_updateViewSize: function () {
			var
				prevWidth = sharedViewInfo.width,
				next = {
					height: this.clientHeight || this.offsetHeight || this.scrollHeight,
					width: this.clientWidth || this.offsetWidth || this.scrollWidth
				},
				delta;

			next.portrait = next.height > next.width;
			next.landscape = !next.portrait;

			if (next.width <= this.mobileBreakpoint) {
				next.mobile = true;
				next.tablet = false;
			} else if (next.width <= this.tabletBreakpoint) {
				next.mobile = false;
				next.tablet = true;
			} else {
				next.mobile = false;
				next.tablet = false;
			}

			next.desktop = !next.mobile && !next.tablet;

			delta = this._getDelta(sharedViewInfo, next);

			Object.keys(delta).forEach(function (key) {
				sharedViewInfo[key] = delta[key];
			});

			this._notifyInstances(delta);

			return prevWidth < next.width;
		},
		/**
		 * Calculate the diff between two objects
		 */
		_getDelta: function (prev, next) {
			var delta = {};
			Object.keys(next).forEach(function (key) {
				var nextVal = next[key];
				if (prev[key] === undefined || prev[key] !== nextVal) {
					delta[key] = nextVal;
				}
			});
			return delta;
		}
	});
}());