import { useMemo } from 'haunted';
import { computeLayout } from './compute-layout';

export const useLayout = ({ canvasWidth, groupOnColumn, config }) => useMemo(() => {
	if (!Array.isArray(config) || canvasWidth == null) {
		return [];
	}

	const columnConfigs = config
		.map(c => ({
			minWidth: c.minWidth,
			basis: c.width,
			grow: c.flex,
			priority: c.priority,
			index: c.index,
			hidden: c.column === groupOnColumn
		}))
		.sort(
			(
				{ index: aIndex, priority: aPriority },
				{ index: bIndex, priority: bPriority }
			) =>
				aPriority === bPriority ? bIndex - aIndex : aPriority - bPriority
		);

	return computeLayout(columnConfigs, canvasWidth, columnConfigs.length);
}, [canvasWidth, groupOnColumn, config]);
