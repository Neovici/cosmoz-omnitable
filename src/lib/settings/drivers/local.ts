export default ({ prefix = 'omnitable-' } = {}) => {
	const read = async (settingsId: string) => {
		if (!settingsId) {
			return;
		}

		try {
			const item = localStorage.getItem(prefix + settingsId);

			if (item == null) {
				return;
			}

			return JSON.parse(item);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
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
