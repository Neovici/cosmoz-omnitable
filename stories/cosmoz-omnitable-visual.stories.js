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
		<button slot="actions">Export</button>
	</cosmoz-omnitable>
`;
