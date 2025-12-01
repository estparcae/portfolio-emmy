import Link from "next/link"
import { notFound } from "next/navigation"

const projects = [
  {
    number: "01",
    productType: "AI Interview Platform · Career Development Tool",
    title: "3rd place Hackathon Winner: MockLab",
    slug: "mocklab",
    badges: ["Cursor", "Figma", "3rd Place Winner"],
    desc: "AI-powered interview platform helping LATAM developers unlock 2-4x higher salaries by mastering their interview skills. Winner of 3rd place at the AI Voice & Message Hackathon 2025 by Makers Fellowship and Supabase.",
    context:
      "LATAM developers often face significant barriers in accessing high-paying international tech roles, not due to lack of technical skills, but because of interview preparation gaps and limited access to realistic practice environments. The platform was built during the AI Voice & Message Hackathon 2025.",
    problem: [
      "Limited access to realistic interview practice for LATAM developers targeting international roles",
      "High cost of interview coaching services (often $100+ per session)",
      "Lack of immediate, constructive feedback on communication and technical presentation",
      "Time zone barriers preventing practice with native English speakers",
    ],
    approach:
      "Designed and prototyped an AI-powered interview platform using Figma for UX/UI design and Cursor with MCP tools for rapid development. Integrated an AI voice agent capable of conducting structured technical interviews, providing real-time feedback on both technical answers and communication skills. Focused on creating an accessible, scalable solution for developers across Latin America.",
    outcomes: [
      "Won 3rd place at the AI Voice & Message Hackathon 2025 by Makers Fellowship and Supabase",
      "Created a functional prototype demonstrating AI-driven interview simulations",
      "Validated concept with positive feedback from LATAM developer community",
      "Established foundation for helping developers unlock 2-4x higher salary opportunities",
    ],
    learnings:
      "The hackathon experience reinforced that effective interview preparation isn't just about technical knowledge—it's about building confidence through realistic practice. The AI voice agent's ability to provide immediate, judgment-free feedback proved to be a game-changer for anxious interviewees.",
  },
  {
    number: "02",
    productType: "Field Data Capture · Forms System",
    title: "Heritage Appraisal System",
    slug: "ficha-de-avaluos",
    badges: ["no-code"],
    desc: "Digital appraisal form that replaces paper capture and standardizes entries. Designed for quick onboarding and consistent datasets across projects.",
    context:
      "Heritage appraisal teams were using paper forms in the field, leading to data entry errors, inconsistent formatting, and delays in processing. The organization needed a digital solution that worked offline and required minimal training for cultural heritage valuation.",
    problem: [
      "Paper forms prone to illegible handwriting and missing required fields",
      "Manual data entry from paper to spreadsheets introduced errors and delays",
      "No standardization across different appraisal teams",
      "Difficult to track form completion status or generate reports for heritage assets",
    ],
    approach:
      "Designed a mobile-friendly digital form with conditional logic, required field validation, and offline capability. Focused on intuitive UX to minimize training time. Implemented automated data validation and export to standardized formats for heritage appraisal workflows.",
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
    productType: "Inventory Data Portal · Internal Tool (Prototype)",
    title: "Archaeological Inventory System — SIARQ",
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
