import '@polymer/iron-icon/iron-icon';
import '@polymer/iron-icons/iron-icons';

import { html } from '@polymer/polymer/lib/utils/html-tag';
import { PolymerElement } from '@polymer/polymer/polymer-element';

class CosmozClearButton extends PolymerElement {
	static get template() {
		return html`
		<style is="custom-style">
			:host(:not([light])) {
				position: absolute;
				right: 0;
				z-index: +1;
			}

			:host(:not([visible])){
				display: none !important;
			}

			:host(:not([light])) iron-icon {
				top: 10px;
				margin: 2px 7px;
				color: #cdcdcd;
				background-color: #a6a6a6;
				border-radius: 500px;
				cursor: pointer;
				min-width: 16px;
				width: 16px !important;
				min-height: 16px;
				height: 16px;
				padding: 2px;
				box-sizing: border-box;
				transition: background-color 0.25s, color 0.25s;
				float: right;
			}

			:host(:not([light])) iron-icon:hover {
				background-color: #b0b0b0;
				color: #dfdfdf;
			}
		</style>
		<iron-icon icon="clear"></iron-icon>
`;
	}

	static get is() {
		return 'cosmoz-clear-button';
	}
	static get properties() {
		return {
			light: {
				reflectToAttribute: true,
				type: Boolean,
				value: false
			},
			visible: {
				reflectToAttribute: true,
				type: Boolean,
				value: false
			}
		};
	}
}
customElements.define(CosmozClearButton.is, CosmozClearButton);
