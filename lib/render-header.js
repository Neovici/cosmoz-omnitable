import { html } from 'lit-html';

export const renderHeader = ({
    allSelected,
    onAllCheckboxChange,
	sortAndGroup,
	dataIsValid,
	data,
	columns,
	filters,
	groupOnColumn,
	setFilterState,
	settingsConfig,
}) => {
	return html` <sort-and-group-provider .value=${sortAndGroup}>
		<div class="header" id="header">
			<input
				class="checkbox all"
				type="checkbox"
				.checked=${allSelected}
				@input=${onAllCheckboxChange}
				?disabled=${!dataIsValid}
			/>
			<cosmoz-omnitable-header-row
				.data=${data}
				.columns=${columns}
				.filters=${filters}
				.groupOnColumn=${groupOnColumn}
				.setFilterState=${setFilterState}
				.settingsConfig=${settingsConfig}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`;
};
