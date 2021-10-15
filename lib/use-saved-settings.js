import { useCallback, useMemo, useState } from 'haunted';
import { props } from '@neovici/cosmoz-utils/lib/object';

const storagePrefix = 'omnitable-';

export const useSavedSettings = (settingsId, settings, setSettings) => {
	const
		[counter, setCounter] = useState(0),
		savedSettings = useMemo(() => {
			if (!settingsId) {
				return [];
			}

			try {
				return JSON.parse(localStorage.getItem(storagePrefix + settingsId)) ?? [];
			} catch (e) {
				return [];
			}
		}, [settingsId, counter]);

	return {
		savedSettings,

		onSettingsSave: useCallback(() => {
			if (!settingsId) {
				return;
			}

			try {
				localStorage.setItem(storagePrefix + settingsId, JSON.stringify(settings.map(props(['name', 'priority', 'width', 'flex', 'disabled']))));
				setSettings([]);
				setCounter(counter => counter + 1);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		}, [settings]),

		onSettingsReset: e => {
			setSettings([]);

			if (e.shiftKey) {
				try {
					localStorage.removeItem(storagePrefix + settingsId);
					setCounter(counter => counter + 1);
				} catch (err) {
					// ignore error
				}
			}
		},

		hasChangedSettings: settings.length !== 0
	};
};