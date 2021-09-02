import { useEffect, component } from 'haunted';
import { nothing } from 'lit-html';

const
	ResizeNub = host => {
		useEffect(() => {
			let initial = 0,
				initialWidth = 0;
			const
				move = ev => {
					host.dispatchEvent(new CustomEvent('column-resize', {
						bubbles: true,
						composed: true,
						detail: {
							newWidth: Math.ceil(initialWidth + ev.pageX - initial),
							column: host.column
						}
					}));
				},
				stop = () => {
					document.removeEventListener('pointermove', move);
					document.removeEventListener('pointerup', stop);
				},
				start = ev => {
					initial = ev.pageX;
					initialWidth = host.previousElementSibling.getBoundingClientRect().width;
					document.addEventListener('pointermove', move);
					document.addEventListener('pointerup', stop);
				};
			host.addEventListener('pointerdown', start);

			return () => host.removeEventListener('pointerdown', start);
		}, [host.nextElementSibling]);

		return nothing;
	};

customElements.define('cosmoz-omnitable-resize-nub', component(ResizeNub));
