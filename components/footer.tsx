import { Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side */}
          <div className="flex items-center gap-8">
            <p className="text-sm text-muted-foreground">© Studio VXR 2018</p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side - Newsletter */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">Join our mailing list</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter email"
                className="w-64 bg-muted/30 border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="outline" className="border-border hover:bg-accent/10 bg-transparent">
                →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
