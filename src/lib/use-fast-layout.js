import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from '@pionjs/pion';
import { toCss, toLayoutRules } from './compute-layout';
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
			: (host.headerColumns ?? null),
		layout = useLayout({
			canvasWidth,
			groupOnColumn,
			layoutColumns,
			config: settings.columns,
		}),
		styleSheet = useAdoptedStyleSheet(host),
		collapsedNames = settings.columns
			.filter(
				(column, index) =>
					layout[index] == null &&
					column.name !== groupOnColumn?.name &&
					!column.disabled,
			)
			.map((column) => column.name),
		collapsedColumns = useMemo(
			() => collapsedNames.map((name) => columns.find((c) => c.name === name)),
			[columns, collapsedNames.join()],
		);

	// Tween only runs briefly for direct column interactions (show/hide,
	// reorder, drag-resize). Otherwise speed is 1 (snap).
	const [tweenSpeed, setTweenSpeed] = useState(1),
		requestTween = useCallback(
			() => setTweenSpeed(resizeSpeedFactor ?? 1.9),
			[resizeSpeedFactor],
		),
		onConverge = useCallback(() => setTweenSpeed(1), []);

	const meta = useMeta({ columns: settings.columns });
	// Surgical stylesheet updates: each config entry maps to one CSSRule;
	// only rules whose width changed get written per tween frame. Structure
	// changes (hide, order, last visible) still rebuild the sheet.
	const applied = useRef({ rules: undefined, widths: [] }).current,
		[partWidths, setPartWidths] = useState(undefined),
		syncPartWidths = (rules) =>
			setPartWidths(
				rules.reduce(
					(map, rule) =>
						rule.kind === 'width' ? { ...map, [rule.name]: rule.width } : map,
					{},
				),
			);
	useTweenArray(
		layout,
		tweenSpeed,
		(tweenedlayout) => {
			const rules = toLayoutRules(tweenedlayout, meta.columns);
			const structure =
				toCss(tweenedlayout, meta.columns) === '.cell {display: none;}'
					? 'empty'
					: rules.map((rule) => rule.kind).join('#') +
						'#' +
						(rules.findIndex((rule) => rule.lastVisible) + 1);
			if (applied.rules !== structure) {
				styleSheet.replaceSync(toCss(tweenedlayout, meta.columns));
				applied.rules = structure;
				applied.widths = rules.map((rule) =>
					rule.kind === 'width' ? rule.width : undefined,
				);
				syncPartWidths(rules);
				return;
			}
			const sheet = styleSheet.cssRules;
			let changed = false;
			rules.forEach((rule, index) => {
				if (rule.kind !== 'width' || applied.widths[index] === rule.width) {
					return;
				}
				const cssRule = sheet[index];
				cssRule.style.width = `${rule.width}px`;
				cssRule.style.padding = `0 min(3px, ${rule.width / 2}px)`;
				applied.widths[index] = rule.width;
				changed = true;
			});
			// while the loading skeleton is visible it renders the widths
			if (changed && host.loading) {
				syncPartWidths(rules);
			}
		},
		onConverge,
	);

	useResizableColumns({
		host,
		canvasWidth,
		layout,
		setSettings: (update) => setSettings(update(settings)),
		requestTween,
	});

	return { isMini, collapsedColumns, miniColumns, requestTween, partWidths };
};
