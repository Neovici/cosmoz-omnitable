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

		render(
			renderFooter({
				columns,
				selectedItems: All,
				setSelectedItems: () => undefined,
				csvFilename: 'test.csv',
				xlsxFilename: 'test.xlsx',
				xlsxSheetname: 'Sheet 1',
			}),
			container,
		);

		// When All items are selected, the full dataset is not available to export,
		// so the export dropdown is hidden entirely.
		const dropdown = container.querySelector('cosmoz-dropdown-menu');
		assert.isNull(dropdown);

		container.remove();
	});

	test('shows export buttons when selectedItems is an array', () => {
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

		render(
			renderFooter({
				columns,
				selectedItems,
				setSelectedItems: () => undefined,
				csvFilename: 'test.csv',
				xlsxFilename: 'test.xlsx',
				xlsxSheetname: 'Sheet 1',
			}),
			container,
		);

		const dropdown = container.querySelector('cosmoz-dropdown-menu');
		assert.isNotNull(dropdown);
		assert.lengthOf(
			container.querySelectorAll('cosmoz-dropdown-menu > button'),
			2,
		);

		container.remove();
	});
});
