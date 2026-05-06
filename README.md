# The Dev Space Terminal

Portfolio WebXR immersif — **[brandondegbe.me](https://brandondegbe.me)**

> Cyber terminal en 3D : Hub Central · Projects Bay · Skills Core

---

## Stack

| Couche | Technologie |
|--------|-------------|
| Build | Vite 5+ |
| Framework 3D | A-Frame 1.6+ |
| Hébergement | GitHub Pages |
| Domaine | brandondegbe.me |
| Fallback | HTML5 / CSS3 vanilla |

## Lancer en local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build & déploiement

```bash
npm run build       # génère dist/
# push sur main → GitHub Actions déploie automatiquement
```

## Structure

```
.
├── assets/
│   ├── images/          # Screenshots projets (WebP)
│   └── models/          # Modèles GLTF/GLB (si utilisés)
├── fallback/
│   └── index.html       # Version 2D sans WebXR
├── src/
│   ├── components/      # Composants A-Frame custom
│   │   ├── project-card.js
│   │   ├── skill-orb.js
│   │   ├── hub-panel.js
│   │   ├── scene-floor.js
│   │   └── nav-teleport.js
│   ├── main.js          # Point d'entrée
│   └── styles/main.css  # Loader + UI
├── index.html           # Scène WebXR principale
├── vite.config.js
└── .github/workflows/deploy.yml
```

## Contrôles

| Action | Desktop | Mobile |
|--------|---------|--------|
| Déplacer | WASD / Flèches | Drag 2 doigts |
| Regarder | Souris (drag) | Drag 1 doigt |
| Interagir | Clic | Tap |
| Mode VR | Bouton VR (bas droite) | — |

## Zones de la scène

- **Hub Central** `(0, 0, 0)` — titre, tagline, navigation
- **Projects Bay** `(-8, 0, 0)` — Overvue & BManager
- **Skills Core** `(+8, 0, 0)` — 6 orbs compétences

## Auteur

**Brandon Degbe** — .NET Developer & XR Enthusiast · Cotonou, Bénin
