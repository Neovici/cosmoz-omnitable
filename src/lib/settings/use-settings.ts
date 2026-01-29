import { useCallback, useMemo, useRef, useState } from '@pionjs/pion';
import type { NormalizedColumn } from '../types';
import { Host as BaseHost } from '../types';
import { useDOMColumns } from '../use-dom-columns';
import normalize, {
	NormalizedSettings,
	sgProps,
	SgPropsKey,
} from './normalize';
import useSavedSettings from './use-saved-settings';

interface Host extends BaseHost {
	enabledColumns?: string[];
	[key: string]: unknown;
}

interface UseSettingsParams {
	settingsId?: string;
	host: Host;
}

export default ({ settingsId, host }: UseSettingsParams) => {
	const initial = useMemo(
			() =>
				Object.fromEntries(sgProps.map((k) => [k, host[k]])) as Partial<
					Record<SgPropsKey, unknown>
				>,
			[],
		),
		resetRef = useRef<
			((initial: Partial<Record<SgPropsKey, unknown>>) => void) | undefined
		>(),
		onReset = useCallback(() => {
			resetRef.current?.(initial);
		}, [initial]),
		[settings, setSettings] = useState<
			Partial<NormalizedSettings> | undefined
		>(),
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
					.filter(Boolean) as NormalizedColumn[],
			[columns, ...normalizedSettings.columns.map((s) => s.name)],
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
