/* eslint-disable object-curly-newline */
import { component, useEffect } from '@pionjs/pion';
import { html, nothing } from 'lit-html';
import './cosmoz-omnitable-item-expand-line';

const renderExpandList = ({
		columns,
		item,
		selected,
		expanded,
		groupOnColumn,
	}) =>
		columns.map(
			(column) => html`<cosmoz-omnitable-item-expand-line
				.column=${column}
				?hidden=${column === groupOnColumn}
				exportparts="item-expand-label,item-expand-value"
				>${column.renderCell(column, {
					item,
					selected,
					expanded,
				})}</cosmoz-omnitable-item-expand-line
			>`
		),
	ExpandList = (host) => {
		const { columns } = host;

		useEffect(() => {
			if (columns?.length > 0) {
				return;
			}

			host.setAttribute('hidden', '');
			return () => host.removeAttribute('hidden');
		}, [columns?.length]);

		return Array.isArray(columns) && columns.length > 0 && host.expanded
			? renderExpandList(host)
			: nothing;
	};

customElements.define(
	'cosmoz-omnitable-item-expand',
	component(ExpandList, {
		useShadowDOM: false,
		observedAttributes: ['expanded'],
	})
);
