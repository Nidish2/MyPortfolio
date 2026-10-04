# Deployment

## Pre-deployment checklist

1. Use Node.js 24 LTS, or a supported Node.js 22 LTS patch release.
2. Install exact locked dependencies with `pnpm install --frozen-lockfile`.
3. Configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the deployment provider when
   the contact form is enabled.
4. Run `pnpm check`.
5. Verify the deployed page on mobile and desktop.
6. Verify navigation, theme switching, external links, résumé download, and
   contact-form success and failure states.

## Browser release validation

Use the [manual browser checklist](development.md#manual-browser-checklist) on
the deployed URL, not just the local build. In the browser Console and Network
panels, confirm there are no Content Security Policy violations, hydration
warnings in a clean profile, or failed first-party assets.

## Security

Never commit `.env.local`. Only Web3Forms' browser access key is public in the
current architecture. Private credentials must remain server-only and must not
use the `NEXT_PUBLIC_` prefix.

Review `pnpm audit` and the current Next.js security releases before every
production dependency update.

The application ships a restrictive Content Security Policy. If a new external
integration is introduced, explicitly add only the required origin to the
relevant directive and verify the contact form, images, and production route
after deployment. Do not loosen the policy with a wildcard.
