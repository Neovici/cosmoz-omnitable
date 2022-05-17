import { html } from 'haunted';
import { ifDefined } from 'lit-html/directives/if-defined';
import { triangle } from '../icons';

export default () => html`
	<sort-and-group-consumer
		class="groups"
		.render=${({
			columns,
			groupOnDescending: descending,
			groupOn,
			setGroupOn,
			setGroupOnDescending,
		} = {}) => {
			const items = columns?.filter?.((c) => c['groupOn']);
			return items?.map(
				(c) =>
					html`<button
						class="group"
						title=${c.title}
						data-group=${ifDefined(
							(c.name === groupOn && (descending ? 'desc' : 'asc')) || undefined
						)}
						@click=${(e) => {
							const group = e.currentTarget?.dataset.group;
							if (!group) {
								setGroupOn(c.name);
								setGroupOnDescending(false);
							}
							if (group === 'asc') {
								setGroupOnDescending(true);
							} else if (group === 'desc') {
								setGroupOn();
								setGroupOnDescending(false);
							}
						}}
					>
						<span>${c.title}</span> ${triangle}
					</button>`
			);
		}}
	>
	</sort-and-group-consumer>
`;
