# Security

## Public configuration

Portfolio identity, social links, project URLs, certificate URLs, and public
asset paths live in `content/`. They are intentionally public and must not be
moved to environment variables.

Only `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is currently exposed to the browser for
the client-side Web3Forms integration. Do not use the `NEXT_PUBLIC_` prefix for
private API keys, tokens, passwords, or service credentials.

## Browser protections

`next.config.mjs` sets a restrictive Content Security Policy, clickjacking
protection, content-type sniffing protection, referrer policy, permissions
policy, and cross-origin policies. Add new third-party origins only to the
specific CSP directive required by that integration.

## Dependency policy

Run `pnpm audit` before dependency upgrades and release. Do not use automated
audit fixes or arbitrary transitive overrides without compatibility testing.

After upgrading to the tested Next.js 16.3.7 patch, the current production
audit still reports two high-severity transitive `browserslist` advisories
through Next's `styled-jsx`/Babel build chain. Do not add an arbitrary override:
resolve them through a compatible upstream Next update.
Development-only findings remain in the Tailwind CSS 3 and ESLint plugin chains.
A Tailwind 4 migration must be handled as its own visual-regression-tested
change; forcing newer transitive glob/minimatch versions into Tailwind 3 may
break the build.

## Review checklist

- No `dangerouslySetInnerHTML` for portfolio content.
- All external links use HTTPS and `rel="noopener noreferrer"` when opened in a
  new tab.
- Public images and résumé assets contain only material intended for visitors.
- Environment files remain ignored and are never committed.
