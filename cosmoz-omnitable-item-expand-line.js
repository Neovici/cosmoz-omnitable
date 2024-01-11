import { component, html } from '@pionjs/pion';

const OmnitableItemExpandLine = ({ column }) => html`
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
			align-self: start;
		}

		.item-expand-value {
			text-align: right;
			flex-grow: 1 !important;
			flex-basis: 100px !important;
			white-space: nowrap;
		}

	</style>
	<div class="item-expand-label" title=${ column.title } part="item-expand-label">${ column.title }</div>
	<div class="item-expand-value" part="item-expand-value">
		<slot></slot>
	</div>
`;

customElements.define('cosmoz-omnitable-item-expand-line', component(OmnitableItemExpandLine));
