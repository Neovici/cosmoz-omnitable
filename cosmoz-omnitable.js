/* eslint-disable max-lines-per-function */
/* eslint-disable max-lines */
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icon/iron-icon';
import '@polymer/paper-spinner/paper-spinner-lite';

import '@neovici/cosmoz-grouped-list';
import '@neovici/cosmoz-bottom-bar';

import './cosmoz-omnitable-column';
import './cosmoz-omnitable-header-row';
import './cosmoz-omnitable-item-row';
import './cosmoz-omnitable-item-expand';
import './cosmoz-omnitable-group-row';
import './cosmoz-omnitable-columns';
import styles from './cosmoz-omnitable-styles';

import { html as polymerHtml } from '@polymer/polymer/lib/utils/html-tag';
import { html } from 'lit-html';
import { guard } from 'lit-html/directives/guard.js';

import { useOmnitable } from './lib/use-omnitable';
import { component } from '@pionjs/pion';
import { renderHeader } from './lib/render-header';
import { renderFooter } from './lib/render-footer';
import { renderList } from './lib/render-list';
import { notifyProperty } from '@neovici/cosmoz-utils/hooks/use-notify-property';

const shimCSS = (s) => window.ShadyCSS?.ApplyShim?.transformCssText?.(s) || s;

const Omnitable = (host) => {
	const { header, list, footer } = useOmnitable(host);

	return html`
		<style>
			${guard([], () => shimCSS(styles))}
		</style>

		<div class="mainContainer">
			${renderHeader(header)}
			<div class="tableContent" id="tableContent">${renderList(list)}</div>
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
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;

export const actionSlots = html(Object.assign([tmplt], { raw: [tmplt] })),
	actionSlotsPolymer = polymerHtml(Object.assign([tmplt], { raw: [tmplt] }));
