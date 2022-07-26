export default ({ prefix = '', get$, post$ } = {}) => {
	const read = async (settingsId) => {
		if (!settingsId) {
			return [];
		}
		try {
			await get$(prefix + settingsId);
		} catch (e) {
			return [];
		}
	};
	return {
		write: async (settingsId, settings) => {
			const key = prefix + settingsId;
			try {
				await post$(key, settings);
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		},
		read,
	};
};
