import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="flex items-center justify-center px-4 py-12 md:py-16">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
              <Image src="/profile.jfif" alt="Koodaak Profile" fill className="object-cover" priority />
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Sobhan Karami
                <br />
                Koodaak
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-mono">Cyber Security Specialist || QA Engineering   </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty">
              With over 5 years of experience in cybersecurity, I have been working as a web penetration testing
              specialist. My experience in security project management, software development, secure coding and
              DevSecOps implementation enables me to fortify systems against cyber threats and ensure data security.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <a
                  href="https://linkedin.com/in/koodaak"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <a href="https://github.com/koodaak" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              >
                <a href="mailto:kooodaak@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-primary">5+</div>
            <div className="text-muted-foreground text-lg">Years Experience</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-primary">100+</div>
            <div className="text-muted-foreground text-lg">Security Audits</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-5xl md:text-6xl font-bold text-primary">50+</div>
            <div className="text-muted-foreground text-lg">Satisfied Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
