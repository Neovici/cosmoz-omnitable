import {
	useState, useCallback, useMemo
} from 'haunted';
import { useNotifyResize } from './use-notify-resize';

export const
	useListData = host => {
		const
			{ items } = host,
			[expanded, setExpanded] = useState(false),

			openExpand = useCallback(event => {
				event.preventDefault();
				setExpanded(true);
			}, [setExpanded]),

			closeExpand = useCallback(event => {
				event.preventDefault();
				setExpanded(false);
			}, [setExpanded]),

			visibleItems = useMemo(() => {
				if (items == null) {
					return [];
				}

				if (items.length <= 2) {
					return items;
				}

				return expanded ? items : items.slice(0, 1);
			}, [items, expanded]);

		useNotifyResize(expanded);

		return {
			items,
			expanded,
			visibleItems,
			openExpand,
			closeExpand
		};
	};
