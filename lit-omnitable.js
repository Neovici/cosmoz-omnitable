/* eslint-disable max-statements */
/* eslint-disable one-var */
import {
	component, html, useState, useCallback, useRef, useLayoutEffect, useReducer, useEffect, useMemo
} from 'haunted';
import {
	useGroupFilterSort, SORT_DESCENDING, SORT_ASCENDING
} from './lib/use-group-filter-sort';
import { scroll } from 'lit-virtualizer';
import { style } from './lit-omnitable.style.js';
import './lit-omnitable-layout-helper.js'

const
	reducer = (state, action) => {
		switch (action.type) {
		case 'reset':
			return {};
		case 'update':
			return {
				...state,
				...Object.fromEntries(action.entries.map(entry => [entry.target.dataset.column, entry.contentRect.width]))
			};
		}
	},
	reset = () => ({ type: 'reset' }),
	update = entries => ({
		type: 'update',
		entries
	});

const
	cellStyle = width => width > 0 ? `width: ${width }px;` : 'display: none;',
	layoutStyle = (sizes, hiddenColumns) => Object.entries(sizes).map(([column, width]) => `
		.header > .cell[data-column="${ column }"],
		.content > .row > .cell[data-column="${ column }"] {
			${cellStyle(hiddenColumns.includes(column) ? 0 : width)}
		}
	`),

	headerCell = (config, onClick) => column =>
		html`<div class="cell"
			@click=${onClick}
			data-column="${column}"
		>${	config[column].label }</div>`,

	cell = item => ([column, config]) =>
		html`<div class="cell" data-column="${column}">${
			item[column]
		}</div>`,

	// eslint-disable-next-line object-curly-newline
	row = (item, config) => html`<div class="row">${
		Object.entries(config).map(cell(item))
	}</div>`,

	// eslint-disable-next-line max-lines-per-function
	Omnitable = function ({
		data, config
	}) {
		const [sortBy, setSortBy] = useState(undefined);
		const [sortDirection, setSortDirection] = useState(SORT_ASCENDING);
		const layouter = useRef(null);

		const {
			visibleItems, configError
		} = useGroupFilterSort({
			config,
			items: data,
			sortBy,
			sortDirection
		});

		if (configError) {
			return html`<p>${configError}</p>`;
		}

		const columns = Object.keys(config);
		const sortByColumn = useCallback(event => {
			const newSortBy = event.target.dataset.column;

			if (sortBy === newSortBy) {
				setSortDirection(sortDirection === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING);
				return;
			}

			setSortBy(newSortBy);
			setSortDirection(SORT_ASCENDING);
		}, [sortBy, sortDirection, setSortBy, setSortDirection]);


		const [sizes, dispatch] = useReducer(reducer, {});

		// useLayoutEffect(() => {
		// 	dispatch(reset());

		// 	const ro = new ResizeObserver(entries => dispatch(update(entries)));
		// 	layouter.current.querySelectorAll('.cell').forEach(ro.observe.bind(ro));

		// 	return ro.disconnect.bind(ro);
		// }, [layouter.current, config, dispatch]);

		const [hiddenColumns, setHiddenColumns] = useState([]);
		useLayoutEffect(() => {
			const tooSmall = Object.entries(sizes).find(([column, width]) => {
				if (hiddenColumns.includes(column)) {
					return false;
				}

				const dropThreshold = config[column].dropThreshold || 100;
				return width < dropThreshold;
			});

			if (!tooSmall) {
				return;
			}

			setHiddenColumns([...hiddenColumns, tooSmall[0]]);
		}, [sizes, config, setHiddenColumns]);

		useLayoutEffect(() => console.log(hiddenColumns), [hiddenColumns]);

		const lStyle = useMemo(() => layoutStyle(sizes, hiddenColumns), [sizes]);

		// BUG: lit-virtualizer does not support changing renderItem at runtime (https://github.com/PolymerLabs/uni-virtualizer/issues/34)
		// this means that config changes will be ignored
		const renderItem = useCallback(item => row(item, config), [config]);

		/* eslint-disable indent */
		return html`
			<style>
				${ style }
				${ lStyle }
			</style>
			<div>SortBy: ${ sortBy }</div>
			<div>SortDirection: ${ sortDirection }</div>
			<div class="header">${ columns.map(headerCell(config, sortByColumn)) }</div>
			<div class="content">
				<lit-omnitable-layout-helper .config="${ config }" .data="${ visibleItems[0] }"></lit-omnitable-layout-helper>
				${scroll({
					items: visibleItems,
					renderItem
				})}
			</div>
		`;
	};

customElements.define('lit-omnitable', component(Omnitable));
