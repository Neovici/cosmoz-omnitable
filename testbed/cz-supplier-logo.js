// Logo hashes need bitwise operators.
/* eslint-disable no-bitwise */
// Mirrors frontend `src/cz-components/cz-supplier-logo` (1:1 component logic),
// with logoUrl() replaced by a deterministic inline SVG (no API network calls).

import { component, css, useState } from '@pionjs/pion';
import { html, nothing } from 'lit-html';

const style = css`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		min-width: 0;
	}

	.logo {
		display: grid;
		place-items: center;
		flex: none;
		box-sizing: border-box;
		width: var(--cz-supplier-logo-size, 24px);
		height: var(--cz-supplier-logo-size, 24px);
		overflow: hidden;
		border: 1px solid var(--cz-color-border-secondary);
		border-radius: var(--cz-radius-md);
		background: var(--cz-color-bg-primary);
		color: var(--cz-color-text-tertiary);
		font-size: calc(var(--cz-supplier-logo-size, 24px) * 0.45);
		font-weight: var(--cz-font-weight-semibold);
		text-transform: uppercase;
	}

	.logo:has(img) {
		background: var(--cz-color-white);
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.label {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const hash = (id) => {
	let h = 7;
	for (const c of id) h = (h * 31 + c.charCodeAt(0)) | 0;
	return Math.abs(h);
};

const svgLogo = (id, name) => {
	const hue = hash(id) % 360;
	const initial = (name ?? id).trim().slice(0, 1).toUpperCase();
	const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><rect width='48' height='48' fill='hsl(${hue},55%,72%)'/><text x='24' y='31' font-family='sans-serif' font-size='22' text-anchor='middle' fill='#223344'>${initial}</text></svg>`;
	return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const logoUrl = (item) => {
	const id = item?.supplier?.id;
	return id ? svgLogo(id, item?.supplier?.name) : undefined;
};

const SupplierLogo = ({ item }) => {
	const [failedSrc, setFailedSrc] = useState(),
		name = item?.supplier?.name?.trim();

	if (!name) return html`<slot></slot>`;

	const src = item && logoUrl(item),
		mark =
			src && src !== failedSrc
				? html`<img
						src=${src}
						alt=""
						loading="lazy"
						decoding="async"
						@error=${() => setFailedSrc(src)}
				  />`
				: name[0];

	return html`<span class="logo" part="logo">${mark}</span
		><span class="label"><slot></slot></span>`;
};

customElements.define(
	'cz-supplier-logo',
	component(SupplierLogo, { styleSheets: [style] })
);

export const supplierLogo = (item, content = nothing) =>
	html`<cz-supplier-logo .item=${item}>${content}</cz-supplier-logo>`;
