
# PROMPT: Build a premium, deploy-ready AI Engineer portfolio

## 0. How to use this file

Attach these to your AI coding tool (Cursor, Claude Code, Windsurf, etc.):

1. `prompt.md` (this file)
2. `resume.md` (single source of truth for all content)
3. `reference/index.html` (the design reference, my current HTML mockup)
4. `resume.pdf` (for the download button)

Work in the phases in section 10, in order. After every phase run `pnpm lint && pnpm build`, fix errors, then give me a 5-line summary before moving on. Do not skip ahead.

---

## 1. Role and goal

You are a senior frontend engineer and designer. Rebuild the attached reference as a production-grade portfolio for **an AI Engineer job search**. Target audience: recruiters, hiring managers, and engineers at AI startups and product companies who will scan it in 30 to 60 seconds, then probe deeper on one or two projects.

The site must prove three things fast:

1. I ship real LLM / RAG / agent systems (not demos).
2. I understand evals, reliability, and failure modes, not only prompting.
3. I have grown steadily: frontend craftsman, then full-stack, then applied AI engineer.

---

## 2. Stack decision (final, do not re-debate)

**Next.js 15 (App Router) + TypeScript (strict) + Tailwind CSS 3.4 + Framer Motion + pnpm. Deploy on Vercel.**

Why Next.js and not React + Vite:

- SEO and link previews matter for a job-search site. Server-rendered HTML, the Metadata API, `opengraph-image`, `sitemap.ts`, and `robots.ts` come built in.
- The "Ask my portfolio" AI chat needs a server route (`/api/chat`) to keep the LLM key secret. Vite would need a separate backend.
- `next/font` and `next/image` give strong Core Web Vitals with little effort.
- Per-project case study pages (`/projects/[slug]`) are cleaner with the App Router.

Libraries: `framer-motion`, `lucide-react` (replaces the Material Symbols font), `zod`, `clsx`, `tailwind-merge`, `ai` (Vercel AI SDK) plus one provider SDK for the chat, `@upstash/ratelimit` (optional, for the chat).
No UI kit. Components are hand-built to match the reference.

---

## 3. Non-negotiable content rules

- **All copy comes from `resume.md`.** Never invent employers, dates, metrics, links, or testimonials.
- The reference HTML contains placeholder numbers (for example "99.4% retrieval fidelity", "0.00% leak rate", "12+ production builds"). Treat every metric as **unverified** unless `resume.md` marks it `verified: yes`. Unverified metrics are not rendered. Leave a `// TODO(verify)` comment in the content file instead.
- Every rendered metric needs a short **method note** (what was measured, on what dataset, how), shown in a tooltip or in the case study. AI hiring managers will ask, and unexplained "zero hallucination" claims hurt credibility.
- If a field is missing in `resume.md`, render nothing for it and list it in a `MISSING.md` file at the repo root. Do not fill gaps with plausible text.
- Dead links (`href="#"`) are forbidden. If a repo/demo URL is missing, hide that button.
- Footer year is computed at build time, not hard-coded.

---

## 4. Design system (port exactly from the reference)

Dark-only, editorial, warm ember accent. Keep this look; improve the execution.

**Fonts** (via `next/font/google`, `display: swap`):

- Display and headlines: **Newsreader** (variable, with italic). Italic ember-colored words are the signature accent.
- UI, labels, code: **JetBrains Mono**.

**Colors** (put in `tailwind.config.ts` under `theme.extend.colors`, same names as the reference):

```
background / surface / surface-dim:  #141312
surface-container-lowest: #0f0e0d
surface-container-low:    #1d1b1a
surface-container:        #211f1e
surface-container-high:   #2b2a28
surface-container-highest:#363433
surface-charcoal:         #141211
surface-elevated:         #1A1715
bone-white (headings):    #F5F3EF
on-surface:               #e6e1df
on-surface-variant:       #e4beb4
tertiary (body text):     #cbc6bf
tertiary-container:       #94908a
primary:                  #ffb5a0
primary-container (EMBER ACCENT): #ff5722
secondary:                #ffb59a
secondary-container:      #f95e14
outline:                  #ab8980
outline-variant:          #5b4039
border-hairline:          #262220
wireframe-numeral:        #2B2623
```

Ember glow shadow: `0 0 24px rgba(255,87,34,0.25)`.

