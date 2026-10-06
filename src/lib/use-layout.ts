import { useMemo } from '@pionjs/pion';
import { computeLayout } from './compute-layout';
import { ColumnConfig, ColumnConfigInput } from './layout';
import { Column } from './types';

interface UseLayoutParams {
	canvasWidth: number | null | undefined;
	groupOnColumn?: Column | null;
	/** Names the layout engine must fit; null = fit everything. */
	layoutColumns?: string[] | null;
	config: ColumnConfigInput[];
}

export const useLayout = ({
	canvasWidth,
	groupOnColumn,
	layoutColumns,
	config,
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
				index,
				hidden: c.name === groupOnColumn?.name || c.disabled,
			}))
			.map((c) =>
				layoutColumns != null
					? { ...c, hidden: !layoutColumns.includes(c.name) }
					: c
			)
			.sort(
				(
					{ index: aIndex, priority: aPriority },
					{ index: bIndex, priority: bPriority }
				) => (aPriority === bPriority ? bIndex - aIndex : aPriority - bPriority)
			);

		return computeLayout(columnConfigs, canvasWidth, columnConfigs.length);
	}, [canvasWidth, groupOnColumn, config]);
