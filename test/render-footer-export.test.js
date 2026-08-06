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

	test('redistributes consumer info-slot content via a slot (regression for #1037)', () => {
		const container = document.createElement('div');
		document.body.append(container);

		render(
			renderFooter({
				columns: [],
				selectedItems: [{ id: 1 }],
				setSelectedItems: () => undefined,
			}),
			container,
		);

		// PR #899 introduced `<slot name="info" slot="info">` to both catch
		// consumer content slotted as name="info" and redistribute it into
		// cosmoz-bottom-bar's info slot. PR #1037 accidentally replaced this
		// with a plain <span slot="info">, breaking slot redistribution.
		const infoSlot = container.querySelector('slot[name="info"]');
		assert.isNotNull(infoSlot);
		assert.equal(infoSlot.getAttribute('slot'), 'info');

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
