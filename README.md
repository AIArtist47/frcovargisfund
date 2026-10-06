# frcovargisfund.org redesign

Static site, no dependencies beyond Node 18+.

```bash
npm run dev     # builds to dist/, serves http://localhost:4173, rebuilds on save
npm run build   # one-off build to dist/ (deploy this folder)
```

- `src/pages/*.html` holds page content. Each starts with a `<!-- page {...} -->` block (title, description, active nav).
- `src/partials/` holds the shared head, header (notice bar, nav, floating nav, menu) and footer.
- `src/assets/css/styles.css` holds the whole design system; tokens are at the top. See `DESIGN.md`.
- File names match the current site (`donate-now.html`, `sips-for-scholarship.html`, ...) so existing links keep working.
  `event-gallery.html` redirects to `events.html#recap`.

## Deployment (Vercel + GitHub)

- Vercel builds with `npm run build` and serves `dist/` (see `vercel.json`). No dependencies to install.
- With the GitHub repository connected, every push to `main` deploys to production and every
  pull request gets its own preview URL.
- `*.vercel.app` addresses send `X-Robots-Tag: noindex`, so the redesign does not compete with
  the live frcovargisfund.org in search. Once the custom domain points at Vercel, it is indexed normally.
- `vercel.json` also sets basic security headers and redirects `/event-gallery.html` to `/events.html#recap`.

## Before launch

- Photos and videos are hot-linked from the current Weebly host. Download them, then point
  the `B` and `V` tokens in `build.mjs` at the local folders.
- The contact form opens the visitor's email app (no backend). Swap in a form service if preferred.
- Smooth scrolling loads Lenis from jsDelivr with an integrity hash (`src/partials/footer.html`).
  To self-host, save `lenis.min.js` into `src/assets/js/` and point the script tag there.
- The notice bar and dinner promos hide themselves automatically after November 6, 2026.
- Add captions to the four videos (see `ACCESSIBILITY-AUDIT.md`).
