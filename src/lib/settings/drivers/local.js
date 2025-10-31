export default ({ prefix = 'omnitable-' } = {}) => {
	const read = async (settingsId) => {
		if (!settingsId) {
			return;
		}
		try {
			return JSON.parse(localStorage.getItem(prefix + settingsId));
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};
	return {
		write: async (settingsId, settings) => {
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
