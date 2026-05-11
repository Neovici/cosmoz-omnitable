import { useCallback, useEffect, useState } from '@pionjs/pion';
import { useDriver } from './drivers';
import { normalizeStore } from './normalize';

export default (settingsId, settings, setSettings, onReset) => {
	const [savedSettings, setSavedSettings] = useState(
			settingsId ? undefined : null,
		),
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
					setSavedSettings(null);
				}
				onReset?.();
			},
			[onReset],
		),
		hasChanges: settings != null,
	};
};
