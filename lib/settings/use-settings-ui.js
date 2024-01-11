import { useCallback } from '@pionjs/pion';
import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';

const parseIndex = (str) => {
	const idx = parseInt(str, 10);
	return isFinite(idx) ? idx : undefined;
};

// eslint-disable-next-line max-lines-per-function
export default (host) => {
	const { config } = host,
		{ settings, setSettings, collapsed } = config,
		meta = useMeta({
			collapsed,
			settings: settings.columns,
			setSettings: useCallback(
				(columns) =>
					setSettings((cfg) => ({
						...cfg,
						columns,
					})),
				[setSettings]
			),
		});

	return {
		...config,
		onDown: useCallback(
			(e) => {
				if (!e.target.closest('.pull')) {
					return;
				}

				meta.handle = e.currentTarget;
			},
			[meta]
		),

		onDragStart: useCallback(
			(e) => {
				const { target } = e,
					index = parseIndex(target.dataset.index);

				if (!meta.handle?.contains(target) || index == null) {
					return e.preventDefault();
				}

				meta.handle = null;
				e.dataTransfer.effectAllowed = 'move';
				e.dataTransfer.setData('omnitable/sort-index', index);
				e.dataTransfer.setData('text/plain', index);
				setTimeout(() => target.classList.add('drag'), 0);
				target.addEventListener(
					'dragend',
					(e) => e.target.classList.remove('drag'),
					{ once: true }
				);
			},
			[meta]
		),

		onDragEnter: useCallback((e) => {
			const ctg = e.currentTarget;
			if (ctg !== e.target) {
				return;
			}

			e.preventDefault();
			e.dataTransfer.dropEffect = 'move';
			ctg.classList.add('dragover');
		}, []),

		onDragOver: useCallback((e) => {
			e.preventDefault();
			e.currentTarget.classList.add('dragover');
		}, []),

		onDragLeave: useCallback((e) => {
			const ctg = e.currentTarget;
			if (ctg.contains(e.relatedTarget)) {
				return;
			}

			ctg.classList.remove('dragover');
		}, []),

		onDrop: useCallback(
			(e) => {
				const from = parseIndex(e.dataTransfer.getData('omnitable/sort-index')),
					to = parseIndex(e.currentTarget.dataset.index),
					{ settings, setSettings } = meta;

				e.currentTarget.classList.remove('dragover');
				e.preventDefault();

				const newSettings = settings.slice();
				newSettings.splice(
					to + (from >= to ? 0 : -1),
					0,
					newSettings.splice(from, 1)[0]
				);
				setSettings(newSettings);
			},
			[meta]
		),

		onToggle: useCallback(
			(e) => {
				const { settings, setSettings } = meta,
					newSettings = settings.map((column) => ({
						...column,
						disabled:
							column.disabled ||
							meta.collapsed?.some((c) => c.name === column.name),
					})),
					idx = parseIndex(e.target.closest('[data-index]')?.dataset.index);

				newSettings.splice(idx, 1, {
					...settings[idx],
					disabled: !e.target.checked,
					priority: e.target.checked
						? settings.reduce((acc, s) => Math.max(acc, s.priority), 0) + 1
						: settings[idx].priority,
				});
				setSettings(newSettings);
			},
			[meta]
		),
	};
};
