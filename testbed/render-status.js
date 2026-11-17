// Mirrors frontend `src/render/status` renderStatus:
// <cosmoz-badge type="modern" size="sm" dot color={severity}>
//   {description} + info icon (suffix slot) when status.help is set

import '@neovici/cosmoz-badge';
import { infoCircleIcon } from '@neovici/cosmoz-icons/untitled';
import { html, nothing } from 'lit-html';
import { when } from 'lit-html/directives/when.js';

export const getStatusColor = ({ status }) => {
	switch (status?.severity) {
		case 'ok':
			return 'success';
		case 'warning':
			return 'warning';
		case 'error':
			return 'error';
		case 'processing':
			return 'processing';
		default:
			return 'gray';
	}
};

const statusHintIcon = infoCircleIcon({
	slot: 'suffix',
});

const renderStatus = (status, { suffix } = {}) => {
	if (!status) return nothing;
	return html`<cosmoz-badge
		type="modern"
		size="sm"
		dot
		color=${getStatusColor({ status })}
	>
		${status.description} ${when(status.help, () => statusHintIcon)}
		${when(suffix, () => suffix)}
	</cosmoz-badge>`;
};

export default renderStatus;
