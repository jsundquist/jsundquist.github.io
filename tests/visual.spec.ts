import { test, expect, type Page } from '@playwright/test';

// Baselines are rendered on Linux (CI). Font rasterization differs per OS, so
// comparing against them elsewhere would always fail.
test.skip(process.platform !== 'linux', 'visual baselines are Linux-only');

const POST = '/blog/building-a-claude-code-knowledgebase-mcp';

const pages = [
	{ name: 'home', path: '/' },
	{ name: 'blog-index', path: '/blog' },
	{ name: 'blog-post', path: POST },
];

const viewports = [
	{ name: 'desktop', width: 1280, height: 800 },
	{ name: 'mobile', width: 390, height: 844 },
];

// The contribution chart is fetched from a third-party API at build time and
// changes daily, so it is masked. Its grid is a fixed height, so masking keeps
// the surrounding layout stable.
async function snapshot(page: Page, name: string) {
	const chart = page.locator('#github-activity');
	test.skip(
		name.startsWith('home') && (await chart.count()) === 0,
		'contribution chart unavailable at build time; layout would shift',
	);

	await expect(page).toHaveScreenshot(`${name}.png`, {
		fullPage: true,
		animations: 'disabled',
		mask: [chart],
	});
}

for (const viewport of viewports) {
	test.describe(viewport.name, () => {
		test.use({
			viewport: { width: viewport.width, height: viewport.height },
			colorScheme: 'light',
		});

		for (const { name, path } of pages) {
			test(`${name} matches snapshot`, async ({ page }) => {
				await page.goto(path);
				await page.waitForLoadState('networkidle');
				await snapshot(page, `${name}-${viewport.name}`);
			});
		}
	});
}
