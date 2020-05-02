import {
	useReducer,
	useCallback,
	useEffect,
} from "haunted";

const
	intialState = {
		dimensions: {},
		hiddenColumns: [],
	},
	reducer = (state, action) => {
		switch (action.type) {
			case "reset":
				return intialState;
			case "update":
				const hiddenColumns = state.hiddenColumns.filter(
					(column) => column.breakpoint >= action.currentWidth
				);
				return {
					...state,
					hiddenColumns,
					dimensions: {
						...state.dimensions,
						...action.dimensions,
						...Object.fromEntries(
							hiddenColumns.map((column) => [column.id, 0])
						),
					},
				};
			case "hideColumn": {
				if (Object.keys(state.dimensions).length - 1 === state.hiddenColumns.length) {
					// don't drop the last column
					return state;
				}

				const hiddenColumns = state.hiddenColumns.map((c) => c.id);
				const droppedColumn = Object.entries(action.dropConfig)
					.filter(([column]) => !hiddenColumns.includes(column))
					.sort(([, configA], [,configB]) => configB.priority - configA.priority)
					.pop()
				return {
					...state,
					hiddenColumns: [...state.hiddenColumns, {id: droppedColumn[0], breakpoint: action.breakpoint}],
				};
			}
		}
	},
	reset = () => ({ type: "reset" }),
	update = (currentWidth, dimensions) => ({
		type: "update",
		currentWidth,
		dimensions,
	}),
	hideColumn = (breakpoint, dropConfig) => ({
		type: "hideColumn",
		dropConfig,
		breakpoint
	});

export const useColumnAdjust = (container, dropConfig) => {
	const [state, dispatch] = useReducer(reducer, intialState);
	const { dimensions, hiddenColumns } = state;

	useEffect(() => {
		let rowWidth;

		// track container width
		const containerObserver = new ResizeObserver(
			([row]) => (rowWidth = row.contentRect.width)
		);

		// track cell width
		const cellObserver = new ResizeObserver((entries) => {

			const sizes = Object.fromEntries(
				entries.map((entry) => [
					entry.target.dataset.id,
					entry.contentRect.width,
				])
			);

			// calculate if any column is below the width threshold
			const tooSmall = Object.entries(sizes).find(([column, width]) => {
				if (width === 0) {
					return false;
				}

				const dropThreshold = dropConfig[column].dropThreshold;
				return width < dropThreshold;
			});

			// drop a column in order of dropConfig priority
			if (tooSmall) {
				dispatch(hideColumn(rowWidth, dropConfig));
				return;
			}

			// update the sizes
			dispatch(update(rowWidth, sizes));
		});

		containerObserver.observe(container.current);
		container.current
			.querySelectorAll(".cell")
			.forEach(cellObserver.observe.bind(cellObserver));

		return () => {
			containerObserver.disconnect();
			cellObserver.disconnect();
		};
	}, [container.current, dropConfig, dispatch]);

	return {
		reset: useCallback(() => dispatch(reset()), [dispatch]),
		dimensions,
		hiddenColumns: hiddenColumns.map((c) => c.id),
	};
};
