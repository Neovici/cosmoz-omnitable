import { t } from 'i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { saveAsCsvAction, type CsvColumn } from './save-as-csv-action';
import { saveAsXlsxAction, type XlsxColumn } from './save-as-xlsx-action';
import type { Column, Item } from './types';
import { All, type TAll } from './utils';

interface RenderFooterParams {
	columns: Column[];
	selectedItems: Item[] | TAll;
	setSelectedItems: (
		items: Item[] | TAll | ((prev: Item[] | TAll) => Item[] | TAll),
	) => void;
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
	enableSelectAll?: boolean;
	allSelected: boolean;
	allItemsCount?: number;
}

export const renderFooter = ({
	columns,
	selectedItems,
	setSelectedItems,
	csvFilename,
	xlsxFilename,
	xlsxSheetname,
	topPlacement,
	enableSelectAll,
	allSelected,
	allItemsCount,
}: RenderFooterParams) => {
	const isAllSelected = selectedItems === All;
	const hasSelection = isAllSelected || selectedItems.length > 0;
	const showSelectAllItems =
		selectedItems !== All && enableSelectAll && allSelected;
	const renderExportMenu = (items: Item[]) => {
		return html`<cosmoz-dropdown-menu
			part="extra"
			slot="extra"
			.placement=${topPlacement}
		>
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
			<button
				@click=${() =>
					saveAsCsvAction(columns as CsvColumn[], items, csvFilename!)}
			>
				${t('Save selected items as CSV')}
			</button>
			<button
				@click=${() =>
					saveAsXlsxAction(
						columns as XlsxColumn[],
						items,
						xlsxFilename!,
						xlsxSheetname!,
					)}
			>
				${t('Save selected items as XLSX')}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>`;
	};
	const allLabel = when(
		isAllSelected,
		() =>
			allItemsCount !== undefined
				? t('All {count} items selected', { count: allItemsCount })
				: t('All items selected'),
		() =>
			t('{count} selected item', {
				count: selectedItems === All ? 0 : selectedItems.length,
			}),
	);

	return html`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${hasSelection}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<span slot="info">
			${allLabel}
			${when(
				showSelectAllItems,
				() =>
					html`&nbsp;<span
							part="select-all-items"
							class="selectAllItems"
							role="button"
							tabindex="0"
							style="cursor: pointer; color: white;"
							@click=${() => setSelectedItems(All)}
						>
							${t('Select all items')}
						</span>`,
			)}
		</span>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		${when(selectedItems !== All, () =>
			renderExportMenu(selectedItems as Item[]),
		)}
	</cosmoz-bottom-bar>`;
};
