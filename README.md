# Sahne zum Tee? — Das Kiez Quiz 🐾

Website des Kneipenquiz aus Berlin-Friedrichshain — 1:1-Nachbau der Canva-Vorlage als statische
Multi-Page-Site mit Parallax-Wolken, Hover-Effekten und Scroll-Animationen.

## Seiten

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite: Ebenen-Hero (Parallax), Nächster Termin, Team, Kiez-Quiz-Tiles, Polaroids, CTA |
| `termine.html` | Quiz-Abende mit Filter-Pills, Event-Karten, „Gut zu wissen“-Zettel |
| `das-quiz.html` | Ablauf, Beispiel-Fragen, Hall of Fame, Quizregeln |
| `galerie.html` | Polaroid-Galerie mit Filtern (Sieger/Teams/Momente/BTS/Videos) |
| `kontakt.html` | Kontaktwege + illustrierte Kiez-Karte |

## Struktur

- `css/style.css` — Design-Tokens, Nav/Footer, Buttons/Pills, Animations-System (`.rv`-Reveals, Wolken-Drift)
- `js/main.js` — Scroll-Reveals (IntersectionObserver), Parallax (`data-depth`), Filter, Chat-Widget
- `assets/img/` — semantisch benannte Design-Assets · `assets/_canva_raw/` — unveränderte Originale
- `assets/fonts/` — Lovelo Black (frei, self-hosted); Rest via Google Fonts
- `docs/DESIGN-SPEC.md` — Bauplan/Tokens · `docs/canva-blueprint.json` — extrahierte Canva-Element-Koordinaten

## Skalierung

Design-Canvas 1536 px; `--su = min(1px, 100vw/1560)` ist 1 Design-Pixel. Desktop rendert die Vorlage
proportional pixelgenau, unter 820 px greifen gestapelte Mobile-Layouts.

## Chatbot

Auf jeder Seite sitzt der „Cali“-Chat-Stub (unten rechts). Anbindung später über den Hook:

```js
window.KiezChat.sendMessage = async (text) => { /* Bot-Backend */ };
window.KiezChat.open();
```

## Lokal starten

```bash
npx http-server . -p 8632 -c-1
```

## Hinweise

- Schrift-Substitutionen (Originale kommerziell): Le petit cochon → Permanent Marker, Balmy → Caveat Brush, Bobby Jones → Fredoka. Lovelo Black ist das Original (Fontfabric-Freefont).
- Galerie-Fotos sind aktuell die KI-Illustrationen aus der Vorlage — durch echte Fotos ersetzen.
- Termine sind statisch (Design-Stand) — bei Pflegebedarf JSON/CMS anbinden.
