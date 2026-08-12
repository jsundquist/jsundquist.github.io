import { test, expect } from '@playwright/test';

test('home page loads and links to the other sections', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Jonathan Sundquist');
	await expect(page.getByRole('heading', { level: 1 })).toContainText("Hi, I'm Jonathan");

	const nav = page.locator('header.site-header nav');
	await expect(nav.getByRole('link', { name: 'About', exact: true })).toBeVisible();
	await expect(nav.getByRole('link', { name: 'Resume', exact: true })).toBeVisible();
	await expect(nav.getByRole('link', { name: 'Blog', exact: true })).toBeVisible();
});

test('about page renders', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveTitle(/About/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('About');
});

test('resume page renders', async ({ page }) => {
	await page.goto('/resume');
	await expect(page).toHaveTitle(/Resume/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Resume');
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

test('nav links navigate between pages', async ({ page }) => {
	await page.goto('/');
	const nav = page.locator('header.site-header nav');

	await nav.getByRole('link', { name: 'About', exact: true }).click();
	await expect(page).toHaveURL(/\/about\/?$/);

	await nav.getByRole('link', { name: 'Resume', exact: true }).click();
	await expect(page).toHaveURL(/\/resume\/?$/);

	await nav.getByRole('link', { name: 'Blog', exact: true }).click();
	await expect(page).toHaveURL(/\/blog\/?$/);

	await nav.getByRole('link', { name: 'Jonathan Sundquist' }).click();
	await expect(page).toHaveURL(/\/$/);
});

test('unknown route returns a 404', async ({ page }) => {
	const response = await page.goto('/this-page-does-not-exist');
	expect(response?.status()).toBe(404);
});
