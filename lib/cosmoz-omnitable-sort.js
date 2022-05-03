import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';

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
