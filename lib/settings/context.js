import { createContext } from 'haunted';

export const SettingsContext = createContext();

customElements.define('settings-provider', SettingsContext.Provider);
