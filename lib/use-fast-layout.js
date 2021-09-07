import { useMemo } from 'haunted';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout } from './use-layout';
import { columnSymbol } from './normalize-settings';

export const useFastLayout = ({ host, settings, setSettings, groupOnColumn, resizeSpeedFactor }) => {
	const
		canvasWidth = useCanvasWidth(host),
		layout = useLayout({ canvasWidth, groupOnColumn, config: settings }),
		tweenedlayout = useTweenArray(layout, resizeSpeedFactor),
		layoutCss = useMemo(() => toCss(tweenedlayout, settings), [tweenedlayout]),

		collapsedColumns = useMemo(() => Array.isArray(settings)
			? settings.reduce((acc, column, index) =>
				layout[index] != null
					|| column.name === groupOnColumn?.name
					|| column.disabled
					? acc
					: [...acc, column[columnSymbol]],
			[])
			: []
		, [settings, layout]);

	useResizableColumns({ host, canvasWidth, layout, setSettings: update => setSettings(update(settings)) });

	return {
		layoutCss,
		collapsedColumns
	};
};
