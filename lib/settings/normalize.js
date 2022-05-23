/* eslint-disable import/group-exports */
import { props } from '@neovici/cosmoz-utils/lib/object';

const byName = (name) => (item) => item.name === name;

export const normalizeColumns = (
	columns = [],
	settings = [],
	savedSettings = []
) => {
	const cols = columns.filter(
			(column) =>
				!settings.some(byName(column.name)) &&
				!savedSettings.some(byName(column.name))
		),
		_savedSettings = savedSettings.filter(
			(column) => !settings.some(byName(column.name))
		);

	return [
		...settings,
		..._savedSettings.flatMap((setting) => {
			const column = columns.find((c) => c.name === setting.name);

			if (!column) {
				return [];
			}

			return {
				...setting,
				title: column.title,
				minWidth: parseInt(column.minWidth, 10),
			};
		}),
		...cols.map((column) => {
			const { name, title, priority, minWidth, width, flex } = column;
			return {
				name,
				title,
				priority,
				minWidth: parseInt(minWidth, 10),
				width: parseInt(width, 10),
				flex: parseInt(flex, 10),
			};
		}),
	];
};

export const normalizeStore = (settings) => ({
	...props(['sortOn', 'descending', 'groupOn', 'groupOnDescending'])(settings),
	columns: settings.columns.map(
		props(['name', 'priority', 'width', 'flex', 'disabled'])
	),
});

export default ({ columns, settings, savedSettings }) => ({
	...settings,
	columns: normalizeColumns(columns, settings?.columns, savedSettings?.columns),
});
