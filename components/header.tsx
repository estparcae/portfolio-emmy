import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-background/50 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Portfolio
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <Link href="#about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="#work" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
          Get in Touch
        </Button>
      </div>
    </header>
  )
}
