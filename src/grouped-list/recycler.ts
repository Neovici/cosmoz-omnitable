/* eslint-disable max-statements, complexity -- perf prototype with imperative DOM pool */
// Bespoke pooled row virtualizer for cosmoz-grouped-list.
//
// Replaces @lit-labs/virtualizer with a pooled "move-then-fill" model:
// - the native scroller carries ONLY a spacer (its height = total content)
//   so native scrolling (scrollbar, wheel over the scrollbar strip, anchors)
//   keeps working,
// - OUTSIDE the scrolled subtree, a viewport-sized clip wrapper contains a
//   content-tall canvas that is moved once per scroll pump with
//   translate3d(0, -scrollTop, 0) ("move"; the wrapper does the viewport
//   clipping, the canvas the row coordinate space),
// - a fixed pool of persistent `cosmoz-grouped-list-row` elements in that
//   canvas are transform-fixed at their data offsets; offsets are written at
//   bind time (and reset on idle), never per scroll frame,
// - the covered window is re-bound ("fill") via a prefix-sum offset map
//   (row heights corrected by a ResizeObserver, with scroll anchoring);
//   only entering/leaving slots re-bind; no row element is created or
//   destroyed after the pool fills.

import { noChange } from 'lit';
import {
	AsyncDirective as BaseAsyncDirective,
	directive,
} from 'lit/async-directive.js';
import type { Item } from '../lib/types';

export interface GroupedListRowHost extends HTMLElement {
	item?: Item;
	index?: number;
	renderFn?: (item: Item, index: number) => unknown;
}

export interface RecyclerConfig {
	items: Item[] | null;
	renderRow: (item: Item, index: number) => unknown;
}

const DEFAULT_HEIGHT = 40;
const MIN_ROW_HEIGHT = 24;
const OVERSCAN_ROWS = 12;
const MIN_POOL = 16;

type Slot = {
	el: GroupedListRowHost;
	height: number;
	bound: number | undefined; // bound data index, or undefined when idle
	boundItem?: unknown; // bound item reference (for identity rebinds)
	wrapper?: GroupedListRowHost['renderFn'];
};

class PooledRecycler extends BaseAsyncDirective {
	_items: unknown[] = [];
	_renderRow: (item: Item, index: number) => unknown = () => {
		return undefined;
	};
	_host: HTMLElement | null = null;
	_canvas: HTMLDivElement | null = null;
	_clip: HTMLDivElement | null = null;
	_scroller: HTMLElement | null = null;
	_pool: Slot[] = [];
	_heights: number[] = [];
	_prefix: number[] = [0];
	_itemsVersion = '';
	_built = false;
	_rafId: number | null = null;
	_ro: ResizeObserver | null = null;
	_scrollerTarget: HTMLElement | null = null;
	_observing = new WeakSet<HTMLElement>();
	_boundRenderRow: ((item: Item, index: number) => unknown) | null = null;

	pumpCount = 0;
	_debugPump() {
		const w = document.defaultView as unknown as {
			__rec?: PooledRecycler;
			__recLog?: unknown[];
		};
		w.__rec = this;
		const bound = this._pool.filter((s) => s.bound != null).length;
		const firstBound = this._pool.find((s) => s.bound != null);
		(w.__recLog ??= []).push({
			t: 'pumpEnd',
			items: this._items.length,
			pumpCount: this.pumpCount,
			pool: this._pool.length,
			bound,
			firstBound: firstBound ? String(firstBound.bound) : 'none',
			firstBoundItem: firstBound?.boundItem
				? String(firstBound.boundItem).slice(0, 20)
				: 'none',
			firstVis: firstBound ? firstBound.el.style.visibility : 'none',
			firstIndex: this._firstIndex(this._scroller?.scrollTop ?? 0),
			scrollTop: this._scroller?.scrollTop,
		});
	}

