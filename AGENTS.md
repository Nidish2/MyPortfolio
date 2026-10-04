# Repository guidance

- Preserve existing user-visible behaviour unless a task explicitly requests a change.
- Keep `app/page.tsx` server-first; isolate browser-only behaviour in small client components.
- Static portfolio content belongs in typed `content/` modules, not scattered across JSX.
- Public portfolio URLs belong in content/configuration. Only secrets belong in server-side environment variables.
- Keep `app/globals.css` for tokens, reset, and truly global styles. Co-locate feature-specific complex CSS.
- Before handing off changes, run `pnpm check` and perform responsive visual verification.
- Do not add abstractions, dependencies, or environment variables without a demonstrated need.
