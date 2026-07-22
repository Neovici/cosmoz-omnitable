import { assert } from '@open-wc/testing';
import { render } from 'lit-html';
import { renderFooter } from '../src/lib/render-footer';
import { All } from '../src/lib/utils';

suite('render-footer export', () => {
	test('hides CSV/XLSX export buttons when selectedItems is All', () => {
		const container = document.createElement('div');
		document.body.append(container);

		const columns = [
			{
				title: 'ID',
				getString: (_column, item) => String(item.id),
				toXlsxValue: (_column, item) => String(item.id),
			},
		];

		const csvCalls = [];
		const xlsxCalls = [];

		render(
			renderFooter({
				columns,
				selectedItems: All,
				setSelectedItems: () => undefined,
				csvFilename: 'test.csv',
				xlsxFilename: 'test.xlsx',
				xlsxSheetname: 'Sheet 1',
				saveAsCsv: (...args) => csvCalls.push(args),
				saveAsXlsx: (...args) => xlsxCalls.push(args),
			}),
			container,
		);

		// When All items are selected, the full dataset is not available to export,
		// so the export dropdown is hidden entirely.
		const dropdown = container.querySelector('cosmoz-dropdown-menu');
		assert.isNull(dropdown);
		assert.lengthOf(csvCalls, 0);
		assert.lengthOf(xlsxCalls, 0);

		container.remove();
	});

	test('exports selectedItems when not All', () => {
		const container = document.createElement('div');
		document.body.append(container);

		const selectedItems = [{ id: 1 }, { id: 2 }];
		const columns = [
			{
				title: 'ID',
				getString: (_column, item) => String(item.id),
				toXlsxValue: (_column, item) => String(item.id),
			},
		];

		const csvCalls = [];
		const xlsxCalls = [];

		render(
			renderFooter({
				columns,
				selectedItems,
				setSelectedItems: () => undefined,
				csvFilename: 'test.csv',
				xlsxFilename: 'test.xlsx',
				xlsxSheetname: 'Sheet 1',
				saveAsCsv: (...args) => csvCalls.push(args),
				saveAsXlsx: (...args) => xlsxCalls.push(args),
			}),
			container,
		);

		const buttons = container.querySelectorAll('cosmoz-dropdown-menu > button');
		buttons[0].click();
		buttons[1].click();

		assert.lengthOf(csvCalls, 1);
		assert.strictEqual(csvCalls[0][1], selectedItems);

		assert.lengthOf(xlsxCalls, 1);
		assert.strictEqual(xlsxCalls[0][1], selectedItems);

		container.remove();
	});
});
