/* eslint-disable max-lines-per-function */
import { html, nothing } from 'lit-html';
import styles from '../cosmoz-omnitable-styles';

import '@neovici/cosmoz-grouped-list';
import '@neovici/cosmoz-bottom-bar';
import { ngettext, _ } from '@neovici/cosmoz-i18next';

const renderGroup = (item, index) => html` <div
		class$="[[ _getGroupRowClasses(folded) ]]"
	>
		<input
			class="checkbox"
			type="checkbox"
			checked="[[ selected ]]"
			on-input="_onCheckboxChange"
			disabled$="[[ !_dataIsValid ]]"
		/>
		<h3 class="groupRow-label">
			<div><span>[[ groupOnColumn.title ]]</span>: &nbsp;</div>
			<cosmoz-omnitable-group-row
				column="[[ groupOnColumn ]]"
				item="[[ item.items.0 ]]"
				selected="[[ selected ]]"
				folded="[[ folded ]]"
			>
			</cosmoz-omnitable-group-row>
		</h3>
		<div class="groupRow-badge">[[ item.items.length ]]</div>
		<paper-icon-button
			class="fold"
			icon="[[ _getFoldIcon(folded) ]]"
			on-tap="_toggleGroup"
		></paper-icon-button>
	</div>`,
	_onAllCheckboxChange = (event) => {
		// TODO: re-do this
		if (event.target.checked) {
			event.target.parentElement.parentElement.parentNode
				.querySelector('#groupedList')
				.selectAll();
		} else {
			event.target.parentElement.parentElement.parentNode
				.querySelector('#groupedList')
				.deselectAll();
		}
	};

export const renderOmnitable = ({
	data,
	columns,
	displayEmptyGroups,
	compareItemsFn,
	normalizedColumns,
	filters,
	setFilterState,
	groupOnColumn,
	normalizedSettings,
	collapsedColumns,
	settingsId,
	hasChangedSettings,
	setSettings,
	onSettingsSave,
	onSettingsReset,
	hasHiddenFilter,
	dataIsValid,
	allSelected,
	sortedFilteredGroupedItems,
	filterIsTooStrict,
	selectedItems,
	sortAndGroup,
	onSelectedItemsChanged,
	renderItem,
	host: { loading },
}) => html` ${html([styles])}
	<div id="layoutStyle"></div>

	<sort-and-group-provider .value=${sortAndGroup}>
		<div class="mainContainer">
			<div class="header" id="header">
				<input
					class="checkbox all"
					type="checkbox"
					.checked=${allSelected}
					@input=${_onAllCheckboxChange}
					?disabled=${!dataIsValid}
				/>
				<cosmoz-omnitable-header-row
					.data=${data}
					.columns=${normalizedColumns}
					.filters=${filters}
					.setFilterState=${setFilterState}
					.groupOnColumn=${groupOnColumn}
					.content=${html`<cosmoz-omnitable-settings
						.settings=${normalizedSettings}
						.onSettings=${setSettings}
						.collapsed=${collapsedColumns?.map((c) => c.name)}
						.settingsId=${settingsId}
						.hasChanges=${hasChangedSettings}
						.onSave=${onSettingsSave}
						.onReset=${onSettingsReset}
						.badge=${hasHiddenFilter}
						.filters=${filters}
					></cosmoz-omnitable-settings>`}
				></cosmoz-omnitable-header-row>
			</div>

			<div class="tableContent" id="tableContent">
				${[
					!dataIsValid
						? html`<div class="tableContent-empty">
								<slot name="empty-set-message">
									<iron-icon icon="icons:announcement"></iron-icon>
									<div class="tableContent-empty-message">
										<h3>${_('Working set empty')}</h3>
										<p>${_('No data to display')}</p>
									</div>
								</slot>
						  </div>`
						: nothing,
					filterIsTooStrict
						? html`<div class="tableContent-empty">
								<iron-icon icon="icons:announcement"></iron-icon>
								<div>
									<h3>${_('Filter too strict')}</h3>
									<p>${_('No matches for selection')}</p>
								</div>
						  </div>`
						: nothing,
					loading
						? html`<div class="tableContent-empty overlay">
								<paper-spinner-lite ?active=${loading}></paper-spinner-lite>
								<div>
									<h3>${_('Data set is updating')}</h3>
								</div>
						  </div>`
						: nothing,
					html`
						<div class="tableContent-scroller" id="scroller">
							<cosmoz-grouped-list
								id="groupedList"
								.data=${sortedFilteredGroupedItems}
								@selected-items-changed=${onSelectedItemsChanged}
								.renderItem=${renderItem}
								.renderGroup=${renderGroup}
								.displayEmptyGroups=${displayEmptyGroups}
								.compareItemsFn=${compareItemsFn}
							></cosmoz-grouped-list>
						</div>
					`,
				]}
			</div>
		</div>
	</sort-and-group-provider>

	<div id="columns">
		<slot id="columnsSlot"></slot>
	</div>`;

