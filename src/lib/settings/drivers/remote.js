export default ({ prefix = '', get$, post$ } = {}) => {
	const read = async (settingsId) => {
		try {
			return await get$(prefix + settingsId);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};
	return {
		write: async (settingsId, settings = {}) => {
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
