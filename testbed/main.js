// cosmoz-omnitable perf testbed.
// Serves the cosmoz-omnitable sources from this checkout (v19.5.3 worktree).
// Config via URL params: ?rows=10000&seed=42&supplier=1&status=1&link=1&plain=47

import i18next from 'i18next';
import { html, render } from 'lit-html';
import '../src/cosmoz-omnitable.js';
import './cz-link.js';
import { czStatus } from './cz-status.js';
import { supplierLogo } from './cz-supplier-logo.js';
import { STATUSES, columnPlan, makeRows, suppliers } from './data.js';

i18next.init({ lng: 'en', resources: {} });

const params = new URLSearchParams(window.location.search),
	numParam = (name, def) => {
		const raw = params.get(name);
		const n = raw == null ? NaN : Number(raw);
		return Number.isFinite(n) ? n : def;
	},
	cfg = {
		rows: numParam('rows', 10000),
		seed: numParam('seed', 42),
		supplier: numParam('supplier', 1),
		status: numParam('status', 1),
		link: numParam('link', 1),
		plain: numParam('plain', 47),
	};
const total = cfg.plain + cfg.supplier + cfg.status + cfg.link;

// --- custom cell renderers (mirrors of purchase-invoices list-core cells) ---

const supplierCell = (column, { item }) =>
	supplierLogo(
		item,
		html`<cz-link view="purchase/suppliers/view" param-id=${item.supplier?.id}
			>${item.supplier?.name}</cz-link
		>`,
	);

const statusCell = (column, { item }) => czStatus({ status: item?.status });

const invoiceNumberCell = (column, { item }) =>
	html`<cz-link view="purchase/invoices/view" param-id=${item.id}
		>${item.invoiceNumber}</cz-link
	>`;

// --- column templates ---

const colTemplates = [];

// The "supplier" column: autocomplete column + supplier logo cell.
for (let i = 0; i < cfg.supplier; i++) {
	colTemplates.push(
		html`<cosmoz-omnitable-column-autocomplete
			name=${`supplier${i || ''}`}
			title=${cfg.supplier > 1 ? `Supplier ${i + 1}` : 'Supplier'}
			flex="2"
			width="180px"
			overflow
			value-path="supplier"
			text-property="name"
			value-property="id"
			.values=${suppliers}
			.renderCell=${supplierCell}
		></cosmoz-omnitable-column-autocomplete>`,
	);
}

// The "invoice number" column: plain column + link cell.
for (let i = 0; i < cfg.link; i++) {
	colTemplates.push(
		html`<cosmoz-omnitable-column
			name=${`invoiceNumber${i || ''}`}
			title=${cfg.link > 1 ? `Invoice ${i + 1}` : 'Invoice'}
			width="140px"
			overflow
			value-path="invoiceNumber"
			.renderCell=${invoiceNumberCell}
		></cosmoz-omnitable-column>`,
	);
}

// The "invoice status" column: autocomplete column + badge cell.
for (let i = 0; i < cfg.status; i++) {
	colTemplates.push(
		html`<cosmoz-omnitable-column-autocomplete
			name=${`invoiceStatus${i || ''}`}
			title=${cfg.status > 1 ? `Invoice status ${i + 1}` : 'Invoice status'}
			min-width="150"
			flex="4"
			width="170px"
			overflow
			value-path="status"
			text-property="description"
			value-property="name"
			.values=${STATUSES}
			.renderCell=${statusCell}
		></cosmoz-omnitable-column-autocomplete>`,
	);
}

