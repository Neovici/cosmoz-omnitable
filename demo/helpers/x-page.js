import '@neovici/cosmoz-utils/elements/cz-spinner';
import '@neovici/cosmoz-viewinfo';

import '../../src/cosmoz-omnitable';
import '../cosmoz-omnitable-icon';

import { component, html, useCallback, useEffect, useHost, useMemo, useState } from '@pionjs/pion';
import i18next, { t } from 'i18next';
import { ensureDemoI18nInitialized, setDemoLanguage } from './i18n';
import { generateTableDemoData } from '../table-demo-helper';

const style = html`
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
		.toolbar {
			display: flex;
			align-items: center;
			gap: 8px;
			flex-wrap: wrap;
		}
		.action {
			padding: 5px;
			margin: 5px 5px 10px 5px;
		}
	</style>
`;

const XPage = () => {
	const host = useHost();
	const [data, setData] = useState([]);
	const [selectedItems, setSelectedItems] = useState([]);
	const [locale, setLocale] = useState('en');
	const [activeLocale, setActiveLocale] = useState('en');
	const [ready, setReady] = useState(false);
	const [loading, setLoading] = useState(false);
	const [hidden, setHidden] = useState(false);
	const hashParam = useMemo(() => host.getAttribute('hash-param') || undefined, [host]);

	useEffect(() => {
		void ensureDemoI18nInitialized()
			.then(() => setDemoLanguage('en'))
			.then((language) => {
				setLocale(language || 'en');
				setActiveLocale(language || 'en');
				setReady(true);
			});

		return undefined;
	}, []);

	const onLocaleChange = useCallback((event) => {
		const nextLocale = event.target.value;
		setLocale(nextLocale);
		void setDemoLanguage(nextLocale).then((language) => {
			setActiveLocale(language || i18next.language || nextLocale);
		});
	}, []);

	useEffect(() => {
		const nextData = generateTableDemoData(10, 11, 25);
		nextData[0].amount = undefined;
		nextData[1].value = undefined;
		nextData[2].amount = null;
		nextData[3].value = null;

		const timeout = window.setTimeout(() => {
			setData(nextData);
		}, 100);

		return () => window.clearTimeout(timeout);
	}, []);

	const renderNameCell = useCallback(
		(_column, { item }) =>
			html`<a href="#\!/purchase/suppliers/view?id=${item.id}">${item.name}</a>`,
		[],
	);

	const onTap = useCallback((event) => {
		console.log('onTap', event);
	}, []);

	const renderIdCell = useCallback(
		(_column, { item }) =>
			html`<span @click=${onTap}>
				<a href=${`#!/purchase/suppliers/view?id=${item.id}`}>${item.id}</a>
			</span>`,
		[onTap],
	);

	const renderCustomNameCell = useCallback(
		(_column, { item }) =>
			html`<span style="background: red;" @click=${onTap}>${item.name}</span>`,
		[onTap],
	);

	const rowItems = useMemo(
		() => new Array(selectedItems.length).fill(undefined).map((_, i) => `action ${i + 1}`),
		[selectedItems.length],
	);

	if (!ready) {
		return html`${style}<div class="action">Initializing translations...</div>`;
	}

	return html`
		<span style="display: none;">${activeLocale}</span>
		${style}
		<cosmoz-viewinfo>
			<h3>Cosmoz omnitable demo</h3>

			<div class="toolbar">
				<button class="action" @click=${() => setData(generateTableDemoData(10, 11, 10))}>
					Generate a new data set
				</button>
				<button class="action" @click=${() => setData(generateTableDemoData(2, 2, 10))}>
					Generate a new small data set
				</button>
				<button class="action" @click=${() => setData([])}>
					Generate an empty data set
				</button>
				<div class="action">Selected items count: <span>${selectedItems.length}</span></div>
				<label class="action">
					Locale
					<select
						?disabled=${!ready}
						.value=${locale}
						@change=${onLocaleChange}
					>
						<option value="en">en</option>
						<option value="fr">fr</option>
						<option value="sv">sv</option>
					</select>
				</label>
				<label class="action">
					<input
						type="checkbox"
						?checked=${loading}
						@change=${(event) => setLoading(event.target.checked)}
					/>
					Loading
				</label>
				<label class="action">
					<input
						type="checkbox"
						?checked=${hidden}
						@change=${(event) => setHidden(event.target.checked)}
					/>
					Hide Sub-property column
				</label>
				<button
					class="action"
					@click=${() => host.renderRoot?.querySelector('#omnitable')?.appendChild(document.createElement('span'))}
				>
					Add something to the slot
				</button>
			</div>

			<cosmoz-omnitable
				id="omnitable"
				?loading=${loading}
				.data=${data}
				selection-enabled
				.selectedItems=${selectedItems}
				.hashParam=${hashParam}
				settings-id="test"
				@selected-items-changed=${(event) => setSelectedItems(event.detail.value || [])}
				@visible-data-changed=${(event) => console.log('visible data changed', event)}
			>
				<cosmoz-omnitable-column
					priority="-1"
					title="Name"
					name="name"
					value-path="name"
					flex="2"
					.renderCell=${renderNameCell}
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column-amount
					title=${t('Amount')}
					name="amount"
					value-path="amount"
					.locale=${locale}
					rates='{"EUR": 1, "USD":0.8169982616, "AUD":0.6529827192, "SEK": 0.1019271438}'
				></cosmoz-omnitable-column-amount>
				<cosmoz-omnitable-column-date
					title="Date"
					name="date"
					value-path="date"
					.locale=${locale}
				></cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-autocomplete
					flex="0"
					width="40px"
					title="Id"
					name="id"
					value-path="id"
					.renderCell=${renderIdCell}
				></cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column-boolean
					title="Boolean"
					name="bool"
					value-path="bool"
					true-label="Yes"
					false-label="No"
				></cosmoz-omnitable-column-boolean>
				<cosmoz-omnitable-column-autocomplete
					title=${t('Group')}
					name="group"
					value-path="group"
					flex="0"
					width="125px"
				></cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column-autocomplete
					title=${t('Object')}
					name="object"
					value-path="object"
					value-property="value"
					text-property="label"
					flex="0"
					width="125px"
					empty-label="None"
					empty-value="nada"
				></cosmoz-omnitable-column-autocomplete>
				<cosmoz-omnitable-column-date
					title="DateJSON"
					name="datejson"
					value-path="dateJSON"
					sort-on="dateJSON"
					group-on="dateJSON"
					.locale=${locale}
				></cosmoz-omnitable-column-date>
				<cosmoz-omnitable-column-time
					title="Time"
					name="time"
					value-path="date"
					sort-on="date"
					group-on="date"
					.locale=${locale}
				></cosmoz-omnitable-column-time>
				<cosmoz-omnitable-column-datetime
					title="Datetime"
					name="datetime"
					value-path="date"
					sort-on="date"
					group-on="date"
					.locale=${locale}
				></cosmoz-omnitable-column-datetime>
				<cosmoz-omnitable-column-list title="List" name="list" value-path="list"></cosmoz-omnitable-column-list>
				<cosmoz-omnitable-column-list-horizontal
					title="Object list"
					name="objectList"
					value-path="objectList"
					value-property="value"
					text-property="name"
				></cosmoz-omnitable-column-list-horizontal>
				<cosmoz-omnitable-column
					priority="3"
					title="Sub-property"
					name="sub-property"
					value-path="sub.subProp"
					sort-on="sub.subProp"
					group-on="sub.subProp"
					flex="5"
					width="200px"
					?disabled=${hidden}
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column
					priority="3"
					title="Custom template"
					name="custom-name"
					value-path="name"
					sort-on="name"
					width="130px"
					flex="2"
					.renderCell=${renderCustomNameCell}
				></cosmoz-omnitable-column>
				<cosmoz-omnitable-column-number
					title="Value"
					name="value"
					value-path="value"
					.locale=${locale}
					priority="1"
				></cosmoz-omnitable-column-number>

				${rowItems.map((item) => html`<button slot="actions" type="button">${item}</button>`)}
				<button
					slot="actions"
					type="button"
					@click=${() => host.renderRoot?.querySelector('#omnitable')?.removeItems(selectedItems)}
				>
					<cosmoz-omnitable-icon icon="delete"></cosmoz-omnitable-icon>
					<span>Remove ${selectedItems.length} items</span>
				</button>
			</cosmoz-omnitable>
		</cosmoz-viewinfo>
	`;
};

customElements.define('x-page', component(XPage, { useShadowDOM: false }));
