import { useCallback, useMemo, useRef, useState } from '@pionjs/pion';

import { useDOMColumns, type NormalizedColumn } from '../use-dom-columns';
import normalize, { sgProps, type NormalizedSettings } from './normalize';
import useSavedSettings from './use-saved-settings';

export interface UseSettingsHost {
	enabledColumns?: string[];
	disabledFiltering?: boolean;
	sortOn?: string;
	descending?: boolean;
	groupOn?: string;
	groupOnDescending?: boolean;
}

interface UseSettingsProps {
	settingsId?: string;
	host: UseSettingsHost & HTMLElement;
}

type ResetFn = (initial: Partial<Record<string, unknown>>) => void;

export interface UseSettingsResult {
	settingsId?: string;
	savedSettings: NormalizedSettings | null | undefined;
	opened: Record<string, boolean>;
	setOpened: (opened: Record<string, boolean>) => void;
	settings: NormalizedSettings;
	columns: NormalizedColumn[];
	setSettings: (settings?: NormalizedSettings) => void;
	resetRef: { current?: ResetFn };
	onSave: () => Promise<void>;
	onReset: (e: KeyboardEvent) => Promise<void>;
	hasChanges: boolean;
}

export default ({ settingsId, host }: UseSettingsProps): UseSettingsResult => {
	const initial = useMemo(
			() => Object.fromEntries(sgProps.map((k) => [k, host[k]])),
			[],
		),
		resetRef = useRef<ResetFn>(),
		onReset = useCallback(() => {
			resetRef.current?.(initial);
		}, [initial]),
		[settings, setSettings] = useState<NormalizedSettings | undefined>(),
		[opened, setOpened] = useState<Record<string, boolean>>({
			columns: true,
			sort: true,
		}),
		{ savedSettings, ...rest } = useSavedSettings(
			settingsId!,
			settings,
			setSettings,
			onReset,
		),
		{ enabledColumns, disabledFiltering } = host,
		columns = useDOMColumns(host, {
			enabledColumns,
			disabledFiltering,
		}),
		normalizedSettings = useMemo(
			() =>
				normalize({
					columns,
					settings,
					savedSettings: savedSettings ?? undefined,
					initial,
				}),
			[columns, settings, savedSettings],
		),
		normalizedColumns = useMemo(
			() =>
				normalizedSettings.columns
					.map((s) => columns.find((c) => c.name === s.name))
					.filter((c): c is NormalizedColumn => c !== undefined),
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
