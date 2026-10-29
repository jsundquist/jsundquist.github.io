import { test, expect } from '@playwright/test';

test('home page loads and renders the hero and sections', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Jonathan Sundquist');
	await expect(page.getByText("Hi, I'm Jonathan")).toBeVisible();

	await expect(page.locator('#about')).toBeVisible();
	await expect(page.locator('#work')).toBeVisible();
	await expect(page.locator('#skills')).toBeVisible();
	await expect(page.locator('#projects').first()).toBeVisible();
	await expect(page.locator('#contact')).toBeVisible();
});

test('home page shows recent posts, GitHub activity, and footer', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#recent-posts')).toBeVisible();
	await expect(page.locator('#recent-posts a[href^="/blog/"]').first()).toBeVisible();
	// The contribution chart is hidden if the API is unreachable at build time.
	const chart = page.locator('#github-activity');
	if (await chart.count()) {
		await expect(chart).toBeVisible();
	}
	await expect(page.locator('footer a[href="/rss.xml"]')).toBeVisible();
});

test('rss feed is served with blog items', async ({ request }) => {
	const response = await request.get('/rss.xml');
	expect(response.status()).toBe(200);
	const body = await response.text();
	expect(body).toContain('<rss');
	expect(body).toContain('<item>');
});

test('nav dock links to home and blog, and social links resolve', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('a[href="/"]').first()).toBeVisible();
	await expect(page.locator('a[href="/blog"]').first()).toBeVisible();

	const githubLink = page.locator('a[href="https://github.com/jsundquist"]').first();
	const linkedinLink = page.locator('a[href="https://linkedin.com/in/jonathansundquist"]').first();
	await expect(githubLink).toBeVisible();
	await expect(githubLink).toHaveAttribute('target', '_blank');
	await expect(linkedinLink).toBeVisible();
	await expect(linkedinLink).toHaveAttribute('target', '_blank');
});

test('blog index lists posts and links to a post', async ({ page }) => {
	await page.goto('/blog');
	await expect(page).toHaveTitle(/Blog/);

	const postLink = page.locator('a[href^="/blog/"]:not([href^="/blog/tag/"])').first();
	await expect(postLink).toBeVisible();

	await postLink.click();
	await expect(page).toHaveURL(/\/blog\/[^/]+\/?$/);
	await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
	await expect(page.getByText(/min read/)).toBeVisible();
});

test('nav dock navigates from blog back to home', async ({ page }) => {
	await page.goto('/blog');
	await page.locator('a[href="/"]').first().click();
	await expect(page).toHaveURL(/\/$/);
	await expect(page.getByText("Hi, I'm Jonathan")).toBeVisible();
});

test('unknown route returns a 404', async ({ page }) => {
	const response = await page.goto('/this-page-does-not-exist');
	expect(response?.status()).toBe(404);
});
