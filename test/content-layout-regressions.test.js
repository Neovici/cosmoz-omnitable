import { assert, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-omnitable.js';
import { configureColumnLayout } from '../src/lib/column-layout.ts';

customElements.define(
	'review-derived-column',
	class extends customElements.get('cosmoz-omnitable-column') {
		renderCell() {
			return html`<button>Open details</button>`;
		}
	}
);

const width = (el, name) =>
	el.shadowRoot
		.querySelector(`.header .cell[name="${name}"]`)
		?.getBoundingClientRect().width ?? 0;
const settings = (el) =>
	el.shadowRoot.querySelector('cosmoz-omnitable-settings')?.config;
const ready = (el) =>
	waitUntil(() => settings(el)?.settings.columns.length > 0);
const settled = (el) => waitUntil(() => width(el, 'empty') === 0);

suite('content layout consumer compatibility', () => {
	let previousError;

	setup(() => {
		previousError = window.onerror;
		window.onerror = (...args) =>
			args[0] ===
			'ResizeObserver loop completed with undelivered notifications.'
				? false
				: previousError?.(...args);
	});

	teardown(() => {
		window.onerror = previousError;
		configureColumnLayout({ autoSize: false, hideEmptyColumns: false });
	});

	test('keeps subclass-rendered actions visible and preserves their preferred width', async () => {
		const el = await fixture(html`
			<cosmoz-omnitable
				auto-size
				hide-empty-columns
				data-complete
				style="display:block;width:420px;height:350px"
				.data=${[{}]}
			>
				<review-derived-column
					name="action"
					title="Action"
					width="240px"
				></review-derived-column>
				<cosmoz-omnitable-column
					name="empty"
					title="Empty"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="tail"
					title="Tail"
					editable
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`);
		await ready(el);
		await settled(el);
		assert.notInclude(
			settings(el).autoHidden.map((c) => c.name),
			'action'
		);
		await waitUntil(() => width(el, 'action') >= 240);
	});

	test('does not hide displayed boolean labels or custom formatted text', async () => {
		const el = await fixture(html`
			<cosmoz-omnitable
				hide-empty-columns
				data-complete
				style="display:block;width:900px;height:350px"
				.data=${[{}]}
			>
				<cosmoz-omnitable-column-boolean
					name="flag"
					title="Flag"
					false-label="Not approved"
				></cosmoz-omnitable-column-boolean>
				<cosmoz-omnitable-column-amount
					name="derived"
					title="Derived"
					.getString=${() => 'Derived content'}
				></cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column
					name="empty"
					title="Empty"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`);
		await ready(el);
		await settled(el);
		assert.deepEqual(
			settings(el).autoHidden.map((c) => c.name),
			['empty']
		);
		assert.isAbove(width(el, 'flag'), 0);
		assert.isAbove(width(el, 'derived'), 0);
	});

	test('explicit false overrides global defaults without changing saved widths', async () => {
		configureColumnLayout({ autoSize: true, hideEmptyColumns: true });
		const el = await fixture(html`
			<cosmoz-omnitable
				.autoSize=${false}
				.hideEmptyColumns=${false}
				data-complete
				style="display:block;width:700px;height:350px"
				.data=${[{}]}
			>
				<cosmoz-omnitable-column
					name="fixed"
					title="A heading wider than sixty pixels"
					width="60px"
					flex="0"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="empty"
					title="Empty"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`);
		await ready(el);
		await waitUntil(() => width(el, 'fixed') === 60);
		assert.isAbove(width(el, 'empty'), 0);
		assert.isEmpty(settings(el).autoHidden);
		assert.equal(settings(el).settings.columns[0].width, 60);
	});

	test('checks every loaded row and keeps editable columns and loading/error results', async () => {
		const data = [
			...Array.from({ length: 100 }, () => ({})),
			{ later: 'Present' },
		];
		const el = await fixture(html`
			<cosmoz-omnitable
				hide-empty-columns
				data-complete
				style="display:block;width:700px;height:350px"
				.data=${data}
			>
				<cosmoz-omnitable-column
					name="later"
					title="Later"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="editable"
					title="Editable"
					editable
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="empty"
					title="Empty"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>
		`);
		await ready(el);
		await settled(el);
		assert.deepEqual(
			settings(el).autoHidden.map((c) => c.name),
			['empty']
		);
		el.loading = true;
		await waitUntil(() => width(el, 'empty') > 0);
		el.loading = false;
		await settled(el);
		el.error = new Error('Failed to refresh');
		await waitUntil(() => width(el, 'empty') > 0);
		el.error = undefined;
		await settled(el);
		el.data = [];
		await waitUntil(() => width(el, 'empty') > 0);
	});
});
