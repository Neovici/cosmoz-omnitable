import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';
import { triangle } from '../icons';

export const render = ({ columns, on, descending, setOn, setDescending }) =>
	columns?.map(
		(c) =>
			html`<button
				class="sg"
				title=${c.title}
				data-on=${ifDefined(
					(c.name === on && (descending ? 'desc' : 'asc')) || undefined
				)}
				@click=${(e) => {
					const on = e.currentTarget?.dataset.on;
					if (!on) {
						setOn(c.name);
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
				<span>${c.title}</span> ${triangle}
			</button>`
	);

export default () => html`
	<sort-and-group-consumer
		class="sgs"
		.render=${({
			columns,
			groupOn: on,
			setGroupOn: setOn,
			groupOnDescending: descending,
			setGroupOnDescending: setDescending,
		} = {}) =>
			render({
				columns: columns?.filter?.((c) => c['groupOn']),
				on,
				setOn,
				descending,
				setDescending,
			})}
	>
	</sort-and-group-consumer>
`;
