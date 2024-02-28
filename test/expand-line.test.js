import { fixture, html, assert } from '@open-wc/testing';
import '../cosmoz-omnitable-item-expand-line';
import { ignoreResizeObserverLoopErrors } from './helpers/utils';

suite('cosmoz-omnitable-item-expand-line', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);
	test('initializes correctly', async () => {
		const el = await fixture(
			html`<cosmoz-omnitable-item-expand-line
				.column=${{ title: 'Hello' }}
			></cosmoz-omnitable-item-expand-line>`,
		);

		assert.equal(el.constructor.name, 'Element');
	});
});
