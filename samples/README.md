# samples/

Sample photos for the gallery section on the home pages. This folder is empty on
purpose: only photos that have been individually approved for public use go here.
Do not add placeholder or stock images.

To publish samples:

1. Export each approved photo as JPEG (or WebP), long edge about 1600 px, and strip
   location metadata. Name them `01.jpg`, `02.jpg`, … in display order.
2. In `index.html` and `en/index.html`, find the section with `id="samples"`,
   copy the commented `<li>` template once per photo, and fill in `src`,
   `width`/`height` (the real pixel size), a descriptive `alt`, and the caption.
   The English page uses `../samples/…` paths.
3. Remove the `hidden` attribute from that `<section>` in both files.
4. Check both pages at phone width and in light and dark mode.
