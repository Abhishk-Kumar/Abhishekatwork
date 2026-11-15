
# Portfolio → Premium, Recruiter-Ready (Abhishekatwork)

You are working in the existing Next.js 15 + Tailwind 3 + Framer Motion repo (`Abhishekatwork`, deployed at https://abhishekbuilds-gules.vercel.app/). Fix everything below in order. Read `issues.md` and `PROJECT_MAP.md` first; they are earlier audit notes. Anything already fixed there, leave alone.

## Ground rules

- Keep the dark ember design language: existing tokens in `tailwind.config.ts`, Newsreader (display) + JetBrains Mono (labels/body), orange `#ff5722` accent, section order 01 Origin → 02 Craft → 03 Artifacts → 04 Arsenal → Epilogue → Footer. Do NOT import Stitch colour tokens.
- Do not invent facts, numbers, dates, links or project claims. Use only what exists in `content/index.ts`. Where I say "new copy", it is limited to the lines I list.
- Do not commit or push. Run `pnpm check` and `pnpm build` at the end and fix what breaks.
- Verify visually at 1440px and 390px (Playwright screenshots are fine). Report what changed, with before/after for the footer, hero glow and project cards.

---

## 1. Ambient orange glow must follow the whole page (currently hero-only)

Cause: the orbs are `absolute` children inside `Hero` (`overflow-hidden`), and every other section paints an opaque background (`bg-surface-dim`, `bg-surface-container-lowest`) which would cover a page-level glow anyway. Origin, Artifacts and Epilogue also each have a tiny duplicate orb that is invisible.

Fix:

1. In `app/layout.tsx`, add ONE fixed background layer as the first child of `<body>` (before ScrollProgress/Header), and wrap Header, `#main-content` and Footer in `relative z-10`:

```tsx
<div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="glow-orb glow-a" />
  <div className="glow-orb glow-b" />
  <div className="glow-orb glow-c" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,87,34,0.05),transparent_60%)]" />
</div>
```

2. In `globals.css` define the orbs: `position:absolute; border-radius:9999px; filter:blur(140px); background:rgba(249,94,20,.14)`. Orb A ~520px at top-right (`top:8%; right:-6%`), orb B ~420px at left-middle (`top:45%; left:-8%`, opacity .10), orb C ~480px bottom-right (`bottom:-8%; right:10%`). Add a slow 18–24s `translate` drift keyframe (transform only) and wrap it in `@media (prefers-reduced-motion: no-preference)`.
3. Because the layer is `fixed`, the glow stays visible on every scroll position. Make sections let it through: change opaque section backgrounds to transparent or translucent. Hero: remove `bg-background overflow-hidden` and delete its two local orbs. Origin, Artifacts: `bg-transparent`. Craft and Arsenal: `bg-surface-container-lowest/60 backdrop-blur-[2px]` so the page alternates between "open" and "darker" bands. Remove the local `blur-[130px]` orbs from Origin, Artifacts, Epilogue.
4. Check the glow at scroll 0%, 25%, 50%, 75%, 100% and make sure text contrast stays AA.

## 2. Footer: premium Ombre & Ash style + Stitch watermark

Current problems: the wordmark colour `#262320` on `#0f0e0d` with `font-light` is nearly invisible; the footer repeats the GitHub/LinkedIn/Email links already in the Epilogue; the long `profile.summary` paragraph is dull; the right side is empty; the focus classes `focus-ring-primary-container` are invalid Tailwind.

Open https://ombre-ash-perfumes.vercel.app/ in a browser and match its footer feel (I could only read its text, so go by what you see). Target structure, top to bottom:

1. **Contrast band.** The footer is a deliberately darker band than the page: `bg-[#0b0a09]` with a hairline top border and a soft orange radial at the top edge (`radial-gradient(ellipse at 50% 0, rgba(255,87,34,.08), transparent 60%)`). Leave generous padding (`pt-20 md:pt-28`).
2. **Cursive tagline paragraph, centred, above the wordmark.** Add a script font via `next/font/google` (`Dancing_Script`, weight 500, variable `--font-script`) and a `font-script` Tailwind family. Text (the only new copy allowed): *"Building AI products that are measurable and dependable."* Size `text-2xl md:text-4xl`, colour `text-tertiary`, with one phrase in `text-primary-container`.
3. **Availability pill + 3 link columns** under the tagline, in a 12-col grid, max-w-6xl:
   - Col 1 "Navigate": 01 Origin, 02 Craft, 03 Artifacts, 04 Arsenal, Epilogue (anchor links).
   - Col 2 "Case Studies": the 5 projects linking to `/projects/<slug>`.
   - Col 3 "Connect": Email (mailto), GitHub, LinkedIn, Résumé (only if `hasResumePdf`).
   - Pill above: "Open to AI Engineer roles — {profile.location}" with the pulsing orange dot (reuse the hero pill style).
   - Column titles use `font-label-caps text-primary-container`, links `text-tertiary hover:text-bone-white`, minimum 14px text.
4. **Giant ABHISHEK wordmark (the Stitch watermark effect, but visible).** Single line `ABHISHEK` (no trailing space), `font-newsreader font-semibold uppercase leading-[0.8] tracking-tight whitespace-nowrap select-none`, `text-[clamp(96px,19vw,300px)]`, centred, not clipped at the sides. Use a vertical gradient fill so it fades into the page: `bg-gradient-to-b from-[#34302c] via-[#1d1a18] to-[#0b0a09] bg-clip-text text-transparent`. Let the bottom ~12% be cropped by the footer (`overflow-hidden`, wordmark `translate-y-[8%]`) so it feels anchored. On hover, transition the top stop to a faint ember tint (`#3a2418`). Verify in a 2x zoom screenshot that the letters are clearly (but subtly) visible; raise the colours until they are.
5. **Bottom bar:** `© {year} Abhishek Kumar. All rights reserved.` left, `Back to top ↑` right, hairline border above. Remove the duplicate summary paragraph and the duplicate social-link row.
6. Fix the focus classes to `focus-visible:ring-2 focus-visible:ring-primary-container`. Footer must look right on the home page and on all `/projects/[slug]` pages, at 1440px and 390px (wordmark scales, columns stack).

## 3. Epilogue / contact: Stitch-style layout with a form that really works

Current bugs: `handleFormSubmit` only closes the modal (it neither sends anything nor opens the email app, and `formErrors` is never set), the section is `text-center` while the label row and paragraph are left-aligned, and the Résumé and "Talk to Portfolio AI" buttons sit outside the button row.

Rebuild `Epilogue.tsx` as `grid lg:grid-cols-12 gap-12`:

- **Left (cols 1–6):** "Epilogue" label, headline "The next chapter is *unwritten.*" (keep existing copy), the existing paragraph, then an "email card" (`border border-border-hairline bg-surface-container-low rounded-lg p-5`) showing the email in `text-lg font-semibold text-bone-white` with a Copy button (swap the `alert`-style feedback for the existing "Copied" state). Under it: GitHub / LinkedIn / Résumé / Portfolio AI buttons in ONE consistent flex row with equal sizing.
- **Right (cols 7–12):** inline form card (not a modal): Name, Email, Message, with labels, per-field errors (zod on the client and server), and a honeypot field.
- **Backend:** add `app/api/contact/route.ts` (zod validate, honeypot, basic per-IP rate limit, 4KB message cap) that sends through Resend if `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set. Return explicit success/error JSON. The UI shows real states: idle → sending → "Message sent" or "Couldn't send — email me directly at …". If the env vars are missing, hide nothing silently: the button label becomes "Open email app" and uses a prefilled `mailto:`. Never show a "sent" state unless the API returned 200. Document the env vars in `README`/`.env.example`.

## 4. Projects section (Scene 03): make it a clear hiring signal

### 4a. Screenshots look cropped

Cause: `<Image width={1920} height={1080}>` (16:9) with `className="h-48 object-cover"` forces a short strip, but the files in `public/screenshots/` are 2880×1800 (16:10). Fix:

- Use `width={2880} height={1800}`, `className="w-full h-auto"` inside a wrapper with `aspect-[16/10] overflow-hidden`, `object-cover object-top`, and `sizes="(max-width:768px) 100vw, 50vw"`. Nothing may be cut off.
- Wrap each screenshot in a small browser frame (three dots, a pill showing the live hostname, `rounded-lg border border-border-hairline`, subtle top highlight). On hover, scale 1.02 inside the frame; link the whole frame to the case study.
- Same treatment (with a larger size) at the top of every `/projects/[slug]` page, which currently shows no screenshot.

### 4b. The screenshots themselves are the weakest part (I viewed all of them). Needs new captures from me

List this in your final report as "needs your action". Spec for me to re-capture at 2880×1800, dark-friendly, real data, nothing cut off:

- **Repogent:** current image is the landing page branded "CodeAtlas" (name mismatch). Capture the dependency-graph or AI-chat view of a real repo instead, or rename the landing copy first.
- **Findly.AI:** current image is the empty dashboard ("0 runs"). Run a real research and capture the finished report with the quality score and citations.
- **MediConnect:** current image is a light-lavender hero titled "Multi-Domain Professional Consultancy Services", logo "Gyan Consultancy", with Medical/Legal/Technology/Travel and "50+ Happy Clients / 24/7 Support". That does not match the card's claim of a healthcare appointment platform with Socket.io messaging. Capture the actual booking or consultation screen. **Ask me before changing the project's title or description if the live app really is a multi-domain consultancy.**
- **Biz Trade Mart:** current image is two promo banners. Capture the marketplace catalogue/category view or a dashboard.
- **Ombre & Ash:** fine, keep.
  Until new images arrive, keep the current ones but never distort them.

### 4c. Add Problem → Solution → Result to every card (like the Stitch design)

- Each card gets a three-row block with coloured labels: **PROBLEM** (red tint), **SOLUTION** (blue tint), **RESULT** (orange tint), label as a small uppercase chip, body `text-sm text-tertiary`.
- Data: Problem = `project.problem`. Solution = `project.architecture` rewritten into a one-sentence plain-English line ONLY if the existing field is too technical; otherwise use it as is. Result = `project.results`, or the strongest metric if `results` is null. Do not invent outcomes. If a field is empty, hide that row.
- Reuse the same three fields on the case-study page headings.

### 4d. Declutter and rebalance the cards

- Order: Repogent AI, Findly.AI, MediConnect, Biz Trade Mart, Ombre & Ash. Ombre & Ash (perfume storefront) is off-topic for an AI Engineer role, so keep it last and tag it "Design / Front-end side project". Lead the section with a short caption: "Two AI agent products, three full-stack builds."
- Layout: Repogent as a full-width featured card (screenshot left, text right on `md+`); the other four in a uniform 2×2 grid. Remove the `index === 2 ? col-span-2` special case. Cards are equal height with the CTA row pinned to the bottom (`flex flex-col`, `mt-auto`).
- Card content order: category bar → framed screenshot → title → one-liner → Problem/Solution/Result → metric strip → stack chips (max 6 + "+N") → LIVE DEMO / GITHUB / Case Study.
- Delete the `highlights` bullet list from the card (it repeats the one-liner and metrics) and move the pipeline diagram to the case-study page only.
- Metric strip: bigger and punchier. Values `font-newsreader text-xl md:text-2xl font-semibold text-primary-container`, label `text-[11px] uppercase tracking-widest text-tertiary-container`. One orange "headline metric" per project, the rest bone-white.
- Keep the Render cold-start note on MediConnect.
- No text smaller than 11px anywhere (remove every `text-[8px]`, `[9px]`, `[10px]` in `Artifacts.tsx`, `projects/[slug]/page.tsx` and `ChatModal.tsx`).

## 5. Typography and emphasis system (one scale, everywhere)

Problems: Newsreader `font-light` on stats, headings and italic accents reads thin and washes out; hero stat numbers are only 22px; labels are 11px in a pinkish `on-surface-variant`; spacing between sections is inconsistent (150–250px empty bands, from audit P1-7).

- Scale (define in Tailwind, then replace ad-hoc sizes): H1 `display-hero` 72/44, H2 `headline-lg` 52/34, H3 card title 28, stat numerals 40 (hero) / 32 (cards), body 16 in mono at weight 400, body-lg 20 serif, labels 12 (not 11) with `tracking-[0.14em]`.
- Remove `font-light` from numerals and headings: stat numbers `font-semibold`, headline italic accents `font-normal italic`. Headings `font-medium`.
- Muted text colours: body `text-tertiary` (#cbc6bf); secondary labels `text-tertiary-container` (#94908a). Stop using `on-surface-variant` (pink) for general labels. Minimum body/text contrast AA.
- **Highlight what recruiters need:**
  - Hero stat strip: numerals 40px `font-semibold`; make `+35%`, `−30%`, `62 → 91` orange, others bone-white; add a thin orange top border to the strip.
  - Hero paragraph: wrap "RAG pipelines", "multi-agent LangGraph workflows" and "AI Engineer role" in `text-bone-white font-medium`.
  - Origin stat card: keep the three metrics, numerals 40px semibold, each with its source label.
  - Experience bullets in Craft: bold the metric tokens (35%, 30%, 25%, 500+, 62 to 91, 40%) with `text-bone-white font-semibold` via a small helper that wraps numbers/percentages.
  - Section spacing: every section `py-20 md:py-28`, no extra margins that create empty bands over ~120px.
- Hero right side is ~40% empty. Add a compact "agent run" card on `lg+` built only from real facts: Findly's pipeline Search → Scrape → Synthesize → Draft → Critique (score ≥ 7) → Finalize (max 3 revisions), as a small animated node list in the existing card style. Hidden below `lg`.

## 6. Correctness and hygiene fixes found in the code

1. `app/layout.tsx`: `siteUrl` falls back to `http://localhost:3000`, so canonical and Open Graph URLs point to localhost. Use `process.env.SITE_URL ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://'+process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3000')`. Tell me to set `SITE_URL` in Vercel. Check that `sitemap.ts`, `robots.ts` and the OG image use the same value.
2. `Origin.tsx` still says "What I then combined both skill sets into my own projects" → "I then combined both skill sets into my own projects".
3. Hero: remove the `profile.name.split('slice')` hack; render first/last name directly. `bg-background` is not a defined colour: add `background: '#141312'` to the Tailwind colours or switch to `bg-surface-dim`.
4. Remove unused imports (`motion` in Hero/Origin/Artifacts, `ChatModal`/`Terminal` where unused, `Star, Cpu, Zap, Activity` in Hero).
5. Hero label "EXPERIENCE & RAG" and "1.5+ years of experience" over-claim: the AI work was a ~6-month internship plus frontend work. Change to "YEARS IN SOFTWARE" and "1.5+ years of software and AI experience". Do this one unless I say otherwise.
6. Skill-growth stage "2023 — 2024 · B.Tech Transition" overlaps the Diploma (Jul 2021 – Jul 2024) and the B.Tech start (Mar 2024). Relabel that stage "Diploma final year + B.Tech (lateral entry)".
7. Check each `/projects/[slug]` page title: the site name must appear once (template already appends it).
8. Replace Stitch-only claims? Do not import any from the Stitch HTML. The Stitch version names Tree-sitter/Next.js/Gemini for Repogent; the deployed content says LangChain/LangGraph/Mistral/Groq/ChromaDB. Keep the deployed content, and flag to me if the Repogent repo disagrees with it.
9. Global `::-webkit-scrollbar { display:none }` hides the scrollbar everywhere. Replace with a thin dark scrollbar (6px, `#262320` thumb, ember on hover); `ScrollProgress` can stay.
10. Add `aria-hidden` to the decorative ghost numerals and orbs, and make sure every interactive element keeps a visible focus ring.

## 7. Final verification (include in your report)

- `pnpm check`, `pnpm lint`, `pnpm build` pass.
- Screenshots at 1440px and 390px: hero, scroll-25/50/75% (glow visible), all five project cards, contact section, footer (zoomed on the wordmark).
- No horizontal overflow, no text under 11px, no clipped screenshots, footer wordmark clearly visible, contact form sends (or clearly falls back to mailto), Lighthouse performance ≥ 90 on the home page.
- A short "needs your action" list: new screenshots (4b), MediConnect description decision, `SITE_URL` and Resend env vars, and a decision on whether to keep Ombre & Ash.
