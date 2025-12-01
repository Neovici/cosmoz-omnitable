import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { render, styles as inputStyles } from '@neovici/cosmoz-input';

const observedAttributes = ['label', 'value', 'slot', 'always-float-label'];

const style = css`
	${inputStyles}

	:host {
		--text-align: left;
	}

	:host([text-align='right']) {
		--text-align: right;
	}

	:host([text-align='center']) {
		--text-align: center;
	}

	:host::part(control) {
		width: 100%;
	}

	#input {
		color: var(--color);
		user-select: none;
		cursor: pointer;
		min-height: var(--line-height);
		text-align: var(--text-align);
		white-space: nowrap;
		overflow: clip;
		/* TODO: Remove later on, for compat only */
		font-size: 16px;
		font-family: sans-serif, Verdana, Arial;
	}

	label {
		display: block;
		text-align: var(--text-align);
		transform-origin: var(--text-align) top;
		/* TODO: Remove later on, for compat only */
		font-size: 13px;
	}

	:host(:not([always-float-label])) label {
		transform: none !important;
	}
`;

const DropdownInput = (host) => {
	const { label, value, slot } = host;

	const control = html`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${slot}
	>
		${value || ''}
	</div>`;

	return render(control, { label });
};

customElements.define(
	'cosmoz-omnitable-dropdown-input',
	component(DropdownInput, {
		observedAttributes,
		styleSheets: [style],
	}),
);
