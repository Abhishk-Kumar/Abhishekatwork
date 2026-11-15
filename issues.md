
issues.md — Portfolio audit fixes, Vercel deployment (OpenCode)
Audited site: https://abhishekbuilds-gules.vercel.app/ (latest commit, deployed on Vercel)
Audit date: 2026-11-14, desktop ~1919px viewport (page at 1440px layout), all 5 case-study pages, /resume.pdf, contact form
How to use this file: Fix every issue below in the existing code, in priority order (P0 first). Do not change any copy, numbers, dates or links except where an issue explicitly says to. Do not change the design tokens, fonts or section order. Do not commit anything. After fixing, re-verify at 1440px AND 390px and report what changed. The matching fix prompt is portfolio-opencode-prompt-3-fix.md.
What already passed (do not break these)
All sections render in order with no blank/broken section: Header/nav, Hero, Scene 01 Origin, Scene 02 The Craft, Scene 03 Artifacts (5 cards in the correct order), Scene 04 "Tools of the trade" (4 groups, every chip with an orange dot), Epilogue, footer. Hero first paint is fully opaque; no horizontal overflow.
Hero stats all correct: 1.5+ Years / EXPERIENCE & RAG, +35% / RELEVANCE, −30% / LATENCY, 62→91 / LIGHTHOUSE PERF GAIN, 2 Shipped / AI AGENT PRODUCTS. Origin stat card (+35%, 62→91, <60s) present.
Journey IS split into Academic Foundation vs Professional Experience with distinct styling, and the part-time note is present ("* NOTE: PROFESSIONAL INTERNSHIPS WERE CONDUCTED PART-TIME / REMOTELY ALONGSIDE B.TECH STUDIES."). Skill Growth's 4 stages are separate boxes, not overlapping.
All 8 Live/GitHub hrefs verified exactly: Repogent https://repogent.vercel.app/ + https://github.com/Abhishk-Kumar/Repogent; Findly.AI https://findly-ai-rosy.vercel.app/ + https://github.com/Abhishk-Kumar/Findly-AI; MediConnect https://e-consultancy.onrender.com/ + https://github.com/Abhishk-Kumar/Consultancy-website; Ombre https://ombre-ash-perfumes.vercel.app/; Biz https://www.biztrademart.com/. Ombre & Biz correctly have LIVE only (no GitHub button). No dead "#" links found.
No wrong copy in text: email is abhishkdk@gmail.com (readable text, mailto correct), city is Kanpur, India; no "3+ YEARS"/"4+ Years", no "MediBuddy", no repogent.onrender.com, no contact@abhishek.ai. ("CodeAtlas" appears only inside the Repogent screenshot — see P0-2.)
Fonts render as intended visually: Newsreader-style serif headings (with orange italic accents) and JetBrains Mono-style monospace body/labels; no generic-fallback look, no text overflow, overlap or truncation seen in body copy.
Résumé: /resume.pdf EXISTS, 1 page, complete. Dates and CGPAs match the site (B.Tech Mar 2024–Mar 2027, CGPA 7.13; Diploma Jul 2021–Jul 2024, CGPA 7.5).
Back to Top works — it returned to the very top (hero). Contact form modal opens and closes; empty submit validates instead of faking success.
All 5 case-study pages render with correct content, correct metrics, and working PREV/NEXT navigation in sequence (Repogent → Findly → MediConnect → Ombre & Ash → Biz Trade Mart; Biz has only PREVIOUS, as the last item). No Next.js dev indicators ("Static route", floating buttons) were visible anywhere.

