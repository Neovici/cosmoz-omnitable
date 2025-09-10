import { props } from '@neovici/cosmoz-utils/object';

export const sgProps = ['sortOn', 'descending', 'groupOn', 'groupOnDescending'];

const byName = (name) => (item) => item.name === name;

export const normalizeColumns = (
	columns = [],
	settings = [],
	savedSettings = [],
) => {
	const _settings = settings.filter((setting) =>
			columns.some(byName(setting.name)),
		),
		cols = columns.filter(
			(column) =>
				!settings.some(byName(column.name)) &&
				!savedSettings.some(byName(column.name)),
		),
		_savedSettings = savedSettings.filter(
			(column) => !settings.some(byName(column.name)),
		);

	return [
		..._settings,
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

export const normalizeStore = (settings, current) => ({
	...current,
	...props(sgProps)(settings),
	columns: settings.columns?.map(
		props(['name', 'priority', 'width', 'flex', 'disabled']),
	),
});

export default ({ columns, settings, savedSettings, initial }) => {
	const init = Object.fromEntries(
		sgProps.flatMap((k) => (initial[k] != null ? [[k, initial[k]]] : [])),
	);

	return {
		...init,
		...props(sgProps)(savedSettings),
		...settings,
		columns: normalizeColumns(
			columns,
			settings?.columns,
			savedSettings?.columns,
		),
	};
};
