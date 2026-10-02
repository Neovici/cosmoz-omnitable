import { useEffect, useMemo } from '@pionjs/pion';
import { Column } from './types';

export interface UseMiniParams {
	host: HTMLElement & { miniBreakpoint?: number; renderItem?: unknown };
	canvasWidth: number;
	columns: Column[];
}

export const useMini = ({
	host,
	canvasWidth,
	columns: _columns,
}: UseMiniParams) => {
	const breakpoint = host.miniBreakpoint ?? 480;
	const isMiniSize = useMemo(
		() => canvasWidth <= breakpoint,
		[canvasWidth, breakpoint]
	);
	const columns = useMemo(
			() =>
				isMiniSize
					? _columns
							?.filter((c) => c.mini != null)
							.sort((a, b) => (a.mini ?? 0) - (b.mini ?? 0))
					: [],
			[_columns, isMiniSize]
		),
		// identity-stable rest slice: a new array every render would churn the
		// connect deps — grouped-list re-renders rows on wrapper identity
		miniColumns = useMemo(() => columns.slice(1), [columns]),
		miniColumn = columns[0],
		// full-row override takes over item rendering — keep mini machinery dormant
		hasMiniColumn = !!miniColumn && host.renderItem == null;

	useEffect(() => {
		host.toggleAttribute('mini', hasMiniColumn);
	}, [hasMiniColumn]);

	return {
		isMini: hasMiniColumn && isMiniSize,
		hasMiniColumn,
		miniColumn,
		miniColumns,
	};
};
