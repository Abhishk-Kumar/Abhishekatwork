
# OpenCode Prompt 2 — Premium Portfolio Transformation & Refinement

### Run AFTER Prompt 1 has produced PROJECT_MAP.md

**Repository:** Existing Next.js + Tailwind portfolio
**Live deployment:** https://abhishekbuilds-gules.vercel.app/
**Objective:** Transform the existing implementation into a highly polished, premium AI Engineer portfolio without destroying or redesigning its established identity.

---

# 0. PRIMARY DIRECTIVE

The portfolio is ALREADY BUILT.

This is an improvement, correction, and refinement pass on an existing production portfolio — NOT a fresh design project.

The core visual identity, page structure, components, typography, animations, content, and interactions already exist.

Your responsibility is to improve the existing implementation while preserving what is already correct.

The intended quality level:

- Linear: precise visual consistency and restrained interface design.
- Vercel: clean typography, excellent spacing, and sophisticated developer-focused presentation.
- Stripe: polished details, intentional hierarchy, and carefully executed components.
- High-end independent engineering portfolio: distinctive, technically credible, and memorable.

These are quality references, NOT templates to copy.

**The final portfolio must look like a significantly more polished version of the existing portfolio, not a different portfolio.**

Prioritize refinement over novelty.

Do not introduce visual complexity merely to make the page look more impressive.

---

# 1. READ THE PROJECT DOCUMENTATION FIRST

Before making any changes:

1. Read `PROJECT_MAP.md` completely.
2. Read the original project prompt and this entire implementation specification.
3. Inspect the actual project files.
4. Identify the existing components, design tokens, layout patterns, data structures, and animations.
5. Inspect the current project screenshots and assets.
6. Inspect existing project detail pages.
7. Run the existing production build and record its status.

`PROJECT_MAP.md` is the source of truth for the real codebase.

If this prompt and the map disagree:

- Follow the map.
- Report the disagreement.
- Do not silently override existing implementation decisions.

Do not assume a feature is missing because it is not described here. Inspect the actual code first.

---

# 2. NON-NEGOTIABLE DESIGN GUARDRAILS

## Preserve the existing identity

Reuse ONLY the design tokens, components, fonts, and patterns documented in `PROJECT_MAP.md`.

Do not introduce:

- New colour palettes.
- New fonts.
- New background treatments.
- An unrelated design system.
- Unnecessary gradients.
- Excessive glassmorphism.
- Decorative elements that conflict with the current aesthetic.
- New page structures or unrelated sections.

Do not change the core design.

If an improvement would require changing the established visual identity, stop and report the issue rather than making that change.

## Existing design identity

The verified live-site design uses:

- Warm charcoal background.
- Layered dark surfaces.
- Warm orange accents.
- Bone-white headings.
- Muted warm body text.
- Newsreader display typography.
- JetBrains Mono labels and supporting typography.
- Subtle orange glow effects.

Preserve this identity.

## Stitch reference

Layout inspiration only:

https://stitch.google.com/projects/2444960272850263228

Use it to understand:

- Image-led project cards.
- Split Journey layout.
- Footer wordmark.
- Visual hierarchy and structural presentation.

Do NOT copy its colours, background, fonts, invented content, face photographs, or incorrect statistics.

## Reference HTML

`portfolio-reference-design.html` is included in the project pack.

It is read-only.

Use it for structure, type scale, and relevant design patterns, subject to `PROJECT_MAP.md`.

The map always wins when values or implementation patterns conflict.

Do not copy invented content from the HTML.

---

# 3. EXISTING IMPLEMENTATION — PRESERVE IT

The following have already been confirmed.

### Navigation

- Resume button already exists.
- Mobile hamburger already exists.
- `mobileMenuOpen` state and overlay already exist.

Verify these. Do not recreate them.

### Project data

- Project data lives in `content/index.ts`.
- Data is Zod-typed.
- Cards render through `Artifacts.tsx`.

Add or modify project data through the existing schema. Never hard-code individual project cards in JSX.

### Case studies

Existing route:

`app/projects/[slug]/page.tsx`

Use the existing route and data structure.

### Existing design token names

- `primary-container`: `#ff5722`
- `secondary-container`: `#f95e14`
- `primary`: `#ffb5a0`

