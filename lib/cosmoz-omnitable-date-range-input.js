import { _ } from '@neovici/cosmoz-i18next';
import { PolymerElement } from '@polymer/polymer';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import '@neovici/cosmoz-input';
import { dateInputMixin } from './cosmoz-omnitable-date-input-mixin';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class DateRangeInput extends dateInputMixin(
	polymerHauntedRender(PolymerElement),
) {
	render() {
		return html`
			<style>
				paper-dropdown-menu {
					--iron-icon-width: 0;
					display: block;
					text-align: right;
				}

				.dropdown-content h3 {
					font-weight: 500;
					font-size: 13px;
					margin: 0;
					font-family: var(
						--cosmoz-input-font-family,
						var(--paper-font-subhead_-_font-family, 'Inter', sans-serif)
					);
				}

				.dropdown-content {
					padding: 10px 10px 10px 10px;
					min-width: 120px;
					text-align: left;
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					backdrop-filter: blur(16px) saturate(180%);
					-webkit-backdrop-filter: blur(16px) saturate(180%);
					box-shadow:
						0 4px 24px 0 rgba(0, 0, 0, 0.18),
						0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
				}

				cosmoz-input[type='date'] {
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
					border-radius: 6px;
					border: 1px solid #d1d1d6;
					box-shadow: 0 1px 2px 0 rgba(60, 60, 60, 0.04);
					padding: 2px 8px;
					margin-bottom: 6px;
					min-height: 28px;
					transition:
						border-color 0.2s,
						box-shadow 0.2s;
				}

				cosmoz-input[type='date']:focus-within {
					border-color: var(--cz-accent-color, #007aff);
					box-shadow: 0 0 0 1px rgba(0, 122, 255, 0.15);
					background: var(--cosmoz-omnitable-amount-input-background, #ffffff);
				}
			</style>
			<cosmoz-clear-button
				@click=${() => this.resetFilter()}
				?visible=${this.hasFilter()}
			></cosmoz-clear-button>
			<paper-dropdown-menu
				label=${this.title}
				placeholder=${ifDefined(this._filterText)}
				class="external-values-${this.externalValues}"
				title=${this._tooltip}
				horizontal-align="right"
				?opened=${this.headerFocused}
				@opened-changed=${(event) => {
					// TODO: check ots integration
					this.headerFocused = event.detail.value;
				}}
			>
				<div class="dropdown-content" slot="dropdown-content">
					<h3 style="margin: 0;">${this.title}</h3>
					<cosmoz-input
						type="date"
						label=${_('From date')}
						min=${this._toInputString(this._limit.fromMin)}
						max=${this._toInputString(this._limit.fromMax)}
						.value=${this._filterInput?.min}
						@value-changed=${(event) =>
							this.set('_filterInput.min', event.detail.value)}
					></cosmoz-input>
					<cosmoz-input
						type="date"
						label=${_('Until date')}
						min=${this._toInputString(this._limit.toMin)}
						max=${this._toInputString(this._limit.toMax)}
						.value=${this._filterInput?.max}
						@value-changed=${(event) =>
							this.set('_filterInput.max', event.detail.value)}
					></cosmoz-input>
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
