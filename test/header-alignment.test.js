import { assert, html, waitUntil } from '@open-wc/testing';
import i18next from 'i18next';
import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

const labelsIn = (root) => [
	...root.querySelectorAll('label'),
	...[...root.querySelectorAll('*')].flatMap((element) =>
		element.shadowRoot ? labelsIn(element.shadowRoot) : []
	),
];

suite('header alignment', () => {
	let tokens;

	teardown(() => tokens?.remove());
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('aligns mixed filter headings when a sort indicator is active', async () => {
		await i18next.init({ lng: 'en', resources: {} });
		tokens = document.createElement('link');
		tokens.rel = 'stylesheet';
		tokens.href = '/node_modules/@neovici/cosmoz-tokens/src/index.css';
		await new Promise((resolve, reject) => {
			tokens.onload = resolve;
			tokens.onerror = reject;
			document.head.append(tokens);
		});
		const table = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable style="width: 1000px; height: 200px" sort-on="date">
					<cosmoz-omnitable-column
						name="supplier"
						title="Supplier"
						value-path="supplier"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column-list
						name="status"
						title="Status"
						value-path="status"
					></cosmoz-omnitable-column-list>
					<cosmoz-omnitable-column-number
						name="amount"
						title="Amount"
						value-path="amount"
					></cosmoz-omnitable-column-number>
					<cosmoz-omnitable-column-date
						name="date"
						title="Due date"
						value-path="date"
					></cosmoz-omnitable-column-date>
				</cosmoz-omnitable>
			`,
			[
				{
					supplier: 'Acme',
					status: 'Open',
					amount: 1200,
					date: new Date('2026-10-20'),
				},
			]
		);
		const headings = () =>
			[...table.shadowRoot.querySelectorAll('.header-cell')].map((cell) =>
				labelsIn(cell).find((label) => label.getBoundingClientRect().width > 0)
			);
		await waitUntil(() => headings().length === 4 && headings().every(Boolean));
		const tops = headings().map((label) => label.getBoundingClientRect().top);
		assert.isBelow(Math.max(...tops) - Math.min(...tops), 0.01);
	});
});
