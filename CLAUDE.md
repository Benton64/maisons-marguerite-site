# CLAUDE.md — Les Maisons de Marguerite v1.4

> Instructions de comportement pour toutes les sessions du Projet Claude.
> Nom court : Maisons Marguerite | Domaine : lesmaisonsdemarguerite.com
> Mis à jour : Mai 2026 — remplace v1.3 intégralement.

---

## CONTEXTE PROJET

Site vitrine + guides clients protégés + PMS maison sur mesure pour 3 biens de location haut de gamme. Ben (non-développeur) construit ce projet avec Claude Code et claude.ai.

**Stack :** Next.js 14 App Router, Tailwind CSS, Framer Motion, next-pwa, Lucide Icons, Supabase, Vercel, Resend, GA4, Cookiebot.

**Repos GitHub :**
- `maisons-marguerite-site` → site vitrine (nouveau repo, MVP prioritaire)
- Repo existant → app PMS Val (phase 4, pas avant)

**Fichiers de référence dans ce projet :**
- `Brief_LesMaisonsDeMarguerite_v1.3.docx` → source de vérité complète
- `design_system_v2_0.md` → charger pour toute session de code ou de design
- `Les_Maisons_de_Marguerite_Design_System.zip` → design system complet avec SVG logos, CSS tokens, composants UI
- `CLAUDE.md v1.4` → ce fichier

---

## PROFIL UTILISATEUR

Ben est non-développeur. Il lit le code avec assistance. Il travaille en français. Les livrables du site sont en français ET en anglais.

**Adapter les réponses :**
- Toujours expliquer le POURQUOI, pas seulement le QUOI
- Instructions numérotées, pas à pas, sans sauter d'étapes
- Signaler les risques et pièges avant qu'ils surviennent
- Ne jamais supposer une connaissance de terminal, npm ou Git
- Proposer un plan avant de coder, attendre validation

---

## LANGUE

- Conversations avec Ben : **français**
- Code (variables, fonctions, commentaires) : **anglais**
- Contenu site vitrine et guides clients : **français ET anglais** (les deux à chaque fois)

---

## BRAND PROMISE

- FR : "Des maisons habitées, jamais mises en scène."
- EN : "Homes that are lived in, never staged."

**Mots à bannir :**
demeure d'exception, prestations haut de gamme, standing, résidence, spacieux, lumineux (adjectif isolé), charges comprises.

**Mots à favoriser :**
maison, caractère, chez soi, attention, prendre le temps, vivant, soigné.

---

## WORKFLOW PAR SESSION — OBLIGATOIRE

Chaque session suit cet ordre sans exception :

1. Identifier la tâche : "on travaille sur [X]"
2. Proposer un plan 3-5 étapes
3. Attendre la validation de Ben avant de coder
4. Produire le code (fichier complet si moins de 150 lignes, sinon composant concerné)
5. **Relire le code produit sous 4 angles avant de le livrer :**
   - Sécurité : variables exposées, middleware, RLS Supabase, cookies httpOnly
   - Structure : respect de l'arborescence définie dans le brief
   - Performance : next/image, fonts, poids assets, lazy loading
   - Design : tokens mm-* uniquement, pas de valeurs couleur ou typo en dur
6. Signaler explicitement tout point d'attention avant que Ben copie-colle
7. Donner le commit message recommandé

**Ce contrôle est automatique. Ben n'a pas besoin de le demander.**

---

## PAS D'AGENTS

Pas d'agents autonomes sur ce projet. Le modèle retenu est :
une session = une tâche = validation avant de continuer.

Ce modèle est plus sûr pour un non-développeur et évite les erreurs non détectées. Ben fait les retours experts lui-même via les sessions Claude, pas via des agents parallèles.

---

## SKILLS — AUCUNE INSTALLATION REQUISE

Les skills (`docx`, `frontend-design`, `pdf`, `xlsx`) sont disponibles nativement dans l'environnement claude.ai. Ils se chargent automatiquement selon le contexte. Ben n'a rien à installer ou configurer côté GitHub.

| Tâche | Skill chargé automatiquement |
|-------|------------------------------|
| Composants Next.js, pages, UI, animations | frontend-design |
| Mise à jour du brief ou tout fichier .docx | docx |
| Exports Excel app Val | xlsx |
| Guide client version PDF imprimable | pdf |
| Analyse d'un fichier uploadé | file-reading |

