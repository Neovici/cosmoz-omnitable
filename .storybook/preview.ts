import type { Preview } from '@storybook/web-components-vite';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },

		controls: {
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/iu,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
		// test
	},
};

export default preview;
