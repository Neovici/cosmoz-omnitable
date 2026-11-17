import { html, noChange, type ElementPart } from 'lit-html';
import { directive, Directive, type PartInfo } from 'lit-html/directive.js';

import './cosmoz-grouped-list-row';
import { Recycler } from './recycler';

/** The render payload the recycler draws from. The row renderer's item
 * parameter is open at the bottom: the engine never calls it, it only moves
 * renderers into slot elements and compares them by identity, so any host's
 * renderer type attaches without friction. */
export interface RecyclerPayload {
	renderRow: (item: never, index: number) => unknown;
	flatData: unknown[];
}

class RecyclerHost extends Directive {
	private engine?: Recycler;

	constructor(partInfo: PartInfo) {
		super(partInfo);
	}

	override render(payload: RecyclerPayload) {
		// update() handles attachments; render is typed so the generated
		// directive function receives the payload
		Boolean(payload);
		return noChange;
	}

	override update(part: ElementPart, props: [RecyclerPayload]) {
		const payload = props[0];
		if (!(part.element instanceof HTMLElement)) {
			return noChange; // unreachable: the part is attached to the spacer
		}
		// the engine outlives renders: lit re-commits the same template part
		// on every host render, and the pool must survive them untouched
		this.engine ??= new Recycler(part.element, payload);
		this.engine.setPayload(payload);
		return noChange;
	}
}

const connectRecycler = directive(RecyclerHost);

/** The lit-html child content of `cosmoz-grouped-list`: the scrolled spacer
 * hosting the pooled rows. */
export const renderRecycler = (payload: RecyclerPayload) =>
	html`<div class="glist-recycler-viewport" ${connectRecycler(payload)}></div>`;
