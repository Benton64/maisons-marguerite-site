# Les Maisons de Marguerite — Design System

A high-end French hospitality brand for **three premium short-term rentals**: a stone *maison* in the Périgord, a seaside *appartement* in Biarritz, and a *duplex* in Paris 16e. The site is a vitrine — an editorial showcase, not a booking funnel. The aim is to make the reader want to *linger*, not click.

> Stack target: **Next.js 14 + Tailwind CSS + Framer Motion + Lucide Icons**

---

## Sources

- `uploads/MaisonMarguerite-OneColor.svg` → `assets/logo-onecolor.svg`
- `uploads/MaisonMarguerite-OneColorBG.svg` → `assets/logo-onecolor-bg.svg`
- `uploads/MaisonMarguerite-Reversed.svg` → `assets/logo-reversed.svg`
- Brand brief (colors, typography, voice): see `BRIEF.md` excerpt below.
- Visual benchmarks: plumguide.com, airelles.com, chateau-la-coste.com, maisonco.fr.

No codebase or Figma was attached — this system is built from the visual brief and the logo files. Flag any assumptions for the user to confirm.

---

## Index

```
README.md                  This file — brand, content, visual, iconography
SKILL.md                   Skill manifest for Claude Code reuse
colors_and_type.css        Foundations: color tokens, type scale, spacing, motion, base components
assets/
  logo-onecolor.svg          Forest-green M monogram + wordmark
  logo-onecolor-bg.svg       Monogram on bronze background
  logo-reversed.svg          Reversed / white-on-forest
fonts/                     (Google Fonts used at runtime — see note below)
preview/                   Design-system cards (rendered in the Design System tab)
ui_kits/
  website/                   Marketing site UI kit (Next.js-style components)
```

---

## The brand at a glance

The logo is the brief. A handwritten **M**, drawn with a single dipped-pen stroke, with a long vertical descender that drops down between the two words *MAISON · MARGUERITE* and physically separates them. That **organic flourish vs. geometric petites capitales** is the entire visual DNA: a thread of warm calligraphic gesture stitched through cool, restrained editorial layout. Every layout decision should keep one foot in each camp — never fully ornate, never sterile.

Three properties, one voice:

| Property | Personality |
|---|---|
| **Maison Périgord** | Stone, oak, slow mornings, foie gras at sunset. Country-house warmth. |
| **Appartement Biarritz** | Atlantic light, linen, pale wood, salt. Coastal but tailored. |
| **Duplex Paris 16e** | Haussmann ceilings, herringbone parquet, hushed luxury. |

---

## Content fundamentals

**Voice.** French, editorial, hushed. We address the reader as *vous*, never *tu*. We never sell — we *invite*. The reader is a host's friend, not a customer.

**Tone.** Calm, precise, sensory. Short declarative phrases. The occasional italic flourish in Cormorant — *un balcon donnant sur la baie*, *un feu de bois en novembre*. Never exclamation points. Never marketing capitalisation (no Title Case In Headlines) — only sentence case for body, ALL CAPS only for the petites capitales label treatment.

**Casing.**
- Headlines: sentence case in Cormorant — *Trois maisons, trois saisons*.
- Labels: ALL CAPS, DM Sans 500, 0.08em tracking — *NOS MAISONS*, *RÉSERVER UN SÉJOUR*.
- Property names always in petites capitales with 0.18em tracking — *MAISON PÉRIGORD*.

**Vocabulary.** *Maison, séjour, hôte, table, jardin, terrasse, alcôve, parquet, cheminée, persiennes.* Avoid hotel-speak: no "amenities", no "guests" — *invités*.

**Emoji.** Never. The brand is wholly typographic.

**Examples (sample copy, sentence-case headlines + italic insets):**

> *Bienvenue.*
> Trois adresses choisies, trois manières d'habiter la France.
> [DÉCOUVRIR NOS MAISONS]

> *Maison Périgord — à partir de mai*
> Une longère de pierre, deux hectares de prairie, un verger de mirabelliers. Quatre chambres, six invités, une grande table sous les tilleuls.

---

## Visual foundations

### Colors

Bound to the brief, no substitutions.

| Token | Hex | Usage |
|---|---|---|
| `--mm-bg` | `#F7F3EC` | General background — warm linen |
| `--mm-bg-alt` | `#FAFAF8` | Alternating sections — softer ivory |
| `--mm-forest` | `#2D4A3E` | Titles, CTAs, footer ground |
| `--mm-ink` | `#1A1A1A` | Body text |
| `--mm-bronze` | `#8B6F4E` | Accents, separators, icons, labels — **wood, level 1** |
| `--mm-bronze-soft` | `#D4C5B0` | Borders; footer text on forest |
| `--mm-card-hover` | `#E8F0EC` | Card hover — pale forest echo |
| `--mm-paper` | `#FFFFFF` | CTA text on forest |

### Typography

- **Display / H1–H2 / accents** — *Cormorant Garamond* 400, `letter-spacing: 0.02em`. H1 = 64 / 36 px. H2 = 40 / 28 px.
- **Body / UI / nav** — *DM Sans* 400, 17 / 16 px, 1.6 line height.
- **Labels** — *DM Sans* 500, 13 px UPPERCASE, `letter-spacing: 0.08em`.
- **Petites capitales** for property names — `letter-spacing: 0.18em`.
- **Italic** — Cormorant Garamond Italic, used sparingly for poetic insets and pull-quotes.

### Wood warmth — two levels

