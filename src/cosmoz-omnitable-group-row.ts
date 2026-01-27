import { component } from '@pionjs/pion';
import { nothing } from 'lit-html';
import { GroupItem } from './grouped-list/utils';
import { Column, RenderContext } from './lib/types';

interface GroupRowProps {
	column: Column;
	item: RenderContext['item'];
	selected: boolean;
	folded: boolean;
	group: GroupItem;
}

const GroupRow = ({ column, item, selected, folded, group }: GroupRowProps) => {
	if (!column) {
		return nothing;
	}

	return (column.renderGroup ?? column.renderCell)?.(column, {
		item,
		selected,
		folded,
		group,
	});
};

customElements.define(
	'cosmoz-omnitable-group-row',
	component(GroupRow, { useShadowDOM: false }),
);
