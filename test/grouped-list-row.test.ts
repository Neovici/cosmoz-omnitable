import { setupIgnoreWindowResizeObserverLoopErrors } from '@lit-labs/virtualizer/support/resize-observer-errors.js';
import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { render } from 'lit-html';
import { spy as sinonSpy, type SinonSpy } from 'sinon';

import '../src/grouped-list/cosmoz-grouped-list-row';
import '../src/grouped-list/index';
import { renderCosmozGroupedList } from '../src/grouped-list/use-cosmoz-grouped-list';

interface RowItem {
	id: number;
	label: string;
}

interface GroupedListEl extends HTMLElement {
	data: unknown[];
	toggleCollapse(item: unknown): void;
}

interface RowEl extends HTMLElement {
	item: unknown;
	index: number;
	renderFn: unknown;
}

interface DirectRouteHost {
	outer: HTMLElement;
	scroller: HTMLElement;
	rows: RowItem[];
	buildRow: SinonSpy;
	draw: () => void;
}

setupIgnoreWindowResizeObserverLoopErrors(setup, teardown);

const rowsOf = (outer: HTMLElement) =>
	Array.from(outer.querySelectorAll<RowEl>('cosmoz-grouped-list-row'));

const rowOf = (outer: HTMLElement, item: unknown) =>
	rowsOf(outer).find((row) => row.item === item);

const builderCallsFor = (direct: DirectRouteHost, item: unknown) =>
	direct.buildRow.getCalls().filter((call) => call.args[0] === item).length;

// The direct route renders only renderCosmozGroupedList, with the row content
// builder exposed as a spy, keeping the contract testable in isolation.
const directRoute = async (count: number): Promise<DirectRouteHost> => {
	const rows = Array.from({ length: count }, (_, id) => ({
			id,
			label: `row ${id}`,
		})),
		buildRow = sinonSpy(
			(item: RowItem) =>
				html`<div class="content" style="height:40px">${item.label}</div>`
		),
		outer = await fixture<HTMLElement>(html`<div></div>`),
		draw = () =>
			render(
				html`<div id="scroll" style="height:200px;overflow:auto">
					<div style="position:relative;display:flex;flex-direction:column">
						${renderCosmozGroupedList({ renderRow: buildRow, flatData: rows })}
					</div>
				</div>`,
				outer
			);

	draw();
	await waitUntil(() => buildRow.callCount > 0);
	await nextFrame();
	await nextFrame();
	buildRow.resetHistory();
	return {
		outer,
		scroller: outer.querySelector<HTMLElement>('#scroll')!,
		rows,
		buildRow,
		draw,
	};
};

