import { html, component } from 'haunted';
import { repeat } from 'lit-html/directives/repeat';
import './lib/cosmoz-omnitable-resize-nub';

const renderHeaderRow = ({
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
					?hidden=${column === groupOnColumn}
					title=${column.title}
					name=${column.name}
				>
					${column.renderHeader(
						column,
						filters[column.name] ?? {},
						(state) => setFilterState(column.name, state),
						column.source(column, data)
					)}
				</div>`,
				html`<cosmoz-omnitable-resize-nub
					.column=${column}
					name=${column.name}
				></cosmoz-omnitable-resize-nub>`,
			]
		),
	HeaderRow = ({ content, columns, ...thru }) => [
		columns &&
			renderHeaderRow({
				columns,
				...thru,
			}),
		content,
	];

customElements.define(
	'cosmoz-omnitable-header-row',
	component(HeaderRow, { useShadowDOM: false })
);
