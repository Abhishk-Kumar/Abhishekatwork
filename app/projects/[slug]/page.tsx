import Image from 'next/image'
import { Metadata } from 'next'
import { projects, profile } from '../../../content'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Code, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.slug)
  if (!project) return { title: 'Project Not Found' }

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.oneLiner,
      url: `${process.env.SITE_URL || 'http://localhost:3000'}/projects/${project.slug}`,
      siteName: profile.name,
      type: 'website',
    },
  }
}

const projectImages: Record<string, string> = {
  'repogent-ai': '/screenshots/repogent.png',
  'findly-ai': '/screenshots/findly.png',
  'mediconnect': '/screenshots/mediconnect.png',
  'ombre-ash': '/screenshots/ombre-ash.png',
  'biz-trade-mart': '/screenshots/biz-trade-mart.png',
}

const projectCategory: Record<string, string> = {
  'repogent-ai': 'AI Agent System',
  'findly-ai': 'AI Agent System',
  'mediconnect': 'Full-stack project',
  'ombre-ash': 'E-Commerce / Brand Site',
  'biz-trade-mart': 'B2B Marketplace',
}

const projectDiagram: Record<string, string[]> = {
  'repogent-ai': ['Repo', 'AST Parse', 'Graph', 'Chat/Scan'],
  'findly-ai': ['Query', 'Decompose', 'Crawl', 'Synthesize', 'Quality Gate ≥7', 'Finalize (x3)'],
  'mediconnect': ['Patient', 'Search', 'Book', 'Consult', 'Record', 'Pay'],
  'ombre-ash': ['Hero', 'Collection', 'Atelier', 'Journal', 'Cart'],
  'biz-trade-mart': ['Catalogue', 'Cart', 'Escrow/Order', 'Dashboard'],
}

const projectRole: Record<string, string> = {
  'repogent-ai': 'AI Engineer / Full-Stack Developer',
  'findly-ai': 'AI Research Engineer / Backend Developer',
  'mediconnect': 'Full-Stack Developer',
  'ombre-ash': 'Frontend Developer / Designer',
  'biz-trade-mart': 'Frontend Developer / Architecture Lead',
}

const projectContext: Record<string, string> = {
  'repogent-ai': 'Personal project to accelerate onboarding to unfamiliar codebases',
  'findly-ai': 'Personal project to automate deep research with quality guarantees',
  'mediconnect': 'Healthcare appointment platform with real-time messaging',
  'ombre-ash': 'E-commerce for artisanal perfumery brand',
  'biz-trade-mart': 'Client work: B2B marketplace during professional tenure',
}

const projectOutcome: Record<string, string> = {
  'repogent-ai': 'Handles 500+ file repos in <60s; generates interactive dependency graphs',
  'findly-ai': '8-node LangGraph with quality gate ≥7; max 3 automated revisions',
  'mediconnect': 'Sub-100ms MongoDB queries; real-time Socket.io messaging',
  'ombre-ash': '4 signature extraits; 400 units/batch across 3 salons',
  'biz-trade-mart': 'Lighthouse 62→91; 10+ modules; −35% bug reports',
}

const engineeringDecisions: Record<string, { decision: string; why: string; tradeoff: string }[]> = {
  'repogent-ai': [
    {
      decision: 'Chose ChromaDB for local embedding storage',
      why: 'Avoids external vector DB latency and cost; enables fast semantic retrieval in serverless environments',
      tradeoff: 'Limited scaling for massive repos; requires periodic re-indexing'
    },
    {
      decision: 'Structured multi-agent graph with AST parsing, summarization, and graph generation as separate nodes',
      why: 'Enables parallelization and independent optimization of each pipeline stage',
      tradeoff: 'Increased orchestration complexity; more state to manage across nodes'
    },
  ],
  'findly-ai': [
    {
      decision: 'Implemented explicit critique-rewrite loop with quality gate ≥7',
      why: 'Ensures research output meets minimum quality before finalization; prevents hallucination cascade',
      tradeoff: 'Increases latency (max 3 revisions); requires careful prompt engineering for critic'
    },
    {
      decision: 'Used Server-Sent Events (SSE) for live node progression',
      why: 'Provides real-time feedback to user without WebSocket complexity; works over standard HTTP',
      tradeoff: 'Unidirectional only; reconnection logic needed for long-running tasks'
    },
  ],
  'mediconnect': [
    {
      decision: 'Applied database indexing on appointment datetime fields',
      why: 'Eliminates scheduling overlap race conditions under concurrent load',
      tradeoff: 'Write overhead on booking creation; index maintenance required'
    },
    {
      decision: 'Utilized Socket.io room abstractions for private chat sessions',
      why: 'Isolates doctor-patient conversations; built-in reconnection and fallback transports',
      tradeoff: 'Additional server resources for WebSocket connections; scaling requires sticky sessions'
    },
  ],
  'ombre-ash': [
    {
      decision: 'Static HTML/CSS/JS frontend without heavy framework',
      why: 'Maximum performance and load speed for brand-focused e-commerce; no JS bundle overhead',
      tradeoff: 'Limited interactivity; manual DOM updates for cart/checkout'
    },
    {
      decision: 'Editorial serif typography and dark obsidian tones',
      why: 'Evokes high-end fragrance branding; matches physical atelier exclusivity',
      tradeoff: 'Reduced readability for long-form content; accessibility requires careful contrast tuning'
    },
  ],
  'biz-trade-mart': [
    {
      decision: 'Adopted atomic design and OOP component principles',
      why: 'Reduced UI development time by 40%; enforced design-system consistency across 10+ modules',
      tradeoff: 'Initial architecture investment; learning curve for team adoption'
    },
    {
      decision: 'Applied aggressive code-splitting and route-based lazy loading',
      why: 'Improved core vitals; reduced initial bundle size for faster TTI',
      tradeoff: 'Increased build complexity; potential hydration mismatches if not carefully managed'
    },
  ],
}

