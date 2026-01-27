import { saveAs } from 'file-saver-es';
import { Column, Item } from './types';

export type CsvColumn = Omit<Column, 'getString'> & {
	title: string;
	getString: (
		column: CsvColumn,
		item: Item,
	) => string | number | null | undefined;
};

const makeCsvField = (str: string): string => {
	const result = str.replace(/"/gu, '""');
	if (result.search(/("|,|\n)/gu) >= 0) {
		return '"' + result + '"';
	}
	return str;
};

export const saveAsCsvAction = (
	columns: CsvColumn[],
	selectedItems: Item[],
	csvFilename: string,
): void => {
	const separator = ';',
		lf = '\n',
		header = columns.map((col) => makeCsvField(col.title)).join(separator) + lf,
		rows = selectedItems.map((item) => {
			return (
				columns
					.map((column) => {
						const cell = column.getString(column, item);
						if (cell === undefined || cell === null) {
							return '';
						}

						return makeCsvField(String(cell));
					})
					.join(separator) + lf
			);
		});

	rows.unshift(header);

	saveAs(
		new File(rows, csvFilename, {
			type: 'text/csv;charset=utf-8',
		}),
	);
};
