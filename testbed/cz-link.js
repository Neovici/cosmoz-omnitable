// Testbed stand-in for `@neovici/core` cz-link (private package).
// Mirrors the real element: pion component, <style> + <a part="link"><slot></slot></a>,
// contextmenu text-selection handler, observedAttributes subset.

import { component, html, useEffect, useMemo } from '@pionjs/pion';
import { ifDefined } from 'lit-html/directives/if-defined.js';

const url = (view, params = {}) => {
	const u = new URL(view, window.location.origin);
	u.search = new URLSearchParams(
		Object.entries(params).filter(([, v]) => v != null)
	).toString();
	return '#!' + u.href.replace(u.origin, '');
};
const style = html`<style>
	a {
		color: var(--cz-link-color, var(--cz-color-text-info));
		text-decoration: var(--cz-link-decoration, none);
	}
	a:hover {
		text-decoration: var(--cz-link-decoration-hover, underline);
		text-underline-offset: 2px;
		color: var(--cz-link-color-hover, var(--cz-color-text-info-hover));
	}
</style>`;

const CzLink = (host) => {
	const { view, params, paramId, target } = host,
		_params = useMemo(
			() =>
				Object.prototype.hasOwnProperty.call(host, 'paramId')
					? { id: paramId, ...params }
					: params,
			[paramId, params]
		),
		idMissing =
			_params != null &&
			Object.prototype.hasOwnProperty.call(_params, 'id') &&
			(_params.id == null || _params.id === true);
	useEffect(() => {
		const handler = () => {
			const range = document.createRange();
			range.selectNodeContents(host);
			const sel = window.getSelection();
			if (!sel) return;
			sel.removeAllRanges();
			sel.addRange(range);
		};
		host.addEventListener('contextmenu', handler);
		return () => host.removeEventListener('contextmenu', handler);
	}, []);
	return !idMissing
		? html`${style}<a
					href="${url(view, _params)}"
					part="link"
					target=${ifDefined(target)}
					><slot></slot
				></a>`
		: html`<slot></slot>`;
};

customElements.define(
	'cz-link',
	component(CzLink, {
		observedAttributes: ['role', 'roles', 'view', 'param-id', 'target'],
	})
);
