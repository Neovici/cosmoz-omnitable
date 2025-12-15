import { tagged as css } from '@neovici/cosmoz-utils';
import { html, component } from '@pionjs/pion';

const styles = css`
	:host {
		display: flex;
	}
	:host(:not([light])) {
		position: absolute;
		right: 0;
		z-index: +1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	.icon {
		fill: currentColor;
	}

	:host([light]) {
		flex: 0 0 24px;
	}

	:host(:not([light])) .icon {
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
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host(:not([light])) .icon:hover {
		background-color: #b0b0b0;
		color: #dfdfdf;
	}
`;

const SortIcon = () => html`
	<style>
		${styles}
	</style>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="8"
		height="20"
		viewBox="0 0 8 20"
		fill="none"
	>
		<path
			d="M1 16L4 19M4 19L7 16M4 19V1"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
`;

customElements.define('cosmoz-sort-icon', component(SortIcon));
