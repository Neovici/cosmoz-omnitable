import { html, component } from 'haunted';
import { repeat } from 'lit-html/directives/repeat';
import { ifDefined } from 'lit-html/directives/if-defined';
import './lib/cosmoz-omnitable-resize-nub';

const sortIcon = html`<svg
		width="8"
		height="6"
		viewBox="0 0 8 6"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
		/>
	</svg> `,
	/* eslint-disable-next-line max-lines-per-function */
	renderHeaderRow = ({
		data,
		columns,
		groupOnColumn,
		sortOnColumn,
		setSortOn,
		descending,
		setDescending,
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
					data-sort=${ifDefined(
						(column === sortOnColumn && (descending ? 'desc' : 'asc')) || undefined
					)}
				>
					${column.renderHeader(
						column,
						filters[column.name] ?? {},
						(state) => setFilterState(column.name, state),
						column.source(column, data)
					)}
					<span class="sort" @click=${(e)=>{
						const sort= e.currentTarget.parentElement?.dataset.sort;
						if(!sort) {
							setSortOn(column.name);
							setDescending(false);
						}
						if(sort === 'asc'){
							setDescending(true);
						}
						if(sort === 'desc') {
							setSortOn();
							setDescending(false);
						}
						}}>${sortIcon}</span>
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
