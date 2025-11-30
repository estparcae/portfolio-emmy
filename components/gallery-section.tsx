"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    year: "2024",
    image: "/modern-ecommerce-website.png",
    description:
      "A comprehensive e-commerce solution featuring custom checkout flows, inventory management, and seamless payment integration.",
    tags: ["Development", "Timeline", "Overview"],
  },
]

export function GallerySection() {
  const [currentIndex] = useState(0)
  const currentItem = galleryItems[currentIndex]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div className="flex items-center gap-4">
            <div className="text-xs tracking-widest [writing-mode:vertical-lr] rotate-180 text-muted-foreground">
              SCROLL DOWN
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
                Featured
                <br />
                Projects
              </h2>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent">02</span> / Selected Work
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground max-w-4xl mb-16 leading-relaxed">
          Explore a selection of my recent projects that showcase my approach to solving complex challenges through
          design and technology. Each project represents a unique collaboration, combining strategic thinking with
          creative execution to deliver meaningful results for clients across various industries.
        </p>

        {/* Gallery Card */}
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative">
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-muted hover:bg-accent/20 backdrop-blur-sm flex items-center justify-center transition-colors z-10 text-foreground"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <img
                src={currentItem.image || "/placeholder.svg"}
                alt={currentItem.title}
                className="w-full h-full object-cover min-h-[400px]"
              />

              {/* Dots Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-accent" : "bg-muted"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Content Side */}
            <div className="p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <h3 className="text-3xl font-bold text-balance text-foreground">{currentItem.title}</h3>
                  <span className="text-2xl font-bold text-muted-foreground">{currentItem.year}</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-accent">Project Type</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{currentItem.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Timeline</h4>
                    <p className="text-sm text-muted-foreground">{currentItem.year}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-foreground">Project Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built with modern web technologies including React, Next.js, and TypeScript. The platform features
                      real-time inventory updates, advanced search functionality, and a responsive design that works
                      seamlessly across all devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full md:w-auto">
                  View Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
