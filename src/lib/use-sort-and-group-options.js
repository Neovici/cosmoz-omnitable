import {
	component,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
} from '@pionjs/pion';
import { useHashState } from './use-hash-state';

const parseBool = (bool) => [true, 'true', 1, 'yes', 'on'].includes(bool),
	boolParam = (p) => p === '' || (p == null ? undefined : parseBool(p)),
	useSettingsState = (setter, name, setSettings) =>
		useCallback(
			(value) => {
				setter(value);
				setSettings((s) => ({ ...s, [name]: value }));
			},
			[setter, name, setSettings],
		);

export const useSortAndGroupOptions = (
		columns,
		hashParam,
		{ settings, setSettings, resetRef, ready = true },
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
			setSG = useCallback((c) => {
				setSortOn(c.sortOn);
				setGroupOn(c.groupOn);
				setDescending(c.descending);
				setGroupOnDescending(c.groupOnDescending);
			}, []);

		// eslint-disable-next-line no-void
		useEffect(() => void (resetRef.current = setSG), []);

		return { ...sortAndGroup, sortAndGroup, groupOnColumn, sortOnColumn };
	},
	SortAndGroupContext = createContext();

customElements.define('sort-and-group-provider', SortAndGroupContext.Provider);
customElements.define(
	'sort-and-group-consumer',
	component(({ render }) => render(useContext(SortAndGroupContext)), {
		useShadowDOM: false,
	}),
);
