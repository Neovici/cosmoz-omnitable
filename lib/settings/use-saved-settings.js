import { useCallback, useMemo, useState } from 'haunted';
import { normalizeStore } from './normalize';

const storagePrefix = 'omnitable-',
	read = (settingsId) => {
		if (!settingsId) {
			return [];
		}
		try {
			return JSON.parse(localStorage.getItem(storagePrefix + settingsId)) ?? [];
		} catch (e) {
			return [];
		}
	};
// eslint-disable-next-line max-lines-per-function
export default (settingsId, settings, setSettings, onReset) => {
	const [counter, setCounter] = useState(0),
		savedSettings = useMemo(() => read(settingsId), [settingsId, counter]);

	return {
		settingsId,
		savedSettings,

		onSave: useCallback(() => {
			if (!settingsId) {
				return;
			}

			try {
				const current = read(settingsId);
				localStorage.setItem(
					storagePrefix + settingsId,
					JSON.stringify(normalizeStore(settings, current))
				);
				setSettings();
				setCounter((counter) => counter + 1);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		}, [settings]),

		onReset: useCallback(
			(e) => {
				setSettings();

				if (e.shiftKey) {
					try {
						localStorage.removeItem(storagePrefix + settingsId);
						setCounter((counter) => counter + 1);
					} catch (err) {
						// ignore error
					}
				}
				onReset?.();
			},
			[onReset]
		),

		hasChanges: settings != null,
	};
};
