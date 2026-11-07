import type { Item } from './types';

interface RowEl extends HTMLElement {
	item: Item;
}

const reduced = matchMedia('(prefers-reduced-motion: reduce)');

const rowsOf = (host: HTMLElement) => [
	...(host.shadowRoot?.querySelectorAll<RowEl>('cosmoz-grouped-list-row') ??
		[]),
];

const token = (host: HTMLElement, name: string, fallback: string) =>
	getComputedStyle(host).getPropertyValue(name).trim() || fallback;

const ms = (v: string) => parseFloat(v) * (v.endsWith('ms') ? 1 : 1000);

/**
 * Fades the rows of `items` out, then calls `commit` and glides the rows that
 * were below them up into the gap (FLIP). Commits at once when no row of
 * `items` is rendered or the user prefers reduced motion.
 */
export const animateRemoval = (
	host: HTMLElement,
	items: Item[],
	commit: () => void
) => {
	const rows = rowsOf(host),
		leaving = rows.filter((r) => items.includes(r.item));

	if (reduced.matches || leaving.length === 0) {
		commit();
		return;
	}

	const before = new Map(
			rows.map((r) => [r.item, r.getBoundingClientRect().top])
		),
		firstTop = Math.min(...leaving.map((r) => r.getBoundingClientRect().top)),
		gap = leaving.reduce((sum, r) => sum + r.getBoundingClientRect().height, 0),
		outs = leaving.map((r) =>
			r.animate(
				[{ opacity: 1 }, { opacity: 0, translate: '16px 0', scale: '0.98' }],
				{
					duration: ms(token(host, '--cz-duration-exit', '120ms')),
					easing: token(host, '--cz-ease-in', 'ease-in'),
					fill: 'forwards',
				}
			)
		);

	Promise.all(outs.map((a) => a.finished.catch(() => undefined))).then(
		async () => {
			commit();
			// The virtualizer re-renders in microtasks, so by the next frame callback
			// the faded rows hold other items. Unhiding them and starting the glide
			// there lands both in the frame that first paints the new rows.
			await new Promise((r) => requestAnimationFrame(r));
			outs.forEach((a) => a.cancel());
			const duration = ms(token(host, '--cz-duration-normal', '250ms')),
				easing = token(host, '--cz-ease-out', 'ease-out');
			for (const row of rowsOf(host)) {
				const top = row.getBoundingClientRect().top,
					was = before.get(row.item),
					from = was ?? (top >= firstTop ? top + gap : undefined);
				if (from == null || Math.abs(from - top) < 1) continue;
				row.animate(
					[{ translate: `0 ${from - top}px` }, { translate: '0 0' }],
					{
						duration,
						easing,
					}
				);
			}
		}
	);
};
