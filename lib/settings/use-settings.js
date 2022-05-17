import { useMemo, useState } from 'haunted';

import useSavedSettings from './use-saved-settings';
import normalize from './normalize';

export default ({ settingsId, columns }) => {
	const [settings, setSettings] = useState([]),
		{ savedSettings, ...thru } = useSavedSettings(
			settingsId,
			settings,
			setSettings
		),
		normalizedSettings = useMemo(
			() => normalize(columns, settings, savedSettings),
			[columns, settings, savedSettings]
		),
		normalizedColumns = useMemo(
			() => normalizedSettings.map(s => columns.find(c => c.name === s.name)),
			[columns, ...normalizedSettings.map(s => s.name)]
		);

	return {
		...thru,
		settings: normalizedSettings,
		normalizedColumns,
		setSettings,
	};
};

