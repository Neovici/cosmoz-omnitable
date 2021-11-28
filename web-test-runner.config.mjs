import { chromeLauncher } from '@web/test-runner';
import { seleniumLauncher } from '@web/test-runner-selenium';
import webdriver from 'selenium-webdriver';
import firefox from 'selenium-webdriver/firefox.js';

export default {
	nodeResolve: true,
	coverageConfig: {
		reportDir: 'coverage',
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
	files: [
		'test/**/*test.js'
	],
	browsers: [
		chromeLauncher(),
		seleniumLauncher({
			driverBuilder: new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless())
		})
	]

};
