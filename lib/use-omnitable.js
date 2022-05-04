import {
	useCallback,
	useMemo,
	useState,
	useEffect,
	useLayoutEffect,
} from 'haunted';
import { normalizeSettings } from './normalize-settings';
import { useProcessedItems } from './use-processed-items';
import { useFastLayout } from './use-fast-layout';
import { useSavedSettings } from './use-saved-settings';
import { useDOMColumns } from './use-dom-columns';
import { useSortAndGroupOptions } from './use-sort-and-group-options';
import { onItemChange as _onItemChange } from './utils-data';
import { useRenderItem } from './use-render-item';
import { useNotifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = (host) => {
	const { enabledColumns, hashParam } = host,
		columns = useDOMColumns(host, { enabledColumns }),
		sortAndGroupOptions = useSortAndGroupOptions(columns, hashParam, host),
		{ groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		{ data, resizeSpeedFactor, settingsId } = host,
		dataIsValid = useMemo(
			() => data && Array.isArray(data) && data.length > 0,
			[data]
		),
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
		[settings, setSettings] = useState([]),
		{ savedSettings, onSettingsSave, onSettingsReset, hasChangedSettings } =
			useSavedSettings(settingsId, settings, setSettings),
		normalizedSettings = useMemo(
			() => normalizeSettings(columns, settings, savedSettings),
			[columns, settings, savedSettings]
		),
		normalizedColumns = useMemo(
			() =>
				normalizedSettings.map((s) => columns.find((c) => c.name === s.name)),
			[columns, ...normalizedSettings.map((s) => s.name)]
		),
		layout = useFastLayout({
			host,
			settings: normalizedSettings,
			setSettings,
			groupOnColumn,
			resizeSpeedFactor,
		}),
		collapsedColumns = useMemo(
			() =>
				normalizedSettings.reduce(
					(acc, column, index) =>
						layout[index] != null ||
						column.name === groupOnColumn?.name ||
						column.disabled
							? acc
							: [...acc, columns.find((c) => c.name === column.name)],
					[]
				),
			[columns, normalizedSettings, layout]
		),
		hasHiddenFilter = useMemo(
			() =>
				[
					groupOnColumn,
					...collapsedColumns,
					...normalizedSettings.filter((s) => s.disabled),
				].some(
					(column) =>
						column && Object.keys(filterFunctions).includes(column.name)
				),
			[filterFunctions, normalizedSettings, collapsedColumns]
		),
		[selectedItems, setSelectedItems] = useState([]),
		onSelectedItemsChanged = useCallback(
			(ev) => setSelectedItems(ev.detail.value),
			[setSelectedItems]
		),
		onItemChange = useCallback(
			(column, item) => (value) => _onItemChange(host, column, item, value),
			[]
		);


	useLayoutEffect(() => {
		// TODO: make public api for this in grouped-list
		host.shadowRoot.querySelector('#list')?._render();
	}, [collapsedColumns]);

	useEffect(() => {
		const handler = (ev) =>
			setFilterState(ev.detail.name, (state) => ({
				...state,
				...ev.detail.state,
			}));
		host.addEventListener('legacy-filter-changed', handler);
		return () => host.removeEventListener('legacy-filter-changed', handler);
	}, []);

	useLayoutEffect(() => {
		const handler = (event) => {
			event.stopPropagation();
			const { detail } = event;
			if (detail && detail.item) {
				host.shadowRoot.querySelector('#groupedList').updateSize(detail.item);
			}
		};

		host.addEventListener('update-item-size', handler);
		return () => host.removeEventListener('update-item-size', handler);
	}, []);

	useNotifyProperty('sortedFilteredGroupedItems', processedItems);
	useNotifyProperty('selectedItems', selectedItems);

	return {
		data,
		dataIsValid,
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
		onItemChange,
		numProcessedItems,
		groupsCount,
		sortedFilteredGroupedItems: processedItems,

		filterIsTooStrict: dataIsValid && processedItems.length < 1,

		selectedItems,
		onSelectedItemsChanged,

		allSelected: useMemo(
			() => data && data.length > 0 && selectedItems.length === data.length,
			[data, selectedItems.length]
		),

		displayEmptyGroups: host.displayEmptyGroups,
		compareItemsFn: host.compareItemsFn,

		renderItem: useRenderItem({
			dataIsValid,
			normalizedColumns,
			groupOnColumn,
			onItemChange,
			collapsedColumns,
		}),

		host,
	};
};
