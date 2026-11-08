 
import { assert, fixture, html, nextFrame } from '@open-wc/testing';
import { spy } from 'sinon';
import '../src/cosmoz-omnitable-item-expand';
import '../src/cosmoz-omnitable-item-row';
import {
	getVisibleColumns,
	renderItem,
} from '../src/lib/render-item';
import { indexSymbol } from '../src/lib/utils';

suite('deferred hidden cells', () => {
	test('does not create hidden main-row cells and still shows them on expansion', async () => {
		const hidden = spy(() => 'hidden value');
		const visible = {
			name: 'visible',
			renderCell: () => 'visible value',
			cellTitleFn: () => '',
		};
		const collapsed = {
			name: 'collapsed',
			title: 'Details',
			renderCell: hidden,
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
		assert.include(el.textContent, 'visible value');
		assert.equal(hidden.callCount, 0);
		const expansion = el.querySelector('cosmoz-omnitable-item-expand');
		assert.isNotNull(expansion);
		expansion!.setAttribute('expanded', '');
		await nextFrame();
		assert.include(el.textContent, 'hidden value');
	});

	test('defers collapsed cells and renders their current value when expanded', async () => {
		const renderCell = spy(
			(_column: unknown, { item }: { item: { label: string } }) => item.label
		);
		const el = await fixture<HTMLElement & { item: { label: string } }>(
			html`<cosmoz-omnitable-item-expand
				.columns=${[{ name: 'note', title: 'Note', renderCell }]}
				.item=${{ label: 'first' }}
			></cosmoz-omnitable-item-expand>`
		);
		assert.equal(renderCell.callCount, 0);
		el.item = { label: 'updated' };
		el.setAttribute('expanded', '');
		await nextFrame();
		assert.include(el.textContent, 'updated');
		assert.isAbove(renderCell.callCount, 0);
		el.removeAttribute('expanded');
		await nextFrame();
		assert.notInclude(el.textContent, 'updated');
	});

	test('keeps editable columns rendering while collapsed', async () => {
		const renderCell = spy(() => 'editable value');
		const el = await fixture(
			html`<cosmoz-omnitable-item-expand
				.columns=${[{ name: 'note', title: 'Note', editable: true, renderCell }]}
				.item=${{}}
			></cosmoz-omnitable-item-expand>`
		);
		await nextFrame();
		assert.equal(renderCell.callCount, 1);
		assert.include(el.textContent, 'editable value');
	});
	});
