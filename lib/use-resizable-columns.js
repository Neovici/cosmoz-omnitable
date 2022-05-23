import { useEffect, useRef } from 'haunted';

export const useResizableColumns = ({
	host,
	canvasWidth,
	layout,
	setSettings,
}) => {
	const onColumnResizeRef = useRef();

	onColumnResizeRef.current = (ev) =>
		setSettings((settings) => {
			const config = settings.columns,
				{
					detail: { newWidth, column },
				} = ev,
				columnIndex = config.findIndex((c) => c.name === column.name),
				newConfig = [],
				maxPriority = config.reduce(
					(p, c) => Math.max(p, c.priority),
					-Infinity
				);

			for (let i = 0; i < layout.length; i++) {
				newConfig[i] = { ...config[i] };

				// for visible columns to the left of the resized column
				if (i < columnIndex && layout[i]) {
					// save the current width
					newConfig[i].width = layout[i];
					// make them fixed width
					newConfig[i].flex = 0;
					// keep them visible
					newConfig[i].priority = maxPriority;
				}

				// update the width of the resized column
				if (i === columnIndex) {
					const maxNewSize = layout.reduce((acc, cur, i) => {
						if (i < columnIndex) {
							return cur ? acc - cur : acc;
						}
						return acc;
					}, canvasWidth);

					newConfig[i].width = Math.min(
						maxNewSize,
						Math.max(newWidth, config[i].minWidth)
					);
					newConfig[i].flex = 0;
					newConfig[i].priority = maxPriority;
				}
			}

			return { ...settings, columns: newConfig };
		});

	useEffect(() => {
		const handler = (ev) => onColumnResizeRef.current(ev);
		host.addEventListener('column-resize', handler);
		return () => host.removeEventListener('column-resize', handler);
	}, []);
};
