import '../cosmoz-omnitable-skeleton.js';

import { _ } from '@neovici/cosmoz-i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

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
						<iron-icon icon="icons:announcement"></iron-icon>
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
					<iron-icon icon="icons:announcement"></iron-icon>
					<div>
						<h3>${_('Filter too strict')}</h3>
						<p>${_('No matches for selection')}</p>
					</div>
				</div>`,
		)}
		${when(
			loading,
			() =>
				html`<div class="tableContent-empty overlay">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${settingsConfig}
					></cosmoz-omnitable-skeleton>
				</div>`,
		)}
		${when(
			error,
			() =>
				html`<div class="tableContent-empty overlay">
					<iron-icon icon="icons:error"></iron-icon>
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