const whatIdDoNext: Record<string, string> = {
  'repogent-ai': 'Add direct IDE extension integration for real-time workspace indexing.',
  'findly-ai': 'Support multi-source export formats and collaborative team workspaces.',
  'mediconnect': 'Integrate video consultation WebRTC rooms.',
  'ombre-ash': 'Add interactive fragrance layering quiz.',
  'biz-trade-mart': 'Expand design system token documentation for mobile apps.',
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <article className="min-h-screen bg-background text-on-surface py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* 1. Hero: title + one-line outcome + fact strip */}
        <div className="mb-4">
          <Image
            src={projectImages[project.slug]}
            alt={`${project.title} project screenshot`}
            width={1920}
            height={1080}
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            className="w-full h-64 object-cover rounded-lg border border-border-hairline"
            priority
          />
        </div>

        {/* Nav Header */}
        <div className="flex items-center justify-between pb-6 border-b border-border-hairline">
          <Link
            href="/#artifacts"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-bone-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Artifacts</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-caps text-label-caps uppercase text-on-surface-variant">
              {project.status}
            </span>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="space-y-4">
          <div className="font-label-caps text-label-caps text-primary-container uppercase tracking-widest">
            Case Study // {projectCategory[project.slug]}
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white">
            {project.title} — <span className="italic text-primary-container font-light">{project.subtitle}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">
            {project.oneLiner}
          </p>

          {/* Fact Strip */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 bg-surface-container-low border border-border-hairline p-6 rounded-lg">
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block mb-1">Role</span>
              <span className="font-body-md text-body-md text-bone-white">{projectRole[project.slug]}</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block mb-1">Stack</span>
              <span className="font-body-md text-body-md text-tertiary">{project.stack.slice(0, 3).join(', ')}</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block mb-1">Context</span>
              <span className="font-body-md text-body-md text-tertiary">{projectContext[project.slug]}</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block mb-1">Outcome</span>
              <span className="font-body-md text-body-md text-tertiary">{projectOutcome[project.slug]}</span>
            </div>
          </div>

          {/* Try it row */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {project.links.preview && (
              <a
                href={project.links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold rounded hover:bg-secondary-container transition-colors shadow-[0_0_20px_rgba(255,87,34,0.2)] flex items-center gap-2"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.links.repo && (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-surface-container-low text-bone-white font-label-caps text-label-caps uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-colors flex items-center gap-2"
              >
                <span>GITHUB</span>
                <Code className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* 2. Clickable Architecture Map */}
        <div className="space-y-4">
          <h2 className="font-headline-md text-headline-md text-bone-white">Architecture Map</h2>
          <div className="w-full bg-surface-container-lowest border border-border-hairline rounded-lg p-6 overflow-x-auto">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-tertiary">
              {projectDiagram[project.slug].map((step, sIdx) => (
                <span key={sIdx} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 bg-surface-container-high rounded text-bone-white whitespace-nowrap hover:bg-primary-container hover:text-surface-container-lowest transition-colors cursor-pointer">
                    {step}
                  </span>
                  {sIdx < projectDiagram[project.slug].length - 1 && (
                    <span className="text-primary-container">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
              Click a node to scroll to its detailed section below.
            </p>
          </div>
        </div>

        {/* 3. Problem */}
        {project.problem && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">The Problem</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.problem}</p>
          </div>
        )}

        {/* 4. Solution with full architecture diagram */}
        {project.architecture && (
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-bone-white">Solution</h3>
            <div className="p-6 bg-surface-container-low border border-border-hairline rounded-lg">
              <p className="font-body-md text-tertiary leading-relaxed mb-6">{project.architecture}</p>
              {/* Full Architecture Diagram */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-tertiary">
                {projectDiagram[project.slug].map((step, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-2">
                    <span className="px-3 py-2 bg-surface-container-high rounded text-bone-white whitespace-nowrap">
                      {step}
                    </span>
                    {sIdx < projectDiagram[project.slug].length - 1 && (
                      <span className="text-primary-container">→</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. How It Works (Numbered Pipeline Stages) */}
        <div className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-bone-white">How It Works</h3>
          <div className="space-y-4">
            {projectDiagram[project.slug].map((step, sIdx) => (
              <div key={sIdx} className="flex gap-4 p-4 bg-surface-container-low border border-border-hairline rounded-lg">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary-container text-surface-container-lowest font-label-caps text-label-caps rounded-full text-sm">
                  {sIdx + 1}
                </span>
                <div className="flex-1">
                  <h4 className="font-headline-sm text-bone-white">{step}</h4>
                  <p className="font-body-md text-tertiary mt-1">
                    {project.slug === 'repogent-ai' && [
                      'Repository URL or ZIP is ingested and validated for supported languages.',
                      'Abstract Syntax Tree parsing extracts symbols, imports, and dependencies across files.',
                      'Multi-agent graph builds semantic dependency graph with file-to-file relationships.',
                      'Chat and scan interfaces enable natural-language querying of the generated graph.',
                    ][sIdx] || ''}
                    {project.slug === 'findly-ai' && [
                      'User research question is decomposed into searchable sub-queries.',
                      'Query decomposition breaks complex questions into atomic search tasks.',
                      'Web crawler fetches and extracts content from relevant sources.',
                      'Synthesis agent combines findings into coherent narrative with citations.',
                      'Quality gate scores draft (1-10); triggers rewrite if below 7.',
                      'Final revision produces comprehensive cited research brief.',
                    ][sIdx] || ''}
                    {project.slug === 'mediconnect' && [
                      'Patient searches for doctors by specialty, location, and availability.',
                      'Real-time availability search with conflict-free booking logic.',
                      'Appointment booking with JWT refresh-token authentication.',
                      'Socket.io enables real-time doctor-patient messaging.',
                      'Visit records stored with Mongoose ODM and MongoDB aggregation.',
                      'Integrated payment flow for consultation fees.',
                    ][sIdx] || ''}
                    {project.slug === 'ombre-ash' && [
                      'Hero section showcases 4 signature extraits with immersive storytelling.',
                      'Collection page presents fragrance families with olfactory notes.',
                      'Atelier section reveals craftsmanship and batch production details.',
                      'Journal provides brand narrative and fragrance education content.',
                      'Cart and checkout for 400-unit limited batches across 3 salons.',
                    ][sIdx] || ''}
                    {project.slug === 'biz-trade-mart' && [
                      'Product catalogue with 10+ modules built on atomic design system.',
                      'Shopping cart with optimistic UI updates and error boundaries.',
                      'Escrow and order management with RESTful API contracts.',
                      'Dashboard with lazy-loading, memoization achieving Lighthouse 91.',
                    ][sIdx] || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Engineering Decisions */}
        <div className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-bone-white">Engineering Decisions & Trade-offs</h3>
          <div className="space-y-4">
            {engineeringDecisions[project.slug].map((d, idx) => (
              <div key={idx} className="p-6 bg-surface-container-low border border-border-hairline rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container block mb-2">Decision</span>
                    <p className="font-body-md text-bone-white">{d.decision}</p>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container block mb-2">Why</span>
                    <p className="font-body-md text-tertiary">{d.why}</p>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container block mb-2">Trade-off</span>
                    <p className="font-body-md text-tertiary">{d.tradeoff}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Screenshots */}
        <div className="space-y-4">
          <h3 className="font-headline-md text-headline-md text-bone-white">Product Screenshots</h3>
          <div className="space-y-6">
            <div>
              <Image
                src={projectImages[project.slug]}
                alt={`${project.title} — Main interface`}
                width={1920}
                height={1080}
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={85}
                className="w-full object-cover rounded-lg border border-border-hairline"
                loading="lazy"
              />
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 text-center">
                Main interface view
              </p>
            </div>
          </div>
        </div>

        {/* 8. What I&apos;d Do Next */}
        <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
          <h3 className="font-headline-sm text-bone-white">What I&apos;d Do Next</h3>
          <p className="font-body-md text-tertiary leading-relaxed">{whatIdDoNext[project.slug]}</p>
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/#artifacts"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-bone-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Artifacts</span>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-bone-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous: {prevProject.title}</span>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase text-on-surface-variant hover:text-bone-white transition-colors"
              >
                <span>Next: {nextProject.title}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </article>
  )
}