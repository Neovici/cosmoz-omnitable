import {
	useReducer,
	useCallback,
	useEffect,
} from "haunted";

const
	intialState = {
		containerWidth: Infinity,
		dimensions: {},
		hiddenColumns: [],
		// TODO: move the dropConfig to the state and have the reducer determine which
		// column should be dropped
		// this will result in a pure function that takes in container and cell dimensions and gives the row layout
	},
	reducer = (state, action) => {
		switch (action.type) {
			case "reset":
				return intialState;
			case "update":
				return {
					...state,
					dimensions: {
						...state.dimensions,
						...action.dimensions,
					},
				};
			case "containerResize":
				const hiddenColumns = state.hiddenColumns.filter(
					(column) => column.breakpoint >= action.width
				);
				return {
					...state,
					containerWidth: action.width,
					hiddenColumns,
					dimensions: {
						...state.dimensions,
						...Object.fromEntries(
							hiddenColumns.map((column) => [column.id, 0])
						),
					},
				};
			case "hideColumn": {
				if (
					Object.keys(state.dimensions).length - 1 ===
					state.hiddenColumns.length
				) {
					// don't drop the last column
					return state;
				}

				const hiddenColumns = state.hiddenColumns.map((c) => c.id);
				const droppedColumn = Object.entries(action.dropConfig)
					.filter(([column]) => !hiddenColumns.includes(column))
					.sort(
						([, configA], [, configB]) => configB.priority - configA.priority
					)
					.pop();
				return {
					...state,
					hiddenColumns: [
						...state.hiddenColumns,
						{ id: droppedColumn[0], breakpoint: state.containerWidth },
					],
				};
			}
		}
	},
	reset = () => ({ type: "reset" }),
	update = (dimensions) => ({
		type: "update",
		dimensions,
	}),
	hideColumn = (dropConfig) => ({
		type: "hideColumn",
		dropConfig,
	}),
	containerResize = (width) => ({
		type: 'containerResize',
		width
	});

export const useColumnAdjust = (container, dropConfig) => {
	const [state, dispatch] = useReducer(reducer, intialState);
	const { dimensions, hiddenColumns } = state;

	// track container width
	useEffect(() => {
		const o = new ResizeObserver(([row]) => dispatch(containerResize(row.contentRect.width)));

		o.observe(container.current);
		return o.disconnect.bind(o);
	}, [container.current, dispatch]);

	useEffect(() => {
		// track cell width
		const o = new ResizeObserver((entries) => {
			const sizes = Object.fromEntries(
				entries.map((entry) => [
					entry.target.dataset.id,
					entry.contentRect.width,
				])
			);

			console.log(sizes);

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
				dispatch(update(sizes));
				dispatch(hideColumn(dropConfig));
				return;
			}

			// update the sizes
			dispatch(update(sizes));
		});

		container.current
			.querySelectorAll(".cell")
			.forEach(o.observe, o);

		return o.disconnect.bind(o);
	}, [container.current, dropConfig, dispatch]);

	return {
		reset: useCallback(() => dispatch(reset()), [dispatch]),
		dimensions,
		hiddenColumns: hiddenColumns.map((c) => c.id),
	};
};
