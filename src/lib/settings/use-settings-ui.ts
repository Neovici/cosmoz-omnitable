import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback } from '@pionjs/pion';
import type { Column } from '../types';

interface SettingsColumn {
	name: string;
	disabled: boolean;
	priority: number;
	[key: string]: unknown;
}

interface SettingsUIMeta {
	collapsed: Column[] | undefined;
	settings: SettingsColumn[];
	setSettings: (columns: SettingsColumn[]) => void;
	handle?: HTMLElement | null;
}

interface SettingsUIConfig {
	settings: { columns: SettingsColumn[] };
	setSettings: (update: (s: any) => any) => void;
	collapsed: Column[];
	[key: string]: unknown;
}

interface SettingsUIHost extends HTMLElement {
	config: SettingsUIConfig;
}

const parseIndex = (str: string | null | undefined): number | undefined => {
	const idx = parseInt(str ?? '', 10);
	return isFinite(idx) ? idx : undefined;
};

export default (host: SettingsUIHost) => {
	const { config } = host,
		{ settings, setSettings, collapsed } = config,
		meta = useMeta<SettingsUIMeta>({
			collapsed,
			settings: settings.columns,
			setSettings: useCallback(
				(columns: SettingsColumn[]) =>
					setSettings((cfg) => ({ ...cfg, columns })),
				[setSettings],
			),
		});

	return {
		...config,
		onDown: useCallback(
			(e: MouseEvent) => {
				if (!(e.target as HTMLElement).closest('.pull')) {
					return;
				}

				meta.handle = e.currentTarget as HTMLElement;
			},
			[meta],
		),

		onDragStart: useCallback(
			(e: DragEvent) => {
				const { target } = e,
					index = parseIndex((target as HTMLElement).dataset.index);

				if (!meta.handle?.contains(target as HTMLElement) || index == null) {
					return e.preventDefault();
				}

				meta.handle = null;
				e.dataTransfer!.effectAllowed = 'move';
				e.dataTransfer!.setData('omnitable/sort-index', String(index));
				e.dataTransfer!.setData('text/plain', String(index));
				setTimeout(() => (target as HTMLElement).classList.add('drag'), 0);
				(target as HTMLElement).addEventListener(
					'dragend',
					(e: DragEvent) => (e.target as HTMLElement).classList.remove('drag'),
					{ once: true },
				);
			},
			[meta],
		),

		onDragEnter: useCallback((e: DragEvent) => {
			const ctg = e.currentTarget as HTMLElement;
			if (ctg !== e.target) {
				return;
			}

			e.preventDefault();
			e.dataTransfer!.dropEffect = 'move';
			ctg.classList.add('dragover');
		}, []),

		onDragOver: useCallback((e: DragEvent) => {
			e.preventDefault();
			(e.currentTarget as HTMLElement).classList.add('dragover');
		}, []),

		onDragLeave: useCallback((e: DragEvent) => {
			const ctg = e.currentTarget as HTMLElement;
			if (ctg.contains(e.relatedTarget as Node)) {
				return;
			}

			ctg.classList.remove('dragover');
		}, []),

		onDrop: useCallback(
			(e: DragEvent) => {
				const from = parseIndex(
						e.dataTransfer!.getData('omnitable/sort-index'),
					),
					to = parseIndex((e.currentTarget as HTMLElement).dataset.index),
					{ settings, setSettings } = meta;

				(e.currentTarget as HTMLElement).classList.remove('dragover');
				e.preventDefault();

				const newSettings = settings.slice() as SettingsColumn[];
				newSettings.splice(
					to! + (from! >= to! ? 0 : -1),
					0,
					newSettings.splice(from!, 1)[0],
				);
				setSettings(newSettings);
			},
			[meta],
		),

		onToggle: useCallback(
			(e: Event) => {
				const { settings, setSettings } = meta,
					newSettings = settings.map((column: SettingsColumn) => ({
						...column,
						disabled:
							column.disabled ||
							meta.collapsed?.some((c: Column) => c.name === column.name),
					})) as SettingsColumn[],
					idx = parseIndex(
						(e.target as HTMLElement)
							.closest('[data-index]')!
							.getAttribute('data-index'),
					);

				newSettings.splice(idx!, 1, {
					...settings[idx!],
					disabled: !(e.target as HTMLInputElement).checked,
					priority: (e.target as HTMLInputElement).checked
						? settings.reduce(
								(acc: number, s: SettingsColumn) => Math.max(acc, s.priority),
								0,
							) + 1
						: settings[idx!].priority,
				});
				setSettings(newSettings);
			},
			[meta],
		),
	};
};
