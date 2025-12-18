import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Contact() {
  return (
    <section className="px-4 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-mono">Get In Touch</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            I'm always interested in hearing about new security opportunities, collaborations, or discussing
            cybersecurity challenges. Feel free to reach out for consulting, penetration testing services, or security
            training programs.
          </p>

          <Button size="lg" asChild>
            <a href="mailto:kooodaak@gmail.com" className="inline-flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Say Hello
            </a>
          </Button>
        </div>

        <footer className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">© {new Date().getFullYear()} Koodaak.</p>
        </footer>
      </div>
    </section>
  )
}
