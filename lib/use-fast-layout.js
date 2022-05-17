import { useCallback, useEffect, useLayoutEffect, useMemo } from 'haunted';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout } from './use-layout';
import { render } from 'lit-html';

export const useFastLayout = ({
	host,
	settings,
	setSettings,
	groupOnColumn,
	resizeSpeedFactor,
}) => {
	const canvasWidth = useCanvasWidth(host),
		layout = useLayout({
			canvasWidth,
			groupOnColumn,
			config: settings.columns,
		}),
		resize = useCallback(
			() => host.shadowRoot.querySelector('#list')._update(),
			[]
		),
		tweenedlayout = useTweenArray(layout, resizeSpeedFactor, resize, resize),
		layoutCss = useMemo(
			() => toCss(tweenedlayout, settings.columns),
			[tweenedlayout]
		);

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (update) => setSettings(update(settings)),
	});

	useLayoutEffect(() => render(layoutCss, host.$.layoutStyle), [layoutCss]);

	return layout;
};
