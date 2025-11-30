import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    number: "01",
    productType: "Inventory Data Portal · Internal Tool (Prototype)",
    title: "Sistema de Consulta de Bienes Arqueológicos — ICANH",
    slug: "sistema-consulta-bienes-arqueologicos",
    badges: ["no-code"],
    desc: "Prototype of a consultation portal for archaeological inventory: advanced filters, multi-view browsing and safe photo–record association to explore data beyond spreadsheets.",
    context:
      "The Colombian Institute of Anthropology and History (ICANH) manages thousands of archaeological artifacts across multiple collections. Researchers and staff needed a way to explore this inventory beyond traditional spreadsheets.",
    problem: [
      "Archaeological data scattered across multiple Excel files with inconsistent formatting",
      "No visual association between photos and artifact records",
      "Difficult to perform cross-collection searches or apply advanced filters",
      "Limited accessibility for non-technical staff and external researchers",
    ],
    approach:
      "Conducted lightweight user research with archaeologists and collection managers to understand their workflows. Co-designed a prototype portal with advanced filtering, multi-view browsing (grid, list, map), and secure photo-record associations. Built using no-code/low-code tools for rapid iteration.",
    outcomes: [
      "Reduced time to locate specific artifacts from hours to minutes",
      "Standardized data entry across collections with validation rules",
      "Enabled visual browsing with photo galleries linked to detailed records",
      "Improved accessibility for researchers without technical expertise",
    ],
    learnings:
      "Working closely with domain experts revealed that the most valuable feature wasn't advanced search—it was the ability to visually browse and make connections between artifacts. This insight shaped the entire interface design.",
  },
  {
    number: "02",
    productType: "Field Data Capture · Forms System",
    title: "Ficha de Avalúos",
    slug: "ficha-de-avaluos",
    badges: ["no-code"],
    desc: "Digital appraisal form that replaces paper capture and standardizes entries. Designed for quick onboarding and consistent datasets across projects.",
    context:
      "Property appraisal teams were using paper forms in the field, leading to data entry errors, inconsistent formatting, and delays in processing. The organization needed a digital solution that worked offline and required minimal training.",
    problem: [
      "Paper forms prone to illegible handwriting and missing required fields",
      "Manual data entry from paper to spreadsheets introduced errors and delays",
      "No standardization across different appraisal teams",
      "Difficult to track form completion status or generate reports",
    ],
    approach:
      "Designed a mobile-friendly digital form with conditional logic, required field validation, and offline capability. Focused on intuitive UX to minimize training time. Implemented automated data validation and export to standardized formats.",
    outcomes: [
      "Eliminated manual transcription errors and reduced processing time by 60%",
      "Achieved 95% data completeness with required field validation",
      "Reduced onboarding time for new appraisers from 2 days to 2 hours",
      "Enabled real-time progress tracking and automated report generation",
    ],
    learnings:
      "The key to adoption was making the digital form faster than paper, not just more accurate. By optimizing for speed and adding smart defaults, we made the tool indispensable rather than just compliant.",
  },
  {
    number: "03",
    productType: "Workflow Automation · Scheduling & Notifications",
    title: "Automatización Forms + Calendar + Gmail",
    slug: "automation-forms-calendar-gmail",
    badges: ["no-code"],
    desc: "Approval and scheduling flow connecting Forms → Calendar → Gmail to create events, route approvals and send automated notifications.",
    context:
      "A team was manually processing meeting requests from a Google Form, checking availability, creating calendar events, and sending confirmation emails. This process took 15-20 minutes per request and was prone to scheduling conflicts.",
    problem: [
      "Manual processing of 50+ meeting requests per week consumed significant staff time",
      "Frequent scheduling conflicts due to lack of real-time calendar integration",
      "Inconsistent email notifications and missing confirmations",
      "No audit trail or approval workflow for sensitive meetings",
    ],
    approach:
      "Built an automated workflow using Google Apps Script to connect Forms, Calendar, and Gmail. Implemented approval routing for specific meeting types, automatic conflict detection, and templated email notifications with calendar invites.",
    outcomes: [
      "Reduced processing time from 15 minutes to 30 seconds per request (97% reduction)",
      "Eliminated scheduling conflicts with real-time calendar availability checks",
      "Achieved 100% notification delivery with automated follow-ups",
      "Created complete audit trail for compliance and reporting",
    ],
    learnings:
      "Small automations can have outsized impact. By eliminating a repetitive 15-minute task, we freed up 12+ hours per week for higher-value work. The key was starting with a well-defined, high-frequency process.",
  },
]

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

function getAdjacentProjects(slug: string) {
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  return { prevProject, nextProject }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  const { prevProject, nextProject } = getAdjacentProjects(params.slug)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <nav className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>
        </nav>

        <header className="mb-16">
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4 font-mono">{project.productType}</p>
          <h1 className="text-5xl font-bold text-foreground mb-6 text-balance leading-tight">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-[#D9B28C]/40 text-[#D9B28C] bg-[#D9B28C]/25"
              >
                {badge}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Context</h2>
            <p className="text-muted-foreground leading-relaxed">{project.context}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Problem</h2>
            <ul className="space-y-3">
              {project.problem.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">{project.approach}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Outcomes</h2>
            <ul className="space-y-3">
              {project.outcomes.map((item, index) => (
                <li key={index} className="text-muted-foreground leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Gallery</h2>
            <div
              className="aspect-video rounded-2xl border border-dashed border-white/15 bg-gradient-to-b from-white/6 to-white/2"
              aria-label="Project gallery placeholder"
            />
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Learnings & Next Steps</h2>
            <p className="text-muted-foreground leading-relaxed">{project.learnings}</p>
          </section>
        </article>

        <footer className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>←</span>
              <span>Previous</span>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Next</span>
              <span>→</span>
            </Link>
          ) : (
            <div />
          )}
        </footer>
      </div>
    </main>
  )
}
