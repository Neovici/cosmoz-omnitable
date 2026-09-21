import { useCallback, useEffect, useState } from '@pionjs/pion';
import { useDriver } from './drivers';
import { normalizeStore, type NormalizedSettings } from './normalize';

export default (
	settingsId: string,
	settings: NormalizedSettings | undefined,
	setSettings: (settings?: NormalizedSettings | undefined) => void,
	onReset?: () => void
) => {
	const [savedSettings, setSavedSettings] = useState<
			NormalizedSettings | null | undefined
		>(settingsId ? undefined : null),
		{ read, write } = useDriver();

	useEffect(async () => {
		if (!settingsId) {
			return;
		}
		setSavedSettings((await read(settingsId)) as NormalizedSettings | null);
	}, [settingsId, read]);

	return {
		settingsId,
		savedSettings,

		onSave: useCallback(async () => {
			if (!settingsId) {
				return;
			}
			const newSettings = normalizeStore(settings!, savedSettings!);
			await write(settingsId, newSettings as NormalizedSettings);
			setSettings();
			setSavedSettings(newSettings as NormalizedSettings);
		}, [settings, savedSettings]),

		onReset: useCallback(async () => {
			setSettings();
			if (settingsId && savedSettings != null) {
				await write(settingsId);
				setSavedSettings(null);
			}
			onReset?.();
		}, [settingsId, savedSettings, write, onReset]),

		hasChanges: settings != null,
		canReset: settings != null || savedSettings != null,
	};
};
