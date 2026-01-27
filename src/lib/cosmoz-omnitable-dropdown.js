import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import '@neovici/cosmoz-dropdown';
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
				min-height: 32px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.dropdown-content {
				position: absolute !important;
				height: auto !important;
				top: -30px;
				left: 0;
				right: 0;
				width: fit-content;
			}

			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				color: var(--cosmoz-omnitable-text-color);
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.dropdown-content {
				padding: 10px 10px 10px 10px;
				min-width: 120px;
				height: 100%;
				position: relative;
				text-align: left;
				background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				border-radius: 6px;
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow:
					0 4px 24px 0 rgba(0, 0, 0, 0.18),
					0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
			}
		</style>

		<cosmoz-dropdown
			@focus=${onOpenedChanged}
			class=${`${classMap(classes)} dropdown`}
			title=${tooltip || ''}
		>
			<cosmoz-omnitable-dropdown-input
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
