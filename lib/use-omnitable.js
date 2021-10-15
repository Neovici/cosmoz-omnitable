import { useMemo, useState } from 'haunted';
import { columnSymbol, normalizeSettings } from './normalize-settings';
import { useFastLayout } from './use-fast-layout';
import { useSavedSettings } from './use-saved-settings';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const
		{ columns, groupOnColumn, resizeSpeedFactor, settingsId } = host,
		[settings, setSettings] = useState([]),
		{ savedSettings, onSettingsSave, onSettingsReset, hasChangedSettings } = useSavedSettings(settingsId, settings, setSettings),
		normalizedSettings = useMemo(() => normalizeSettings(columns, settings, savedSettings), [columns, settings, savedSettings]),
		normalizedColumns = useMemo(() => normalizedSettings.map(s => s[columnSymbol]), [columns, ...normalizedSettings.map(s => s.name)]),
		{ layoutCss, collapsedColumns } = useFastLayout({ host, settings: normalizedSettings, setSettings, groupOnColumn, resizeSpeedFactor });

	return {
		layoutCss,
		setSettings,
		normalizedSettings,
		normalizedColumns,
		collapsedColumns,
		onSettingsSave,
		onSettingsReset,
		hasChangedSettings
	};
};
