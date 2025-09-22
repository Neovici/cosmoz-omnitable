import { useEffect, useMemo } from '@pionjs/pion';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout } from './use-layout';
import { useMini } from './use-mini';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

const useAdoptedStyleSheet = (host) => {
	const styleSheet = useMemo(() => new CSSStyleSheet(), []);

	useEffect(() => {
		host.shadowRoot.adoptedStyleSheets = [
			...host.shadowRoot.adoptedStyleSheets,
			styleSheet,
		];
	}, []);

	return styleSheet;
};

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
		styleSheet = useAdoptedStyleSheet(host),
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

	const meta = useMeta({ columns: settings.columns });
	useTweenArray(layout, resizeSpeedFactor, (tweenedlayout) => {
		const layoutCss = toCss(tweenedlayout, meta.columns);
		styleSheet.replace(layoutCss);
	});

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (update) => setSettings(update(settings)),
	});

	return { isMini, collapsedColumns, miniColumns };
};
