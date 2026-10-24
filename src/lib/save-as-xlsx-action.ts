import { NullXlsx } from '@neovici/nullxlsx';
import { saveAs } from 'file-saver-es';
import { Column, Item } from './types';

export interface XlsxColumn extends Omit<Column, 'toXlsxValue'> {
	title: string;
	toXlsxValue: (column: XlsxColumn, item: Item) => string | Promise<string>;
}

export const prepareXlsxData = async (
	columns: XlsxColumn[],
	selectedItems: Item[]
): Promise<(string | number | null | undefined)[][]> => {
	const headers = columns.map((col) => col.title);
	const data = await Promise.all(
		selectedItems.map(async (item) =>
			Promise.all(
				columns.map(async (column) => {
					let value: string;
					try {
						value = await column.toXlsxValue(column, item);
					} catch {
						value = '';
					}
					return value == null ? '' : value;
				})
			)
		)
	);

	data.unshift(headers);
	return data;
};

export const saveAsXlsxAction = async (
	columns: XlsxColumn[],
	selectedItems: Item[],
	xlsxFilename: string,
	xlsxSheetname: string
) => {
	const data = await prepareXlsxData(columns, selectedItems);
	const xlsx = new NullXlsx(xlsxFilename)
		.addSheetFromData(data, xlsxSheetname)
		.generate();

	saveAs(
		new File([xlsx], xlsxFilename, {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		})
	);
};
