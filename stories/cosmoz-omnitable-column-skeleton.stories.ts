import type { Meta, StoryObj } from '@storybook/web-components';
import '../src/cosmoz-omnitable-skeleton.js';
import { html } from 'lit-html';

const meta: Meta = {
	title: 'Components/Cosmoz Omnitable Column Skeleton',
	component: 'cosmoz-omnitable-skeleton',
	tags: ['autodocs'],
	args: {
		settingsConfig: {
			columns: [{ name: 'skeleton', title: 'Skeleton' }],
			collapsed: [],
		},
	},
	argTypes: {
		settingsConfig: {
			control: 'object',
		},
	},
	render: (args) => {
		return html`<style>
				.cell[name="skeleton"], cosmoz-omnitable-skeleton::part(cell-skeleton) {
				width: 649px;
				padding: 0 min(3px, 324.5px);
			</style>

			<cosmoz-omnitable-skeleton
				.settingsConfig=${args.settingsConfig}
			></cosmoz-omnitable-skeleton> `;
	},
};

export default meta;
type Story = StoryObj;

export const SingleSkeleton: Story = {
	name: 'Single Column Skeleton',
};

export const MultipleSkeletons: Story = {
	name: 'Multi-Column Skeleton',
	args: {
		settingsConfig: {
			columns: [
				{ name: 'skeleton', title: 'Skeleton' },
				{ name: 'skeleton', title: 'Skeleton' },
				{ name: 'skeleton', title: 'Skeleton' },
			],
			collapsed: [],
		},
	},
};
