import '@neovici/cosmoz-button';
import { html } from 'lit-html';
import '../src/cosmoz-omnitable.js';
import demoData from './data.json';

export default {
	title: 'Visual/CosmozOmnitable',
	component: 'cosmoz-omnitable',
	parameters: { docs: { disable: true } },
};

const data = demoData.slice(0, 8);

export const Hierarchy = () => html`
	<cosmoz-omnitable .data=${data} style="width: 600px; height: 480px">
		<cosmoz-omnitable-column
			name="company"
			title="Company"
			value-path="company"
			width="120px"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column-autocomplete
			name="eyeColor"
			title="Eye color"
			value-path="eyeColor"
			width="120px"
		></cosmoz-omnitable-column-autocomplete>
		<cosmoz-omnitable-column-number
			name="age"
			title="Age"
			value-path="age"
			width="120px"
		></cosmoz-omnitable-column-number>
		<cosmoz-omnitable-column
			name="balance"
			title="Balance"
			value-path="balance"
			width="120px"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="email"
			title="Email"
			value-path="email"
			priority="-1"
			width="200px"
		></cosmoz-omnitable-column>
		<cosmoz-button slot="actions" size="sm">Export</cosmoz-button>
	</cosmoz-omnitable>
`;

// Grouped story: two deterministic groups (blue/green), folded state is
// applied by the spec (fold chevron click) so the capture pins group
// separators, fold chevrons and the collapsed group.
const groupedData = [
	...demoData.filter((d) => d.eyeColor === 'blue').slice(0, 3),
	...demoData.filter((d) => d.eyeColor === 'green').slice(0, 3),
];

export const Grouped = () => html`
	<cosmoz-omnitable
		group-on="eyeColor"
		.data=${groupedData}
		style="width: 600px; height: 480px"
	>
		<cosmoz-omnitable-column
			name="eyeColor"
			title="Eye color"
			value-path="eyeColor"
			width="140px"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column
			name="company"
			title="Company"
			value-path="company"
			width="140px"
		></cosmoz-omnitable-column>
		<cosmoz-omnitable-column-number
			name="age"
			title="Age"
			value-path="age"
			width="80px"
		></cosmoz-omnitable-column-number>
		<cosmoz-omnitable-column
			name="email"
			title="Email"
			value-path="email"
			width="160px"
		></cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;

// Wide story: 20 columns à 80px in a 600px table - the layout engine drops
// the lowest-priority columns until the set fits; priority 0 also carries a
// min-width of 300px so the row canvas overflows horizontally and the
// scroller's overflow-x clip state is pinned.
export const Wide = () => html`
	<cosmoz-omnitable .data=${data} style="width: 600px; height: 400px">
		<cosmoz-omnitable-column
			name="w00"
			title="Column 00"
			value-path="company"
			width="80px"
			min-width="300"
		></cosmoz-omnitable-column>
		${Array.from(
			{ length: 19 },
			(_, i) =>
				html`<cosmoz-omnitable-column
					name=${'w' + String(i + 1).padStart(2, '0')}
					title=${'Column ' + String(i + 1).padStart(2, '0')}
					value-path=${i % 2 ? 'age' : 'eyeColor'}
					width="80px"
					priority=${String(i + 1)}
				></cosmoz-omnitable-column>`,
		)}
	</cosmoz-omnitable>
`;

// Tall rows story: 300px-tall rows in a 400px viewport - the spec captures
// mid-list (scrollTop 900) so the virtualizer window is scrolled.
const tallData = demoData.slice(0, 30);

export const TallRowsScrolled = () => html`
	<cosmoz-omnitable .data=${tallData} style="width: 600px; height: 400px">
		<cosmoz-omnitable-column
			name="tall"
			title="Tall"
			value-path="company"
			width="300px"
			.renderCell=${(_column, cell) =>
				html`<div
					style="height: 300px; box-sizing: border-box; overflow: hidden; display: flex; align-items: center; padding-left: 12px"
				>
					${cell.item.company + ' #' + cell.index}
				</div>`}
		></cosmoz-omnitable-column>
	</cosmoz-omnitable>
`;
