# PORTFOLIO TRANSFORMATION BLUEPRINT

**Site:** https://abhishekbuilds-gules.vercel.app/ (Next.js, warm-charcoal "book/Scenes" portfolio)
**Owner:** Abhishek Kumar, Kanpur, India — final-year B.Tech CSE (AI & ML), target role AI Engineer
**Date:** 2026-11-16
**Purpose:** Evidence-based, implementation-ready transformation strategy for OpenCode. Not a redesign. The identity stays; the art direction, project storytelling, motion and execution get premium.

## How this document was built

Four independent investigation streams, all run 2026-11-16:

1. **Desktop visual re-audit** (1919×998 viewport, animations settled) — full page, all 5 project cards, footer, header behaviour.
2. **Case-study + interaction audit** (desktop) — all 5 case-study pages individually, every link/button/form interaction, H1 overlap investigation, diagram and screenshot checks, live-demo/GitHub resolution.
3. **Mobile + tablet audit** — 390px, 360px, 768px, 1024px, full page + hamburger + form + 2 case studies at 390px.
4. **Design research** — 12 verified world-class references (Behance, Dribbble, 21st.dev, Awwwards, Godly, GSAP, AI/ML engineer portfolios) and 6 showcase directions + motion + contact/footer research, all from pages returned by search/fetch.

Prior audit history folded in: tunnel audit (20 issues, 2026-11-14), Vercel audit v2 (24 issues), visual re-audit v3 (2026-11-16). Where a v3 finding contradicts an earlier claim, v3 wins.

### Investigation limits — read this before trusting any claim

- **No source-code access.** This investigation inspected the live rendered site only. Root causes are inferred from visual patterns (e.g. "tight line-height" from overlapping glyphs). OpenCode must confirm each root cause in the repo before fixing.
- **Console/network NOT verified.** Neither browser task could open DevTools, so console errors, failed requests and font failures were not observed and are not claimed to be zero. OpenCode must check the console and network tab locally.
- **Viewport caveats.** Desktop audits ran at a 1919×998 viewport, not exactly 1440px CSS width — overlaps visible at 1919px will be at least as bad at 1440px where titles wrap more. 1280px was not directly tested. 768px/1024px were tested via Screenfly iframes loading the live site (not a screenshot proxy), with the outer window at 705px, so right edges at those widths were panning-verified only. 390px/360px were tested at 1:1 scale.
- **The audited build is pre-Prompt-4.** The deployed build at audit time still carried the old screenshots, old Origin grammar and the Stitch "ABHISHEK"-only wordmark. Prompts 3, 4 and 5 (already written) cover parts of this; this blueprint incorporates them and goes beyond them. Do not treat this blueprint as a repeat of those prompts.
- **Content-integrity items need the owner's decision, not an agent's guess.** Flagged explicitly in Part 2 (MediConnect/Gyan Consultancy) and Part 10.

### Design tokens — the identity, verified from the live site's own CSS (code wins)

| Token | Value |
|---|---|
| Background | #141312 warm charcoal (NOT pure black) |
| Surfaces | #0F0E0D, #1D1B1A, #211F1E, #2B2A28 |
| Text | #F5F3EF (primary), #CBC6BF, #948A8A (muted — note: low contrast, see Part 8) |
| Accent | #F95E14 (secondary-container), #FF5722 (primary-container), #FFB5A0 (primary) |
| Hairlines | #211F1E / #262220 |
| Glow orbs | rgba(249,94,20,.10), blur 130px |
| Fonts | Newsreader (serif display) + JetBrains Mono (labels/body) |
| Type scale | display-hero 72/80 (mobile 44/52), headline-lg 52/60 (mobile 34/42), headline-md 32/40, headline-sm 22/30, body-lg 20/32, body-md 14/24, body-sm 12/20, label-caps 11/16 tracking 0.15em, scene-counter 140px (mobile 80px) |
| Structure | Hero → Scene 01 Origin → Scene 02 The Craft (Journey) → Scene 03 Artifacts (5 projects) → Scene 04 Arsenal → Epilogue (contact) → Footer |

**Hard rules (standing, from the owner):** no face photo anywhere; real screenshots only, never AI mockups; no invented metrics, users, achievements or technical capabilities; Repogent's GitHub link stays (the repo is private by the owner's choice — he will make it public later, do not remove the link); Ombre & Ash gets Live Demo only, no GitHub button; Biz Trade Mart gets no GitHub button (private client repo); OpenCode makes no commits, PRs, merges or deploys.

---

## PART 1 — Current Portfolio Assessment

### Current visual identity
A coherent "book" concept: numbered Scenes, a serif display face against warm charcoal, orange used sparingly, mono labels as the connective tissue. The concept is genuinely distinctive for an AI Engineer — most engineer portfolios are either generic dark SaaS or a template. The identity is the asset. Nothing in this blueprint replaces it.

### Strongest sections
- **The concept itself.** Scenes + Newsreader + warm charcoal reads as a designed object, not a template. Recruiters remember it.
- **Scene 03 Artifacts, in intent.** Five real shipped projects with Live Demo links, metrics strips and architecture diagrams is the right shape — the content model is correct, the execution is what's broken (Part 3).
- **Ombre & Ash card.** The only card that fully matches its brief — real full-width hero screenshot, correct diagram, quantified metrics. It is the internal quality bar.
- **Navigation and case-study navigation.** Nav links, logo-to-top, BACK TO ARTIFACTS and Previous/Next all work (verified by click). Back to Top works.
- **COPY EMAIL.** Works (button changes to COPIED, confirmation appears). Email is shown as text — good for recruiters.
- **No horizontal overflow** at any tested width. The responsive foundation is sound; the breaks are component-level, not structural.

### Weakest sections
- **Mobile navigation.** The hamburger menu is unusable at 390/360/768px — transparent overlay, links hidden behind the hero heading, its own buttons overlapping. With ~68% of recruiter traffic on mobile, this is the single most damaging defect on the site.
- **Case-study headlines.** The large serif H1 overlaps itself in 4 of 5 case studies and in 2 homepage headings. A recruiter opening a case study sees broken type first.
- **Footer wordmark.** Shows "ABHISHEK" only, clipped at the right edge, barely visible — on every width, worst on mobile. The site's signature element is its most visible defect.
- **Project screenshots.** Real images, wrong frames: landing heroes instead of product views, an empty dashboard instead of a completed run, promo banners instead of a marketplace. The screenshots currently undermine the "real software" claim.
- **Hero stats.** The first stat has no numeric value — it literally reads "YEARS IN SOFTWARE" as both value and label.
- **Header.** Vanishes entirely on scroll and only returns at the true top. Navigation disappears exactly when the visitor needs it.
- **Contact form.** A mailto composer presented as a form, with a misaligned submit button and no real submission path wired.

### Overall user experience
Desktop, the site reads as a serious portfolio with visible rough edges. Mobile — where most recruiters will see it — it reads as unfinished: broken menu, colliding buttons, stacked dates, clipped wordmark. The gap between desktop and mobile quality is the defining problem.

### Biggest missed opportunities
1. **Technical storytelling.** The architecture diagrams exist but are truncated decoration. Repogent's value is its AST dependency graph; Findly's is an 8-node LangGraph with a quality gate. Neither is explained as engineering. A hiring manager cannot tell from the current cards *how* the owner thinks.
2. **Screenshot framing.** Real screenshots presented as flat images read as pictures. The same screenshots inside a browser-chrome frame read as products. Near-zero cost, large effect.
3. **One interactive case study.** A small working demo inside one case study (a draggable dependency-graph node, a quality-gate slider) would prove the craft the portfolio claims. Used once, it is the strongest differentiator available.
4. **Motion as a system.** The site has scattered animations and one near-illegible hero entrance in its history. A single quiet motion language (Part 6) would make the whole site feel deliberate instead of assembled.

### Technical credibility
Mixed. The projects are real and the demos resolve (except the known Repogent repo privacy and the MediConnect integrity issue). But the portfolio itself ships visible defects a technical reviewer will notice: overlapping headlines, a broken mobile menu, a missing stat value, a clipped wordmark. For an AI Engineer, the portfolio *is* the code sample. These defects cost more here than on a designer's site.