Preserve the names and actual values defined in the code.

### Ask AI

Do not modify:

- `ChatModal`
- `ChatTrigger`
- `portfolioContext.ts`

Do not replace the existing Ask AI functionality with a fake modal or a new chatbot.

---

# 4. SOURCE OF TRUTH FOR CONTENT

The live site's existing content is the source of truth.

Do not independently rewrite:

- Existing biography.
- Existing introduction.
- Existing headings.
- Existing project descriptions.
- Existing claims.
- Existing dates.
- Existing roles.
- Existing statistics.

Use the exact values specified in the individual phases where additions or corrections are explicitly requested.

Do not invent additional achievements, companies, metrics, projects, or experience.

If any information is missing or contradictory, report it rather than guessing.

The reference HTML is not a content source.

---

# 5. VISUAL QUALITY STANDARD

The goal is to improve the quality of the existing design through precise execution.

## Typography

Audit the entire page for:

- Consistent heading hierarchy.
- Correct font weights.
- Intentional line wrapping.
- Proper line height.
- Readable paragraph widths.
- Consistent uppercase labels.
- Balanced heading-to-description spacing.
- Correct use of serif display and monospace supporting typography.

Do not arbitrarily change the established font system.

Large headings should feel intentional, not oversized for decoration.

Avoid cramped paragraphs and awkward line breaks.

## Spacing and composition

Improve:

- Section spacing.
- Card internal padding.
- Alignment between content columns.
- Grid consistency.
- Vertical rhythm.
- Text-to-image proportions.
- Header and footer alignment.

Remove accidental dead space, but preserve intentional negative space.

Do not compress the design until it feels crowded.

## Cards and surfaces

Improve the existing cards through:

- Consistent borders.
- Layered warm surfaces.
- Better internal hierarchy.
- Consistent image ratios.
- Refined hover states.
- Better alignment of metadata and actions.

Avoid making every card look like a glowing box.

Use visual depth sparingly.

## Motion

Audit existing motion before changing it.

Preserve animations that work correctly.

Improve only actual problems:

- Unreadable first paint.
- Unnecessary delays.
- Janky transitions.
- Layout shifts.
- Inconsistent hover behavior.

Respect reduced-motion preferences.

Do not add animations just for decoration.

## Micro-interactions

Every interactive component should feel intentional:

- Buttons need clear hover, focus, and active states.
- Links should have recognizable interaction feedback.
- Cards should not imply clickability when they are not interactive.
- Icons must align with their associated text.
- Navigation must work using keyboard and pointer input.

Keep interaction styling consistent with the existing orange accent system.

---

# 6. VERIFIED DESIGN TOKENS

Use the following values unless `PROJECT_MAP.md` establishes a different value.

Background base: `#141312`

Surfaces:

- `#0F0E0D`
- `#1D1B1A`
- `#211F1E`
- `#2B2A28`
- `#363433`

Text:

- Headings: `#F5F3EF`
- Body: `#CBC6BF`
- Muted: `#948A8A`

Accent:

- Primary: `#F95E14`
- Secondary: `#FF5722`
- Peach highlight: `#FFB5A0`

Borders:

- `#211F1E`
- `#262220`

Fonts:

- Newsreader.
- JetBrains Mono.

Background treatment:

- Warm charcoal base.
- Soft orange glow orbs.
- Layered warm surfaces.

Example existing glow values:

- `rgba(249,94,20,.10)`
- `blur(130px)`
- `rgba(249,94,20,.05)`
- `blur(100px)`

Do not replace the background with flat black.

Never introduce `#000` or `#080808` as replacement section backgrounds.

Do not create a new global theme.

---

# 7. REFERENCE HTML — TAKE / DO NOT COPY

## TAKE

Use the reference HTML for:

- Existing compatible colour tokens.
- Typography scale.
- Artifact card structure.
- Timeline visual language.
- Scene watermark numerals.
- Footer layout.
- Spacing and structural inspiration.

Type scale reference:

- Display hero: 72px/80px; mobile 44px/52px.
- Headline large: 52px/60px; mobile 34px/42px.
- Headline medium: 32px/40px.
- Headline small: 22px/30px.
- Body large: 20px/32px.
- Body medium: 14px/24px.
- Body small: 12px/20px.
- Label caps: 11px/16px.
- Scene counter: 140px; mobile 80px.
- Inline code: 13px/20px.