---

## DESIGN SYSTEM — SOURCE DE VÉRITÉ

Le design system v2.0 est la référence unique pour toutes les décisions visuelles.
Fichier : `design_system_v2_0.md` dans ce projet.
Repo GitHub : dossier `design-system/` dans `maisons-marguerite-site`.

### Tokens couleur (noms CSS dans le code)
```css
--mm-forest:      #2D4A3E   /* titres, CTA, nav active, footer */
--mm-bg:          #F7F3EC   /* fond général crème */
--mm-bg-alt:      #FAFAF8   /* sections alternées */
--mm-bronze:      #8B6F4E   /* accents, séparateurs, labels, icônes */
--mm-bronze-soft: #D4C5B0   /* bordures, footer texte */
--mm-ink:         #1A1A1A   /* corps texte */
--mm-card-hover:  #E8F0EC   /* hover cartes */
```

> Note : le design system zip utilise `mm-forest` / `mm-bronze` / `mm-bg`.
> Le design_system_v2_0.md utilise `mm-green` / `mm-wood` / `mm-cream`.
> Les valeurs hexadécimales sont identiques. Utiliser les noms du zip (`mm-forest`, etc.)
> comme convention définitive dans tout le code produit.

### Logos disponibles
Fichiers dans `/public/logo/` :
- `MaisonMarguerite-OneColorBG.svg` → nav, footer fond crème
- `MaisonMarguerite-OneColor.svg` → usage sur fond blanc/neutre
- `MaisonMarguerite-Reversed.svg` → hero sur photo sombre

---

## RÈGLES DESIGN (NON NÉGOCIABLES)

1. Couleurs : tokens `mm-*` uniquement — jamais de valeurs hex en dur dans le code
2. Typos : Cormorant Garamond (titres) + DM Sans (corps), via `next/font/google`
3. Logo : référencer `/public/logo/`, ne jamais recréer le M manuscrit
4. Texture bois : uniquement sur les éléments L'Aubade (jamais Jaulerry, Iéna, nav, footer)
5. Parallaxe : uniquement sur les sections hero, désactivé sur mobile
6. Images : toujours `next/image` avec `width`, `height`, `alt` obligatoires
7. Icônes interface : Lucide Icons uniquement (`lucide-react`)
8. Footer : fond `--mm-forest`, texte `--mm-bronze-soft`, contenu défini dans le design system

---

## ICÔNES DE NAVIGATION ET PWA

Le M manuscrit du logo est la référence unique pour toutes les icônes système.
Toutes sont générées depuis le fichier SVG source (SPC Enseignes).

| Usage | Taille | Fond |
|-------|--------|------|
| Favicon navigateur | 32x32px | Crème #F7F3EC |
| Apple touch icon (iOS) | 180x180px | Crème #F7F3EC |
| PWA Android | 192x192px et 512x512px | Crème #F7F3EC |

Padding autour du M : 20% sur tous les côtés.
Outil de génération : RealFaviconGenerator.net (gratuit, Claude guide pas à pas).

---

## RÈGLES TECHNIQUES

- Framework : Next.js 14 App Router uniquement
- CSS : Tailwind + tokens `mm-*`. CSS inline uniquement pour valeurs dynamiques Framer Motion.
- Animations : Framer Motion uniquement. Pas de GSAP, pas d'Anime.js.
- PWA : next-pwa dans `next.config.js`
- Images : `next/image`, jamais `<img>` HTML natif
- Env vars : `.env.local`, préfixe `NEXT_PUBLIC_` si exposées au client
- Supabase : `@supabase/supabase-js` v2, RLS activé sur toutes les tables
- Middleware protection `/bienvenue/*` : cookie httpOnly côté serveur, jamais exposé client
- Sécurité headers : X-Frame-Options, CSP dans `next.config.js`

---

## STRUCTURE DES FICHIERS

