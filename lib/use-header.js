/* eslint-disable max-lines-per-function */
import { useEffect, useMemo } from 'haunted';

export const useHeader = ({
	host,
	selectedItems,
	data,
	sortAndGroupOptions,
	collapsedColumns,
	settings,
	filterFunctions,
	settingS,
	filters,
	...rest
}) => {
	const allSelected =
			data && data.length > 0 && selectedItems.length === data.length,
		onAllCheckboxChange = (event) => {
			if (event.target.checked) {
				host.shadowRoot.querySelector('#groupedList').selectAll();
			} else {
				host.shadowRoot.querySelector('#groupedList').deselectAll();
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

	return {
		allSelected,
		onAllCheckboxChange,
		data,
		settingsConfig,
		filters,
		groupOnColumn,
		sortAndGroup: sortAndGroupOptions.sortAndGroup,
		...rest,
	};
};
