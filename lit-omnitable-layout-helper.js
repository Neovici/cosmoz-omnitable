import {
	component,
	useRef,
	useReducer,
	useLayoutEffect,
	useCallback,
	useEffect,
	useState,
} from "haunted";
import { directive, html } from "lit-html";

// eslint-disable-next-line no-return-assign
const ref = directive((ref) => (part) =>
	(ref.current = part.committer.element)
);

const intialState = {
		dimensions: {},
		hiddenColumns: [],
	},
	reducer = (state, action) => {
		switch (action.type) {
			case "reset":
				return intialState;
			case "update":
				console.log("update");
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
							hiddenColumns.map((column) => [column.name, 0])
						),
					},
				};
			case "hideColumn":
				console.log("hideColumn", action.column);

				return {
					...state,
					hiddenColumns: [...state.hiddenColumns, action.column],
				};
		}
	},
	reset = () => ({ type: "reset" }),
	update = (currentWidth, dimensions) => ({
		type: "update",
		currentWidth,
		dimensions,
	}),
	hideColumn = (breakpoint, name) => ({
		type: "hideColumn",
		column: {
			name,
			breakpoint,
		},
	});

const	cell = (item, column, config, hide) =>
		html`<div class="cell" data-column="${column}" style="${ hide ? 'display: none' : '' }">${item[column]}</div>`,
	layoutRow = (config, hiddenColumns, item) =>
		Object.entries(config)
			.map(([column, config]) => cell(item, column, config, hiddenColumns.includes(column))),
	LayoutHelper = function ({ config, item }) {
		const layouter = useRef();
		const [state, dispatch] = useReducer(reducer, intialState);
		const { dimensions, hiddenColumns } = state;
		console.log({hiddenColumns})
		const dispatchEvent = useCallback((event) => this.dispatchEvent(event), []);

		useEffect(() => dispatch(reset()), [dispatch, config]);

		useEffect(() => {
			let rowWidth;
			const containerObserver = new ResizeObserver(
				([row]) => (rowWidth = row.contentRect.width)
			);
			const cellObserver = new ResizeObserver((entries) => {
				console.log('entries', Object.fromEntries(
					entries
						.map((entry) => [
							entry.target.dataset.column,
							entry.contentRect.width,
						])
				))
				const sizes = Object.fromEntries(
					entries
						.filter((entry) => entry.contentRect.width > 0)
						.map((entry) => [
							entry.target.dataset.column,
							entry.contentRect.width,
						])
				);

				if(Object.keys(sizes).length === 0) {
					return;
				}

				const tooSmall = Object.entries(sizes).find(([column, width]) => {
					if (width === 0) {
						return false;
					}

					const dropThreshold =
						(config[column] && config[column].dropThreshold) || 100;
					return width < dropThreshold;
				});

				if (tooSmall) {
					dispatch(hideColumn(rowWidth, tooSmall[0]));
					return;
				}

				dispatch(update(rowWidth, sizes));
			});

			containerObserver.observe(layouter.current);
			layouter.current
				.querySelectorAll(".cell")
				.forEach(cellObserver.observe.bind(cellObserver));

			return () => {
				containerObserver.disconnect();
				cellObserver.disconnect();
			};
		}, [layouter.current, config, dispatch]);

		useEffect(() => {
			if (Object.keys(dimensions).length === 0) {
				return;
			}
			dispatchEvent(new CustomEvent("layout", { detail: dimensions }));
		}, [dispatchEvent, dimensions]);

		return html`
			<style>
				:host {
					display: block;
					/* height: 0; */
					/* overflow: hidden; */
				}

				.row {
					display: flex;
					background: red;
				}

				.row > .cell {
					flex: 1;
					flex-basis: 125px;
				}

				.cell:first-child {
					flex-basis: 300px;
				}
			</style>
			<div class="row" ref="${ref(layouter)}">
				${layoutRow(config, hiddenColumns.map(c => c.name), item)}
			</div>
		`;
	};

customElements.define("lit-omnitable-layout-helper", component(LayoutHelper));
