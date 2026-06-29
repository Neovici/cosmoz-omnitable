import { styles as inputStyles, render } from '@neovici/cosmoz-input';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

const observedAttributes = ['label', 'value', 'slot', 'disabled', 'variant'];

const style = css`
	${inputStyles}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`;

const DropdownInput = (host) => {
	const { label, value, slot, variant } = host;

	const control = html`<div
		id="input"
		part="input"
		role="button"
		class="control"
		slot=${slot}
	>
		${value || ''}
	</div>`;

	return render(control, { label, variant });
};

customElements.define(
	'cosmoz-omnitable-dropdown-input',
	component(DropdownInput, {
		observedAttributes,
		styleSheets: [style],
	}),
);
