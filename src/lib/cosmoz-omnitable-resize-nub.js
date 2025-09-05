import { useEffect, component } from '@pionjs/pion';
import { nothing } from 'lit-html';

const ResizeNub = (host) => {
	const { column } = host;

	useEffect(() => {
		let initial = 0;
		let initialWidth = 0;
		const move = (ev) => {
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
			start = (ev) => {
				initial = ev.pageX;
				initialWidth =
					host.previousElementSibling.getBoundingClientRect().width;
				document.addEventListener('pointermove', move);
				document.addEventListener('pointerup', stop);
			};
		host.addEventListener('pointerdown', start);

		return () => host.removeEventListener('pointerdown', start);
	}, [column]);

	return nothing;
};

customElements.define('cosmoz-omnitable-resize-nub', component(ResizeNub));
