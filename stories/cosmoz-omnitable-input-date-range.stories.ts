import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit-html';
import { fn } from 'storybook/test';

const meta: Meta = {
	title: 'Components/Cosmoz Omnitable Input Date Range',
	component: 'cosmoz-omnitable',
	tags: ['autodocs'],
	args: {
		title: 'Date',
		locale: 'en',
		'filter-changed': fn(),
		'header-focused-changed': fn(),
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Column header title displayed in the table',
		},
		min: {
			control: 'text',
			description: 'Earliest date that can be selected in the filter',
		},
		max: {
			control: 'text',
			description: 'Latest date that can be selected in the filter',
		},
		filter: {
			control: 'object',
			description:
				'Current filter values with min (From date) and max (To date) properties',
		},
		locale: {
			control: 'select',
			options: ['en', 'fr', 'sv'],
			description: 'Language locale',
		},
		'filter-changed': {
			description: 'Event fired when the date range filter values change.',
		},
		'header-focused-changed': {
			description: 'Event fired when the column header gains or loses focus.',
		},
	},

	render: (args) => {
		return html`
			<cosmoz-omnitable-date-range-input
				.title=${args.title}
			></cosmoz-omnitable-date-range-input>
		`;
	},
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {};

export const WithConstraints: Story = {
	name: 'Constrained Range',
	args: {
		min: '10/10/2025',
		max: '10/16/2025',
	},
};

export const WithFilter: Story = {
	name: 'Filtered Range',
	args: {
		filter: {
			min: '10/22/2024',
			max: '10/16/2025',
		},
	},
};

export const WithFilterLocalized: Story = {
	name: 'Filtered Range Localized',
	args: {
		filter: {
			min: '10/22/2024',
			max: '10/16/2025',
		},
		locale: 'fr',
	},
};
