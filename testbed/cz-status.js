// Mirrors frontend `src/cz-components/cz-status` (1:1, minus i18n/status types).

import '@neovici/cosmoz-tooltip';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import renderStatus from './render-status.js';

const style = css`
	cosmoz-tooltip {
		display: block;
	}
`;

const CzStatus = ({ status, suffix }) =>
	when(
		status?.help,
		() =>
			html`<cosmoz-tooltip
				heading=${status?.description}
				description=${status?.help}
				placement="top"
				delay="600"
				>${renderStatus(status, { suffix })}</cosmoz-tooltip
			>`,
		() => renderStatus(status, { suffix })
	);

customElements.define(
	'cz-status',
	component(CzStatus, { styleSheets: [style] })
);

export const czStatus = ({ status, suffix }) =>
	html`<cz-status .status=${status} .suffix=${suffix} />`;
