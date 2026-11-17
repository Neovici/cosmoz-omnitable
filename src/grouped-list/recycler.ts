import './cosmoz-grouped-list-row';
import { FocusGuard } from './recycler-focus';
import {
	atOrBelow,
	below,
	bindPlan,
	FALLBACK_ROW,
	FREE,
	isScroller,
	OVERSCAN,
	SLOT_STYLES,
	SPACER_STYLES,
	wantedIndexes,
	type RecyclerRowEl,
	type RecyclerSlot,
	type VisibleRange,
} from './recycler-geometry';

/**
 * Pooled list recycler: the virtualizing renderer backing
 * `cosmoz-grouped-list`. It keeps a persistent pool of
 * `cosmoz-grouped-list-row` slot elements inside a spacer (`.glist-recycler-viewport`)
 * sized to the estimated content height, and rebinds the pool to a sliding
 * window of the flat data driven by the consumer's scrolling element (the
 * nearest ancestor with a vertical scrollbar; with none, every row renders
 * inline).
 *
 * `test/grouped-list-positions.test.js` is the executable specification of
 * the observable behavior of this module.
 */

/** The render payload the recycler draws from. The row renderer's item
 * parameter is open at the bottom: the engine never calls it, it only moves
 * renderers into slot elements and compares them by identity, so any host's
 * renderer type attaches without friction. */
export interface RecyclerPayload {
	renderRow: (item: never, index: number) => unknown;
	flatData: unknown[];
}

/** The pooled recycler engine. One instance per rendered spacer. */
export class Recycler {
	// the spacer element the pooled slots are placed into
	root: HTMLElement;
	// render payload currently attached
	payload: RecyclerPayload;
	// the pool of persistent row slots, in DOM order
	parts: RecyclerSlot[] = [];
	// the scrolling ancestor, or undefined for inline rendering
	scroller?: HTMLElement;
	// flat data the renderer draws from
	items: unknown[] = [];
	// measured row heights, held by item: the recycler's knowledge about a
	// row's rendered height outlives re-flattening (folding, sorting) since
	// the same item objects keep the same content
	heights = new Map<unknown, number>();
	// heights collected during the running pump pass
	fresh = new Set<unknown>();
	// sum, sample count, average and minimum of the measured heights
	sum = 0;
	samples = 0;
	avg = FALLBACK_ROW;
	floor = FALLBACK_ROW;
	// prefix sums of [measured height ?? avg]; offsets[n] totals the list
	offsets: number[] = [0];
	dirty = false;
	total = 0;
	// last range announced through visibilityChanged; NaN ensures the very
	// first range is announced too
	visible = { first: Number.NaN, last: Number.NaN };
	// spacer height currently on the element, to keep idle frames write-free
	writtenHeight = 0;
	// the focus hop for slots that get their content replaced
	guard = new FocusGuard();
	// a microtask reconciliation is queued
	microQueued = false;

	constructor(root: HTMLElement, payload: RecyclerPayload) {
		this.root = root;
		this.payload = payload;
		Object.assign(root.style, SPACER_STYLES);
		this.loop();
	}

	setPayload(payload: RecyclerPayload) {
		this.payload = payload;
		// the payload lands mid-commit, after the rAF pump for this frame:
		// reconcile again right after the render completes, ahead of paint
		this.pumpAgain();
	}

	/** Run one reconciliation at the end of the current task. */
	pumpAgain() {
		if (this.microQueued) {
			return;
		}
		this.microQueued = true;
		queueMicrotask(() => {
			this.microQueued = false;
			this.pump();
		});
	}

	loop() {
		requestAnimationFrame(() => {
			try {
				this.pump();
			} finally {
				this.loop();
			}
		});
	}

	/** One animation frame of the recycler: pool reconciliation + layout. */
	pump() {
		if (!this.root.isConnected) {
			return;
		}
		if (this.payload.flatData !== this.items) {
			this.reset(this.payload.flatData);
		}
		const count = this.items.length;
		if (this.scroller == null || !this.scroller.isConnected) {
			this.scroller = this.findScroller();
		}
		const viewport = this.scroller?.clientHeight ?? Number.POSITIVE_INFINITY,
			scrollTop = this.scroller?.scrollTop ?? 0,
			pool = Math.min(
				count,
				Math.ceil(viewport / this.floor) + 2 * OVERSCAN + 1,
			);

		this.ensurePool(pool);
		this.reflow(scrollTop, viewport, count);
		this.applyHeight();
		this.dispatchVisible(scrollTop, viewport, count);
	}

