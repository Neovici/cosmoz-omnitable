import { tagged as css } from '@neovici/cosmoz-utils';
import { checkbox, sort as sortStyle } from '../../cosmoz-omnitable-styles';

export default css`
	:host {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		max-height: 42vh;
		outline: none;
		padding-top: 14px;
	}
	.list {
		overflow-y: auto;
		flex: 1;
		padding: 2px 14px;
		min-width: 232px;
	}
	.item {
		display: flex;
		align-items: center;
		background: white;
	}
	.item.drag {
		opacity: 0.6;
		pointer-events: none;
	}
	.item.dragover {
		box-shadow: 0 -2px 0 0 currentColor;
	}
	.pull {
		border: none;
		padding: 0;
		font-size: 0;
		vertical-align: bottom;
		outline: none;
		background: transparent;
		cursor: move;
		margin-right: 12px;
		color: #c4c4c4;
	}
	.title {
		flex: 1;
	}
	.title[has-filter] {
		font-weight: bold;
	}
	${checkbox}
	.checkbox {
		margin: 4px 0;
	}

	${sortStyle}
	.sort {
		order: initial;
		margin: 0;
		width: auto;
		padding: 8px;
	}

	.buttons {
		display: flex;
		gap: 8px;
		padding: 12px 14px;
		box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.15);
	}
	.button {
		border: none;
		cursor: pointer;
		background: var(--cosmoz-button-bg-color, #101010);
		color: var(--cosmoz-button-color, #fff);
		font-family: inherit;
		font-size: 13px;
		font-weight: 600;
		line-height: 26px;
		border-radius: 4px;
		padding: 8px;
		flex: 1;
	}
	.button:not(.reset):hover {
		background: var(--cosmoz-button-hover-bg-color, #3a3f44);
	}
	.button[disabled] {
		opacity: 0.2;
		pointer-events: none;
	}
	.reset {
		background: transparent;
		color: inherit;
		text-decoration: underline;
	}
	.group {
		padding: 0px 14px;
		box-shadow: inset 0px 1px 0px rgb(0 0 0 / 15%);
	}
`;

export const dropdown = css`
	:host {
		display: contents;
		color: var(--cosmoz-omnitable-settings-color, #101010);
		--cosmoz-dropdown-box-shadow: 0 3px 4px 0 rgb(0 0 0 / 14%),
			0 1px 8px 0 rgb(0 0 0 / 12%), 0 3px 3px -2px rgb(0 0 0 / 40%);
	}
	cosmoz-dropdown::part(button) {
		--cosmoz-dropdown-button-size: 24px;
		padding: 0;
		background: transparent;
		color: inherit;
	}
	cosmoz-dropdown::part(anchor) {
		display: inline-block;
	}
	.badge {
		position: absolute;
		top: 1px;
		right: -4px;
		background-color: var(
			--cosmoz-omnitable-checkbox-checked-color,
			var(--primary-color)
		);
		width: 8px;
		height: 8px;
		border-radius: 100%;
	}
`;