These are reference values, not permission to break the actual responsive typography system.

Apply them only where compatible with the existing implementation and map.

## DO NOT COPY

Never copy:

- `contact@abhishek.ai`
- Bengaluru location text.
- Invented project names.
- Invented timeline entries.
- Invented performance statistics.
- Invented AI architecture.
- Fake terminal commands.
- Fake portfolio assistant.
- Fake face photographs.
- Fake avatar.
- Incorrect copyright year.
- Invented availability labels.
- Invented button text.
- Any fabricated content.

Correct email:

`abhishkdk@gmail.com`

Correct copyright year:

`2026`

---

# 8. EXISTING PAGE STRUCTURE

Preserve the exact order and section titles:

1. Hero
2. Scene 01 — Origin
3. Scene 02 — The Craft
4. Scene 03 — Artifacts
5. Scene 04 — Arsenal
6. Epilogue

Do not rename Scene 04.

Its existing title must remain:

**Tools of the trade**

Keep all four existing skill groups.

The Journey improvements in Phase 5 are allowed to reorganize the content inside Scene 02 without changing the overall page structure or section order.

---

# 9. PROJECT ASSETS

The project pack should contain:

- `repogent.png`
- `findly.png`
- `mediconnect.png`
- `ombre-ash.png`
- `biz-trade-mart.png`

Target directory:

`public/screenshots/`

Also inspect:

`portfolio-reference-design.html`

Use only the real supplied screenshots.

Do not:

- Generate AI screenshots.
- Use stock images.
- Use face photographs.
- Replace screenshots with mockups.
- Invent project previews.
- Change the visual appearance of the real product screenshots.

If an asset is missing, report it.

Do not create a fake replacement.

---

# 10. EXECUTION RULES

Work sequentially.

Each phase must be completed and its verification gate must pass before starting the next phase.

If a gate fails:

1. Identify the exact failure.
2. Fix the issue in the existing implementation.
3. Re-run the relevant check.
4. Report the result.

Never stack new work on a failed gate.

Do not commit, push, merge, or tag anything.

Leave all changes uncommitted for my review.

Do not make unrelated changes.

Do not claim a test passed unless it was actually executed.

**Stop after each phase, report the result, and wait for my approval before proceeding to the next phase.**

---

# PHASE 0 — SETUP AND BASELINE AUDIT

No code changes.

1. Read `PROJECT_MAP.md`.
2. Read this prompt.
3. Inspect the existing code and assets.
4. Check `public/screenshots/`.
5. Find the five real screenshots in the project pack.
6. Copy them into `public/screenshots/`, replacing placeholders if necessary.
7. Confirm that all five files exist at the required paths.
8. Inspect `portfolio-reference-design.html`.
9. Run:

`npm run build`

Record existing build errors separately from any future errors.

Do not fix unrelated pre-existing problems during this phase.

### Gate

- All five screenshots exist.
- Reference HTML is available and inspected.
- Initial build result is documented.
- No source code has been changed.

STOP and report.

---

# PHASE 1 — BACKGROUND RENDERING

Audit the existing theme implementation.

Fix only actual background problems.

Ensure:

- Base background remains warm charcoal.
- Existing orange glow effects are visible where intended.
- Layered warm surfaces remain consistent.
- No section unexpectedly renders as flat black.
- No component introduces an incompatible background.

Preserve existing background implementation where it already works.

### Gate

At 1440px:

- Page background visibly reads as warm charcoal.
- Orange glow is present where intended.
- No flat pure-black sections.
- No unintended `#000` or `#080808` background.

STOP and report.

---

# PHASE 2 — NAVIGATION VERIFICATION

Do not add new navigation components.

## Resume

The existing resume button is gated by `hasResumePdf`.

Check:

`public/resume.pdf`

If missing, report it. Do not invent or generate a resume.

If present, verify the button opens the correct PDF.

## Hamburger

Test the existing `mobileMenuOpen` implementation.

Check:

- Opens correctly.
- Closes correctly.
- Overlay works.
- Navigation links work.
- Menu closes after navigation.
- No scroll or layout problems.

## Preserve the existing top bar

Keep:

