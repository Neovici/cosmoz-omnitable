import { props } from '@neovici/cosmoz-utils/object';
import { ColumnConfig } from '../layout';
import { Column } from '../types';

export interface NormalizedSettings {
	columns: Omit<ColumnConfig, 'index'>[];
}

export const sgProps = [
	'sortOn',
	'descending',
	'groupOn',
	'groupOnDescending',
] as const;

export type SgPropsKey = (typeof sgProps)[number];

interface NormalizeProps {
	columns: Column[];
	settings?: Partial<NormalizedSettings>;
	savedSettings?: Partial<NormalizedSettings>;
	initial?: Partial<Record<SgPropsKey, unknown>>;
}

const byName = (name: string) => (item: unknown) =>
	typeof item === 'object' &&
	item !== null &&
	'name' in item &&
	item.name === name;

export const normalizeColumns = (
	columns: NormalizeProps['columns'] = [],
	settings: NormalizedSettings['columns'] = [],
	savedSettings: NormalizedSettings['columns'] = [],
): NormalizedSettings['columns'] => {
	const _settings = settings.filter((setting) =>
			columns.some(byName(setting.name)),
		),
		cols = columns.filter(
			(column) =>
				column.name != null &&
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
				title: column.title ?? setting.title ?? '',
				minWidth: parseInt(column.minWidth ?? '0', 10),
			};
		}),
		...cols.map((column) => {
			const { name, title, priority, minWidth, width, flex } = column;
			return {
				name: name ?? '',
				title: title ?? '',
				priority: priority ?? 0,
				minWidth: parseInt(minWidth ?? '0', 10),
				width: parseInt(width ?? '0', 10),
				flex: parseInt(flex ?? '0', 10),
			};
		}),
	];
};

export const normalizeStore = (
	settings: NormalizedSettings,
	current: NormalizedSettings,
) => ({
	...current,
	...props(Array.from(sgProps))(settings),
	columns: settings.columns?.map(
		props(['name', 'priority', 'width', 'flex', 'disabled']),
	),
});

export default ({
	columns,
	settings,
	savedSettings,
	initial,
}: NormalizeProps): NormalizedSettings => {
	const init = Object.fromEntries(
		sgProps.flatMap((k) => (initial?.[k] != null ? [[k, initial[k]]] : [])),
	);

	return {
		...init,
		...(savedSettings ? props(Array.from(sgProps))(savedSettings) : {}),
		...settings,
		columns: normalizeColumns(
			columns,
			settings?.columns,
			savedSettings?.columns,
		),
	};
};
