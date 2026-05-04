import { autocompleteKeybindings } from '@neovici/cosmoz-autocomplete';
import '@neovici/cosmoz-tokens';
import { useKeybindings } from '@neovici/cosmoz-utils/keybindings';
import { component, html } from '@pionjs/pion';
import type { Preview } from '@storybook/web-components-vite';
import i18next from 'i18next';
import './preview.css';

i18next.init({
	lng: 'en',
	resources: {
		en: {
			translation: {
				'No results found': 'No results found',
			},
		},
	},
});

/**
 * Component that provides keybindings context for all stories.
 * Uses children prop instead of slot since shadow DOM is disabled
 * to allow context events to bubble up to the provider.
 */
customElements.define(
	'storybook-keybindings',
	component(
		(props) => {
			const register = useKeybindings(autocompleteKeybindings);
			return html`<cosmoz-keybinding-provider .value=${register}>
				${props.content}
			</cosmoz-keybinding-provider>`;
		},
		{ useShadowDOM: false },
	),
);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/iu,
				date: /Date$/iu,
			},
		},
		layout: 'fullscreen',
	},
	decorators: [
		(story, context) => {
			const isDark = context.globals?.theme === 'dark';

			if (isDark) {
				document.documentElement.classList.add('dark-mode');
			} else {
				document.documentElement.classList.remove('dark-mode');
			}
			return html`
				<storybook-keybindings
					.content=${html`<div class="story-root">${story()}</div>`}
				></storybook-keybindings>
			`;
		},
	],
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'sun', title: 'Light' },
					{ value: 'dark', icon: 'moon', title: 'Dark' },
				],
				dynamicTitle: true,
			},
		},
	},
};

export default preview;
