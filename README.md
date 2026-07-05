# TM Plant — website

Modern, professional one-page site for **TM Plant**, Cumbria's machinery service &
repair centre (Carlisle). Built 2026-07-05 from the Facebook page as a pitch/preview.

- **Live preview:** `PORT=3244 node serve.mjs` → http://localhost:3244
- **Stack:** hand-composed single `index.html` (inline CSS) + `tokens.css`, self-hosted
  Sora + Figtree (variable woff2), Phosphor icons (async), GSAP scroll reveals.
- **Scores (desktop Lighthouse):** Performance **100**, Accessibility **98**, CLS **0**,
  LCP 0.5s. Fully self-contained — no external images, fonts self-hosted.

## Sections
Hero · trust strip · services (bento) · machinery categories · process · why-us + stats ·
proof band (real 5.0 / 6 FB reviews) · service-area map · contact + quote form · footer.

## Real business facts used (from the Facebook page)
- Tagline: "If you have any garden or building machinery problem or enquiry, we can provide a solution."
- Services shown: servicing, repairs/diagnostics, collection & delivery, sales, parts/blades/sharpening.
- Location: Unit 6 Thomas Street, Denton Holme, Carlisle, CA2 5DZ.
- Area: Carlisle, Dalston, Penrith, Keswick, Alston & across Cumbria.
- Phone 07506 856080 · tmplantservice@gmail.com · IG @tmplantservice · FB 1.6K followers, 100% recommend (6 reviews).

## Before this goes live — confirm with TM Plant / Kyle
1. **Do they HIRE out plant too?** Their FB posts emphasise *service & repair* ("fully repaired
   and serviced"), so the site is built around service / repair / sales / collection, NOT hire.
   If they also hire machinery out, add a Hire section.
2. **Contact form** posts to a Formspree **placeholder** (`formspree.io/f/your-form-id`) — it will
   not deliver until a real endpoint is added. Call/email links work now.
3. **Opening hours** are not shown (unknown — not invented). Add if wanted.
4. **Domain** assumed `tmplant.co.uk` in canonical / OG / sitemap — swap for the real one.
5. **Testimonials:** only the real aggregate (5.0, 6 FB reviews) is shown, with a "Read reviews"
   link — no quotes were invented. Pull the 6 real Facebook review texts to add quote cards.
6. **Photos (optional):** none used (AI image gen was unavailable this session; the gradient +
   topographic hero stands on its own). For extra warmth, drop real TM Plant van / workshop /
   machinery job photos into a gallery — they have plenty on Facebook.

## Assets
- `og-image.jpg` (1200×630) generated from `og-card.html` via `node capture-og.mjs`.
- `favicon.svg`, `robots.txt`, `sitemap.xml`, `_headers` in place.
- Full-page screenshots in `temporary screenshots/` (via `node capture-full.mjs`).
