// Seeded RNG and hashes need bitwise operators.
/* eslint-disable no-bitwise */
// Deterministic data for the omnitable testbed. No Math.random / Date.now:
// every run (and every trace) sees exactly the same data for a given seed.

export const mulberry32 = (seed) => {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = (a + 0x6d2b79f5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
};

const SUPPLIER_PREFIXES = [
	'ICA',
	'Coop',
	'Axfood',
	'Metagro',
	'Nordic',
	'Scan',
	'Vest',
	'Alfa',
	'Beta',
	'Delta',
];
const SUPPLIER_SUFFIXES = [
	'Sverige AB',
	'Handel AB',
	'Logistics AB',
	'Foods AB',
	'Supply AB',
	'Nord AB',
	'Distribution AB',
	'Produkter AB',
	'Services AB',
	'Gruppen',
];
const WORDS = [
	'Invoice',
	'Purchase',
	'Delivery',
	'Contract',
	'Order',
	'Statement',
	'Entry',
	'Booking',
	'Payment',
	'Receipt',
	'Freight',
	'Customs',
	'Discount',
	'Balance',
	'Period',
	'Expense',
	'Record',
	'Adjustment',
	'Charge',
	'Fee',
];
const CURRENCIES = ['SEK', 'USD', 'EUR', 'GBP'];
const SERIES = ['SE', 'SI', 'AA', 'BB', 'DD', 'ZZ'];

export const STATUSES = [
	{
		name: 'unprocessed',
		description: 'Unprocessed',
		severity: 'processing',
	},
	{
		name: 'awaiting_approval',
		description: 'Awaiting approval',
		severity: 'warning',
		help: 'This invoice needs a manager approval before booking.',
	},
	{
		name: 'approved',
		description: 'Approved',
		severity: 'ok',
	},
	{
		name: 'booked',
		description: 'Booked',
		severity: 'ok',
	},
	{
		name: 'paid',
		description: 'Paid',
		severity: 'ok',
	},
	{
		name: 'rejected',
		description: 'Rejected',
		severity: 'error',
	},
	{
		name: 'incomplete',
		description: 'Incomplete',
		severity: 'warning',
		help: 'Mandatory field is missing, check the invoice image.',
	},
	{
		name: 'not_distributed',
		description: 'Not distributed',
		severity: 'warning',
	},
	{
		name: 'not_entered',
		description: 'Not entered',
		severity: 'normal',
	},
	{
		name: 'price_missing',
		description: 'Missing price',
		severity: 'error',
		help: 'One or more rows have no purchase price.',
	},
	{
		name: 'locked',
		description: 'Locked',
		severity: 'normal',
	},
];

// Stable supplier pool used by data and the supplier column filter values.
export const suppliers = (() => {
	const rng = mulberry32(0xabcde);
	const list = [];
	for (let i = 0; i < 80; i++) {
		const prefix = SUPPLIER_PREFIXES[(rng() * SUPPLIER_PREFIXES.length) | 0];
		const suffix = SUPPLIER_SUFFIXES[(rng() * SUPPLIER_SUFFIXES.length) | 0];
		list.push({
			id: `sup-${i + 1}`,
			name: `${prefix} ${String.fromCharCode((65 + rng() * 26) | 0)}${suffix}`,
		});
	}
	return list;
})();

const isoDate = (rng) =>
	new Date(Date.UTC(2024, 0, 1) + rng() * 1100 * 86400 * 1000)
		.toISOString()
		.slice(0, 10);
const maybe = (rng, value, pct = 3) => (rng() * 100 < pct ? null : value);

// Plain column mix cycled over plain slots:
// string, number, string, autocomplete, date, string, boolean, number
const CYCLE = [
	'string',
	'number',
	'string',
	'autocomplete',
	'date',
	'string',
	'boolean',
	'number',
];

export const columnPlan = (plainCount) =>
	Array.from({ length: plainCount }, (_, i) => CYCLE[i % CYCLE.length]);

export const makeRows = (rowsCount, seed = 42, plainCount = 47) => {
	const rng = mulberry32(seed);
	const plan = columnPlan(plainCount);
	const wordsPerField = plan.map(() => WORDS[(rng() * WORDS.length) | 0]);
	const rows = new Array(rowsCount);

	for (let i = 0; i < rowsCount; i++) {
		const supplier = suppliers[(rng() * suppliers.length) | 0];
		const status = STATUSES[(rng() * STATUSES.length) | 0];
		const row = {
			id: `inv-${String(i + 1).padStart(6, '0')}`,
			numId: i + 1,
			invoiceNumber: `${SERIES[(rng() * SERIES.length) | 0]}-${
				1000 + ((rng() * 90000) | 0)
			}`,
			parentPathLocator: `nodes/${(i % 37) + 1}`,
			supplier: { ...supplier },
			status: { ...status },
			amount: {
				amount: maybe(rng, Math.round(rng() * 10000000) / 100, 2),
				currency: CURRENCIES[(rng() * CURRENCIES.length) | 0],
			},
		};
		for (let f = 0; f < plan.length; f++) {
			const path = `field${f}`;
			switch (plan[f]) {
				case 'string':
					row[path] = `${wordsPerField[f]} ${
						WORDS[(rng() * WORDS.length) | 0]
					} #${((rng() * 9000) | 0) + 1000}`;
					row[path] = maybe(rng, row[path], 2);
					break;
				case 'autocomplete':
					row[path] = maybe(rng, WORDS[(rng() * WORDS.length) | 0], 4);
					break;
				case 'number':
					row[path] = maybe(rng, Math.round(rng() * 1000000) / 100, 2);
					break;
				case 'date':
					row[path] = maybe(rng, isoDate(rng), 3);
					break;
				case 'boolean':
					row[path] = rng() > 0.45;
					break;
			}
		}
		rows[i] = row;
	}
	return rows;
};
