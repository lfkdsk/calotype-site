# calotype-site

Static landing page for Calotype, an iPhone camera app in public beta on TestFlight.

- `index.html`, `privacy.html` — Chinese
- `en/index.html`, `en/privacy.html` — English
- `assets/` — stylesheet, one small script (replays the hero animation), brand mark,
  Open Graph image (`og.svg` is the source of `og.png`)
- `samples/` — gallery photos, empty until approved (see `samples/README.md`)

Plain HTML and CSS with no build step, no external fonts, scripts, analytics or
cookies. Published with GitHub Pages from the root of `main`; the custom domain is
set in `CNAME`. Preview locally with `python3 -m http.server` from this folder.
