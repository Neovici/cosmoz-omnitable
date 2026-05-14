import i18next from 'i18next';

export const resources = {
	en: { translation: {} },
	sv: {
		translation: {
			Amount: 'Belopp',
			Object: 'Objekt',
			Ascending: 'stigande',
			Descending: 'fallande',
			'Group on': 'Gruppera på',
			'Sort and filter': 'Sortera och filtrera',
			Columns: 'Kolumner',
			Group: 'Grupp',
			'No grouping': 'Ingen gruppering',
			'No sorting': 'Ingen sortering',
			'Sort on': 'Sortera på',
			Reset: 'Återställ',
			Save: 'Spara',
			'and {0} more': 'och {0} till',
			'See less': 'Visa mindre',
			From: 'Från',
			To: 'Till',
			'From date': 'Från datum',
			'Until date': 'Till datum',
			'To date': 'Till datum',
			'From time': 'Från tid',
			'Until time': 'Till tid',
			'To time': 'Till tid',
			'Minimum amount': 'Minimibelopp',
			'Min amount': 'Min belopp',
			'Maximum amount': 'Maximibelopp',
			'Max amount': 'Max belopp',
			'Working set empty': 'Arbetsmängden är tom',
			'No data to display': 'Ingen data att visa',
			'Filter too strict': 'För strikt filter',
			'No matches for selection': 'Inga träffar för urvalet',
			'Error loading data': 'Fel vid laddning av data',
			'Save selected items as CSV': 'Spara valda objekt som CSV',
			'Save selected items as XLSX': 'Spara valda objekt som XLSX',
			'{count} selected item': '{count} valt objekt',
			'{count} selected item_one': '{count} valt objekt',
			'{count} selected item_other': '{count} valda objekt',
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
			Object: 'Objet',
			Ascending: 'croissant',
			Descending: 'décroissant',
			'Group on': 'Grouper sur',
			'Sort and filter': 'Trier et filtrer',
			Columns: 'Colonnes',
			Group: 'Groupe',
			'No grouping': 'Pas de groupement',
			'No sorting': 'Pas de tri',
			'Save as CSV': 'Exporter en CSV',
			'Sort on': 'Trier sur',
			Reset: 'Réinitialiser',
			Save: 'Enregistrer',
			'and {0} more': 'et encore {0}',
			'See less': 'Voir moins',
			From: 'De',
			To: 'À',
			'From date': 'Date de début',
			'Until date': 'Date de fin',
			'To date': 'Date de fin',
			'From time': 'Heure de début',
			'Until time': 'Heure de fin',
			'To time': 'Heure de fin',
			'Minimum amount': 'Montant minimum',
			'Min amount': 'Montant min',
			'Maximum amount': 'Montant maximum',
			'Max amount': 'Montant max',
			'Working set empty': 'Ensemble de travail vide',
			'No data to display': 'Aucune donnée à afficher',
			'Filter too strict': 'Filtre trop strict',
			'No matches for selection': 'Aucun résultat pour la sélection',
			'Error loading data': 'Erreur lors du chargement des données',
			'Save selected items as CSV':
				'Enregistrer les éléments sélectionnés en CSV',
			'Save selected items as XLSX':
				'Enregistrer les éléments sélectionnés en XLSX',
			'{count} selected item': '{count} élément sélectionné',
			'{count} selected item_one': '{count} élément sélectionné',
			'{count} selected item_other': '{count} éléments sélectionnés',
			'{0} group_one': '{0} groupe',
			'{0} group_other': '{0} groupes',
			'{0} row_one': '{0} ligne',
			'{0} row_other': '{0} lignes',
			'{0} selected item_one': '{0} élément sélectionné',
			'{0} selected item_other': '{0} éléments sélectionnés',
		},
	},
};

export const ensureDemoI18nInitialized = async () => {
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

export const setDemoLanguage = async (locale) => {
	await ensureDemoI18nInitialized();
	await i18next.changeLanguage(locale || 'en');
	return i18next.language;
};
