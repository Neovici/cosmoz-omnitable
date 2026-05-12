import type { Preview } from '@storybook/web-components-vite';
import {
	ensureDemoI18nInitialized,
	setDemoLanguage,
} from '../demo/helpers/i18n.js';

let i18nInitPromise: Promise<void> | undefined;

const initializeStorybookI18n = async () => {
	if (i18nInitPromise != null) {
		return i18nInitPromise;
	}

	i18nInitPromise = ensureDemoI18nInitialized().then(() =>
		setDemoLanguage('en'),
	);
	return i18nInitPromise;
};

const preview: Preview = {
	loaders: [async () => initializeStorybookI18n()],
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/iu,
			},
		},
	},
};

export default preview;
