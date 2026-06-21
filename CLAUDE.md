# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server at http://localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run Next.js ESLint

There is no test suite configured.

## Architecture

Single-page personal portfolio built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**. JavaScript only — no TypeScript (`components.json` sets `"tsx": false`). The site is styled as a **VS Code / IDE "coder" theme** using the **Tokyo Night** palette.

### Content is data-driven

- `lib/portfolio-data.js` (`portfolioData`) — all portfolio text/content (personal, about, education, experience, skills, projects). **To change site content, edit this file — not the components.**
- `lib/ide-data.js` — the IDE wiring: `fileTree` (sidebar files → section ids), `sectionToFile` (for the tab bar / status bar), and `terminalCommands`/`terminalBoot`/`terminalPrompt` (the bottom terminal). **To add a nav file or terminal command, edit this file.**

### IDE shell

The page is wrapped in fixed editor chrome rendered from `app/layout.js`, all under `app/components/ide/`:
- `TitleBar` (top, traffic lights), `Sidebar` (left file-explorer, replaces the old navbar; mobile drawer), `TabBar` (open-file tabs), `StatusBar` (bottom bar), `Terminal` (collapsible bottom panel with working commands).
- Navigation: `ide/nav.js` exports `scrollToSection(id)` and `CHROME_OFFSET` (accounts for the fixed title+tab bars). `ide/useActiveSection.js` is a scroll-driven hook that tells the sidebar/tab bar/status bar which section is in view. `globals.css` `scroll-padding-top` must stay in sync with `CHROME_OFFSET` and the `pt-`/`pb-`/`lg:pl-` paddings on `<main>` in `layout.js`.
- `ide/Typewriter.jsx` — char-by-char typing effect (used by the hero terminal). `ide/CodeHeading.jsx` — the `// title` + filename heading shared by content sections.

### Page composition

- `app/page.jsx` — the single page (`"use client"`). Renders `BackgroundBeams` plus the ordered sections: Hero → About → Education → Skills → Projects.
- `app/components/{Hero,About,Education,Skills,Projects}Section.jsx` — one component per section, each `id`-anchored (`home`/`about`/`education`/`skills`/`projects`) to match `fileTree` in `lib/ide-data.js`. HeroSection is a terminal that types an intro from `personal`; the others use `CodeHeading` and Tokyo Night styling. Keep section ids and `fileTree` in sync.

### Theming

Tokyo Night is defined as CSS variables (`--tn-*`) in `app/globals.css`, exposed to Tailwind via the `@theme inline` block as `tn-*` color utilities (e.g. `bg-tn-surface`, `text-tn-accent`, `border-tn-border`). Syntax-color helper classes (`.tok-comment`, `.tok-keyword`, `.tok-func`, `.tok-string`, `.tok-accent`), the `cursor-blink` keyframe, and the editor scrollbar also live there. The shadcn semantic tokens (`--background`, `--card`, etc.) are mapped onto the `--tn-*` values.

### UI primitives

- `components/ui/` — shadcn/ui-style primitives (configured via `components.json`, "new-york" style, lucide icons). Animated effects: `3d-card.jsx`, `background-beams.jsx`.
- `components/eldoraui/gradualspacing.jsx` — text animation effect used in the hero.
- `app/components/icon/` — inline SVG social icons (Github, LinkedIn, Telegram).

### Conventions

- Path alias `@/*` maps to the repo root (`jsconfig.json`), e.g. `@/lib/portfolio-data`, `@/components/ui/...`.
- `lib/utils.js` exports `cn()` (clsx + tailwind-merge) — use it for conditional className composition.
- Animations use `framer-motion` / `motion`; 3D effects use `three` + `@react-three/fiber` + `@react-three/drei`.
- Components are heavily client-side (`"use client"`) and several are wrapped in `React.memo` with `useCallback`/`useMemo` for performance.
- Theming uses Tailwind v4 CSS variables defined in `app/globals.css` (`@theme inline` block); there is no `tailwind.config` file.

> Note: `pg` is listed as a dependency but no database code currently exists in the app.
