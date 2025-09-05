import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

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
	hideSelectAll,
}) =>
	html`<sort-and-group-provider .value=${sortAndGroup}>
		<div class="header" id="header" part="header">
			${when(
				!hideSelectAll,
				() =>
					html`<input
						class="checkbox all"
						type="checkbox"
						.checked=${allSelected}
						@input=${onAllCheckboxChange}
						?disabled=${!dataIsValid}
						part="all"
					/>`,
			)}
			${when(
				hideSelectAll,
				() =>
					html` <cosmoz-omnitable-settings
						.newLayout="${true}"
						.config=${settingsConfig}
					></cosmoz-omnitable-settings>`,
			)}

			<cosmoz-omnitable-header-row
				part="headerRow"
				.data=${data}
				.columns=${columns}
				.filters=${filters}
				.groupOnColumn=${groupOnColumn}
				.setFilterState=${setFilterState}
				.settingsConfig=${settingsConfig}
				.hideSelectAll=${hideSelectAll}
			></cosmoz-omnitable-header-row>
		</div>
	</sort-and-group-provider>`;
