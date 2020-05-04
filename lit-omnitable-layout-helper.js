import { component, useRef, useCallback, useEffect, useMemo } from "haunted";
import { html } from "lit-html";
import { ref } from './lib/directives/ref.js';
import { useColumnAdjust } from './lib/use-column-adjust.js'

const
	cellStyle = ({width = '100px', flex = 1}) => `flex: ${flex} 1 ${width}`,

	cell = (column, columnConfig, hide) =>
		html`<div
			class="cell"
			data-id="${column}"
			style="${hide ? "display: none" : cellStyle(columnConfig)}"
		>&nbsp;xxx</div>`,

	layoutRow = (config, hiddenColumns) =>
		Object.entries(config).map(([column, columnConfig]) =>
			cell(column, columnConfig, hiddenColumns.includes(column))
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
							dropThreshold: config.dropThreshold || config.width || 100,
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
					/* height: 0;
					overflow: hidden; */
				}

				.row {
					display: flex;
					background: red;
				}
			</style>
			<div class="row" ref="${ref(container)}">
				${layoutRow(
					config,
					hiddenColumns
				)}
			</div>
		`;
	};

customElements.define("lit-omnitable-layout-helper", component(LayoutHelper));
