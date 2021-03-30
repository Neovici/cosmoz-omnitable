import { translatable } from '@neovici/cosmoz-i18next';
import {
	mixin, Template
} from '@neovici/cosmoz-utils';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
window.Cosmoz = window.Cosmoz || {};

/**
 * @polymer
 * @customElement
 * @appliesMixin translatable
 */
class OmnitableColumnListData extends translatable(mixin(Template, PolymerElement)) {
	static get template() {
		return html`
		<style>
			:host {
				display: block;
			}

			:host a {
				color: var(--primary-link-color, inherit);
			}

			[hidden] {
				display: none;
			}

			ul {
				list-style-type: none;
				margin: 0.3em 0;
				padding-left: 0;
			}

			li {
				text-overflow: ellipsis;
				overflow: hidden;
			}
		</style>

		<ul hidden$="[[ isEmpty(items) ]]">
			<li>
				<span>[[ _firstItem(items) ]]</span>
			</li>
			<li class="see-more" hidden$="[[_hideExpand(items, _expanded)]]">
				<a href="#" on-tap="_toggleExpand">[[ _('and {0} more', _othersCount, t) ]]</a>
			</li>
			<template is="dom-repeat" items="[[ _otherItems(items, _expanded) ]]" as="item">
				<li>
					<span class="item">[[ item ]]</span>
				</li>
			</template>
			<li class="see-less" hidden$="[[ _hideCollapse(items, _expanded) ]]">
				<a href="#" on-tap="_toggleExpand">[[ _('See less', t) ]]</a>
			</li>
		</ul>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-column-list-data';
	}

	static get properties() {
		return {
			items: {
				type: Array
			},

			_expanded: {
				type: Boolean,
				value: false
			},

			_othersCount: {
				type: Number,
				computed: '_computeOthersCount(items)'
			}
		};
	}

	_firstItem(items) {
		if (items !== undefined && items !== null && items.length > 0) {
			return items[0];
		}
	}

	_hideExpand(items, expanded) {
		if (items !== undefined && items.length !== null) {
			return items.length <= 2 || expanded;
		}
		return true;
	}

	_hideCollapse(items, expanded) {
		if (items !== undefined && items.length !== null) {
			return items.length <= 2 || !expanded;
		}
		return true;
	}

	_otherItems(items, expanded) {
		if (items !== undefined && items !== null) {
			if (items.length <= 2 || expanded) {
				return items.slice(1);
			}
		}
	}

	_computeOthersCount(items) {
		if (items !== undefined && items !== null) {
			return items.length - 1;
		}
	}

	_toggleExpand(event) {
		this._expanded = !this._expanded;
		event.stopPropagation();
		event.preventDefault();
		this.dispatchEvent(new CustomEvent('iron-resize', { bubbles: true }));
	}
}

customElements.define(OmnitableColumnListData.is, OmnitableColumnListData);
