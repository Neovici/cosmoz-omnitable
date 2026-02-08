import { useEffect, useMemo, useState } from '@pionjs/pion';

type ColumnLike = {
	name: string;
	title?: string;
	minWidth?: string | number;
	cellTitleFn?: (column: ColumnLike, item: unknown) => unknown;
	getString?: (column: ColumnLike, item: unknown) => unknown;
};

type AutoWidthOptions = {
	host: HTMLElement;
	columns: ColumnLike[];
	data?: unknown[];
	canvasWidth?: number;
	enabled?: boolean;
	maxWidth?: number;
	sampleSize?: number;
};

const DEFAULT_SAMPLE_SIZE = 40;
const DEFAULT_MAX_WIDTH = 480;
const DEFAULT_HEADER_EXTRA = 24;

const toNumber = (value: string | number | undefined) => {
	const parsed = Number.parseFloat(String(value ?? ''));
	return Number.isFinite(parsed) ? parsed : 0;
};

const buildFont = (style: CSSStyleDeclaration | null) => {
	if (!style) {
		return '14px sans-serif';
	}

	if (style.font && style.font !== 'normal') {
		return style.font;
	}

	const fontStyle = style.fontStyle || 'normal';
	const fontVariant = style.fontVariant || 'normal';
	const fontWeight = style.fontWeight || 'normal';
	const fontSize = style.fontSize || '14px';
	const lineHeight =
		style.lineHeight && style.lineHeight !== 'normal'
			? `/${style.lineHeight}`
			: '';
	const fontFamily = style.fontFamily || 'sans-serif';

	return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}${lineHeight} ${fontFamily}`;
};

const getPadding = (el: Element | null) => {
	if (!el) {
		return 0;
	}
	const style = getComputedStyle(el);
	return toNumber(style.paddingLeft) + toNumber(style.paddingRight);
};

const getText = (value: unknown) => {
	if (value == null) {
		return '';
	}
	return typeof value === 'string' ? value : String(value);
};

const getColumnText = (column: ColumnLike, item: unknown) => {
	if (typeof column.cellTitleFn === 'function') {
		return getText(column.cellTitleFn(column, item));
	}

	if (typeof column.getString === 'function') {
		return getText(column.getString(column, item));
	}

	return '';
};

const measureText = (
	ctx: CanvasRenderingContext2D,
	font: string,
	text: string,
) => {
	if (!text) {
		return 0;
	}
	ctx.font = font;
	return Math.ceil(ctx.measureText(text).width);
};

const clampWidth = (value: number, minWidth: number, maxWidth: number) =>
	Math.max(minWidth, Math.min(value, maxWidth));

const sameWidths = (a: Record<string, number>, b: Record<string, number>) => {
	const keysA = Object.keys(a);
	if (keysA.length !== Object.keys(b).length) {
		return false;
	}

	return keysA.every((key) => Math.abs(a[key] - b[key]) < 1);
};

const getResolvedMaxWidth = (canvasWidth?: number, maxWidth?: number) => {
	const hasCanvasWidth =
		typeof canvasWidth === 'number' && Number.isFinite(canvasWidth);
	const numericCanvasWidth = hasCanvasWidth ? canvasWidth : 0;
	const numericMaxWidth =
		typeof maxWidth === 'number' && Number.isFinite(maxWidth)
			? maxWidth
			: undefined;
	const preferredMaxWidth =
		numericMaxWidth ??
		(hasCanvasWidth
			? Math.max(120, Math.floor(numericCanvasWidth * 0.6))
			: DEFAULT_MAX_WIDTH);

	return Math.max(
		0,
		Math.min(preferredMaxWidth, hasCanvasWidth ? numericCanvasWidth : Infinity),
	);
};

const getHeaderWidth = (
	ctx: CanvasRenderingContext2D,
	font: string,
	text: string,
	padding: number,
) => measureText(ctx, font, text) + padding + DEFAULT_HEADER_EXTRA;

const getCellWidth = (
	ctx: CanvasRenderingContext2D,
	font: string,
	column: ColumnLike,
	items: unknown[],
	padding: number,
) => {
	let cellWidth = 0;
	for (let i = 0; i < items.length; i += 1) {
		const text = getColumnText(column, items[i]);
		if (text) {
			cellWidth = Math.max(cellWidth, measureText(ctx, font, text) + padding);
		}
	}
	return cellWidth;
};

const buildWidths = (options: {
	columns: ColumnLike[];
	ctx: CanvasRenderingContext2D;
	headerFont: string;
	cellFont: string;
	headerPadding: number;
	cellPadding: number;
	maxWidth: number;
	sampleItems: unknown[];
}) =>
	options.columns.reduce(
		(next, column) => {
			const minWidth = toNumber(column.minWidth);
			const headerWidth = getHeaderWidth(
				options.ctx,
				options.headerFont,
				getText(column.title),
				options.headerPadding,
			);
			const cellWidth = getCellWidth(
				options.ctx,
				options.cellFont,
				column,
				options.sampleItems,
				options.cellPadding,
			);

			next[column.name] = clampWidth(
				Math.max(headerWidth, cellWidth, minWidth),
				minWidth,
				options.maxWidth || DEFAULT_MAX_WIDTH,
			);
			return next;
		},
		{} as Record<string, number>,
	);

const resolveSampleSize = (sampleSize?: number) =>
	Number.isFinite(sampleSize) ? sampleSize : DEFAULT_SAMPLE_SIZE;

const getSampleItems = (data: unknown[] | undefined, sampleSize: number) =>
	Array.isArray(data) ? data.slice(0, sampleSize) : [];

const getAutoWidthContext = (options: {
	host: HTMLElement;
	columns: ColumnLike[];
	data?: unknown[];
	canvasWidth?: number;
	maxWidth?: number;
	sampleSize?: number;
	ctx: CanvasRenderingContext2D | null;
}) => {
	if (
		!options.ctx ||
		!Array.isArray(options.columns) ||
		options.columns.length === 0
	) {
		return null;
	}

	const hostRoot = options.host.shadowRoot;
	const headerCell = hostRoot?.querySelector('.header-cell') ?? options.host;
	const itemCell = hostRoot?.querySelector('.itemRow-cell') ?? options.host;
	const resolvedSampleSize = resolveSampleSize(options.sampleSize);

	return {
		headerFont: buildFont(getComputedStyle(headerCell)),
		cellFont: buildFont(getComputedStyle(itemCell)),
		headerPadding: getPadding(headerCell),
		cellPadding: getPadding(itemCell),
		resolvedMaxWidth: getResolvedMaxWidth(
			options.canvasWidth,
			options.maxWidth,
		),
		sampleItems: getSampleItems(options.data, resolvedSampleSize),
	};
};

export const useAutoColumnWidths = ({
	host,
	columns,
	data,
	canvasWidth,
	enabled = true,
	maxWidth,
	sampleSize,
}: AutoWidthOptions) => {
	const [widths, setWidths] = useState<Record<string, number>>({});
	const ctx = useMemo(
		() => document.createElement('canvas').getContext('2d'),
		[],
	);

	useEffect(() => {
		if (!enabled) {
			setWidths({});
			return;
		}

		const context = getAutoWidthContext({
			host,
			columns,
			data,
			canvasWidth,
			maxWidth,
			sampleSize,
			ctx,
		});

		if (!context) {
			setWidths({});
			return;
		}

		let cancelled = false;

		const computeWidths = () => {
			const next = buildWidths({
				columns,
				ctx,
				headerFont: context.headerFont,
				cellFont: context.cellFont,
				headerPadding: context.headerPadding,
				cellPadding: context.cellPadding,
				maxWidth: context.resolvedMaxWidth,
				sampleItems: context.sampleItems,
			});

			if (!cancelled) {
				setWidths((prev) => (sameWidths(prev, next) ? prev : next));
			}
		};

		const schedule = () => requestAnimationFrame(computeWidths);

		schedule();
		document.fonts?.ready?.then(() => {
			if (!cancelled) {
				schedule();
			}
		});

		return () => {
			cancelled = true;
		};
	}, [host, columns, data, canvasWidth, enabled, maxWidth, sampleSize, ctx]);

	return widths;
};
