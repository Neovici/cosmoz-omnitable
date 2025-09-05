import { useCallback, useEffect, useState } from '@pionjs/pion';
import { normalizeStore } from './normalize';
import { useDriver } from './drivers';

// eslint-disable-next-line max-lines-per-function
export default (settingsId, settings, setSettings, onReset) => {
	const [savedSettings, setSavedSettings] = useState(),
		{ read, write } = useDriver();

	useEffect(async () => {
		if (!settingsId) {
			return;
		}
		setSavedSettings(await read(settingsId));
	}, [settingsId, read]);

	return {
		settingsId,
		savedSettings,

		onSave: useCallback(async () => {
			if (!settingsId) {
				return;
			}
			const newSettings = normalizeStore(settings, savedSettings);
			await write(settingsId, newSettings);
			setSettings();
			setSavedSettings(newSettings);
		}, [settings, savedSettings]),

		onReset: useCallback(
			async (e) => {
				setSettings();
				if (e.shiftKey) {
					await write(settingsId);
					setSavedSettings();
				}
				onReset?.();
			},
			[onReset],
		),
		hasChanges: settings != null,
	};
};
