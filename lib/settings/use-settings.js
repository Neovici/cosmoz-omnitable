import { useMemo, useState } from 'haunted';

import useSavedSettings from './use-saved-settings';
import normalize from './normalize';

export default ({ settingsId, ...thru }) => {
	const [settings, setSettings] = useState(),
		[opened, setOpened] = useState({ columns: true, sort: true }),
		{ savedSettings, ...rest } = useSavedSettings(
			settingsId,
			settings,
			setSettings
		),
		{ columns } = thru,
		normalizedSettings = useMemo(
			() =>
				normalize({
					settings,
					savedSettings,
					...thru,
				}),
			[settings, savedSettings, ...Object.values(thru)]
		),
		normalizedColumns = useMemo(
			() =>
				normalizedSettings.columns.map((s) =>
					columns.find((c) => c.name === s.name)
				),
			[columns, ...normalizedSettings.columns.map((s) => s.name)]
		);

	return {
		...rest,
		opened,
		setOpened,
		settings: normalizedSettings,
		columns: normalizedColumns,
		setSettings,
	};
};
