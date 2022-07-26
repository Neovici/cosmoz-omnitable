export default ({ prefix = '', get$, post$ } = {}) => {
	const read = async (settingsId) => {
		try {
			// eslint-disable-next-line no-console
			return await get$(prefix + settingsId);
		} catch (e) {
			console.error(e);
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
