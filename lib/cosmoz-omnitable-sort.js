import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';
import { triangle } from './icons';

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
			${triangle}
		</button>`}
	>
	</sort-and-group-consumer>
`;
