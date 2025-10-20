import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import '../src/cosmoz-omnitable.js';
import dummyData from './dummyData.json';

const meta: Meta = {
	title: 'Components/Cosmoz Omnitable Column Boolean',
	component: 'cosmoz-omnitable',
	tags: ['autodocs'],
	subcomponents: {
		'Cosmoz Omnitable Column': 'cosmoz-omnitable-column-boolean',
	},
	args: {
		data: dummyData.slice(0, 5),
		loading: false,
		title: 'Boolean',
		name: 'boolean',
		'true-label': 'Yes',
		'false-label': 'No',
		'value-path': 'boolean',
	},
	argTypes: {
		loading: {
			control: 'boolean',
			description: 'Show loading state',
		},
		selectedItems: {
			control: 'object',
			description: 'Show selected items',
		},
		data: {
			control: 'object',
			description: 'Show specified items',
		},
		'sort-on': {
			control: 'text',
			description: 'Column property name to sort on (e.g., "boolean")',
			table: {
				readonly: true,
			},
		},
		'group-on': {
			control: 'text',
			description: 'Column property name to group on (e.g., "boolean")',
			table: {
				readonly: true,
			},
		},
		descending: {
			control: 'boolean',
			description: 'Sort on descending',
			table: {
				readonly: true,
			},
		},
		'group-on-descending': {
			control: 'boolean',
			description: 'Group on descending',
			table: {
				readonly: true,
			},
		},
		'hide-select-all': {
			control: 'boolean',
			description: 'Hide select All',
			table: {
				readonly: true,
			},
		},

		title: {
			control: 'text',
			description: 'Title for the boolean column',
		},
		name: {
			control: 'text',
			description: 'Column identifier for sorting and grouping',
		},
		'value-path': {
			control: 'text',
			description: 'Path to the data property that populates this column',
			table: {
				readonly: true,
			},
		},
		'true-label': {
			control: 'text',
			description: 'Text displayed when the boolean value is true',

			table: {
				readonly: true,
			},
		},
		'false-label': {
			control: 'text',
			description: 'Text displayed when the boolean value is false',

			table: {
				readonly: true,
			},
		},
	},
	render: (args) => {
		return html`
			<style>
				cosmoz-omnitable {
					min-height: 400px;
				}
			</style>

			<cosmoz-omnitable
				id="omnitable"
				.loading=${args.loading}
				.data=${args.data}
				.selectedItems=${args.selectedItems}
				sort-on=${args['sort-on']}
				group-on=${args['group-on']}
				?descending=${args.descending}
				?group-on-descending=${args['group-on-descending']}
				?hide-select-all=${args['hide-select-all']}
				selection-enabled
			>
				<cosmoz-omnitable-column-boolean
					title=${args.title}
					name=${args.name}
					value-path=${args['value-path']}
					true-label=${args['true-label']}
					false-label=${args['false-label']}
				></cosmoz-omnitable-column-boolean>
			</cosmoz-omnitable>
		`;
	},
};

export default meta;
type Story = StoryObj;

export const WithData: Story = {
	name: 'Demo',
	args: {
		loading: false,
		'sort-on': '',
		'group-on': '',
		descending: false,
		'group-on-descending': false,
	},
};

export const CustomColumn: Story = {
	name: 'Custom Column',
	args: {
		title: 'Status',
		name: 'status',
		'true-label': 'Active',
		'false-label': 'Inactive',
		'value-path': 'boolean',
	},
};

export const Refreshing: Story = {
	name: 'Refreshing state',
	args: {
		loading: true,
	},
};

export const NoData: Story = {
	name: 'Empty data',
	args: {
		data: null,
		'hide-select-all': true,
	},
};

export const SortOnAscending: Story = {
	name: 'Sorted Ascending',
	args: {
		'sort-on': 'boolean',
		descending: false,
	},
};

export const SortOnDescending: Story = {
	name: 'Sorted Descending',
	args: {
		'sort-on': 'boolean',
		descending: true,
	},
};

export const GroupOnAscending: Story = {
	name: 'Grouped Ascending',
	args: {
		'group-on': 'boolean',
		'group-on-descending': false,

		selectedItems: [],
	},
};

export const GroupOnDescending: Story = {
	name: 'Grouped Descending',
	args: {
		'group-on': 'boolean',
		'group-on-descending': true,
	},
};