- Name on the left.
- Existing scene navigation in the centre.
- Orange CONTACT button.
- `mailto:abhishkdk@gmail.com`.
- Existing 1px orange scroll-progress line.

Do not copy the reference HTML's different header.

### Gate

- Resume button works if PDF exists.
- Hamburger opens and closes at 390px.
- Existing navigation works.
- No duplicate controls.

STOP and report.

---

# PHASE 3 — HERO REFINEMENT

Keep the existing hero:

- Existing pill.
- Two-line serif name.
- Subtitle.
- Introduction.
- Existing buttons.
- Existing visual composition.

Do not redesign the hero.

Fix these audited issues:

## First paint

The hero currently becomes almost illegible during its entrance animation.

Fix the initial render so the text is readable immediately.

Never start important text at an opacity that makes it unreadable.

Do not delay access to essential content for an animation.

Preserve the existing animation style where possible.

## Statistics layout

Split the combined `+35% / -30%` cell into two separate cells.

The statistics bar must contain five cells:

1. `1.5+ Years` — `EXPERIENCE & RAG`
2. `+35%` — `RELEVANCE`
3. `−30%` — `LATENCY`
4. `62 → 91` — `LIGHTHOUSE PERF GAIN`
5. `2 Shipped` — `AI AGENT PRODUCTS`

Use the exact values and labels above.

Do not add additional statistics.

Do not change the numbers.

### Gate

- Hero is readable on first paint.
- All five cells are present.
- No overlap.
- Existing hero composition is preserved.

STOP and report.

---

# PHASE 4 — SCENE 01: ORIGIN

Preserve the existing content:

- "It started with curiosity & obsession."
- Both existing paragraphs.
- Right-hand WHAT I DO card.

Fix:

1. Drop caps must not split the first word visually.
2. The WHAT I DO card must size itself to its content.
3. Remove unnecessary dead space beneath the card.
4. Tighten the excessive empty band below the left column.
5. Preserve the section's original alignment and visual identity.

Do not rewrite the paragraphs.

### Gate

- No split first words.
- Card has no unnecessary dead space.
- Section spacing is balanced.
- Scene 02 begins at an intentional position.

STOP and report.

---

# PHASE 5 — SCENE 02: THE CRAFT / JOURNEY

This is the major content-layout correction.

The existing mixed timeline must become two visually distinct sections.

Do not create a new page or change the overall scene order.

## A. Academic Foundation

Create a compact education block near the top of the Journey section.

Preserve these exact entries:

**Diploma in Computer Science Engineering**

Govt. Technical Institute, Kanpur

Jul 2021 – Jul 2024

**B.Tech in CSE (AI & ML)**

Dr. A.P.J. Abdul Kalam Technical University, Kanpur

Mar 2024 – Mar 2027

## B. Professional Experience

Create a separate reverse-chronological professional timeline.

**NOW**

AI Engineer & Full-Stack Builder

Seeking full-time AI Engineer roles.

**Frontend Developer — Biz Trade Mart**

Dec 2024 – Feb 2026

**AI Research Intern — Planto AI**

Nov 2024 – May 2025

## Visual distinction

Education and professional experience must be visually distinct.

Use the existing design system to distinguish them through:

- Card treatment.
- Section headings.
- Metadata.
- Timeline markers.
- Spacing.

Do not merely add tiny labels to otherwise identical cards.

Use the reference HTML's timeline language where compatible:

- Vertical hairline.
- Diamond markers.
- Restrained orange active state.
- Warm surface cards.
- Consistent padding.

## Internship clarification

Add a concise note:

"Internships were part-time/remote alongside my B.Tech."

Do not imply that the overlapping entries were full-time simultaneous employment.

## Skill Growth by Stage

Fix the existing overlapping stages.

Use exactly four non-overlapping ranges:

- 2021–2022
- 2022–2023
- 2023–2024
- 2024–present

Preserve existing stage content.

Do not invent skills or experience.

### Gate

- Education and work are clearly separate.
- All specified entries are present.
- Internship note is present.
- Four skill stages do not overlap.
- Existing content remains intact.

STOP and report.

---

# PHASE 6 — SCENE 03: ARTIFACTS / PROJECT CARDS

This is a major presentation improvement.

The existing cards are currently too text-oriented and inconsistent.

