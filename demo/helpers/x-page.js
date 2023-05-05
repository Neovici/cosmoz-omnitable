import '@polymer/paper-dropdown-menu/paper-dropdown-menu-light';
import '@polymer/iron-icons/editor-icons';
import '@polymer/iron-icons/iron-icons';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-toggle-button/paper-toggle-button';
import '@neovici/cosmoz-viewinfo';

import '../../cosmoz-omnitable';
import { generateTableDemoData } from '../table-demo-helper';
import './cosmoz-translations';

import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';
import { translatable } from '@neovici/cosmoz-i18next';

import { html as lit } from 'lit-html';

class XPage extends translatable(PolymerElement) {
	/* eslint-disable-next-line max-lines-per-function */
	static get template() {
		return html`
			<style>
				:host {
					display: block;
					position: relative;
					font-family: sans-serif;
				}
				cosmoz-viewinfo {
					display: flex;
					flex-direction: column;
					position: absolute;
					left: 0;
					right: 0;
					top: 0;
					bottom: 0;
				}
				cosmoz-omnitable {
					flex: auto;
				}
				.action {
					padding: 5px;
					margin: 5px 5px 10px 5px;
				}
			</style>

			<cosmoz-viewinfo>
				<h3>Cosmoz omnitable demo</h3>

				<cosmoz-translations locale="[[ locale ]]"></cosmoz-translations>
				<div style="display: flex; align-items: center">
					<button class="action" on-tap="changeData">
						Generate a new data set
					</button>
					<button class="action" on-tap="changeSmallData">
						Generate a new small data set
					</button>
					<button class="action" on-tap="emptyData">
						Generate an empty data set
					</button>
					<div class="action">
						Selected items count: <span>[[ selectedItems.length ]]</span>
					</div>
					<div class="action">
						<paper-dropdown-menu label="Locale" no-animations>
							<paper-listbox
								class="dropdown-content"
								slot="dropdown-content"
								selected="{{ locale }}"
								attr-for-selected="value"
							>
								<paper-item value="en">en</paper-item>
								<paper-item value="fr">fr</paper-item>
								<paper-item value="sv">sv</paper-item>
							</paper-listbox>
						</paper-dropdown-menu>
					</div>

					<paper-toggle-button checked="{{ loading }}">
						Loading</paper-toggle-button
					>
					<br />
					<paper-toggle-button checked="{{minitable}}"
						>Activate Minitable</paper-toggle-button
					>
				</div>

				<cosmoz-omnitable
					loading="[[ loading ]]"
					id="omnitable"
					data="[[ data ]]"
					selection-enabled
					selected-items="{{ selectedItems }}"
					hash-param="[[ hashParam ]]"
					settings-id="test"
					minitable-view="[[ renderMinitable ]]"
				>
					<cosmoz-omnitable-column-minitable
						title="Minified view"
						name="minitable"
						value-path="minitable"
						render-cell="[[ renderCell ]]"
					></cosmoz-omnitable-column-minitable>
					<cosmoz-omnitable-column
						priority="-1"
						title="Name"
						name="name"
						value-path="name"
						flex="2"
						render-cell="[[ renderNameCell ]]"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-amount
						title="[[ _('Amount', t) ]]"
						name="amount"
						value-path="amount"
						locale="[[ locale ]]"
						rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
					>
					</cosmoz-omnitable-column-amount>
					<cosmoz-omnitable-column-date
						title="Date"
						name="date"
						value-path="date"
						locale="[[ locale ]]"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-autocomplete
						flex="0"
						width="40px"
						title="Id"
						name="id"
						value-path="id"
						render-cell="[[ renderIdCell ]]"
					>
					</cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column-boolean
						title="Boolean"
						name="bool"
						value-path="bool"
						true-label="Yes"
						false-label="No"
					>
					</cosmoz-omnitable-column-boolean>
					<cosmoz-omnitable-column-autocomplete
						title="[[ _('Group', t) ]]"
						name="group"
						value-path="group"
						flex="0"
						width="125px"
					>
					</cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column-autocomplete
						title="[[ _('Object', t) ]]"
						name="object"
						value-path="object"
						value-property="value"
						text-property="label"
						flex="0"
						width="125px"
						empty-label="None"
						empty-value="nada"
					>
					</cosmoz-omnitable-column-autocomplete>
					<cosmoz-omnitable-column-date
						title="DateJSON"
						name="datejson"
						value-path="dateJSON"
						sort-on="dateJSON"
						group-on="dateJSON"
						locale="{{ locale }}"
					>
					</cosmoz-omnitable-column-date>
					<cosmoz-omnitable-column-time
						title="Time"
						name="time"
						value-path="date"
						sort-on="date"
						group-on="date"
						locale="{{ locale }}"
					>
					</cosmoz-omnitable-column-time>
					<cosmoz-omnitable-column-datetime
						title="Datetime"
						name="datetime"
						value-path="date"
						sort-on="date"
						group-on="date"
						locale="{{ locale }}"
					>
					</cosmoz-omnitable-column-datetime>
					<cosmoz-omnitable-column-list
						title="List"
						name="list"
						value-path="list"
					>
					</cosmoz-omnitable-column-list>
					<cosmoz-omnitable-column-list-horizontal
						title="Object list"
						name="objectList"
						value-path="objectList"
						value-property="value"
						text-property="name"
					>
					</cosmoz-omnitable-column-list-horizontal>
					<cosmoz-omnitable-column
						priority="3"
						title="Sub-property"
						name="sub-property"
						value-path="sub.subProp"
						sort-on="sub.subProp"
						group-on="sub.subProp"
						flex="5"
						width="200px"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column
						priority="3"
						title="Custom template"
						name="custom-name"
						value-path="name"
						sort-on="name"
						width="130px"
						flex="2"
						render-cell="[[ renderCustomNameCell ]]"
					>
					</cosmoz-omnitable-column>
					<cosmoz-omnitable-column-number
						title="Value"
						name="value"
						value-path="value"
						locale="[[ locale ]]"
						priority="1"
					>
					</cosmoz-omnitable-column-number>

					<template
						is="dom-repeat"
						items="[[ _getRowItems(selectedItems.length) ]]"
					>
						<paper-button slot="actions">[[ item ]]</paper-button>
					</template>

					<paper-button slot="actions" on-run="removeItems">
						<iron-icon icon="delete"></iron-icon>
						<span>Remove [[ selectedItems.length ]] items</span>
					</paper-button>
					<paper-item slot="actions"
						><paper-button> bigger bigger button 5 </paper-button></paper-item
					>
					<paper-item slot="actions"
						><paper-button>
							bigger bigger bigger button 6
						</paper-button></paper-item
					>
				</cosmoz-omnitable>
			</cosmoz-viewinfo>
		`;
	}

