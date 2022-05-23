import { useCallback, useMemo, useState } from 'haunted';
import { normalizeStore } from './normalize';

const storagePrefix = 'omnitable-';
// eslint-disable-next-line max-lines-per-function
export default (settingsId, settings, setSettings) => {
	const [counter, setCounter] = useState(0),
		savedSettings = useMemo(() => {
			if (!settingsId) {
				return [];
			}
			try {
				return (
					JSON.parse(localStorage.getItem(storagePrefix + settingsId)) ?? []
				);
			} catch (e) {
				return [];
			}
		}, [settingsId, counter]);

	return {
		settingsId,
		savedSettings,

		onSave: useCallback(() => {
			if (!settingsId) {
				return;
			}

			try {
				localStorage.setItem(
					storagePrefix + settingsId,
					JSON.stringify(normalizeStore(settings))
				);
				setSettings();
				setCounter((counter) => counter + 1);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		}, [settings]),

		onReset: (e) => {
			setSettings();

			if (e.shiftKey) {
				try {
					localStorage.removeItem(storagePrefix + settingsId);
					setCounter((counter) => counter + 1);
				} catch (err) {
					// ignore error
				}
			}
		},

		hasChanges: settings != null,
	};
};
