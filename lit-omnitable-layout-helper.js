import { component, useRef, useCallback, useEffect, useMemo } from "haunted";
import { html } from "lit-html";
import { ref } from './lib/directives/ref.js';
import { useColumnAdjust } from './lib/use-column-adjust.js'
import { useDebounceRaf } from "./lib/use-debounce-raf.js";

const
	cellStyle = ({width = '100px', flex = 1}) => `flex: ${flex} 1 ${width}`,

	cell = (column, columnConfig, hide) =>
		html`<div
			class="cell"
			data-id="${column}"
			style="${hide ? "display: none" : cellStyle(columnConfig)}"
		>&nbsp;</div>`,

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
  	const debouncedDimensions = useDebounceRaf(dimensions);

		useEffect(() => {
			if (Object.keys(debouncedDimensions).length === 0) {
				return;
			}
			dispatchEvent(new CustomEvent("layout", { detail: debouncedDimensions }));
		}, [dispatchEvent, debouncedDimensions]);

		return html`
			<style>
				:host {
					display: block;
					height: 0;
					overflow: hidden;
				}

				.row {
					display: flex;
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
