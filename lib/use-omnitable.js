import { useCallback, useMemo, useState } from 'haunted';
import { normalizeSettings } from './normalize-settings';
import { useProcessedItems } from './use-processed-items';
import { useFastLayout } from './use-fast-layout';
import { useSavedSettings } from './use-saved-settings';
import { useDOMColumns } from './use-dom-columns';
import { useSortAndGroupOptions } from './use-sort-and-group-options';
import { onItemChange } from './utils-data';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = host => {
	const { enabledColumns, hashParam, config } = host,
		columns = useDOMColumns(host, { enabledColumns, config }),
		sortAndGroupOptions = useSortAndGroupOptions(
			columns,
			hashParam,
			host.sortOn,
			host.groupOn
		),
		{ groupOnColumn, groupOnDescending, sortOnColumn, descending } = sortAndGroupOptions,
		{ data, resizeSpeedFactor, settingsId } = host,
		// TODO: drop filterFunctions
		{
			processedItems,
			filters,
			setFilterState,
			numProcessedItems,
			filterFunctions,
			groupsCount
		} = useProcessedItems({
			data,
			columns,
			groupOnColumn,
			groupOnDescending,
			sortOnColumn,
			descending,
			hashParam
		}),
		[settings, setSettings] = useState([]),
		{ savedSettings, onSettingsSave, onSettingsReset, hasChangedSettings } =
			useSavedSettings(settingsId, settings, setSettings),
		normalizedSettings = useMemo(
			() => normalizeSettings(columns, settings, savedSettings),
			[columns, settings, savedSettings]
		),
		normalizedColumns = useMemo(
			() => normalizedSettings.map(s => columns.find(c => c.name === s.name)),
			[columns, ...normalizedSettings.map(s => s.name)]
		),
		layout = useFastLayout({
			host,
			settings: normalizedSettings,
			setSettings,
			groupOnColumn,
			resizeSpeedFactor
		}),
		collapsedColumns = useMemo(
			() => normalizedSettings.reduce((acc, column, index) =>
				layout[index] != null ||
						column.name === groupOnColumn?.name ||
						column.disabled
					? acc
					: [...acc, columns.find(c => c.name === column.name)],
			[]),
			[columns, normalizedSettings, layout]
		),
		hasHiddenFilter = useMemo(
			() =>
				[
					groupOnColumn,
					...collapsedColumns,
					...normalizedSettings.filter(s => s.disabled)
				].some(column => column && Object.keys(filterFunctions).includes(column.name)),
			[filterFunctions, normalizedSettings, collapsedColumns]
		);

	return {
		columns,

		...sortAndGroupOptions,

		setSettings,
		normalizedSettings,
		normalizedColumns,
		collapsedColumns,
		hasHiddenFilter,
		onSettingsSave,
		onSettingsReset,
		hasChangedSettings,
		filters,
		setFilterState,
		onItemChange: useCallback(
			(column, item) => value => onItemChange(host, column, item, value),
			[]
		),
		numProcessedItems,
		groupsCount,
		sortedFilteredGroupedItems: processedItems
	};
};
