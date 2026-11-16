## OWNER CLARIFICATIONS — OVERRIDE CONFLICTING INSTRUCTIONS BELOW

These instructions come directly from the portfolio owner and override any conflicting MediConnect or screenshot instructions in this document and the blueprint.

### 1. MediConnect — preserve existing links and defer content changes

- Keep the **currently configured MediConnect GitHub repository URL and deployed URL exactly unchanged**. Read the existing project configuration/data to obtain the URLs; do not invent or replace them.
- The current consultancy frontend and features will be changed by the owner later into an **AI-assisted medical web application**.
- For this portfolio refinement, do not rewrite MediConnect's project description, invent medical features, claim that the planned AI medical functionality already exists, or change its repository/deployment links.
- Do not stop implementation or flag the existing links as an unresolved blocker.
- Preserve the existing MediConnect content for now. Improve its layout, typography, responsive behaviour, screenshot presentation and case-study structure without changing its factual claims.
- Treat the future AI-assisted medical application as planned work, not as functionality that can be presented as already shipped.
- The owner will update MediConnect's project content, screenshots and feature descriptions later.

### 2. Existing project screenshots — inspect before capturing anything

- The owner already has **five project screenshots** in the project folder, covering the project hero sections.
- First inspect the actual repository and locate these five images. Do not assume a hardcoded external workspace path.
- Identify which screenshot belongs to each project, inspect image quality and dimensions, and reuse suitable existing assets.
- Do not delete, overwrite, rename or replace existing screenshots without verifying the replacement.
- If the five hero screenshots are sufficient for the project cards, do not capture duplicates.
- If case-study pages need additional product/interface views, open the corresponding existing deployed project links using the available browser/Playwright tooling and capture useful, genuine screens.
- Capture only views that add value: real dashboards, workflows, product interfaces or meaningful application states. Do not capture repetitive landing-page sections just to increase image count.
- Save any additional captures separately under `public/screenshots/additional/`, with descriptive filenames such as `repogent-graph-view.png` or `findly-completed-run.png`.
- Do not fabricate screenshots, use AI-generated product UI, or expose private user data. If a project is inaccessible or a useful screen requires authentication, report that limitation instead of inventing a substitute.
- At the end, report the exact paths of all existing images reused and all new screenshots captured.

### 3. Preserve project links and owner control

- Do not change any existing project repository or deployment URLs unless explicitly instructed.
- Do not commit, push, merge or deploy.
- Complete the visual and technical improvements independently of the owner's planned future MediConnect content update.
- Do not let temporary project content block fixes to the portfolio's layout, responsive behaviour, navigation, footer, contact section or motion.



# OPENCODE EXECUTION PROMPT — Portfolio Transformation (abhishekbuilds)

> **Paste this entire prompt into OpenCode. It is self-contained. Read the blueprint first, then work the phases in order. Do not skip the verification steps.**

---

## 1. Mission

Transform the portfolio at https://abhishekbuilds-gules.vercel.app/ (local repo: the `abhishekbuilds` Next.js project — confirm the repo path before starting) from its current state into the premium execution described in the transformation blueprint. This is a **transformation, not a redesign and not a rewrite**: keep the existing identity (warm charcoal #141312, Newsreader + JetBrains Mono, orange accent #F95E14 / #FF5722, Scene numbering, book structure) and fix what is broken, then upgrade the project showcase, the case studies, the contact form, the footer, and the motion system — in that order.

## 2. Read first — before touching any code

1. Read `PORTFOLIO_TRANSFORMATION_BLUEPRINT.md` in full. It is the authority for every decision below. Where the blueprint and any Stitch output or earlier prompt disagree, **the blueprint wins**.
2. Read `PROJECT_MAP.md` (the read-only map of this repo from prompt 1) and verify it against the working tree. **Code wins over the map** where they disagree — report any discrepancy you find before starting Phase 0.
3. Inspect the local repo: confirm the component/file layout (Header/menu, Hero, Origin, Craft, Artifacts, Arsenal, Epilogue/contact, Footer, `app/projects/[slug]/page.tsx`, `content/index.ts`, `public/screenshots/`). Map every blueprint item to its real component/file and write that mapping down before you change anything.
4. Check what is already installed: `framer-motion`, `gsap`, `lenis`, `shadcn` components, the Stitch MCP and the 21st.dev MCP. Check `package.json` — do not re-install what exists.