- **Niveau 1** — the bronze `#8B6F4E` appears as a consistent thread across the entire site: icon strokes, label color, hairline accents, divider rules.
- **Niveau 2** — a real photographic wood texture appears **only** on elements belonging to *L'Aubade* (the breakfast / table d'hôte feature). Texture at **10% opacity**, layered behind the section as ambient warmth.

### Backgrounds

- Solid linen `#F7F3EC` for the page; sections alternate to `#FAFAF8`.
- Full-bleed photography for hero and property cards — warm, grain-tinted, late-afternoon light. Never blue-hour cool.
- No gradients, no glass, no patterns except the wood texture for L'Aubade.

### Imagery

- Warm, with slight film grain. Tobacco shadows, butter highlights.
- Mostly natural interiors and details — a hand on a banister, a copper saucepan, a window onto a garden. Rarely wide architecture shots.
- Avoid the cold drone aesthetic. The camera is *inside* the house.

### Borders & dividers

- Hairline `1px solid #D4C5B0` for cards and inputs.
- Bronze hairline `1px` at 40% opacity for in-text dividers.
- No shadowed dividers, no inset borders.

### Shadows

Almost never. Two restrained tokens exist:
- `--mm-shadow-card`: a barely-there forest-tinted shadow for lifted cards.
- `--mm-shadow-lift`: a slightly deeper version for modals.

Never glossy, never colored, never blue.

### Corner radii

Almost square. `2px` default, `4px` for cards/inputs. Pill radius only on rare tag chips. **Never** the 16/24px pillowy radius typical of B2B SaaS.

### Cards

`#FAFAF8` ground, 1px bronze-soft border, 4px radius, no shadow at rest. On hover: background fades to `#E8F0EC` over 400ms with an `ease-out` curve, a hairline forest border, and a soft card-shadow lifts in. The card itself does **not** translate or scale — only the surface warms.

### Buttons

- **Primary** — forest fill, white type, uppercase 0.04em tracking, 2px radius, 14×28 padding. Hover darkens to `#25403A`. Active translates 1px down. No shadow.
- **Ghost** — transparent, forest border + text, fills to forest on hover.
- **Link** — bronze text with a 1px bronze underline; both swap to forest on hover.

### Hover states

Always color, never scale (except button-active 1px). Cards warm, links darken, photography subtly increases brightness by 4–6%. Animation duration ~200–400ms, curve `cubic-bezier(0.22, 0.61, 0.36, 1)`.

### Press states

Forest CTA: 1px nudge down, no color change. Cards do not respond to press — they're not buttons.

### Animation

- Editorial fades, no bounces. `ease-out` for entrances, `ease-in-out` for tabs/menus.
- Photography crossfades, never slide-in.
- Page-level enters: 600–800ms `ease-out` for stacked reveals (title → italic kicker → image → grid).
- Avoid parallax. Avoid scroll-jacking. The page should feel like a magazine spread, not a video.

### Transparency & blur

- A soft `rgba(247,243,236,0.85)` blur lives on the sticky top nav only — `backdrop-filter: blur(10px) saturate(1.05)`.
- Modals overlay `rgba(45, 74, 62, 0.4)`.
- Never glassmorphic cards or panels.

### Layout

- **Mobile first.** Two-column compact grid for property tiles on mobile (never one-column stacks for the guide tiles).
- Desktop max width `1280px`, 32px gutters; centered.
- Generous vertical rhythm: section spacing `96px` desktop, `64px` mobile.
- Hairline rules separate sections more often than whitespace alone.
- One sticky element only: the top nav. No floating CTAs, no sticky footers.

### Capsules vs. protection gradients

Photography uses **subtle bottom protection gradients** (forest → transparent, 0 → 30% height, 30% opacity max) to seat title overlays. Capsules (pill-shaped pickups) are *not* used — text sits directly on photography with the gradient doing the lifting.

---

## Iconography

**Library:** [Lucide Icons](https://lucide.dev) (CDN, matches Next.js + Tailwind stack).

- **Stroke** weight `1.5px`, never filled.
- **Color** always `--mm-bronze` (`#8B6F4E`) — the *wood thread* at level 1.
- **Size** typically 18 or 20px inline, 24px for section headers, 32–40px for large feature blocks.
- Never use icons as decorative noise. One icon per concept, accompanying a label.
- No emoji, ever.
- No Unicode symbols as icons (no ✓ ✦ ★) except a single em-dash `—` used liberally as a typographic separator.

**Sample lucide names used:** `MapPin`, `BedDouble`, `Utensils`, `Trees`, `Wind`, `KeyRound`, `Sparkle`, `Calendar`, `ArrowRight`.

If a needed icon isn't in Lucide, find the closest match (same `1.5px` stroke), and flag the substitution.

---

## Caveats / things flagged for the user

- **Font files.** Cormorant Garamond and DM Sans are loaded from Google Fonts. If you have brand-licensed `.woff2` files (especially for Cormorant — there are several optical-sized cuts that read very differently), please attach them and we'll host locally for production.
- **Photography.** Hero and property images are not provided. We use restrained colored panels in their place and call them out as `[ photographic placeholder ]`. Send a small set when ready and we'll swap them in.
- **L'Aubade wood texture.** No texture asset was attached, so we synthesised a CSS-grain approximation. Please send the true photographic wood image for the production build.
- **Property addresses, copy.** All sample copy is invented. Replace with real strings from the editorial team.

---

## See also

- `SKILL.md` — load this design system into Claude Code as a skill.
- `colors_and_type.css` — single-source-of-truth tokens; import into any HTML page.
- `preview/` — Design System tab cards.
- `ui_kits/website/` — high-fidelity marketing-site components.
