# Architecture

## Current application shape

The application is an optimized App Router single-page application built on Next.js 16 and React 19.
- `app/layout.tsx`: Owns top-level document structure, font definitions, metadata, viewport settings, and global stylesheet loading.
- `app/page.tsx`: Serves as the static page entry point.
- `components/PortfolioClientShell.tsx`: Isolates browser-dependent features (mouse/pointer glow tracking, window scroll listeners, dynamic theme state) from server-rendered elements.

## Component & Data Ownership

- **Static Content (`content/`)**:
  - Pure typed data modules (`hero.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `certificates.ts`, `achievements.ts`, `hackathons.ts`, `education.ts`, `extracurricular.ts`, `site.ts`, `social.ts`).
  - Contains no JSX, client lifecycle hooks, or browser dependencies.
  - Changes to public links, metrics, or roles belong strictly here.
- **Components (`components/`)**:
  - Own visual rendering, Framer Motion transitions, responsive layouts, and icon mapping.
  - Features requiring specialized styles use co-located CSS modules (`Hero.module.css`, `Contact.module.css`, `Extracurricular.module.css`, `About.module.css`, `Experience.module.css`).
- **Logic & Utilities (`lib/`)**:
  - `lib/contact.ts`: Headless validation and submission handler for the Web3Forms API.
  - `lib/animations.ts`: Centralized Framer Motion presets and hover interaction definitions.

## Key Design Decisions

1. **Server-First Composition with Client Islands**:
   Keep static content prerenderable while isolating client interactions inside focused client boundaries to ensure minimal hydration overhead and superior Core Web Vitals.
2. **Configuration vs. Environment Secrets**:
   Public portfolio URLs, asset paths, and document links reside in versioned TypeScript modules (`content/site.ts`). Only the third-party client key (`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`) is read from environment variables.
3. **Co-located CSS over Global Bloat**:
   `app/globals.css` is reserved for design system tokens, Tailwind directives, and core resets. Section-specific card glow and animation keyframes are co-located in CSS modules.
4. **Resilient Form Submission**:
   Contact form validation happens deterministically before firing remote requests, including botcheck protection, email regex verification, and status feedback.

## Change Boundaries

Do not combine content updates, dependency upgrades, rendering changes, and visual CSS refactors in a single commit or pull request. Always validate affected interactions against the manual browser checklist before release.

