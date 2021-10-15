import { component, useMemo } from 'haunted';
import { nothing } from 'lit-html';
import { useRenderOnColumnUpdates } from './lib/use-render-on-column-updates';

const GroupRow = ({ column, item, selected, folded }) => {
	const columns = useMemo(() => column ? [column] : [], [column]);
	useRenderOnColumnUpdates(columns);

	if (!column) {
		return nothing;
	}

	return (column.renderGroup ?? column.renderCell)(column, { item, selected, folded });
};

customElements.define('cosmoz-omnitable-group-row', component(GroupRow, { useShadowDOM: false }));
