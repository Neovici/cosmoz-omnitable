import {
	component,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
} from '@pionjs/pion';
import type { NormalizedSettings } from './settings/normalize';
import type { ResetFn } from './settings/use-settings';
import type { NormalizedColumn } from './use-dom-columns';
import { useHashState } from './use-hash-state';

type SetSettings = (
	settings?:
		| NormalizedSettings
		| ((prev: NormalizedSettings) => NormalizedSettings),
) => void;

const parseBool = (bool: string | number | boolean) =>
		[true, 'true', 1, 'yes', 'on'].includes(bool),
	boolParam = (p: string | boolean | undefined) =>
		p === '' || (p == null ? undefined : parseBool(p)),
	useSettingsState = <T>(
		setter: (value: T | ((prev: T) => T)) => void,
		name: string,
		setSettings: SetSettings,
	) =>
		useCallback(
			(value: T) => {
				setter(value);
				setSettings((s) => ({ ...s, [name]: value }));
			},
			[setter, name, setSettings],
		);

export interface SortAndGroupOptions {
	groupOn?: string;
	setGroupOn: (name?: string) => void;
	groupOnDescending?: boolean;
	setGroupOnDescending: (value?: boolean) => void;
	sortOn?: string;
	setSortOn: (name?: string) => void;
	descending?: boolean;
	setDescending: (value?: boolean) => void;
	columns: NormalizedColumn[];
	sortAndGroup: Record<string, unknown>;
	groupOnColumn?: NormalizedColumn;
	sortOnColumn?: NormalizedColumn;
	[key: string]: unknown;
}

interface UseSortAndGroupOptionsParams {
	settings: NormalizedSettings;
	setSettings: SetSettings;
	resetRef: { current?: ResetFn };
	ready?: boolean;
	[key: string]: unknown;
}

export const useSortAndGroupOptions = (
		columns: NormalizedColumn[],
		hashParam: string | null | undefined,
		{
			settings,
			setSettings,
			resetRef,
			ready = true,
		}: UseSortAndGroupOptionsParams,
	) => {
		const [sortOn, setSortOn] = useHashState(settings.sortOn, hashParam, {
				suffix: '-sortOn',
				ready,
			}),
			[descending, setDescending] = useHashState(
				boolParam(settings.descending),
				hashParam,
				{ suffix: '-descending', read: boolParam, ready },
			),
			[groupOn, setGroupOn] = useHashState(settings.groupOn, hashParam, {
				suffix: '-groupOn',
				ready,
			}),
			[groupOnDescending, setGroupOnDescending] = useHashState(
				boolParam(settings.groupOnDescending),
				hashParam,
				{ suffix: '-groupOnDescending', read: boolParam, ready },
			),
			sortOnColumn = useMemo(
				() => columns.find((column) => column.name === sortOn),
				[columns, sortOn],
			),
			groupOnColumn = useMemo(
				() => columns.find((column) => column.name === groupOn),
				[columns, groupOn],
			),
			sortAndGroup_ = {
				groupOn,
				setGroupOn: useSettingsState(setGroupOn, 'groupOn', setSettings),
				groupOnDescending,
				setGroupOnDescending: useSettingsState(
					setGroupOnDescending,
					'groupOnDescending',
					setSettings,
				),

				sortOn,
				setSortOn: useSettingsState(setSortOn, 'sortOn', setSettings),
				descending,
				setDescending: useSettingsState(
					setDescending,
					'descending',
					setSettings,
				),

				columns,
			},
			sortAndGroup = useMemo(() => sortAndGroup_, Object.values(sortAndGroup_)),
			setSG = useCallback((c: Partial<Record<string, unknown>>) => {
				setSortOn(typeof c.sortOn === 'string' ? c.sortOn : undefined);
				setGroupOn(typeof c.groupOn === 'string' ? c.groupOn : undefined);
				setDescending(
					typeof c.descending === 'boolean' ? c.descending : undefined,
				);
				setGroupOnDescending(
					typeof c.groupOnDescending === 'boolean'
						? c.groupOnDescending
						: undefined,
				);
			}, []);

		// eslint-disable-next-line no-void
		useEffect(() => void (resetRef.current = setSG), []);

		return { ...sortAndGroup, sortAndGroup, groupOnColumn, sortOnColumn };
	},
	SortAndGroupContext = createContext<SortAndGroupOptions | undefined>(
		undefined,
	);

customElements.define('sort-and-group-provider', SortAndGroupContext.Provider);
customElements.define(
	'sort-and-group-consumer',
	component(({ render }) => render(useContext(SortAndGroupContext)), {
		useShadowDOM: false,
	}),
);
