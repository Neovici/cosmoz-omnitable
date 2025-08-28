import { html, css, component } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import { ref } from 'lit-html/directives/ref.js';
import { nothing } from 'lit-html';
import { connectable } from './connectable';
import './cosmoz-omnitable-dropdown-content';
import { useHostFocus } from './hooks/useHostFocus';
import { useFloating } from './hooks/use-floating';

const styles = css`
	:host {
		display: inline-block;
		position: relative;
		font-family: var(--paper-font-common-base_-_font-family, inherit);
		font-size: 16px;
		font-weight: normal;
		--divider-color: var(--paper-input-container-color, rgba(0, 0, 0, 0.42));
		--focused-color: var(
			--paper-input-container-focus-color,
			var(--primary-color, #3f51b5)
		);
	}

	/* Container mimicking paper-input / paper-dropdown */
	.control {
		position: relative;
		cursor: pointer;
		outline: none;
		min-height: 32px;
		box-sizing: border-box;
		color: var(--paper-input-container-color, rgba(0, 0, 0, 0.87));
	}

	.control::before {
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

	.control::after {
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

	.control.focused::after {
		transform: scaleX(1);
		height: 2px;
		background: var(--focused-color);
	}

	.value-wrapper {
		display: flex;
		align-items: center;
		min-height: 32px;
	}

	.control.right .value-wrapper {
		justify-content: flex-end;
	}

	.control.center .value-wrapper {
		justify-content: center;
	}

	.control.left .value-wrapper {
		justify-content: flex-start;
	}

	.control.left .label {
		left: 0;
	}

	.control.center .label {
		left: 0;
		right: 0;
	}

	.control.right .label {
		right: 0;
	}

	.label {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: var(--paper-input-container-color, rgba(0, 0, 0, 0.54));
		font-size: 16px;
		line-height: 1;
		pointer-events: none;
		transition:
			transform 0.2s,
			font-size 0.2s,
			top 0.2s,
			color 0.2s;
		will-change: transform, font-size, top;
	}
	.control.has-value .label {
		top: 0;
		transform: translateY(-100%);
		font-size: 12px;
		color: var(--paper-input-container-label-color, var(--focused-color));
	}
	.control.focused .label {
		color: var(--focused-color);
	}

	.value {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.value {
		color: var(--paper-input-container-color, rgba(0, 0, 0, 0.54));
	}

	:host(:focus-visible) {
		outline: none;
	}
`;

const Header = (host) => {
	const { label, placeholder, title, horizontalAlign } = host;
	const { onToggle, closed, focused } = useHostFocus(host);
	const { setFloating } = useFloating(host);

	const hasValue = Boolean(placeholder);

	return html`<div
		class="control ${hasValue ? 'has-value' : ''} ${focused
			? 'focused'
			: ''} ${horizontalAlign ? horizontalAlign : 'left'}"
		tabindex="0"
		title=${title || ''}
		@click=${onToggle}
		@keydown=${(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				onToggle();
			}
		}}
	>
		<div class="label">${label}</div>
		${hasValue
			? html`<div class="value-wrapper">
					<span class="value"> ${hasValue ? placeholder : label || ''} </span>
				</div>`
			: nothing}
		${when(
			!closed,
			() =>
				html`<cosmoz-omnitable-dropdown-menu-content
					id="content"
					part="content"
					${ref(setFloating)}
					@click=${(e) => {
						e.stopPropagation();
					}}
				>
					<slot name="dropdown-content"></slot>
				</cosmoz-omnitable-dropdown-menu-content>`,
		)}
	</div>`;
};

const BaseDropdownMenu = component(Header, {
	styleSheets: [styles],
	observedAttributes: [
		'label',
		'placeholder',
		'title',
		'class',
		'horizontal-align',
	],
});

customElements.define(
	'cosmoz-omnitable-dropdown-menu',
	connectable(BaseDropdownMenu),
);
