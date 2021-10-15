const byName = name => item => item.name === name;

export const
	columnSymbol = Symbol('column'),
	normalizeSettings = (columns = [], settings = [], savedSettings = []) => {
		const
			cols = columns.filter(column => !settings.some(byName(column.name)) && !savedSettings.some(byName(column.name))),
			_savedSettings = savedSettings.filter(column => !settings.some(byName(column.name)));

		return [
			...settings,
			..._savedSettings
				.flatMap(setting => {
					const column = columns.find(c => c.name === setting.name);

					if (!column) {
						return [];
					}

					return {
						...setting,
						title: column.title,
						minWidth: parseInt(column.minWidth, 10),
						[columnSymbol]: column
					};
				}),
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
