export interface RemoteParams {
	prefix?: string;
	get$?: (key: string) => Promise<unknown>;
	post$?: (key: string, value: any) => Promise<unknown>;
}

export default (params: RemoteParams = {}) => {
	const {
		prefix = '',
		get$ = () => Promise.resolve(null),
		post$ = () => Promise.resolve(null),
	} = params;
	const read = async (settingsId: string) => {
		try {
			return await get$(prefix + settingsId);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};
	return {
		write: async (settingsId: string, settings = {}) => {
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
