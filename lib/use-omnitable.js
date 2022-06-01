import { useCallback, useMemo, useEffect } from 'haunted';
import { useProcessedItems } from './use-processed-items';
import { useFastLayout } from './use-fast-layout';
import { useSettings } from './settings';
import { useDOMColumns } from './use-dom-columns';
import { useSortAndGroupOptions } from './use-sort-and-group-options';
import { onItemChange } from './utils-data';
import { useNotifyProperty } from '@neovici/cosmoz-utils/lib/hooks/use-notify-property'

// eslint-disable-next-line max-lines-per-function
export const useOmnitable = (host) => {
	const { enabledColumns, hashParam, settingsId } = host,
		_columns = useDOMColumns(host, { enabledColumns }),
		settingS = useSettings({ columns: _columns, settingsId, initial: host }),
		{ settings, setSettings, columns } = settingS,
		sortAndGroupOptions = useSortAndGroupOptions(columns, hashParam, settings, setSettings),
		{ groupOnColumn, groupOnDescending, sortOnColumn, descending } =
			sortAndGroupOptions,
		{ data, resizeSpeedFactor } = host,
		// TODO: drop filterFunctions
		{
			processedItems,
			visibleData,
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
		layout = useFastLayout({
			host,
			settings,
			setSettings,
			groupOnColumn,
			resizeSpeedFactor,
		}),
		collapsedColumns = useMemo(
			() =>
				settings.columns.reduce(
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
					...settings.columns.filter((s) => s.disabled),
				].some(
					(column) =>
						column && Object.keys(filterFunctions).includes(column.name)
				),
			[filterFunctions, settings, collapsedColumns]
		),
		settingsConfig = useMemo(
			() => ({
				...settingS,
				collapsed: collapsedColumns,
				badge: hasHiddenFilter,
				filters,
			}),
			[settingS, collapsedColumns, hasHiddenFilter, filters]
		);

	useEffect(() => {
		const handler = (ev) =>
			setFilterState(ev.detail.name, (state) => ({
				...state,
				...ev.detail.state,
			}));
		host.addEventListener('legacy-filter-changed', handler);
		return () => host.removeEventListener('legacy-filter-changed', handler);
	}, []);

	useEffect(() => {
		const el = host.shadowRoot.querySelector('#tableContent'),
			observer = new ResizeObserver((entries) =>
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

	useNotifyProperty('visibleData', visibleData);

	return {
		...sortAndGroupOptions,

		columns,
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
