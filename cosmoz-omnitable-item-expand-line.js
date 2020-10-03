import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

class OmnitableItemExpandLine extends PolymerElement {
	static get template() {
		return html`
		<style>
			:host {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
		}

			.item-expand-label {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				flex: initial;
				@apply --cosmoz-omnitable-item-expand-label;
				align-self: start;
			}

			.item-expand-value {
				text-align: right;
				flex-grow: 1 !important;
				flex-basis: 100px !important;
				white-space: nowrap;
				@apply --cosmoz-omnitable-item-expand-value;
			}

		</style>
		<div class="item-expand-label" title="[[ column.title ]]">[[ column.title ]]</div>
		<div class="item-expand-value">
			<slot></slot>
		</div>
`;
	}

	static get is() {
		return 'cosmoz-omnitable-item-expand-line';
	}

	static get properties() {
		return {
			column: {
				type: Object
			}
		};
	}
}
customElements.define(OmnitableItemExpandLine.is, OmnitableItemExpandLine);
