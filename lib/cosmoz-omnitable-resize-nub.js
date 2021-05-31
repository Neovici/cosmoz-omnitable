import { useEffect, component } from 'haunted';
import { nothing } from 'lit-html';

const
	ResizeNub = host => {
		useEffect(() => {
			let initial = 0;
			const
				move = ev => {
					if (!host.column.resizeWidth) {
						host.column.resizeWidth = parseInt(host.column.width, 10);
					}
					host.column.resizeWidth += ev.clientX - initial;
					if (host.column.priority !== host.maxPriority) {
						host.column.priority = host.maxPriority + 1;
					}
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
