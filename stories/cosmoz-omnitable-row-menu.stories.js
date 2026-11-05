import { html } from 'lit-html';
import { action } from 'storybook/actions';
import '../src/cosmoz-omnitable.js';

const data = Array.from({ length: 20 }, (_, i) => ({
		name: `Invoice ${1001 + i}`,
		supplier: ['Acme', 'Globex', 'Initech', 'Umbrella'][i % 4],
		amount: { amount: (i + 1) * 125.5, currency: 'EUR' },
	})),
	// The menu content renders inside the table's shadow root, so it brings
	// its own styles.
	rowMenu = (items) => html`
		<style>
			[role="menuitem"] {
				display: block;
				width: 100%;
				padding: 6px 8px;
				border: 0;
				border-radius: 6px;
				background: none;
				color: inherit;
				font: inherit;
				text-align: start;
				cursor: pointer;
			}
			[role="menuitem"]:is(:hover, :focus-visible) {
				background: var(--cz-color-bg-secondary, #f2f4f7);
				outline: none;
			}
			.label {
				padding: 6px 8px;
				color: var(--cz-color-text-tertiary, #667085);
			}
		</style>
		<div class="label">
			${items.length === 1 ? items[0].name : `${items.length} invoices`}
		</div>
		${['Approve', 'Reject', 'Assign to…'].map(
			(label) =>
				html`<button
					role="menuitem"
					@click=${() => action(label)(items.map((item) => item.name))}
				>
					${label}
				</button>`
		)}
	`;

export default {
	title: 'Components/CosmozOmnitableRowMenu',
	component: 'cosmoz-omnitable',
	parameters: {
		docs: {
			description: {
				component:
					'Set `rowMenu` to `(items) => template` to give each row an action menu. ' +
					'Open it from the "…" button on a row, or by right-clicking the row. ' +
					'A row inside a multi-row selection acts on the whole selection. ' +
					'Clicking a `role="menuitem"` closes the menu (logged in the Actions panel).',
			},
		},
	},
};

export const RowMenu = {
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
		</style>
		<div class="omnitable-container">
			<cosmoz-omnitable .data=${data} .rowMenu=${rowMenu}>
				<cosmoz-omnitable-column
					name="name"
					title="Invoice"
					value-path="name"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					name="supplier"
					title="Supplier"
					value-path="supplier"
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column-amount
					name="amount"
					title="Amount"
					value-path="amount"
				></cosmoz-omnitable-column-amount>
			</cosmoz-omnitable>
		</div>
	`,
};
