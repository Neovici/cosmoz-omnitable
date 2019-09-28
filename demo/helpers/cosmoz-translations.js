import { PolymerElement } from '@polymer/polymer/polymer-element';
import { html } from '@polymer/polymer/lib/utils/html-tag';

import { translatable } from '@neovici/cosmoz-i18next';

class CosmozTranslations extends translatable(PolymerElement) {
	static get template() {
		return html`
				<cosmoz-i18next translations="[[ _getTranslations(locale) ]]" interpolation-prefix="{" interpolation-suffix="}" key-separator="::" ns-separator=":::">
				</cosmoz-i18next>
		`;
	}

	static get is() {
		return 'cosmoz-translations';
	}

	_getTranslations(locale) {
		if (locale === 'sv') {
			return {
				Amount: 'Belopp',
				Ascending: 'stigande',
				Descending: 'fallande',
				'Group on': 'Gruppera på',
				Group: 'Grupp',
				'No grouping': 'Ingen gruppering',
				'No sorting': 'Ingen sortering',
				'Sort on': 'Sortera på',
				'{0} group': '{0} grupp',
				'{0} group_plural': '{0} grupper',
				'{0} row': '{0} rad',
				'{0} row_plural': '{0} rader',
				'{0} selected item': '{0} valt objekt',
				'{0} selected item_plural': '{0} valda objekt'
			};

		} else if (locale === 'fr') {
			return {
				Amount: 'Montant',
				Ascending: 'croissant',
				Descending: 'décroissant',
				'Group on': 'Grouper sur',
				Group: 'Groupe',
				'No grouping': 'Pas de groupement',
				'No sorting': 'Pas de tri',
				'Save as CSV': 'Eporter en CSV',
				'Sort on': 'Trier sur',
				'{0} group': '{0} groupe',
				'{0} group_plural': '{0} groupes',
				'{0} row': '{0} ligne',
				'{0} row_plural': '{0} lignes',
				'{0} selected item': '{0} élément sélectionné',
				'{0} selected item_plural': '{0} éléments sélectionnés'
			};
		}

		return {};
	}
}
customElements.define(CosmozTranslations.is, CosmozTranslations);
