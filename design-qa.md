# Design QA - Salvi Group homepage

## Comparison target

- Primary visual truth: the original local prototype, captured at [reference-captures/qa-original-theme-current-viewport.png](reference-captures/qa-original-theme-current-viewport.png).
- Updated implementation: [reference-captures/qa-updated-theme-current-viewport.png](reference-captures/qa-updated-theme-current-viewport.png) from `http://localhost:4174/?qa=theme`.
- Same-state comparison: [reference-captures/qa-theme-comparison.png](reference-captures/qa-theme-comparison.png). It places equal 1440 x 900 active-pane crops side by side.
- Content truth: [Salvi Group homepage](https://salvigroup.com/), its official local image/logo copies under `public/assets/salvi/`, and the user-supplied transparent anniversary mark at `public/assets/salvi/50-years-anniversary.png`.

The browser rendered both desktop captures at 1636 x 1022 CSS pixels. The in-app browser produced 1840 x 1161 PNGs because of host scaling; the comparison normalizes matching 1440 x 900 content-pane crops at the same 0.5 scale. State: top hero, navigation visible, preloader completed, scroll position 1 px.

## Findings

- Resolved [P1] Theme drift from the earlier rebrand.
  Location: every post-hero section.
  Evidence: the earlier build introduced a separate Salvi-styled visual system instead of retaining the original local folds. The user flagged this mismatch.
  Fix: `src/App.jsx` now mounts the original local markup, stylesheet, animation engine, section sequence, typography, and spacing; it maps Salvigroup copy, images, logo, navigation, and footer data into that structure only. The one user-approved Locations addition reuses the original `portfolio` section/card anatomy without a new design system.
  Post-fix evidence: [qa-theme-comparison.png](reference-captures/qa-theme-comparison.png) shows matching hero composition, type treatment, navigation placement, imagery treatment, and dark luxury visual language.

No actionable P0, P1, or P2 findings remain.

## Required fidelity surfaces

- Fonts and typography: the preserved original source CSS remains the owner of display type, body type, letter spacing, case, and hierarchy. The official 200 x 70 Salvi Group raster logo is shown at its natural 2.857:1 ratio in the header and footer; it is not stretched or recreated as code.
- Spacing and layout rhythm: hero, navigation, manifest, feature, card grid, horizontal gallery, process, form, and footer retain the original local rhythm. At the matching desktop state, source navigation measured 96 px and the official-logo navigation measured 101 px; the 5 px difference is the intentional real-logo accommodation and does not alter the fold layout.
- Colors and visual tokens: the original local dark, bone, and champagne visual tokens are preserved. Official Salvi blue, brown, and gold appear only through the real logo and local Salvi photography, not through a replacement global palette.
- Image quality and asset fidelity: 15 locally served Salvi image/logo instances were checked after loading their folds; all had non-zero natural dimensions and no broken assets. The four-location cards use the official Hillshire, Savona, Ironwood, and Salvi Homes imagery. The user-provided 527 x 473 transparent anniversary PNG is used in the preserved featured-media frame with `object-fit: contain`, so its mark is never cropped or stretched.
- Copy and content: hero text, 50-year story, communities/homes, What We Do, request form, office details, social links, and footer data are Salvigroup-specific. The added Locations fold contains the four live homepage destinations: Hillshire, Savona, Ironwood, and Salvi Homes.

## Focused region and responsive review

- Header/hero: focused comparison is included in [qa-theme-comparison.png](reference-captures/qa-theme-comparison.png); the only intentional content changes are the Salvi logo, labels, and hero copy.
- Anniversary mark: [anniversary-mark-preview.png](reference-captures/anniversary-mark-preview.png) is browser-rendered evidence for the featured fold. The in-app browser's known tiled-screenshot host artifact is present in this capture, so DOM inspection was also used: the asset loaded at its native 527 x 473 dimensions, with `object-fit: contain`, within the original `.feat-media` frame.
- Locations fold: [reference-captures/restored-locations.png](reference-captures/restored-locations.png) shows the original portfolio card treatment reused for the four approved locations. The fourth card reveals when scrolled into view, matching the original reveal behavior.
- Mobile: requested 390 x 844 preview rendered as 443 x 959 CSS pixels under the host's device scaling. The hamburger appeared, opened, and closed on link selection; Communities navigated to `#locations`; no horizontal overflow was detected.
- Accessibility and affordances: the logo has alt text, the new fold has an `aria-labelledby` heading, navigation anchors work, and the existing labelled request form remains usable.

## Functional checks

- Desktop Communities navigation reached `#locations`; all four location images loaded.
- The official Salvi logo is present in both header and footer.
- The user-provided anniversary mark is present in the A Tradition of Quality fold, loaded locally, and not cropped or stretched.
- The request form was completed and its local success state displayed correctly.
- Mobile menu opened and its Communities item reached the new fold without overflow.
- Final browser console check: 0 warnings and 0 errors.

## Build verification

- `npm.cmd run build` - passed.
- `npm.cmd run test:sites` - passed, 4/4 tests.

## Implementation checklist

- [x] Restore original local visual language and animation engine.
- [x] Map Salvigroup content and local images into retained folds.
- [x] Add official Salvi Group logo without stretching it.
- [x] Add the single approved four-location fold using original cards.
- [x] Verify desktop, mobile, navigation, form, assets, console, build, and Sites tests.

## Open questions

- None. The new Locations fold is intentionally a new content section, as requested, while its visual anatomy remains the original local portfolio design.

final result: passed
