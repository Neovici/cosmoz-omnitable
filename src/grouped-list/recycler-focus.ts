import type { RecyclerRowEl, RecyclerSlot } from './recycler-geometry';

/** Moves the focus out of slots whose content is about to be replaced: the
 * focused element inside a row is destroyed by a rebind, and without a hop
 * the focus would fall to `<body>`. The restore target is a still-bound row
 * closest to the binding that held it. */
const FOCUSABLE = 'input, button, select, a, [tabindex]';

const focusable = (row: RecyclerRowEl): HTMLElement | null =>
	row.querySelector<HTMLElement>(FOCUSABLE);

export class FocusGuard {
	private pending?: { el: Element; index: number };

	/** The focused content inside a slot is about to be replaced. */
	remember(index: number, el: Element) {
		if (this.pending?.el === el) {
			return;
		}
		this.pending = { el, index };
	}

	/** Called once per frame: restore once the old content really went away
	 * and the focus has not landed anywhere else. */
	restore(parts: RecyclerSlot[]) {
		const pending = this.pending;
		if (pending == null || pending.el.isConnected) {
			return;
		}
		const active = document.activeElement;
		if (active != null && active !== document.body) {
			this.pending = undefined;
			return; // focus moved on its own
		}
		const origin = pending.index,
			candidates = parts
				.filter((slot) => slot.bound >= 0)
				.sort(
					(a, b) => Math.abs(a.bound - origin) - Math.abs(b.bound - origin),
				);
		for (const slot of candidates) {
			const target = focusable(slot.el);
			if (target != null) {
				target.focus();
				break;
			}
		}
		this.pending = undefined;
	}
}
