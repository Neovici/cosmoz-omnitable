import { styles as inputStyles, render } from '@neovici/cosmoz-input';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';

type DropdownInputHost = HTMLElement & {
	label?: string;
	value?: string;
	slot?: string;
	'always-float-label'?: boolean;
	disabled?: boolean;
	variant?: string;
};

const observedAttributes = [
	'label',
	'value',
	'slot',
	'always-float-label',
	'disabled',
	'variant',
] as const satisfies readonly string[];

const style = css`
	${inputStyles}

	label {
		text-align: left;
	}

	.wrap {
		height: 40px;
	}

	#input {
		margin-top: -4px;
	}
`;

const DropdownInput = (host: DropdownInputHost) => {
	const { label, value, slot } = host;

	host.toggleAttribute('has-value', !!value);

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
	})
);
