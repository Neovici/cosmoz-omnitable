import { html } from 'lit-html';
import {when} from "lit-html/directives/when.js";

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
															 hideSelectAll
}) => {
	return html` <sort-and-group-provider .value=${sortAndGroup}>
		<div class="header" id="header">
			${when(
				!hideSelectAll,
				() => html`<input
					class="checkbox all"
					type="checkbox"
					.checked=${allSelected}
					@input=${onAllCheckboxChange}
					?disabled=${!dataIsValid}
				/>`
			)}
			${when(
				hideSelectAll,
				() => html`<div class="headerDots"><span>...</span></div>`
			)}

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
