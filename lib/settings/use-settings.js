import { useMemo, useState, useRef, useCallback } from 'haunted';

import useSavedSettings from './use-saved-settings';
import normalize, { sgProps } from './normalize';

export default ({ settingsId, initial: ini, ...thru }) => {
	const initial = useMemo(
			() => Object.fromEntries(sgProps.map((k) => [k, ini[k]])),
			[]
		),
		resetRef = useRef(),
		onReset = useCallback(() => {
			resetRef.current?.(initial);
		}, [initial]),
		[settings, setSettings] = useState(),
		[opened, setOpened] = useState({ columns: true, sort: true }),
		{ savedSettings, ...rest } = useSavedSettings(
			settingsId,
			settings,
			setSettings,
			onReset
		),
		{ columns } = thru,
		normalizedSettings = useMemo(
			() =>
				normalize({
					settings,
					savedSettings,
					initial,
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
		resetRef,
	};
};
