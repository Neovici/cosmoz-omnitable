export interface RemoteParams {
	prefix?: string;
	get$: (key: string) => Promise<unknown>;
	post$: (key: string, value: any) => Promise<unknown>;
}

export default (params: RemoteParams) => {
	const { prefix = '', get$, post$ } = params;
	const read = async (settingsId: string) => {
		const key = prefix + settingsId;
		try {
			return await get$(key);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};
	const write = async (settingsId: string, settings = {}) => {
		const key = prefix + settingsId;
		try {
			await post$(key, settings);
		} catch (e) {
			// eslint-disable-next-line no-console
			console.error(e);
		}
	};
	return {
		read,
		write,
	};
};
