
# EXECUTION TASK: Transform My Existing Portfolio into a Premium AI Engineer Portfolio

Act as a senior product designer, creative director, frontend architect and senior UI engineer.

You are working on my EXISTING Next.js 15 portfolio.

Production reference:
https://abhishekbuilds-gules.vercel.app/

Your mission is to audit, refine and implement improvements across the entire existing portfolio.

This is NOT a rebuild. Preserve the existing visual identity, architecture, content, functionality and working interactions wherever possible.

The final result should look like a premium AI Engineer / Software Engineer portfolio inspired by high-quality Behance work and excellent real-world engineering portfolios.

---

# PHASE 1 — REPOSITORY AND VISUAL AUDIT

Before modifying files:

1. Inspect the complete project structure.
2. Read all existing project documentation and design specifications.
3. Inspect the current Next.js implementation.
4. Inspect all components and section styles.
5. Inspect the existing fonts and font-loading configuration.
6. Inspect image assets and their project mappings.
7. Inspect animation and interaction implementations.
8. Identify all five project entries and their existing URLs.
9. Run the project locally.
10. Use browser automation to inspect the actual rendered website.

Inspect these viewport widths:

- 1440px
- 1280px
- 1024px
- 768px
- 390px
- 360px

Create an internal defect list before implementation.

IMPORTANT: Do not assume the current design is broken everywhere. Identify actual problems and preserve sections that already work.

# PHASE 2 — FIX OVERLAPPING AND LAYOUT DEFECTS

This is the highest priority.

Audit the entire portfolio for:

- Overlapping headings.
- Text colliding with decorative elements.
- Incorrect absolute positioning.
- Incorrect line heights.
- Text overflow.
- Broken word wrapping.
- Negative-margin layout problems.
- Incorrect z-index stacking.
- Elements outside their parent containers.
- Navigation collisions.
- Incorrect card dimensions.
- Inconsistent section spacing.
- Horizontal overflow.
- Content being clipped.

## Hero section

The current hero has text overlap and composition issues.

Refine:

- Main heading.
- Name typography.
- Role text.
- Description.
- CTA buttons.
- Decorative graphics.
- Floating visual elements.
- Statistics and metrics.

Ensure the typography scales correctly at every viewport.

Do not simply reduce all font sizes to hide overlapping.

Fix the actual layout constraints.

Preserve the current hero's identity and visual concept, but make its composition intentional, balanced and premium.

Inspect whether repeated metric labels and decorative text are being rendered twice.

# PHASE 3 — ORIGIN AND EXPERIENCE SECTIONS

Preserve the existing Origin and Craft storytelling approach.

Fix content layout and readability.

Specific content issues to investigate:

- Awkward sentence in Origin: "What I then combined both skill sets..."
- Academic timeline entries appearing crowded or merged.
- Date labels with stray slash characters.
- Academic and professional timeline alignment.
- Long descriptions overflowing their containers.
- Skill progression labels wrapping incorrectly.

Separate academic education and professional experience into clearly understandable groups.

Ensure the B.Tech timeline and internship dates remain accurate.

Do not fabricate employment, degrees, dates or achievements.

# PHASE 4 — REDESIGN THE ARTIFACTS / PROJECTS SECTION

This is one of the most important parts of the task.

I have exactly five existing projects:

1. Repogent AI
2. Findly.AI
3. MediConnect
4. Ombre & Ash
5. Biz Trade Mart

Preserve all five projects, their existing links, actual screenshots and verified descriptions.

## Design research

Use these design references:

- Mark Spencer Jordan: AI engineering project cards and proof-of-work presentation.
- Fernando Lin: Before / Built / After engineering case studies.
- Shubham Kumar Yadav: production-first project organization.
- Sanjay Gummadi: professional Behance developer portfolio.
- Marcos Costa: editorial typography and intentional whitespace.

Links:

https://www.markspencerjordan.com/
https://www.fernando-lin.dev/
https://coshubham.github.io/Portfolio-/
https://www.behance.net/gallery/243742431/Software-Developer-Portfolio-Personal-Website
https://www.behance.net/gallery/246799841/Web-Developer-Designer-Portfolio

Do not copy these designs. Use them as references for composition, information hierarchy and project storytelling.

## Required project layout: 2 + 1 + 2

Desktop:

ROW 1:
Two equally sized cards.

ROW 2:
One full-width flagship project card.

ROW 3:
Two equally sized cards.

The full-width card should be Repogent AI, because it best communicates my AI engineering direction and multi-agent architecture.

Use this ordering:

Row 1:

- Findly.AI
- MediConnect

Row 2:

- Repogent AI — featured flagship case study

Row 3:

- Ombre & Ash
- Biz Trade Mart

Preserve project numbering as an identifier, not as a claim about project chronology.

## Standard project cards

Every card should contain:

- Actual product screenshot.
- Project name.
- Short product description.
- Category.
- Technology stack.
- My engineering contribution.
- Relevant project links.

Use an intentional image-to-content ratio.

Improve image presentation with:

- Consistent image aspect ratios.
- Proper object-fit behavior.
- Balanced padding.
- Subtle borders.
- Restrained hover animations.
- Clear project hierarchy.

Do not stretch or crop important product interface content.

## Flagship Repogent AI presentation

Create a visually distinctive full-width showcase.

Suggested composition:

- Large actual product screenshot.
- Strong project title.
- Short description.
- Problem.
- Technical approach.
- Architecture highlights.
- Verified result.
- Technology stack.
- Live demo and GitHub actions.

