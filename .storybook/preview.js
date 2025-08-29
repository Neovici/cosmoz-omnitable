/** @type { import('@storybook/web-components').Preview } */
const preview = {
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
