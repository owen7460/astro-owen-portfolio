# Owen Ouyang — Portfolio

Personal portfolio site for **Web Developer & Designer** work: projects, design case studies, frontend and backend notes, photography, and an about section. The goal is to present work clearly while keeping the experience fast and pleasant to browse.

## Live Site

[Visit Live Portfolio Site - https://owen-ca.com](https://owen-ca.com)

## Why Astro

This site is built with **Astro** because it fits a **performance-focused showcase** well: mostly static content with selective interactivity.

- **SEO-friendly structure** — Layouts let each page pass props so titles and metadata stay accurate. Navigation can feel smooth without sacrificing a solid HTML-first baseline.
- **Islands architecture** — Interactivity is limited to specific **React** components where it is needed; the rest stays lightweight and server-rendered by default.
- **Built-in image pipeline** — Astro’s `Image` component handles optimization (for example, a ~1.9MB source asset can be served at a much smaller).
- **Prefetching** — Route prefetching is enabled in config so upcoming pages can warm up in the background, which helps reduce perceived wait when moving around the site.

Together, these choices support a portfolio that stays visually rich without paying the full cost of a client-rendered SPA everywhere.

## Features

- Idea and project presentation homepage experience
- Dedicated Frontend / Backend / Design / Photography sections
- Story-driven about me section
- Responsive layout across desktop and mobile
- Smooth animations powered by GSAP and animation timelines
- Optimized assets for performance
- SEO-friendly routing and metadata

## Tech stack

| Area       | Notes                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | [Astro](https://astro.build/) 5                                                                                                                                                                   |
| UI islands | [React](https://react.dev/) 19 (`@astrojs/react`)                                                                                                                                                 |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) 4 (Vite plugin), [Sass](https://sass-lang.com/), [shadcn](https://ui.shadcn.com/)-style utilities (`class-variance-authority`, `tailwind-merge`, `clsx`) |
| Motion     | [GSAP](https://gsap.com/)                                                                                                                                                                         |
| Fonts      | [@fontsource-variable/geist](https://fontsource.org/)                                                                                                                                             |
| Other      | Embla Carousel, Lucide icons, Radix UI primitives, OGL                                                                                                                                            |

## Getting started

Requirements: a current **Node.js** LTS version and a package manager (`npm`, `pnpm`, or `yarn`).

```bash
npm install
npm run dev
```

- **Development** — `npm run dev` starts the local dev server (localhost:4321).
- **Production build** — `npm run build` outputs the static site to `dist/`.
- **Preview build** — `npm run preview` serves `dist/` locally to verify the build.

## Project layout (high level)

- `src/pages/` — Routes (home, frontend, backend, design subpages, photography, about, etc.).
- `src/layouts/` — Shared page shells.
- `src/components/` — Reusable Astro (and island) pieces.
- `src/styles/` — Global SCSS and shared mixins.
- `public/` — Static assets referenced by URL path.

---

_“Learning technologies to solve problems with the best solutions.”_ — tagline on the live home page.
