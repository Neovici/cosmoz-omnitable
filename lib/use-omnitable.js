import { useState } from '@pionjs/pion';
import { useProcessedItems } from './use-processed-items';
import { useFastLayout } from './use-fast-layout';
import { useSettings } from './settings';
import { useSortAndGroupOptions } from './use-sort-and-group-options';
import { usePublicInterface } from './use-public-interface';
import { useHeader } from './use-header';
import { useList } from './use-list';
import { useFooter } from './use-footer';

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = (host) => {
	const {
			hashParam,
			settingsId,
			data,
			resizeSpeedFactor,
			noLocal,
			noLocalSort = noLocal,
			noLocalFilter = noLocal,
			error
		} = host,
		settingS = useSettings({ settingsId, host }),
		{ settings, setSettings, columns, resetRef } = settingS,
		sortAndGroupOptions = useSortAndGroupOptions(
			columns,
			hashParam,
			settings,
			setSettings,
			resetRef
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
		{ collapsedColumns } = useFastLayout({
			host,
			columns,
			settings,
			setSettings,
			resizeSpeedFactor,
			sortAndGroupOptions,
		}),
		dataIsValid = data && Array.isArray(data) && data.length > 0,
		[selectedItems, setSelectedItems] = useState([]);

	usePublicInterface({
		host,
		visibleData,
		sortedFilteredGroupedItems: processedItems,
		columns,
		filters,
		setFilterState,
		selectedItems,
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
			sortAndGroupOptions,
		}),
		footer: useFooter({
			host,
			selectedItems,
			columns,
		}),
	};
};
