import { useReducer, useCallback, useEffect } from "haunted";

const intialState = {
		config: {},
		containerWidth: Infinity,
		dimensions: {},
		hiddenColumns: [],
	},
	reducer = (state, action) => {
		console.log(action.type, action)
		switch (action.type) {
			case "reset":
				return {
					...intialState,
					config: action.config
				};
			case 'updateConfig':
				return {
					...state,
					config: action.config
				};
			case "update":
				const dimensions = {
					...state.dimensions,
					...action.dimensions
				}

				// calculate if any column is below the width threshold
				const tooSmall = Object.entries(dimensions).some(
					([column, width]) => {
						if (width === 0) {
							return false;
						}

						const dropThreshold = state.config[column].dropThreshold;
						return width < dropThreshold;
					}
				);

				console.log(tooSmall);

				// don't drop the very last column
				const isLastColumn = Object.keys(dimensions).length - 1 ===
						state.hiddenColumns.length;

				let hiddenColumns = state.hiddenColumns.filter(
					(column) => column.breakpoint >= state.containerWidth
				);;

				// drop a column in order of dropConfig priority
				if (tooSmall && !isLastColumn) {
					const hiddenColumnsIds = state.hiddenColumns.map((c) => c.id);
					const droppedColumn = Object.entries(state.config)
						.filter(([column]) => !hiddenColumnsIds.includes(column))
						.sort(
							([, configA], [, configB]) => configB.priority - configA.priority
						)
						.pop();
					hiddenColumns = [
						...hiddenColumns,
						{ id: droppedColumn[0], breakpoint: state.containerWidth },
					]
				}

				return {
					...state,
					dimensions: {
						...dimensions,
						...Object.fromEntries(
							hiddenColumns.map((column) => [column.id, 0])
						),
					},
					hiddenColumns,
				};
			case "containerResize": {
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
			}
		}
	},
	reset = (config) => ({ type: "reset", config }),
	updateConfig = (config) => ({
		type: "updateConfig",
		config,
	}),
	update = (dimensions) => ({
		type: "update",
		dimensions,
	}),
	containerResize = (width) => ({
		type: "containerResize",
		width,
	});
// TODO: coloanele nu sunt eliminate, cred ca trebuie rulat acelasi cod si la update si la containerResize
export const useColumnAdjust = (container, dropConfig) => {
	const [state, dispatch] = useReducer(reducer, intialState);
	const { dimensions, hiddenColumns } = state;
	useEffect(() => console.log(dimensions), [dimensions]);

	useEffect(() => dispatch(updateConfig(dropConfig)), [dropConfig, dispatch]);

	// track container width
	useEffect(() => {
		const o = new ResizeObserver(([row]) =>
			dispatch(containerResize(row.contentRect.width))
		);

		o.observe(container.current);
		return o.disconnect.bind(o);
	}, [container.current, dispatch]);

	// track cells width
	useEffect(() => {
		const o = new ResizeObserver((entries) => {
			const dimensions = Object.fromEntries(
				entries.map((entry) => [
					entry.target.dataset.id,
					entry.contentRect.width,
				])
			);

			dispatch(update(dimensions));
		});

		container.current.querySelectorAll(".cell").forEach(o.observe, o);

		return o.disconnect.bind(o);
	}, [container.current, dropConfig, dispatch]);

	return {
		reset: useCallback(() => dispatch(reset(dropConfig)), [
			dispatch,
			dropConfig,
		]),
		dimensions,
		hiddenColumns: hiddenColumns.map((c) => c.id),
	};
};
