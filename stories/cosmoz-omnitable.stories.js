import { html } from 'lit-html';
import '../src/cosmoz-omnitable.js';
import demoData from './data.json';

const generateLargeData = (count) =>
	Array.from({ length: count }, (_, i) => ({
		company: `Company ${Math.floor(i / 100) + 1}`,
		age: 20 + (i % 50),
		eyeColor: ['blue', 'green', 'brown', 'hazel'][i % 4],
		balance: `$${(Math.random() * 10000).toFixed(2)}`,
		registered: new Date(2020, 0, 1 + (i % 1000)).toISOString(),
	}));

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
				height: calc(80vh - 60px);
				display: flex;
				flex-direction: column;
				margin-bottom: 60px;
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
			[slot='actions'] button {
				background-color: #1d2939;
				color: #ffffff;
				border: 1px solid #1d2939;
				border-radius: 8px;
				padding: 8px 14px;
				font-size: 14px;
				font-weight: 500;
				cursor: pointer;
				font-family: inherit;
				line-height: 1.5;
			}
			[slot='actions'] button:hover {
				background-color: #101828;
				border-color: #101828;
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
				?enable-select-all=${args.enableSelectAll}
				settings-id=${args.settingsId || ''}
				?no-local=${args.noLocal}
				?no-local-sort=${args.noLocalSort}
				?no-local-filter=${args.noLocalFilter}
				?disabled-filtering=${args.disabledFiltering}
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

export const DisabledFiltering = Template.bind({});
DisabledFiltering.args = {
	disabledFiltering: true,
};

const InlineTemplate = (args) => {
	return html`
		<style>
			cosmoz-omnitable-item-row {
				border-bottom: 1px solid #e1e2e5;
			}
			cosmoz-omnitable-header-row {
				border-bottom: 1px solid #e1e2e5;
			}
		</style>
		<cosmoz-omnitable
			.data=${demoData}
			?inline=${true}
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
			?disabled-filtering=${args.disabledFiltering}
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

			<button slot="bottom-bar-toolbar">Approve</button>
		</cosmoz-omnitable>
	`;
};

export const Inline = InlineTemplate.bind({});
Inline.args = {};
Inline.parameters = {
	docs: {
		description: {
			story:
				'Inline mode: the omnitable expands to show all rows without internal scrolling. The page itself scrolls instead.',
		},
	},
};

export const InlineDisabledFiltering = InlineTemplate.bind({});
InlineDisabledFiltering.args = {
	disabledFiltering: true,
};
InlineDisabledFiltering.parameters = {
	docs: {
		description: {
			story:
				'Inline mode with disabled filtering, suitable for search results where all rows are shown without internal scrolling.',
		},
	},
};

const LargeDataTemplate = (args) => html`
	<style>
		.omnitable-container {
			height: calc(80vh - 60px);
			margin-bottom: 60px;
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
			.data=${args.data}
			.allItemsCount=${args.allItemsCount}
			?enable-select-all=${args.enableSelectAll}
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

			<button slot="bottom-bar-toolbar">Approve</button>
		</cosmoz-omnitable>
	</div>
`;

export const SelectAll = LargeDataTemplate.bind({});
SelectAll.args = {
	data: generateLargeData(100),
	allItemsCount: 10000,
	enableSelectAll: false,
};

export const BulkSelectAll = LargeDataTemplate.bind({});
BulkSelectAll.args = {
	data: generateLargeData(100),
	allItemsCount: 10000,
	enableSelectAll: true,
};
