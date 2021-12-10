import { useEffect, useLayoutEffect, useMemo } from 'haunted';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout } from './use-layout';
import { columnSymbol } from './normalize-settings';
import { render } from 'lit-html';

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

	useLayoutEffect(() => render(layoutCss, host.$.layoutStyle), [layoutCss]);

	// force iron-list to render when the omnitable becomes visible
	useEffect(() => {
		let lastWidth = 0;

		const
			onResize = ([entry]) => {
				if (lastWidth === 0) {
					requestAnimationFrame(() => host.$.groupedList.$.list._render());
				}
				lastWidth = entry.contentRect?.width;
			},
			observer = new ResizeObserver(onResize);

		observer.observe(host);
		return () => observer.unobserve(host);
	}, []);

	return {
		collapsedColumns
	};
};
