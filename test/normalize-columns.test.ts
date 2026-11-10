import { expect } from '@open-wc/testing';
import { normalizeColumns } from '../src/lib/settings/normalize.js';

const columns = ['node', 'supplier', 'status', 'statusDetail', 'amount'].map(
		(name) => ({ name, title: name })
	),
	saved = (...names: string[]) =>
		names.map((name) => ({ name, priority: 0, width: 100, flex: 1 })),
	names = (result: { name: string }[]) => result.map(({ name }) => name);

suite('normalizeColumns', () => {
	test('places a column missing from the saved layout after the column it follows', () => {
		expect(
			names(
				normalizeColumns(
					columns,
					[],
					saved('amount', 'status', 'node', 'supplier')
				)
			)
		).to.deep.equal(['amount', 'status', 'statusDetail', 'node', 'supplier']);
	});

	test('keeps the column order without a saved layout', () => {
		expect(names(normalizeColumns(columns))).to.deep.equal([
			'node',
			'supplier',
			'status',
			'statusDetail',
			'amount',
		]);
	});

	test('puts a new first column first', () => {
		expect(
			names(normalizeColumns(columns, [], saved('supplier', 'status')))
		).to.deep.equal(['node', 'supplier', 'status', 'statusDetail', 'amount']);
	});
});
