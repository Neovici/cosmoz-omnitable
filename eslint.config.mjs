import neoviciConfig from '@neovici/cfg/eslint/index.mjs';

export default [
	{ ignores: ['coverage/**', '__snapshots__/**', 'storybook-static/**'] },
	...neoviciConfig,

	// Override rules for demo files (migrated from demo/.eslintrc.json)
	{ files: ['demo/**/*.js'], rules: { 'no-console': 'off' } },

	// Override strict Mocha rules for test files
	{
		files: ['test/**/*.js'],
		rules: {
			'mocha/max-top-level-suites': 'off',
			'mocha/no-setup-in-describe': 'off',
			'mocha/no-identical-title': 'warn',
			'mocha/no-top-level-hooks': 'warn',
			'mocha/no-pending-tests': 'warn',
		},
	},
];
