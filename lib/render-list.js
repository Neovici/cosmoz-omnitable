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
}) => {
	return html` ${when(
			!dataIsValid,
			() => html` <div class="tableContent-empty">
				<slot name="empty-set-message">
					<div class="tableContent-empty-message">
						<h2 style="color: #292367">${_('You are a star!')}</h2>
						<h5 style="color: black">
							${_('Hooray! All work is done, awesome job!')}
						</h5>
						<a href="https://local.cosmoz-com:3000">${_('Back home')}</a>
					</div>
					<img
						class="celebration"
						src="/celebrating-emoji.png"
						alt=":celebration:"
					/>
				</slot>
			</div>`
		)}
		${when(
			filterIsTooStrict,
			() => html` <div class="tableContent-empty">
				<iron-icon icon="icons:announcement"></iron-icon>
				<div>
					<h3>${_('Filter too strict')}</h3>
					<p>${_('No matches for selection')}</p>
				</div>
			</div>`
		)}
		${when(
			loading,
			() => html` <div class="tableContent-empty overlay">
				<paper-spinner-lite active></paper-spinner-lite>
				<div>
					<h3>${_('Data set is updating')}</h3>
				</div>
			</div>`
		)}
		<div class="tableContent-scroller" id="scroller">
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
