import {
	component,
	html,
	useState,
	useCallback,
	useMemo
} from 'haunted';
import {
	useGroupFilterSort
} from './lib/use-group-filter-sort';
import { scroll } from 'lit-virtualizer';
import { style } from './lit-omnitable.style.js';
import './lit-omnitable-layout-helper.js';
import { nothing } from 'lit-html';

const
	cellStyle = width => width > 0 ? `width: ${width}px;` : 'display: none;',

	layoutStyle = (layout = {}) =>
		Object.entries(layout).map(([column, width]) => `
			.header > .cell[data-column="${column}"],
			.content > .row > .cell[data-column="${column}"] {
				${cellStyle(width)}
			}
		`),

	defaultHeaderRenderer = (column, config) => config.label,

	headerCell = (column, config) => {
		const renderer = config.headerRenderer || defaultHeaderRenderer;
		return html`<div class="cell" data-column="${column}">${
			renderer(column, config)
		}</div>`;
	},

	cell = item => ([column]) =>
		html`<div class="cell" data-column="${column}">${item[column]}</div>`,

	row = (item, config) =>
		html`<div class="row">${Object.entries(config).map(cell(item))}</div>`,

	// eslint-disable-next-line max-lines-per-function
	Omnitable = function ({
		data, config, filters
	}) {
		const {
			visibleItems,
			configError
		} = useGroupFilterSort({
			config,
			items: data,
			filters
		});

		if (configError) {
			return html`<p>${configError}</p>`;
		}

		const
			columns = Object.keys(config),

			// BUG: lit-virtualizer does not support changing renderItem at runtime (https://github.com/PolymerLabs/uni-virtualizer/issues/34)
			// this means that config changes will be ignored
			renderItem = useCallback(item => row(item, config), [config]),
			[layout, setLayout] = useState(undefined),
			onLayout = useCallback(event => setLayout(event.detail), []),
			lStyle = useMemo(() => layoutStyle(layout), [layout]);

		/* eslint-disable indent */
		return html`
			<style>
				${style}
				${lStyle}
			</style>
			<div>visibleItems: ${visibleItems.length}</div>
			<div class="header">
				${layout == null ? nothing : columns.map(column => headerCell(column, config[column]))}
			</div>
			<div class="content">
				<lit-omnitable-layout-helper
					.config="${config}"
					@layout="${onLayout}"
				></lit-omnitable-layout-helper>
				${layout == null
					? nothing
					: scroll({
							items: visibleItems,
							renderItem
						})}
			</div>
		`;
	};

customElements.define('lit-omnitable', component(Omnitable));
