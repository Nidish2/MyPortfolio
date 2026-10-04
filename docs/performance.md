# Performance

## Baseline

Reported local baseline metrics are:

| Metric | Baseline | Goal |
| --- | ---: | ---: |
| LCP | 2.62 s | Under 2.5 s |
| CLS | 0.16 | Under 0.1 |
| INP | 240 ms | Under 200 ms |

## Measurement procedure

Measure a production build, never the development server. Use the same browser,
device profile, network profile, and route for before/after comparisons.

```bash
pnpm build
pnpm start
```

1. Open the local production URL in an Incognito/private window with extensions
   disabled, then use Chrome DevTools Performance and Lighthouse.
2. Run mobile and desktop Lighthouse tests at least three times each. Record the
   median LCP, CLS, INP (where available), total JavaScript, and main-thread
   blocking time; one run is not a reliable comparison.
3. In the Performance panel, identify the LCP element and the precise sources of
   every material layout shift. In the Network panel, note large images, fonts,
   and blocking requests.
4. Apply one focused change, repeat the same measurement, and record the median
   before/after values plus the test conditions in the pull request.
5. Retain a screenshot for meaningful visual changes at mobile and desktop
   widths. Do not ship a metric improvement that changes layout or accessibility
   unexpectedly.

Use field data from the deployed site when available; local lab measurements are
decision support, not a substitute for real-user Core Web Vitals.

## Optimization policy

- Render static content before enhancing it on the client.
- Do not lazy-load above-the-fold content.
- Defer only below-the-fold, animation-heavy content after measurement supports
  it; reserve layout space for deferred content.
- Use `next/image` where it produces a measurable asset-loading benefit.
- Respect reduced-motion and coarse-pointer devices by disabling non-essential
  cursor, tilt, particle, and animation work.
- Do not introduce pagination for the current small static lists.
