import { assert, html, nextFrame } from '@open-wc/testing';
import { flush } from '@polymer/polymer/lib/utils/flush.js';

import {
	ensureDemoI18nInitialized,
	setDemoLanguage,
} from '../demo/helpers/i18n';
import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	setupOmnitableFixture,
} from './helpers/utils';

import '@polymer/paper-toggle-button';
import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

setup(async () => {
	await ensureDemoI18nInitialized();
	await setDemoLanguage('en');
});

suite('column resize jitter', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	let omnitable;

	setup(async () => {
		omnitable = await setupOmnitableFixture(
			html`
				<cosmoz-omnitable id="omnitable" style="width: 900px">
					<cosmoz-omnitable-column
						name="a"
						value-path="a"
						title="A"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="b"
						value-path="b"
						title="B"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="c"
						value-path="c"
						title="C"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="d"
						value-path="d"
						title="D"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="e"
						value-path="e"
						title="E"
					></cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						name="f"
						value-path="f"
						title="F"
					></cosmoz-omnitable-column>
				</cosmoz-omnitable>
			`,
			generateTableDemoData(5, 10, 20)
		);
	});

	const resizeColumn = async (nubIndex = 2) => {
		const host = omnitable.shadowRoot,
			nub = host.querySelectorAll('cosmoz-omnitable-resize-nub')[nubIndex],
			column = nub.column;

		for (let i = 0; i < 30; i++) {
			nub.dispatchEvent(
				new CustomEvent('column-resize', {
					bubbles: true,
					composed: true,
					detail: { newWidth: 90 + i * 3, column },
				})
			);
		}
		await nextFrame();
		flush();
		await nextFrame();
	};

	test('settings button stays pinned while animating a column resize', async () => {
		await resizeColumn();
		const host = omnitable.shadowRoot,
			button = host
				.querySelector('cosmoz-omnitable-settings')
				.shadowRoot.querySelector('cosmoz-dropdown div[slot="button"]'),
			xs = [];

		for (let i = 0; i < 30; i++) {
			await nextFrame();
			xs.push(button.getBoundingClientRect().x);
		}

		const span = Math.max(...xs) - Math.min(...xs);
		assert.ok(
			span < 1,
			`settings button should not jitter during resize, but moved ${span.toFixed(
				2
			)}px`
		);
	});

	test('rightmost column does not tremble while animating a column resize', async () => {
		await resizeColumn();
		const host = omnitable.shadowRoot,
			lastCell = host.querySelector('.header .cell[name="f"]'),
			deltas = [];
		let prev = lastCell.getBoundingClientRect().x;

		for (let i = 0; i < 30; i++) {
			await nextFrame();
			const x = lastCell.getBoundingClientRect().x;
			deltas.push(x - prev);
			prev = x;
		}

		const maxBackward = Math.min(...deltas);
		assert.ok(
			maxBackward >= -0.5,
			`rightmost column should move monotonically while resizing, but stepped back ${Math.abs(
				maxBackward
			).toFixed(2)}px`
		);
	});

	test('header and body cells stay pixel-aligned while animating a column resize', async () => {
		await resizeColumn();
		const host = omnitable.shadowRoot,
			headerCell = host.querySelector('.header .cell[name="d"]'),
			gaps = [];

		for (let i = 0; i < 30; i++) {
			await nextFrame();
			const bodyRow = host.querySelector('cosmoz-omnitable-item-row');
			if (!bodyRow) {
				continue;
			}
			const bodyCell = bodyRow.querySelector('.cell[name="d"]');
			if (bodyCell) {
				gaps.push(
					Math.abs(
						headerCell.getBoundingClientRect().x -
							bodyCell.getBoundingClientRect().x
					)
				);
			}
		}

		assert.ok(
			gaps.length > 0,
			'no body rows were available to compare header/body alignment'
		);
		const maxGap = Math.max(...gaps);
		assert.ok(
			maxGap < 1,
			`header and body should stay aligned during resize, but drifted ${maxGap.toFixed(
				2
			)}px`
		);
	});
});
