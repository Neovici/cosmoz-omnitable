import { styles as inputStyles, render } from '@neovici/cosmoz-input';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const observedAttributes = [
	'label',
	'value',
	'slot',
	'always-float-label',
	'disabled',
];

const style = css`
	${inputStyles}
	:host(:focus-within) label, :host([always-float-label]) label {
		transform: translateY(-75%) scale(0.85);
	}

	:host([disabled]) {
		pointer-events: none;
		cursor: default;
		--cosmoz-input-disabled-opacity: 1;
	}

	:host([disabled]) .line {
		border-bottom-style: solid;
	}

	#input {
		text-align: left;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		flex: 4 0.00001 calc(var(--cz-spacing) * 12.5);
		min-width: calc(var(--cz-spacing) * 5);
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
