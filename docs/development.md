# Development

## Runtime

Use the latest patch release of Node.js 24 LTS and pnpm 10.9 or newer. The
repository also supports the maintained Node.js 22 LTS line from 22.23.3.

## Quality checks

Run these before opening a pull request:

```bash
pnpm lint
pnpm biome:check
pnpm typecheck
pnpm test
pnpm build
```

`pnpm check` runs all five checks.

Run `pnpm test:coverage` to produce a V8 coverage report. Coverage is focused
on data and application logic; static presentational markup does not need a
percentage target or snapshot-only tests.

ESLint owns React, Next.js, accessibility, and TypeScript correctness rules.
Biome owns formatting and import organization. Do not add overlapping formatting
rules to ESLint.

## Coding & Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `Navbar.tsx`, `PortfolioClientShell.tsx`).
- **CSS Modules**: Co-located matching PascalCase (e.g., `Hero.module.css`, `Contact.module.css`).
- **Content & Utilities**: camelCase (e.g., `content/site.ts`, `lib/contact.ts`).
- **Tests**: Kept in `tests/` with `.test.ts` extension.
- **Strict Quality Rules**:
  - React Hooks exhaustive dependencies enforced.
  - No unused imports or variables (enforced by Biome and `tsc`).
  - No explicit `any` without documented exception.
  - No raw `<img>` tags — always use `next/image` unless explicit exception is documented.
  - No `dangerouslySetInnerHTML`.
  - External links must include `rel="noopener noreferrer"`.
  - Final newline and UTF-8 encoding enforced.

## Pull Request Checklist

Before submitting a PR or merging changes:
- [ ] Run `pnpm check` and ensure 0 lint, type, test, and build errors.
- [ ] Ensure coverage threshold passes for logic and data modules (`pnpm test:coverage`).
- [ ] Verify both light and dark mode appearance.
- [ ] Test mobile view (360px viewport) and desktop view (1440px viewport).
- [ ] Confirm no console errors, hydration warnings, or CSP violations.
- [ ] Ensure new remote links are HTTPS and validated in tests.

## Change safety

Keep content updates, dependency upgrades, rendering changes, and visual refactors
in separate pull requests. Validate desktop and mobile layouts, navigation, theme
switching, external links, résumé download, and contact-form states after any
relevant change.

## Manual browser checklist

Run this after `pnpm check` for any rendering, styling, interaction, dependency,
or deployment change. Use a clean browser profile or Incognito window with
extensions disabled; extensions can inject DOM attributes before React hydration
and create false-positive console warnings.

1. Start a production-equivalent local server:

   ```bash
   pnpm build
   pnpm start
   ```

2. Open the local URL in Chrome or Edge DevTools at 360 px, 768 px, 1024 px,
   and 1440 px viewport widths. Check for horizontal scrolling, clipped text,
   overlapping cards, and unexpected layout shifts in both light and dark mode.
3. In the Console, confirm there are no app-generated errors, CSP violations,
   hydration warnings, or failed network requests. Development-only React
   call-stack support requires `unsafe-eval`; production must not require it.
4. Verify the navigation links scroll to every section, the active state changes
   correctly, and the theme toggle persists after a reload.
5. Verify all social and project links open the intended HTTPS destination in a
   new tab. Verify every certificate/image asset loads, and the resume download
   completes.
6. Submit the contact form with invalid values, then with a valid test message.
   Confirm loading, success, and failure states are understandable. Do not place
   private data in the test submission.
7. Enable `prefers-reduced-motion` and emulate a touch device. Confirm content
   remains reachable and no cursor/tilt-only behavior blocks interaction.

Record the browser/version, viewport sizes, and any exception in the pull request
or release notes. A visual regression or console error blocks release unless it
is documented as an external browser-extension issue and reproduced cleanly.
