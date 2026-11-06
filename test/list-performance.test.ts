import { setupIgnoreWindowResizeObserverLoopErrors } from '@lit-labs/virtualizer/support/resize-observer-errors.js';
import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { render } from 'lit-html';
import { spy } from 'sinon';
import '../src/cosmoz-omnitable-item-expand.js';
import '../src/cosmoz-omnitable-item-row.js';
import '../src/grouped-list/cosmoz-grouped-list-row.js';
import '../src/grouped-list/index.js';
import { renderCosmozGroupedList } from '../src/grouped-list/use-cosmoz-grouped-list.js';
import { prepareData, symbols } from '../src/grouped-list/utils.js';
import { renderItem } from '../src/lib/render-item.js';
import { indexSymbol } from '../src/lib/utils.js';

setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

type Row = { label: string };
type List = HTMLElement & {
	data: object[];
	toggleCollapse: (item: object) => void;
};

const mountList = async (rows: Row[]) => {
	const outer = await fixture<HTMLElement>(
		html`<div style="width:600px;height:200px;overflow:auto">
			<cosmoz-grouped-list
				.fixedRowHeight=${40}
				.data=${rows}
				.renderItem=${(
					item: Row,
					_index: number,
					{ expanded }: { expanded: boolean },
				) =>
					html`<div style="height:${expanded ? 80 : 40}px">${item.label}</div>`}
				.renderGroup=${() => html`<div style="height:60px">Group</div>`}
			></cosmoz-grouped-list>
		</div>`,
	);
	return { outer, list: outer.querySelector<List>('cosmoz-grouped-list')! };
};

const frames = async (n: number) => {
	for (let i = 0; i < n; i++) await nextFrame();
};

