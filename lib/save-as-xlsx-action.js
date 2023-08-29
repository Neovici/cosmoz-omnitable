import { saveAs } from 'file-saver-es';
import { NullXlsx } from '@neovici/nullxlsx';

export const
	prepareXlsxData = (columns, selectedItems) => {
		const headers = columns.map(col => col.title),
			data = selectedItems.map(item =>
				columns.map(column => {
					const value = column.toXlsxValue(column, item);
					return value == null ? '' : value;
				})
			);

		data.unshift(headers);
		return data;
	},

	saveAsXlsxAction = (columns, selectedItems, xlsxFilename, xlsxSheetname) => {
		const data = prepareXlsxData(columns, selectedItems),
			xlsx = new NullXlsx(xlsxFilename).addSheetFromData(data, xlsxSheetname).generate();

		saveAs(new File([xlsx], xlsxFilename, {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}));
	};
