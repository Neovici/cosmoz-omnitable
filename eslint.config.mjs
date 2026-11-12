import neoviciConfig from "@neovici/cfg/eslint/index.mjs";

export default [
	{ ignores: ["coverage/**", "__snapshots__/**", "storybook-static/**"] },
	...neoviciConfig,

	// Node-side benchmark driver scripts (page templates run in the browser)
	{
		files: ["testbed/**/*.mjs"],
		languageOptions: {
			globals: {
				console: "readonly",
				process: "readonly",
				Buffer: "readonly",
			},
		},
		rules: {
			"no-console": "off",
			"max-depth": "off",
			"max-statements": "off",
			complexity: "off",
		},
	},

	// Override rules for demo files (migrated from demo/.eslintrc.json)
	{ files: ["demo/**/*.js"], rules: { "no-console": "off" } },

	// Override strict Mocha rules for test files
	{
		files: ["test/**/*.js"],
		rules: {
			"mocha/max-top-level-suites": "off",
			"mocha/no-setup-in-describe": "off",
			"mocha/no-identical-title": "warn",
			"mocha/no-top-level-hooks": "warn",
			"mocha/no-pending-tests": "warn",
		},
	},
];
