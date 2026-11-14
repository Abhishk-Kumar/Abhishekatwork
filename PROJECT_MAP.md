# Project Map

## 1. Core Design System (As Implemented)
- **Background colour:** `#141312` (warm charcoal), set globally in `app/globals.css` (`background-color: #141312;`) and mapped in `tailwind.config.ts` (`surface: '#141312'`, `surface-dim: '#141312'`).
- **How background is built:** Solid base warm charcoal (`#141312`), layered surfaces with subtle background containers (`#0f0e0d` for lowest/footer, `#1d1b1a` for low, `#211f1e` for container, `#2b2a28` for high, `#363433` for highest/variant, `#1a1715` for elevated), with ambient amber/orange glow orbs rendered in `Hero.tsx` (`bg-primary-container/10`, `rounded-full`, `blur-[130px]` and `bg-secondary-container/5`, `blur-[100px]`).
- **Text colours:** Headings use `bone-white` (`#F5F3EF`), body uses `tertiary` (`#cbc6bf`), base color `#e6e1df` (`on-surface`), muted text uses `on-surface-variant` (`#948a8a` / `#e4beb4` / etc.), accents use `primary-container` (`#ff5722`).
- **Accent colour:** `#ff5722` (`primary-container`), with `#f95e14` (`secondary-container`), `#ffb5a0` (`primary`), and `#ffb59a` (`secondary`). *Note on prompt comparison:* Expected tokens specified `#F95E14` / `#FF5722` / `#FFB5A0`. Code uses `#ff5722` as `primary-container` and `#ffb5a0` as `primary`.
- **Borders & Hairlines:** Hairlines use `border-hairline` (`#262220`), defined in `tailwind.config.ts` (`'border-hairline': '#262220'`) and used across sections, cards, and headers.
- **Fonts:** Two primary typefaces loaded via Next.js font optimization in `app/layout.tsx`: `Newsreader` (serif display font mapped to `font-display`, `font-display-hero`, `font-headline-lg`, etc.) and `JetBrains Mono` (monospace font mapped to `font-mono`, `font-body-md`, `font-label-caps`, etc.).
- **Section Spacing:** Generous vertical padding (`py-20 md:py-32` or `py-24 md:py-36` on major sections like `Origin`, `Craft`, `Artifacts`, `Arsenal`, `Epilogue`, and `pb-28 md:pb-36` on `Hero`), creating noticeable structural vertical bands.

## 2. Page Structure (Sections in Order)
1. **Header (`components/layout/Header.tsx`):** Sticky top navbar with logo (`Abhishek Kumar`), section anchor links (`01 Origin`, `02 Craft`, `03 Artifacts`, `04 Arsenal`, `Epilogue`), action buttons (`Ask AI`, `Résumé`, `Contact`), and mobile hamburger menu.
2. **Hero (`components/sections/Hero.tsx`):** Scene entry with availability pill, monolithic display typography (`Abhishek Kumar`), subtitle indicator, narrative bio, CTA buttons, and a 4-item recruiter fast-scan metric strip.
3. **Origin (`components/sections/Origin.tsx`):** Scene 01, watermark numeral `01`, narrative split grid with drop cap and 3 verified metric badges (+35% response relevance, 62 → 91 Lighthouse score, < 60s repo parsing speed).
4. **Craft (`components/sections/Craft.tsx`):** Scene 02, watermark numeral `02`, intro description, skill growth by stage strip, and a chronological vertical timeline (Diploma in CSE, B.Tech AI & ML, AI Research Intern at Planto AI, Frontend Developer at Biz Trade Mart, and Current AI Engineer/Builder node).
5. **Artifacts (`components/sections/Artifacts.tsx`):** Scene 03, watermark numeral `03`, 3-card project grid featuring Repogent AI, Findly.AI, and MediConnect. Includes mini ASCII/CSS architecture schematics for AI agent systems, metrics, stack chips, and links.
6. **Arsenal (`components/sections/Arsenal.tsx`):** Scene 04, watermark numeral `04`, classified skill chip categories (AI/ML Core, Languages & Core, Backend & Databases, Frontend & DevOps & Practices).
7. **Epilogue (`components/sections/Epilogue.tsx`):** Call-to-action summary footer block with email copy button, Ask AI trigger, resume download, and social links.
8. **Footer (`components/layout/Footer.tsx`):** Bottom copyright, internal scene anchor shortcuts, and brief bio.

