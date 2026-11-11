import { lift } from '@pionjs/pion';
import '../cosmoz-omnitable-skeleton';

import { announcementIcon, errorIcon } from '@neovici/cosmoz-icons';
import { t } from 'i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import type { NormalizedSettings } from './settings/normalize';
import type { Column, Item } from './types';
import { type TSelection } from './utils';

interface HeaderParams {
	settingsConfig: NormalizedSettings & {
		badge?: boolean;
		collapsed?: Column[];
		filters?: Record<string, unknown>;
	};
	columns: Column[];
	groupOnColumn?: Column;
	setFilterState: (name: string, state: unknown) => void;
}

interface ListParams {
	processedItems: (Item | unknown)[];
	dataIsValid: boolean;
	filterIsTooStrict: boolean;
	loading: boolean;
	displayEmptyGroups: boolean;
	compareItemsFn?: (a: unknown, b: unknown) => boolean;
	selectedItems: TSelection<Item>;
	setSelectedItems: (
		items: TSelection<Item> | ((prev: TSelection<Item>) => TSelection<Item>),
	) => void;
	renderItem: (item: Item, index: number, params: unknown) => unknown;
	renderGroup: (item: unknown, index: number, params: unknown) => unknown;
	error?: { message: string } | null;
}

export const renderList = (header: HeaderParams, list: ListParams) => {
	const { settingsConfig } = header,
		{
			processedItems,
			dataIsValid,
			filterIsTooStrict,
			loading,
			displayEmptyGroups,
			compareItemsFn,
			selectedItems,
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
							width: '40px',
							height: '40px',
							styles: 'fill: currentColor;',
						})}
						<div class="tableContent-empty-message">
							<h3>${t('Working set empty')}</h3>
							<p>${t('No data to display')}</p>
						</div>
					</slot>
				</div>`,
		)}
		${when(
			filterIsTooStrict,
			() =>
				html`<div class="tableContent-empty">
					${announcementIcon({
						width: '40px',
						height: '40px',
						styles: 'fill: currentColor;',
					})}
					<div>
						<h3>${t('Filter too strict')}</h3>
						<p>${t('No matches for selection')}</p>
					</div>
				</div>`,
		)}
		${when(
			loading && !processedItems.length,
			() =>
				html`<div class="tableContent-empty overlay has-skeleton">
					<cosmoz-omnitable-skeleton
						.settingsConfig=${settingsConfig}
					></cosmoz-omnitable-skeleton>
				</div>`,
		)}
		${when(
			loading && processedItems.length,
			() => html`<div class="tableContent-empty overlay spinner"></div>`,
		)}
		${when(
			error,
			() =>
				html`<div class="tableContent-empty overlay">
					${errorIcon({
						width: '40px',
						height: '40px',
						styles: 'fill: currentColor;',
					})}
					<div class="tableContent-empty-message">
						<h3>${t('Error loading data')}</h3>
						<p>${error!.message}</p>
					</div>
				</div>`,
		)}
		<div class="tableContent-scroller" id="scroller" part="scroller">
			<cosmoz-grouped-list
				id="groupedList"
				.data=${processedItems}
				.selectedItems=${selectedItems}
				@selected-items-changed=${lift(setSelectedItems)}
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
