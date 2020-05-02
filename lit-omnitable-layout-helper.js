import { component, useRef, useCallback, useEffect, useMemo } from "haunted";
import { html } from "lit-html";
import { ref } from './lib/directives/ref.js';
import { useColumnAdjust } from './lib/use-column-adjust.js'

const
	cell = (column, hide) =>
		html`<div
			class="cell"
			data-id="${column}"
			style="${hide ? "display: none" : ""}"
		>&nbsp;</div>`,

	layoutRow = (columns, hiddenColumns) =>
		columns.map((column) =>
			cell(column, hiddenColumns.includes(column))
		),

	LayoutHelper = function ({ config }) {
		const container = useRef();
		const dispatchEvent = useCallback((event) => this.dispatchEvent(event), []);
		const dropConfig = useMemo(
			() =>
				Object.fromEntries(
					Object.entries(config).map(([column, config]) => [
						column,
						{
							dropThreshold: config.dropThreshold || 100,
							priority: config.priority || 0
						}
					])
				),
			[config]
		);

		const { reset, dimensions, hiddenColumns } = useColumnAdjust(
			container,
			dropConfig
		);

		useEffect(reset, [reset, config]);

		useEffect(() => {
			if (Object.keys(dimensions).length === 0) {
				return;
			}
			dispatchEvent(new CustomEvent("layout", { detail: dimensions }));
		}, [dispatchEvent, dimensions]);

		return html`
			<style>
				:host {
					display: block;
					height: 0;
					overflow: hidden;
				}

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
			<div class="row" ref="${ref(container)}">
				${layoutRow(
					Object.keys(config),
					hiddenColumns
				)}
			</div>
		`;
	};

customElements.define("lit-omnitable-layout-helper", component(LayoutHelper));
