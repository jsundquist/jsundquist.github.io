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

test('nav dock links to home and blog, and social links resolve', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('a[href="/"]').first()).toBeVisible();
	await expect(page.locator('a[href="/blog"]').first()).toBeVisible();

	const githubLink = page.locator('a[href="https://github.com/jsundquist"]');
	const linkedinLink = page.locator('a[href="https://linkedin.com/in/jonathansundquist"]');
	await expect(githubLink).toBeVisible();
	await expect(githubLink).toHaveAttribute('target', '_blank');
	await expect(linkedinLink).toBeVisible();
	await expect(linkedinLink).toHaveAttribute('target', '_blank');
});

test('blog index lists posts and links to a post', async ({ page }) => {
	await page.goto('/blog');
	await expect(page).toHaveTitle(/Blog/);

	const postLink = page.getByRole('link', { name: 'Hello, World' });
	await expect(postLink).toBeVisible();

	await postLink.click();
	await expect(page).toHaveURL(/\/blog\/hello-world\/?$/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hello, World');
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
