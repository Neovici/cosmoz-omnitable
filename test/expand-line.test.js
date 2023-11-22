import { fixture, html, assert } from '@open-wc/testing';
import '../cosmoz-omnitable-item-expand-line';

suite('cosmoz-omnitable-item-expand-line', () => {
	test('initializes correctly', async () => {
		const el = await fixture(
			html`<cosmoz-omnitable-item-expand-line
				.column=${{ title: 'Hello' }}
			></cosmoz-omnitable-item-expand-line>`,
		);

		assert.equal(el.constructor.name, 'Element');
	});
});