The screenshot and information should feel like a product case study, not a generic card enlarged horizontally.

## Fix current project presentation defects

Investigate duplicated pipeline labels such as:

Parse / Parse
Search / Search
Summarize / Summarize
Draft / Draft

Determine whether these are caused by duplicate markup, animation duplication or accessibility-related hidden elements.

Fix unnecessary duplicate visual rendering without breaking the intended animation.

Preserve meaningful pipeline visualizations, but ensure they do not compete with project titles or descriptions.

Do not fabricate metrics, usage numbers, customer claims or project capabilities.

# PHASE 5 — IMPROVE THE ARSENAL / SKILLS SECTION

Preserve the existing skill categories:

- AI / ML Core
- Languages & Core
- Backend & Databases
- Frontend, DevOps & Practices

Improve:

- Grouping.
- Spacing.
- Typography.
- Chip wrapping.
- Category hierarchy.
- Responsive behavior.

Prevent technology labels from merging together or overflowing.

Avoid excessive decorative technology clouds.

The result should communicate technical competence clearly.

# PHASE 6 — PREMIUM EPILOGUE AND CONTACT REDESIGN

This section needs substantial improvement.

The current closing section and contact form look too ordinary compared with the rest of the portfolio.

Use the visual sophistication of my Ombre & Ash perfume website footer as inspiration.

Do not copy ecommerce-specific content.

Create a premium, editorial developer contact section.

## Desired composition

1. Strong closing headline.
2. Concise personal message.
3. Availability for AI Engineer opportunities.
4. Prominent email contact.
5. Well-designed contact form.
6. Social links.
7. Footer navigation.
8. Copyright and final brand signature.

## Contact form

The existing form looks like a basic default form.

Improve its visual presentation:

- Custom field styling.
- Better label typography.
- Proper field heights.
- Balanced padding.
- Clear field spacing.
- Strong focus states.
- Well-designed textarea.
- Premium submit button.
- Responsive layout.
- Accessible form labels.
- Proper validation and error states.

Use a carefully composed layout with the contact form and personal contact information.

The form must look like a polished product interface.

IMPORTANT:
Preserve existing form submission logic, backend integration, validation and working functionality.

Do not replace the existing form with a decorative non-functional form.

## Footer

Design a memorable final portfolio experience.

Use deliberate whitespace and a clean navigation grid.

Include:

- Navigation.
- Case studies.
- Email.
- GitHub.
- LinkedIn.
- Resume.
- Copyright.

Avoid unnecessary visual clutter.

# PHASE 7 — GLOBAL VISUAL CONSISTENCY

Review the entire portfolio.

Improve:

- Typography hierarchy.
- Section transitions.
- Spacing system.
- Grid alignment.
- Container widths.
- Image positioning.
- Borders.
- Card proportions.
- Buttons.
- Hover states.
- Responsive navigation.

Use consistent design tokens.

Maintain the existing design language instead of introducing an unrelated theme.

Do not add random gradients or decorative elements.

Keep animation subtle and purposeful.

# PHASE 8 — RESPONSIVE IMPLEMENTATION

Every section must work at:

1440px
1280px
1024px
768px
390px
360px

Desktop:
Preserve the intended premium editorial composition.

Tablet:
Reorganize grids before cards become cramped.

Mobile:
Use single-column layouts where necessary.

Verify:

- No overlapping text.
- No clipped headings.
- No horizontal scrolling.
- No broken project grids.
- No overflowing skill chips.
- No distorted screenshots.
- No footer form collisions.
- No broken navigation.
- No excessive whitespace.
- No inaccessible controls.

Respect prefers-reduced-motion.

# PHASE 9 — IMPLEMENTATION CONSTRAINTS

These constraints are mandatory:

- Keep Next.js 15.
- Preserve the current project architecture.
- Reuse existing components where practical.
- Avoid unnecessary dependencies.
- Do not modify backend functionality.
- Do not break external project links.
- Do not remove existing important content.
- Do not invent professional achievements.
- Do not replace genuine screenshots with unrelated AI illustrations.
- Do not change project descriptions without checking the source.
- Do not modify unrelated configuration files.
- Keep the code maintainable.

Inspect before editing.

Make targeted modifications.

# PHASE 10 — FINAL VISUAL AND TECHNICAL VERIFICATION

After implementation:

1. Start the local development server.
2. Inspect the entire website in the browser.
3. Check all six viewport widths.
4. Verify every project screenshot.
5. Verify all project links.
6. Verify contact form behavior.
7. Verify navigation.
8. Verify animations.
9. Run lint.
10. Run production build.
11. Resolve errors introduced by the modifications.
12. Compare screenshots before and after.

Do not claim visual verification if you have only inspected source code.

Do not stop after generating an audit. Complete the implementation.

## FINAL SUCCESS CRITERIA

The final portfolio should:

- Position me clearly as an AI Engineer.
- Demonstrate actual AI and full-stack engineering work.
- Make Repogent AI visually prominent.
- Present all five projects in the 2 + 1 + 2 layout.
- Have no overlapping text.
- Have a premium contact experience.
- Have a visually memorable footer.
- Work correctly on desktop and mobile.
- Preserve the existing portfolio identity and functionality.

At completion, provide:

1. Actual issues discovered.
2. Exact files changed.
3. Changes implemented by section.
4. Responsive testing results.
5. Lint and build results.
6. Remaining issues.

Begin with repository inspection and visual audit, then implement all necessary corrections.
