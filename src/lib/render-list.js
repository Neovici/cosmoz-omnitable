import '../cosmoz-omnitable-skeleton.js';

import { _ } from '@neovici/cosmoz-i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { announcementIcon, errorIcon } from '@neovici/cosmoz-icons';

export const renderList = (header, list) => {
	const { settingsConfig } = header,
		{
			processedItems,
			dataIsValid,
			filterIsTooStrict,
			loading,
			displayEmptyGroups,
			compareItemsFn,
			setSelectedItems,
			renderItem,
			renderGroup,
			error,
		} = list;

	return html`${when(
			!loading && !dataIsValid && !error,
			() =>
				html`<div class="tableContent-empty">
					<slot name="empty-set-message">
						${announcementIcon({
							width: '96px',
							height: '96px',
							styles: 'margin-right: 24px; fill: currentColor;',
						})}
						<div class="tableContent-empty-message">
							<h3>${_('Working set empty')}</h3>
							<p>${_('No data to display')}</p>
						</div>
					</slot>
				</div>`,
		)}
		${when(
			filterIsTooStrict,
			() =>
				html`<div class="tableContent-empty">
					${announcementIcon({
						width: '96px',
						height: '96px',
						styles: 'margin-right: 24px; fill: currentColor;',
					})}
					<div>
						<h3>${_('Filter too strict')}</h3>
						<p>${_('No matches for selection')}</p>
					</div>
				</div>`,
		)}
		${when(
			loading && !processedItems.length,
			() =>
				html`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${settingsConfig}
					></cosmoz-omnitable-skeleton>
				</div>`,
		)}
		${when(
			loading && processedItems.length,
			() =>
				html`<div class="tableContent-empty overlay spinner">
					<cz-spinner></cz-spinner>
				</div>`,
		)}
		${when(
			error,
			() =>
				html`<div class="tableContent-empty overlay">
					${errorIcon({
						width: '96px',
						height: '96px',
						styles: 'margin-right: 24px; fill: currentColor;',
					})}
					<div class="tableContent-empty-message">
						<h3>${_('Error loading data')}</h3>
						<p>${error.message}</p>
					</div>
				</div>`,
		)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${processedItems}
				@selected-items-changed=${(event) =>
					setSelectedItems(event.detail.value)}
				.displayEmptyGroups=${
					displayEmptyGroups /* TODO: check if still works */
				}
				.compareItemsFn=${compareItemsFn}
				.renderItem=${renderItem}
				.renderGroup=${renderGroup}
			></cosmoz-grouped-list>
			<slot name="extraContent"></slot>
		</div>`;
};
