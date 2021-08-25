import { useMemo } from 'haunted';
import { useFastLayout } from './use-fast-layout';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const
		{ columns, groupOnColumn, resizeSpeedFactor } = host,
		{ layoutCss, layout } = useFastLayout({ host, columns, groupOnColumn, resizeSpeedFactor }),
		collapsedColumns = useMemo(
			() =>
				Array.isArray(columns)
					? columns.reduce(
						(acc, column) =>
							layout[column.columnIndex] != null ||
								column === groupOnColumn
								? acc
								: [...acc, column],
						[]
					)
					: [],
			[columns, layout]
		);

	return {
		layoutCss,
		collapsedColumns,
		// TODO: drop with next major release
		disabledColumns: collapsedColumns
	};
};