**Type scale** (Tailwind `fontSize` tokens, keep names):
display-hero 72/80, headline-lg 52/60, headline-md 32/40, headline-sm 22/30 (600), body-lg 20/32 (Newsreader), body-md 14/24 (mono), body-sm 12/20, label-caps 11/16 with 0.15em tracking (uppercase, 600), scene-counter 140/140 (watermark numerals, 300 weight).
Mobile variants: display-hero-mobile 44/52, headline-lg-mobile 34/42, scene-counter-mobile 80/80.

**Spacing tokens:** margin 4rem, margin-mobile 1.25rem, gutter 1.5rem, space-xs .25, sm .5, md 1, lg 1.75, xl 3rem. Radius: default .25rem, lg .5rem.

**Signature motifs to keep:** scene numbering ("Scene 01, Origin"), giant faint watermark numerals, diamond timeline nodes, pulsing ember dot for availability, terminal-style schematic cards, blurred ember glows in the hero, hairline borders instead of heavy shadows.

---

## 5. Information architecture

Single-page home plus case study pages. Nav: `01 Origin, 02 Craft, 03 Artifacts, 04 Arsenal, Epilogue` with scroll-spy active state.

**Home sections**

1. **Hero:** name, one-line positioning for AI Engineer, 2-sentence bio from `resume.md`, primary CTA "Explore the Artifacts", secondary CTA "Download Résumé", availability pill, location. Add a **recruiter fast-scan strip** below the CTAs: 3 to 4 verified headline facts (years of experience, stack, what I ship, open to roles).
2. **01 Origin:** short story of the frontend-to-AI journey, plus a 3-metric panel (verified metrics only).
3. **02 Craft (Growth timeline):** vertical timeline of every role, newest first. Each node: period, title, org, 2 to 3 impact bullets, stack chips. Add a **"What I learned / how I levelled up"** line per node so growth is explicit (for example "Frontend perf, then state machines, then retrieval and evals"). Optional: a small horizontal "skill growth" strip showing which skills were added in which year, derived only from resume dates.
4. **03 Artifacts (Projects):** 4 to 6 project cards with a mini architecture schematic (CSS/SVG, like the reference), status chip, 1-line outcome, stack, and links. Each card opens `/projects/[slug]`.
5. **04 Arsenal (Skills):** grouped chips: LLM and agents, Retrieval and data, Backend, Frontend, Infra and tooling. "Core" vs "Extended" styling as in the reference.
6. **Epilogue:** contact CTA, socials, email copy-to-clipboard, and the **Ask my portfolio** chat trigger.

**Case study page** (`/projects/[slug]`): Problem, Constraints, Architecture (diagram), Key decisions and trade-offs, Evaluation (dataset, metrics, method), Results, What I would do next, Stack, Links. This is where an AI hiring manager decides, so make it strong. Also generate a per-project OG image.

---

## 6. Fixes and improvements over the reference

The reference is a static mockup. Fix these:

- Tailwind **CDN** → proper build with config. Remove the duplicate Material Symbols imports; use `lucide-react`.
- Nav is hidden below `lg` with **no mobile menu** → add an accessible full-screen mobile menu.
- The "Talk to Portfolio AI" modal is fake (the Send button is a `mailto:`) → build a real streaming chat (section 7).
- Placeholder links and metrics → see section 3.
- Add scroll progress bar, scroll-spy, smooth anchor offset for the fixed header, and `prefers-reduced-motion` support.
- Add a keyboard-friendly focus ring in ember on every interactive element.
- Replace the hero "person" avatar icon with either a real portrait (if provided) or remove it.

---

## 7. Feature: "Ask my portfolio" (real AI chat)

Purpose: a live proof of AI engineering skill.

- Route handler `app/api/chat/route.ts`, streaming via the Vercel AI SDK.
- Provider and model are set via env (`LLM_PROVIDER`, `LLM_MODEL`, `LLM_API_KEY`). No key is ever exposed to the client.
- System prompt = a short persona instruction plus the full contents of `resume.md` (small enough, so no vector DB needed). Rules: answer only from the resume content, say "I don't have that information" otherwise, never invent employers or numbers, keep answers under 120 words, offer the email link for anything beyond scope.
- Guardrails: max 500 input chars, max 8 turns, basic prompt-injection resistance (the user message never overrides the system rules), rate limit by IP (Upstash if env present, otherwise an in-memory fallback).
- UI: terminal-style modal matching the reference, 3 suggested questions ("What did you build at X?", "How do you evaluate RAG?", "Are you open to remote?"), streaming tokens, error and empty states.
- If no API key is configured, hide the trigger gracefully and show the plain contact CTA.
- Add a small "How this works" link in the modal that explains the architecture (also a nice talking point).

