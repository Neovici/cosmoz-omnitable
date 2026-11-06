import { component } from '@pionjs/pion';
import { nothing } from 'lit-html';
import type { Item } from '../lib/types';

interface GroupedListRowHost extends HTMLElement {
	item?: Item;
	index?: number;
	renderFn?: (item: Item, index: number) => unknown;
}

const GroupedListRow = (host: GroupedListRowHost) => {
	const { item, index, renderFn } = host;

	if (item == null || index == null || renderFn == null) {
		return nothing;
	}

	return renderFn(item, index);
};

customElements.define(
	'cosmoz-grouped-list-row',
	component(GroupedListRow, { useShadowDOM: false })
);
