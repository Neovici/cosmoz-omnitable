import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
	nodeResolve: true,
	browsers: [
		playwrightLauncher({ product: 'chromium' }),
		playwrightLauncher({ product: 'firefox' })
	],
	coverage: true,
	coverageConfig: {
		report: true,
		reportDir: 'coverage',
		nativeInstrumentation: true,
		exclude: ['test/**/*.js', 'demo/**/*.js', 'ui-helpers/*.js', 'node_modules/**'],
		threshold: {
			statements: 70,
			branches: 60,
			functions: 79,
			lines: 70
		}
	},
	testFramework: {
		config: {
			ui: 'tdd'
		}
	},
	files: ['test/**/*test.js']
};
