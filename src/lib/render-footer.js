import '@neovici/cosmoz-dropdown';
import { download01Icon } from '@neovici/cosmoz-icons/untitled';
import { isEmpty } from '@neovici/cosmoz-utils/template';
import { t } from 'i18next';
import { html } from 'lit-html';
import { saveAsCsvAction } from './save-as-csv-action';
import { saveAsXlsxAction } from './save-as-xlsx-action';

export const renderFooter = ({
	columns,
	selectedItems,
	csvFilename,
	xlsxFilename,
	xlsxSheetname,
	topPlacement,
}) =>
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
				@click=${() => saveAsCsvAction(columns, selectedItems, csvFilename)}
			>
				${t('Save selected items as CSV')}
			</cosmoz-button>
			<cosmoz-button
				@click=${() =>
					saveAsXlsxAction(columns, selectedItems, xlsxFilename, xlsxSheetname)}
			>
				${t('Save selected items as XLSX')}
			</cosmoz-button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`;
