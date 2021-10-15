import { useMemo, useState } from 'haunted';
import { columnSymbol, normalizeSettings } from './normalize-settings';
import { useFastLayout } from './use-fast-layout';
import { useSavedSettings } from './use-saved-settings';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const
		{ columns, groupOnColumn, resizeSpeedFactor, settingsId, sortedFilteredGroupedItems } = host,
		[settings, setSettings] = useState([]),
		{ savedSettings, onSettingsSave, onSettingsReset, hasChangedSettings } = useSavedSettings(settingsId, settings, setSettings),
		normalizedSettings = useMemo(() => normalizeSettings(columns, settings, savedSettings), [columns, settings, savedSettings]),
		normalizedColumns = useMemo(() => normalizedSettings.map(s => s[columnSymbol]), [columns, ...normalizedSettings.map(s => s.name)]),
		{ layoutCss, collapsedColumns } = useFastLayout({ host, settings: normalizedSettings, setSettings, groupOnColumn, resizeSpeedFactor }),
		filterFunctions = useMemo(() => {
			if (!columns) {
				return {};
			}
			return Object.fromEntries(columns
				.map(col => [col.name, col.getFilterFn()])
				.filter(([, fn]) => fn !== undefined));
		}, [sortedFilteredGroupedItems]),
		columnsWithFilters = useMemo(() => Object.keys(filterFunctions), [filterFunctions]),
		hasHiddenFilter = useMemo(
			() => [groupOnColumn, ...collapsedColumns, ...normalizedSettings.filter(s => s.disabled)]
				.some(column => column && columnsWithFilters.includes(column.name)),
			[columnsWithFilters, normalizedSettings, collapsedColumns]
		);

	return {
		layoutCss,
		setSettings,
		normalizedSettings,
		normalizedColumns,
		collapsedColumns,
		hasHiddenFilter,
		onSettingsSave,
		onSettingsReset,
		hasChangedSettings
	};
};
