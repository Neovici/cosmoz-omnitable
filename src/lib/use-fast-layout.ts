import { useEffect, useMemo } from '@pionjs/pion';
import { toCss } from './compute-layout';
import { useResizableColumns } from './use-resizable-columns';
import { useCanvasWidth } from './use-canvas-width';
import { useTweenArray } from './use-tween-array';
import { useLayout, type TweenedLayout } from './use-layout';
import { useMini } from './use-mini';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import type { Column } from './types';
import type { NormalizedSettings } from './settings/normalize';

interface SortAndGroupOptions {
	groupOnColumn?: Column | null;
}

interface UseFastLayoutParams {
	host: HTMLElement;
	columns: Column[];
	settings: NormalizedSettings;
	setSettings: (settings: NormalizedSettings) => void;
	resizeSpeedFactor: number;
	sortAndGroupOptions: SortAndGroupOptions;
}

interface UseFastLayoutReturn {
	isMini: boolean;
	collapsedColumns: Column[];
	miniColumns: Column[];
}

const useAdoptedStyleSheet = (host: HTMLElement): CSSStyleSheet => {
	const styleSheet = useMemo(() => new CSSStyleSheet(), []);

	useEffect(() => {
		host.shadowRoot!.adoptedStyleSheets = [
			...host.shadowRoot!.adoptedStyleSheets,
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
}: UseFastLayoutParams): UseFastLayoutReturn => {
	const canvasWidth = useCanvasWidth(host);
	const { isMini, miniColumn, miniColumns } = useMini({
		host,
		canvasWidth,
		columns,
	});
	const { groupOnColumn } = sortAndGroupOptions;

	const layout = useLayout({
		canvasWidth,
		groupOnColumn,
		miniColumn,
		config: settings.columns,
	});
	const styleSheet = useAdoptedStyleSheet(host);
	const collapsedColumns = useMemo(
		() =>
			settings.columns.reduce<Column[]>(
				(acc, column, index) =>
					layout[index] != null ||
					column.name === groupOnColumn?.name ||
					column.disabled
						? acc
						: [...acc, columns.find((c) => c.name === column.name)].filter(
								(c): c is Column => c != null,
							),
				[],
			),
		[columns, settings, layout, groupOnColumn],
	);

	const meta = useMeta({ columns: settings.columns });

	useTweenArray(layout, resizeSpeedFactor, (tweenedLayout: TweenedLayout) => {
		const layoutCss = toCss(tweenedLayout, meta.columns);
		styleSheet.replace(layoutCss);
	});

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (
			update: (settings: NormalizedSettings) => NormalizedSettings,
		) => setSettings(update(settings)),
	});

	return { isMini, collapsedColumns, miniColumns };
};