	render(_config: RecyclerConfig) {
		this._items = _config.items ?? [];
		this._renderRow = _config.renderRow;
		if (this._built) {
			this._schedule();
			return noChange;
		}
		// nothing is committed through lit: the overlay canvas and its pool
		// are built imperatively in update()/_build. Keeping this result
		// empty (noChange) leaves only marker comments in the host so host
		// re-renders never wipe the pooled rows.
		return noChange;
	}

	update(part: import('lit/async-directive.js').Part, args: [RecyclerConfig]) {
		const config = args[0];
		if (!config) {
			return noChange;
		}
		this._items = config.items ?? [];
		this._renderRow = config.renderRow;
		const w = document.defaultView as unknown as { __recLog?: unknown[] };
		(w.__recLog ??= []).push({
			t: 'update',
			n: this._items.length,
			scroller: this._scroller?.clientHeight,
		});
		if (!this._built) {
			const partWithParent = part as unknown as { parentNode: HTMLElement };
			this._build(partWithParent.parentNode);
			this._built = true;
		}
		if (this._heights.length !== this._items.length) {
			this._heights.length = this._items.length;
			this._heights.fill(DEFAULT_HEIGHT);
			this._invalidate();
		}
		// host-driven re-renders must propagate to bound rows even when the
		// item references are unchanged (mutated state, selection): refresh
		// the renderFn identity of every bound row once per host render.
		if (this._boundRenderRow !== this._renderRow) {
			this._boundRenderRow = this._renderRow;
			for (const slot of this._pool) {
				if (slot.bound == null) {
					continue;
				}
				const bound = slot.bound;
				slot.el.renderFn = ((item: Item) =>
					this._renderRow(item, bound)) as GroupedListRowHost['renderFn'];
			}
		}
		this._pump();
		return noChange;
	}

	_build(parent: HTMLElement | null | undefined) {
		const host = parent ?? document.createElement('div');
		this._host = host;
		// the host is the SPACER inside the native scroller: it only carries
		// the full scroll size; prevent flex-shrink from collapsing it
		host.style.flexShrink = '0';
		// viewport-sized clip LAYER excluded from native scroll, with a
		// content-canvas inside that is moved once per pump with
		// translate3d(-scrollTop) while its pooled rows stay transform-fixed
		// at their data offsets. The clip must NOT be on the moving canvas:
		// overflow clips in the element's LOCAL space, and rows translated to
		// offsets beyond the viewport box would be cut off — so the static
		// wrapper clips at the viewport while the tall canvas carries the row
		// coordinate space (0..total).
		const clip = document.createElement('div');
		clip.className = 'glist-recycler-viewport';
		clip.style.position = 'absolute';
		clip.style.overflow = 'hidden';
		const canvas = document.createElement('div');
		canvas.className = 'glist-recycler-canvas';
		canvas.style.position = 'absolute';
		canvas.style.top = '0';
		canvas.style.left = '0';
		canvas.style.width = '100%';
		canvas.style.willChange = 'transform';
		clip.appendChild(canvas);
		this._clip = clip;
		this._canvas = canvas;

		this._resolveScroller();
		this._measureViewport();
		this._attachCanvas();

		this._ro = new ResizeObserver((entries) => this._onResize(entries));
		this._schedule();
	}

	_resolveScroller() {
		let el = this._host?.parentElement;
		while (el) {
			const overflow = getComputedStyle(el).overflowY;
			if (
				overflow === 'auto' ||
				overflow === 'scroll' ||
				overflow === 'overlay'
			) {
				break;
			}
			el = el.parentElement;
		}
		this._scroller = el ?? null;
		if (el) {
			this._scrollerTarget = el;
			el.addEventListener('scroll', this._onScroll, { passive: true });
		}
	}

