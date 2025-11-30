"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const activities = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern technologies. From concept to deployment, creating digital solutions that drive results.",
    color: "from-red-500 to-orange-400",
    image: "/web-development-code-on-screen-illustration.jpg",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive user interfaces and seamless user experiences. Combining aesthetics with functionality to create engaging digital products.",
    color: "from-orange-400 to-yellow-400",
    image: "/ui-ux-design-wireframes-illustration.jpg",
  },
  {
    id: "03",
    title: "Brand Strategy",
    description:
      "Developing comprehensive brand identities and strategic positioning. Creating cohesive visual systems that resonate with your target audience.",
    color: "from-yellow-400 to-orange-500",
    image: "/brand-strategy-creative-illustration.jpg",
  },
]

export function AdventureSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length)
  }

  return (
    <section className="py-24 px-6 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-xs tracking-widest [writing-mode:vertical-lr] rotate-180 text-muted-foreground">
                SCROLL DOWN
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-balance text-foreground">What I Do</h2>
              </div>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              <span className="text-accent">01</span> / Services & Expertise
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <button className="hover:text-foreground transition-colors">All Services</button>
            <button className="hover:text-foreground transition-colors">Development</button>
            <button className="hover:text-foreground transition-colors">Design</button>
            <button className="hover:text-foreground transition-colors">Strategy</button>
          </div>
          <Button variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
            Get in Touch
          </Button>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground max-w-4xl mb-16 leading-relaxed">
          With years of experience in digital design and development, I specialize in creating impactful solutions that
          blend creativity with technical excellence. My approach combines strategic thinking, user-centered design, and
          cutting-edge technology to deliver results that exceed expectations. Whether you need a complete digital
          transformation or a focused project, I bring expertise, dedication, and a passion for innovation to every
          engagement.
        </p>

        {/* Cards Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <div className="bg-card border border-border rounded-lg p-8 pb-6 relative overflow-hidden">
                  {/* Number */}
                  <div className="text-4xl font-bold mb-8 text-muted-foreground">{activity.id}</div>

                  {/* Image */}
                  <div className="relative h-64 mb-8 flex items-center justify-center">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Learn More</Button>
                  </div>

                  {/* Bottom Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${activity.color}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors text-foreground"
            aria-label="Previous activity"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors text-foreground"
            aria-label="Next activity"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
