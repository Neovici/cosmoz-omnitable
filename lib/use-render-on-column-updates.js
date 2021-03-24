import { useEffect } from 'haunted';
import { useForceRender } from './use-force-render';

export const useRenderOnColumnUpdates = columns => {
	const render = useForceRender();

	useEffect(() => {
		if (columns == null) {
			return;
		}

		// NOTE: this re-renders *all* of the cells when any column prop changes
		// re-rendering costs around 2ms, so we can ignore this for now
		// TODO: revisit this after haunted migration
		columns.forEach(column => column.addEventListener('cosmoz-column-prop-changed', render));
		return () => columns.forEach(column => column.removeEventListener('cosmoz-column-prop-changed', render));
	}, [columns, render]);
};
