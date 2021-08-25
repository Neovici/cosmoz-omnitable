import { useMemo } from 'haunted';
import { useFastLayout } from './use-fast-layout';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const
		{ columns, groupOnColumn } = host,
		{ layoutCss, layout } = useFastLayout({ host, columns, groupOnColumn }),
		disabledColumns = useMemo(
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
		disabledColumns
	};
};
