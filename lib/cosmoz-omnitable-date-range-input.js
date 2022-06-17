import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { dateInputMixin } from './cosmoz-omnitable-date-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class DateRangeInput extends dateInputMixin(polymerHauntedRender(PolymerElement)) {
	// eslint-disable-next-line max-lines-per-function
	render() {
		return html`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
				}
			</style>
			<cosmoz-clear-button @click=${ () => this.resetFilter() } ?visible=${ this.hasFilter() }></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${ this.title }
				placeholder=${ ifDefined(this._filterText) }
				class="external-values-${ this.externalValues }"
				title=${ this._tooltip }
				horizontal-align="right"
				?opened=${ this.headerFocused }
				@opened-changed=${ event => {
		// TODO: check ots integration
		this.headerFocused = event.detail.value;
	} }>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ this.title }</h3>
					<paper-input
						type="date"
						label=${ _('From date') }
						min=${ this._toInputString(this._limit.fromMin) }
						max=${ this._toInputString(this._limit.fromMax) }
						.value=${ this._filterInput?.min }
						@value-changed=${ event => this.set('_filterInput.min', event.detail.value) }
					></paper-input>
					<paper-input
						type="date"
						label=${ _('Until date') }
						min=${ this._toInputString(this._limit.toMin) }
						max=${ this._toInputString(this._limit.toMax) }
						.value=${ this._filterInput?.max }
						@value-changed=${ event => this.set('_filterInput.max', event.detail.value) }
					></paper-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	_fromInputString(value, property) {
		const date = this.toDate(value);
		if (date == null) {
			return;
		}
		if (property === 'min') {
			date.setHours(0, 0, 0, 0);
		}
		if (property === 'max') {
			date.setHours(23, 59, 59);
		}
		return date;
	}

	_filterInputChanged(change, autoupdate) {
		const path = change.path.split('.')[1],
			value = path && change.value;

		// don't trigger change when date input begins with 0; Year (starting from 0000) was limited before the needed value was typed.
		if (value && value.match(/^0+/u)) {
			this._limitInputDebouncer.cancel();
			return;
		}
		super._filterInputChanged(change, autoupdate);
	}
}


customElements.define('cosmoz-omnitable-date-range-input', DateRangeInput);
