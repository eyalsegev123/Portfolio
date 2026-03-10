# Portfolio — Claude Code Instructions

## Project Overview
Personal portfolio website for Eyal Segev. React + Vite SPA, single page with smooth scroll sections.

## Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS v3 (no MUI)
- **Animations**: Framer Motion + Lenis smooth scroll
- **Icons**: react-icons
- **Contact form**: EmailJS (`@emailjs/browser`)
- **Package manager**: npm
- **Fonts**: Archivo (headings), Space Grotesk (body), Fira Code (mono)

## Structure
```
frontend/
├── index.html              # Vite entry point
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js       # Required — runs Tailwind via PostCSS
├── .env                    # EmailJS credentials (gitignored)
├── .env.example            # Safe template to commit
└── src/
    ├── components/         # Reusable UI pieces
    │   ├── Navbar.jsx
    │   ├── AnimateOnScroll.jsx
    │   ├── MagneticButton.jsx  # Cursor-attracted CTA buttons
    │   ├── ProjectCard.jsx     # 3D tilt + glare on hover
    │   ├── SkillBadge.jsx
    │   └── TimelineItem.jsx
    ├── sections/           # Full-page sections (Home, About, Projects, Contact)
    ├── data/               # All content lives here — edit once, reflects everywhere
    │   ├── projects.js
    │   ├── skills.js
    │   └── experience.js
    ├── hooks/
    │   └── useInView.js
    ├── styles/
    │   └── index.css       # Tailwind directives + .glass, .gradient-text utilities
    ├── assets/
    │   └── ESLogo.png
    └── index.jsx
```

## Design System
- Background: `#0A0F1E` (navy)
- Accent: `#22D3EE` (cyan)
- Glassmorphism: use `.glass` and `.glass-hover` utility classes
- Gradient text: use `.gradient-text` utility class
- Section layout: use `.section-padding` utility class
- Animations: wrap elements in `<AnimateOnScroll>` for scroll entrance

## Interactive Effects
- **Aurora background**: 3 CSS `@keyframes` blobs in hero (`aurora-1/2/3` in `index.css`)
- **Spotlight**: cursor-tracked radial gradient in `Home.jsx` via Framer Motion `useTransform`
- **3D card tilt**: `rotateX/Y` + glare overlay in `ProjectCard.jsx`
- **Magnetic buttons**: `MagneticButton.jsx` — spring-follows cursor within 80px radius
- **Smooth scroll**: Lenis via `<ReactLenis root>` in `index.jsx`
- All animations respect `prefers-reduced-motion` (set in `index.css`)
- Vite config has `resolve.dedupe: ['react', 'react-dom']` — required to prevent Lenis bundling its own React copy

## Content Updates
All content is in `src/data/` — **do not hardcode content in components**.
- Add/edit projects → `src/data/projects.js`
- Add/edit skills → `src/data/skills.js`
- Add/edit experience/education → `src/data/experience.js`

## EmailJS
Credentials are in `frontend/.env` (gitignored). Variables are:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Vite reads `.env` only on startup — restart the dev server after editing it.

## Dev Commands
```bash
cd frontend
npm start        # dev server at localhost:5173
npm run build    # production build → frontend/dist/
npm run preview  # preview production build locally
```

## Public Assets
Stored in `frontend/public/` — served at root URL:
- `Eyal_Segev_resume.pdf` — linked from Contact section download button
- `bengurion_logo.png` — used in About education card
- `favicon.ico`
