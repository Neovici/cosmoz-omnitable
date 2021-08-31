import { useEffect, useRef } from 'haunted';

export const useResizableColumns = ({ host, canvasWidth, layout, config, setUserConfig }) => {
	const onColumnResizeRef = useRef();

	onColumnResizeRef.current = ev => setUserConfig(oldUserConfig => {
		const
			{ detail: { delta, column: { columnIndex }}} = ev,
			newUserConfig = [],
			maxPriority = config.reduce((p, c) => Math.max(p, c.priority), -Infinity);

		for (let i = 0; i < layout.length; i++) {
			newUserConfig[i] = {
				width: oldUserConfig[i]?.width,
				minWidth: config[i].minWidth,
				priority: config[i].priority
			};

			// for visible columns to the left of the resized column
			if (i <= columnIndex && layout[i]) {
				// save the current width
				newUserConfig[i].width = newUserConfig[i].width ?? layout[i];
				// make them fixed width
				newUserConfig[i].flex = 0;
				// keep them visible
				newUserConfig[i].priority = maxPriority;
			}

			// update the width of the resized column
			if (i === columnIndex) {
				const
					maxNewSize = layout.reduce((acc, cur, i) => {
						if (i < columnIndex) {
							return cur ? acc - cur : acc;
						}
						return acc;
					}, canvasWidth);

				newUserConfig[i].width = Math.min(maxNewSize, Math.max(newUserConfig[i].width + delta, config[i].minWidth));
			}
		}

		return newUserConfig;
	});

	useEffect(() => {
		const handler = ev => onColumnResizeRef.current(ev);
		host.addEventListener('column-resize', handler);
		return () => host.removeEventListener('column-resize', handler);
	}, []);

	return config;
};
