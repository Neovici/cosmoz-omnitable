import {
	useState, useCallback
} from 'haunted';

export const useForceRender = () => {
	const [, setState] = useState(0);
	return useCallback(() => setState(state => state + 1), [setState]);
};
