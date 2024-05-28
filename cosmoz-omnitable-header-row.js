import { html, component } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import './lib/cosmoz-omnitable-resize-nub';
import { render } from './lib/settings/cosmoz-omnitable-sort-group';
import { when } from 'lit-html/directives/when.js';

const /* eslint-disable-next-line max-lines-per-function */
	renderHeaderRow = ({
		data,
		columns,
		groupOnColumn,
		filters,
		setFilterState,
	}) =>
		repeat(
			columns,
			(column) => column.name,
			(column) => [
				html`<div
					class="cell ${column.headerCellClass} header-cell"
					part="cell header-cell cell-${column.name} header-cell-${column.name}"
					?hidden=${column === groupOnColumn}
					title=${column.title}
					name=${column.name}
				>
					${[
						column.renderHeader(
							column,
							filters[column.name] ?? {},
							(state) => setFilterState(column.name, state),
							column.source(column, data),
						),
						html` <sort-and-group-consumer
							style="display:contents"
							.render=${({
								sortOn: on,
								setSortOn: setOn,
								descending,
								setDescending,
							} = {}) =>
								render({
									on,
									setOn,
									descending,
									setDescending,
									column,
								})}
						>
						</sort-and-group-consumer>`,
					]}
				</div>`,
				html`<cosmoz-omnitable-resize-nub
					.column=${column}
					name=${column.name}
				></cosmoz-omnitable-resize-nub>`,
			],
		),
	HeaderRow = ({ columns, settingsConfig, hideSelectAll, ...thru }) => [
		columns &&
			renderHeaderRow({
				columns,
				...thru,
			}),
		when(
			!hideSelectAll,
			() =>
				html` <cosmoz-omnitable-settings .config=${settingsConfig}>
				</cosmoz-omnitable-settings>`,
		),
	];

customElements.define(
	'cosmoz-omnitable-header-row',
	component(HeaderRow, { useShadowDOM: false }),
);
