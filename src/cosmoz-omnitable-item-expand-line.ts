import { css, sheet } from '@neovici/cosmoz-utils';
import { component, html } from '@pionjs/pion';
import type { Column } from './lib/types';

const style = css`
	:host {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: initial;
		align-self: start;
	}

	.value {
		text-align: right;
		flex-grow: 1;
		flex-basis: 100px;
		white-space: nowrap;
	}
`;

type ItemExpandLineProps = {
	column: Column;
};

const ItemExpandLine = ({ column }: ItemExpandLineProps) => html`
	<div class="label" title="${column.title}" part="item-expand-label">
		${column.title}
	</div>
	<div class="value" part="item-expand-value">
		<slot></slot>
	</div>
`;

customElements.define(
	'cosmoz-omnitable-item-expand-line',
	component(ItemExpandLine, { styleSheets: [sheet(style)] }),
);
