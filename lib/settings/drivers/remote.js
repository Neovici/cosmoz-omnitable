export default ({ storagePrefix = 'omnitable-', get$, post$ } = {}) => {
	const read = async (settingsId) => {
		if (!settingsId) {
			return [];
		}
		try {
			await get$(settingsId);
		} catch (e) {
			return [];
		}
	};
	return {
		write: async (settingsId, settings) => {
			const key = storagePrefix + settingsId;
			try {
				await post$(key, settings)
			} catch (e) {
				// eslint-disable-next-line no-console
				console.error(e);
			}
		},
		read,
	};
};
