import { html } from 'lit-html';
import { classMap } from 'lit-html/directives/class-map.js';
import '@neovici/cosmoz-dropdown';

export const renderDropdown = ({
	title,
	tooltip = '',
	filterText = '',
	headerFocused = false,
	onOpenedChanged,
	content,
	horizontalAlign = 'left',
	externalValues = null,
}) => {
	const classes = {
		dropdown: true,
		focused: headerFocused,
		filtered: Boolean(filterText),
		left: horizontalAlign === 'left',
		right: horizontalAlign === 'right',
		center: horizontalAlign === 'center',
		...(externalValues != null && {
			[`external-values-${externalValues}`]: true,
		}),
	};

	return html`
		<style>
			.content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.content {
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

			.dropdown {
				display: block;
				position: relative;
				font-family: var(--paper-font-common-base_-_font-family, inherit);
				font-size: 16px;
				font-weight: normal;
				width: 100%;
				outline: none;
			}

			.dropdown::part(button) {
				background: transparent;
				border-radius: unset;
				position: relative;
				width: 100%;
				height: 100%;
				min-height: 24px;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.left .label,
			.left .filter-value {
				text-align: left;
			}

			.right .label,
			.right .filter-value {
				text-align: right;
			}

			.center .label,
			.center .filter-value {
				text-align: center;
			}
			.dropdown:focus-within .input {
					--make-it-focus: 1;
			}
		</style>

		<cosmoz-dropdown
			@focus=${onOpenedChanged}
			@focusout=${onOpenedChanged}
			class=${classMap(classes)}
			title=${tooltip || ''}
		>
				<cosmoz-omnitable-dropdown-input
					class="input"
					slot="button"
					.label="${title || tooltip}"
					.value="${filterText}"
				></cosmoz-omnitable-dropdown-input>

			<div class="content" @mousedown=${(e) => e.stopPropagation()}>
				${content}
			</div>
		</cosmoz-dropdown>
	`;
};
