import { assert, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-omnitable-item-expand-line';
import { ignoreResizeObserverLoopErrors } from './helpers/utils';

suite('cosmoz-omnitable-item-expand-line', () => {
	ignoreResizeObserverLoopErrors(setup, teardown);

	test('upgrades and renders the column label with its light children as the value', async () => {
		assert.isNotNull(
			customElements.get('cosmoz-omnitable-item-expand-line'),
			'the expand-line element is registered',
		);
		const el = await fixture(
			html`<cosmoz-omnitable-item-expand-line .column=${{ title: 'Hello' }}>
				<span>World</span>
			</cosmoz-omnitable-item-expand-line>`,
		);
		const label = el.shadowRoot.querySelector('.label');
		assert.equal(
			label?.textContent?.trim(),
			'Hello',
			'the column title is rendered as the label part',
		);
		const value = el.shadowRoot.querySelector('.value slot'),
			assigned = value?.assignedElements?.() ?? [];
		assert.include(
			assigned,
			el.querySelector('span'),
			'light children compose into the value part through the slot',
		);
	});
});
