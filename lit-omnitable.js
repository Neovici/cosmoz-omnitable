/* eslint-disable one-var */
import {
	component, html, useState, useCallback
} from 'haunted';
import {
	useGroupFilterSort, SORT_DESCENDING, SORT_ASCENDING
} from './lib/use-group-filter-sort';
import { scroll } from 'lit-virtualizer';

const
	headerCell = (config, onClick) => column => html`<div class="cell" @click=${onClick} data-column="${column}">${config[column].label}</div>`,
	cell = item => ([column, config]) => html`<div class="cell">${item[column]}`,
	row = config => item =>	html`<div class="row">${
		Object.entries(config).map(cell(item))
	}</div>`,

	Omnitable = function ({
		data, config
	}) {
		const [sortBy, setSortBy] = useState(undefined);
		const [sortDirection, setSortDirection] = useState(SORT_ASCENDING);

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
		/* eslint-disable indent */
		return html`
			<style>
				.header, .row {
					display: flex;
				}

				.cell {
					flex-basis: 125px;
				}
			</style>
			<div>SortBy: ${sortBy}</div>
			<div>SortDirection: ${sortDirection}</div>
			<div class="header">${ columns.map(headerCell(config, sortByColumn)) }</div>
			<div class="content">${scroll({
				items: visibleItems,
				scrollTarget: window,
				renderItem: row(config)
			})}</div>
		`;
	};

customElements.define('lit-omnitable', component(Omnitable));
