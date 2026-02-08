import '@neovici/cosmoz-bottom-bar';

import './cosmoz-omnitable-column';
import './cosmoz-omnitable-columns';
import './cosmoz-omnitable-group-row';
import './cosmoz-omnitable-header-row';
import './cosmoz-omnitable-item-expand';
import './cosmoz-omnitable-item-row';

import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';
import { component } from '@pionjs/pion';
import { html as polymerHtml } from '@polymer/polymer/lib/utils/html-tag';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';

import styles from './cosmoz-omnitable-styles';
import { renderFooter } from './lib/render-footer';
import { renderHeader } from './lib/render-header';
import { renderList } from './lib/render-list';
import { useOmnitable } from './lib/use-omnitable';

import './grouped-list/index';

const shimCSS = (s) => window.ShadyCSS?.ApplyShim?.transformCssText?.(s) || s;

const Omnitable = (host) => {
	const { header, list, footer } = useOmnitable(host);

	return html`
		<style>
			${guard([], () => shimCSS(styles))}
		</style>

		<div class="mainContainer">
			${renderHeader(header)}
			<div class="tableContent" id="tableContent">
				${renderList(header, list)}
			</div>
			${renderFooter(footer)}
		</div>

		<div id="columns">
			<slot id="columnsSlot"></slot>
		</div>
	`;
};

customElements.define(
	'cosmoz-omnitable',
	class extends component(Omnitable, {
		observedAttributes: [
			'hash-param',
			'sort-on',
			'group-on',
			'descending',
			'group-on-descending',
			'hide-select-all',
			'settings-id',
			'no-local',
			'no-local-sort',
			'no-local-filter',
			'loading',
			'mini-breakpoint',
			'auto-width',
			'auto-width-max',
			'auto-width-sample-size',
		],
	}) {
		connectedCallback() {
			super.connectedCallback();
			notifyProperty(this, 'selectedItems', []);
			notifyProperty(this, 'visibleData', []);
			notifyProperty(this, 'sortedFilteredGroupedItems', []);
		}
	},
);

const tmplt = `
	<slot name="actions" slot="actions"></slot>
`;

export const actionSlots = html(Object.assign([tmplt], { raw: [tmplt] })),
	actionSlotsPolymer = polymerHtml(Object.assign([tmplt], { raw: [tmplt] }));
