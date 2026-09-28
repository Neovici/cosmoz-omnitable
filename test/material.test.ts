import { assert, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-omnitable.js';

suite('optional table material', () => {
	test('supports composite backgrounds without blurring the table content', async () => {
		const el = await fixture<HTMLElement>(
				html`<cosmoz-omnitable></cosmoz-omnitable>`
			),
			content = el.shadowRoot!.querySelector('.tableContent')!,
			header = el.shadowRoot!.querySelector('.header')!,
			original = getComputedStyle(content).background;
		el.style.setProperty(
			'--cz-material-background',
			'linear-gradient(white, transparent) navy'
		);
		el.style.setProperty(
			'--cz-material-sheen',
			'linear-gradient(white, transparent)'
		);
		el.style.setProperty('--cz-material-blur', 'blur(12px)');
		assert.include(
			getComputedStyle(content).backgroundImage,
			'linear-gradient'
		);
		assert.include(getComputedStyle(header).backgroundImage, 'linear-gradient');
		assert.equal(getComputedStyle(content).backdropFilter, 'none');
		el.style.removeProperty('--cz-material-background');
		el.style.removeProperty('--cz-material-sheen');
		assert.equal(getComputedStyle(content).background, original);
		assert.equal(getComputedStyle(header).backgroundImage, 'none');
	});
});