// Plain fields live on data.field0 .. field{plain-1} using the generator's CYCLE.
const plan = columnPlan(cfg.plain),
	planCol = {
		string: (i) =>
			html`<cosmoz-omnitable-column
				name=${`field${i}`}
				title=${`String ${i}`}
				width="130px"
				overflow
				value-path=${`field${i}`}
			></cosmoz-omnitable-column>`,
		number: (i) =>
			html`<cosmoz-omnitable-column-number
				name=${`field${i}`}
				title=${`Number ${i}`}
				flex="0"
				width="105px"
				value-path=${`field${i}`}
			></cosmoz-omnitable-column-number>`,
		autocomplete: (i) =>
			html`<cosmoz-omnitable-column-autocomplete
				name=${`field${i}`}
				title=${`Text ${i}`}
				flex="0"
				width="115px"
				overflow
				value-path=${`field${i}`}
			></cosmoz-omnitable-column-autocomplete>`,
		date: (i) =>
			html`<cosmoz-omnitable-column-date
				name=${`field${i}`}
				title=${`Date ${i}`}
				flex="0"
				width="100px"
				value-path=${`field${i}`}
			></cosmoz-omnitable-column-date>`,
		boolean: (i) =>
			html`<cosmoz-omnitable-column-boolean
				name=${`field${i}`}
				title=${`Bool ${i}`}
				width="65px"
				true-label="Yes"
				false-label="No"
				value-path=${`field${i}`}
			></cosmoz-omnitable-column-boolean>`,
	};

for (let k = 0; k < cfg.plain; k++) {
	colTemplates.push(planCol[plan[k]](k));
}

// --- mount ---

const app = document.getElementById('app'),
	frag = document.createElement('div');

render(
	html`<cosmoz-omnitable id="t" selection-enabled>
		${colTemplates}
	</cosmoz-omnitable>`,
	frag,
);
const omnitable = frag.querySelector('cosmoz-omnitable');
app.appendChild(omnitable);

// A/B switch for the cell-containment prototype (?contain=both|body|none).
// Injected into the omnitable's shadow root so it can override the
// component stylesheet without touching the sources.
const containMode = params.get('contain') ?? 'both';
if (containMode !== 'both') {
	const strip = new CSSStyleSheet();
	strip.replaceSync(
		`${
			containMode === 'none' ? 'cosmoz-omnitable-item-row > div,' : ''
		} cosmoz-omnitable-header-row > div { contain: none !important; }`,
	);
	omnitable.shadowRoot.adoptedStyleSheets = [
		...omnitable.shadowRoot.adoptedStyleSheets,
		strip,
	];
}

// Rows render with useShadowDOM:false inside the omnitable's shadow root
// (cosmoz-grouped-list renders item-rows as its light children).
const deepRows = (root) =>
	root?.shadowRoot
		? [...root.shadowRoot.querySelectorAll('cosmoz-omnitable-item-row')]
		: [];

const scroller = () => omnitable.shadowRoot?.getElementById('scroller') ?? null;

window.__testbed = {
	omnitable,
	cfg,
	scroller,
	setRows(n) {
		omnitable.data = makeRows(n, cfg.seed + 1, cfg.plain);
	},
	regen(seed = cfg.seed + 1) {
		omnitable.data = makeRows(cfg.rows, seed, cfg.plain);
	},
	scrollTo(px) {
		const sc = scroller();
		if (sc) sc.scrollTop = px;
	},
	scrollBy(px) {
		const sc = scroller();
		if (sc) sc.scrollTop += px;
	},
	info() {
		const sc = scroller(),
			rows = deepRows(omnitable);
		return {
			dataRows: omnitable.data?.length,
			columns: total,
			mountedRows: rows.length,
			mountedCells: rows[0]
				? omnitable.shadowRoot.querySelectorAll(
						'cosmoz-omnitable-item-row:first-of-type .cell',
					).length
				: 0,
			scrollerHeight: sc?.clientHeight ?? null,
			scrollHeight: sc?.scrollHeight ?? null,
			scroller: sc?.id ?? null,
		};
	},
};

// --- data + header ---

i18next.init({ lng: 'en', resources: {} }).then(() => {
	omnitable.data = makeRows(cfg.rows, cfg.seed, cfg.plain);
	window.__testbed.ready = true;

	document.getElementById('info').textContent =
		`omnitable testbed — ${omnitable.data.length} rows × ${total} columns` +
		` (supplier: ${cfg.supplier}, invoice links: ${cfg.link}, status badges: ${cfg.status}, plain: ${cfg.plain})` +
		` — seed ${cfg.seed}`;
});
