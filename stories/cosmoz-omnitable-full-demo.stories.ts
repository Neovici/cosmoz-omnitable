import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';

import { deleteIcon } from '@neovici/cosmoz-icons';
import '@neovici/cosmoz-utils/elements/cz-spinner';
import '../src/cosmoz-omnitable.js';

import { generateTableDemoData } from '../demo/table-demo-helper.js';

const meta: Meta = {
	title: 'Components/ComsmozOmnitableFullDemo',
	component: 'cosmoz-omnitable',
	tags: ['autodocs'],
	args: {
		loading: false,
		locale: 'en',
		sortOn: '',
		groupOn: '',
		descending: false,
		groupOnDescending: false,
		hashParam: '',
		settingsId: '',
		selectedItems: [],
		disabled: false,
		autoWidth: true,
		autoWidthMax: 420,
		autoWidthSampleSize: 25,
	},
	argTypes: {
		loading: {
			control: 'boolean',
			description: 'Show loading state',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		locale: {
			control: 'select',
			options: ['en', 'fr', 'sv'],
			description: 'Language locale',
			table: {
				defaultValue: { summary: 'en' },
			},
		},
		selectedItems: {
			control: 'object',
			description: 'Show selected items',
		},
		data: {
			control: 'object',
			description: 'Show specified items',
		},
		sortOn: {
			control: 'text',
			description:
				'Column property name to sort on (e.g., "amount", "date", "id")',
		},
		groupOn: {
			control: 'text',
			description:
				'Column property name to group on (e.g., "amount", "date", "id")',
		},
		descending: {
			control: 'boolean',
			description: 'Sort on descending',
		},
		groupOnDescending: {
			control: 'boolean',
			description: 'Group on descending',
		},
		hashParam: {
			control: 'text',
			description: 'Hash parameter for URL state management',
		},
		settingsId: {
			control: 'text',
			description: 'ID for storing table settings',
		},
		autoWidth: {
			control: 'boolean',
			description: 'Enable automatic column widths',
		},
		autoWidthMax: {
			control: 'number',
			description: 'Maximum auto width per column',
		},
		autoWidthSampleSize: {
			control: 'number',
			description: 'Number of rows to sample for auto width',
		},
		disabled: {
			control: 'boolean',
			description: 'Hide one column',
			table: {
				defaultValue: { summary: 'false' },
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
				hash-param=${args.hashParam}
				sort-on=${args.sortOn}
				group-on=${args.groupOn}
				.descending=${args.descending}
				.group-on-descending=${args.groupOnDescending}
				settings-id=${args.settingsId}
				?auto-width=${args.autoWidth}
				auto-width-max=${args.autoWidthMax}
				auto-width-sample-size=${args.autoWidthSampleSize}
			>
				<cosmoz-omnitable-column
					priority="-1"
					title="Name"
					name="name"
					value-path="name"
					flex="2"
				>
				</cosmoz-omnitable-column>

				<cosmoz-omnitable-column-amount
					title="Amount"
					name="amount"
					value-path="amount"
					locale=${args.locale}
					rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
				></cosmoz-omnitable-column-amount>

				<cosmoz-omnitable-column-date
					title="Date"
					name="date"
					value-path="date"
					locale=${args.locale}
				></cosmoz-omnitable-column-date>

				<cosmoz-omnitable-column-autocomplete
					flex="0"
					width="40px"
					title="Id"
					name="id"
					value-path="id"
				></cosmoz-omnitable-column-autocomplete>

				<cosmoz-omnitable-column-boolean
					title="Boolean"
					name="bool"
					value-path="bool"
					true-label="Yes"
					false-label="No"
				></cosmoz-omnitable-column-boolean>

				<cosmoz-omnitable-column-autocomplete
					title="Group"
					name="group"
					value-path="group"
					flex="0"
					width="125px"
				></cosmoz-omnitable-column-autocomplete>

				<cosmoz-omnitable-column-autocomplete
					title="Object"
					name="object"
					value-path="object"
					value-property="value"
					text-property="label"
					flex="0"
					width="125px"
					empty-label="None"
					empty-value="nada"
				></cosmoz-omnitable-column-autocomplete>

				<cosmoz-omnitable-column-date
					title="DateJSON"
					name="datejson"
					value-path="dateJSON"
					locale=${args.locale}
				></cosmoz-omnitable-column-date>

				<cosmoz-omnitable-column-time
					title="Time"
					name="time"
					value-path="date"
					locale=${args.locale}
				></cosmoz-omnitable-column-time>

				<cosmoz-omnitable-column-datetime
					title="Datetime"
					name="datetime"
					value-path="date"
					locale=${args.locale}
				></cosmoz-omnitable-column-datetime>

				<cosmoz-omnitable-column-list
					title="List"
					name="list"
					value-path="list"
				></cosmoz-omnitable-column-list>

				<cosmoz-omnitable-column-list-horizontal
					title="Object list"
					name="objectList"
					value-path="objectList"
					value-property="value"
					text-property="name"
				></cosmoz-omnitable-column-list-horizontal>

				<cosmoz-omnitable-column
					title="Sub-property"
					name="sub-property"
					value-path="sub.subProp"
				></cosmoz-omnitable-column>

				<cosmoz-omnitable-column
					title="Custom template"
					name="custom-name"
					value-path="name"
				></cosmoz-omnitable-column>

				<cosmoz-omnitable-column-number
					title="Value"
					name="value"
					value-path="value"
					locale=${args.locale}
					priority="1"
				></cosmoz-omnitable-column-number>

				<paper-button slot="actions" on-run="removeItems">
					${deleteIcon({
						styles: 'vertical-align: middle; fill: currentColor;',
					})}
					<span>Remove items</span>
				</paper-button>
			</cosmoz-omnitable>
		`;
	},
};

export default meta;
type Story = StoryObj;

export const TableWithLargeData: Story = {
	args: {
		data: generateTableDemoData(10, 10, 10),
	},
};

export const TableWithSmallData: Story = {
	args: {
		data: generateTableDemoData(2, 2, 10),
	},
};

export const TableWithNoData: Story = {
	args: {
		data: [],
	},
};