## 3. Hard rules (non-negotiable)

- **No commits, no PRs, no merges, no tags, no deployment, no Git push.** Leave every change uncommitted in the working tree. The owner reviews and commits himself.
- **No complete rewrite.** Work component by component, phase by phase. Preserve the existing structure, routes (`/projects/[slug]` unchanged), data model (`content/index.ts`, Zod-typed) and functionality.
- **No invented content.** Every number, name, claim and metric must already exist on the site or in the blueprint. Do not invent metrics, users, achievements, testimonials or technical capabilities. If a fact is unverified, flag it — do not fill it in.
- **No face photo anywhere.** No person avatars, no AI mockups. Real screenshots only.
- **Repogent's GitHub link stays** (https://github.com/Abhishk-Kumar/Repogent) — the repo is private by the owner's choice; he will make it public later. Do not remove the link.
- **Ombre & Ash gets Live Demo only, no GitHub button. Biz Trade Mart gets no GitHub button** (private client repo). Never invent a repo URL for either.
- **Do not touch the Ask AI chat.**
- **Do not change the theme, the fonts, or the type scale.** Tokens: bg #141312, surfaces #0F0E0D/#1D1B1A/#211F1E/#2B2A28, text #F5F3EF/#CBC6BF/#948A8A, accent #F95E14/#FF5722/#FFB5A0, hairlines #211F1E/#262220, glow orbs rgba(249,94,20,.10) blur 130px.
- **No random gradients, no generic SaaS templates, no excessive glassmorphism, no purposeless decoration.**
- **After every phase: build + lint clean, then verify in the browser** at 1440 / 1280 / 1024 / 768 / 390 / 360, click through all navigation and links, check the console and network tab. If a phase's verification fails, fix it before starting the next phase — never stack new work on a red gate.
- **Report at the end of each phase:** files modified, what changed, what you verified, what remains.

## 4. Phase 0 — Critical defects (do this first)

### 4.1 H1 overlap (P0 — highest priority)
In 4 of 5 case studies the large serif H1's italic orange second line overlaps the first line ("Agent" over "Codebase Onboarding" on Repogent, "Platform" over "Autonomous Research" on Findly, "Platform" over "Healthcare Appointment" on MediConnect, "Component Library" over "B2B Marketplace &" on Biz — letters interleave). The same defect hits two homepage headings ("Things I built that outlived the / weekend.", "The next chapter is / unwritten."). Ombre & Ash is the control: single-line H1, no overlap.
- Root cause (confirm in code): very tight line-height on the display serif; the italic second line's ascenders cross the first line's descenders. This is a typography defect, not a layout defect.
- Fix structurally in the shared display-heading style (not per-page margins): set an explicit line-height for display headings — start at 1.05–1.1, verify visually at 1440px and 390px for the longest heading (Biz). Never use `overflow: hidden`, negative margins or absolute positioning on headings to hide this.
- Verify: screenshots of all 5 case-study H1s + the 2 homepage headings at 1440px and 390px, with no glyph contact anywhere. Ombre must stay clean.

