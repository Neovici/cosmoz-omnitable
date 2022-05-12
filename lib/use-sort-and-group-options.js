import { useMemo, createContext, component, useContext } from 'haunted';
import { useHashState } from './use-hash-state';

const parseBool = (bool) => [true, 'true', 1, 'yes', 'on'].includes(bool),
	boolParam = (p) => p === '' || (p == null ? undefined : parseBool(p));

export const useSortAndGroupOptions = (columns, hashParam, initial) => {
		const [sortOn, setSortOn] = useHashState(initial.sortOn, hashParam, {
				suffix: '-sortOn',
			}),
			[descending, setDescending] = useHashState(
				initial.descending,
				hashParam,
				{
					suffix: '-descending',
					read: boolParam,
				}
			),
			[groupOn, setGroupOn] = useHashState(initial.groupOn, hashParam, {
				suffix: '-groupOn',
			}),
			[groupOnDescending, setGroupOnDescending] = useHashState(
				initial.groupOnDescending,
				hashParam,
				{ suffix: '-groupOnDescending', read: boolParam }
			),
			sortOnColumn = useMemo(
				() => columns.find((column) => column.name === sortOn),
				[columns, sortOn]
			),
			groupOnColumn = useMemo(
				() => columns.find((column) => column.name === groupOn),
				[columns, groupOn]
			),
			sortAndGroup_ = {
				groupOn,
				setGroupOn,
				groupOnDescending,
				setGroupOnDescending,

				sortOn,
				setSortOn,
				descending,
				setDescending,

				columns,
			},
			sortAndGroup = useMemo(() => sortAndGroup_, Object.values(sortAndGroup_));

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
	})
);
