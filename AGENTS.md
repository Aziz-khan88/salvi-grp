# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Active Prototype Decisions

- Rebrand the local prototype fully as **Salvi Group**, using the live Salvigroup logo, its blue-and-gold palette, and the live homepage content as the visual and copy source of truth.
- Preserve the existing local top-hero visual and animation; update only its Salvi Group text and navigation copy. Use locally copied Salvigroup imagery for every post-hero fold.
- Preserve the entire original local theme, section anatomy, motion, typography, spacing, and visual language. Adapt Salvigroup copy, images, links, and footer information *inside* those existing folds only; do not create replacement Salvi-styled sections or alter the global theme.
- The sole approved addition is one "Salvi Group Locations" fold for Hillshire, Savona, Ironwood, and Salvi Homes. It must reuse the original local portfolio fold anatomy and styling exactly, rather than introducing a new visual system.
- In the "A Tradition of Quality" / 50-year featured fold, use the user-supplied transparent anniversary asset `public/assets/salvi/50-years-anniversary.png` within the preserved original media frame.
- Replace the old contact fold with a full-width, screenshot-referenced Request Information form and add a Subscribe to Emails fold directly before the footer. Both forms require valid input and consent, then show local success states. Use `Power Grotesk` for these two fold headings, with a local/system fallback when the licensed font file is unavailable.
- Keep the Request Information and Subscribe to Emails inner containers at 84% viewport width across desktop and mobile breakpoints.
- Use Figma file `TLB04XvLeGtUui1ouEnFI9`, node `1:1061`, plus the supplied screenshots as the visual source for the current Figma-aligned edits only; do not alter unrelated existing folds.
- The Subscribe to Emails inner container is `min(915px, 84%)`, giving an exact 915 px desktop maximum while retaining the approved responsive 84% width.
- Apply `Power Grotesk` first to all site headings and display typography, with the existing local/system fallback until a licensed Power Grotesk webfont file is supplied.
- Replace the footer with the Figma-style Salvi Group footer, using the user-provided Hillshire and Savona logo assets alongside the official Salvi logo.
- Add the Figma-style FAQ, Build Your Future With Salvi, and What We Do folds; FAQ remains interactive, and the new Contact Us CTAs scroll to the existing working request form.
- Use bundled Poppins for all body/UI text and `Power Grotesk` first for all headings. The Figma-specified primary headings (Testimonials, FAQ, Request Information, Subscribe to Emails, What We Do, and Build Your Future With Salvi) are 80 px / 400 / 100% at 1920 px; the testimonial title uses a 77 px line height. Developing Commercial is 50 px / 400 / 100%. Responsively scale below that desktop reference without changing hierarchy.
- Keep regular post-hero source folds at the Figma 1754 px / 91.4% desktop frame and 84% on mobile, while retaining their Figma-specific frames (FAQ 1440 px / 75%, testimonials 1501 px / 78.2%, footer 1638 px / 85.3%, subscribe max 915 px). The hero remains untouched.
- The `Building with purpose` process fold stays in its original anatomy but uses a white background, wider frame, and high-contrast light cards so all typography remains legible.
- Add a Figma-style interactive Embla testimonial fold after What We Do, using testimonial content from the live Salvigroup homepage and the supplied Figma assets.
- Keep the footer's `Design & Development by: Infinitidigital.us` credit on one unbroken line at all supported widths.
- In Request Information, style native select controls and their options in a dark color scheme (black background, white text) and align the consent checkbox with the visual first line of its consent text.
- The testimonial carousel must be non-looping on desktop: show four cards, expose its actual Embla scroll snaps as four pagination bars, and use the Figma dark-left / white-right arrow assets (the left asset is rotated 180 degrees). All testimonial cards retain one equal height.
- The four Salvi Group Locations cards render inside the `#manifesto` 50-year black-gradient fold (not a separate fold), in one four-column desktop grid, two columns at tablet width, and one column on mobile. Its heading is exactly two lines: “Explore four places” then “to call home.” Testimonial cards are text-only; do not render avatar or other images inside them.
- Both consent controls use a 14 px visual gap between checkbox and copy, with the checkbox aligned to the consent copy's first line; the newsletter checkbox must retain its intrinsic 14 px size rather than inheriting the email-input sizing.
- The `#manifesto` “50 years of building exceptional homes” fold uses a compact white/blue-gold gradient, high-contrast treatment (not the original oversized dark spacing); cap its heading at 64 px and scale it down below large desktop.
- Use `-1px` letter spacing for all display and heading typography; preserve the 80 px Figma desktop target only at its 1920 px reference width and step it down at narrower viewports.
- All Request Information and Subscribe to Emails submit buttons use Salvi blue `#216192` (including their default state), with a darker blue hover state.
- Replace the legacy brown `#64514F` across the full site with Salvi blue `#216192`; this includes the testimonial review CTA and active testimonial pagination bars.
- In testimonial controls, enabled arrows use the white Figma arrow asset, while a disabled/default arrow uses the original dark-gray previous-arrow treatment; keep the left arrow rotated left.
