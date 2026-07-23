import { useSettings } from './settings';
import { useFastLayout } from './use-fast-layout';
import { useFooter } from './use-footer';
import { useHeader } from './use-header';
import { useList } from './use-list';
import { useProcessedItems } from './use-processed-items';
import { usePublicInterface } from './use-public-interface';
import { useSortAndGroupOptions } from './use-sort-and-group-options';

export const useOmnitable = (host) => {
	const {
			hashParam,
			settingsId,
			data,
			resizeSpeedFactor,
			noLocal,
			noLocalSort = noLocal,
			noLocalFilter = noLocal,
			error,
			rowPartFn,
		} = host,
		settingS = useSettings({ settingsId, host }),
		{ settings, setSettings, columns, resetRef, savedSettings } = settingS,
		ready = savedSettings !== undefined,
		sortAndGroupOptions = useSortAndGroupOptions(columns, hashParam, {
			settings,
			setSettings,
			resetRef,
			ready,
		}),
		// TODO: drop filterFunctions
		{ processedItems, visibleData, filters, setFilterState, filterFunctions } =
			useProcessedItems({
				data,
				columns,
				hashParam,
				sortAndGroupOptions,
				noLocalSort,
				noLocalFilter,
			}),
		{ isMini, collapsedColumns, miniColumns, requestTween } = useFastLayout({
			host,
			columns,
			settings,
			setSettings,
			resizeSpeedFactor,
			sortAndGroupOptions,
		}),
		dataIsValid = data && Array.isArray(data) && data.length > 0,
		{ selectedItems, setSelectedItems } = usePublicInterface({
			host,
			visibleData,
			sortedFilteredGroupedItems: processedItems,
			columns,
			filters,
			setFilterState,
			isMini,
			...sortAndGroupOptions,
		});

	const header = useHeader({
		host,
		selectedItems,
		sortAndGroupOptions,
		dataIsValid,
		data,
		columns,
		filters,
		collapsedColumns,
		settings,
		filterFunctions,
		settingS,
		setFilterState,
		hideSelectAll: host.hideSelectAll === true,
		requestTween,
	});

	return {
		header,
		list: useList({
			host,
			error,
			dataIsValid,
			processedItems,
			selectedItems,
			setSelectedItems,
			columns,
			collapsedColumns,
			miniColumns,
			sortAndGroupOptions,
			rowPartFn,
		}),
		footer: useFooter({
			host,
			selectedItems,
			allSelected: header.allSelected,
			setSelectedItems,
			columns,
			enableSelectAll: host.enableSelectAll,
			allItemsCount: host.allItemsCount,
		}),
	};
};
