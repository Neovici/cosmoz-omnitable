import { html, TemplateResult } from 'lit-html';
import { t } from 'i18next';
import { saveAsCsvAction, CsvColumn } from './save-as-csv-action';
import { saveAsXlsxAction, XlsxColumn } from './save-as-xlsx-action';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { Item } from './types';
import { when } from 'lit-html/directives/when.js';
import { All } from './select-all-symbol';

interface RenderFooterParams {
	columns: (CsvColumn & XlsxColumn)[];
	selectedItems: Item[] | typeof All;
	csvFilename: string;
	xlsxFilename: string;
	xlsxSheetname: string;
	topPlacement: string;
	enableSelectAll: boolean;
	onSelectAllMatching: () => void;
	visibleData?: Item[];
}

export const renderFooter = ({
	columns,
	selectedItems,
	csvFilename,
	xlsxFilename,
	xlsxSheetname,
	topPlacement,
	enableSelectAll,
	onSelectAllMatching,
	visibleData = [],
}: RenderFooterParams): TemplateResult => {
	const hasSelection = selectedItems === All || !isEmpty(selectedItems);
	const selectedCount =
		selectedItems === All ? visibleData.length : selectedItems.length;

	return html`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${hasSelection}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		${when(
			true,
			() =>
				html`<div slot="info" style="color: white">
					${selectedItems === All
						? html`All matching items selected.`
						: html` ${selectedCount} selected items.
								<button
									@click=${onSelectAllMatching}
									style="border: none; background: none; color: white; cursor: pointer; text-decoration: underline;"
								>
									Select all matching items
								</button>`}
				</div>`,
		)}
		<slot name="info" slot="info">
			${t('{count} selected item', { count: selectedCount })}
		</slot>
		<slot name="actions" id="actions"></slot>
		<!-- These slots are needed by cosmoz-bottom-bar
        as it might change the slot of the actions to distribute them in the menu -->
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${topPlacement}>
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
					saveAsCsvAction(
						columns,
						selectedItems === All ? visibleData : selectedItems,
						csvFilename,
					)}
			>
				${t('Save as CSV')}
			</button>
			<button
				@click=${() =>
					saveAsXlsxAction(
						columns,
						selectedItems === All ? visibleData : selectedItems,
						xlsxFilename,
						xlsxSheetname,
					)}
			>
				${t('Save as XLSX')}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`;
};
