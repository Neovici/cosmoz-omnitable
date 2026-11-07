import { assert, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/cosmoz-omnitable-item-expand';
import '../src/cosmoz-omnitable-item-row';
import {
	getVisibleColumns,
	renderItem,
} from '../src/lib/render-item';
import { indexSymbol } from '../src/lib/utils';

suite('deferred hidden cells', () => {
	test('does not create hidden main-row cells', async () => {
		const visible = {
			name: 'visible',
			renderCell: () => 'visible value',
			cellTitleFn: () => '',
		};
		const collapsed = {
			name: 'collapsed',
			title: 'Details',
			renderCell: () => 'hidden value',
			cellTitleFn: () => '',
		};
		const el = await fixture(
			html`<div>
				${renderItem({ [indexSymbol]: 0 }, 0, {
					selected: false,
					expanded: false,
					toggleCollapse: () => undefined,
					toggleSelect: () => undefined,
					columns: [visible, collapsed],
					visibleColumns: getVisibleColumns(
						[visible, collapsed],
						[collapsed],
						undefined
					),
					collapsedColumns: [collapsed],
					miniColumns: [],
					onItemClick: () => undefined,
					onCheckboxChange: () => undefined,
					onItemChange: () => () => undefined,
					dataIsValid: true,
				})}
			</div>`
		);
		await nextFrame();
		const row = el.querySelector('cosmoz-omnitable-item-row');
		assert.isNotNull(row);
		assert.include(row?.textContent ?? '', 'visible value');
		assert.notInclude(row?.textContent ?? '', 'hidden value');
		assert.isNull(row?.querySelector('.cell[name="collapsed"]'));
	});
});