suite('invoice table rendering', () => {
	test('fixed rows fall back to measured heights when expanded or grouped', async () => {
		const rows = [{ label: 'first' }, { label: 'second' }];
		const { list } = await mountList(rows);
		const first = () =>
			list.querySelector<HTMLElement>('cosmoz-grouped-list-row');
		await waitUntil(() => first()?.getBoundingClientRect().height === 40);
		list.toggleCollapse(rows[0]);
		await waitUntil(() => first()?.getBoundingClientRect().height === 80);
		list.data = [{ items: rows }];
		await waitUntil(() => first()?.textContent?.includes('Group'));
		await waitUntil(() => first()?.getBoundingClientRect().height === 60);
	});

	test('keeps a deep row visible while switching between fixed and measured layout', async () => {
		const rows = Array.from({ length: 400 }, (_, id) => ({ label: `${id}` }));
		const { outer, list } = await mountList(rows);
		await waitUntil(() => list.querySelector('cosmoz-grouped-list-row'));
		outer.scrollTop = 12000;
		const visible = () => {
			const viewport = outer.getBoundingClientRect();
			return Array.from(
				list.querySelectorAll<HTMLElement & { item: object }>(
					'cosmoz-grouped-list-row',
				),
			).some((row) => {
				const rect = row.getBoundingClientRect();
				return (
					row.item === rows[300] &&
					rect.bottom > viewport.top &&
					rect.top < viewport.bottom
				);
			});
		};
		await waitUntil(visible);
		list.toggleCollapse(rows[300]);
		await frames(3);
		assert.isTrue(visible(), 'expanded row stays visible');
		list.toggleCollapse(rows[300]);
		await frames(3);
		assert.isTrue(visible(), 'collapsed row stays visible');
	});

	test('keeps a draft in an editable collapsed cell when it closes', async () => {
		const el = await fixture(
			html`<cosmoz-omnitable-item-expand
				expanded
				.columns=${[
					{
						name: 'edit',
						editable: true,
						renderCell: () => html`<input .value=${'original'} />`,
					},
				]}
			></cosmoz-omnitable-item-expand>`,
		);
		const input = el.querySelector('input')!;
		input.value = 'draft';
		el.removeAttribute('expanded');
		await nextFrame();
		el.setAttribute('expanded', '');
		await nextFrame();
		assert.strictEqual(el.querySelector('input'), input);
		assert.equal(input.value, 'draft');
	});

	test('reuses retained scrolling rows while allowing parent refreshes of mutable items', async () => {
		const rows = Array.from({ length: 100 }, (_, id) => ({
			label: `row ${id}`,
		}));
		const renderRow = spy(
			(item: Row) => html`<div style="height:40px">${item.label}</div>`,
		);
		const outer = await fixture<HTMLElement>(html`<div></div>`);
		const draw = () =>
			render(
				html`<div id="scroll" style="height:200px;overflow:auto">
					<div style="position:relative;display:flex;flex-direction:column">
						${renderCosmozGroupedList({ renderRow, flatData: rows })}
					</div>
				</div>`,
				outer,
			);
		draw();
		const scroller = outer.querySelector<HTMLElement>('#scroll')!;
		await waitUntil(() => renderRow.callCount > 0);
		await nextFrame();
		await nextFrame();
		const count = scroller.querySelectorAll('cosmoz-grouped-list-row').length;
		renderRow.resetHistory();
		scroller.scrollTop = 100;
		await waitUntil(
			() => scroller.querySelectorAll('cosmoz-grouped-list-row').length > count,
		);
		await nextFrame();
		assert.isFalse(
			renderRow.getCalls().some((call) => call.args[0] === rows[0]),
		);
		rows[0].label = 'refreshed';
		draw();
		await waitUntil(() => scroller.textContent?.includes('refreshed'));
	});

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
					collapsedColumns: [collapsed],
					miniColumns: [],
					onItemClick: () => undefined,
					onCheckboxChange: () => undefined,
					onItemChange: () => () => undefined,
					dataIsValid: true,
				})}
			</div>`,
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

	test('renders a recycled row once with all its new bindings', async () => {
		const el = await fixture<
			HTMLElement & {
				item: { label: string };
				index: number;
				renderFn: (item: { label: string }, index: number) => string;
			}
		>(html`<cosmoz-grouped-list-row></cosmoz-grouped-list-row>`);
		el.item = { label: 'old' };
		el.index = 0;
		const render = spy(
			(item: { label: string }, index: number) => `${item.label} ${index}`,
		);
		el.renderFn = render;
		await nextFrame();
		render.resetHistory();
		el.item = { label: 'new' };
		el.index = 4;
		el.renderFn = render;
		await nextFrame();
		assert.equal(el.textContent, 'new 4');
		assert.equal(render.callCount, 1);
	});

	test('defers collapsed cells and renders their current value when expanded', async () => {
		const renderCell = spy(
			(_column: unknown, { item }: { item: { label: string } }) => item.label,
		);
		const el = await fixture<HTMLElement & { item: { label: string } }>(html`
			<cosmoz-omnitable-item-expand
				.columns=${[{ name: 'note', title: 'Note', renderCell }]}
				.item=${{ label: 'first' }}
			></cosmoz-omnitable-item-expand>
		`);
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

	test('keeps flat order and group identity across folded and empty groups', () => {
		const first = { id: 1 },
			second = { id: 2 },
			third = { id: 3 };
		const open = { items: [first, second] };
		const folded = { items: [third] };
		const empty = { items: [] };
		const state = new WeakMap([[folded, { folded: true }]]);
		assert.deepEqual(prepareData([open, folded, empty], false, state), [
			open,
			first,
			second,
			folded,
		]);
		assert.strictEqual(Reflect.get(first, symbols.group), open);
		assert.deepEqual(prepareData([open, folded, empty], true, state), [
			open,
			first,
			second,
			folded,
			empty,
		]);
		assert.deepEqual(
			prepareData([first, second, third], false, new WeakMap()),
			[first, second, third],
		);
	});
});
