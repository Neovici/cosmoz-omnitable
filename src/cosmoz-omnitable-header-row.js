import { html, component, useContext } from '@pionjs/pion';
import { repeat } from 'lit-html/directives/repeat.js';
import './lib/cosmoz-omnitable-resize-nub';
import { render } from './lib/settings/cosmoz-omnitable-sort-group';
import { when } from 'lit-html/directives/when.js';
import { SortAndGroupContext } from './lib/use-sort-and-group-options';

const renderHeaderRow = ({
	data,
	columns,
	groupOnColumn,
	filters,
	setFilterState,
	sortAndGroup: {
		sortOn: on,
		setSortOn: setOn,
		descending,
		setDescending,
	} = {},
}) =>
	repeat(
		columns,
		(column) => column.name,
		(column) => [
			html`<div
				class="cell ${column.headerCellClass} header-cell"
				part="cell header-cell cell-${column.name} header-cell-${column.name}"
				?hidden="${column === groupOnColumn}"
				title="${column.headerTitleFn(column)}"
				name="${column.name}"
			>
				${column.renderHeader(
					column,
					filters[column.name] ?? {},
					(state) => setFilterState(column.name, state),
					column.source(column, data),
				)}
				${when(!column.noSort, () =>
					render({ on, setOn, descending, setDescending, column }),
				)}
			</div>`,
			html`<cosmoz-omnitable-resize-nub
				.column="${column}"
				name="${column.name}"
			></cosmoz-omnitable-resize-nub>`,
		],
	);

const HeaderRow = ({ columns, settingsConfig, hideSelectAll, ...thru }) => {
	const sortAndGroup = useContext(SortAndGroupContext);
	return html`
		${when(columns, (columns) =>
			renderHeaderRow({ columns, sortAndGroup, ...thru }),
		)}
		${when(
			!hideSelectAll,
			() =>
				html` <cosmoz-omnitable-settings
					.config=${settingsConfig}
					part="settings"
				></cosmoz-omnitable-settings>`,
		)}
	`;
};

customElements.define(
	'cosmoz-omnitable-header-row',
	component(HeaderRow, { useShadowDOM: false }),
);