	// the clip wrapper must live in the WRAPPER that contains the scroller
	// (a sibling of the scroller), never inside the scrolled subtree: rows
	// in the scroller would natively scroll on top of the layer transform
	// and double-count the offset (historical bug). Rows as scroller
	// children at data offsets is precisely the model this replaces.
	_attachCanvas() {
		const clip = this._clip;
		const scroller = this._scroller;
		if (!clip || !scroller) {
			return;
		}
		const container = scroller.parentElement;
		if (container && clip.parentElement !== container) {
			container.appendChild(clip);
		}
		// the layer is above the scroller for pointer events, so wheel input
		// must be forwarded (one application; preventDefault stops the
		// native chain, which could otherwise scroll the page instead)
		clip.addEventListener('wheel', this._onWheel, { passive: false });
		this._syncCanvasBox();
	}

	// keep the canvas box in sync with the scroller viewport (client sizes:
	// never covers the scrollbar strip; offsets follow flex re-layouts of
	// the wrapper, e.g. in-flow empty states). Returns true when the box
	// changed (callers may need to re-measure the pool).
	_syncCanvasBox() {
		const scroller = this._scroller;
		const clip = this._clip;
		if (!scroller || !clip) {
			return false;
		}
		const top = scroller.offsetTop;
		const left = scroller.offsetLeft;
		const width = scroller.clientWidth;
		const height = scroller.clientHeight;
		if (
			top === this._boxTop &&
			left === this._boxLeft &&
			width === this._boxWidth &&
			height === this._boxHeight
		) {
			return false;
		}
		this._boxTop = top;
		this._boxLeft = left;
		this._boxWidth = width;
		this._boxHeight = height;
		clip.style.top = `${top}px`;
		clip.style.left = `${left}px`;
		clip.style.width = `${width}px`;
		clip.style.height = `${height}px`;
		return true;
	}