Refine the existing implementation and add the two missing projects.

Five cards must appear in this exact order:

1. Repogent AI
2. Findly.AI
3. MediConnect
4. Ombre & Ash
5. Biz Trade Mart

## Data architecture

Project data lives in:

`content/index.ts`

The data is Zod-typed.

Add the two new projects through the existing data array and schema.

`Artifacts.tsx` must render all cards from the data.

Do not hard-code project-specific card JSX.

Preserve the existing architecture and case-study route.

## Grid consistency

The third card currently uses a different span.

Refine the grid so all five cards follow one consistent visual system.

Use a responsive grid that fits the existing design.

Do not force an awkward five-column layout on desktop.

The cards must feel like one intentionally designed collection.

## Card visual structure

Use this hierarchy:

### 1. Real screenshot

Use the supplied project screenshot at the top.

- Full width.
- Consistent aspect ratio.
- Correct object positioning.
- Preserve the real UI.
- No overlays that hide important content.
- No filters that alter product appearance.

Mapping:

- `repogent.png` → Repogent AI
- `findly.png` → Findly.AI
- `mediconnect.png` → MediConnect
- `ombre-ash.png` → Ombre & Ash
- `biz-trade-mart.png` → Biz Trade Mart

Findly's supplied screenshot is already the bright settled frame. Do not replace it with a premature screenshot.

### 2. Card header

Use the reference structure:

- Project number.
- Project category or label.
- Status indicator where appropriate.
- Subtle divider.

Keep it compact and consistent.

### 3. Project identity

Include:

- Project name.
- One-line summary.
- Existing description.

Do not invent descriptions.

### 4. Metrics strip

Use these exact project metrics:

**Repogent AI**

- `<60s` parse.
- `500+` files.

**Findly.AI**

- `8-node` LangGraph.
- Quality gate `≥7`.
- Maximum `3` revisions.

**MediConnect**

- Sub-100ms queries.

**Ombre & Ash**

- `4` signature extraits.
- `400` numbered units per batch.
- `3` salons: Paris / Grasse / Kyoto.

**Biz Trade Mart**

- Lighthouse `62 → 91`.
- `10+` product modules.
- `−35%` bug reports.

Use the exact supplied metrics. Do not create additional metrics.

If a metric cannot be substantiated by the existing project content, flag it before publishing rather than silently changing or inventing it.

### 5. Architecture diagram

Every card must have a small visual architecture diagram.

These must be actual visual diagrams, not text-based flowchart paragraphs.

Use:

- Existing project technologies.
- Real architectural relationships.
- Restrained lines and nodes.
- Existing colour tokens.
- Consistent sizing and spacing.

Do not invent architecture.

Inspect the existing project data and documentation before drawing each diagram.

The five diagrams should have a shared visual language but represent the actual differences between the projects.

MediConnect must receive the same level of visual completeness as the other cards.

### 6. Problem / Solution / Result

Include a maximum of 2–3 concise bullets per card.

Use only substantiated project information.

Avoid repeating the same description in multiple parts of the card.

### 7. Technology chips

Use the existing chip styling.

Preserve actual project stacks.

### 8. Actions

Provide consistent action placement:

- LIVE DEMO
- GITHUB
- CASE STUDY

Only render actions that actually exist for that project.

## Project-specific details

### Repogent AI

Live:

https://repogent.vercel.app/

Repository:

https://github.com/Abhishk-Kumar/Repogent

The old Render URL is incorrect. Replace it.

### Findly.AI

Live:

https://findly-ai-rosy.vercel.app/

Repository:

https://github.com/Abhishk-Kumar/Findly-AI

Preserve its existing stack and content.

Remove truncation from its stack line.

### MediConnect

Live:

https://e-consultancy.onrender.com/

Repository:

https://github.com/Abhishk-Kumar/Consultancy-website

Give this card the same complete structure, including diagram and stack line.

Keep the free-hosting wake-up note ONLY here:

"* Free hosting, may take about 30 seconds to wake up."

### Ombre & Ash

Live:

https://ombre-ash-perfumes.vercel.app/

This is a static HTML/CSS/JS project.

It is NOT a Next.js project.

Its stack must reflect:

- HTML
- CSS
- JavaScript

Describe it using existing verified project information:

