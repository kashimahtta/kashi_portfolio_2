# KASHI MAHTTA — THE SERIES

A cinematic, streaming-inspired portfolio for **Kashi Mahtta**: Full-Stack Developer, AI/LLM Enthusiast, and Cloud Computing Learner.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## ✨ Features

- **Cinema-inspired UI** with animated opening sequence, smooth transitions, and interactive elements
- **Project showcase** with detailed cards, modals, and linked GitHub repos
- **Skills section** with categories and evidence of where skills are used
- **Achievements & certifications** with badges and credential links
- **Resume viewer** with PDF download
- **Responsive design** for mobile, tablet, and desktop
- **Dark theme** with custom color palettes for each project
- **Smooth scroll** and accessibility-first (reduced motion support)

## 🚀 Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed to Vercel, Netlify, GitHub Pages or any static host.

## 📝 Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, the resume sheet and the counts) |
| Achievements / certifications | `achievements`, `certifications` |
| Skills and their categories | `skillCategories` |
| Education & experience | `education`, `experience` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** Replace `public/assets/Kashi_Mahtta_Resume.pdf` with your resume.

**Photo:** Replace `pic1.jpeg` (high-res photo) and `pic.png` (background-removed cutout), then run:

```bash
npm run images
```

This rebuilds the responsive WebP portraits and the social share image in `public/assets/`.

## 📁 What's inside

```
src/
  data/portfolio.ts        ← single source of truth
  App.tsx                  ← stages: opening → home; overlays
  components/
    OpeningSequence        ← animated intro sequence
    Navbar                 ← navigation with mobile menu
    Hero                   ← billboard with parallax
    About                  ← intro section
    Originals / ProjectCard← featured projects
    ProjectModal           ← project details overlay
    Skills                 ← skill categories
    Achievements           ← awards and certifications
    ResumeViewer           ← resume display and PDF download
    FinalCTA               ← contact section
  hooks/                   ← custom hooks (scroll, media queries)
scripts/build-images.mjs   ← portrait pipeline
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## 🌐 Deploy to Vercel

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for step-by-step instructions to:
1. Create a GitHub repository
2. Push your code to GitHub
3. Deploy to Vercel with one click

## ♿ Accessibility and performance

- `prefers-reduced-motion` is respected: smooth scroll and animations turn off
- Hover effects only run on devices with a precise pointer
- Touch devices get tap interactions and native swipe rails
- Portraits are responsive WebP files (25–90 KB)
- Overlays are code-split for faster page loads

## ⌨️ Keyboard shortcuts

- **Opening:** Enter or Esc skips it
- **Overlays:** Esc closes
- **Smooth navigation** throughout
