import { component } from '@pionjs/pion';
import { html } from 'lit-html';
import { map } from 'lit-html/directives/map.js';
import './cosmoz-omnitable-item-expand-line';
import type { Column, ItemRenderData } from './lib/types';

interface ItemExpandProps {
	columns: Column[];
	item: ItemRenderData['item'];
	selected: boolean;
	expanded: boolean;
	groupOnColumn?: Column;
}

const ItemExpand = ({
	columns,
	item,
	selected,
	expanded,
	groupOnColumn,
}: ItemExpandProps) => {
	return map(
		columns,
		(column: Column) =>
			html`<cosmoz-omnitable-item-expand-line
				.column=${column}
				?hidden=${column === groupOnColumn}
				exportparts="item-expand-label, item-expand-value"
				>${column.renderCell!(column, {
					item,
					selected,
					expanded,
				})}</cosmoz-omnitable-item-expand-line
			>`,
	);
};

customElements.define(
	'cosmoz-omnitable-item-expand',
	component(ItemExpand, {
		useShadowDOM: false,
	}),
);
