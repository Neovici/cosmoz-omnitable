import { useCallback, useMemo, useRef, useState } from '@pionjs/pion';

import { useDOMColumns } from '../use-dom-columns';
import normalize, { sgProps } from './normalize';
import useSavedSettings from './use-saved-settings';

export default ({ settingsId, host }) => {
	const initial = useMemo(
			() => Object.fromEntries(sgProps.map((k) => [k, host[k]])),
			[],
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
			onReset,
		),
		{ enabledColumns } = host,
		columns = useDOMColumns(host, { enabledColumns }),
		normalizedSettings = useMemo(
			() =>
				normalize({
					columns,
					settings,
					savedSettings,
					initial,
				}),
			[columns, settings, savedSettings],
		),
		normalizedColumns = useMemo(
			() =>
				normalizedSettings.columns
					.map((s) => columns.find((c) => c.name === s.name))
					.filter(Boolean),
			[columns, ...normalizedSettings.columns.map((s) => s.name)],
		);

	return {
		...rest,
		savedSettings,
		opened,
		setOpened,
		settings: normalizedSettings,
		columns: normalizedColumns,
		setSettings,
		resetRef,
	};
};
