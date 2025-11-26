import { saveAs } from 'file-saver-es';
import { NullXlsx } from '@neovici/nullxlsx';
import { Column, Item } from './types';

export interface XlsxColumn extends Column {
	title: string;
	toXlsxValue: (column: XlsxColumn, item: Item) => string;
}

export const prepareXlsxData = (
	columns: XlsxColumn[],
	selectedItems: Item[],
) => {
	const headers = columns.map((col) => col.title);
	const data = selectedItems.map((item) =>
		columns.map((column) => {
			const value = column.toXlsxValue(column, item);
			return value == null ? '' : value;
		}),
	);

	data.unshift(headers);
	return data;
};

export const saveAsXlsxAction = (
	columns: XlsxColumn[],
	selectedItems: Item[],
	xlsxFilename: string,
	xlsxSheetname: string,
) => {
	const data = prepareXlsxData(columns, selectedItems);
	const xlsx = new NullXlsx(xlsxFilename)
		.addSheetFromData(data, xlsxSheetname)
		.generate();

	saveAs(
		new File([xlsx], xlsxFilename, {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		}),
	);
};
