import { component } from '@pionjs/pion';
import { nothing } from 'lit-html';
import type { GroupItem } from './grouped-list/utils';
import type { Column, Item } from './lib/types';

type GroupRowProps = {
	column?: Column;
	item: Item;
	selected: boolean;
	folded: boolean;
	group: GroupItem;
};

const GroupRow = ({ column, item, selected, folded, group }: GroupRowProps) => {
	if (!column) {
		return nothing;
	}

	const renderFn = column.renderGroup ?? column.renderCell;
	if (!renderFn) {
		return nothing;
	}

	return renderFn(column, {
		item,
		selected,
		folded,
		group,
	}) as unknown;
};

customElements.define(
	'cosmoz-omnitable-group-row',
	component(GroupRow, { useShadowDOM: false }),
);
