import { useMemo } from 'haunted';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayoutConfig } from './use-layout-config';
import { useLayout } from './use-layout';

export const useFastLayout = ({ host, columns, groupOnColumn }) => {
	const
		canvasWidth = useCanvasWidth(host),
		{ config, setUserConfig } = useLayoutConfig(columns),
		layout = useLayout({ canvasWidth, groupOnColumn, config }),
		tweenedlayout = useTweenArray(layout),
		layoutCss = useMemo(() => toCss(tweenedlayout), [tweenedlayout]);

	useResizableColumns({ host, canvasWidth, layout, config, setUserConfig });

	return {
		layoutCss,
		layout
	};
};
