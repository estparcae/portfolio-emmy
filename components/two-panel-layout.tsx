"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const projects = [
  {
    number: "01",
    productType: "Inventory Data Portal · Internal Tool (Prototype)",
    title: "Sistema de Consulta de Bienes Arqueológicos — ICANH",
    slug: "sistema-consulta-bienes-arqueologicos",
    badges: ["no-code"],
    desc: "Prototype of a consultation portal for archaeological inventory: advanced filters, multi-view browsing and safe photo–record association to explore data beyond spreadsheets.",
  },
  {
    number: "02",
    productType: "Field Data Capture · Forms System",
    title: "Ficha de Avalúos",
    slug: "ficha-de-avaluos",
    badges: ["no-code"],
    desc: "Digital appraisal form that replaces paper capture and standardizes entries. Designed for quick onboarding and consistent datasets across projects.",
  },
  {
    number: "03",
    productType: "Workflow Automation · Scheduling & Notifications",
    title: "Automatización Forms + Calendar + Gmail",
    slug: "automation-forms-calendar-gmail",
    badges: ["no-code"],
    desc: "Approval and scheduling flow connecting Forms → Calendar → Gmail to create events, route approvals and send automated notifications.",
  },
]

export function TwoPanelLayout() {
  const cardRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const handleDownloadCV = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    try {
      const response = await fetch("/emmy-pardo-cv.pdf")
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "Emmy_Arias_CV.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading CV:", error)
    }
  }

  const handleViewProject = (e: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
    e.preventDefault()
    if (cardRefs.current[slug]) {
      const cardHeight = cardRefs.current[slug]!.scrollHeight
      const viewportHeight = cardRefs.current[slug]!.clientHeight
      const scrollTarget = cardHeight - viewportHeight + 32 // 32px spacing from bottom

      cardRefs.current[slug]!.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="two-panels" className="two-panels">
      <div className="container">
        <aside className="left-rail">
          <div className="left-rail__wrap">
            <figure className="profile mb-4">
              <img
                src="/images/emmy-portrait.jpg"
                alt="Portrait of Emmy Pardo"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>

            <header className="left-rail__header mb-4">
              <h1 className="text-3xl font-bold text-white mb-1">Emmy Pardo</h1>
              <h2 className="text-base text-accent">Anthropologist & Digital Transformation Specialist</h2>
            </header>

            <div className="left-rail__body flex-1">
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Anthropologist & archaeologist focused on digital transformation for cultural heritage. I design process
                automations, normalize databases, create data-capture interfaces, and prototype inventory tools. I
                bridge hands-on tech (scripts, Excel macros, workflow automation, UX/UI) with product coordination to
                make information more accessible, secure, and reliable.
              </p>

              <Button asChild className="bg-accent hover:bg-accent-2 text-white w-full mb-4">
                <a
                  href="/emmy-arias-cv.pdf"
                  onClick={handleDownloadCV}
                  className="flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <footer className="left-rail__footer">
              <div className="border-t border-white/10 pt-3">
                <div className="space-y-2">
                  <a
                    href="mailto:emmyarias@gmail.com"
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-white/40" />
                    <span>emmypardo13@gmail.com</span>
                  </a>
                  <a
                    href="tel:+573008883062"
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-white/40" />
                    <span>(+57) 300 888 3062</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ed-arias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-white/70 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5 text-white/40" />
                    <span>linkedin.com/in/ed-pardo</span>
                  </a>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <MapPin className="h-3.5 w-3.5 text-white/40" />
                    <span>Bogotá, Colombia</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </aside>

        <div className="showcase">
          {projects.map((project) => {
            return (
              <article
                key={project.slug}
                ref={(el) => {
                  cardRefs.current[project.slug] = el
                }}
                className="slide"
              >
                <div className="text-content space-y-4">
                  <div className="kicker flex flex-col gap-3">
                    <span className="text-8xl font-bold text-white/10 leading-none">{project.number}</span>
                    <span className="text-sm text-accent uppercase tracking-wide font-medium font-mono">
                      {project.productType}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground text-balance leading-tight">
                    {project.title}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl text-pretty">
                    {project.desc}
                  </p>
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
                </div>

                <div className="flex-1 flex min-h-[200px] items-center justify-center mx-0 md:mx-52 opacity-100">
                  <span
                    className="text-3xl md:text-5xl font-bold text-white/10 leading-none uppercase tracking-tight pointer-events-none select-none"
                    aria-label="Coming soon"
                  >
                    Coming soon
                  </span>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  onClick={(e) => handleViewProject(e, project.slug)}
                  className="btn-primary inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-medium bg-accent hover:bg-accent-2 text-white transition-colors shadow-lg shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View Project
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
