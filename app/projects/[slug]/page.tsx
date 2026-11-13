import { Metadata } from 'next'
import { projects, profile } from '../../../content'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Code, CheckCircle2, ChevronRight } from 'lucide-react'
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
    title: `${project.title} — ${project.subtitle} | ${profile.name}`,
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

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params
  const projectIndex = projects.findIndex((p) => p.slug === resolvedParams.slug)
  const project = projects[projectIndex]

  if (!project) {
    notFound()
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null
  const isFullStack = project.slug === 'mediconnect'
  const isRenderPreview = project.links.preview.includes('onrender.com')

  return (
    <article className="min-h-screen bg-background text-on-surface py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
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
            Case Study // {isFullStack ? 'Full-Stack Project' : 'AI Agent System'}
          </div>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white">
            {project.title} — <span className="italic text-primary-container font-light">{project.subtitle}</span>
          </h1>
          <p className="font-body-lg text-body-lg text-tertiary leading-relaxed">
            {project.oneLiner}
          </p>

          {/* Links & Note */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            {project.links.preview && (
              <a
                href={project.links.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary-container text-surface-container-lowest font-label-caps text-label-caps uppercase tracking-wider font-bold rounded hover:bg-secondary-container transition-colors shadow-[0_0_20px_rgba(255,87,34,0.2)] flex items-center gap-2"
              >
                <span>Live Preview</span>
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
                <span>View Repository</span>
                <Code className="w-4 h-4" />
              </a>
            )}
          </div>
          {isRenderPreview && (
            <p className="text-xs text-tertiary-container italic">
              * Free hosting, may take about 30 seconds to wake up.
            </p>
          )}
        </div>

        {/* Mini Architecture Schematic (for AI systems) */}
        {!isFullStack && (
          <div className="w-full h-48 bg-surface-container-lowest border border-border-hairline rounded p-4 flex flex-col justify-between overflow-hidden relative font-mono text-xs text-tertiary">
            <div className="flex items-center justify-between text-on-surface-variant font-label-caps text-label-caps border-b border-surface-charcoal pb-2">
              <span>ARCHITECTURE: {project.slug === 'repogent-ai' ? 'MULTI_AGENT_GRAPH' : 'LANGGRAPH_REVISION_LOOP'}</span>
              <span className="text-primary-container">DEPLOYED</span>
            </div>

            {project.slug === 'repogent-ai' ? (
              <div className="grid grid-cols-4 gap-3 my-auto items-center">
                <div className="bg-surface-container-high p-2.5 rounded text-center text-bone-white">
                  <div className="text-[10px] text-on-surface-variant uppercase">Parse</div>
                  <div className="font-semibold text-xs">AST Parser</div>
                </div>
                <div className="bg-surface-container-high p-2.5 rounded text-center text-bone-white">
                  <div className="text-[10px] text-on-surface-variant uppercase">Summarize</div>
                  <div className="font-semibold text-xs">Summarizer</div>
                </div>
                <div className="bg-surface-container-high p-2.5 rounded text-center text-bone-white">
                  <div className="text-[10px] text-on-surface-variant uppercase">Q&amp;A</div>
                  <div className="font-semibold text-xs">Semantic Q&amp;A</div>
                </div>
                <div className="bg-surface-charcoal p-2.5 rounded text-center text-primary border border-border-hairline">
                  <div className="text-[10px] text-primary-container uppercase">Graph</div>
                  <div className="font-semibold text-xs">Graph Gen</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-6 gap-2 my-auto items-center text-center text-[11px]">
                <div className="bg-surface-container-high p-2 rounded text-bone-white">Search</div>
                <div className="bg-surface-container-high p-2 rounded text-bone-white">Scrape</div>
                <div className="bg-surface-container-high p-2 rounded text-bone-white">Synthesize</div>
                <div className="bg-surface-container-high p-2 rounded text-bone-white">Draft</div>
                <div className="bg-surface-charcoal p-2 rounded text-primary border border-border-hairline">Critique</div>
                <div className="bg-surface-charcoal p-2 rounded text-primary-container border border-border-hairline">Finalize (x3)</div>
              </div>
            )}

            <div className="text-on-surface-variant text-[11px] truncate">
              $ stack: {project.stack.join(' + ')}
            </div>
          </div>
        )}

        {/* Highlights & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container-low border border-border-hairline p-8 rounded-lg">
          <div className="space-y-4">
            <h3 className="font-headline-sm text-bone-white">Key Highlights</h3>
            <ul className="space-y-3 font-body-md text-tertiary list-disc list-inside">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-headline-sm text-bone-white">Built-in Metrics</h3>
            <ul className="space-y-3 font-body-md text-tertiary">
              {project.metrics.map((m, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stack */}
        <div className="space-y-4">
          <h3 className="font-headline-sm text-bone-white">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-surface-container-low border border-border-hairline text-on-surface-variant font-label-caps text-label-caps uppercase rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Conditional Sections (Rendered ONLY if non-null in resume) */}
        {project.problem && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">The Problem</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.problem}</p>
          </div>
        )}

        {project.constraints && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Constraints</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.constraints}</p>
          </div>
        )}

        {project.architecture && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Architecture Details</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.architecture}</p>
          </div>
        )}

        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Key Decisions &amp; Trade-offs</h3>
            <ul className="space-y-2 font-body-md text-tertiary list-disc list-inside">
              {project.keyDecisions.map((dec, i) => (
                <li key={i}>{dec}</li>
              ))}
            </ul>
          </div>
        )}

        {project.evaluation && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Evaluation</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.evaluation}</p>
          </div>
        )}

        {project.results && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Results</h3>
            <p className="font-body-md text-tertiary leading-relaxed">{project.results}</p>
          </div>
        )}

        {project.nextSteps && project.nextSteps.length > 0 && (
          <div className="space-y-3 p-6 bg-surface-container-low border border-border-hairline rounded-lg">
            <h3 className="font-headline-sm text-bone-white">Next Steps</h3>
            <ul className="space-y-2 font-body-md text-tertiary list-disc list-inside">
              {project.nextSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-6">
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
    </article>
  )
}
