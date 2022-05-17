import { useCallback } from 'haunted';
import { useMeta } from '@neovici/cosmoz-utils/lib/hooks/use-meta';

const parseIndex = (str) => {
	const idx = parseInt(str, 10);
	return isFinite(idx) ? idx : undefined;
};

// eslint-disable-next-line max-lines-per-function
export default (host) => {
	const { config } = host,
		{ settings, setSettings } = config,
		meta = useMeta({ settings, setSettings });

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
				const checked = e.target.checked,
					idx = parseIndex(e.target.closest('[data-index]')?.dataset.index),
					{ settings, setSettings } = meta,
					newSettings = settings.slice(),
					setting = settings[idx],
					priority = e.target.windeterminate
						? settings.reduce((acc, s) => Math.max(acc, s.priority), 0) + 1
						: setting.priority;

				newSettings.splice(idx, 1, {
					...settings[idx],
					disabled: !checked,
					priority,
				});
				setSettings(newSettings);
			},
			[meta]
		),
	};
};