```
/app
  /(public)         → pages publiques vitrine
  /(protected)      → guides clients /bienvenue/*
  /admin            → PMS maison Val
/components
  /ui               → boutons, cartes, formulaires, newsletter
  /sections         → sections de pages
/lib                → utilitaires, client Supabase, helpers
/public
  /images           → photos par bien (/aubade /jaulerry /iena)
  /logo             → MaisonMarguerite-OneColor.svg
                      MaisonMarguerite-OneColorBG.svg
                      MaisonMarguerite-Reversed.svg
  /icons            → favicon 32x32 / apple-touch 180x180 (à générer)
  /og               → images Open Graph 1200x630px
/styles             → globals.css avec variables CSS
/design-system      → référence visuelle (ne pas modifier)
```

---

## ROADMAP — ÉTAT D'AVANCEMENT (Mai 2026)

### Fait
- Brief v1.3 complet avec contenu éditorial FR+EN pour les 3 biens
- Design system v2.0 complet (tokens, composants, logos SVG)
- Wireframes homepage lo-fi (options A, B, C — option C retenue)
- Repo `maisons-marguerite-site` créé sur GitHub avec design system
- CLAUDE.md v1.4

### En cours
- Mockup homepage haute fidélité (Claude Design)
- Sélection et traitement photos (Google Photos → Lightroom Mobile → Squoosh)

### À faire — dans l'ordre
1. Mockup homepage validé visuellement
2. Next.js installé + fondations techniques (Phase 1)
3. Homepage codée (Phase 2 MVP)
4. Page /aubade + guide /bienvenue/aubade
5. Pages Jaulerry et Iéna
6. App Val : appliquer design system au repo existant (Phase 4)

---

## PHOTOS — WORKFLOW

Sources : Google Photos (photos iPhone/Pixel existantes)
Traitement : Lightroom Mobile sur Pixel (preset MM Base) → export JPEG
Compression : Squoosh.app (200-400 Ko heroes, 80-150 Ko thumbnails)
Recadrage : Photos Apple sur Mac (ratio 3:2 cartes, hero plein écran)

Preset MM Base (Lightroom Mobile) :
- Température +15, Teinte -5
- Exposition +0.20, Contraste -10
- Hautes lumières -30, Ombres +20
- Clarté -5, Vibrance +8

---

## CONVENTIONS DE NOMMAGE

- Composants React : PascalCase (`HeroSection.tsx`, `PropertyCard.tsx`)
- Fichiers non-composants : kebab-case (`use-scroll.ts`, `supabase-client.ts`)
- Variables et fonctions : camelCase
- Variables d'environnement : UPPER_SNAKE_CASE

---

## DOMAINE

- **À acheter : lesmaisonsdemarguerite.com + .net + .fr**
- Le .com est la référence principale (clientèle internationale)
- .net et .fr : protection de marque (~4 EUR/an chacun)

---

## HORS PÉRIMÈTRE — Ne jamais proposer

- Autres frameworks : Astro, Remix, Nuxt, SvelteKit
- Autres bases de données : Firebase, PlanetScale, MongoDB
- Hébergement VPS ou auto-hébergé
- PMS tiers : Lodgify, Smoobu, Hostaway (le PMS est construit en interne)
- Agents autonomes
- Recréer le logo M manuscrit
- Autres librairies d'icônes que Lucide Icons
- Mettre le code de l'app Val dans le repo site vitrine

---

## DÉCISIONS PRISES — Ne pas remettre en question

- Domaine : lesmaisonsdemarguerite.com (.com principal, .net et .fr protection)
- Prix : affichés sur le site (décision de Val, v1.3)
- Homepage : Option C retenue (hero image unique + strip sélecteur 3 maisons + lignes alternées)
- Contact : Val uniquement, réponse 48h ouvrables
- Analytics : Google Analytics 4 + Cookiebot (gratuits)
- Architecture : 3 biens, collection fermée
- PMS : application maison sur mesure, pas de tiers, repo séparé
- Instagram : un seul compte, moments de vie, pas de pub
- Agents : aucun
- Skills : natifs claude.ai, aucune installation GitHub requise
- Icônes : M manuscrit sur fond crème pour tous les usages système
- Tokens CSS : convention `mm-forest` / `mm-bronze` / `mm-bg` (noms du zip)
- Mockup : 1 seul mockup homepage haute fidélité avant Claude Code
- Repos : 2 repos séparés (site vitrine / app Val)
- Piscine L'Aubade : chauffée juin-août uniquement (mai, sept., oct. disponible sans chauffage)

---

*Les Maisons de Marguerite — CLAUDE.md v1.4 — Mai 2026*
