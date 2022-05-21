import { html } from 'haunted';
import { render } from './cosmoz-omnitable-group';

export default () => html`
	<sort-and-group-consumer
		class="sgs"
		.render=${({
			columns,
			sortOn: on,
			setSortOn: setOn,
			descending,
			setDescending,
		} = {}) =>
			render({
				columns: columns?.filter?.((c) => c['sortOn']),
				on,
				setOn,
				descending,
				setDescending,
			})}
	>
	</sort-and-group-consumer>
`;