- Haute parfumerie.
- Four signature extraits.
- Discovery coffret.
- Atelier story.
- Salon locations.

Show LIVE DEMO only.

Do NOT add a GitHub button.

The repository will be provided later.

### Biz Trade Mart

Live:

https://www.biztrademart.com/

This is client work.

My role:

Frontend Developer, Dec 2024 – Feb 2026.

Project description should reflect the actual work:

- React.
- Tailwind.
- Dashboards.
- Component library.

Show LIVE DEMO only.

Do NOT add a GitHub button because the repository is private.

Label it as client work.

## Case studies

Existing route:

`app/projects/[slug]/page.tsx`

Use the existing case-study system.

Verify that each project page can render from its data entry.

If a project requires additional fields, use the existing schema appropriately.

If a case-study page cannot render correctly, omit its CASE STUDY button.

Do not invent case-study pages.

## Link verification

Verify the exact URLs listed above.

Do not change them to alternative URLs.

### Gate

- Five cards exist in the specified order.
- All cards share a consistent structure.
- Five real screenshots render.
- Each card has a complete architecture diagram.
- Metrics and technology stacks are correct.
- No incorrect GitHub buttons.
- No incorrect live URLs.
- Case-study actions work where supported.
- MediConnect alone has the free-hosting note.

STOP and report.

---

# PHASE 7 — SCENE 04: TOOLS OF THE TRADE

Keep the exact title:

**Tools of the trade**

Preserve the four existing groups:

1. AI / ML Core
2. Languages & Core
3. Backend & Databases
4. Frontend, DevOps & Practices

Preserve all existing listed skills.

Fix the inconsistent chip treatment.

Currently, some groups have orange dots and others do not.

Give every group the same orange-dot chip treatment:

- Small orange dot.
- Bone-white text.
- Consistent padding.
- Consistent alignment.
- Consistent spacing.

Do not add proficiency bars.

Do not add percentage levels.

Do not invent additional skills.

### Gate

- Exact section title.
- Four groups intact.
- Existing skills intact.
- All chips visually consistent.

STOP and report.

---

# PHASE 8 — EPILOGUE AND FOOTER

Preserve the existing Epilogue:

"The next chapter is unwritten."

Keep the existing paragraph, buttons, GitHub/LinkedIn/email links, and Ask AI functionality.

Do not replace the existing content with reference HTML content.

## Email visibility

Show the actual email as readable text:

`abhishkdk@gmail.com`

Do not rely only on a mailto link.

Fix any incorrect email address in the existing implementation.

## Contact form

Add a simple frontend-only contact form:

- Name.
- Email.
- Message.
- Send button.

Important:

- No backend integration.
- Do not fake successful submission.
- Do not show a false success message.
- If submission is not configured, communicate that clearly.
- Use accessible labels and validation.
- Keep the form visually consistent with the existing design.

## Footer biography

The footer bio is currently truncated.

Remove the relevant line clamps.

Ensure the complete existing bio is visible.

Also remove the truncation from the Findly.AI stack line.

Do not truncate important project or biography text elsewhere.

## Giant ghost wordmark

Add a giant footer wordmark band between Epilogue content and the footer bar.

Reference:

https://ombre-ash-perfumes.vercel.app/

Text:

`ABHISHEK KUMAR`

Appearance:

- Newsreader serif.
- Uppercase.
- One line.
- Tight tracking.
- Line-height approximately 0.8.
- `white-space: nowrap`.

Size:

`clamp(120px, 20vw, 320px)`

Mobile:

Approximately `22vw`, while respecting sensible minimum sizing.

Colour:

`#1E1C1B`

Hover colour:

`#2E2C2B`

The wordmark must be a subtle ghost watermark, not bright foreground text.

Requirements:

- Extremely low contrast against the warm charcoal background.
- Uniform colour across the entire wordmark.
- No orange.
- No off-white.
- No gradient.
- No two-tone split.
- Full-width band.
- Generous vertical padding.
- Hairline divider above.
- Overflow clipped at the edges.
- No horizontal page scroll.

The wordmark is decorative, not a link.

## Back to top

Add:

`BACK TO TOP ↑`

As a small footer-bar text link.

It must scroll to the top correctly.

## Footer bar

Preserve existing footer content and links.

Ensure:

