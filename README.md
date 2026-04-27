# jestats.io
Repository for the JEStats.io Website

## Deploying to GitHub Pages

This repo is configured to build a static Next.js site into `out/` and deploy it with GitHub Actions.

1. Push these files to GitHub on the `main` branch.
2. In the GitHub repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main`, or run **Actions → Deploy to GitHub Pages → Run workflow**.
5. If you are using `jestats.io` as a custom domain, set it in **Settings → Pages → Custom domain** and make sure your DNS points to GitHub Pages.

This configuration assumes the site is served from the root domain, such as `https://jestats.io`. If you instead deploy at a project URL like `https://YOUR-USER.github.io/jestats.io/`, add `basePath: "/jestats.io"` and `assetPrefix: "/jestats.io/"` to `next.config.mjs`.
