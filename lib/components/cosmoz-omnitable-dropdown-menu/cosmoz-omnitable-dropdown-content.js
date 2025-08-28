import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { connectable } from './connectable';

const style = css`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
	}
	::slotted(*) {
		display: block;
	}
`;

export const Content = () =>
	html`<div class="wrap" part="wrap"><slot></slot></div>`;

customElements.define(
	'cosmoz-omnitable-dropdown-menu-content',
	connectable(component(Content, { styleSheets: [style] })),
);
