/*global Cosmoz, document, Polymer, window*/

(function () {

	"use strict";

	Polymer({
		is: 'cosmoz-bottom-bar',
		behaviors: [
			Cosmoz.ViewInfoBehavior
		],
		listeners: {
			'viewinfo-resize': 'onResize',
			'iron-overlay-closed': '_dropdownClosed'
		},
		properties: {
			/** Whether the bar is active/shown (always active when fixed) */
			active: {
				type: Boolean,
				value: false,
				observer: 'activeChanged',
				reflectToAttribute: true
			},
			/** Whether the bar is fixed (and take up space) or shows/hides from the bottom when needed - usually fixed on desktop and not mobile */
			fixed: {
				type: Boolean,
				value: false,
				observer: 'fixedChanged'
			},
			/** Bar height (not applicable when "matchParent" or "matchElementHeight" is set) */
			barHeight: {
				type: Number,
				value: 64
			},
			/** Optional text to display at bottom left corner */
			info: {
				type: String,
				value: ''
			},
			/** Reference element from which to inherit height */
			matchElementHeight: {
				type: Object,
				value: null
			},
			/** Whether to match the height of parent (set reference element to parent) */
			matchParent: {
				type: Boolean,
				value: false
			},
			/** Scroller element to listen to when deciding whether or not to show the bar. Bar will be shown while scrolling up or when reaching bottom */
			scroller: {
				type: Object,
				observer: 'scrollerChanged'
			},
			scrollerOverflow: {
				type: Boolean,
				value: false,
				notify: true
			},
			menuActions: {
				type: Boolean,
				value: false
			},
			_observer: {
				type: Object
			}
		},
		activeChanged: function (newValue, oldValue) {
			/**
			 * 'active' will change as the transition _starts_.
			 * When turned on (before showing), turn the host overflow on so that
			 * the component can take up more than 0px at all.
			 * When turned off (before hiding), set canvas overflow to hidden so that
			 * the bar disappears as the translate transform transition is performed.
			 */
			if (this.active || this.fixed) {
				this.style.overflow = 'visible';
				if (this._readied) {
					this._layoutActions(true); // Retry fitting the buttons on activate
				}
			} else {
				this.$.canvas.style.overflow = 'hidden';
			}
			this.onResize();
		},
		setBarOverflow: function (event) {
			/**
			 * 'setBarOverflow' will run as the bar transition is _completed_.
			 * After showing, turn canvas overflow on so that menus and other components in the bar can
			 * overflow out of the bar.
			 * After hiding, turn host overflow off so that it doesn't cover any other element on screen.
			 */
			if (this.active || this.fixed) {
				this.$.canvas.style.overflow = 'visible';
			} else {
				this.style.overflow = 'hidden';
			}
		},
		attached: function () {
			this._observer = Polymer.dom(this).observeNodes(this.childrenUpdated);
		},
		detached: function () {
			Polymer.dom(this).unobserveNodes(this._observer);
		},
		created: function () {
			this.scrollHandler = this._scrollManagement.bind(this);
		},
		ready: function () {
			this.async(function () {
				// Make sure 'fixed' bottom-bars get a chance to set 'initial' heights
				this._layoutActions(true);
				this.fixedChanged();
				this.style.overflow = (this.active || this.fixed)
					? 'visible'
					: 'hidden';
				this.$.canvas.style.overflow = this.style.overflow;
				if (this.matchParent) {
					this.setAttribute('matching', '');
					this.matchElementHeight = this.parentElement;
				}
				if (this.effects > 0) {
					this.$.bar.classList.add('fade');
				}
				this.onResize();
			});
		},
		childrenUpdated: function (info) {
			this._layoutActions(true);
			this.onResize();
		},
		fixedChanged: function () {
			this.style.maxHeight = this.fixed
				? 'initial'
				: '0px';
			this.scrollHandler();
		},
		getElements: function (contentElement) {
			var
				elements = [],
				nodeList = Polymer.dom(contentElement).getDistributedNodes();

			Object.keys(nodeList).forEach(function (index) {
				var node = nodeList[index];
				if (node instanceof window.HTMLElement) {
					elements.push(node);
				}
			});

			return elements;
		},
		_dropdownClosed: function (e) {
			this.$.dropdownButton.active = false;
		},
		_layoutActions: function (bigger, second) {
			/**
			 * Layout the actions available as buttons or menu items
			 *
			 * If the window is resizing down, just make sure that all buttons fits, and if not,
			 * move one to menu and call itself async (to allow re-rendering) and see if we fit.
			 * Repeat until the button fits or no buttons are left.
			 *
			 * If the window is sizing up, try to place a menu item out as a button, call itself
			 * async (to allow re-rendering) and see if we fit - if we don't, remove the button again.
			 *
			 * We also need to keep track of `_scalingUp` between calls since the resize might fire
			 * a lot of events, and we don't want to be starting multiple "calculation processes"
			 * since this will result in an infinite loop.
			 *
			 * The actual layouting of actions will be performed by adding or removing the 'button'
			 * attribute from the action, which will cause it to match different content insertion
			 * points.
			 *
			 * @param  {Boolean} bigger If we're sizing up
			 * @param  {Boolean} second To make sure we don't end up in an endless loop, when we
			 * trigger ourself 'bigger', we should make sure if it is the second run or a new event
			 *
			 */

			var
				buttonsBar = this.$.buttons,
				fits = buttonsBar.scrollWidth <= (buttonsBar.clientWidth + 1),
				actionButtons = this.getElements(this.$.actionButtons),
				lastButton,
				nodes = this.getElements(this.$.actionMenu),
				emptyMenu = nodes.length === 0,
				upsync = (!!this._scalingUp === !!second),
				i,
				button;

			for (i = 0; i < actionButtons.length; i += 1) {
				button = actionButtons[i];
				if (typeof button.textOverflow === "function") {
					fits = !button.textOverflow();
					break;
				}
				if (button.scrollWidth > button.clientWidth) {
					fits = false;
					break;
				}
			}


			if (fits && actionButtons.length > 3) {
				return;
			}

			this.menuActions = !emptyMenu;

			if (fits && bigger && !emptyMenu) {
				if (!upsync) {
					return;
				}
				this.menuActions = false;
				if (nodes.length > 1) {
					this.menuActions = true;
				}
				if (nodes[0].hasAttribute('button')) {
					console.error('button in menu!');
					return;
				}
				Polymer.dom(nodes[0]).setAttribute('button', '');
				nodes[0].onclick = this.onActionClick;
				this._scalingUp = true;
				this.async(function () {
					this._layoutActions(true, true);
				});
				return;
			}

			this._scalingUp = false;

			if (!fits && actionButtons.length > 0) {
				lastButton = actionButtons[actionButtons.length - 1];
				Polymer.dom(lastButton).removeAttribute('button');
				this.menuActions = true;
				this.async(this._layoutActions);
			}

		},
		onActionClick: function (event, detail, sender) {
			var actionButton = event.currentTarget;
			if (actionButton && actionButton.hasAttribute('button')) {
				actionButton.dispatchEvent(new window.CustomEvent('action', {
					bubbles: true,
					cancelable: true,
					detail: {
						item: actionButton
					}
				}));
				event.stopPropagation();
			}
		},
		onActionSelect: function (event, detail, element) {
			if (detail.isSelected) {
				detail.item.dispatchEvent(new window.CustomEvent('action', {
					bubbles: true,
					cancelable: true,
					detail: {
						item: detail.item
					}
				}));
				element.selected = undefined;
				event.stopPropagation();
			}
		},
		onResize: function (event) {
			if (this.matchElementHeight && this.matchElementHeight.offsetHeight) {
				this.barHeight = this.matchElementHeight.offsetHeight;
			}
			this.$.canvas.style.top = this.fixed
				? 0
				: -this.barHeight + 'px';
			this.$.canvas.style.height = this.barHeight + 'px';
			this._scrollManagement();
			this.setBarTranslate();
			if (event && (this.active || this.fixed)) {
				var bigger = event && event.detail && event.detail.bigger;
				this._layoutActions(bigger);
			}
		},
		onMenuTap: function (event) {
			this.$.dropdown.open();
		},
		_scrollManagement: function (event) {
			if (this.scroller === undefined) {
				return;
			}
			var
				scrollTop = this.scroller.scrollTop,
				up = this.lastScroll > scrollTop,
				scrollerHeight = this.scroller.clientHeight,
				scrollerScrollHeight = this.scroller.scrollHeight,
				atBottom = (scrollTop + scrollerHeight + (this.barHeight * 0.7)) >= scrollerScrollHeight;


			this.active = up || atBottom;
			this.scrollerOverflow = scrollerScrollHeight > scrollerHeight;
			this.lastScroll = scrollTop;
		},
		scrollerChanged: function (newScroller, oldScroller) {
			if (newScroller === undefined) {
				return;
			}
			if (oldScroller) {
				oldScroller.removeEventListener('scroll', this.scrollHandler);
			}
			if (newScroller) {
				if (!newScroller.addEventListener) {
					console.warn("New scroller doesn't have addEventListener", newScroller);
					return;
				}
				newScroller.addEventListener('scroll', this.scrollHandler);
				this.lastScroll = newScroller.scrollTop;
			}
		},
		setBarTranslate: function () {
			var
				px = (this.active || this.fixed)
					? 0
					: this.barHeight,
				transform = 'translate3d(0, ' + px + 'px, 0)';
			this.$.bar.style.transform = transform;
			this.$.bar.style.webkitTransform = transform; // Safari
		}
	});
}());
