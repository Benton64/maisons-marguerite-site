# Website UI Kit — Les Maisons de Marguerite

A high-fidelity recreation of the marketing vitrine for Les Maisons de Marguerite.

## What's in here

| File | What it is |
|---|---|
| `index.html` | The assembled marketing homepage. Open this to see the kit in context. |
| `Nav.jsx` | Sticky top navigation with blur backdrop and language switch. |
| `Hero.jsx` | Full-bleed hero with italic kicker, large display title, two CTAs. |
| `PropertyCard.jsx` | Tile for each maison — photo, name, italic descriptor, meta row, hover state. |
| `PropertiesSection.jsx` | The three-up *Nos maisons* grid (2-col compact on mobile). |
| `AubadeSection.jsx` | The L'Aubade table-d'hôte block — uses the wood texture (niveau 2). |
| `JournalSection.jsx` | Editorial three-card row, "Le journal". |
| `Footer.jsx` | Forest-green footer with reversed logo and contact block. |

## Notes

- All visuals come from the brief and the logo SVGs in `assets/`.
- Photography is represented by carefully-tuned colored panels with protection gradients — swap to real images by replacing the `.photo` backgrounds.
- Icons are Lucide from CDN, stroke 1.5, bronze.
- Built mobile-first; the homepage scales cleanly from 360 → 1440.

## React notes

These JSX components are intentionally cosmetic; they read state from `window.MM_STATE` and render. The marketing site's real router lives in Next.js — these are mocks for design review.
