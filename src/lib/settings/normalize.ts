import { props } from '@neovici/cosmoz-utils/object';
import { Column } from '../types';
import { ColumnConfig } from '../layout';

interface NormalizedSetting {
	columns: ColumnConfig[];
}

export interface OmnitableSettings {
	columns: Column[];
	settings: NormalizedSetting;
	name?: string;
}

export const sgProps = ['sortOn', 'descending', 'groupOn', 'groupOnDescending'];

const byName = (name: Column['name']) => (item: { name: Column['name'] }) =>
	item.name === name;

export const normalizeColumns = (
	columns: Column[] = [],
	settings: OmnitableSettings[] = [],
	savedSettings: OmnitableSettings[] = [],
): NormalizedSetting => {
	console.log('normalizeColumns', { columns, settings, savedSettings });
	const _settings = settings.filter((setting) =>
		setting?.name ? columns.some(byName(setting.name)) : false,
	);

	const cols = columns.filter((column) => {
		if (column.name) {
			return (
				!settings.some(byName(column.name)) &&
				!savedSettings.some(byName(column.name))
			);
		}
	});
	const _savedSettings = savedSettings.filter(
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

export const normalizeStore = (
	settings?: OmnitableSettings,
	current?: OmnitableSettings,
): NormalizedSetting[] => {
	return {
		...current,
		...props(sgProps)(settings || {}),
		columns: (settings?.columns ?? []).map(
			props(['name', 'priority', 'width', 'flex', 'disabled']),
		),
	};
};

export default ({
	columns,
	settings,
	savedSettings,
	initial,
}: {
	columns: Column[];
	settings?: OmnitableSettings;
	savedSettings?: OmnitableSettings;
	initial: {
		sortOn?: unknown;
		descending?: unknown;
		groupOn?: unknown;
		groupOnDescending?: unknown;
	};
}) => {
	const init = Object.fromEntries(
		sgProps.flatMap((k) => (initial[k] != null ? [[k, initial[k]]] : [])),
	);

	console.log({ columns, settings, savedSettings, initial });

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
