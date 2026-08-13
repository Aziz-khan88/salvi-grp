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