suite('cosmoz-grouped-list-row rendering contract', () => {
	suite('row element', () => {
		test('renders content in light DOM without a shadow root', async () => {
			const el = await fixture<RowEl>(
				html`<cosmoz-grouped-list-row
					.item=${{ id: 1, label: 'a' }}
					.index=${3}
					.renderFn=${(item: RowItem, index: number) =>
						html`<div class="content">${item.label + index}</div>`}
				></cosmoz-grouped-list-row>`
			);
			await nextFrame();
			assert.isNull(el.shadowRoot, 'no shadow root per contract');
			assert.equal(el.firstElementChild!.className, 'content');
			assert.equal(el.textContent!.trim(), 'a3');
		});

		test('renders a recycled row once with all its new bindings', async () => {
			const el = await fixture<RowEl>(
				html`<cosmoz-grouped-list-row></cosmoz-grouped-list-row>`
			);
			el.item = { id: 0, label: 'old' };
			el.index = 0;
			const builder = sinonSpy(
				(item: RowItem, index: number) =>
					html`<div class="content">${item.label} ${index}</div>`
			);
			el.renderFn = builder;
			await nextFrame();
			builder.resetHistory();

			el.item = { id: 1, label: 'new' };
			el.index = 4;
			el.renderFn = builder;
			await nextFrame();
			assert.equal(el.textContent!.trim(), 'new 4');
			assert.equal(builder.callCount, 1, 'reassigned slot renders once');
		});
	});

	suite('scrolling', () => {
		test('a retained row does not rebuild its content while scrolling', async () => {
			const direct = await directRoute(200),
				{ scroller, rows } = direct;

			scroller.scrollTop = 100;
			await nextFrame();
			await nextFrame();

			const row0 = rowOf(direct.outer, rows[0]);
			assert.isNotNull(row0, 'row 0 stays mounted in the overhang');
			assert.include(row0!.textContent!, 'row 0');
			assert.equal(
				builderCallsFor(direct, rows[0]),
				0,
				'row 0 builder not called during scroll'
			);
		});

		test('unchanged-data host re-renders do not rebuild mounted rows', async () => {
			const direct = await directRoute(200),
				{ scroller, rows } = direct;

			scroller.scrollTop = 100;
			await nextFrame();
			await nextFrame();
			assert.isNotNull(
				rowOf(direct.outer, rows[0]),
				'precondition: row 0 mounted'
			);

			rows[0].label = 'refreshed';
			direct.draw();
			await nextFrame();
			await nextFrame();

			assert.equal(
				builderCallsFor(direct, rows[0]),
				0,
				'in-place item mutation is not committed: identical bindings rebuild nothing'
			);
			assert.include(
				rowOf(direct.outer, rows[0])!.textContent!,
				'row 0',
				'the row keeps its last committed DOM'
			);
		});

		test('rows rebuild when the item object is replaced', async () => {
			const direct = await directRoute(200),
				{ scroller, rows } = direct;

			scroller.scrollTop = 100;
			await nextFrame();
			await nextFrame();
			assert.isNotNull(
				rowOf(direct.outer, rows[0]),
				'precondition: row 0 mounted'
			);

			rows[0] = { id: rows[0].id, label: 'refreshed' };
			direct.draw();
			await nextFrame();
			await nextFrame();

			const row0 = rowsOf(direct.outer).find((row) => row.item === rows[0]);
			assert.isNotNull(row0, 'precondition: the replaced item has a row');
			assert.include(
				row0!.textContent!,
				'refreshed',
				'changed item binding renders the new content'
			);
			assert.equal(
				builderCallsFor(direct, rows[0]),
				1,
				'replaced item renders its row exactly once'
			);
		});

		test('mounted rows refresh when the row content callback changes identity', async () => {
			const rows = Array.from({ length: 20 }, (_, id) => ({
					id,
					label: `row ${id}`,
				})),
				outer = await fixture<HTMLElement>(html`<div></div>`),
				draw = (renderRow: (item: RowItem, index: number) => unknown) =>
					render(
						html`<div id="scroll" style="height:200px;overflow:auto">
							<div style="position:relative;display:flex;flex-direction:column">
								${renderCosmozGroupedList({ renderRow, flatData: rows })}
							</div>
						</div>`,
						outer
					);

			draw(
				(item, index) =>
					html`<div class="content" style="height:40px">
						A ${item.label} ${index}
					</div>`
			);
			await waitUntil(() => outer.textContent!.includes('A row 0'));
			await nextFrame();
			await nextFrame();

			// selection state changed elsewhere: a new row content callback identity
			draw(
				(item, index) =>
					html`<div class="content" style="height:40px">
						B ${item.label} ${index}
					</div>`
			);
			await nextFrame();
			await nextFrame();
			assert.include(
				outer.textContent!,
				'B row 0',
				'rows re-render with the new content'
			);
			assert.equal(rowsOf(outer).length, 20, 'row count unchanged');
		});
	});

	suite('grouped behavior', () => {
		test('keeps a deep row visible while a row at that depth collapses and expands', async () => {
			const rows = Array.from({ length: 400 }, (_, id) => ({
					id,
					label: `row ${id}`,
				})),
				outer = await fixture<HTMLElement>(
					html`<div style="width:600px;height:200px;overflow:auto">
						<cosmoz-grouped-list
							.data=${rows}
							.renderItem=${(item: RowItem, _index: number, { expanded }) =>
								html`<div style=${expanded ? 'height:80px' : 'height:40px'}>
									${item.id}
								</div>`}
							.renderGroup=${() => html`<div style="height:60px">Group</div>`}
						></cosmoz-grouped-list>
					</div>`
				),
				list = outer.querySelector<GroupedListEl>('cosmoz-grouped-list')!,
				visible = (item: unknown) =>
					rowsOf(outer).some((row) => {
						const rect = row.getBoundingClientRect(),
							viewport = outer.getBoundingClientRect();
						return (
							row.item === item &&
							rect.bottom > viewport.top &&
							rect.top < viewport.bottom
						);
					});

			await waitUntil(() => rowsOf(outer).length > 0);
			outer.scrollTop = 12000;
			await waitUntil(() => visible(rows[300]));
			list.toggleCollapse(rows[300]);
			await nextFrame();
			await nextFrame();
			await nextFrame();
			assert.isTrue(visible(rows[300]), 'expanded row stays visible');
			list.toggleCollapse(rows[300]);
			await nextFrame();
			await nextFrame();
			await nextFrame();
			assert.isTrue(visible(rows[300]), 'collapsed row stays visible');
		});

		test('replacing an item re-renders its row through the component', async () => {
			const rows = Array.from({ length: 50 }, (_, id) => ({
					id,
					label: `row ${id}`,
				})),
				outer = await fixture<HTMLElement>(
					html`<div style="width:400px;height:150px;overflow:auto">
						<cosmoz-grouped-list
							.data=${rows}
							.renderItem=${(item: RowItem) =>
								html`<div style="height:40px">${item.label}</div>`}
						></cosmoz-grouped-list>
					</div>`
				),
				list = outer.querySelector<GroupedListEl>('cosmoz-grouped-list')!;

			await waitUntil(() =>
				rowsOf(outer).some((row) => row.textContent!.includes('row 0'))
			);

			rows[0] = { id: 0, label: 'refreshed' };
			list.data = [...rows];
			await waitUntil(() =>
				rowsOf(outer).some((row) => row.textContent!.includes('refreshed'))
			);
		});
	});
});
