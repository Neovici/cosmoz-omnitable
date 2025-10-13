import { html, nothing } from 'lit-html';
import '@neovici/cosmoz-dropdown';

export const renderDropdown = ({
	title,
	tooltip = '',
	filterText = '',
	headerFocused = false,
	onOpenedChanged,
	content,
}) => {
	const classNames = (...classes) => {
		return classes.filter(Boolean).join(' ');
	};

	return html`
		<style>
			.dropdown-content h3 {
				font-weight: 500;
				font-size: 13px;
				margin: 0;
				font-family: var(
					--cosmoz-input-font-family,
					var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
				);
			}

			.dropdown-content {
				padding: 10px 10px 10px 10px;
				min-width: 120px;
				text-align: left;
				background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				border-radius: 6px;
				backdrop-filter: blur(16px) saturate(180%);
				-webkit-backdrop-filter: blur(16px) saturate(180%);
				box-shadow:
					0 4px 24px 0 rgba(0, 0, 0, 0.18),
					0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
			}

			cosmoz-dropdown {
				display: block;
				position: relative;
				font-family: var(--paper-font-common-base_-_font-family, inherit);
				font-size: 16px;
				font-weight: normal;
				--divider-color: var(
					--paper-input-container-color,
					rgba(0, 0, 0, 0.42)
				);
				--focused-color: #3f51b5;
				width: 100%;
			}

			cosmoz-dropdown::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				height: 1px;
				width: 100%;
				background: var(--divider-color);
				pointer-events: none;
				transition:
					background 0.2s,
					height 0.2s;
			}

			cosmoz-dropdown::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: 0;
				height: 1px;
				width: 100%;
				background: var(--focused-color);
				transform-origin: center;
				transform: scaleX(0);
				pointer-events: none;
				transition:
					background 0.2s,
					transform 0.2s,
					height 0.2s;
			}

			cosmoz-dropdown.focused::after {
				transform: scaleX(1);
				height: 2px;
			}

			cosmoz-dropdown::part(button) {
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

			.dropdown-button {
				font-size: 16px;
				text-align: left;
				box-sizing: border-box;
				cursor: pointer;
				color: var(--dropdown-button-color, rgba(0, 0, 0, 0.54));
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				transition:
					transform 0.2s,
					font-size 0.2s,
					top 0.2s,
					color 0.2s;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				width: 100%;
				pointer-events: none;
			}

			.filter-value {
				font-size: 16px;
				text-align: left;
				padding-bottom: 6px;
				box-sizing: border-box;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: var(--dropdown-filter-color, rgba(0, 0, 0, 0.87));
			}

			cosmoz-dropdown.filtered .dropdown-button {
				top: 0;
				transform: translateY(-100%);
				font-size: 12px;
			}
		</style>

		<cosmoz-dropdown
			@focus=${onOpenedChanged}
			class=${classNames(
				headerFocused ? 'focused' : '',
				filterText ? 'filtered' : '',
			)}
			title=${tooltip || ''}
		>
			<div slot="button" class="dropdown-button">${title || tooltip}</div>

			${filterText
				? html`<div slot="button" class="filter-value">${filterText}</div>`
				: nothing}

			<div class="dropdown-content" @mousedown=${(e) => e.stopPropagation()}>
				${content}
			</div>
		</cosmoz-dropdown>
	`;
};
