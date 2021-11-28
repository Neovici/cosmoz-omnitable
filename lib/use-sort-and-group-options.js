import { useMemo } from 'haunted';
import { useHashState } from './use-hash-state';

const
	parseBool = bool => [true, 'true', 1, 'yes', 'on'].includes(bool),
	boolParam = p => p === '' || parseBool(p);

export const useSortAndGroupOptions = (columns, hashParam, initialSortOn, initialGroupOn) => {
	const
		[sortOn, setSortOn] = useHashState(initialSortOn, hashParam, { suffix: '-sortOn' }),
		[descending, setDescending] = useHashState(false, hashParam, { suffix: '-descending', read: boolParam }),
		[groupOn, setGroupOn] = useHashState(initialGroupOn, hashParam, { suffix: '-groupOn' }),
		[groupOnDescending, setGroupOnDescending] = useHashState(false, hashParam, { suffix: '-groupOnDescending', read: boolParam }),
		sortOnColumn = useMemo(() => columns.find(column => column.name === sortOn), [columns, sortOn]),
		groupOnColumn = useMemo(() => columns.find(column => column.name === groupOn), [columns, groupOn]);

	return {
		groupOn,
		setGroupOn,
		groupOnColumn,
		groupOnDescending,
		setGroupOnDescending,

		sortOn,
		setSortOn,
		sortOnColumn,
		descending,
		setDescending
	};
};