---

## 8. SEO, performance, accessibility

- Metadata API: title template, description, canonical, OG and Twitter cards, dynamic `opengraph-image.tsx` in the ember/dark style.
- JSON-LD `Person` schema (name, jobTitle "AI Engineer", sameAs links, knowsAbout).
- `sitemap.ts`, `robots.ts`, a favicon set, and `manifest`.
- Targets: Lighthouse **95+** on Performance, Accessibility, Best Practices, SEO (mobile). LCP < 2.0s, CLS < 0.05.
- Server Components by default; client components only for interactivity (nav, chat, animations). Lazy-load the chat.
- A11y: semantic landmarks, skip link, heading hierarchy, color contrast AA on all text (check `tertiary-container` on dark surfaces), `aria-current` in nav, modal focus trap and ESC to close.
- Respect `prefers-reduced-motion`: disable parallax, pulses, and large transitions.
- Privacy-friendly analytics (Vercel Analytics or Plausible), no cookie banner needed.

---

## 9. Folder structure

```
/app
  layout.tsx            # fonts, metadata, header/footer
  page.tsx              # home sections
  projects/[slug]/page.tsx
  api/chat/route.ts
  opengraph-image.tsx
  sitemap.ts  robots.ts
/components
  layout/ (Header, MobileMenu, Footer, ScrollProgress)
  sections/ (Hero, Origin, Craft, Artifacts, Arsenal, Epilogue)
  ui/ (Chip, SceneLabel, Watermark, Metric, SchematicCard, CopyEmail)
  chat/ (ChatModal, ChatTrigger)
/content
  profile.ts  experience.ts  projects.ts  skills.ts   # typed + zod-validated, generated from resume.md
  resume.md
/lib  (cn.ts, seo.ts, ratelimit.ts)
/public  (resume.pdf, og assets)
MISSING.md
.env.example
```

---

## 10. Build steps (do in order)

**Phase 0, Setup.** Scaffold Next.js 15 + TS + Tailwind 3.4 + pnpm. Add `tailwind.config.ts` with the exact tokens from section 4. Load fonts with `next/font`. ESLint, Prettier, `.env.example`.
*Done when:* `pnpm build` passes and a test page shows the colors and both fonts.

**Phase 1, Content layer.** Parse `resume.md` into typed content files validated with zod (`profile`, `experience`, `projects`, `skills`). Produce `MISSING.md` listing every empty or unverified field.
*Done when:* content compiles and unverified metrics are flagged, not rendered.

**Phase 2, Layout shell.** Header (scroll-spy, mobile menu), Footer, ScrollProgress, skip link, global focus styles.
*Done when:* nav works on mobile and desktop with keyboard only.

**Phase 3, Sections.** Hero, Origin, Craft (growth timeline), Artifacts, Arsenal, Epilogue, pixel-matched to the reference but data-driven. Add tasteful Framer Motion reveals (fade + 12px rise, stagger 60ms) and ember glow.
*Done when:* the page looks equal to or better than the reference at 375, 768, and 1440 widths.

**Phase 4, Case studies.** `/projects/[slug]` template with architecture diagram component and results/eval blocks. Generate static params from `projects.ts`.
*Done when:* every project card links to a complete page, with no empty headings.

**Phase 5, AI chat.** Implement section 7.
*Done when:* streaming works locally, the rate limit triggers, and an off-topic or injection prompt is refused.

**Phase 6, SEO and polish.** Metadata, OG images, JSON-LD, sitemap, robots, favicon, analytics, reduced-motion pass, contrast audit.
*Done when:* Lighthouse mobile is 95+ across the board.

**Phase 7, Deploy.** Push to GitHub, connect Vercel, set env vars, add the custom domain, verify OG previews (LinkedIn, X, WhatsApp), and test the resume download.
*Done when:* production URL is live and `README.md` documents setup, env vars, and how to edit content.

---

## 11. Definition of done

- Zero fabricated content; `MISSING.md` is either empty or reviewed by me.
- No dead links, no console errors, no layout shift on load.
- Works at 360px to 1920px; keyboard and screen-reader navigable.
- Lighthouse 95+ mobile; `pnpm build` clean; types strict.
- Editing content = editing `resume.md` or `/content/*.ts` only, never components.

## 12. Start now

Begin with **Phase 0**. Before writing code, read `resume.md` and `reference/index.html` and reply with: (a) any resume fields that are missing or look inconsistent, and (b) any deviation you propose from this plan. Then proceed.
