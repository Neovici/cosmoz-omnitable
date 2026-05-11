export default ({ prefix = 'omnitable-' } = {}) => {
	const read = async (settingsId: string) => {
		if (!settingsId) {
			return null;
		}

		try {
			const item = localStorage.getItem(prefix + settingsId);

			if (item == null) {
				return null;
			}

			return JSON.parse(item);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
			return null;
		}
	};

	return {
		write: async (settingsId: string, settings: string) => {
			const key = prefix + settingsId;

			try {
				if (settings) {
					localStorage.setItem(key, JSON.stringify(settings));
				} else {
					localStorage.removeItem(key);
				}
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		},
		read,
	};
};