	static get is() {
		return 'x-page';
	}
	static get properties() {
		return {
			data: {
				type: Array,
			},
			selectedItems: {
				type: Array,
			},
			locale: {
				type: String,
				value: 'sv',
			},
			hashParam: {
				type: String,
			},
		};
	}

	constructor() {
		super();
		this.renderIdCell = this.renderIdCell.bind(this);
		this.renderCustomNameCell = this.renderCustomNameCell.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();
		const data = generateTableDemoData(10, 11, 25);
		// Used to test filtering and sorting when a row has an undefined or null amount or number
		data[0].amount = undefined;
		data[1].value = undefined;
		data[2].amount = null;
		data[3].value = null;
		window.setTimeout(() => {
			this.data = data;
		}, 100);
	}

	changeData() {
		this.data = generateTableDemoData(10, 11, 10);
	}

	changeSmallData() {
		this.data = generateTableDemoData(2, 2, 10);
	}

	emptyData() {
		this.data = [];
	}

	removeItems(event, detail) {
		console.log('runAction', detail.items, event, detail, detail.items);
		detail.omnitable.removeItems(detail.items);
	}

	onTap(event) {
		console.log('onTap', event);
	}

	_getItemLink(item) {
		return '#!/purchase/suppliers/view?id=' + item.id;
	}

	_getRowItems(numSelected) {
		return new Array(numSelected).fill(undefined).map((none, i) => {
			return 'action ' + (i + 1);
		});
	}

	renderNameCell(column, { item }) {
		return lit`<a href="#!/purchase/suppliers/view?id=${item.id}">${item.name}</a>`;
	}

	renderIdCell(column, { item }) {
		return lit`<span @click=${this.onTap}>
			<a href=${this._getItemLink(item)}>${item.id}</a>
		</span>`;
	}

	renderCustomNameCell(column, { item }) {
		return lit`<span style="background: red;" @click=${this.onTap}>${item.name}</span>`;
	}
}
customElements.define(XPage.is, XPage);
