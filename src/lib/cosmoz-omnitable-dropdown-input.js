import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { render, styles as inputStyles } from '@neovici/cosmoz-input';

const observedAttributes = [
	'label',
	'value',
	'slot',
	'always-float-label',
	'sort-handle',
];

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

	/* Sort handle button when embedded in label */
	label .sg {
		display: inline-flex;
		width: 10px;
		cursor: pointer;
		align-items: center;
		margin-bottom: 6px;
		overflow: hidden;
		flex: none;
		background: none;
		border: none;
		outline: none;
		color: inherit;
		padding: 0;
		vertical-align: middle;
	}
	
	label .sg span {
		display: none;
	}
	
	label .sg svg {
		display: block;
	}
	
	label .sg[data-on] {
		color: var(--cosmoz-omnitable-checkbox-checked-color, var(--primary-color));
	}
	
	label .sg:not([data-on='desc']) {
		transform: scaleY(-1);
	}
	
	:host(:not(:hover)) label .sg:not([data-on]) {
		display: none;
	}
`;

const renderControl = (value, slot) => html`<div
	id="input"
	part="input"
	role="button"
	class="control"
	slot=${slot}
>
	${value || ''}
</div>`;

const renderLabel = (label, sortHandle) =>
	sortHandle ? html`${sortHandle} ${label}` : label;

const DropdownInput = ({ label, value, slot, sortHandle }) =>
	render(renderControl(value, slot), { label: renderLabel(label, sortHandle) });

customElements.define(
	'cosmoz-omnitable-dropdown-input',
	component(DropdownInput, {
		observedAttributes,
		styleSheets: [style],
	}),
);
