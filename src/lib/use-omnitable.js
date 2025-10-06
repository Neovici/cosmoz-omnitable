import { useState } from '@pionjs/pion';
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
		{ settings, setSettings, columns, resetRef } = settingS,
		sortAndGroupOptions = useSortAndGroupOptions(
			columns,
			hashParam,
			settings,
			setSettings,
			resetRef,
		),
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
		{ isMini, collapsedColumns, miniColumns } = useFastLayout({
			host,
			columns,
			settings,
			setSettings,
			resizeSpeedFactor,
			sortAndGroupOptions,
		}),
		dataIsValid = data && Array.isArray(data) && data.length > 0,
		[selectedItems, setSelectedItems] = useState([]);

	console.log({ settingS });
	usePublicInterface({
		host,
		visibleData,
		sortedFilteredGroupedItems: processedItems,
		columns,
		filters,
		setFilterState,
		selectedItems,
		isMini,
		...sortAndGroupOptions,
	});

	return {
		header: useHeader({
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
		}),
		list: useList({
			host,
			error,
			dataIsValid,
			processedItems,
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
			columns,
		}),
	};
};
