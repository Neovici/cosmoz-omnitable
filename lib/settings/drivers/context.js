import { createContext, useContext, useMemo } from 'haunted';
import local from './local';

export const DriverContext = createContext(local),
	useDriver = () => {
		const driver = useContext(DriverContext);
		return useMemo(() => driver(), [driver]);
	},
	registerProvider = () =>
		customElements.define(
			'omnitable-settings-driver-provider',
			DriverContext.Provider
		);
