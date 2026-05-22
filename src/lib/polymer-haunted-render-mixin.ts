import { html } from '@polymer/polymer';
import { render } from 'lit-html';

interface PolymerHauntedHost {
	$: Record<string, HTMLElement>;
	render(): unknown;
	connectedCallback(): void;
	_propertiesChanged(
		currentProps: Record<string, unknown>,
		changedProps: Record<string, unknown>,
		oldProps: Record<string, unknown>,
	): void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const polymerHauntedRender = (base: any) =>
	class extends base {
		static get template() {
			return html`<div id="output" style="position:relative;"></div>`;
		}

		connectedCallback() {
			super.connectedCallback();
			const host = this as unknown as PolymerHauntedHost;
			render(host.render(), host.$.output);
		}

		_propertiesChanged(
			currentProps: Record<string, unknown>,
			changedProps: Record<string, unknown>,
			oldProps: Record<string, unknown>,
		) {
			super._propertiesChanged(currentProps, changedProps, oldProps);
			const host = this as unknown as PolymerHauntedHost;
			requestAnimationFrame(() => render(host.render(), host.$.output));
		}
	};
