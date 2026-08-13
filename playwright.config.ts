import { defineConfig, devices } from '@playwright/test';

const PORT = 4322;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: 'html',
	use: {
		baseURL,
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
	webServer: {
		// Astro's dev/preview servers auto-daemonize when run by an agent
		// (e.g. Claude Code), which breaks Playwright's process management.
		// ASTRO_PREVIEW_BACKGROUND opts back into normal foreground behavior.
		command: `pnpm exec astro build && ASTRO_PREVIEW_BACKGROUND=false pnpm exec astro preview --port ${PORT}`,
		url: baseURL,
		reuseExistingServer: !process.env.CI,
		timeout: 60_000,
	},
});
