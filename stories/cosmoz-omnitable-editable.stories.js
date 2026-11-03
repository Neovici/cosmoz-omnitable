import { html } from 'lit-html';
import { action } from 'storybook/actions';
import '../src/cosmoz-omnitable.js';

const generateData = () =>
	Array.from({ length: 10 }, (_, i) => ({
		name: `Item ${i + 1}`,
		quantity: (i + 1) * 3,
		price: { amount: (i + 1) * 12.5, currency: ['EUR', 'USD', 'SEK'][i % 3] },
		approved: i % 2 === 0,
	}));

export default {
	title: 'Components/CosmozOmnitableEditable',
	component: 'cosmoz-omnitable',
	parameters: {
		docs: {
			description: {
				component:
					'Columns with the `editable` attribute render inputs instead of plain text. ' +
					'Edits update the item in place and fire a `column-item-changed` event (logged in the Actions panel).',
			},
		},
	},
};

export const Editable = {
	render: () => html`
		<style>
			.omnitable-container {
				height: calc(80vh - 60px);
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
				.data=${generateData()}
				@column-item-changed=${(e) => action('column-item-changed')(e.detail)}
			>
				<cosmoz-omnitable-column
					name="name"
					title="Name"
					value-path="name"
					editable
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column-number
					name="quantity"
					title="Quantity"
					value-path="quantity"
					editable
				></cosmoz-omnitable-column-number>
				<cosmoz-omnitable-column-amount
					name="price"
					title="Price"
					value-path="price"
					editable
				></cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column-boolean
					name="approved"
					title="Approved"
					value-path="approved"
					true-label="Yes"
					false-label="No"
					editable
				></cosmoz-omnitable-column-boolean>
			</cosmoz-omnitable>
		</div>
	`,
};
