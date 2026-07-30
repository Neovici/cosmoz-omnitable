import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useCallback } from '@pionjs/pion';
import type { ColumnConfigInput } from '../layout';

interface SettingsUiConfig {
	settings: { columns: ColumnConfigInput[] };
	setSettings: (
		settings:
			| { columns?: ColumnConfigInput[] }
			| ((settings: { columns?: ColumnConfigInput[] }) => {
					columns?: ColumnConfigInput[];
			  }),
	) => void;
	collapsed?: { name?: string }[];
	requestTween?: () => void;
}

interface SettingsUiMeta {
	collapsed?: { name?: string }[];
	settings: ColumnConfigInput[];
	requestTween?: () => void;
	setSettings: (columns: ColumnConfigInput[]) => void;
	handle?: HTMLElement | null;
}

interface UseSettingsUiHost {
	config: SettingsUiConfig;
}

const parseIndex = (str?: string | null) => {
	const idx = parseInt(str ?? '', 10);
	return isFinite(idx) ? idx : undefined;
};

export default (host: UseSettingsUiHost) => {
	const { config } = host,
		{ settings, setSettings, collapsed, requestTween } = config,
		meta = useMeta<SettingsUiMeta>({
			collapsed,
			settings: settings.columns,
			requestTween,
			setSettings: useCallback(
				(columns: ColumnConfigInput[]) =>
					setSettings((cfg) => ({
						...cfg,
						columns,
					})),
				[setSettings],
			),
		});

	return {
		...config,
		onDown: useCallback(
			(e: MouseEvent) => {
				const target = e.target instanceof Element ? e.target : null;
				if (!target || !target.closest('.pull')) {
					return;
				}

				meta.handle =
					e.currentTarget instanceof HTMLElement ? e.currentTarget : null;
			},
			[meta],
		),

		onDragStart: useCallback(
			(e: DragEvent) => {
				const target = e.target instanceof HTMLElement ? e.target : null,
					index = parseIndex(target?.dataset.index);

				if (!target || !meta.handle?.contains(target) || index == null) {
					return e.preventDefault();
				}

				meta.handle = null;
				e.dataTransfer!.effectAllowed = 'move';
				e.dataTransfer!.setData('omnitable/sort-index', String(index));
				e.dataTransfer!.setData('text/plain', String(index));
				setTimeout(() => target.classList.add('drag'), 0);
				target.addEventListener(
					'dragend',
					(event) => {
						(event.target instanceof HTMLElement
							? event.target
							: null
						)?.classList.remove('drag');
					},
					{ once: true },
				);
			},
			[meta],
		),

		onDragEnter: useCallback((e: DragEvent) => {
			const ctg =
				e.currentTarget instanceof HTMLElement ? e.currentTarget : null;
			if (!ctg || ctg !== e.target) {
				return;
			}

			e.preventDefault();
			e.dataTransfer!.dropEffect = 'move';
			ctg.classList.add('dragover');
		}, []),

		onDragOver: useCallback((e: DragEvent) => {
			e.preventDefault();
			if (e.currentTarget instanceof HTMLElement) {
				e.currentTarget.classList.add('dragover');
			}
		}, []),

		onDragLeave: useCallback((e: DragEvent) => {
			const ctg =
				e.currentTarget instanceof HTMLElement ? e.currentTarget : null;
			if (!ctg) {
				return;
			}
			if (e.relatedTarget instanceof Node && ctg.contains(e.relatedTarget)) {
				return;
			}

			ctg.classList.remove('dragover');
		}, []),

		onDrop: useCallback(
			(e: DragEvent) => {
				const from = parseIndex(
						e.dataTransfer?.getData('omnitable/sort-index'),
					)!,
					currentTarget =
						e.currentTarget instanceof HTMLElement ? e.currentTarget : null,
					to = parseIndex(currentTarget?.dataset.index)!,
					{ settings, setSettings, requestTween } = meta;

				currentTarget?.classList.remove('dragover');
				e.preventDefault();

				const newSettings = settings.slice();
				newSettings.splice(
					to + (from >= to ? 0 : -1),
					0,
					newSettings.splice(from, 1)[0]!,
				);
				requestTween?.();
				setSettings(newSettings);
			},
			[meta],
		),

		onToggle: useCallback(
			(e: Event) => {
				const { settings, setSettings, requestTween } = meta,
					newSettings = settings.map((column) => ({
						...column,
						disabled:
							column.disabled ||
							meta.collapsed?.some((c) => c.name === column.name),
					})),
					target = e.target instanceof HTMLInputElement ? e.target : null,
					idx = parseIndex(
						(e.target instanceof Element ? e.target : null)
							?.closest('[data-index]')
							?.getAttribute('data-index'),
					);

				if (idx == null) {
					return;
				}

				newSettings.splice(idx, 1, {
					...settings[idx]!,
					disabled: !target?.checked,
					priority: target?.checked
						? settings.reduce((acc, s) => Math.max(acc, s.priority ?? 0), 0) + 1
						: settings[idx]?.priority,
				});
				requestTween?.();
				setSettings(newSettings);
			},
			[meta],
		),
	};
};
