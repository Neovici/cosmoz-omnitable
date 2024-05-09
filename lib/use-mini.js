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
						?.filter((c) => c.mini !== null)
						.sort((a, b) => (a.mini ?? 0) - (b.mini ?? 0))
				: [],
		[_columns, isMiniSize],
	);
	const [miniColumn, ...miniColumns] = columns ?? [];

	useEffect(() => {
		host.toggleAttribute('mini', !!miniColumn);
	}, [miniColumn]);

	return {
		miniColumn,
		miniColumns,
	};
};
