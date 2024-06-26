import { useMemo } from '@pionjs/pion';
import { computeLayout } from './compute-layout';

export const useLayout = ({ canvasWidth, groupOnColumn, config, miniColumn }) =>
	useMemo(() => {
		if (!Array.isArray(config) || canvasWidth == null || canvasWidth === 0) {
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
				hidden: c.name === groupOnColumn?.name || c.disabled,
			}))
			.map((c) =>
				miniColumn ? { ...c, hidden: miniColumn.name !== c.name } : c,
			)
			.sort(
				(
					{ index: aIndex, priority: aPriority },
					{ index: bIndex, priority: bPriority },
				) =>
					aPriority === bPriority ? bIndex - aIndex : aPriority - bPriority,
			);

		return computeLayout(columnConfigs, canvasWidth, columnConfigs.length);
	}, [canvasWidth, groupOnColumn, config]);
