import {
	useState, useCallback, useMemo, useEffect
} from 'haunted';

const initialized = Symbol('initialized');
export const useNotifyResize = (host, expanded) => useEffect(() => {
		// skip dispatch on element initalization
		if (!host[initialized]) {
			host[initialized] = true;
			return;
		}

		host.dispatchEvent(new CustomEvent('iron-resize', {
			bubbles: true,
			composed: true
		}));
	}, [expanded]),

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
		useNotifyResize(host, expanded);

		return {
			items,
			expanded,
			visibleItems,
			openExpand,
			closeExpand
		};
	};
