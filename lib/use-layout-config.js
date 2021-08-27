import { useMemo, useState } from 'haunted';

export const useLayoutConfig = columns => {
	const
		initialConfig = useMemo(() => !columns
			? []
			: columns.map(column => ({
				column,
				minWidth: parseInt(column.minWidth, 10),
				width: parseInt(column.width, 10),
				flex: parseInt(column.flex, 10),
				priority: column.priority ?? 0,
				index: column.columnIndex
			})), [columns]),

		[userConfig, setUserConfig] = useState([]),

		config = useMemo(() => initialConfig.map(c => ({
			...c,
			minWidth: userConfig[c.index]?.minWidth ?? c.minWidth,
			width: userConfig[c.index]?.width ?? c.width,
			flex: userConfig[c.index]?.flex ?? c.flex,
			priority: userConfig[c.index]?.priority ?? c.priority
		})), [initialConfig, userConfig]);

	return { config, setUserConfig };
};
