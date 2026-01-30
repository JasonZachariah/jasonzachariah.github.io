# jasonzachariah.github.io

Portfolio site. The **HTML files in this repo root** (`index.html`, `archive.html`, `about.html`, etc.) are what GitHub Pages serves—no build step, no `dist` folder.

## GitHub Pages setup

In the repo on GitHub: **Settings → Pages → Build and deployment**:

- **Source:** Deploy from a branch  
- **Branch:** `main`  
- **Folder:** `/ (root)`

Then the root HTML files are your live site.

## Deploying (GitHub Desktop)

1. Make your changes.
2. Commit in GitHub Desktop.
3. Push to **main**.

The site updates as soon as you push; no deploy command needed.

## Local development

- **Tailwind:** Run `npm run tw:watch` while editing CSS so `output.css` stays up to date.
- Open the HTML files in a browser or use a simple static server; no dev server required.