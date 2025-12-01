"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(scrollPosition / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetSection = document.getElementById("two-panels")
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const opacity = 1 - scrollProgress
  const scale = 1 - scrollProgress * 0.1
  const translateY = scrollProgress * -50

  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden bg-[#0b0b0d]">
      <div
        className="absolute inset-0 transition-all duration-100"
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          willChange: scrollProgress > 0 && scrollProgress < 1 ? "opacity, transform" : "auto",
        }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/ceramic-artifact-hero.png" alt="Ancient ceramic artifact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_40)] via-[oklch(0.12_0.02_40)]/95 to-[oklch(0.12_0.02_40)]/80 md:from-[oklch(0.12_0.02_40)]/95 md:via-[oklch(0.12_0.02_40)]/70 md:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="mb-6 md:mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-none tracking-tight whitespace-nowrap text-foreground">
                AI PRODUCT BUILDER
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-none tracking-tight text-foreground mt-2">
                & ANTHROPOLOGIST
              </p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground tracking-wide">
              EMMY ARIAS PARDO
            </p>

            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-muted-foreground max-w-lg text-pretty">
              Designing and coordinating digital solutions that leverage AI to make data more accessible, secure, and
              reliable for community.
            </p>

            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 group">
              <a href="#two-panels" onClick={handleViewProjects}>
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-8">Automatization · Design · AI</p>
          </div>
        </div>

        {/* Image Credits */}
        <div className="absolute bottom-6 right-6 z-10">
          <p className="text-[10px] md:text-xs text-right text-muted-foreground/40 tracking-wide">
            © CERARCO | Instituto Colombiano de Antropología e Historia.
          </p>
        </div>

        {/* Vertical Text */}
        <div className="absolute left-6 bottom-12 z-10 hidden md:block">
          <p className="text-xs tracking-widest [writing-mode:vertical-lr] rotate-180 text-muted-foreground">
            SCROLL DOWN
          </p>
        </div>
      </div>
    </section>
  )
}
