import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
	framework: '@storybook/web-components-vite',
	stories: ['../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-docs'],
	docs: {
		defaultName: 'Documentation',
	},
};

export default config;
