import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import type { Column, Item } from './types';

interface SortAndGroup {
	sortOn?: string;
	setSortOn?: (name?: string) => void;
	descending?: boolean;
	setDescending?: (value: boolean) => void;
	groupOn?: string;
	setGroupOn?: (name?: string) => void;
	groupOnDescending?: boolean;
	setGroupOnDescending?: (value: boolean) => void;
	columns?: Column[];
}

interface RenderHeaderParams {
	allSelected: boolean;
	onAllCheckboxChange: (event: Event) => void;
	sortAndGroup: SortAndGroup;
	dataIsValid: boolean;
	data?: Item[];
	columns: Column[];
	filters: Record<string, unknown>;
	groupOnColumn?: Column;
	setFilterState: (name: string, state: unknown) => void;
	settingsConfig: unknown;
	hideSelectAll?: boolean;
}

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
}: RenderHeaderParams) =>
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
