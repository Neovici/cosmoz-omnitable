import { html } from 'lit-html';
import '@polymer/paper-input/paper-input';

const handleInput = callback => event =>
	callback(new CustomEvent('input', {
		detail: {
			value: event.target.value,
			column: event.target.dataset.column
		}
	}));


export const input = onInput => (column, config) => html`<paper-input
		class="cell"
		no-label-float
		type="text"
		data-column="${column}"
		placeholder="${config.label}"
		@input=${handleInput(onInput)}
	></paper-input>`;
