# Design QA — Salvi Group homepage

## Visual sources

- Original local prototype: [reference-captures/qa-original-theme-current-viewport.png](reference-captures/qa-original-theme-current-viewport.png).
- User-approved form reference: `C:\Users\ahsan\AppData\Local\Temp\codex-clipboard-b047c37f-7975-4a46-a771-44991457a395.png` (opened and reviewed for this update).
- Local implementation: `http://localhost:4174/#contact`.

## Current implementation review

- Replaced the previous contact fold in its existing pre-footer position with a dark **Request Information** fold: four desktop fields, community selector, message field, required consent, and a submit success state.
- Added the reference-matched **Subscribe to Emails** image fold directly after it and immediately before the existing footer. It includes required email and consent fields plus a visible local success state.
- Both section headings use `Power Grotesk` first, with a local/system fallback because no licensed Power Grotesk webfont file was supplied to the project.
- The existing local theme remains intact outside these two requested folds. The subscription background uses the local Salvi imagery rather than a copied third-party image.

## Functional and responsive checks

- Request Information: completed valid name, email, phone, subject, community, message, and consent input; submit showed the success message.
- Subscribe to Emails: completed valid email and consent input; submit showed `Thank you — you are subscribed.`
- Required fields and consent checks are native browser validation backed.
- Desktop layout renders the first four Request Information controls in four columns. At the mobile viewport, they stack in one column with no horizontal overflow.
- Both form-fold containers measure exactly 84% of the available content width on the desktop and mobile previews; no horizontal overflow was detected.
- Browser console: no warnings or errors.
- `npm.cmd run build`: passed.
- `npm.cmd run test:sites`: passed (4/4).

## Screenshot comparison status

The in-app browser's deep-scroll screenshot compositor returned a blank canvas for the new pre-footer area, even though its DOM, hit-testing, form interaction, and responsive measurements all succeeded. The supplied source screenshot was opened successfully, but a faithful browser-rendered local screenshot could not be captured for side-by-side visual comparison in this environment.

## Open follow-up

- Capture a normal browser screenshot of `#contact` once the in-app compositor issue is resolved, then perform final pixel-level visual comparison against the supplied reference.

final result: blocked
