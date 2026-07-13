import { html } from 'lit-html';
import { generateTableDemoData } from '../demo/table-demo-helper.js';
import '../src/cosmoz-omnitable.js';

const data = generateTableDemoData(10, 10, 10);

export default {
	title: 'Components/CosmozOmnitableItemRowMiniMode',
	component: 'cosmoz-omnitable-item-row',
};

const Template = (args) => html`
	<style>
		.container {
			width: ${args.width || '400px'};
			height: 400px;
			display: flex;
			flex-direction: column;
		}
		cosmoz-omnitable {
			flex: 1;
			min-height: 0;
		}
	</style>
	<div class="container">
		<cosmoz-omnitable .data=${data} mini-breakpoint="9999">
			<cosmoz-omnitable-column
				name="name"
				title="Name"
				value-path="name"
				mini="0"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="group"
				title="Group"
				value-path="group"
				mini="1"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="value"
				title="Value"
				value-path="value"
				mini="2"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="randomString"
				title="Random String"
				value-path="randomString"
				mini="3"
			></cosmoz-omnitable-column>
			<cosmoz-omnitable-column
				name="bool"
				title="Bool"
				value-path="bool"
			></cosmoz-omnitable-column>
		</cosmoz-omnitable>
	</div>
`;

export const MiniMode = Template.bind({});
MiniMode.args = { width: '400px' };
