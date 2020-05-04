import { html } from 'lit-html';
import '@polymer/paper-input/paper-input';

export const input = (column, config) => html`
	<paper-input class="cell" no-label-float type="text" placeholder="${config.label}"></paper-input>
`;
