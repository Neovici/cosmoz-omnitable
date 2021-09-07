import { useMemo } from 'haunted';
import { computeLayout } from './compute-layout';

export const useLayout = ({ canvasWidth, groupOnColumn, config }) => useMemo(() => {
	if (!Array.isArray(config) || canvasWidth == null) {
		return [];
	}

	const columnConfigs = config
		.map((c, index) => ({
			minWidth: c.minWidth,
			width: c.width,
			flex: c.flex,
			priority: c.priority,
			name: c.name,
			index,
			hidden: c.name === groupOnColumn?.name || c.disabled
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
