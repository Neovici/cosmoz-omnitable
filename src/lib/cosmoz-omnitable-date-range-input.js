import '@neovici/cosmoz-input';
import { PolymerElement } from '@polymer/polymer';
import { t } from 'i18next';
import { html } from 'lit-html';
import { when } from 'lit-html/directives/when.js';
import { dateInputMixin } from './cosmoz-omnitable-date-input-mixin';
import { renderDropdown } from './cosmoz-omnitable-dropdown';
import './cosmoz-omnitable-dropdown-input';
import { polymerHauntedRender } from './polymer-haunted-render-mixin';

class DateRangeInput extends dateInputMixin(
	polymerHauntedRender(PolymerElement),
) {
	render() {
		const onOpenedChanged = (event) => {
			this.headerFocused = event.type === 'focus';
		};

			return html`


			${when(
				this.disabled,
				() => html`
					<cosmoz-omnitable-dropdown-input
						disabled
						.label=${this.title}
						.value=${this._filterText ?? ''}
					></cosmoz-omnitable-dropdown-input>
				`,
				() => html`
					<cosmoz-clear-button
						@click=${() => this.resetFilter()}
						?visible=${this.hasFilter()}
					></cosmoz-clear-button>
					${renderDropdown({
						title: this.title,
						tooltip: this._tooltip,
						filterText: this._filterText,
						externalValues: this.externalValues,
						onOpenedChanged,
						content: html`
							<h3 style="margin: 0;">${this.title}</h3>
							<cosmoz-input
								type="date"
								label=${t('From date')}
								min=${this._toInputString(this._limit.fromMin)}
								max=${this._toInputString(this._limit.fromMax)}
								.value=${this._filterInput?.min}
								@value-changed=${(event) =>
									this.set('_filterInput.min', event.detail.value)}
							></cosmoz-input>
							<cosmoz-input
								type="date"
								label=${t('Until date')}
								min=${this._toInputString(this._limit.toMin)}
								max=${this._toInputString(this._limit.toMax)}
								.value=${this._filterInput?.max}
								@value-changed=${(event) =>
									this.set('_filterInput.max', event.detail.value)}
							></cosmoz-input>
						`,
					})}
				`,
			)}
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
