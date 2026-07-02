import '@neovici/cosmoz-dropdown';
import { download01Icon } from '@neovici/cosmoz-icons/untitled';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { t } from 'i18next';
import { html } from 'lit-html';
import { saveAsCsvAction, type CsvColumn } from './save-as-csv-action';
import { saveAsXlsxAction, type XlsxColumn } from './save-as-xlsx-action';
import type { Column, Item } from './types';

interface RenderFooterParams {
	columns: Column[];
	selectedItems: Item[];
	csvFilename?: string;
	xlsxFilename?: string;
	xlsxSheetname?: string;
	topPlacement?: string;
}

export const renderFooter = ({
	columns,
	selectedItems,
	csvFilename,
	xlsxFilename,
	xlsxSheetname,
	topPlacement,
}: RenderFooterParams) =>
	html`<cosmoz-bottom-bar
		id="bottomBar"
		?active=${!isEmpty(selectedItems.length)}
		part="bottomBar"
		exportparts="bar: bottomBar-bar, info: bottomBar-info, buttons: bottomBar-buttons"
	>
		<slot name="info" slot="info">
			${t('{count} selected item', { count: selectedItems.length })}
		</slot>
		<slot name="actions" id="actions"></slot>
		<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
		<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>

		<cosmoz-dropdown-menu part="extra" slot="extra" .placement=${topPlacement}>
			${download01Icon({ slot: 'button' })}
			<cosmoz-button
				@click=${() =>
					saveAsCsvAction(columns as CsvColumn[], selectedItems, csvFilename!)}
			>
				${t('Save selected items as CSV')}
			</cosmoz-button>
			<cosmoz-button
				@click=${() =>
					saveAsXlsxAction(
						columns as XlsxColumn[],
						selectedItems,
						xlsxFilename!,
						xlsxSheetname!,
					)}
			>
				${t('Save selected items as XLSX')}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`;
