import { html } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { triangle } from '../icons';
import { Column } from '../types';

interface RenderProps {
	column?: Pick<Column, 'name' | 'title'>;
	on?: string;
	descending?: boolean;
	setOn: (name?: string) => void;
	setDescending: (value: boolean) => void;
}

interface RenderAllProps {
	columns?: Column[];
	on?: string;
	descending?: boolean;
	setOn: (name?: string) => void;
	setDescending: (value: boolean) => void;
}

interface SortAndGroupConsumerProps {
	columns?: Column[];
	groupOn?: string;
	setGroupOn?: (name?: string) => void;
	groupOnDescending?: boolean;
	setGroupOnDescending?: (value: boolean) => void;
	sortOn?: string;
	setSortOn?: (name?: string) => void;
	descending?: boolean;
	setDescending?: (value: boolean) => void;
}

export const render = ({
	column,
	on,
	descending,
	setOn,
	setDescending,
}: RenderProps) => {
	const { name, title } = column ?? {};

	return html`<button
		class="sg"
		title=${ifDefined(title)}
		data-on=${ifDefined(
			(name === on && (descending ? 'desc' : 'asc')) || undefined,
		)}
		@click=${(e: Event) => {
			const target = e.currentTarget as HTMLElement;
			const on = target?.dataset.on;
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

export const renderAll = ({ columns, ...thru }: RenderAllProps) =>
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
		}: SortAndGroupConsumerProps = {}) =>
			renderAll({
				columns: columns?.filter?.((c) => c['groupOn']),
				on,
				setOn: setOn!,
				descending,
				setDescending: setDescending!,
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
		}: SortAndGroupConsumerProps = {}) =>
			renderAll({
				columns: columns?.filter?.((c) => c['sortOn'] && !c.noSort),
				on,
				setOn: setOn!,
				descending,
				setDescending: setDescending!,
			})}
	>
	</sort-and-group-consumer>
`;
