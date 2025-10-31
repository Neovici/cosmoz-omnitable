import { useCallback, useState } from '@pionjs/pion';
import { callFn, getItemState } from './utils';

export const useWeakState = () => {
	const [wrapper, setState] = useState(() => [new WeakMap()]),
		setItemState = useCallback(
			(item, newItemState) =>
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