/*

		<div class="footer">
			<div class="footer-controls">
				<cosmoz-autocomplete
					label="[[ _('Group on') ]] [[ _computeSortDirection(groupOnDescending, t) ]]"
					placeholder="[[ _('No grouping', t) ]]"
					source="[[ _onCompleteValues(columns, 'groupOn', groupOnColumn) ]]"
					value="[[ groupOnColumn ]]"
					limit="1"
					text-property="title"
					always-float-label
					item-height="48"
					item-limit="8"
					class="footer-control"
					on-change="[[ _onCompleteChange('groupOn') ]]"
					on-select="[[ _onCompleteSelect ]]"
					default-index="-1"
					show-single
				>
					<svg
						slot="suffix"
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						width="24"
						fill="currentColor"
					>
						<path d="M7 10l5 5 5-5z"></path>
					</svg>
				</cosmoz-autocomplete>
				<cosmoz-autocomplete
					label="[[ _('Sort on', t) ]] [[ _computeSortDirection(descending, t) ]]"
					placeholder="[[ _('No sorting', t) ]]"
					source="[[ _onCompleteValues(columns, 'sortOn', sortOnColumn) ]]"
					value="[[ sortOnColumn ]]"
					limit="1"
					text-property="title"
					always-float-label
					item-height="48"
					item-limit="8"
					class="footer-control"
					on-change="[[ _onCompleteChange('sortOn') ]]"
					on-select="[[ _onCompleteSelect ]]"
					default-index="-1"
					show-single
				>
					<svg
						slot="suffix"
						viewBox="0 0 24 24"
						preserveAspectRatio="xMidYMid meet"
						focusable="false"
						width="24"
						fill="currentColor"
					>
						<path d="M7 10l5 5 5-5z"></path>
					</svg>
				</cosmoz-autocomplete>
				<slot id="controlsSlot" name="controls"></slot>
			</div>
			<div class="footer-tableStats">
				<span>[[ ngettext('{0} group', '{0} groups', groupsCount, t) ]]</span>
				<span>[[ _renderRowStats(numProcessedItems, totalAvailable, t) ]]</span>
			</div>
			<cosmoz-bottom-bar
				id="bottomBar"
				class="footer-actionBar"
				match-parent
				on-action="_onAction"
				?active=${selectedItems.length > 0}
			>
				<slot name="info" slot="info"
					>${ngettext(
						'{0} selected item',
						'{0} selected items',
						selectedItems.length
						// t
					)}</slot
				>
				<slot name="actions" id="actions"></slot>
				<!-- These slots are needed by cosmoz-bottom-bar
                as it might change the slot of the actions to distribute them in the menu -->
				<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
				<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
				<cosmoz-dropdown-menu slot="extra" placement="[[ topPlacement ]]">
					<svg
						slot="button"
						width="14"
						height="18"
						viewBox="0 0 14 18"
						fill="none"
						stroke="currentColor"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 8.5L7.00024 14.5L13 8.5"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M13 17L1 17" stroke-width="2" stroke-linecap="round" />
						<path d="M7 1V13" stroke-width="2" stroke-linecap="round" />
					</svg>
					<button on-click="_saveAsCsvAction">[[ _('Save as CSV', t) ]]</button>
					<button on-click="_saveAsXlsxAction">
						[[ _('Save as XLSX', t) ]]
					</button>
					<slot name="download-menu"></slot>
				</cosmoz-dropdown-menu>
			</cosmoz-bottom-bar>
		</div>

*/
