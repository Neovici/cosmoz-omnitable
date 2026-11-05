import { useCallback, useEffect, useRef, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import { ref } from 'lit-html/directives/ref.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import type { Item } from './types';
import type { TSelection } from './utils';

/** Renders the menu content for the rows it acts on. */
export type RowMenu = (items: Item[]) => unknown;

interface RowElement extends HTMLElement {
	dataItem: Item;
}

interface MenuState {
	items: Item[];
	x: number;
	y: number;
	/** Had focus when the menu opened; gets it back when the menu closes. */
	opener?: HTMLElement;
	/** The "…" button that opened the menu, if any. */
	trigger?: HTMLElement;
	/** Set while closing: whether focus was inside the menu. */
	hadFocus?: boolean;
}

const GAP = 4,
	activeElement = (root: Document | ShadowRoot = document): Element | null => {
		const el = root.activeElement;
		return el?.shadowRoot?.activeElement ? activeElement(el.shadowRoot) : el;
	},
	menuItems = (root: Element): HTMLElement[] =>
		[root, ...root.querySelectorAll('*')].flatMap((el) => [
			...(el.getAttribute('role') === 'menuitem' ? [el as HTMLElement] : []),
			...(el.shadowRoot ? [...el.shadowRoot.children].flatMap(menuItems) : []),
		]);

/**
 * A per-row action menu: opened from a row's "…" button or by right-clicking
 * the row. A row inside a multi-row selection acts on the whole selection,
 * any other row on itself. The host supplies the content through `rowMenu`.
 */
export const useRowMenu = (
	host: HTMLElement & { rowMenu?: RowMenu },
	selectedItems: TSelection<Item>,
	processedItems: unknown
) => {
	const [menu, setMenu] = useState<MenuState>(),
		popover = useRef<HTMLElement>(),
		// Read at open time, so the row callbacks keep their identity and
		// a selection change doesn't re-render every row.
		selection = useRef(selectedItems),
		// A click on the trigger of an open menu first light-dismisses it;
		// remembered so that click closes the menu instead of reopening it.
		dismissed = useRef<{ trigger?: HTMLElement; at: number }>({ at: 0 }),
		rowMenu = host.rowMenu;
	selection.current = selectedItems;

	const open = useCallback(
			(row: RowElement, state: Omit<MenuState, 'items' | 'opener'>) => {
				const item = row.dataItem,
					selected = selection.current,
					inSelection =
						Array.isArray(selected) &&
						selected.length > 1 &&
						selected.includes(item);
				setMenu({
					...state,
					items: inSelection ? selected : [item],
					opener: (activeElement() as HTMLElement | null) ?? undefined,
				});
			},
			[]
		),
		onRowMenu = useCallback(
			(e: Event) => {
				e.stopPropagation();
				const trigger = e.currentTarget as HTMLElement,
					// Through shadow roots, for a custom renderItem's own row element.
					row = e.composedPath().find((el) => (el as RowElement).dataItem) as
						| RowElement
						| undefined,
					{ trigger: last, at } = dismissed.current!;
				if (!row || (last === trigger && performance.now() - at < 500)) {
					return;
				}
				const { left, bottom } = trigger.getBoundingClientRect();
				open(row, { x: left, y: bottom + GAP, trigger });
			},
			[open]
		),
		onRowContextMenu = useCallback(
			(e: MouseEvent) => {
				e.preventDefault();
				open(e.currentTarget as RowElement, { x: e.clientX, y: e.clientY });
			},
			[open]
		);

	// Lets the header reserve the trigger's slot, so columns stay aligned.
	useEffect(() => {
		host.toggleAttribute('row-menu', !!rowMenu);
	}, [rowMenu]);

	// The rows it was opened for are gone or have moved.
	useEffect(() => setMenu(undefined), [processedItems]);

	useEffect(() => {
		const el = popover.current;
		if (!menu || !el) return;
		el.showPopover();
		el.focus();
		menu.trigger?.setAttribute('aria-expanded', 'true');
		// Keep the menu on screen: flip it up when it would overflow.
		const { width, height } = el.getBoundingClientRect(),
			top = menu.y + height > innerHeight ? menu.y - height - GAP : menu.y;
		el.style.left = `${Math.max(
			GAP,
			Math.min(menu.x, innerWidth - width - GAP)
		)}px`;
		el.style.top = `${Math.max(GAP, top)}px`;

		// It is placed in the viewport, so it can't follow a scrolling row.
		const onScroll = (e: Event) =>
				!e.composedPath().includes(el) && el.hidePopover(),
			root = host.shadowRoot!;
		root.addEventListener('scroll', onScroll, true);
		return () => {
			root.removeEventListener('scroll', onScroll, true);
			menu.trigger?.removeAttribute('aria-expanded');
		};
	}, [menu]);

	const renderRowMenu = () =>
		menu && rowMenu
			? html`<div
					popover="auto"
					class="row-menu"
					part="row-menu"
					role="menu"
					tabindex="-1"
					style=${styleMap({ left: `${menu.x}px`, top: `${menu.y}px` })}
					${ref((el) => (popover.current = el as HTMLElement))}
					@keydown=${(e: KeyboardEvent) => {
						// The menu itself holds focus until an item does; the
						// content handles arrow keys from there.
						if (e.target !== popover.current) return;
						const items = menuItems(popover.current),
							first = ['ArrowDown', 'Home'].includes(e.key),
							last = ['ArrowUp', 'End'].includes(e.key),
							item = first ? items[0] : last && items[items.length - 1];
						if (!item) return;
						e.preventDefault();
						item.focus();
					}}
					@beforetoggle=${(e: ToggleEvent) => {
						if (e.newState !== 'closed') return;
						dismissed.current = {
							trigger: menu.trigger,
							at: performance.now(),
						};
						// Remembered before the hide, while focus is still inside.
						menu.hadFocus = !!popover.current?.matches(':focus-within');
					}}
					@toggle=${(e: ToggleEvent) => {
						if (e.newState !== 'closed') return;
						// After the browser's own focus restore: when nothing had
						// focus before the menu opened, focus is left on the hidden
						// menu or falls back to the body.
						const active = activeElement(),
							stranded =
								!active ||
								active === document.body ||
								!!popover.current?.matches(':focus-within');
						if (menu.hadFocus && stranded) {
							(menu.trigger ?? menu.opener)?.focus();
						}
						setMenu(undefined);
					}}
					@click=${(e: Event) => {
						const picked = e
							.composedPath()
							.some(
								(el) =>
									el instanceof Element &&
									el.getAttribute('role') === 'menuitem'
							);
						if (picked) popover.current?.hidePopover();
					}}
			  >
					${rowMenu(menu.items)}
			  </div>`
			: nothing;

	return {
		onRowMenu: rowMenu ? onRowMenu : undefined,
		onRowContextMenu: rowMenu ? onRowContextMenu : undefined,
		renderRowMenu,
	};
};
