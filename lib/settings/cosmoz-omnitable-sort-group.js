import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { triangle } from '../icons';

export const render = ({ column, on, descending, setOn, setDescending }) => {
	const { name, title } = column ?? {};
	return html`<button
		class="sg"
		title=${title}
		data-on=${ifDefined(
			(name === on && (descending ? 'desc' : 'asc')) || undefined
		)}
		@click=${(e) => {
			const on = e.currentTarget?.dataset.on;
			if (!on) {
				setOn(name);
				setDescending(false);
			}
			if (on === 'asc') {
				setDescending(true);
			} else if (on === 'desc') {
				setOn();
				setDescending(false);
			}
		}}
	>
		<span>${title}</span> ${triangle}
	</button>`;
};

export const renderAll = ({ columns, ...thru }) =>
	columns?.map((column) => render({ column, ...thru }));

export const group = () => html`
	<sort-and-group-consumer
		class="sgs"
		.render=${({
			columns,
			groupOn: on,
			setGroupOn: setOn,
			groupOnDescending: descending,
			setGroupOnDescending: setDescending,
		} = {}) =>
			renderAll({
				columns: columns?.filter?.((c) => c['groupOn']),
				on,
				setOn,
				descending,
				setDescending,
			})}
	>
	</sort-and-group-consumer>
`;

export const sort = () => html`
	<sort-and-group-consumer
		class="sgs"
		.render=${({
			columns,
			sortOn: on,
			setSortOn: setOn,
			descending,
			setDescending,
		} = {}) =>
			renderAll({
				columns: columns?.filter?.((c) => c['sortOn']),
				on,
				setOn,
				descending,
				setDescending,
			})}
	>
	</sort-and-group-consumer>
`;