### Recruiter experience (the 30-second test)
A recruiter on mobile: menu doesn't work, so they scroll. Hero stat one is broken. Project cards show landing heroes, not products; the 3-button rows collide. If they open a case study, the headline overlaps itself. If they reach the footer, the name is clipped. The content that would convince them (real projects, real metrics, real demos) is present but wrapped in defects that say "unfinished." Fixing the P0 list alone changes this verdict.

---

## PART 2 — Complete Section-by-Section Audit

Severity: **P0** critical defect · **P1** important improvement · **P2** meaningful refinement · **P3** optional enhancement.
"Evidence" cites the 2026-11-16 audits unless dated otherwise. Items already covered by prompts 3/4/5 are marked [P3/P4/P5] so OpenCode doesn't duplicate work blindly.

### Header & navigation

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| H1 | Header vanishes entirely on scroll; only a thin orange progress line remains; returns only at true top | P1 | v3 audit 2026-11-16 (desktop) | Sticky header, solid bg-background/95 + backdrop blur, show on scroll-up / hide on scroll-down (0.35s, power3.out). Never fully absent mid-page. | Nav always reachable |
| H2 | Hamburger menu unusable at 390/360/768px: transparent overlay, links sit on hero ("02 Craft"/"03 Artifacts" hidden behind "Abhishek"), DOWNLOAD RÉSUMÉ overlaps MAKE CONTACT ("…CT" visible) | P0 | Mobile audit 2026-11-16 (i18, i19, i40, i62) | Opaque full-screen menu background (solid #141312), links in a clean vertical stack, buttons stacked full-width, close control, focus trap + Escape to close, aria-expanded. | Mobile navigation works — the highest-value single fix |
| H3 | Case-study pages show logo + hamburger only (no RÉSUMÉ/CONTACT in header, unlike home) | P2 | Mobile audit (case studies at 390px) | Same header component on case-study pages. | Consistent navigation everywhere |

### Hero

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| HE1 | First stat has no numeric value: value and label both read "YEARS IN SOFTWARE" | P0 | Desktop + mobile audits 2026-11-16 (i38) | Restore the value ("1.5+") from content data; add a data check so a stat cannot render without a value. | Hero stats read correctly |
| HE2 | 5 stats in a 2-column mobile grid leave an empty cell (last row: "2 Shipped" alone) | P2 | Mobile audit 390px | 5 stats → mobile grid that balances (e.g. 2+2+1 centred, or a 5-row list). | No dead cell on mobile |
| HE3 | Badge pill wraps to two lines at 390px ("SEEKING AI ENGINEER ROLES — / KANPUR, INDIA"); hero CTAs stack with uneven widths | P2 | Mobile audit 390px | Shorten badge copy or allow it to wrap gracefully (centred, balanced); CTAs equal width when stacked. | Clean mobile hero |
| HE4 | Ghost scene numerals ("01"/"02") half-clipped at the right edge on mobile | P2 | Mobile audit 390px | Size numerals in container query units or clamp them inside the section padding at small widths. | No clipped numerals |
| HE5 | Hero headline "Abhishek / Kumar" is very tight — letters nearly touch (does not overlap, but one step from it) | P2 | Case-study audit (homepage headings) | Raise display line-height (see CS1) and verify at 1440px and 390px. | Headline breathes |

### Scene 01 — Origin

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| O1 | Grammar: "What I then combined both skill sets into my own projects: …" — ungrammatical, still live | P1 [P5] | v3 audit; text fetch 2026-11-16 | "I then combined both skill sets into my own projects:" — exact replacement. | Clean copy |
| O2 | ~200–240px empty black band between hero stats and "SCENE 01 — ORIGIN"; long empty stretch between Origin card and Craft heading | P1 [P5] | v3 audit (i16) | Section padding py-16 md:py-20; no band ≥150px between sections (verify visually, don't just change a number). | Even rhythm |
| O3 | Origin heading overlaps itself: "Things I built that outlived the / weekend." — second line crosses the first | P0 | Case-study audit (homepage) | Same fix as CS1 (display line-height). | No overlap |

### Scene 02 — The Craft (Journey)

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| C1 | Timeline date column ~50px on mobile: "JUL 2021 — JUL 2024" breaks into 4 stacked lines ("JUL / 2021 — / JUL / 2024"); same for B.Tech and "NOW /" | P1 | Mobile audit 390px (i23, i24) | Below the md breakpoint, stack date above the entry (full-width, one line) instead of a side column. | Dates read as ranges |
| C2 | B.Tech heading splits awkwardly at 360px ("CSE (AI & / ML)") | P2 | Mobile audit 360px | Allow the heading to wrap at a sensible point or shorten the parenthetical on small screens. | Clean wrapping |
| C3 | Journey density: education + internships are split now (good), but each entry is a paragraph block — hard to scan | P2 | Research (Brittany Chiang) | Role → dates → one tight paragraph → tech tags per entry. | Scannable experience |

### Scene 03 — Artifacts (project cards)

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| A1 | Wrong screenshot frames on 4 of 5 cards: Repogent landing hero (with old "CodeAtlas" branding), Findly EMPTY dashboard (0 runs), MediConnect landing hero (headline clipped), Biz promo banners | P0 [P3/P5] | v3 audit (i6, i7, i8) | Replace with the verified 2026-11-14 re-captures: repogent.png (graph+chat), findly.png (completed run), mediconnect.png (booking form), biz-trade-mart.png (marketplace hero), ombre-ash.png (already correct). Exact filenames; verify each card visually against its brief. | Cards show real products |
| A2 | Deployed screenshot filenames are the OLD set (Repogent.png, Findly-ai.png, Mediconnect.png, Ombre&ash-perfumes.png) — the verified re-captures were never dropped in | P0 [P5] | Text fetch 2026-11-16 | Drop the 5 verified PNGs into public/screenshots/ with the exact new names; delete the old files so no stale asset can be served. | No stale images |
| A3 | 3-button row collides at ≤390px: LIVE DEMO wraps to two lines, CASE STUDY overlaps GITHUB | P0 | Mobile audit 390px (i29, i30) | Below 480px, stack the three actions full-width (or 2+1); never force three labels into one row. | Tappable, legible actions |
| A4 | Pipeline chips truncate: "COLLECTIO" (Ombre), "ESCROW/ORD" (Biz); Repogent "GRAPH / Graph Gen" and Findly "FINALIZE (x3)" chips are taller than neighbours | P1 | Mobile audit (i31, i32); desktop audit | Chips: allow wrapping or smaller text at small widths, min-height consistent, no fixed-height truncation. | Labels complete |
| A5 | Diagram label truncation on cards/case studies: Repogent node shows "Gen" (case study) vs "Graph Gen" (card); Findly shows "(x3)" vs "Finalize (x3)" | P1 | Case-study audit | Node labels get min-width + wrapping; never truncate a node label to fit a fixed box — resize the box. | Diagrams readable |
| A6 | 5th card (Biz) leaves a full empty black void on the right in a 2-column grid (768px) and on desktop | P1 | Mobile audit (i66); v3 audit (i8) | Part 3 composition replaces the grid with alternating full-width chapters — the void disappears by design. | No dead column |
| A7 | Cards are visually identical in structure; the two AI flagships look the same as the two commerce/brand projects | P2 | Research (Part 3) | Alternating 60/40 chapters; image-dominant variant for Ombre/Biz (Part 3). | Hierarchy matches importance |
| A8 | MediConnect card still carries "* Free hosting, may take about 30 seconds to wake up." | P1 [P3/P5] | v3 audit (i8); text fetch | Remove the note from the card (and from metrics). | No hosting apology on a card |

### Scene 04 — Arsenal

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| AR1 | Large empty brown gap below the Arsenal chips; large empty black gap above "SCENE 04 — ARSENAL" (768px and 1024px) | P1 | Mobile audit (i67, i80) | Section padding fix (see O2); check for a stray spacer/margin in the Arsenal component. | Even rhythm |
| AR2 | No glow orbs in Craft, Artifacts, Arsenal — flat black; orbs only in Hero/Origin/Epilogue | P1 [P5] | v3 audit (i6, i7, i8) | Orange glow orbs rgba(249,94,20,.10) blur 130px in every section; confirm no element uses #000/#080808. | Warmth throughout |
| AR3 | Skill groups are chip clouds; no sense of level or order | P3 | Research | Keep chips (no % bars — Reddit/Behance consensus), but order groups by relevance to the target role and lead each group with its 2–3 strongest items. | Chips read as judgement, not a dump |

### Epilogue — contact

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| E1 | The "form" is a mailto composer, not a working form; nothing is submitted anywhere | P1 | Case-study audit (form inspection) | Wire submission to Formspree or Resend before claiming it works; until then keep the honest mailto fallback (COPY EMAIL + email as text) visible alongside it. Never fake a success state. | A form that actually sends |
| E2 | "OPEN EMAIL APP" button misaligned: envelope icon far left of centred label, vertically offset — visible at 390px, 768px and desktop | P1 | Mobile + desktop audits (i34, i68) | Button as a proper flex row: icon + label centred together with a fixed gap; verify at all widths. | Button looks built, not broken |
| E3 | Hidden honeypot textbox named "website" in the DOM | P2 | Case-study audit | Keep the honeypot (legitimate spam defence) but ensure it is truly hidden from assistive tech and keyboard (aria-hidden, tabindex -1, autocomplete off) — verify, don't just assume. | Spam defence without a11y cost |
| E4 | Epilogue heading overlaps itself: "The next chapter is / unwritten." | P0 | Case-study audit (homepage) | Same fix as CS1. | No overlap |
| E5 | No success/error state is observable without submitting; none shown on load | P2 | Case-study audit | Inline success panel replacing the form + "Send another" reset; error text below the field (Part 5). | Feedback exists |

### Footer

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| F1 | Wordmark shows "ABHISHEK" only, clipped at the right edge ("ABHISHE" + sliced "E" on desktop; "ABHISH"/"ABHISL" on mobile), barely visible; "KUMAR" is nowhere in the footer | P0 [P4/P5] | v3 audit (i10 + 2× crop); mobile audit (i35, i36, i47); text fetch | "ABHISHEK KUMAR" one line, ~14vw, not clipped, colour raised until visible at 2× zoom; size in container query units (cqi) so it fills the width without overflowing; CSS mask fade toward the bottom + aria-hidden; SplitText rise on scroll into view. Full spec in Part 5. | The signature works |
| F2 | Footer tagline "OPEN TO AI ENGINEER ROLES — KANPUR," cut at the right edge in one mobile view | P2 | Mobile audit (i34) — unconfirmed, may be a moving marquee | Verify: if it is a marquee, give it a static fallback; if static, let it wrap. Do not ship a clipped tagline. | Tagline complete |
| F3 | Footer has no section navigation in the bottom bar (only bio + Back to Top + socials) | P3 | Research (Part 5) | Bottom row: © line left, section nav centre, GitHub/LinkedIn/Email right. | Footer is navigable |
| F4 | No availability line beyond the Epilogue copy | P3 | Research | Add only the factually supported line: "Open to AI Engineer roles — Kanpur / Remote". Do not invent a response time. | Recruiter sees availability |

### Case studies (/projects/[slug])

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| CS1 | **H1 overlap (critical):** in 4 of 5 case studies the large serif H1's italic orange second line overlaps the first line — "Agent" over "Codebase Onboarding" (Repogent), "Platform" over "Autonomous Research" (Findly), "Platform" over "Healthcare Appointment" (MediConnect, worst with Biz), "Component Library" over "B2B Marketplace &" (Biz, letters interleave). Present on load, persistent, not scroll/animation. Ombre is the control: single-line H1, no overlap. | P0 | Case-study audit 2026-11-16 (all 5 pages, 1919px) | Structural fix, not a margin tweak: raise the display-serif line-height (measure the italic ascenders — the second line's ascenders cross the first line's descenders at the current value); set an explicit leading for display headings (start 1.05–1.1, verify visually at 1440px and 390px); keep the italic second line but test it at every heading length; never absolutely position heading lines. Full root-cause treatment in Part 4. | Headlines readable everywhere |
| CS2 | Hero screenshot container crops top and bottom of every case-study hero (Repogent headline half-clipped, MediConnect "Professional" half-clipped, Ombre "OMBRE" top clipped, Biz banner cut) | P1 | Case-study audit | Aspect-ratio container matched to the screenshot (no fixed-height crop); object-position top; priority loading + blur placeholder (see CS3). | Screenshots fully visible |
| CS3 | Hero images load slowly: Findly, Ombre, Biz heroes appeared as blank dark rectangles on first load ("pending"), then loaded after seconds | P1 | Case-study audit; mobile audit (Biz image incomplete when sampled) | Next.js Image with priority on the case-study hero, explicit width/height, blurDataURL placeholder; verify first paint shows the image, not a void. | No blank rectangles |
| CS4 | MediConnect content integrity: hero screenshot, Live Demo and GitHub all point at a different product — "Gyan Consultancy / Professional Consultancy Services" (Medical, Legal, Technology, Travel), live site footer "©2026 Swapnil Awasthi", placeholder contacts (9888888888, shhhhhh@gmail.com, "Flat no.406… Pin Code-222222"). GitHub Consultancy-website is JS/CSS/HTML, 9 commits, no description — no MongoDB/Express/MERN evidence. The case study claims a MERN healthcare platform with sub-100ms queries. | P0 — **needs owner decision** | Case-study audit (live demo + repo opened); corroborated by 2026-11-14 capture | **Do not auto-fix.** OpenCode must flag this to the owner and stop: either (a) MediConnect IS the consultancy site and the case study must be rewritten to describe it truthfully (multi-domain consultancy, Vite + React, no MERN claims), or (b) the links/screenshot are wrong and the owner supplies the correct demo, repo and screenshot. Until the owner decides, do not invent a MediConnect product. This is the one item in this blueprint that is a question, not a task. | No false claims on a case study |
| CS5 | Repogent GitHub returns 404 (repo private by owner choice) and the live app brands itself "CodeAtlas", not "Repogent AI" | P1 | Case-study audit (GitHub 404; live app opened) | Portfolio side: keep the GitHub link (owner will make the repo public later); use the graph/chat screenshot so the card doesn't depend on the landing hero's old branding. The app rebrand is a separate repo task, not this blueprint's. | Link stays, card stops showing old branding |
| CS6 | Findly case study at 390px: "Built-in Metrics" checkmarks vertically misaligned (tick sits mid-block between two wrapped lines) | P1 | Mobile audit (i89) | Checkmark row: align-items flex-start, tick aligned to the first line, not centred on the block. | Metrics read cleanly |
| CS7 | Findly stack line clipped by its pipeline box at 360px ("…Groq Llama- / 3.3-70B + …" last line cut in half) | P1 | Mobile audit (i44) | Pipeline box: overflow visible / min-height that fits the wrapped content; never clip text at a box edge. | Stack complete |
| CS8 | Case-study diagrams exist but are decorative: same diagram on card and case study, no explanation of what the nodes mean | P2 | Research (Part 3) | Clickable architecture map (Part 3): each node anchors to its section; nodes stagger in on entry. | Diagrams teach |
| CS9 | Case studies open with no outcome up top — the reader must scroll to learn what changed | P2 | Research (Leland Jansen, Marcos Saade) | Fixed header block: what it is / what I built / stack / what changed (verified numbers only). | 10-second comprehension |

### Responsive, performance, SEO, accessibility (cross-cutting)

| # | Issue | Sev | Evidence | Improvement | Outcome |
|---|---|---|---|---|---|
| R1 | Console errors, failed requests, font failures: NOT verified (no DevTools access in either browser task) | P1 | Both audits state this limit | OpenCode must check console + network locally and fix what it finds; do not claim zero errors without that check. | Known state, not assumed |
| R2 | 1280px laptop width not directly tested; 1440px exact CSS width not tested (desktop audits at 1919px) | P2 | Audit method notes | OpenCode verifies at 1440px, 1280px, 1024px, 768px, 390px, 360px in the browser before calling any phase done. | Real coverage |
| R3 | Body text #948A8A on #141312 is low contrast (noted in the original 2026-11-14 audit) | P2 | Original audit | Raise muted text one step where it carries body copy (keep #948A8A only for labels/captions); verify contrast ratios. | Readable grey text |
| R4 | SEO: metadata/OG/sitemap not verified in this investigation (a 29-URL sitemap existed in the Sep 2026 CodeAtlas work — different app; do not assume this site has one) | P2 | Not checked | OpenCode verifies: title/description per page, OG image, sitemap.xml, robots.txt, JSON-LD Person. | Discoverable |
| R5 | Reduced-motion handling: unknown — entrance animations existed and the hero once started near-illegible | P2 | History + research | prefers-reduced-motion: disable Lenis and ScrollTriggers, render final states (Part 6). | Accessible motion |
| R6 | No skip link observed; menu/wordmark aria states unknown | P2 | Audits did not confirm | Add skip link, aria-expanded on the menu, aria-hidden on the decorative wordmark. | Keyboard + screen-reader safe |

---

## PART 3 — Project Showcase Transformation

### The problem with the current cards
The current Artifacts section is a grid of five identical cards: screenshot on top, title, one-liner, metrics strip, diagram, Problem → Solution → Result, stack chips, three buttons. The *content model* is right (it came from Reddit research: visual-first, metrics, architecture, Problem → Solution → Result). The *presentation* is wrong in three ways: (1) the screenshots are the wrong frames, so the visual lead is weak; (2) identical structure for five very different projects flattens the two AI flagships into the same shape as a perfume brand site; (3) the diagram is decoration — it doesn't explain anything. A recruiter scanning for 15–30 seconds sees five similar boxes, not five systems.

### Three directions, compared

| Direction | What it is | Identity fit | Recruiter proof | Risk | Verdict |
|---|---|---|---|---|---|
| **1. Editorial Engineering Report** (D technical storytelling + A editorial) | Book-style chapters: large serif, numbered, full-width; each project opens with role/stack/outcome, then a diagram-led explanation of how the system works; screenshots in browser frames; Problem → Solution → Result as labelled lines | **Native.** The site is already a book with Newsreader and Scene numbering — editorial costs nothing and preserves identity | **Highest.** The only direction that proves *how* the owner thinks, not just what they shipped. Directly serves Repogent (AST graph) and Findly (8-node LangGraph) | Low — uses existing content, restructured | **RECOMMENDED (primary)** |
| **2. Interactive Product Showcase** (B-led) | Browser/device frames, sticky-scroll reveals, live interactive previews | Medium — frames help, but 3D device mockups read as generic agency work and fight the book identity | Medium — frames make screenshots read as products; live embedded demos would expose broken products (Repogent loses large-repo jobs mid-parse; MediConnect's booking page 404s on fresh load) | Medium — live demos are a liability here | **Use the frame only** (browser-chrome frame + URL bar), not the full direction |
| **3. Cinematic Scroll Story** (C-led) | Pinned scenes, scrubbed sequences, horizontal gallery, cross-dissolves | Low as a primary — the book is calm; cinema fights it | Low — motion doesn't prove engineering | **High** — evidence: one developer's WebGL portfolio scored 34 on mobile Lighthouse and showed an "Oops!" screen on phones; the poster-style replacement scored 95–100 | **Seasoning only** — sticky card stack + masked reveals, nothing more |

**Decision: Direction 1 (Editorial Engineering Report), with asymmetric rhythm (E) inside it, the browser-chrome frame from Direction 2, and the sticky-stack + masked reveals from Direction 3.** Nothing else from 2 or 3 ships.

### Recommended composition — Artifacts section

Section header keeps the Scene 03 numbering and "Artifacts" in Newsreader, plus one framing line: "Five systems, shipped." Each project becomes a full-width **chapter** (not a grid card), alternating 60/40:

**Image side (60%)**
- Real screenshot inside a minimal browser-chrome frame: hairline #262220 border, three dots, address bar in JetBrains Mono 11px showing the real live URL (repogent.vercel.app, findly-ai-rosy.vercel.app, e-consultancy.onrender.com, ombre-ash-perfumes.vercel.app, biztrademart.com). The frame makes five very different screenshots (dark/light/purple/yellow) read as one system of real products.
- Beneath it, a compact **architecture strip**: a Mermaid-style node flow in orange/mono on charcoal — Repogent: Repo → AST parse → Graph → Chat/Scan; Findly: Query → Decompose → Crawl → Synthesize → Quality gate ≥7; MediConnect: Patient → Search → Book → Consult → Record → Pay; Ombre: Hero → Collection → Atelier → Journal → Cart; Biz: Catalogue → Cart → Escrow/Order → Dashboard. Nodes stagger in on entry (Part 6). This is the diagram upgraded from decoration to the core of the story.

**Text side (40%)**
- Index numeral (No. 01–05), title in Newsreader, one-line role statement ("What it is, who it's for").
- Problem → Solution → Result as three short labelled lines, 2 lines max each.
- Metrics strip — verified numbers only (existing metrics are verified; do not add new ones).
- Stack chips (existing, no % bars).
- LIVE DEMO / GITHUB / CASE STUDY buttons. Repogent keeps its GitHub link (private by owner choice). Ombre and Biz: Live Demo only, no GitHub button — unchanged.

**Rhythm (asymmetry, E):** Repogent 60-image/40-text, Findly reversed 40/60, MediConnect 60/40, Ombre image-dominant 65/35 (visual-led — its story is design, not architecture), Biz reversed 35/65. On mobile every chapter collapses to a single stacked column, image first. Asymmetry is implemented on the grid (unequal columns, alternating order) — never with absolutely-positioned text over images, which is exactly the class of defect behind the current overlap bugs.

**Motion (from Direction 3, restrained):** chapters enter as a sticky stack — each new chapter scales the previous to 0.92 and dims it (scrubbed, desktop only; mobile renders a normal stacked list). Screenshot frames get the media reveal (Part 6).

### Recommended composition — case-study pages (all 5, same skeleton)

1. **Hero:** title + one-line outcome + fact strip (Role / Stack / Context / Outcome — verified facts only). The H1 fix from Part 4 applies here first.
2. **Clickable architecture map:** one Mermaid diagram; each node anchors to its section below (Yuqi Guo pattern).
3. **"Try it" row:** Live Demo + GitHub links. No embedded live app, no mock.
4. **Problem** (2–3 sentences) → **Solution** (with the full architecture diagram) → **How it works** (numbered pipeline stages).
5. **Engineering decisions:** 2–3 rows of Decision / Why / Trade-off — e.g. Findly: why LangGraph over a linear chain; Repogent: why AST parsing over regex. Only decisions the owner can defend; OpenCode drafts from the existing case-study text and flags anything unverifiable.
6. **Screenshots:** real product views, full-width, mono captions stating what the frame shows.
7. **"What I'd do next":** one honest limitation/follow-up line per project (builds credibility; nothing invented).
8. **Footer nav:** previous / next project + back to Artifacts — explicit links, deterministic order.

**Screenshot treatment (applies everywhere):** browser-chrome frame; real views only; caption under each frame; never AI mockups; never a face photo; the frame's URL bar doubles as the live-link affordance.

---

## PART 4 — Case Study Fixes

### CS1 — H1 overlap: root cause and structural fix

**Observed defect (confirmed 2026-11-16, all 5 case studies + homepage, on load, persistent):**
- Repogent: "Agent" overlaps "Codebase Onboarding"
- Findly: "Platform" overlaps "Autonomous Research"
- MediConnect: "Platform" overlaps "Healthcare Appointment" (worst with Biz)
- Biz: "Component Library" overlaps "B2B Marketplace &" (letters interleave)
- Ombre: no overlap — its H1 fits on one line (control case)
- Homepage: "Things I built that outlived the / weekend." and "The next chapter is / unwritten." both overlap; hero "Abhishek / Kumar" nearly touches.

**Root cause (inferred from the visual pattern — OpenCode must confirm in code):** the display-serif headings use a very tight line-height, and the second line is italic orange. The italic line's ascenders rise into the first line's descender zone, so the two lines' glyphs cross. It is a typography defect, not a layout defect: no absolute positioning is involved, and it appears on load (not on scroll or animation), which rules out animation as the cause. The Ombre control case (single line, no overlap) confirms the trigger is the two-line italic construction at the current leading.

**Structural fix (do not just add margin):**
1. Set an explicit `line-height` for display headings (`.font-display-hero` / headline classes): start at **1.05–1.1** and verify visually at 1440px and 390px for the longest heading (Biz). The value must clear the italic ascenders — measure, don't guess.
2. Keep the italic second line, but test it at every heading length in the system (all 5 case-study titles + all section headings). Add a visual regression check: no two heading lines may touch at any viewport.
3. If a heading still wraps awkwardly at 390px, allow a controlled break (e.g. a manual break point in the title data) rather than shrinking the type.
4. Never fix this with `overflow: hidden` on the heading, negative margins, or absolute positioning — those hide the symptom and create the next overlap.
5. Same fix applies to the homepage section headings (same class, same defect).

**Verification:** screenshots of all 5 case-study H1s + the two homepage headings at 1440px and 390px, with no glyph contact. Ombre stays as the control (must remain clean).

### Diagram truncation (A5)
Nodes are fixed-size boxes with truncating text: Repogent loses "Graph" (shows "Gen"), Findly loses "Finalize" (shows "(x3)"). Fix: node labels get min-width and wrapping; the box resizes to the label, never the reverse. Same rule for the mobile pipeline chips (COLLECTIO, ESCROW/ORD): chips wrap or shrink text, never clip.

### Hero crop + slow load (CS2, CS3)
Fixed-height containers crop every case-study hero (top and bottom). Fix: aspect-ratio container matched to the screenshot's actual ratio, `object-position: top`, no fixed height. Slow first paint (blank dark rectangle for Findly/Ombre/Biz heroes): use Next.js Image with `priority` on the case-study hero, explicit width/height, and a blur placeholder so first paint shows the image, not a void.

### Mobile case-study defects (CS6, CS7)
- Metrics checkmarks: `align-items: flex-start`, tick aligned to the first line of wrapped text.
- Stack line clipped by the pipeline box at 360px: `overflow: visible` / min-height that fits wrapped content.

### What OpenCode must NOT do here
- Do not hide overflowing text. Do not randomly increase margins. Do not patch one heading — the fix is in the shared display-heading style so it holds across all current and future headings.
- The asymmetry rule from Part 3 applies to case studies too: grid-based layout only, no absolutely-positioned text over images.

---

## PART 5 — Contact Form and Footer

### Contact form — proposed design
**Keep the two-column Epilogue split** (narrative left, form right) — it is already good. The "odd" feel comes from the details, not the layout.

- **Fields: 3 only** — name, email, message. Single column, one field per row, in that order. Every extra field costs 10–20% completion.
- **Labels:** top-aligned, persistent, sentence case, 1–3 words, left-aligned, asterisk + legend for required. Never placeholder-as-label (it disappears when the user types) and no float labels.
- **Placeholders:** example format only — "Jane Smith", "you@company.com", "Tell us about your project".
- **Inputs:** 44–52px height (min 44px mobile), full width, 1px hairline #262220 border at rest → 2px orange #F95E14 border on focus + visible focus ring. Background #141312, text #F5F3EF. Labels in JetBrains Mono 11px caps; Newsreader only for the section headline.
- **Validation:** on blur and on submit — never on focus, never per keystroke. Error message directly below the field, specific ("Please enter a valid email address", not "Invalid input"), red border + icon + text (never colour alone). Error clears when the field is fixed; submit scrolls to and focuses the first error.
- **Button:** label "Send message" (specific, not "Submit"), solid orange matching the header CONTACT button so the page has one button language. Loading state ("Sending…") to prevent double-submit. Don't disable it before the user tries.
- **Success:** a clear inline confirmation panel replacing the form, with a "Send another" reset. Never a faked success.
- **The honest part:** the current form is a mailto composer. Wire submission to Formspree or Resend **before** claiming it works, and keep the mailto fallback (COPY EMAIL button + email as text) visible alongside it either way. One trust line under the button ("Your email stays private.") — do not invent a reply time.
- **Fix the known defect:** the "OPEN EMAIL APP" button's icon and label must be one centred flex row with a fixed gap (currently the icon sits far left of centred text at every width).
- **Form card:** surface #1D1B1A, #262220 hairline border, 12–16px radius (matches the site's cards), 20–24px gaps between fields.
- **Accessibility:** `type="email"`, `autocomplete="name"` / `autocomplete="email"`, honeypot kept but truly hidden from assistive tech.

### Footer — proposed design
**The ghost wordmark IS the footer idea — keep it.** The evidence supports it: premium footers treat the footer as the crown jewel, a full-width typographic gesture with functional structure underneath. The current bug is a defect to fix, not a direction to abandon.

**Two parts (already the site's structure):**
1. **Wordmark band:** "ABHISHEK KUMAR" one line, Newsreader, ~14vw, ghost colour raised until faintly visible at 2× zoom, no hover, hairline #262220 above, ~50–60px padding. Technical fix (highest confidence): size the wordmark in **container query units (`cqi`)** so it fills the width without overflowing — this is exactly the fix for the right-edge clipping; add a **CSS mask fade toward the bottom** + `aria-hidden` (decorative) so legibility comes from the mask and size, not from guessing a hex value; reveal with a SplitText-style rise on scroll into view (respecting `prefers-reduced-motion`). Optional CTA line directly above the wordmark: "Have a role or a problem? → abhishkdk@gmail.com" (email as text).
2. **Footer bar:** bio left (name + role on one line with orange dot, bio below, max-w-2xl), BACK TO TOP ↑ right, aligned with the bio. Bottom row: "© 2026 Abhishek Kumar" left; section nav (Origin / Craft / Artifacts / Arsenal) centre; GitHub / LinkedIn / Email right. **No dev-indicator badges** (no "PALETTE LOCK", no "NO FACE PHOTO" — build notes, not footer content).
- **Availability line (factually supported only):** "Open to AI Engineer roles — Kanpur / Remote". Do not invent a location or response time.
- **Mobile:** wordmark scales via clamp so it never clips or wraps; footer bar stacks bio → back-to-top → nav → socials; back-to-top stays tappable at 44px.
- **What NOT to do:** no magnetic-scatter letters, no toy interactions, no marquee/ticker, no hover colour change on the wordmark, no lighter panel — the footer stays on the same #141312 ground.

---

## PART 6 — Motion Design Blueprint

### Engine decision (evidence-based)
- **GSAP + ScrollTrigger as the single scroll/motion engine.** GSAP is free for all uses since Webflow's October 2024 acquisition of GreenSock; it powers 12M+ sites. ScrollTrigger pre-calculates trigger positions rather than polling the DOM every frame, which is why it holds 60fps on mobile.
- **Lenis for smooth scroll.** Package name `lenis` (the `@studio-freight/lenis` package is deprecated, stopped at 1.0.42 in March 2024). ~4KB gzip, dependency-free, eases the real window scroll (native scrollbar, sticky and anchors keep working). It is the default on award-tier sites.
- **Framer Motion: keep, don't expand.** The site already uses framer-motion (hero entrance). Use it only for component-level micro-interactions and AnimatePresence case-study transitions; do not add it as a second scroll engine. **One engine per concern.**
- **One scroll owner (critical):** Lenis must drive the GSAP ticker — `lenis.on("scroll", ScrollTrigger.update)`, `gsap.ticker.add(t => lenis.raf(t * 1000))`, `gsap.ticker.lagSmoothing(0)`. Two RAF loops drift a frame apart and produce persistent one-frame lag that reads as sluggishness; two smooth-scroll mechanisms fighting over scroll position produce stutter and drifting triggers.
- **Do not add:** Three.js/WebGL hero (mobile risk documented in Part 3), a preloader longer than ~1s (and skippable — the site already had a near-illegible hero entrance), ScrollSmoother (paid; Lenis covers the need), a custom cursor (disable on coarse pointers).

### Motion tokens

| Token | Value |
|---|---|
| Micro interaction | 0.18–0.3s |
| Hover / control transition | 0.25–0.4s |
| Standard reveal | 0.5–0.75s |
| Section / project transition | 0.7–1.1s |
| Large cinematic transition | 1.0–1.6s, only when the user isn't waiting for input |
| Default duration | 0.6s; never make every tween 1s — duration should reflect distance, visual mass, urgency |
| Entrance ease | `power3.out`; general UI `power2.out`; reversible `power2.inOut`; exit `power2.in`; cinematic `power3.inOut` |
| Stagger | words 0.025–0.06; UI items 0.04–0.09; large project cards 0.08–0.15 |
| Reveal offset | y: 24–48 |
| Blur-in | 4–10px → 0 (paint-expensive; use sparingly, never on large images) |
| Scrubbed scenes | `ease: "none"`, scrub 0.8–1.4 |
| Sticky-stack depth | scale 1 → 0.92, autoAlpha → 0.72, y −24 |
| Lenis | `lerp: 0.08–0.1`, `smoothWheel: true`, `wheelMultiplier: 0.9`, `syncTouch: false` (phones already have good momentum scrolling) |

### Recommended animations

| # | Animation | Where | What moves | Trigger | Behaviour | Why | Mobile | Performance |
|---|---|---|---|---|---|---|---|---|
| M1 | Hero masked headline reveal | Hero H1 | Lines rise from masked overflow containers (yPercent 110 → 0), stagger 0.05, 0.75s, power3.out | Page load, after fonts | One pass | Sets the editorial tone instantly; replaces the near-illegible fade-in | Keep, single-line masks, stagger 0.03 | Transform + opacity only; cheap |
| M2 | Scene-counter numerals | "01/02/03/04" watermarks | Slow parallax (y ±8% of viewport, scrub 1) | Scroll through section | Scrubbed | Reinforces the book/Scenes identity with depth | Off (static numerals) | Transform-only scrub; cheap |
| M3 | Section reveals | Every section header + blocks | Fade-up y 36 + blur 8px → 0, 1s, power4.out, stagger 0.08, `once: true`, start "top 82%" | Entering viewport | Once | Composed, deliberate pacing; play-once prevents re-animation fatigue | Keep, y 24, 0.5s, no blur | Moderate — blur is the expensive part; drop it on mobile and large images |
| M4 | Artifacts sticky card stack | The 5 project chapters | As the next chapter arrives, the previous scales to 0.92, dims to autoAlpha 0.72, shifts y −24 (scrubbed) | Next card's top hitting 78% → 24% | Scrubbed | The single cinematic moment in the portfolio; makes 5 chapters feel like turning pages | **Off** — normal stacked list (pinning/stacking on touch is the top source of "trapped page" complaints) | Transform + opacity only; `position: sticky` for layout, ScrollTrigger only for scale/dim |
| M5 | Project image media reveal | Each chapter's screenshot frame | Clip-wrapper scaleY 0 → 1 from bottom, image scale 1.08 → 1, 0.9–1.2s | Frame entering at 85% | Once | The screenshot is the proof; a reveal makes it land | Keep (transform-only; no clip-path if paint is a concern) | Moderate; clip-path only if profiling allows |
| M6 | Architecture-diagram node stagger | Diagram strip + case-study map | Nodes fade/slide in sequence (stagger 0.06–0.1) when the diagram enters | Viewport entry, once | Once | Guides the eye through the system flow in reading order; makes the diagram readable instead of a wall of boxes | Keep, stagger 0.04 | Cheap (opacity/transform on SVG groups) |
| M7 | Footer wordmark parallax reveal | Footer ghost wordmark band | yPercent −12 → 0 + autoAlpha 0.85 → 1, scrubbed from "top bottom" to "top 45%" | Scroll into footer | Scrubbed | The wordmark is the site's signature; a slow rise makes the ending feel deliberate | Keep the reveal but unscrubbed (single triggered fade) | Cheap |
| M8 | Header show/hide on scroll direction | Sticky header | Translates out on scroll-down, back in on scroll-up (0.35s, power3.out); always solid bg-background/95 + blur | Scroll direction change | Reversible | Fixes the live bug where the header vanishes and never returns until the top; keeps nav reachable without eating viewport | Keep — saves the most space where space is scarcest | Cheap transform |
| M9 | Hover: project frame + buttons | Chapter frames, LIVE DEMO/GITHUB buttons, nav links | Frame image scale 1.01–1.03 + orange border glow; buttons lift −2px with shadow; nav link underline sweep | Pointer hover | Reversible | Affordance + tactility; hover must be additive, never the only path to information (touch users get tap/visible state instead) | Off (no hover assumption) | Cheap; `gsap.quickTo` for any pointer-following motion |
| M10 | Case-study route transition | Artifacts ↔ case-study pages | Single transition controller, three phases: cover (orange panel wipe 0.35s) → content swap → reveal (fade-up 0.5s). Total 0.7–1.1s | Navigation | One pass | Makes a case study feel like opening a chapter, not loading a page; a single controller avoids scattered exit delays | Keep, cover shortened to 0.25s | One fixed overlay; cheap |

### Coherent motion language (one paragraph)
**"Quiet editorial motion":** everything moves once, on transform + opacity only, at 0.5–0.75s with power3.out, staggered by words (0.05) or cards (0.08–0.15); the only scrubbed motions are the Artifacts sticky stack, the scene numerals, and the footer wordmark; the only easing family is power2/power3-out (no elastic, no bounce, no back-easing anywhere); Lenis lerp 0.08–0.1 gives the whole page one consistent glide. Nothing moves on mobile beyond simple reveals. If a proposed animation can't state its purpose in one sentence, it doesn't ship.

### Accessibility + performance flags
- **prefers-reduced-motion: disable, don't shorten.** Skip Lenis entirely; kill ScrollTriggers; render all content in its final visible state (never hide content behind an entrance animation — CSS must hold the safe initial state so no-JS still shows everything). Replace scrubbed storytelling with stable states, remove parallax/drift, drastically shorten or remove stagger — and never merely multiply durations by 0.5. (15–25% of users enable reduce-motion settings.)
- **Keyboard/focus:** Lenis must not break keyboard scrolling, focus scrolling, or anchor links — test Space/PageDown/arrows, skip links, and `#section` anchors explicitly. Add `data-lenis-prevent` to any nested scroller (e.g. a code block in a case study).
- **Layout shifts:** call `ScrollTrigger.refresh()` after images/fonts settle (fonts are the usual culprit for drifted trigger positions), never per frame; never leave markers enabled in production; `invalidateOnRefresh: true` for viewport-derived values.
- **Budgets:** GSAP + ScrollTrigger ≈ 70KB, Lenis ≈ 4KB gzip; both are small, but every scrubbed animation runs a per-frame cost — cap scrubbed effects at the three named above (M2, M4, M7).

---

## PART 7 — Inspiration Reference Library

Each entry is a real URL, verified live or via a cited case study/roundup. "Adaptation" is what OpenCode takes from it for *this* portfolio — not a copy.

1. **Mat Voyce** — https://matvoyce.tv — Case study: https://www.hontran.dev/blog/mat-voyce-case-study-award-winning-portfolio — Kinetic type: per-character GSAP SplitText rises (`yPercent:120`, mask, `back.out(1.7)`, 0.025s stagger), one shared motion language, ScrollTrigger reveals (`yPercent:18, opacity:0, expo.out`, top 85%, once), hover-swapped work previews (one active video only), only transform/opacity animated, prefers-reduced-motion respected. Awwwards SOTD Jan 2025 (7.59), GSAP SOTY 2025 nominee; Next.js + GSAP + Strapi. **Adaptation (single most transferable reference):** SplitText treatment on hero headline + "SCENE 01–04" labels in Newsreader (no random rotation — recruiter tone); commercial-selector pattern for Artifacts (hover project name swaps large preview); one motion language site-wide.
2. **Brittany Chiang** — https://brittanychiang.com — Two-column, mouse-tracking radial glow, Experience = role + one paragraph + tech tags, Projects = real screenshot + one line. **Adaptation:** Experience pattern for Scene 02 (fixes Journey density); cursor-following glow instead of static orbs everywhere; every project = real screenshot + one line + Live Demo/GitHub. Do NOT copy the two-column layout.
3. **Paco Coursey** — https://paco.me — Radical minimalism, spring-physics hovers, precise tab slides. **Adaptation:** Framer Motion spring hover on Artifacts cards (1.02 scale + hairline brightening, no colour change); one-line discipline for Arsenal chips + case-study headers.
4. **Rauno Freiberg** — https://rauno.me — Tactile UI, interactive essays with live controls. (JS/canvas-driven; details from the Medium roundup https://medium.com/@rishibanota/top-8-developer-portfolios-that-go-beyond-a-resume-in-2026-1-has-38-shipped-tools-a584f5451124.) **Adaptation (one idea, once):** ONE interactive case study (Repogent or Findly) — embedded working mini-demo (draggable dependency-graph node / quality-gate slider) instead of a static diagram. Strongest differentiator.
5. **Andrew McCarthy** — https://andrevv.com — Scroll-driven project videos, ambient symbol field, text-scramble reveals. (JS-driven; description from Colorlib roundup https://colorlib.com/wp/developer-portfolios/.) **Adaptation:** text-scramble for project titles (JetBrains Mono, terminal-native); faint mono glyph field (`/ > _ {}`) behind Artifacts instead of flat black. No video wall.
6. **Tania Rascia** — https://www.taniarascia.com — Homepage opens with a 4-line career timeline; every project has Source + Demo. **Adaptation:** open The Craft with a 4-line timeline (Diploma → B.Tech → Planto AI → Biz Trade Mart → now); enforce Live Demo + GitHub on every card (Live Demo only for Ombre & Ash / Biz Trade Mart — no public repo).
7. **Leland Jansen** — https://www.lelandjansen.com — Case study = what it is → what I built → what changed, short, blueprint-grid motif. (Via Colorlib roundup.) **Adaptation:** template for all 5 case studies — fixed 4-line header (what it is / what I built / stack / what changed, verified numbers only) with a strict character budget, then the visual story; fixes overlap + bloat.
8. **La Playa** — https://laplaya.studio — Screenshot-first grid, framed screenshots under project names. **Adaptation:** frame each of the 5 real screenshots in a browser-chrome frame (hairline #262220, three dots, URL bar in JetBrains Mono with the live domain) to unify dark/light/purple/yellow shots into one system; footer detail: "Kanpur, India — IST" local-time line (factual).
9. **Big Wordmark Footer** — https://mail.webdevpuneet.com/website-section-templates/footer-giant/ — Three-part footer, giant single-line wordmark with CSS mask fade toward the bottom, `aria-hidden`, GSAP SplitText reveal. **Adaptation (highest-confidence footer fix):** size the wordmark in container query units (`cqi`) so it fills the width without overflowing (fixes the "ABHISHEK KUMAR" clipping), mask fade + aria-hidden for legibility instead of guessing hex; keep the structure CTA → bio → wordmark → © bar + Newsreader.
10. **21st.dev components** (React + Tailwind + Framer Motion, MIT, via the 21st.dev MCP OpenCode already has) — Portfolio Hero https://21st.dev/@romanvasnev/components/portfolio-hero · Sticky Scroll Reveal https://21st.dev/r/aceternity/sticky-scroll-reveal · Spotlight Hero (kinetic type) https://preview.21st.dev/@themeocean/components/minimalist-spotlight-hero-with-kinetic-typography · AI SaaS Hero (interactive live preview) https://preview.21st.dev/@themeocean/components/modern-ai-saas-hero-with-interactive-live-preview · Registry https://21st.dev. **Adaptation:** Sticky Scroll Reveal for case studies (pin screenshot, Problem → Solution → Result panels scroll); Spotlight blur-to-clear word reveal for the hero headline; AI SaaS preview frame for Repogent/Findly cards; SKIP Matter.js physics badges (wrong tone); re-skin all to #141312 / #F95E14 / Newsreader + JetBrains Mono.
11. **GSAP ScrollTrigger showcase** — https://baydllc.com/case-studies/gsap-scroll-trigger — 5 techniques (pinned + progress, SVG draw, text split, horizontal scroll gallery, before/after wipe) using free equivalents (no Club GSAP needed). **Adaptation:** adopt only text-split for section headings + OPTIONAL horizontal scroll gallery for Artifacts on desktop only (vertical fallback mobile); skip pinned hero, SVG draw, wipe.
12. **Behance AI case studies** — Lumina https://www.behance.net/gallery/250524551/Lumina-AI-Study-Assistant · Helio https://www.behance.net/gallery/239515895/Helio-AI-Mental-Wellness-App-(UIUX-Case-Study) · Search index https://www.behance.net/search/projects?tools=97191579. **Adaptation:** case-study narrative template — full-bleed product screenshot → Problem (one paragraph) → Approach (architecture diagram) → Product (2–3 annotated screenshots) → Outcome (verified numbers only); scannable in under 60 seconds, no long image dumps.

**Also checked, not in the 12:** Lynn Fisher https://lynnandtonic.com (yearly redesigns; transferable: small "v.2 — rebuilt Nov 2026" footer note); Godly https://godly.website (redirects to recent.design — a research method for motion, not a citable reference); Bruno Simon https://bruno-simon.com (deliberately excluded — 3D playground, wrong direction).

**Cross-cutting synthesis:** strongest direction = Mat Voyce motion system + Brittany Chiang structure + La Playa framed screenshots, re-skinned to the existing identity. Motion budget: SplitText-style heading reveals + one interactive case-study element + spring hovers — nothing else (no smooth-scroll lib beyond Lenis, no 3D, no physics badges). Case-study fix = Jansen 4-line header + Behance narrative sequence + 21st.dev Sticky Scroll Reveal.

---

## PART 8 — Technical Improvement Plan

### Performance
- **Images:** Next.js Image everywhere; `priority` on case-study heroes and the first Artifacts screenshot; explicit width/height (no layout shift); blur placeholders so first paint never shows a blank rectangle (CS3). Serve the 5 verified re-captures at the sizes the frames actually render (don't ship 2560px files into a 600px frame).
- **Fonts:** Newsreader + JetBrains Mono via `next/font` with `display: swap`; preload the display weight used by the hero. Fonts are the usual cause of drifted ScrollTrigger positions — call `ScrollTrigger.refresh()` after they settle.
- **Bundle:** GSAP + ScrollTrigger ≈ 70KB, Lenis ≈ 4KB gzip. No WebGL, no Three.js, no 3D. Verify Lighthouse stays ≥ 90 on mobile after the motion phase (the site's own claim is 62 → 91 on Biz; the portfolio itself must not regress below 90).
- **No smooth-scroll lib beyond Lenis.** No custom cursor, no preloader >1s.

### Accessibility
- Focus states: visible orange ring everywhere (the form already has a strong orange focus outline — extend that standard to nav, buttons, links).
- Menu: `aria-expanded`, focus trap, Escape to close, focus returns to the hamburger.
- Wordmark: `aria-hidden` (decorative), real text remains in the bio/footer bar.
- Reduced motion: full disable path (Part 6) — not a duration multiplier.
- Contrast: raise muted body text one step above #948A8A where it carries body copy (keep #948A8A for labels/captions); verify ratios.
- Targets: 44px minimum on mobile (menu links, buttons, back-to-top).
- Skip link at the top of every page.

### Responsiveness
- Breakpoints to verify in-browser: 1440, 1280, 1024, 768, 390, 360.
- Rules: menu opaque full-screen below the desktop breakpoint; action rows stack below 480px; timeline dates stack above entries below md; chips wrap, never clip; wordmark sized in `cqi`/clamp, never fixed vw that overflows; no horizontal overflow at any width (currently clean — keep it that way).
- Sticky stack (M4) desktop-only; chapters are a plain stacked list on mobile.

### SEO
- Verify (not assumed): per-page title/description, OG image (use a real screenshot, not a generic card), sitemap.xml, robots.txt, JSON-LD Person (name, role, location Kanpur, links to GitHub/LinkedIn).
- Keep the case-study URLs (`/projects/[slug]`) unchanged — do not break existing links.

### Functionality (preserve — do not regress)
- Nav smooth-scroll, logo-to-top, BACK TO ARTIFACTS, Previous/Next, Back to Top, COPY EMAIL, résumé PDF (`/resume.pdf`, verified HTTP 200, 1 page), Ask AI chat (do not touch), all Live Demo links.
- Known states to preserve: Repogent GitHub link stays (private by owner choice); Ombre/Biz Live Demo only; MediConnect links are frozen pending the owner's decision (CS4).
- After every phase: click through all 5 case studies, all nav links, the form and COPY EMAIL in the browser; confirm no console errors.

---

## PART 9 — Tools and Skills for OpenCode

**Already available in the owner's OpenCode environment** (verify before use): shadcn components, Stitch MCP, 21st.dev MCP, framer-motion, Next.js. The project map (PROJECT_MAP.md, from prompt 1) is the source of truth for what exists in the repo — OpenCode must re-read it and verify against the working tree before starting; code wins over this blueprint where they disagree.

**Essential to add**
- **GSAP + ScrollTrigger** — single scroll/motion engine (Part 6). Install command (verify against package.json first; if already present, skip): `npm install gsap`
- **Lenis** — smooth scroll. Install command (same verification caveat): `npm install lenis`. Note: package is `lenis`, NOT `@studio-freight/lenis` (deprecated).

**Useful, optional**
- **21st.dev components via the MCP** (already connected): Sticky Scroll Reveal (case studies), Spotlight Hero kinetic type (hero headline), AI SaaS Hero preview frame (Repogent/Findly cards). Re-skin every component to #141312 / #F95E14 / Newsreader + JetBrains Mono before use. SKIP Matter.js physics badges.
- **Stitch** (already connected): use for visual exploration and layout inspiration only — never for tokens, colours, fonts or copy. Stitch has repeatedly invented credentials, metrics, a face photo, and the "ABHISHEK"-only wordmark on this project; every Stitch output must be audited against this blueprint's verified facts before any element is used.
- **shadcn** (already available): form primitives, buttons, dialog (mobile menu).

**Unnecessary — do not add**
- Three.js / WebGL / React Three Fiber (mobile Lighthouse risk, wrong tone).
- ScrollSmoother (paid; Lenis covers the need).
- Matter.js physics badges, custom cursor, preloader libraries.
- Any new smooth-scroll or animation library beyond GSAP + Lenis + the existing framer-motion.

**Recommended MCPs for the future (not required for this transformation)**
- A visual-regression / screenshot MCP for the acceptance checks in Part 10 (OpenCode verifies in the browser either way).
- A Lighthouse CI integration so the ≥90 mobile target is enforced, not eyeballed.

---

## PART 10 — Phased Implementation Roadmap

**Global rules for every phase:** no commits, no PRs, no merges, no deployment, no Git push (owner commits and deploys himself). No invented content — every number, name and claim must come from the existing site or the owner. After each phase: build + lint clean, then verify in the browser at 1440 / 1280 / 1024 / 768 / 390 / 360, click through all navigation and links, check the console, and report modified files + remaining issues before moving on. If a phase's verification fails, fix it before starting the next phase — never stack new work on a red gate.

### Phase 0 — Critical defects (P0 + the one open question)
**Objective:** make the site correct before making it better.
- Fix CS1 H1 overlap (display line-height, all 5 case studies + 2 homepage headings).
- Fix H2 mobile menu (opaque full-screen, stacked links/buttons, focus trap, Escape).
- Fix HE1 hero stat value ("1.5+").
- Fix F1 footer wordmark ("ABHISHEK KUMAR", cqi sizing, mask fade, aria-hidden).
- Fix A1/A2 screenshots (drop the 5 verified PNGs into public/screenshots/, exact filenames, delete old files).
- Fix A3 mobile button collision (stack below 480px).
- Fix H1 header behaviour (solid bg, show on scroll-up).
- **Owner decision — CS4 MediConnect:** OpenCode flags it and stops. Do not proceed on MediConnect's demo/repo/screenshot until the owner picks (a) rewrite the case study truthfully around the consultancy product, or (b) supply correct links/screenshot. Nothing else in Phase 0 is blocked by this.
**Files (verify in repo):** display-heading styles, Header/menu component, hero stats data (`content/index.ts`), Footer, `public/screenshots/`.
**Acceptance:** no overlap at any width; menu fully usable at 390/360/768; stat value renders; wordmark reads "ABHISHEK KUMAR" in full at every width; all 5 cards show the correct frames; no console errors. **Verification:** screenshots of all 5 H1s + homepage headings at 1440/390; menu open/closed at 390/768; footer at 390/1440.

### Phase 1 — Showcase transformation (Part 3)
**Objective:** turn the card grid into editorial chapters and the case studies into engineering stories.
- Artifacts: alternating 60/40 chapters, browser-chrome frames, architecture strips, metrics, buttons; image-dominant variant for Ombre, reversed for Findly/Biz.
- Case studies: fixed 4-line header block, clickable architecture map, "Try it" row, Problem → Solution → How it works, Decisions table, full-width captioned screenshots, "What I'd do next", prev/next nav.
- Fix A5 diagram truncation, A6 5th-card void (disappears by design), A8 MediConnect hosting note removal.
**Files:** Artifacts section component, `app/projects/[slug]/page.tsx`, `content/index.ts` (data only — no invented fields).
**Acceptance:** 5 chapters, correct frames, diagrams readable, no truncation, no empty void, mobile single-column image-first. **Verification:** full-page screenshots at 1440/390; each case study read end-to-end for the 8-step skeleton.

### Phase 2 — Contact + footer (Part 5)
**Objective:** a form that actually sends and a footer that works as the site's signature.
- Form: 3 fields, single column, labels/validation/focus/success panel; wire Formspree or Resend; keep mailto fallback + COPY EMAIL; fix the OPEN EMAIL APP button alignment; form card styling.
- Footer: two-part composition, wordmark reveal, bio + Back to Top row, bottom bar with section nav + socials + ©, availability line.
**Files:** Epilogue/contact component, Footer.
**Acceptance:** form submits (or honestly falls back to mailto), validation works, button aligned at all widths; footer complete at 390/1440. **Verification:** submit a test message (to the owner's address, with his permission — do not send without it); inspect footer at 390/1440.

### Phase 3 — Motion system (Part 6)
**Objective:** one quiet editorial motion language across the site.
- Install GSAP + Lenis (verify first), wire one scroll owner, implement M1–M10 with the tokens in Part 6, reduced-motion disable path, keyboard/focus checks.
**Files:** motion setup (app-level), section components.
**Acceptance:** all 10 animations present, mobile limited to simple reveals, reduced-motion renders final states with no animation, no layout shift, Lighthouse mobile ≥ 90. **Verification:** scroll the full page at 1440/390 with reduced motion on and off; run Lighthouse.

### Phase 4 — Responsive, accessibility, SEO, performance polish (Part 8)
**Objective:** close the cross-cutting items.
- C1 timeline dates stack, C2 heading wrap, AR1/AR2 spacing + orbs, AR3 chip ordering, CS6/CS7 mobile case-study fixes, R3 contrast, R4 SEO (metadata/OG/sitemap/JSON-LD), R5/R6 reduced-motion + skip link + aria states.
- Console/network check (the one thing this investigation could not do).
**Acceptance:** zero defects from Part 2 remaining (except CS4, which is the owner's call); clean console; Lighthouse ≥ 90 mobile. **Verification:** full browser pass at all 6 widths; console + network clean; Lighthouse report attached.

**Estimated effort (rough, for planning only):** Phase 0: 1–2 sessions. Phase 1: 2–3 sessions (largest). Phase 2: 1 session. Phase 3: 1–2 sessions. Phase 4: 1 session. Verify after each phase — do not compress phases to save time.

---

## PART 11 — Final Creative Direction

**Existing identity + better art direction + stronger visual storytelling + premium execution.** That is the whole brief in one line.

The portfolio already knows what it is: a book about a builder, told in serif and orange on warm charcoal. The transformation does not change that — it makes it true. Chapters instead of cards, so the five systems read like five stories. Diagrams that explain instead of decorate, so a hiring manager sees engineering thinking. One quiet motion language, so the site feels composed instead of assembled. A wordmark that actually says the owner's name. A menu that works on the phone in a recruiter's hand.

**The intended experience:** a recruiter opens the site on mobile, the menu works, the hero states 1.5+ years and five shipped systems, each project opens as a chapter with a real product in a browser frame and a diagram that shows how it works, a case study answers "what it is, what I built, what changed" in ten seconds and proves it in sixty, the footer says ABHISHEK KUMAR in full, and the contact form sends. Nothing moves without a purpose. Nothing claims what it cannot prove.

**What stays:** the warm-charcoal ground, Newsreader + JetBrains Mono, the orange accent, Scene numbering, the five real projects, the case-study structure, the mailto fallback, the no-face-photo rule, the real-screenshot rule.

**What evolves:** identical cards → alternating chapters; decorative diagrams → clickable architecture maps; scattered animation → one motion system; a broken mobile menu → a full-screen one; a clipped wordmark → a sized one; a fake form → a wired one.

**What is explicitly avoided:** random gradients, generic SaaS templates, excessive glassmorphism, purposeless decoration, typography changes, inconsistent styles, 3D/WebGL, physics toys, invented metrics, AI mockups, face photos, dev-indicator badges in the footer.

**What success looks like:** the site passes a visual re-audit with zero P0s and zero P1s at 1440/1280/1024/768/390/360, Lighthouse mobile ≥ 90, and the owner can send the link to a recruiter or founder without a caveat. Until that audit passes, the link does not go out.
