import { useReducer, useCallback, useEffect } from "haunted";

const intialState = {
		config: {},
		containerWidth: Infinity,
		dimensions: {},
		hiddenColumns: [],
	},
	handleUpdate = (config, dimensions, oldHiddenColumns, containerWidth) => {
		let hiddenColumns = oldHiddenColumns.filter(
			(column) => column.breakpoint >= containerWidth
		)

		const hiddenColumnsIds = hiddenColumns.map((c) => c.id);

		// calculate if any column is below the width threshold
		const tooSmall = Object.entries(dimensions).find(([column, width]) => {
			if (hiddenColumnsIds.includes(column)) {
				return false;
			}

			const dropThreshold = config[column].dropThreshold;
			return width < dropThreshold;
		});

		// don't drop the very last column
		const isLastColumn =
			Object.keys(dimensions).length - 1 === hiddenColumns.length;

		// drop a column in order of dropConfig priority
		if (tooSmall && !isLastColumn) {
			const droppedColumn = Object.entries(config)
				.filter(([column]) => !hiddenColumnsIds.includes(column))
				.sort(
					([, configA], [, configB]) => configB.priority - configA.priority
				)
				.pop()[0];

			hiddenColumns = [
				...hiddenColumns,
				{ id: droppedColumn, breakpoint: containerWidth },
			];
		}

		return {
			config,
			containerWidth,
			dimensions: {
				...dimensions,
				...Object.fromEntries(
					hiddenColumns.map((column) => [column.id, 0])
				),
			},
			hiddenColumns,
		};
	},
	reducer = (state, action) => {
		switch (action.type) {
			case "reset":
				return {
					...intialState,
					config: action.config,
				};
			case "updateConfig":
				return {
					...state,
					config: action.config,
				};
			case "update":
				const
					dimensions = {
						...state.dimensions,
						...action.dimensions,
					},
					containerWidth = action.containerWidth || state.containerWidth;

				return handleUpdate(state. config, dimensions, state.hiddenColumns, containerWidth);
		}
	},
	reset = (config) => ({ type: "reset", config }),
	updateConfig = (config) => ({
		type: "updateConfig",
		config,
	}),
	update = (dimensions, containerWidth) => ({
		type: "update",
		dimensions,
		containerWidth,
	});

export const useColumnAdjust = (container, dropConfig) => {
	const [state, dispatch] = useReducer(reducer, intialState);
	const { dimensions, hiddenColumns } = state;

	useEffect(() => dispatch(updateConfig(dropConfig)), [dropConfig, dispatch]);

	// track container width and cells width
	useEffect(() => {
		const o = new ResizeObserver((entries) => {
			const containerEntry = entries.find(entry => entry.target === container.current);
			const dimensions = entries.filter(entry => entry.contentRect.width !== 0 && entry.target !== container.current)
				.map((entry) => [
					entry.target.dataset.id,
					entry.contentRect.width,
				]);

			dispatch(
				update(
					Object.fromEntries(dimensions),
					containerEntry && containerEntry.contentRect.width
				)
			);
		});

		o.observe(container.current);
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
