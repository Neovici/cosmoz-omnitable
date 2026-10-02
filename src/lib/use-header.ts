import { useEffect, useMemo } from '@pionjs/pion';

import type { NormalizedSettings } from './settings/normalize';
import type { UseSettingsResult } from './settings/use-settings';
import type { Item } from './types';
import type { NormalizedColumn } from './use-dom-columns';
import { All, type TSelection } from './utils';

interface GroupedListEl extends HTMLElement {
	selectAll(): void;
	deselectAll(): void;
}

interface SortAndGroupOptions {
	groupOnColumn?: NormalizedColumn;
	sortAndGroup: Record<string, unknown>;
	[key: string]: unknown;
}

interface UseHeaderParams {
	host: HTMLElement;
	selectedItems: TSelection<Item>;
	data?: Item[];
	dataIsValid: boolean;
	columns: NormalizedColumn[];
	sortAndGroupOptions: SortAndGroupOptions;
	collapsedColumns: NormalizedColumn[];
	settings: NormalizedSettings;
	filterFunctions: Record<string, (item: Item) => boolean>;
	settingS: UseSettingsResult;
	filters: Record<string, { filter?: unknown }>;
	setFilterState: (name: string, state: unknown) => void;
	hideSelectAll?: boolean;
	/** When set, the header strip limits to these column names. */
	headerColumns?: string[] | null;
	requestTween: () => void;
	[key: string]: unknown;
}

export const useHeader = ({
	host,
	selectedItems,
	data,
	dataIsValid,
	columns,
	sortAndGroupOptions,
	collapsedColumns,
	settings,
	filterFunctions,
	settingS,
	filters,
	setFilterState,
	hideSelectAll,
	headerColumns,
	requestTween,
	...rest
}: UseHeaderParams) => {
	const headerColumnsFiltered = useMemo(
			() =>
				headerColumns == null
					? columns
					: columns.filter((column) => headerColumns.includes(column.name)),
			[columns, headerColumns]
		),
		allSelected =
			selectedItems === All ||
			(!!data &&
				data.length > 0 &&
				Array.isArray(selectedItems) &&
				selectedItems.length === data.length),
		onAllCheckboxChange = (event: Event) => {
			if (!(event.target instanceof HTMLInputElement)) {
				return;
			}
			const groupedList =
				host.shadowRoot!.querySelector<GroupedListEl>('#groupedList')!;
			if (event.target.checked) {
				groupedList.selectAll();
			} else {
				groupedList.deselectAll();
			}
		},
		{ groupOnColumn } = sortAndGroupOptions,
		hasHiddenFilter = useMemo(
			() =>
				[
					groupOnColumn,
					...collapsedColumns,
					...settings.columns.filter((s) => s.disabled),
				].some(
					(column) =>
						!!column &&
						!!column.name &&
						Object.keys(filterFunctions).includes(column.name)
				),
			[filterFunctions, settings, collapsedColumns]
		),
		settingsConfig = useMemo(
			() => ({
				...settingS,
				collapsed: collapsedColumns,
				badge: hasHiddenFilter,
				filters,
				requestTween,
			}),
			[settingS, collapsedColumns, hasHiddenFilter, filters, requestTween]
		);

	useEffect(() => {
		const el = host.shadowRoot!.querySelector<HTMLElement>('#tableContent')!,
			observer = new ResizeObserver((entries: ResizeObserverEntry[]) =>
				requestAnimationFrame(() => {
					host.style.setProperty(
						'--ot-height',
						entries[0]?.contentRect.height + 'px'
					);
				})
			);
		observer.observe(el);
		return () => observer.unobserve(el);
	}, []);

	return {
		allSelected,
		onAllCheckboxChange,
		data,
		dataIsValid,
		columns: headerColumnsFiltered,
		settingsConfig,
		filters,
		groupOnColumn,
		setFilterState,
		hideSelectAll,
		sortAndGroup: sortAndGroupOptions.sortAndGroup,
		...rest,
	};
};
