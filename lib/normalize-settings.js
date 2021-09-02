export const
	columnSymbol = Symbol('column'),
	normalizeSettings = (columns = [], settings = []) => {
		const cols = columns.slice();
		for (const setting of settings) {
			const idx = cols.findIndex(c => c.name === setting.name);
			if (idx < 0) {
				continue;
			}
			cols.splice(idx, 1);
		}
		return [
			...settings,
			...cols.map(column => {
				const { name, title, priority, minWidth, width, flex } = column;
				return {
					name,
					title,
					priority,
					minWidth: parseInt(minWidth, 10),
					width: parseInt(width, 10),
					flex: parseInt(flex, 10),
					[columnSymbol]: column
				};
			})
		];
	};
