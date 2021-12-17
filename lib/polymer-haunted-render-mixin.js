
import { html } from '@polymer/polymer';
import { render } from 'lit-html';

export const polymerHauntedRender = base => class extends base {
	static get template() {
		return html`<div id="output" style="position:relative;"></div>`;
	}

	connectedCallback() {
		super.connectedCallback();
		render(this.render(), this.$.output);
	}

	_propertiesChanged(currentProps, changedProps, oldProps) {
		super._propertiesChanged(currentProps, changedProps, oldProps);
		requestAnimationFrame(() => render(this.render(), this.$.output));
	}
};