	// the canvas layer sits above the scroller, so native wheel scrolling
	// would chain past it to the page: forward once (preventDefault stops
	// the native chain) and the scroller scrolls exactly one step. The
	// scroller is NOT an ancestor of the canvas, so there is no native path
	// that can double-apply the delta to it. ctrlKey (pinch zoom) is left
	// to the browser.
	_onWheel = (event: WheelEvent) => {
		const scroller = this._scroller;
		if (!scroller || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		// delta units: 0 = pixels, 1 = lines (approximate the browser line
		// height), 2 = pages
		let unit = 1;
		if (event.deltaMode === 1) {
			unit = 40;
		} else if (event.deltaMode === 2) {
			unit = scroller.clientHeight;
		}
		if (event.deltaY !== 0) {
			scroller.scrollTop += event.deltaY * unit;
		}
		if (event.deltaX !== 0) {
			scroller.scrollLeft += event.deltaX * unit;
		}
	};

	// pump synchronously on the first scroll event of a burst so the frame
	// that paints the new position already has rows bound (no white gap),
	// then keep a trailing rAF pump for position corrections.
	_onScroll = () => {
		this._pump();
		if (this._rafId != null) {
			return;
		}
		this._rafId = requestAnimationFrame(() => {
			this._rafId = null;
			this._pump();
		});
	};

	_measureViewport() {
		// pool = enough slots to cover the viewport at the smallest row height
		const viewport = this._scroller?.clientHeight ?? 300;
		const wanted = Math.max(
			MIN_POOL,
			Math.ceil(viewport / MIN_ROW_HEIGHT) + OVERSCAN_ROWS * 2,
		);
		this._ensurePool(wanted);
	}

	_ensurePool(wanted: number) {
		while (this._pool.length < wanted) {
			const el = document.createElement(
				'cosmoz-grouped-list-row',
			) as GroupedListRowHost;
			el.style.position = 'absolute';
			el.style.left = '0';
			el.style.right = '0';
			el.style.top = '0';
			el.style.visibility = 'hidden';
			this._canvas?.appendChild(el);
			this._pool.push({ el, height: DEFAULT_HEIGHT, bound: undefined });
		}
	}

	_onResize(entries: ResizeObserverEntry[]) {
		let changed = false;
		for (const entry of entries) {
			const slot = this._pool.find((p) => p.el === entry.target);
			if (!slot) {
				continue;
			}
			const index = slot.bound;
			if (index == null || index < 0 || index >= this._items.length) {
				continue;
			}
			const height = Math.round(
				entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height,
			);
			if (height > 0 && this._heights[index] !== height) {
				this._heights[index] = height;
				changed = true;
			}
		}
		if (changed) {
			this._invalidate();
			// scroll anchoring: keep the anchor row stable when offsets above
			// the viewport change
			const anchorOffset = this._offset(this._anchorIndex);
			const delta = anchorOffset - this._lastAnchorTop;
			if (delta !== 0 && this._scroller) {
				this._scroller.scrollTop += delta;
				this._lastAnchorTop += delta;
			}
			this._schedule();
		}
	}

	_anchorIndex = 0;
	_lastAnchorTop = 0;
	// cached box of the canvas overlay layer (matches the scroller viewport)
	_boxTop = -1;
	_boxLeft = -1;
	_boxWidth = -1;
	_boxHeight = -1;
	// last scroll offset the canvas transform was written for
	_appliedScroll = NaN;

	_invalidate() {
		this._prefix.length = 0;
		this._prefix.push(0);
		for (let i = 0; i < this._items.length; i++) {
			this._prefix.push(
				(this._prefix[i] ?? 0) + (this._heights[i] ?? DEFAULT_HEIGHT),
			);
		}
		if (this._host) {
			this._host.style.height = `${this._prefix[this._items.length] ?? 0}px`;
		}
	}

	_offset(index: number) {
		return this._prefix[index] ?? 0;
	}

	_firstIndex(offset: number) {
		const n = this._items.length;
		let low = 0;
		let hi = Math.max(0, n - 1);
		let result = 0;
		while (low <= hi) {
			const mid = Math.floor((low + hi) / 2);
			if ((this._prefix[mid] ?? 0) <= offset) {
				result = mid;
				low = mid + 1;
			} else {
				hi = mid - 1;
			}
		}
		return result;
	}

	_schedule() {
		if (this._rafId != null) {
			return;
		}
		this._rafId = requestAnimationFrame(() => {
			this._rafId = null;
			this._pump();
		});
	}

	_pump() {
		this.pumpCount = (this.pumpCount ?? 0) + 1;
		const n = this._items.length;
		if (this._prefix.length !== n + 1) {
			this._invalidate();
		}
		const scrollTop = this._scroller?.scrollTop ?? 0;
		const viewport = this._scroller?.clientHeight ?? 300;

		if (
			this._syncCanvasBox() ||
			this._scroller?.clientHeight !== this._measuredViewport
		) {
			this._measuredViewport = this._scroller?.clientHeight ?? 0;
			this._measureViewport();
		}

		// MOVE: the one per-frame write for the whole row layer. The scroller
		// carries only the spacer (native scroll), the canvas counter-scrolls
		// it; rows inside are never moved per scroll frame.
		if (this._canvas && this._appliedScroll !== scrollTop) {
			this._appliedScroll = scrollTop;
			this._canvas.style.transform = `translate3d(0, ${-scrollTop}px, 0)`;
		}

		// cushion the window ABOVE the scroll position (the rows that enter
		// when scrolling up are pre-bound and pre-measured, no white gap)
		const first = Math.max(
			0,
			this._firstIndex(Math.max(0, scrollTop)) - OVERSCAN_ROWS,
		);
		const anchorTop = this._offset(this._anchorIndex ?? first);
		this._anchorIndex = this._firstIndex(Math.max(0, scrollTop));
		this._lastAnchorTop = anchorTop;

		const total = this._prefix[n] ?? 0;
		if (this._host && this._host.style.height !== `${total}px`) {
			this._host.style.height = `${total}px`;
		}
		if (this._canvas && this._canvas.style.height !== `${total}px`) {
			this._canvas.style.height = `${total}px`;
		}

		// span covers viewport + cushions on both sides; it is derived from
		// the viewport span, never from pool.length
		const span = Math.min(
			n - first,
			Math.ceil(viewport / MIN_ROW_HEIGHT) + OVERSCAN_ROWS * 2,
		);
		const last = first + span - 1;
		this._ensurePool(span);

		this._debugPump();
		// stable assignment: keep every slot bound to its index while the
		// index stays covered; only entering indexes re-bind (DOM reuse)
		const covering = new Set<number>();

		for (let index = first; index <= last; index++) {
			covering.add(index);
		}
		const free: Slot[] = [];
		const stillBound = new Set<number>();
		for (const slot of this._pool) {
			if (slot.bound != null && covering.has(slot.bound)) {
				stillBound.add(slot.bound);
			} else {
				// unbound-but-pooled slots are recyclable too (they are the
				// hidden pool from previous windows)
				free.push(slot);
			}
		}
		const missing: number[] = [];
		for (let index = first; index <= last; index++) {
			if (!stillBound.has(index)) {
				missing.push(index);
			}
		}
		for (const index of missing) {
			const slot = free.pop() ?? this._allocateSlot();
			this._bind(slot, index);
		}
		for (const slot of this._pool) {
			const idle = slot.bound == null || !covering.has(slot.bound);
			if (idle && slot.el.style.visibility !== 'hidden') {
				slot.el.style.visibility = 'hidden';
				slot.bound = undefined;
				slot.el.style.transform = '';
			}
		}
	}

	_measuredViewport = 0;

	_allocateSlot(): Slot {
		const el = document.createElement(
			'cosmoz-grouped-list-row',
		) as GroupedListRowHost;
		el.style.position = 'absolute';
		el.style.left = '0';
		el.style.right = '0';
		el.style.top = '0';
		el.style.visibility = 'hidden';
		this._canvas?.appendChild(el);
		const slot = { el, height: DEFAULT_HEIGHT, bound: undefined };
		this._pool.push(slot);
		if (this._ro) {
			this._ro.observe(el);
		}
		return slot;
	}

	_bind(slot: Slot, index: number) {
		const item = this._items[index];
		if (slot.bound === index && slot.boundItem === item) {
			return;
		}
		slot.bound = index;
		slot.boundItem = item;
		slot.el.index = index;
		slot.el.item = item as Item;
		// stable wrapper: identity per slot so the row element is never
		// marked dirty by re-bind cycles; it reads the live renderer
		slot.wrapper = ((item: Item) =>
			this._renderRow(
				item,
				slot.bound as number,
			)) as GroupedListRowHost['renderFn'];
		slot.el.renderFn = slot.wrapper;
		// transform-fixed at the data offset: written ONLY here (bind time);
		// the canvas layer move per scroll frame happens on the canvas alone
		slot.el.style.transform = `translate3d(0, ${this._offset(index)}px, 0)`;
		slot.el.style.visibility = 'visible';
		if (this._ro && !this._observing.has(slot.el)) {
			this._observing.add(slot.el);
			this._ro.observe(slot.el);
		}
	}

	disconnected() {
		if (this._rafId != null) {
			cancelAnimationFrame(this._rafId);
			this._rafId = null;
		}
		this._ro?.disconnect();
		this._scroller?.removeEventListener('scroll', this._onScroll);
		this._clip?.removeEventListener('wheel', this._onWheel);
	}

	reconnected() {
		this._ro?.disconnect();
		this._ro = new ResizeObserver((entries) => this._onResize(entries));
		for (const slot of this._pool) {
			if (slot.bound != null) {
				this._ro.observe(slot.el);
			}
		}
		this._resolveScroller();
		this._attachCanvas();
		this._schedule();
	}
}

export const pooledRows = directive(PooledRecycler);
