import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { dateInputMixin } from './cosmoz-omnitable-date-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class DatetimeRangeInput extends dateInputMixin(polymerHauntedRender(PolymerElement)) {
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
				@opened-changed=${ event => this.set('headerFocused', event.detail.value) }>
				<div class="dropdown-content" slot="dropdown-content" style="padding: 15px; min-width: 100px;">
					<h3 style="margin: 0;">${ this.title }</h3>
					<cosmoz-datetime-input
						date-label=${ _('From date') }
						time-label=${ _('From time') }
						min=${ this._toInputString(this._limit.fromMin) }
						max=${ this._toInputString(this._limit.fromMax) }
						step=${ this.filterStep }
						.value=${ this._filterInput?.min }
						@value-changed=${ event => this.set('_filterInput.min', event.detail.value) }
					></cosmoz-datetime-input>
					<cosmoz-datetime-input
						date-label=${ _('To date') }
						time-label=${ _('To time') }
						min=${ this._toInputString(this._limit.toMin) }
						max=${ this._toInputString(this._limit.toMax) }
						step=${ this.filterStep }
						.value=${ this._filterInput?.max }
						@value-changed=${ event => this.set('_filterInput.max', event.detail.value) }
					></cosmoz-datetime-input>
				</div>
			</paper-dropdown-menu>
		`;
	}

	_toInputString(value) {
		const date = this.toValue(value);
		if (date == null) {
			return;
		}
		return this._toLocalISOString(date).slice(0, 19);
	}

	// OVERRIDES
	_computeFormatter(locale) {
		const timeFormatOption = {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
		return new Intl.DateTimeFormat(locale || undefined, timeFormatOption);
	}
}


customElements.define('cosmoz-omnitable-datetime-range-input', DatetimeRangeInput);
