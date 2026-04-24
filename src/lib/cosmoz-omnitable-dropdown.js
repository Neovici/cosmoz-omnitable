import '@neovici/cosmoz-dropdown';
import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import './cosmoz-omnitable-dropdown-input';

export const renderDropdown = ({
	title,
	tooltip = '',
	filterText = '',
	onOpenedChanged,
	content,
	horizontalAlign = 'left',
	externalValues = null,
}) => {
	const classes = {
		filtered: Boolean(filterText),
		...(externalValues != null && {
			[`external-values-${externalValues}`]: true,
		}),
	};

	return html`
		<style>
			.dropdown {
				outline: none;
			}
			.dropdown:focus-within .input {
				--focused: focused;
			}

			.dropdown::part(button) {
				border: none;
				cursor: pointer;
				outline: none;
				background: transparent;
				border-radius: unset;
				position: relative;
				width: 100%;
				height: 100%;
				min-height: calc(var(--cz-spacing) * 8);
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: calc(var(--cz-spacing) * -7.5);
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-size: var(--cz-text-sm);
				line-height: var(--cz-text-sm-line-height);
				font-weight: var(--cz-font-weight-medium);
				margin: 0;
				color: var(--cz-color-text-primary);
			}

			.dropdown-content {
				padding: calc(var(--cz-spacing) * 2.5);
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cz-color-bg-primary);
				border-radius: var(--cz-radius-sm);
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow: var(--cz-shadow-md);
			}
		</style>

		<cosmoz-dropdown
			@focus=${onOpenedChanged}
			class=${classMap({ ...classes, dropdown: true })}
			title=${tooltip || ''}
		>
			<cosmoz-omnitable-dropdown-input
				variant="inline"
				class="input"
				slot="button"
				.label=${title}
				.placeholder=${title}
				.value=${filterText ?? ''}
				text-align=${horizontalAlign}
				?always-float-label=${filterText?.length > 0}
			></cosmoz-omnitable-dropdown-input>
			<div class="dropdown-content">${content}</div>
		</cosmoz-dropdown>
	`;
};
