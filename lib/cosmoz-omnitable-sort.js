import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';

const sortIcon = html`<svg
	width="8"
	height="6"
	viewBox="0 0 8 6"
	fill="currentColor"
	xmlns="http://www.w3.org/2000/svg"
>
	<path d="M0.5,0.5h7c0.4,0,0.6,0.4,0.4,0.7L4.4,5.3c-0.2,0.2-0.5,0.2-0.7,0L0.1,1.2
		C-0.1,0.9,0.1,0.5,0.5,0.5z" />
</svg> `;

export default (column) => html`
	<sort-and-group-consumer
		style="display: contents"
		.render=${({
			sortOn,
			setSortOn,
			descending,
			setDescending,
		} = {}) => html` <button
			class="sort"
			data-sort=${ifDefined(
				(column === sortOn && (descending ? 'desc' : 'asc')) || undefined
			)}
			@click=${(e) => {
				const sort = e.currentTarget?.dataset.sort;
				if (!sort) {
					setSortOn(column);
					setDescending(false);
				}
				if (sort === 'asc') {
					setDescending(true);
				}
				if (sort === 'desc') {
					setSortOn();
					setDescending(false);
				}
			}}
		>
			${sortIcon}
		</button>`}
	>
	</sort-and-group-consumer>
`;