P0 — Critical (fix before sharing the link with anyone)
P0-1. Footer wordmark is COMPLETELY INVISIBLE (most severe — the Ombre-style footer was not implemented)
Section: footer band between Epilogue and footer bar (also present in the DOM on all 5 case-study pages).
Observed: The text "ABHISHEK KUMAR" exists in the DOM, but the band renders as pure flat black. At 1.5× zoom the crop shows solid black with no letterforms at all — not even a faint ghost. It is one line and causes no horizontal scroll, but it is 100% invisible.
What it must look like (measured from https://ombre-ash-perfumes.vercel.app/ — see "Ombre footer spec" at the end of this file): a faint-but-VISIBLE ghost watermark on one line, ~14vw font size (~270px at 1919px viewport, ~76% of viewport width, ~130px margins each side, NOT clipped at the edges), very dark grey only just above the near-black background, ~50–60px padding above and below the letters, a thin hairline above the band, no hover effect. The previous colour #1E1C1B on #141312 does NOT render — it is invisible. Raise the ghost colour until the letters are faintly but clearly visible in a real screenshot (start at ~#262320 on #141312 and raise step by step until faintly visible; verify with a 2× zoomed screenshot of the band). Apply the fix on the homepage AND all 5 case-study pages.
P0-2. Repogent screenshot shows the WRONG PRODUCT NAME ("CodeAtlas")
Section: Scene 03 Artifacts — Repogent AI card.
Observed: The screenshot's headline reads "Understand any codebase in minutes, not weeks" and its subtext reads "Point CodeAtlas at any repository…" — the product in the image is called CodeAtlas, not Repogent. The bottom row of example repos (vercel/next.js, facebook/react, pytorch/pytorch, tailwindcss) is clipped at the image's bottom edge, and the whole image is dark with text illegible at card size.
Fix: Do NOT use the app's hero as the card screenshot. Re-capture Repogent from the app's main interface (dependency graph / chat view) where the old "CodeAtlas" name does not dominate, with no clipping and text legible at card size. Separately (outside this portfolio fix): the live Repogent app's hero still says "CodeAtlas" — its branding needs updating in the Repogent repo.
P0-3. Findly.AI screenshot is an EMPTY STATE
Section: Scene 03 Artifacts — Findly.AI card.
Observed: It shows the Findly dashboard with Total Runs 0, Completed 0, Avg Score —, Avg Duration — and "Recent Research Runs — No research runs yet. Start a new one!" No research report or result is visible. Its top hero text is also cut off at the top edge of the image.
Fix: Re-capture Findly AFTER running a real research run in the app, so the dashboard shows completed runs with real numbers — or capture the app's results/report view instead of the empty dashboard. Full frame, no cut-off text at the top edge.
P0-4. MediConnect screenshot is CROPPED top and bottom + clashes with the dark theme
Section: Scene 03 Artifacts — MediConnect card.
Observed: The 3D doctor's head/raised arm are sliced off at the top edge, and the "Book Consultation / Learn More" buttons are sliced in half at the bottom edge. It shows only a generic "Services" hero (Medical/Legal/Technology/Travel), not an appointment-booking UI, and it is the only pale lavender/white screenshot, clashing with the dark theme.
Fix: Re-capture MediConnect from its appointment-booking UI (not the Services hero), full frame with nothing cut off (buttons and headings fully visible). If the booking UI is also light-coloured, keep it — a real product screenshot beats a cropped hero — but frame it so the card still reads as one coherent dark page (no extra filters that change the product's look).
P0-5. Biz Trade Mart screenshot is PROMO BANNERS, not the product
Section: Scene 03 Artifacts — Biz Trade Mart card.
Observed: It shows a yellow "CREATE YOUR DIGITAL PRODUCT BROCHURE IN MINUTES" ad and a red "Stock Up for Corporate Gifting & Festivals NOW!" banner — no marketplace, dashboard or component-library UI at all.
Fix: Re-capture Biz Trade Mart from the marketplace homepage hero ("Trusted B2B Marketplace" section with categories) or a dashboard view — the product UI, not the promotional banners.
P0-6. NO metrics strip on ANY homepage project card
Section: Scene 03 Artifacts — all five cards.
Observed: None of the 5 cards has a metrics strip; numbers appear only inside bullet text. (Metrics exist only on the case-study pages as a "Built-in Metrics" list.)
Fix: Add the metrics strip to every card, using these exact values: Repogent <60s parse, 500+ files; Findly.AI 8-node LangGraph, quality gate ≥7, max 3 revisions; MediConnect sub-100ms queries; Ombre & Ash 4 signature extraits, 400 numbered units per batch, 3 salons (Paris / Grasse / Kyoto); Biz Trade Mart Lighthouse 62→91, 10+ product modules, −35% bug reports.
P0-7. WRONG architecture diagram on Ombre & Ash and Biz Trade Mart (copy-paste)
Section: Scene 03 Artifacts — Ombre & Ash + Biz Trade Mart cards (and their case-study pages).
Observed: Both cards show "PIPELINE: LANGGRAPH_REVISION_LOOP — Search / Scrape / Synthesize / Draft / Critique / Finalize (x3) — ACTIVE", which is Findly.AI's diagram, on a static HTML perfume site and a React marketplace. The same wrong diagram appears on their case-study pages.
Fix: Replace with the correct diagram for each: Ombre & Ash is a static HTML/CSS/JS brand site — its diagram must be a simple page/structure flow (e.g. Hero → Collection → Atelier → Journal → Cart), with NO LangGraph/AI-agent content. Biz Trade Mart is a React B2B marketplace + component library — its diagram must show its own flow (e.g. Catalogue → Cart → Escrow/Order → Dashboard), with NO LangGraph content. Fix the diagrams on the cards AND on both case-study pages. Never copy one project's diagram onto another.
P0-8. WRONG category labels on Ombre & Ash and Biz Trade Mart
Section: Scene 03 Artifacts — Ombre & Ash + Biz Trade Mart cards (and their case-study pages).
Observed: Both are labelled "NO. 04/05 // AI AGENT SYSTEM"; the Ombre and Biz case-study pages also say "CASE STUDY // AI AGENT SYSTEM". MediConnect is correctly "FULL-STACK PROJECT".
Fix: Relabel on cards AND case-study pages: Ombre & Ash → "NO. 04 // E-COMMERCE / BRAND SITE"; Biz Trade Mart → "NO. 05 // B2B MARKETPLACE" (keep its "CLIENT WORK" status badge).
P0-9. MediConnect has NO diagram at all
Section: Scene 03 Artifacts — MediConnect card.
Observed: Unlike the other four cards it has no pipeline/architecture box — inconsistent card structure.
Fix: Give MediConnect the SAME diagram box + stack line treatment as the other cards (real architecture diagram, not a text flow-diagram; stack line with no truncation).
P0-10. Contact form FAKES a success
Section: Epilogue — contact form.
Observed: The form is a modal (not inline) with Name / Email / Message and the honest disclaimer "This contact form is frontend-only. No submission service is connected yet." Empty submit correctly shows red "Name/Email/Message is required." — but a filled test submit cleared the fields and showed "Thank you — your message has been prepared." with the button changed to a disabled "SENT", and the frontend-only disclaimer disappeared in that success state. So the success state claims a message was sent when nothing was sent.
Fix: Either wire a real backend (Formspree/Resend) OR change the UX so it can never read as a sent message: the button must say "OPEN EMAIL APP" (not "SEND MESSAGE"), it must never change to "SENT", there must be no "Thank you — your message has been prepared." text, and the frontend-only disclaimer must STAY visible in every state. Left-align all modal labels to match the rest of the site.

P1 — Major
P1-1. Duplicated browser titles on ALL 5 case-study pages
Section: /projects/<slug></slug> pages.
Observed: Every title ends "| Abhishek Kumar | Abhishek Kumar" (e.g. "Repogent AI — Codebase Onboarding Agent | Abhishek Kumar | Abhishek Kumar").
Fix: The site name must appear once in each page title.
P1-2. NO case-study page has a screenshot at the top
Section: /projects/<slug></slug> pages — all five.
Observed: All five go straight from the intro to the architecture diagram; no project screenshot appears on any of them.
Fix: Add each project's real screenshot at the top of its case-study page (use the same corrected screenshots as the cards — see P0-2 to P0-5).
P1-3. Button labels differ from spec
Section: Scene 03 Artifacts cards + case-study pages.
Observed: Cards use "LIVE PREVIEW" and "REPO" (and case-study pages "LIVE PREVIEW") instead of "LIVE DEMO" / "GITHUB". The hrefs themselves are correct.
Fix: Standardise: primary button "LIVE DEMO", secondary button "GITHUB" (only where a repo exists — Ombre & Biz keep LIVE DEMO only).
P1-4. Grammar error in Scene 01 Origin
Section: Scene 01 Origin, second paragraph.
Observed: It begins "What I then combined both skill sets into my own projects: agents with state machines, quality gates, and interfaces that had to work in the real world." — "What I then combined" is ungrammatical.
Fix: Rewrite grammatically (e.g. "I then combined both skill sets into my own projects: agents with state machines, quality gates, and interfaces that had to work in the real world.").
P1-5. Skill Growth stage overlaps the Diploma period
Section: Scene 02 The Craft — "SKILL GROWTH BY STAGE".
Observed: It says "2023 — 2024: Python, Machine Learning, B.Tech Transition", but the B.Tech runs Mar 2024 — Mar 2027 and the Diploma runs Jul 2021 — Jul 2024, so the two overlap Mar–Jul 2024 while being presented as sequential stages.
Fix: Re-label the stages so none overlaps the Diploma period (e.g. make the 2023–2024 stage explicitly about the Diploma's final year + the B.Tech transition, or shift the stage boundaries to match the real dates).
P1-6. Uneven card heights + dead space
Section: Scene 03 Artifacts grid.
Observed: The Ombre and Biz cards are much shorter than Repogent/Findly/MediConnect, leaving a ~230px empty black band between their row and Scene 04.
Fix: Equalise card heights across the grid (same structure on every card — screenshot, metrics strip, diagram, bullets, chips, buttons — will fix most of this). No ~230px empty band may remain between the last card row and Scene 04.
P1-7. Repeated oversized empty black bands
Section: whole page (spacing).
Observed: ~200px of empty black between the Origin card and Scene 02; ~250px between the end of the Journey and Scene 03; ~160px between Arsenal and the Epilogue; ~160px of pure black inside the Epilogue between the social links and the (invisible) wordmark band.
Fix: Tighten section spacing (reduce padding/margins) so no empty band of ~150px or more remains between sections. Note: the ~160px gap inside the Epilogue will shrink once the wordmark band is visible (P0-1) — verify after that fix.
P1-8. Empty areas (hero + footer)
Section: Hero, footer.
Observed: The hero's right ~40% is empty except for a faint orange glow orb; the footer bio occupies only the left column while the right side is mostly empty (only the GITHUB / LINKEDIN / EMAIL row sits at the far right).
Fix: Rebalance the hero grid so the right side is not ~40% empty void (e.g. narrow the text column or add a visual element that belongs there — do not invent content). Balance the footer so the right side is not mostly empty (e.g. spread the bio/links/scene shortcuts across the row, per the reference HTML's footer layout).
P1-9. Background reads as FLAT BLACK; glow orbs mostly absent
Section: whole page (background).
Observed: In screenshots the page background looks near-flat black — the warm charcoal #141312 tint is not perceptible — and an orange glow orb is clearly visible only in the hero.
Fix: Strengthen the glow orbs (raise opacity/size, verify they are visible in screenshots at 1440px on every section) and confirm the page background is #141312 warm charcoal with layered surfaces — no element may use #000/#080808 as a background. Verify with screenshots, not just by reading the CSS.
P1-10. MediConnect case study lists a hosting note as a metric
Section: /projects/mediconnect — "Built-in Metrics".
Observed: The third item, with a checkmark, is "* Free hosting on Render: initial request may take ~30s to wake up" — a caveat, not a metric.
Fix: Remove it from the metrics list. The wake-up note belongs as a small footnote on the MediConnect card only (where it already is), never as a metric.
P1-11. Ombre case study has UNQUANTIFIED claims
Section: /projects/ombre-ash — "Built-in Metrics" + Evaluation.
Observed: Its "Built-in Metrics" ("High visual fidelity across devices", "Buttery smooth responsive layout", "Lightning-fast load times") contain no numbers, and its Evaluation ("Audited for high visual fidelity, buttery smooth responsive layout, and lightning-fast load times") is unquantified marketing copy.
Fix: Replace with quantified facts from the real site: 4 signature extraits, 400 numbered units per batch, 3 salons (Paris / Grasse / Kyoto), 50ml / 1.7 fl.oz flacons. If a metric cannot be quantified, remove it — do not invent numbers.
P1-12. Résumé vs site micro-inconsistency (Biz Trade Mart location)
Section: /resume.pdf vs Scene 02 Journey.
Observed: resume.pdf lists the Biz Trade Mart role as "Pune, India (Remote)"; the site's Journey lists only "REMOTE" with no city.
Fix: Make them agree — add "Pune, India (Remote)" to the site's Journey entry (or remove the city from the PDF; the site and PDF must match).

P2 — Minor / polish
P2-1. Ombre screenshot edge clipping
Section: Scene 03 Artifacts — Ombre & Ash card.
Observed: In the Ombre card image the right-edge vertical text is clipped and the small "NOTES TOP: Sichuan Pepper, Birch Tar, Cured Frankincense" card is illegible at card size. (Ombre is otherwise the best screenshot — correct product, correct branding, "A scent is a memory you can wear." with the bottle.)
Fix: Re-capture with full width (no edge clipping) or adjust object-fit/object-position so the vertical text and the NOTES TOP card are fully visible and legible at card size.
P2-2. Sticky header ghosting
Section: sticky header.
Observed: While scrolling, card labels slide under the translucent sticky header and show through it faintly (e.g. "NO. 03 // FULL-STACK PROJECT" visible as ghost text behind the nav).
Fix: Give the sticky header a solid (or near-solid, e.g. bg-background/95 with backdrop blur) background so content scrolling underneath never shows through. Verify by scrolling the header over a card label.
P2-3. Fonts — verify the type scale actually landed (no fallback)
Section: whole page (typography).
Observed: Fonts look right visually (Newsreader-style serif headings, JetBrains Mono-style body/labels; no generic-fallback look, no overflow/truncation in body copy), but exact sizes were not measured.
Fix: Verify in the built site that Newsreader and JetBrains Mono are actually loaded (check the Network tab for the font files — no fallback to generic serif/mono). Verify the reference type scale is applied: display-hero 72px/80px (mobile 44px/52px), headline-lg 52px/60px (mobile 34px/42px), headline-md 32px/40px, headline-sm 22px/30px weight 600, body-lg 20px/32px, body-md 14px/24px, body-sm 12px/20px, label-caps 11px/16px tracking 0.15em weight 600, scene-counter 140px (mobile 80px). Fix any size that deviates or any text rendering in a fallback font.

Ombre footer spec (the target for P0-1 — measured from https://ombre-ash-perfumes.vercel.app/)
Giant name: "OMBRE & ASH", an 



, on ONE line, FULLY VISIBLE and NOT clipped at the edges. At a 1919px viewport it spans roughly x=250 to x=1700 — about 1450px wide, ~76% of viewport width, with ~130px margins on each side. Cap height ~190px, so font-size ~270px, about 14vw (estimate from screenshots — no computed-style access).
Font: high-contrast Didone-style serif — thin horizontals, thick verticals, large decorative swash "&". All caps, regular/light weight (~300–400), normal letter-spacing, single line, no italic. (The portfolio uses its own Newsreader serif for the same effect — do NOT import a new font.)
Colour: BARELY-VISIBLE GHOST — very dark grey only just above black (visually ~#1E1E1E–#232323) on a near-black warm-charcoal background (~#0F0E0D–#121110). Readable only on close inspection, easy to miss at a glance. This is the effect the portfolio wordmark fails to reproduce — on Ombre the ghost is faint but visible; on the portfolio it is completely black.
Spacing/borders: a thin hairline above the salon-addresses block and another hairline between that block and the name band; the name band has ~50–60px of padding above and below the letters.
Directly ABOVE the band is a 4-column addresses block; directly BELOW the name is a dark ticker/marquee strip; then the footer bar (logo + description left, link columns middle, newsletter right, copyright row at the bottom). Do NOT copy Ombre's addresses, ticker or footer-bar content — only the NAME BAND treatment (one line, ~14vw, ghost colour, hairline, padding).
No hover effect observed on the name.
Overall effect: a faint ghost watermark spanning nearly the full width, NOT solid/readable.
Not verified in this audit — must be checked before calling the work done
Mobile (390px) NOT VERIFIED: the audit browser could not resize or use device mode. Check on a real phone or DevTools device mode: hamburger menu opens/closes, hero name scales down, stats bar stacks 2×2, timeline becomes a single column, project cards stack full-width, footer stacks, ghost wordmark stays one line with no horizontal scroll, zero horizontal overflow.
Console/network NOT VERIFIED: no DevTools access in the audit browser. Check for console errors and failed requests (404s) for images, fonts and the resume PDF.
Exact hex / computed sizes NOT VERIFIED: no computed-style access, so all hex values and font sizes in this audit are measurements/estimates from screenshots (including the Ombre ~270px / ~14vw estimate).
Live demo destinations NOT VERIFIED: hrefs were verified, but the five live sites were not clicked through to confirm they load; the COPY EMAIL ADDRESS button was also not tested.
Final verification (run after all fixes)
npm run build passes; production build served (npm run start), not dev mode.
All five Live Demo links return HTTP 200 (onrender may sleep ~30s — retry once; for biztrademart.com a browser check counts if curl fails).
Renders checked at 390px and 1440px with screenshots; ghost wordmark faintly VISIBLE at 2× zoom (not invisible, not solid); no horizontal scroll at either width.
No console errors, no 404s, no dev indicators, no fake success states, no invented content, no changed copy beyond the fixes listed above.
Then STOP and report a summary of every fix — do not commit.
