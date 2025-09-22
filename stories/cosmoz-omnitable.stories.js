import { html } from 'lit-html';
import '../src/cosmoz-omnitable.js';
import demoData from './data.json';

export default {
	title: 'Components/CosmozOmnitable',
	component: 'cosmoz-omnitable',
	parameters: {
		docs: {
			description: {
				component: 'A data table component with sorting, filtering, grouping.',
			},
		},
	},
};

const Template = (args) => {
	return html`
		<style>
			.omnitable-container {
				height: 300px;
				display: flex;
				flex-direction: column;
			}
			cosmoz-omnitable {
				flex: 1;
				min-height: 0;
				display: flex;
				flex-direction: column;
			}
			cosmoz-omnitable-item-row {
				border-bottom: 1px solid #e1e2e5;
			}
			cosmoz-omnitable-header-row {
				border-bottom: 1px solid #e1e2e5;
			}
		</style>
		<div class="omnitable-container">
			<cosmoz-omnitable
				.data=${demoData}
				hash-param=${args.hashParam || ''}
				sort-on=${args.sortOn || ''}
				group-on=${args.groupOn || ''}
				?descending=${args.descending}
				?group-on-descending=${args.groupOnDescending}
				?hide-select-all=${args.hideSelectAll}
				settings-id=${args.settingsId || ''}
				?no-local=${args.noLocal}
				?no-local-sort=${args.noLocalSort}
				?no-local-filter=${args.noLocalFilter}
				?loading=${args.loading}
				mini-breakpoint=${args.miniBreakpoint || '768px'}
			>
				<cosmoz-omnitable-column
					name="company"
					title="Company"
					value-path="company"
					sort-on="company"
					group-on="company"
				>
				</cosmoz-omnitable-column>

				<cosmoz-omnitable-column
					name="age"
					title="Age"
					value-path="age"
					sort-on="age"
				>
				</cosmoz-omnitable-column>

				<cosmoz-omnitable-column
					name="eyeColor"
					title="Eye Color"
					value-path="eyeColor"
					sort-on="eyeColor"
					group-on="eyeColor"
				>
				</cosmoz-omnitable-column>

				<cosmoz-omnitable-column
					name="balance"
					title="Balance"
					value-path="balance"
					sort-on="balance"
				>
				</cosmoz-omnitable-column>

				<cosmoz-omnitable-column
					name="registered"
					title="Registered"
					value-path="registered"
					sort-on="registered"
				>
				</cosmoz-omnitable-column>

				<div slot="actions">
					<button>Export</button>
					<button>Settings</button>
				</div>
			</cosmoz-omnitable>
		</div>
	`;
};

export const Default = Template.bind({});
Default.args = {};

export const Sorting = Template.bind({});
Sorting.args = {
	sortOn: 'company',
	descending: false,
};

export const Grouping = Template.bind({});
Grouping.args = {
	groupOn: 'eyeColor',
	groupOnDescending: false,
};

export const Loading = Template.bind({});
Loading.args = {
	loading: true,
};

export const HideSelectAll = Template.bind({});
HideSelectAll.args = {
	hideSelectAll: true,
};