	/** One full reconcile: window binding, placement, measurement and scroll
	 * compensation, iterated until the layout settles. */
	reflow(scrollTop: number, viewport: number, count: number) {
		// the content anchored at the scroll position is kept visually
		// stable across re-flows: when the offset table moves (estimates
		// refined), the scroller is nudged by the anchor row's shift
		this.ensureOffsets();
		const anchor = Math.min(count - 1, atOrBelow(this.offsets, scrollTop)),
			anchorOffset = this.offsets[anchor] ?? 0;

		this.fresh.clear();
		for (let pass = 0; pass < 4; pass++) {
			this.ensureOffsets();
			if (!this.reconcile(scrollTop, viewport, count)) {
				break;
			}
			// new measurements move the offsets: reconcile once more
			this.invalidate();
		}
		// the pool settles on measurements of the covered window only; heights
		// picked up by window states that did not survive the pass (scroll
		// clamps, estimator warm-up) are speculative and drop off again
		this.prune();

		this.ensureOffsets();
		if (count > 0) {
			this.compensate(anchor, anchorOffset);
		}
	}

	/** One pass: bind the window, place and measure its rows. */
	reconcile(scrollTop: number, viewport: number, count: number) {
		let touched = this.bind(this.rangeFor(scrollTop, viewport, count), count);
		touched = this.place() || touched;
		touched = this.measure() || touched;
		this.guard.restore(this.parts);
		return touched;
	}

	/** Keep the content anchored at the scroll position visually stable: the
	 * scroller is nudged by the offset shift of the anchor row. */
	compensate(anchor: number, anchorOffset: number) {
		if (this.scroller == null) {
			return;
		}
		const moved = this.offsets[anchor] - anchorOffset;
		if (moved !== 0) {
			this.scroller.scrollTop = this.scroller.scrollTop + moved;
		}
	}

	/** Adopt a new flat data array: measured heights are keyed by item and
	 * survive re-flattening, so the swap only moves the offset table. */
	reset(data: unknown) {
		this.items = Array.isArray(data) ? data : [];
		this.invalidate();
	}

	/** Keep heights only for rows that stayed bound: measurements of
	 * transiently covered rows are not knowledge of the settled window. */
	prune() {
		for (const item of this.fresh) {
			if (
				this.parts.some(
					(slot) => slot.bound >= 0 && this.items[slot.bound] === item,
				)
			) {
				continue;
			}
			const height = this.heights.get(item);
			if (height == null) {
				continue;
			}
			this.heights.delete(item);
			this.sum -= height;
			this.samples -= 1;
			this.avg = this.samples > 0 ? this.sum / this.samples : FALLBACK_ROW;
			this.invalidate();
		}
	}

	findScroller(): HTMLElement | undefined {
		let el = this.root.parentElement;
		while (el != null) {
			if (isScroller(el)) {
				return el;
			}
			el = el.parentElement;
		}
		return undefined;
	}

	/** Hold exactly `pool` persistent slot elements. */
	ensurePool(pool: number) {
		while (this.parts.length < pool) {
			const el: RecyclerRowEl = document.createElement(
				'cosmoz-grouped-list-row',
			);
			Object.assign(el.style, SLOT_STYLES);
			this.root.appendChild(el);
			this.parts.push({ el, bound: FREE });
		}
		while (this.parts.length > pool) {
			const slot = this.parts.pop()!;
			const active = document.activeElement;
			if (active != null && slot.el.contains(active)) {
				this.guard.remember(Math.max(0, slot.bound), active);
			}
			slot.el.remove();
		}
	}

	/** Estimated heights along the data: measured where known, otherwise the
	 * running measured average. `offsets[n]` is the estimated total height. */
	ensureOffsets() {
		if (!this.dirty) {
			return;
		}
		const heights = this.heights,
			offsets = this.offsets,
			count = this.items.length;
		offsets.length = count + 1;
		let acc = 0;
		offsets[0] = acc;
		for (let i = 0; i < count; i++) {
			acc += heights.get(this.items[i]) ?? this.avg;
			offsets[i + 1] = acc;
		}
		this.total = acc;
		this.dirty = false;
	}

	invalidate() {
		this.dirty = true;
	}

	/** The covered window: every row intersecting the viewport plus
	 * OVERSCAN rows of context each side, in data-index terms. */
	rangeFor(scrollTop: number, viewport: number, count: number): VisibleRange {
		if (count === 0) {
			return { first: 1, last: 0 };
		}
		const offsets = this.offsets,
			view = atOrBelow(offsets, scrollTop),
			edge = Math.min(count - 1, below(offsets, scrollTop + viewport));
		return {
			first: Math.max(0, view - OVERSCAN),
			last: Math.min(count - 1, edge + OVERSCAN),
		};
	}

