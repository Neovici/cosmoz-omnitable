import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback, useEffect, useMemo, useState } from '@pionjs/pion';
import { toCss } from './compute-layout';
import { useCanvasWidth } from './use-canvas-width';
import { useLayout } from './use-layout';
import { useMini } from './use-mini';
import { useResizableColumns } from './use-resizable-columns';
import { useTweenArray } from './use-tween-array';

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

// pion doesn't reflect props to attributes — the compact chrome CSS targets [compact]
const useCompactChrome = (host) => {
	useEffect(() => {
		host.toggleAttribute('compact', host.compact === true);
	}, [host.compact]);
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
		{ isMini, hasMiniColumn, miniColumn, miniColumns } = useMini({
			host,
			canvasWidth,
			columns,
		});
	useCompactChrome(host);
	const { groupOnColumn } = sortAndGroupOptions,
		// the layout engine fits what the header shows: legacy mini derives
		// the set (frozen behavior), else the headerColumns writer wins
		layoutColumns = hasMiniColumn
			? [miniColumn.name]
			: host.headerColumns ?? null,
		layout = useLayout({
			canvasWidth,
			groupOnColumn,
			layoutColumns,
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
					[]
				),
			[columns, settings, layout]
		);

	// Tween only runs briefly for direct column interactions (show/hide,
	// reorder, drag-resize). Otherwise speed is 1 (snap).
	const [tweenSpeed, setTweenSpeed] = useState(1),
		requestTween = useCallback(
			() => setTweenSpeed(resizeSpeedFactor ?? 1.9),
			[resizeSpeedFactor]
		),
		onConverge = useCallback(() => setTweenSpeed(1), []);

	const meta = useMeta({ columns: settings.columns });
	useTweenArray(
		layout,
		tweenSpeed,
		(tweenedlayout) => {
			const layoutCss = toCss(tweenedlayout, meta.columns);
			styleSheet.replaceSync(layoutCss);
		},
		onConverge
	);

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (update) => setSettings(update(settings)),
		requestTween,
	});

	return { isMini, collapsedColumns, miniColumns, requestTween };
};
