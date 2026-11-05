import { perform } from '@neovici/cfg/web/perform.js';
import { assert, html, nextFrame } from '@open-wc/testing';

import { ensureDemoI18nInitialized } from '../demo/helpers/i18n';
import { generateTableDemoData } from '../demo/table-demo-helper';
import {
	ignoreResizeObserverLoopErrors,
	rowVisible,
	setupOmnitableFixture,
} from './helpers/utils';

import '../src/cosmoz-omnitable-columns.ts';
import '../src/cosmoz-omnitable.js';

const activeElement = (root = document) =>
		root.activeElement?.shadowRoot?.activeElement
			? activeElement(root.activeElement.shadowRoot)
			: root.activeElement,
	rows = (omnitable) =>
		Array.from(omnitable.shadowRoot.querySelectorAll('.itemRow')),
	menu = (omnitable) => omnitable.shadowRoot.querySelector('.row-menu'),
	rightClick = (target) =>
		target.dispatchEvent(
			new MouseEvent('contextmenu', {
				bubbles: true,
				composed: true,
				cancelable: true,
			})
		),
	openMenu = async (row) => {
		rightClick(row.querySelector('cosmoz-omnitable-item-row'));
		await nextFrame();
	},
	setupTable = async (rowMenu) => {
		await ensureDemoI18nInitialized();
		const omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable .rowMenu=${rowMenu}>
				<cosmoz-omnitable-column
					name="name"
					value-path="name"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			generateTableDemoData(5, 5, 25)
		);
		await rowVisible();
		return omnitable;
	};

suite('row menu: without a rowMenu', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('right-clicking a row leaves the browser menu', async () => {
		const omnitable = await setupTable(undefined);
		assert.isTrue(rightClick(rows(omnitable)[0]));
		await nextFrame();
		assert.isFalse(!!menu(omnitable));
	});
});

suite('row menu', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	let omnitable, calls;

	setup(async () => {
		calls = [];
		omnitable = await setupTable((items) => {
			calls.push(items);
			return html`<button role="menuitem">Act on ${items.length}</button>`;
		});
	});

	test('right-clicking a row opens the menu at the pointer, without opening the row', async () => {
		let opened = 0;
		omnitable.addEventListener('omnitable-item-click', () => opened++);
		const [row] = rows(omnitable),
			box = row.getBoundingClientRect(),
			x = box.left + 120,
			y = box.top + box.height / 2;

		await perform(
			async ({ page }, x, y) => {
				await page.mouse.click(x, y, { button: 'right' });
			},
			x,
			y
		);
		await nextFrame();

		assert.isTrue(menu(omnitable).matches(':popover-open'));
		assert.deepEqual(calls.at(-1), [row.dataItem]);
		assert.closeTo(menu(omnitable).getBoundingClientRect().left, x, 1);
		assert.isEmpty(omnitable.selectedItems);
		assert.equal(opened, 0);
	});

	test('right-clicking a link or selected text leaves the browser menu', async () => {
		const [row] = rows(omnitable),
			link = Object.assign(document.createElement('a'), { href: '#x' });
		row.querySelector('cosmoz-omnitable-item-row').append(link);

		assert.isTrue(rightClick(link), 'not prevented on a link');
		document.getSelection().selectAllChildren(row);
		assert.isTrue(rightClick(row), 'not prevented on selected text');
		await nextFrame();
		assert.isFalse(!!menu(omnitable), 'the menu stays closed');

		link.remove();
		document.getSelection().removeAllRanges();
		assert.isFalse(rightClick(row), 'the row menu takes over again');
	});

	test('a row in a multi-row selection acts on the whole selection', async () => {
		const all = rows(omnitable);
		all[0].querySelector('.checkbox').click();
		all[1].querySelector('.checkbox').click();
		await nextFrame();

		await openMenu(all[1]);
		assert.sameMembers(calls.at(-1), [all[0].dataItem, all[1].dataItem]);

		menu(omnitable).hidePopover();
		await nextFrame();
		await openMenu(all[3]);
		assert.deepEqual(calls.at(-1), [all[3].dataItem]);
	});

	test('picking a menu item closes the menu', async () => {
		await openMenu(rows(omnitable)[0]);

		menu(omnitable).querySelector('[role=menuitem]').click();
		await nextFrame();

		assert.isFalse(!!menu(omnitable), 'the menu is closed');
	});

	test('arrow keys move from the menu into its items', async () => {
		await openMenu(rows(omnitable)[0]);

		await perform(async ({ page }) => {
			await page.keyboard.press('ArrowDown');
		});

		assert.isTrue(
			menu(omnitable).querySelector('[role=menuitem]') === activeElement(),
			'the first item has focus'
		);
	});

	test('arrow keys move between the items and wrap around', async () => {
		omnitable.rowMenu = () =>
			html`<button role="menuitem">One</button
				><button role="menuitem">Two</button>`;
		await nextFrame();
		await openMenu(rows(omnitable)[0]);
		const press = (key) =>
			perform(async ({ page }, key) => page.keyboard.press(key), key);

		await press('ArrowDown');
		await press('ArrowDown');
		assert.equal(activeElement()?.textContent, 'Two');
		await press('ArrowDown');
		assert.equal(activeElement()?.textContent, 'One');
		await press('ArrowUp');
		assert.equal(activeElement()?.textContent, 'Two');
	});

	test('the menu closes when the data changes', async () => {
		await openMenu(rows(omnitable)[0]);

		omnitable.data = generateTableDemoData(3, 3, 25);
		await nextFrame();
		await nextFrame();

		assert.isFalse(!!menu(omnitable), 'the menu is closed');
	});
});

