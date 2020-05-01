/* eslint-disable one-var */
import {
	component, useRef
} from 'haunted';
import {
	directive, html
} from 'lit-html';

// eslint-disable-next-line no-return-assign
const ref = directive(ref => part => ref.current = part.committer.element);

const
	hiddenColumns = [],
	cell = item => ([column]) =>
		html`<div class="cell" data-column="${column}">${ item[column] }</div>`,

	layoutRow = (config, hiddenColumns) => item =>
		Object.entries(config)
			.filter(([column]) => !hiddenColumns.includes(column))
			.map(cell(item)),

	LayoutHelper = function ({ config, data }) {
		const layouter = useRef();
		return html`
			<style>
				.row {
					display: flex;
					background: red;
				}

				.row > .cell {
					flex: 1;
					flex-basis: 125px;
				}

				.cell:first-child {
					flex-basis: 300px;
				}
			</style>
			<div class="row" ref="${ ref(layouter)}">${
				layoutRow(config, hiddenColumns)(data)
			}</div>
		`;
	};

customElements.define('lit-omnitable-layout-helper', component(LayoutHelper));
