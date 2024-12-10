import { useMemo } from '@pionjs/pion';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout } from './use-layout';
import { useStyleSheet } from '@neovici/cosmoz-utils/hooks/use-stylesheet';
import { useMini } from './use-mini';

export const useFastLayout = ({
	host,
	columns,
	settings,
	setSettings,
	resizeSpeedFactor,
	sortAndGroupOptions,
}) => {
	const canvasWidth = useCanvasWidth(host),
		{ isMini, miniColumn, miniColumns } = useMini({
			host,
			canvasWidth,
			columns,
		}),
		{ groupOnColumn } = sortAndGroupOptions,
		layout = useLayout({
			canvasWidth,
			groupOnColumn,
			miniColumn,
			config: settings.columns,
		}),
		tweenedlayout = useTweenArray(layout, resizeSpeedFactor),
		layoutCss = useMemo(
			() => toCss(tweenedlayout, settings.columns),
			[tweenedlayout, settings.columns],
		),
		collapsedColumns = useMemo(
			() =>
				settings.columns.reduce(
					(acc, column, index) =>
						layout[index] != null ||
						column.name === groupOnColumn?.name ||
						column.disabled
							? acc
							: [...acc, columns.find((c) => c.name === column.name)],
					[],
				),
			[columns, settings, layout],
		);

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (update) => setSettings(update(settings)),
	});

	useStyleSheet(layoutCss);

	return { isMini, collapsedColumns, miniColumns };
};
