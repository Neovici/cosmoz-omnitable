import { useEffect, useRef } from '@pionjs/pion';
import { Column } from './types';
import { ColumnConfig } from './layout';
import { NormalizedSettings } from './settings/normalize';
import { TweenedLayout } from './use-layout';

export type UseResizableColumnsParams = {
	host: HTMLElement;
	canvasWidth: number;
	layout: TweenedLayout;
	setSettings: (
		update: (settings: NormalizedSettings) => NormalizedSettings,
	) => void;
};

export const useResizableColumns = ({
	host,
	canvasWidth,
	layout,
	setSettings,
}: UseResizableColumnsParams) => {
	const onColumnResizeRef =
		useRef<(ev: CustomEvent<{ newWidth: number; column: Column }>) => void>();

	onColumnResizeRef.current = (
		ev: CustomEvent<{ newWidth: number; column: Column }>,
	) =>
		setSettings((settings) => {
			const config = settings.columns as Omit<ColumnConfig, 'index'>[];
			const {
				detail: { newWidth, column },
			} = ev;

			const columnIndex = config.findIndex((c) => c.name === column.name);
			const newConfig: Omit<ColumnConfig, 'index'>[] = [];
			const maxPriority = config.reduce(
				(p, c) => Math.max(p, c.priority),
				-Infinity,
			);

			for (let i = 0; i < layout.length; i++) {
				newConfig[i] = { ...config[i] };

				// for visible columns to the left of the resized column
				if (i < columnIndex && layout[i] != null) {
					// save the current width
					newConfig[i].width = layout[i]!;
					// make them fixed width
					newConfig[i].flex = 0;
					// keep them visible
					newConfig[i].priority = maxPriority;
				}

				// update the width of the resized column
				if (i === columnIndex) {
					const maxNewSize = layout.reduce((acc: number, cur, i) => {
						if (i < columnIndex) {
							return cur ? acc - cur : acc;
						}
						return acc;
					}, canvasWidth);

					newConfig[i].width = Math.min(
						maxNewSize,
						Math.max(newWidth, config[i].minWidth),
					);
					newConfig[i].flex = 0;
					newConfig[i].priority = maxPriority;
				}
			}

			return { ...settings, columns: newConfig };
		});
	useEffect(() => {
		const handler = (ev: Event) =>
			onColumnResizeRef.current?.(
				ev as CustomEvent<{ newWidth: number; column: Column }>,
			);
		host.addEventListener('column-resize', handler);
		return () => host.removeEventListener('column-resize', handler);
	}, []);
};
