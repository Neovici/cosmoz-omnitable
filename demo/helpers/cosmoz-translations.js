import i18next from 'i18next';

const resources = {
	en: { translation: {} },
	sv: {
		translation: {
			Amount: 'Belopp',
			Ascending: 'stigande',
			Descending: 'fallande',
			'Group on': 'Gruppera pa',
			Group: 'Grupp',
			'No grouping': 'Ingen gruppering',
			'No sorting': 'Ingen sortering',
			'Sort on': 'Sortera pa',
			'{0} group_one': '{0} grupp',
			'{0} group_other': '{0} grupper',
			'{0} row_one': '{0} rad',
			'{0} row_other': '{0} rader',
			'{0} selected item_one': '{0} valt objekt',
			'{0} selected item_other': '{0} valda objekt',
		},
	},
	fr: {
		translation: {
			Amount: 'Montant',
			Ascending: 'croissant',
			Descending: 'decroissant',
			'Group on': 'Grouper sur',
			Group: 'Groupe',
			'No grouping': 'Pas de groupement',
			'No sorting': 'Pas de tri',
			'Save as CSV': 'Exporter en CSV',
			'Sort on': 'Trier sur',
			'{0} group_one': '{0} groupe',
			'{0} group_other': '{0} groupes',
			'{0} row_one': '{0} ligne',
			'{0} row_other': '{0} lignes',
			'{0} selected item_one': '{0} element selectionne',
			'{0} selected item_other': '{0} elements selectionnes',
		},
	},
};

const ensureInitialized = async () => {
	if (i18next.isInitialized) {
		return;
	}

	await i18next.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			prefix: '{',
			suffix: '}',
		},
	});
};

class CosmozTranslations extends HTMLElement {
	static get observedAttributes() {
		return ['locale'];
	}

	connectedCallback() {
		void this.#setLocale(this.locale);
	}

	attributeChangedCallback(name, _oldValue, newValue) {
		if (name === 'locale') {
			void this.#setLocale(newValue);
		}
	}

	get locale() {
		return this.getAttribute('locale');
	}

	set locale(value) {
		if (value == null) {
			this.removeAttribute('locale');
			return;
		}

		this.setAttribute('locale', value);
	}

	async #setLocale(locale) {
		await ensureInitialized();
		await i18next.changeLanguage(locale || 'en');
	}
}

customElements.define('cosmoz-translations', CosmozTranslations);
