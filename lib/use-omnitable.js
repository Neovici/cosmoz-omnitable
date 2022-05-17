import { useCallback, useMemo, useEffect } from 'haunted';
import { useProcessedItems } from './use-processed-items';
import { useFastLayout } from './use-fast-layout';
// import { useSavedSettings } from './use-saved-settings';
// import { normalizeSettings } from './normalize-settings';
import { useSettings } from './settings';
import { useDOMColumns } from './use-dom-columns';
import { useSortAndGroupOptions } from './use-sort-and-group-options';
import { onItemChange } from './utils-data';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = (host) => {
	const { enabledColumns, hashParam } = host,
		columns = useDOMColumns(host, { enabledColumns }),
		sortAndGroupOptions = useSortAndGroupOptions(columns, hashParam, host),
		{ groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		{ data, resizeSpeedFactor, settingsId } = host,
		// TODO: drop filterFunctions
		{
			processedItems,
			filters,
			setFilterState,
			numProcessedItems,
			filterFunctions,
			groupsCount,
		} = useProcessedItems({
			data,
			columns,
			groupOnColumn,
			groupOnDescending,
			sortOnColumn,
			descending,
			hashParam,
		}),
		settingsOpts = useSettings({ settingsId, columns }),
		{ settings, setSettings, normalizedColumns } = settingsOpts,
		layout = useFastLayout({
			host,
			settings,
			setSettings,
			groupOnColumn,
			resizeSpeedFactor,
		}),
		collapsedColumns = useMemo(
			() =>
				settings.reduce(
					(acc, column, index) =>
						layout[index] != null ||
						column.name === groupOnColumn?.name ||
						column.disabled
							? acc
							: [...acc, columns.find((c) => c.name === column.name)],
					[]
				),
			[columns, settings, layout]
		),
		hasHiddenFilter = useMemo(
			() =>
				[
					groupOnColumn,
					...collapsedColumns,
					...settings.filter((s) => s.disabled),
				].some(
					(column) =>
						column && Object.keys(filterFunctions).includes(column.name)
				),
			[filterFunctions, settings, collapsedColumns]
		),

		settingsConfig = useMemo(()=>({
			...settingsOpts,
			collapsed: collapsedColumns,
			badge: hasHiddenFilter,
			filters,
		}), [settingsOpts, collapsedColumns, hasHiddenFilter, filters])

	useEffect(() => {
		const handler = (ev) =>
			setFilterState(ev.detail.name, (state) => ({
				...state,
				...ev.detail.state,
			}));
		host.addEventListener('legacy-filter-changed', handler);
		return () => host.removeEventListener('legacy-filter-changed', handler);
	}, []);

	return {
		...sortAndGroupOptions,

		columns,
		normalizedColumns,
		collapsedColumns,

		settingsConfig,

		filters,
		setFilterState,
		onItemChange: useCallback(
			(column, item) => (value) => onItemChange(host, column, item, value),
			[]
		),
		numProcessedItems,
		groupsCount,
		sortedFilteredGroupedItems: processedItems,
	};
};
