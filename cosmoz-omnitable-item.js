import '@polymer/paper-item/paper-item-shared-styles';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

class OmnitableItem extends PolymerElement {
	static get template() {
		return html`
		<style include="paper-item-shared-styles">
			/* polymer-cli v1.7.x linter breaks with empty line */
		</style>
		<style>
			:host {
				display: flex;
				align-items: center;
				@apply --paper-font-subhead;

				@apply --paper-item;
				white-space: nowrap;
			}
		</style>
		<span>[[ label ]]</span>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-item';
	}

	static get properties() {
		return {
			label: {
				type: String,
				observer: '_labelChanged'
			}
		};
	}

	// HACK: ensure paper-dropdown-menu updates current selected item label after translation change
	// See https://github.com/PolymerElements/paper-dropdown-menu/issues/197
	_labelChanged() {
		if (!this.classList.contains('iron-selected')) {
			return;
		}

		const detail = { item: this };
		this.dispatchEvent(new CustomEvent('iron-deselect', { detail }));
		this.dispatchEvent(new CustomEvent('iron-select', { detail }));
	}
}
customElements.define(OmnitableItem.is, OmnitableItem);
