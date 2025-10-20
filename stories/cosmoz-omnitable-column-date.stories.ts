import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-omnitable.js';
import dummyData from './dummyData.json';

const meta: Meta = {
	title: 'Components/Cosmoz Omnitable Column Date',
	component: 'cosmoz-omnitable',
	tags: ['autodocs'],
	subcomponents: {
		'Cosmoz Omnitable Column': 'cosmoz-omnitable-column-date',
	},
	args: {
		data: dummyData.slice(0, 5),
		loading: false,
		title: 'Date',
		name: 'date',
		'value-path': 'date',
		locale: 'en',
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
			description: 'Column property name to sort on (e.g., "date")',
			table: {
				readonly: true,
			},
		},
		'group-on': {
			control: 'text',
			description: 'Column property name to group on (e.g., "date")',
			table: {
				readonly: true,
			},
		},
		descending: {
			control: 'boolean',
			description: 'Sort on descending',
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
			description: 'Title for the date column',
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
		locale: {
			control: 'select',
			options: ['en', 'fr', 'sv'],
			description: 'Language locale',
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
				<cosmoz-omnitable-column-date
					title=${args.title}
					name=${args.name}
					value-path=${args['value-path']}
				></cosmoz-omnitable-column-date>
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

export const LocaleControl: Story = {
	name: 'Demo French Locale',
	args: {
		locale: 'fr',
	},
};

export const CustomColumn: Story = {
	name: 'Date JSON',
	args: {
		title: 'DateJSON',
		name: 'datejson',
		'value-path': 'dateJSON',
	},
};

export const Refreshing: Story = {
	name: 'Refreshing state',
	args: {
		loading: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Component in refreshing state with spinner animation',
			},
		},
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
		'sort-on': 'date',
		descending: false,
	},
};

export const SortOnDescending: Story = {
	name: 'Sorted Descending',
	args: {
		'sort-on': 'date',
		descending: true,
	},
};

export const GroupOnAscending: Story = {
	name: 'Grouped Ascending',
	args: {
		'group-on': 'date',
		'group-on-descending': false,

		selectedItems: [],
	},
};

export const GroupOnDescending: Story = {
	name: 'Grouped Descending',
	args: {
		'group-on': 'date',
		'group-on-descending': true,
	},
};
