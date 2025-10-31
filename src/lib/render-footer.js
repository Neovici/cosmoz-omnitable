import { html } from 'lit-html';
import { ngettext, _ } from '@neovici/cosmoz-i18next';
import { saveAsCsvAction } from './save-as-csv-action';
import { saveAsXlsxAction } from './save-as-xlsx-action';
import { isEmpty } from '@neovici/cosmoz-utils/template';

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
			${ngettext(
				'{0} selected item',
				'{0} selected items',
				selectedItems.length,
			)}
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
				@click=${() => saveAsCsvAction(columns, selectedItems, csvFilename)}
			>
				${_('Save as CSV')}
			</button>
			<button
				@click=${() =>
					saveAsXlsxAction(columns, selectedItems, xlsxFilename, xlsxSheetname)}
			>
				${_('Save as XLSX')}
			</button>
			<slot name="download-menu"></slot>
		</cosmoz-dropdown-menu>
	</cosmoz-bottom-bar>`;
