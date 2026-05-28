import { createContext, useContext, useMemo } from '@pionjs/pion';
import local from './local';

export interface Driver {
	read: (settingsId: string) => Promise<unknown>;
	write: (settingsId: string, settings?: unknown) => Promise<void>;
}

export const DriverContext = createContext(local),
	useDriver = (): Driver => {
		const driver = useContext(DriverContext);
		return useMemo(() => driver(), [driver]);
	},
	registerProvider = () => {
		if (customElements.get('omnitable-settings-driver-provider')) return;

		customElements.define(
			'omnitable-settings-driver-provider',
			DriverContext.Provider,
		);
	};
