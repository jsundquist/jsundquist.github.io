# digital-portfolio.net

Personal site for Jonathan Sundquist — experience, projects, and a blog. Built with [Astro](https://astro.build), React, and [shadcn/ui](https://ui.shadcn.com), deployed to GitHub Pages at [digital-portfolio.net](https://digital-portfolio.net).

## Project structure

```text
/
├── public/           static assets (images, favicon, CNAME)
├── src/
│   ├── components/    Astro/React components, including shadcn/ui primitives
│   ├── content/       blog posts (MDX)
│   ├── data/          site config and resume/profile data
│   ├── layouts/       shared page layouts
│   └── pages/         file-based routes
└── tests/             Playwright e2e suite
```

## Commands

All commands are run from the root of the project:

| Command             | Action                                      |
| :------------------- | :------------------------------------------- |
| `pnpm install`       | Install dependencies                         |
| `pnpm dev`            | Start local dev server                       |
| `pnpm build`          | Build production site to `./dist/`           |
| `pnpm preview`        | Preview the production build locally         |
| `pnpm test:e2e`       | Run the Playwright e2e suite                 |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
