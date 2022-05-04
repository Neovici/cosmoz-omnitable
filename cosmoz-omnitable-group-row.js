import { component } from 'haunted';
import { nothing } from 'lit-html';

const GroupRow = ({ column, item, selected, folded, group }) => {
	if (!column) {
		return nothing;
	}

	return (column.renderGroup ?? column.renderCell)(column, { item, selected, folded, group });
};

customElements.define('cosmoz-omnitable-group-row', component(GroupRow, { useShadowDOM: false }));
