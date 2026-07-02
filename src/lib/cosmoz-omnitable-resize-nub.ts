import { component, useEffect } from '@pionjs/pion';
import { nothing } from 'lit-html';
import type { Column } from './types';

type ResizeNubHost = HTMLElement & { column: Column };

const ResizeNub = (host: ResizeNubHost) => {
	const { column } = host;

	useEffect(() => {
		let initial = 0;
		let initialWidth = 0;
		const move = (ev: PointerEvent) => {
				host.dispatchEvent(
					new CustomEvent('column-resize', {
						bubbles: true,
						composed: true,
						detail: {
							newWidth: Math.ceil(initialWidth + ev.pageX - initial),
							column,
						},
					}),
				);
			},
			stop = () => {
				document.removeEventListener('pointermove', move);
				document.removeEventListener('pointerup', stop);
			},
			start = (ev: PointerEvent) => {
				initial = ev.pageX;
				initialWidth = (
					host.previousElementSibling as HTMLElement
				).getBoundingClientRect().width;
				document.addEventListener('pointermove', move);
				document.addEventListener('pointerup', stop);
			};
		host.addEventListener('pointerdown', start);

		return () => host.removeEventListener('pointerdown', start);
	}, [column]);

	return nothing;
};

customElements.define('cosmoz-omnitable-resize-nub', component(ResizeNub));
