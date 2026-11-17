// Mirrors frontend `src/cz-components/cz-status` (1:1, minus i18n/status types).

import '@neovici/cosmoz-tooltip';
import { component, css } from '@pionjs/pion';
import { html } from 'lit-html';
import renderStatus from './render-status.js';

const style = css`
	cosmoz-tooltip {
		display: block;
	}
`;

const CzStatus = ({ status, suffix }) =>
	// NOTE (perf): no when() branch — branch swaps tear down and re-mount the
	// whole badge/tooltip subtree on every row rebind whose help-shape flips
	// (24+ fresh element mounts per drag frame → style-recalc storms over the
	// whole table). The tooltip takes care of disabling itself when there is
	// nothing to show, so always render it.
	html`<cosmoz-tooltip
		heading=${status?.description}
		description=${status?.help}
		placement="top"
		delay="600"
		>${renderStatus(status, { suffix })}</cosmoz-tooltip
	>`;

customElements.define(
	'cz-status',
	component(CzStatus, { styleSheets: [style] }),
);

export const czStatus = ({ status, suffix }) =>
	html`<cz-status .status=${status} .suffix=${suffix} />`;
