import { useEffect, component } from 'haunted';
import { nothing } from 'lit-html';

const
	ResizeNub = host => {
		useEffect(() => {
			let initial = 0;
			const
				move = ev => {
					host.dispatchEvent(new CustomEvent('column-resize', {
						bubbles: true,
						composed: true,
						detail: {
							delta: ev.clientX - initial,
							column: host.column
						}
					}));
					initial = ev.clientX;

				},
				stop = () => {
					document.removeEventListener('pointermove', move);
					document.removeEventListener('pointerup', stop);
				},
				start = ev => {
					initial = ev.clientX;
					document.addEventListener('pointermove', move);
					document.addEventListener('pointerup', stop);
				};
			host.addEventListener('pointerdown', start);

			return () => host.removeEventListener('pointerdown', start);
		}, []);

		return nothing;
	};

customElements.define('cosmoz-omnitable-resize-nub', component(ResizeNub));
