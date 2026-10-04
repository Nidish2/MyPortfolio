# Nidish Portfolio

Live URL: [https://i-am-nidish.vercel.app](https://i-am-nidish.vercel.app)

A personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, and
Framer Motion. It presents experience, projects, skills, certificates,
achievements, and contact details.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS & CSS Modules
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Code Quality**: Biome & ESLint
- **Testing**: Vitest & V8 Coverage

## Requirements

- Node.js 24 LTS (preferred), or Node.js 22.23.3 or newer within the maintained
  22 LTS line
- pnpm 10.9.0 or newer

Use the version declared in `.nvmrc` when using a Node version manager.

## Setup

```bash
pnpm install
Copy-Item .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

## Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Yes, for contact submission | Public Web3Forms browser access key |

Do not add private credentials to `NEXT_PUBLIC_*` variables. Public portfolio
links, image paths, certificate links, and the résumé path belong in typed
content/configuration modules, not environment files.

## Commands

```bash
pnpm dev           # Start local development
pnpm build         # Create a production build
pnpm start         # Run the production server
pnpm lint          # Run ESLint correctness checks
pnpm biome:check   # Run Biome formatting/import/lint checks
pnpm biome:fix     # Apply Biome safe fixes
pnpm format        # Format supported source files with Biome
pnpm format:check  # Check formatting without changes
pnpm typecheck     # Run TypeScript without emitting files
pnpm test          # Run Vitest test suite
pnpm test:coverage # Run test suite with V8 coverage report
pnpm check         # Run lint, Biome, TypeScript, test, and production build
```

## Project structure

```text
app/          Next.js route, root layout, and global styles
components/   Portfolio sections, layout components, and reusable UI
content/      Typed static content collections and public configuration
lib/          Shared utilities, contact validation, and motion configuration
public/       Public images and downloadable résumé
docs/         Architecture, development, deployment, security, and performance notes
tests/        Unit, link, and logic test suites
```

Static portfolio data lives in `content/`,
server-first page rendering, and isolated client-side interactions. See
[`docs/architecture.md`](docs/architecture.md), [`docs/development.md`](docs/development.md),
and [`AGENTS.md`](AGENTS.md) for the working conventions. See
[`docs/security.md`](docs/security.md) for public configuration, dependency, and
browser-security rules.

## Change safety

Preserve existing visible behavior unless a change explicitly requests a design
or product change. Keep dependency upgrades, content edits, rendering changes,
and CSS refactors in separate pull requests. Before release, verify responsive
layouts, navigation, theme switching, external links, résumé download, and
contact-form states.

## Verification

Before release, run `pnpm check`, then follow the
[manual browser checklist](docs/development.md#manual-browser-checklist).
For Core Web Vitals and bundle-impact work, use the repeatable procedure in
[docs/performance.md](docs/performance.md) and record the before/after result.

## Troubleshooting

- **Node/pnpm version mismatch**: Verify your active environment with `node -v` and `pnpm -v`. Match the versions in `package.json` (`node >=22.23.3`, `pnpm >=10.9.0`).
- **Contact form error on submit**: Ensure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is defined in `.env.local` or your hosting provider's environment settings.
- **Port 3000 collision**: Run `pnpm dev -- -p 3001` to start on an alternative port.
- **Biome or Lint errors**: Run `pnpm biome:fix` to automatically format and resolve organized imports.

## Security reporting & update policy

Please report security issues directly to **nidish2207@gmail.com**. See [`docs/security.md`](docs/security.md) for full browser security policy, CSP guidelines, and dependency audit rules.

## Deployment

The project is designed for a standard Next.js deployment such as Vercel. Add
the environment variable in the deployment provider before enabling the contact
form. Run `pnpm check` against the production Node LTS runtime before deploying.
See [`docs/deployment.md`](docs/deployment.md) for full deployment details.