## 3. Data Architecture
- **Source of Truth:** Live data lives in `content/index.ts`, typed via Zod schemas in `content/types.ts`.
- **Entities:**
  - `profile`: Personal identity, headline, location, email, social/resume links, summary, origin story.
  - `experiences`: Chronological array of experience nodes (Biz Trade Mart, Planto AI).
  - `projects`: Array of projects (`repogent-ai`, `findly-ai`, `mediconnect`) with title, subtitle, status, one-liner, links, stack, highlights, metrics.
  - `skills`: Categorized skill arrays (languages, aiMl, backend, frontend, databases, devops, practices, core).
- **Rendering:** Imported directly into `page.tsx`, `Hero.tsx`, `Origin.tsx`, `Craft.tsx`, `Artifacts.tsx`, `Arsenal.tsx`, `Epilogue.tsx`, `Header.tsx`, and `Footer.tsx`. Also compiled into `content/portfolioContext.ts` for AI chat usage.

## 4. Features & Implementation Details
- **Navigation:** Implemented in `Header.tsx` with smooth sticky positioning, scrollspy active-section tracking (`useEffect` on window scroll), and a mobile drawer menu (`mobileMenuOpen` state).
- **Hero:** Built with `framer-motion` entrance animations (`initial={{ opacity: 0, y: 12 }}`, staggered delays 0 to 0.25s), ambient blur glow divs (`blur-[130px]`, `blur-[100px]`), and a 4-column metrics grid.
- **Journey Timeline:** Built in `Craft.tsx` as a vertical line (`before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[1px] before:bg-surface-container-high`) with diamond anchor nodes (`rotate-45`), period/title/org headers, bullet lists, "What I Learned" callout boxes, and uppercase stack chips.
- **Project Cards:** Built in `Artifacts.tsx` with distinct visual styling (`md:col-span-2` for the 3rd project card), miniature architecture schematics using Tailwind flex/grid boxes for agent pipelines, highlights lists, stack chips, and card footer action links.
- **Contact Section:** Located in `Epilogue.tsx` (and header buttons), featuring a clipboard-copy button (`navigator.clipboard.writeText`), mailto anchor (`mailto:abhishkdk@gmail.com`), and trigger for the AI Chat modal.

## 5. Current Status vs. Confirmed Issues (Code-Verified)
- **Project cards have no images:** Confirmed in `Artifacts.tsx` — cards render text, mini schematics, and highlights instead of raster product images (though placeholder screenshots exist in `public/screenshots/`).
- **No resume button/link anywhere:** *False / Misconception in prompt:* Code actually includes resume download buttons and links in `Header.tsx`, `Hero.tsx`, and `Epilogue.tsx` (`hasResumePdf` check for `/resume.pdf`).
- **Contact is mailto-only and email is not shown as text:** Confirmed in `Epilogue.tsx` and `Header.tsx` — contact actions use `mailto:abhishkdk@gmail.com` and a copy-to-clipboard button; the raw email string is not visually displayed as plain text on the page.
- **Footer bio truncated:** Confirmed in `Footer.tsx` (`{profile.summary.slice(0, 140)}...`).
- **Findly.AI stack line truncated:** Confirmed in `Artifacts.tsx` (`<div className="text-on-surface-variant text-[10px] truncate">$ stack: {project.stack.join(' + ')}</div>`).
- **Journey mixes education + internships in identical cards:** Confirmed in `Craft.tsx` — `timelineNodes` combines education nodes (Diploma, B.Tech) and experience nodes (Planto AI, Biz Trade Mart) within identical container card layouts.
- **Large empty bands between sections:** Confirmed by large vertical padding (`py-20 md:py-32`, `py-24 md:py-36`, `pb-28 md:pb-36`).
- **Hero entrance animation starts almost illegible:** Confirmed in `Hero.tsx` (`initial={{ opacity: 0, y: 12 }}` animating to `opacity: 1, y: 0`).
- **Skill chip styling inconsistent between groups:** Confirmed across components — `Arsenal.tsx` uses dots for `aiMl` and `languages`, but plain chips for backend/databases/frontend; `Craft.tsx` and `Artifacts.tsx` use varying background tones (`surface-charcoal`, `surface-container-low`).
- **No hamburger menu on mobile:** *False / Misconception in prompt:* Code actually includes a fully implemented mobile menu toggle and full-screen overlay in `Header.tsx` (`mobileMenuOpen` state with `Menu` and `X` icons).