	/** Map the wanted indexes onto pool slots; slots outside the range go
	 * idle. Bindings are reused by identity: a slot already bound to an index
	 * keeps it, and only the slots that must rebind have their content swap. */
	bind(range: VisibleRange, count: number) {
		const parts = this.parts,
			wanted = wantedIndexes(range, count, parts.length),
			plan = bindPlan(range, wanted, parts);
		let touched = false;
		for (const slot of parts) {
			const index = plan.get(slot);
			touched =
				(index === undefined
					? this.release(slot)
					: this.bindSlot(slot, index)) || touched;
		}
		return touched;
	}

	bindSlot(slot: RecyclerSlot, index: number) {
		const el = slot.el,
			item = this.items[index],
			renderer = this.payload.renderRow;
		if (
			slot.bound === index &&
			el.item === item &&
			el.renderFn === renderer &&
			el.style.visibility === ''
		) {
			return false; // identical binding already committed
		}
		const active = document.activeElement;
		if (active != null && el.contains(active)) {
			this.guard.remember(slot.bound >= 0 ? slot.bound : index, active);
		}
		el.item = item;
		el.index = index;
		el.renderFn = renderer;
		slot.bound = index;
		if (el.style.visibility !== '') {
			el.style.visibility = '';
		}
		return true;
	}

	/** Take a slot off duty: contentless and hidden, so it counts neither as
	 * mounted nor as part of the engine's measured window. */
	release(slot: RecyclerSlot) {
		if (slot.bound === FREE && slot.el.item == null) {
			return false;
		}
		const el = slot.el,
			active = document.activeElement;
		if (slot.bound >= 0 && active != null && el.contains(active)) {
			this.guard.remember(slot.bound, active);
		}
		el.item = undefined;
		el.index = undefined;
		el.renderFn = undefined;
		slot.bound = FREE;
		if (el.style.visibility !== 'hidden') {
			el.style.visibility = 'hidden';
		}
		return true;
	}

	/** Absolutely position the bound slots at their data offsets. */
	place() {
		let touched = false;
		for (const slot of this.parts) {
			if (slot.bound < 0) {
				continue;
			}
			const top = `${this.offsets[slot.bound]}px`;
			if (slot.el.style.top !== top) {
				slot.el.style.top = top;
				touched = true;
			}
		}
		return touched;
	}

	/** Measure the rendered heights of the bound rows into the height map. */
	measure() {
		let touched = false;
		for (const slot of this.parts) {
			if (slot.bound < 0) {
				continue;
			}
			const height = slot.el.getBoundingClientRect().height;
			if (!(height > 0)) {
				continue;
			}
			const item = this.items[slot.bound];
			if (this.heights.get(item) !== height) {
				this.track(item, height);
				touched = true;
			}
		}
		return touched;
	}

	track(item: unknown, height: number) {
		const current = this.heights.get(item);
		if (current == null) {
			this.samples += 1;
			this.sum += height;
			if (height < this.floor) {
				this.floor = height;
			}
		} else {
			this.sum += height - current;
		}
		this.heights.set(item, height);
		this.fresh.add(item);
		this.avg = this.samples > 0 ? this.sum / this.samples : FALLBACK_ROW;
		this.invalidate();
	}

	/** Size the spacer to the estimated content height: the measured heights
	 * plus the running average for every row not yet visited. */
	applyHeight() {
		if (this.total === this.writtenHeight) {
			return;
		}
		this.writtenHeight = this.total;
		this.root.style.height = `${this.total}px`;
	}

	/** Report the visible data-index window on the host element, once per
	 * change. The payload is data-index based, not DOM based. */
	dispatchVisible(scrollTop: number, viewport: number, count: number) {
		if (count === 0) {
			this.announce(FREE, FREE);
			return;
		}
		const offsets = this.offsets,
			first = Math.min(count - 1, atOrBelow(offsets, scrollTop)),
			last = Math.min(count - 1, below(offsets, scrollTop + viewport));
		this.announce(first, last);
	}

	announce(first: number, last: number) {
		const visible = this.visible;
		if (visible.first === first && visible.last === last) {
			return;
		}
		visible.first = first;
		visible.last = last;
		const host = this.root.closest<HTMLElement>('cosmoz-grouped-list');
		if (host == null) {
			return;
		}
		host.dispatchEvent(
			new CustomEvent('visibilityChanged', {
				bubbles: true,
				detail: { first, last },
			}),
		);
	}
}
