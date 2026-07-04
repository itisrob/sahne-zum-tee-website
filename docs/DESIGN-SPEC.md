# Sahne zum Tee? — Das Kiez Quiz · Design-Spec

Website-Rebuild der Canva-Vorlage (5 Seiten, Design-Canvas je 1536×1024 px).
Quelle: Canva-Design DAHObqnpRcY (Kopie in Roberts Account). Referenz-PNGs unter `assets/img/pages/`.

## Seiten

| Datei | Inhalt | Bauweise |
|---|---|---|
| `index.html` | Startseite: Hero (Ebenen), 3 Karten, Polaroid-Reihe, CTA | komplett HTML-Ebenen nach Blueprint |
| `termine.html` | Termine: Himmel-Header, Filter-Pills, Event-Liste, Zettel | HTML nach Blueprint auf `pages/termine-bg.png` |
| `das-quiz.html` | Quiz: Hero-Band + 7 Karten-Crops | Crops + Scroll-Stagger, versteckter semantischer Text |
| `galerie.html` | Galerie: Titel, Filter, 10 Polaroids, Video | Crops + HTML-Pills, Masonry-artiges Grid |
| `kontakt.html` | Kontakt: Titel, 5 Kontakt-Zeilen, Kiez-Karte | HTML-Zeilen + Karten-Crop |

## Design-Tokens (css/style.css `:root`)

- `--bg: #F5EFE3` (Seiten-Grund, warmes Creme)
- `--panel: #F0E3D0` (Karten-Beige)
- `--ink: #222222` · `--navy: #001F3D`
- `--pink: #E1275A` (Akzent, aktive Nav, Buttons)
- `--blue: #00B2E9` (Logo-Subline, Akzente)
- `--cream: #F4E9D9` (Button-Text)

## Typografie

| Rolle | Font | Fallback für Original |
|---|---|---|
| Display-Caps (Karten-Titel, Nav-Variante, Zahlen, STRASSMANNS) | **Lovelo Black** (self-hosted, `assets/fonts/Lovelo-Black.woff`, family `Lovelo`) | Original identisch (Lovelo) |
| Marker-Headlines (SAHNE ZUM TEE?, NÄCHSTER TERMIN, WER SIND WIR?) | **Permanent Marker** (Google) | Le petit cochon (kommerziell) |
| Gemalte Titel (TERMINE groß, „Das Kiezquiz“-Sublines) | **Caveat Brush** (Google) | Balmy (kommerziell) |
| Runde Tile-Labels (Karte 3 Startseite) | **Fredoka 600** (Google) | Bobby Jones (kommerziell) |
| Navigation, Buttons, Labels | **Barlow Condensed 600/700**, caps, letterspacing 0.04em | Original teils Barlow Condensed / Lovelo |
| Fließtext | **Josefin Sans 400/700** (Google) | identisch |
| Hero-Tagline | **Barlow 500** | identisch |

## Skalierungssystem

`--su: min(1px, 100vw / 1560)` — 1 Design-Pixel. Stage-Sektionen: `width: calc(1536*var(--su))`,
absolute Positionierung per `calc(N*var(--su))`. Blueprint-Koordinaten (Zentrum cx/cy, Breite, Rotation)
in `docs/canva-blueprint.json` + `docs/blueprint-termine.txt`. Unter 820px: gestapeltes Mobile-Layout.

## Animationen (js/main.js + CSS)

- **Scroll-Reveal**: `.rv` (fade-up), `.rv-pop` (scale), Stagger via `style="--d:.15s"`, IntersectionObserver.
- **Hero-Parallax**: Ebenen mit `data-depth` (0.05–0.3) bewegen sich bei Scroll + leicht bei Mausbewegung.
- **Wolken**: `.cloud-drift` Keyframe-Drift (60–120s Loops), Doodle-Wolken + Vögel.
- **Hover**: Polaroids wiggle+lift (`.polaroid:hover`), Buttons bounce, Nav-Links Pink-Underline-Grow.
- **prefers-reduced-motion**: alle Animationen aus.

## Navigation (alle Seiten identisch)

Logo links: „SAHNE ZUM TEE?“ (Permanent Marker) + „DAS KiEZQUiZ“ (pink) + Krone (`deco/krone-schwarz.png`)
+ roter Strich (`strokes/rot-150.png`). Links: STARTSEITE · TERMINE · DAS QUIZ · ÜBER UNS (→ index#team) ·
GALERIE · KONTAKT (Barlow Condensed 700). Aktiv: pink + Stroke-Unterstreichung. Rechts: Instagram/Facebook (Inline-SVG).

## Footer (alle Seiten)

`kontakt/footer-band.png` (1536×206, Abend-Skyline mit „SAHNE ZUM TEE? KNEIPENQUIZ AUS FRIEDRICHSHAIN.“).
Auf Termine-Seite stattdessen Tag-Skyline `termine/skyline-tag.png` direkt über dem Footer möglich.

## Chat-Widget (Stub, alle Seiten)

Fixed unten rechts: runder Button mit Cali-Avatar (`team/avatar-cali.png`), öffnet Panel
„Wuff! Ich bin Cali 🐾 — bald beantworte ich hier eure Fragen.“ + Reservieren-Link. JS-Hook `window.KiezChat`.

## Inhalte / Wording

Exakte Texte aus dem Design übernehmen (siehe Blueprints + Referenz-PNGs). Instagram: @sahne.zum.tee.quiz ·
Mail: hallo@sahne-zum-tee.de · Ort: Straßmanns, Haberlandstr. 11, 10247 Berlin (im Design „ORT XXXX“ auf Startseite-Karte).
Termine (Design-Stand): 31. Sa 19:30 Straßmanns (AUSVERKAUFT) · 14. Sa 19:30 · 28. Sa 19:30 · 12. Sa 19:30 SPECIAL EDITION.
