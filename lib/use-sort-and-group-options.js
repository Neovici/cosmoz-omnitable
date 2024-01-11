import {
	useMemo,
	createContext,
	component,
	useContext,
	useCallback,
	useEffect,
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

// eslint-disable-next-line max-lines-per-function
export const useSortAndGroupOptions = (
		columns,
		hashParam,
		settings,
		setSettings,
		resetRef,
	) => {
		const [sortOn, setSortOn] = useHashState(settings.sortOn, hashParam, {
				suffix: '-sortOn',
			}),
			[descending, setDescending] = useHashState(
				settings.descending,
				hashParam,
				{
					suffix: '-descending',
					read: boolParam,
				},
			),
			[groupOn, setGroupOn] = useHashState(settings.groupOn, hashParam, {
				suffix: '-groupOn',
			}),
			[groupOnDescending, setGroupOnDescending] = useHashState(
				settings.groupOnDescending,
				hashParam,
				{ suffix: '-groupOnDescending', read: boolParam },
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

		return {
			...sortAndGroup,
			sortAndGroup,
			groupOnColumn,
			sortOnColumn,
		};
	},
	SortAndGroupContext = createContext();

customElements.define('sort-and-group-provider', SortAndGroupContext.Provider);
customElements.define(
	'sort-and-group-consumer',
	component(({ render }) => render(useContext(SortAndGroupContext)), {
		useShadowDOM: false,
	}),
);
