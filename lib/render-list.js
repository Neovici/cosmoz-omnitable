/* eslint-disable max-lines-per-function */
import { _ } from '@neovici/cosmoz-i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

export const renderList = ({
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
}) => {
	return html` ${when(
			!dataIsValid && !error,
			() =>
				html` <div class="tableContent-empty">
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
				html` <div class="tableContent-empty">
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
				html` <div class="tableContent-empty overlay">
					<paper-spinner-lite active></paper-spinner-lite>
					<div>
						<h3>${_('Data set is updating')}</h3>
					</div>
				</div>`,
		)}
		${when(
			error,
			() =>
				html` <div class="tableContent-empty overlay">
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
		</div>`;
};
