import { html, css, component, useEffect } from '@pionjs/pion';
import { when } from 'lit-html/directives/when.js';
import { ref } from 'lit-html/directives/ref.js';
import { nothing } from 'lit-html';
import { useFloating } from '@neovici/cosmoz-dropdown/use-floating';
import { useHostFocus } from '@neovici/cosmoz-dropdown/use-focus';
import { styleMap } from 'lit-html/directives/style-map.js';
import { connectable } from '@neovici/cosmoz-dropdown/connectable';
import '@neovici/cosmoz-dropdown';

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
		width: initial;
	}

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
		text-align: center;
	}

	.control.right .label {
		right: 0;
		text-align: right;
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
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
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
		color: var(--paper-input-container-color, rgba(0, 0, 0, 0.54));
	}

	:host(:focus-visible) {
		outline: none;
	}
`;

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

const Header = (host) => {
	const {
		label,
		placeholder,
		title,
		horizontalAlign,
		placement,
		class: className,
	} = host;
	const { onToggle, active, focused } = useHostFocus(host);
	const { styles, setReference, setFloating } = useFloating({
		placement,
	});

	const hasValue = Boolean(placeholder);

	useEffect(() => {
		host.dispatchEvent(
			new CustomEvent('opened-changed', {
				detail: { value: active },
				bubbles: true,
			}),
		);
	}, [active]);

	return html`<div
		class=${classNames(
			'control',
			hasValue && 'has-value',
			focused && 'focused',
			horizontalAlign ? horizontalAlign : 'left',
			className,
		)}
		tabindex="0"
		title=${title || ''}
		@click=${onToggle}
		@mousedown=${(e) => e.preventDefault()}
		@keydown=${(e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				onToggle();
			}
		}}
		${ref(setReference)}
	>
		<div class="label">${label}</div>
		${hasValue
			? html`<div class="value-wrapper">
					<span class="value"> ${hasValue ? placeholder : label || ''} </span>
				</div>`
			: nothing}
		${when(
			active,
			() =>
				html`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${styleMap(styles)}"
					@click=${(e) => e.stopPropagation()}
					@connected=${(e) => e.target.showPopover?.()}
					${ref(setFloating)}
					><slot name="dropdown-content"></slot>
				</cosmoz-dropdown-content> `,
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
		'placement',
	],
});

customElements.define(
	'cosmoz-omnitable-dropdown-menu',
	connectable(BaseDropdownMenu),
);
