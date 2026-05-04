import { xCircleIcon } from '@neovici/cosmoz-icons/untitled';
import { tagged as css } from '@neovici/cosmoz-utils';
import { component, html } from '@pionjs/pion';
const styles = css`
	:host {
		display: flex;
		cursor: pointer;
	}
	:host(:not([light])) {
		position: absolute;
		right: calc(var(--cz-spacing) * -4);
		z-index: 1;
	}

	:host(:not([visible])) {
		display: none !important;
	}

	:host .icon {
		top: 10px;
		color: var(--cz-color-text-disabled);
		border-radius: var(--cz-radius-full);
		box-sizing: border-box;
		transition:
			background-color 0.25s,
			color 0.25s;
		float: right;
	}

	:host .icon:hover {
		opacity: 0.6;
	}
`;

const Clear = () => html`
	<style>
		${styles}
	</style>
	${xCircleIcon({ className: 'icon', width: '18', height: '18' })}
`;

customElements.define('cosmoz-clear-button', component(Clear));