suite('row menu: custom renderItem', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	customElements.define(
		'row-menu-test-row',
		class extends HTMLElement {
			connectedCallback() {
				const button = document.createElement('button');
				button.className = 'trigger';
				button.textContent = '…';
				button.addEventListener('click', (e) => this.onRowMenu(e));
				this.attachShadow({ mode: 'open' }).append(button);
			}
		}
	);

	let omnitable, calls;
	const trigger = (i) =>
		omnitable.shadowRoot
			.querySelectorAll('row-menu-test-row')
			[i].shadowRoot.querySelector('.trigger');

	setup(async () => {
		calls = [];
		await ensureDemoI18nInitialized();
		omnitable = await setupOmnitableFixture(
			html`<cosmoz-omnitable
				.rowMenu=${(items) => {
					calls.push(items);
					return html`<button role="menuitem">Act</button>`;
				}}
				.renderItem=${(item, index, { onRowMenu }) =>
					html`<row-menu-test-row
						.dataItem=${item}
						.onRowMenu=${onRowMenu}
					></row-menu-test-row>`}
			>
				<cosmoz-omnitable-column
					name="name"
					value-path="name"
				></cosmoz-omnitable-column>
			</cosmoz-omnitable>`,
			generateTableDemoData(5, 5, 25)
		);
		await perform(async ({ page, expect }) => {
			await expect(page.locator('row-menu-test-row').nth(2)).toBeAttached();
		});
	});

	test('a button in the row\'s shadow root opens the menu for its row', async () => {
		const row = omnitable.shadowRoot.querySelectorAll('row-menu-test-row')[1];

		trigger(1).click();
		await nextFrame();

		assert.isTrue(menu(omnitable).matches(':popover-open'));
		assert.deepEqual(calls.at(-1), [row.dataItem]);
	});

	test('Escape returns focus to the button, even if a click never gave it focus', async () => {
		const button = trigger(2);
		// As in Safari, where clicking a button doesn't focus it.
		activeElement()?.blur();
		button.click();
		await nextFrame();

		await perform(async ({ page }) => {
			await page.keyboard.press('Escape');
		});
		await nextFrame();

		assert.isFalse(!!menu(omnitable), 'the menu is closed');
		assert.isTrue(activeElement() === button, 'focus is back on the button');
	});

	test('the button reports the open menu, and a second click closes it', async () => {
		const button = trigger(0),
			box = button.getBoundingClientRect(),
			click = () =>
				perform(
					async ({ page }, x, y) => {
						await page.mouse.click(x, y);
					},
					box.left + box.width / 2,
					box.top + box.height / 2
				);

		await click();
		await nextFrame();
		assert.isTrue(menu(omnitable).matches(':popover-open'));
		assert.equal(button.getAttribute('aria-expanded'), 'true');

		await click();
		await nextFrame();
		assert.isFalse(!!menu(omnitable), 'the menu is closed');
		assert.isFalse(button.hasAttribute('aria-expanded'));
	});
});