### 4.2 Mobile hamburger menu (P0)
At 390/360/768px the menu is unusable: transparent overlay, links sit on top of the hero ("02 Craft"/"03 Artifacts" hidden behind the "Abhishek" heading), DOWNLOAD RÉSUMÉ overlaps MAKE CONTACT.
- Rebuild as an opaque full-screen menu (solid #141312), links in a clean vertical stack, buttons stacked full-width, close control, focus trap, Escape to close, `aria-expanded`, focus returns to the hamburger.
- Verify at 390, 360 and 768px: every link visible and tappable, no overlap with the hero, buttons not colliding.

### 4.3 Hero first stat (P0)
The first stat has no numeric value — value and label both read "YEARS IN SOFTWARE". Restore the value ("1.5+") from the content data and add a guard so a stat cannot render without a value. The other stats (+35% Relevance, −30% Latency, 62 → 91 Lighthouse, 2 Shipped AI Agent Products) are correct — do not change them. On mobile, fix the 5-stat 2-column grid so the last row doesn't leave an empty cell.

### 4.4 Footer wordmark (P0)
The footer shows "ABHISHEK" only, clipped at the right edge, barely visible; "KUMAR" is nowhere in the footer. Fix to the blueprint spec (Part 5): "ABHISHEK KUMAR" one line, Newsreader, ~14vw, not clipped, ghost colour raised until visible at 2× zoom, no hover, hairline above, ~50–60px padding. Size it in **container query units (`cqi`)** so it fills the width without overflowing, add a **CSS mask fade toward the bottom** + `aria-hidden` (decorative). Verify at 1440px and 390px — the full name must be visible, unclipped, at every width.

### 4.5 Project screenshots (P0)
Four of five cards show the wrong frames: Repogent = landing hero (old "CodeAtlas" branding), Findly = EMPTY dashboard (0 runs), MediConnect = landing hero (headline clipped), Biz = promo banners. Ombre is correct.
- The verified re-captures are in `~/workspace/your_files/portfolio-real-shots/` (repogent.png, findly.png, mediconnect.png, ombre-ash.png, biz-trade-mart.png). Drop them into `public/screenshots/` with those exact filenames and **delete the old screenshot files** so no stale asset can be served.
- Repogent: graph + chat view. Findly: completed run (Total Runs 1, Avg Score 8.0). MediConnect: booking form. Biz: marketplace hero. Ombre: full-width hero (already correct — replace anyway so the set is consistent).
- Verify each card visually against its brief after the swap.

### 4.6 Mobile 3-button collision (P0)
At ≤390px the three action links (LIVE DEMO / GITHUB / CASE STUDY) are forced into one row — LIVE DEMO wraps to two lines, CASE STUDY overlaps GITHUB. Below 480px, stack the three actions full-width (or 2+1). Two-button cards (Ombre, Biz) are already clean — don't change them.

### 4.7 Header behaviour (P1)
The header vanishes entirely on scroll (only a thin orange progress line remains) and only returns at the true top. Make it sticky with a solid background (`bg-background/95` + backdrop blur), hiding on scroll-down and showing on scroll-up (0.35s, power3.out). Never fully absent mid-page.

### 4.8 MediConnect — STOP AND FLAG (P0, owner decision, not your task)
The case study, Live Demo and GitHub for MediConnect all point at a different product: "Gyan Consultancy / Professional Consultancy Services" (live site footer "©2026 Swapnil Awasthi", placeholder contacts 9888888888 / shhhhhh@gmail.com). The GitHub repo (Consultancy-website) is JS/CSS/HTML with no MongoDB/Express/MERN evidence, while the case study claims a MERN healthcare platform with sub-100ms queries.
- **Do NOT fix this yourself.** Do NOT rewrite the case study, do NOT change the links, do NOT invent a MediConnect product. Flag it in your report as "needs owner decision" with the two options from the blueprint (rewrite truthfully around the consultancy product, or owner supplies correct demo/repo/screenshot). Continue with everything else in Phase 0 — nothing else is blocked by this.

### 4.9 Phase 0 acceptance
No overlap at any width; menu fully usable at 390/360/768; stat value renders; wordmark reads "ABHISHEK KUMAR" in full at every width; all 5 cards show the correct frames; header reachable mid-page; no console errors. Build + lint clean, browser-verified, then report.

## 5. Phase 1 — Showcase transformation (blueprint Part 3)

Replace the identical 5-card grid with **editorial chapters** (Direction 1: Editorial Engineering Report).
- Each project becomes a full-width chapter, alternating 60/40: Repogent 60-image/40-text, Findly reversed 40/60, MediConnect 60/40, Ombre image-dominant 65/35, Biz reversed 35/65. Mobile: single stacked column, image first. Implement asymmetry on the grid (unequal columns, alternating order) — **never with absolutely-positioned text over images**.
- Image side: real screenshot inside a minimal **browser-chrome frame** (hairline #262220, three dots, address bar in JetBrains Mono 11px with the real live URL). Beneath it, a compact **architecture strip** (Mermaid-style node flow, orange/mono on charcoal): Repogent Repo → AST parse → Graph → Chat/Scan; Findly Query → Decompose → Crawl → Synthesize → Quality gate ≥7; MediConnect Patient → Search → Book → Consult → Record → Pay; Ombre Hero → Collection → Atelier → Journal → Cart; Biz Catalogue → Cart → Escrow/Order → Dashboard. Node labels must never truncate — the box resizes to the label.
- Text side: index numeral (No. 01–05), title in Newsreader, one-line role statement, Problem → Solution → Result as three short labelled lines (2 lines max each), metrics strip (verified numbers only — do not add new ones), stack chips, LIVE DEMO / GITHUB / CASE STUDY buttons (Ombre and Biz: Live Demo only).
- Section header keeps Scene 03 numbering + "Artifacts" + one framing line: "Five systems, shipped."
- Also fix: MediConnect "Free hosting" note — remove it from the card and metrics. Diagram truncation (Repogent "Gen", Findly "(x3)") — fixed by the node rule above. The 5th-card empty void disappears by design.

**Case studies — same skeleton for all 5** (`app/projects/[slug]/page.tsx`):
1. Hero: title + one-line outcome + fact strip (Role / Stack / Context / Outcome, verified facts only).
2. Clickable architecture map: one Mermaid diagram, each node anchors to its section below.
3. "Try it" row: Live Demo + GitHub links. No embedded live app, no mock.
4. Problem (2–3 sentences) → Solution (with the full architecture diagram) → How it works (numbered pipeline stages).
5. Engineering decisions: 2–3 rows of Decision / Why / Trade-off (e.g. Findly: why LangGraph over a linear chain; Repogent: why AST parsing over regex). Draft only from the existing case-study text; flag anything unverifiable instead of inventing it.
6. Screenshots: real product views, full-width, mono captions stating what the frame shows.
7. "What I'd do next": one honest limitation/follow-up line per project (nothing invented).
8. Footer nav: previous / next project + back to Artifacts (explicit links, deterministic order).
- Fix the mobile case-study defects too: metrics checkmarks aligned to the first line (`align-items: flex-start`), pipeline box never clipping the stack line at 360px (`overflow: visible` / min-height that fits wrapped content).

**Phase 1 acceptance:** 5 chapters with correct frames, readable diagrams, no truncation, no empty void, mobile single-column image-first; each case study follows the 8-step skeleton. Build + lint clean, browser-verified at 1440/390, then report.

## 6. Phase 2 — Contact form + footer (blueprint Part 5)

### Contact form (Epilogue)
Keep the two-column split (narrative left, form right). Rebuild the form to this spec:
- 3 fields only — name, email, message. Single column, one field per row, in that order.
- Labels: top-aligned, persistent, sentence case, 1–3 words, left-aligned, asterisk + legend for required. No placeholder-as-label, no float labels. Placeholders are examples only ("Jane Smith", "you@company.com", "Tell us about your project").
- Inputs: 44–52px height (min 44px mobile), full width, 1px hairline #262220 at rest → 2px orange #F95E14 on focus + visible focus ring. Background #141312, text #F5F3EF. Labels in JetBrains Mono 11px caps; Newsreader only for the section headline.
- Validation on blur and on submit (never on focus, never per keystroke). Error text directly below the field, specific wording, red border + icon + text (never colour alone). Error clears when fixed; submit scrolls to and focuses the first error.
- Button: "Send message", solid orange, matching the header CONTACT button. Loading state ("Sending…"). Don't disable it before the user tries.
- Success: inline confirmation panel replacing the form + "Send another" reset. Never a faked success.
- **Wire submission to Formspree or Resend before claiming it works.** Until it is wired, keep the honest mailto fallback (COPY EMAIL button + email as text) visible alongside the form.
- Fix the "OPEN EMAIL APP" button: icon + label as one centred flex row with a fixed gap (currently the icon sits far left of centred text at every width).
- Form card: surface #1D1B1A, #262220 hairline, 12–16px radius, 20–24px gaps between fields. `type="email"`, `autocomplete="name"`/`"email"`. Keep the honeypot ("website") but ensure it is truly hidden from assistive tech and keyboard (aria-hidden, tabindex -1, autocomplete off).
- One trust line under the button: "Your email stays private." Do not invent a reply time.

### Footer
Two-part composition (blueprint Part 5):
1. Wordmark band (already fixed in Phase 0 — now add the scroll reveal): "ABHISHEK KUMAR", SplitText-style rise on scroll into view, respecting `prefers-reduced-motion`. Optional CTA line above it: "Have a role or a problem? → abhishkdk@gmail.com" (email as text).
2. Footer bar: bio left (name + role on one line with orange dot, bio below, max-w-2xl), BACK TO TOP ↑ right. Bottom row: "© 2026 Abhishek Kumar" left; section nav (Origin / Craft / Artifacts / Arsenal) centre; GitHub / LinkedIn / Email right. Availability line: "Open to AI Engineer roles — Kanpur / Remote" (factually supported — do not invent a response time). **No dev-indicator badges** (no "PALETTE LOCK", no "NO FACE PHOTO").
- Mobile: footer bar stacks bio → back-to-top → nav → socials; back-to-top tappable at 44px.

**Phase 2 acceptance:** form submits (or honestly falls back to mailto), validation works, button aligned at all widths; footer complete at 390/1440. Build + lint clean, browser-verified, then report. (Do not send a test message to the owner without his permission — report the form as ready for him to test.)

## 7. Phase 3 — Motion system (blueprint Part 6)

### Engine
- Install **GSAP + ScrollTrigger** and **Lenis** — but only after checking `package.json` (skip if already present). Commands: `npm install gsap` and `npm install lenis`. Note: the package is `lenis`, NOT `@studio-freight/lenis` (deprecated). GSAP is free for all uses.
- **One scroll owner:** Lenis drives the GSAP ticker — `lenis.on("scroll", ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`.
- **Framer Motion: keep, don't expand.** It already handles the hero entrance and component micro-interactions; use it only for those and for AnimatePresence case-study transitions. Do not add it as a second scroll engine.
- **Do not add:** Three.js/WebGL, ScrollSmoother (paid), custom cursor, preloader >1s.

### Motion tokens
Micro 0.18–0.3s · hover 0.25–0.4s · standard reveal 0.5–0.75s · section/project transition 0.7–1.1s · large cinematic 1.0–1.6s (only when the user isn't waiting) · default 0.6s (never make every tween 1s) · entrance ease `power3.out`, general UI `power2.out`, reversible `power2.inOut`, exit `power2.in` · stagger words 0.025–0.06, UI items 0.04–0.09, large cards 0.08–0.15 · reveal offset y 24–48 · blur-in 4–10px → 0 (sparingly, never on large images) · scrubbed scenes `ease: "none"`, scrub 0.8–1.4 · sticky-stack scale 1 → 0.92, autoAlpha → 0.72, y −24 · Lenis `lerp: 0.08–0.1`, `smoothWheel: true`, `wheelMultiplier: 0.9`, `syncTouch: false`.

### The 10 animations (implement all, in this order)
1. **Hero masked headline reveal** — lines rise from masked overflow containers (yPercent 110 → 0), stagger 0.05, 0.75s, power3.out, on load after fonts. Mobile: single-line masks, stagger 0.03.
2. **Scene-counter numerals** — slow parallax y ±8% of viewport, scrub 1. Mobile: off (static).
3. **Section reveals** — fade-up y 36 + blur 8px → 0, 1s, power4.out, stagger 0.08, `once: true`, start "top 82%". Mobile: y 24, 0.5s, no blur.
4. **Artifacts sticky card stack** — as the next chapter arrives, the previous scales to 0.92, dims to autoAlpha 0.72, shifts y −24 (scrubbed, next card's top 78% → 24%). **Desktop only** — mobile renders a normal stacked list. Use `position: sticky` for layout, ScrollTrigger only for scale/dim.
5. **Project image media reveal** — clip-wrapper scaleY 0 → 1 from bottom, image scale 1.08 → 1, 0.9–1.2s, frame entering at 85%. Mobile: transform-only.
6. **Architecture-diagram node stagger** — nodes fade/slide in sequence (stagger 0.06–0.1) on viewport entry, once. Mobile: stagger 0.04.
7. **Footer wordmark parallax reveal** — yPercent −12 → 0 + autoAlpha 0.85 → 1, scrubbed "top bottom" → "top 45%". Mobile: unscrubbed single triggered fade.
8. **Header show/hide** — translate out on scroll-down, back in on scroll-up (0.35s, power3.out), always solid bg-background/95 + blur. (This is the Phase 0 header fix, now animated — keep the Phase 0 behaviour.)
9. **Hover** — frame image scale 1.01–1.03 + orange border glow; buttons lift −2px with shadow; nav link underline sweep. Mobile: off.
10. **Case-study route transition** — single controller, three phases: cover (orange panel wipe 0.35s) → content swap → reveal (fade-up 0.5s). Total 0.7–1.1s. Mobile: cover 0.25s. Framer Motion's AnimatePresence can own this if already wired; otherwise GSAP — pick one, not both.

**Motion language: "Quiet editorial motion."** Everything moves once, on transform + opacity only, at 0.5–0.75s with power3.out, staggered by words (0.05) or cards (0.08–0.15); the only scrubbed motions are the Artifacts sticky stack, the scene numerals, and the footer wordmark; the only easing family is power2/power3-out (no elastic, no bounce, no back-easing anywhere); Lenis lerp 0.08–0.1 gives the whole page one consistent glide. Nothing moves on mobile beyond simple reveals. If a proposed animation can't state its purpose in one sentence, it doesn't ship.

**Accessibility (mandatory):** `prefers-reduced-motion` — disable Lenis entirely, kill ScrollTriggers, render all content in its final visible state (CSS must hold the safe initial state so no-JS still shows everything; never hide content behind an entrance animation). Do not just shorten durations. Keyboard/focus: Lenis must not break keyboard scrolling, focus scrolling or anchor links — test Space/PageDown/arrows, skip links, `#section` anchors. Add `data-lenis-prevent` to any nested scroller (e.g. a code block in a case study). Call `ScrollTrigger.refresh()` after images/fonts settle, never per frame; no markers in production; `invalidateOnRefresh: true` for viewport-derived values.

**Phase 3 acceptance:** all 10 animations present, mobile limited to simple reveals, reduced-motion renders final states with no animation, no layout shift, Lighthouse mobile ≥ 90. Build + lint clean, browser-verified with reduced motion on and off, then report.

---

## 8. Phase 4 — Responsive, accessibility, SEO, performance polish

- **Scene 02 timeline dates:** below the md breakpoint, stack the date above the entry (full-width, one line) instead of a ~50px side column ("JUL 2021 — JUL 2024" must not break into 4 lines). Fix the B.Tech heading wrap at 360px ("CSE (AI & / ML)").
- **Spacing + orbs:** section padding py-16 md:py-20 — no band ≥150px between sections (verify visually). Orange glow orbs rgba(249,94,20,.10) blur 130px in every section (Craft, Artifacts, Arsenal were flat black). Confirm no element uses #000 or #080808.
- **Arsenal chips:** order groups by relevance to the target role; lead each group with its 2–3 strongest items. No % bars.
- **Contrast:** raise muted body text one step above #948A8A where it carries body copy (keep #948A8A for labels/captions only); verify ratios.
- **SEO (verify, don't assume):** per-page title/description, OG image (use a real screenshot, not a generic card), sitemap.xml, robots.txt, JSON-LD Person (name, role, Kanpur, GitHub/LinkedIn links).
- **Accessibility:** skip link at the top of every page; `aria-expanded` on the menu; `aria-hidden` on the decorative wordmark; 44px minimum targets on mobile; focus ring standard everywhere (the form already has a strong orange focus outline — extend it to nav, buttons, links).
- **Performance:** Next.js Image everywhere; `priority` on case-study heroes and the first Artifacts screenshot; explicit width/height; blur placeholders. Verify Lighthouse mobile ≥ 90 after the motion phase.
- **Console/network check:** the investigation that produced this prompt could not open DevTools, so console errors and failed requests were never verified. Check the console and network tab yourself and fix what you find. Do not claim zero errors without that check.
- **Images:** serve the 5 screenshots at the sizes the frames actually render — don't ship 2560px files into a 600px frame.

**Phase 4 acceptance:** zero defects remaining from the blueprint's Part 2 audit (except the MediConnect item, which is the owner's call); clean console; Lighthouse mobile ≥ 90. Build + lint clean, full browser pass at all 6 widths, then report.

## 9. Tools, skills and components

- **Already available — verify before use:** shadcn components, Stitch MCP, 21st.dev MCP, framer-motion, Next.js.
- **21st.dev components (via the MCP, re-skin to #141312 / #F95E14 / Newsreader + JetBrains Mono before use):** Sticky Scroll Reveal (case studies — pin screenshot, Problem → Solution → Result panels scroll), Spotlight Hero kinetic type (hero headline blur-to-clear word reveal), AI SaaS Hero preview frame (Repogent/Findly cards). **SKIP Matter.js physics badges** (wrong tone).
- **Stitch:** layout inspiration only — never tokens, colours, fonts or copy. Stitch has repeatedly invented credentials, metrics, a face photo and the "ABHISHEK"-only wordmark on this project. Audit every Stitch output against this blueprint's verified facts before using any element.
- **Do NOT add:** Three.js / WebGL / React Three Fiber, ScrollSmoother (paid), Matter.js physics badges, custom cursor, preloader libraries, any new animation library beyond GSAP + Lenis + existing framer-motion.
- **Reference library (blueprint Part 7):** Mat Voyce (motion system), Brittany Chiang (structure), Paco Coursey (spring hovers), Rauno Freiberg (one interactive case study), Andrew McCarthy (text-scramble titles), Tania Rascia (timeline + Source/Demo), Leland Jansen (case-study header template), La Playa (framed screenshots), Big Wordmark Footer (cqi + mask fade), 21st.dev components, GSAP ScrollTrigger showcase, Behance AI case studies. Strongest combination: Mat Voyce motion + Brittany Chiang structure + La Playa framed screenshots, re-skinned to this identity.

## 10. Verification — how you prove each phase

After every phase, in the browser (not just `next build`):
1. `npm run build` and lint clean. Zero errors, zero TODOs left in changed files.
2. Open the site at 1440 / 1280 / 1024 / 768 / 390 / 360. Scroll every section. Open all 5 case studies. Open and close the mobile menu at 390/768.
3. Click every nav link, every LIVE DEMO / GITHUB / CASE STUDY button, BACK TO ARTIFACTS, Previous/Next, Back to Top, COPY EMAIL. Open `/resume.pdf`.
4. Check the console and network tab — record what you found (including "clean").
5. Run Lighthouse on mobile; record the score.
6. Take screenshots of anything you changed at 1440px and 390px and inspect them yourself before reporting.

**Verification checklist (final, after Phase 4):**
- [ ] No H1 overlap in any case study or homepage heading, at any width
- [ ] Mobile menu fully usable at 390/360/768
- [ ] Hero stat value renders ("1.5+")
- [ ] Footer wordmark reads "ABHISHEK KUMAR" in full, unclipped, at every width
- [ ] All 5 cards show the correct screenshot frames
- [ ] No 3-button collision at ≤390px
- [ ] Header reachable mid-page
- [ ] Form submits (or honestly falls back to mailto); button aligned at all widths
- [ ] All 10 motion animations present; reduced-motion renders final states
- [ ] Console clean; Lighthouse mobile ≥ 90
- [ ] MediConnect flagged as "needs owner decision" (not silently fixed)

## 11. What to report when you finish

For each phase, and a final summary at the end:
- Files modified (with paths).
- What changed, in one line per change.
- What you verified (widths tested, links clicked, console state, Lighthouse score).
- **Remaining issues** — anything you could not fix, anything you flagged (especially MediConnect), and anything the blueprint asked for that the repo could not support. Do not hide unfinished work.
- **Do not commit, deploy, or push.** Leave everything uncommitted in the working tree.

## 12. Quick reference — the facts you must not get wrong

- Site: https://abhishekbuilds-gules.vercel.app/ · Owner: Abhishek Kumar, Kanpur, India · Role target: AI Engineer · Email: abhishkdk@gmail.com
- Projects: Repogent AI (https://repogent.vercel.app/, GitHub private by owner choice — link stays) · Findly.AI (https://findly-ai-rosy.vercel.app/) · MediConnect (links frozen pending owner decision — see 4.8) · Ombre & Ash (https://ombre-ash-perfumes.vercel.app/, Live Demo only) · Biz Trade Mart (https://www.biztrademart.com/, Live Demo only, client work)
- Verified metrics (do not change or add): Repogent <60s parse, 500+ files · Findly 8-node LangGraph, quality gate ≥7, max 3 revisions · MediConnect sub-100ms queries (claimed — pending the 4.8 decision) · Ombre 4 extraits, 400 units/batch, 3 salons · Biz Lighthouse 62 → 91, 10+ modules, −35% bug reports · Hero: 1.5+ years, +35% relevance, −30% latency, 62 → 91 Lighthouse, 2 shipped AI agent products
- Journey (canonical dates): Diploma CSE Jul 2021–Jul 2024 · B.Tech CSE (AI & ML) Mar 2024–Mar 2027 · Planto AI Nov 2024–May 2025 · Biz Trade Mart Dec 2024–Feb 2026
- Tokens: #141312 / #0F0E0D / #1D1B1A / #211F1E / #F5F3EF / #CBC6BF / #948A8A / #F95E14 / #FF5722 / #FFB5A0 / hairlines #211F1E/#262220 · Newsreader + JetBrains Mono
- Screenshots: `~/workspace/your_files/portfolio-real-shots/` → `public/screenshots/` (repogent.png, findly.png, mediconnect.png, ombre-ash.png, biz-trade-mart.png)
