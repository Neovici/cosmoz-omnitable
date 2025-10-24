import { useMemo } from '@pionjs/pion';
import { computeLayout } from './compute-layout';
import { ColumnConfig } from './layout';
import { Column } from './types';

interface UseLayoutParams {
	canvasWidth: number | null | undefined;
	groupOnColumn?: Column | null;
	config: ColumnConfig[];
	miniColumn?: Column | null;
}

export const useLayout = ({
	canvasWidth,
	groupOnColumn,
	config,
	miniColumn,
}: UseLayoutParams): (number | undefined)[] =>
	useMemo(() => {
		if (!Array.isArray(config) || canvasWidth == null || canvasWidth === 0) {
			return [];
		}

		const columnConfigs: ColumnConfig[] = config
			.map((c, index) => ({
				minWidth: c.minWidth,
				width: c.width,
				flex: c.flex,
				priority: c.priority,
				name: c.name,
				title: c.title,
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
