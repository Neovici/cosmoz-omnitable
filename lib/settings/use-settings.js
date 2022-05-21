import { useMemo, useState } from 'haunted';

import useSavedSettings from './use-saved-settings';
import normalize from './normalize';

export default ({ settingsId, columns }) => {
	const [settings, setSettings] = useState([]),
		[opened, setOpened] = useState({ columns: true, sort: true }),
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
		opened,
		setOpened,
		settings: normalizedSettings,
		normalizedColumns,
		setSettings,
	};
};

