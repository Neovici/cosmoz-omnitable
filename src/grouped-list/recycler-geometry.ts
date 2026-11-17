/** Geometry, sizing and binding-plan helpers of the pooled recycler. */

/** Rows of rendered context held each side of the viewport. */
export const OVERSCAN = 12;
/** Row height estimate before anything was measured. */
export const FALLBACK_ROW = 40;
/** Slot binding sentinel: the slot carries no row. */
export const FREE = -1;

export const SLOT_STYLES = {
	position: 'absolute',
	display: 'block',
	left: '0px',
	right: '0px',
	visibility: 'hidden',
};

export const SPACER_STYLES = {
	position: 'relative',
	display: 'block',
	overflowAnchor: 'none',
};

export interface RecyclerRowEl extends HTMLElement {
	item?: unknown;
	index?: number;
	renderFn?: (item: never, index: number) => unknown;
}

export interface RecyclerSlot {
	el: RecyclerRowEl;
	bound: number; // data index of the current binding, FREE when idle
}

export interface VisibleRange {
	first: number;
	last: number;
}

/** Whether an element is a vertical scrolling container. The page itself is
 * never the list's scroller: without a real scrolling ancestor the list
 * renders inline. */
export const isScroller = (el: HTMLElement): boolean => {
	if (el === document.body || el === document.documentElement) {
		return false;
	}
	const overflowY = getComputedStyle(el).overflowY;
	return (
		overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'overlay'
	);
};

/** Largest index in an ascending array whose value is `<= px`. */
export const atOrBelow = (values: number[], px: number): number => {
	let low = 0,
		high = values.length - 1,
		found = -1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (values[mid] <= px) {
			found = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return found;
};

/** Largest index in an ascending array whose value is `< px`. */
export const below = (values: number[], px: number): number => {
	let low = 0,
		high = values.length - 1,
		found = -1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (values[mid] < px) {
			found = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return found;
};

/** The indexes the pool binds: the covered window, or the whole dataset
 * when it fits the pool; spare capacity binds forward from the window,
 * contiguous with it, so every bound row is measured, never guessed. */
export const wantedIndexes = (
	range: VisibleRange,
	count: number,
	pool: number,
): number[] => {
	const { first, last } = range,
		wanted = [];
	for (let i = first; i <= last && wanted.length < pool; i++) {
		wanted.push(i);
	}
	for (let i = last + 1; wanted.length < pool && i < count; i++) {
		wanted.push(i);
	}
	return wanted;
};

/** Split the pool into slots bound inside the window (by index) and the
 * ones free to take another binding. */
const classifySlots = (
	range: VisibleRange,
	parts: RecyclerSlot[],
): [Map<number, RecyclerSlot>, RecyclerSlot[]] => {
	const { first, last } = range,
		matches = new Map<number, RecyclerSlot>(),
		frees = [];
	for (const slot of parts) {
		if (slot.bound >= first && slot.bound <= last) {
			matches.set(slot.bound, slot);
		} else {
			frees.push(slot);
		}
	}
	return [matches, frees];
};

/** The slot to bind `index` to: one already showing it, otherwise the next
 * free slot. */
const claim = (
	matches: Map<number, RecyclerSlot>,
	frees: RecyclerSlot[],
	index: number,
): RecyclerSlot | undefined => {
	const match = matches.get(index);
	if (match != null) {
		matches.delete(index);
		return match;
	}
	return frees.shift();
};
/** Choose which slot binds which index: a slot already bound inside the
 * window keeps its index and its content, the slots freed up take the
 * remaining wanted indexes in order, and the leftovers go idle. */
export const bindPlan = (
	range: VisibleRange,
	wanted: number[],
	parts: RecyclerSlot[],
): Map<RecyclerSlot, number> => {
	const [matches, frees] = classifySlots(range, parts),
		plan = new Map<RecyclerSlot, number>(),
		rest = frees.slice();
	for (const index of wanted) {
		const slot = claim(matches, rest, index);
		if (slot != null) {
			plan.set(slot, index);
		}
	}
	return plan;
};
