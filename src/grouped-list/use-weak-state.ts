import { useCallback, useState } from '@pionjs/pion';
import { callFn, getItemState, ItemsState, ItemState } from './utils';
import { Item } from '../lib/types';

export const useWeakState = () => {
	const [wrapper, setState] = useState<[ItemsState]>(() => [new WeakMap()]),
		setItemState = useCallback(
			(
				item: Item,
				newItemState: ItemState | ((state: ItemState) => ItemState),
			) =>
				setState(([state]) => {
					const itemState = getItemState(item, state);
					Object.assign(itemState, callFn(newItemState, itemState));
					return [state];
				}),
			[],
		);

	return {
		setItemState,
		state: wrapper[0],
		signal: wrapper,
	};
};
