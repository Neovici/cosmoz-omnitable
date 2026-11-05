import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './test/e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? 'list' : 'html',
	use: {
		baseURL: 'http://127.0.0.1:8080',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		command: 'npm run storybook:preview',
		url: 'http://127.0.0.1:8080',
		reuseExistingServer: !process.env.CI,
		timeout: 180_000,
	},
	expect: {
		toHaveScreenshot: { maxDiffPixels: 0, animations: 'disabled' },
	},
});
