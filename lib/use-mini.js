import { useMemo, useEffect } from '@pionjs/pion';

export const useMini = ({ host, canvasWidth, columns: _columns }) => {
	const breakpoint = host.miniBreakpoint ?? 480;
	const isMiniSize = useMemo(
		() => canvasWidth <= breakpoint,
		[canvasWidth, breakpoint],
	);
	const columns = useMemo(
			() =>
				isMiniSize
					? _columns
							?.filter((c) => c.mini != null)
							.sort((a, b) => (a.mini ?? 0) - (b.mini ?? 0))
					: [],
			[_columns, isMiniSize],
		),
		[miniColumn, ...miniColumns] = columns ?? [],
		hasMiniColumn = !!miniColumn;

	useEffect(() => {
		host.toggleAttribute('mini', hasMiniColumn);
	}, [hasMiniColumn]);

	return {
		isMini: hasMiniColumn && isMiniSize,
		miniColumn,
		miniColumns,
	};
};