- Full biography is visible.
- Links work.
- Copyright remains 2026.
- Footer remains responsive.

### Gate

- Email visible as text.
- Contact form present without fake submission.
- Ghost wordmark correct.
- Wordmark remains one line.
- No horizontal overflow.
- Back-to-top works.
- Footer biography complete.
- No text truncation.

STOP and report.

---

# PHASE 9 — GLOBAL CONTRAST AND SPACING AUDIT

Audit the entire page.

Fix:

- Dim body text.
- Weak contrast.
- Inconsistent section spacing.
- Oversized empty bands.
- Uneven card padding.
- Inconsistent alignment.
- Accidental text truncation.

Muted text should not be darker than the verified `#948A8A` token on the `#141312` background unless the map establishes an intentional accessible treatment.

Preserve intentional negative space.

Do not make the page excessively dense.

Do not change existing copy.

### Gate

- No unintended truncated text.
- No large accidental empty bands.
- Body text readable.
- Consistent visual rhythm.

STOP and report.

---

# PHASE 10 — MOBILE REFINEMENT

Test actual responsive layouts.

Required viewport sizes:

- 390px.
- 360px.
- 768px.
- 1024px.
- 1440px.

At 390px:

- Hamburger works.
- Hero name scales appropriately.
- Statistics stack without overlap.
- Timeline becomes a single column.
- Project cards stack full-width.
- Footer stacks correctly.
- Ghost wordmark remains one line and clipped.
- No horizontal page scrolling.

The statistics layout should adapt naturally to available width. Use the requested 2×2 treatment where appropriate, while ensuring all five values remain visible.

Do not hide important content to make the mobile layout look cleaner.

Do not simply shrink desktop components.

Mobile must feel intentionally designed.

Use browser DevTools device emulation or an equivalent actual viewport check.

### Gate

- No horizontal overflow.
- No overlapping components.
- No clipped text or controls.
- No broken navigation.
- No broken project cards.
- No broken footer.
- Verified at 390px and 360px.

STOP and report.

---

# PHASE 11 — FINAL VERIFICATION

Run:

`npm run build`

Resolve errors introduced by your changes.

Verify:

- All five project screenshots.
- All five project cards.
- Exact live demo URLs.
- Applicable GitHub URLs.
- Case-study routes.
- Resume PDF if present.
- Contact links.
- Back-to-top.
- Hamburger navigation.
- Existing Ask AI functionality remains untouched and working.

Live demo checks:

1. Repogent AI — https://repogent.vercel.app/
2. Findly.AI — https://findly-ai-rosy.vercel.app/
3. MediConnect — https://e-consultancy.onrender.com/
4. Ombre & Ash — https://ombre-ash-perfumes.vercel.app/
5. Biz Trade Mart — https://www.biztrademart.com/

For MediConnect:

- Allow approximately 30 seconds for the free-hosted service to wake up.
- Retry once before declaring it unavailable.

For Biz Trade Mart:

- If curl fails, verify in a browser.
- Do not call the site dead solely because curl fails.

Check the browser console for:

- JavaScript errors.
- React errors.
- Hydration warnings.
- Broken image requests.
- Failed internal navigation.

Verify the page at 390px and 1440px.

Ensure:

- No face photos.
- No AI-generated images.
- No invented content.
- No incorrect email.
- No unintended copy changes.
- No broken original functionality.
- No horizontal overflow.
- No unexpected design changes.

## FINAL REPORT

Provide:

1. Summary of all completed phases.
2. Files modified.
3. Main visual improvements.
4. Project-card changes.
5. Responsive improvements.
6. Build result.
7. Link verification results.
8. Any unresolved issues.
9. Any missing assets or information.
10. Confirmation that changes remain uncommitted.

Do not commit or push.

STOP after final verification.

---

# FINAL DESIGN PRINCIPLE

This portfolio should feel like a carefully crafted, high-end personal engineering product.

Do not redesign something simply because you can.

Do not add visual effects to compensate for weak hierarchy.

Do not sacrifice clarity for decoration.

Do not replace real engineering work with marketing language.

Preserve the existing identity, correct the audited issues, and elevate the execution quality of every important detail.

**The goal is to make the existing portfolio feel exceptionally well designed, technically credible, cohesive, and premium — without making it look like a different website.**
