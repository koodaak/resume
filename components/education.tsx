import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Associate's degree, Accounting",
      institution: "BNUT - Babol Noshirvani University of Technology",
      period: "May 2024",
      description: "Completed Associate's degree program in Accounting",
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-4xl font-bold text-center">My Education</h2>
          <GraduationCap className="w-10 h-10 text-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="text-sm text-primary font-semibold mb-2">{edu.period}</div>
                <h3 className="text-xl font-bold mb-2 text-balance">{edu.degree}</h3>
                <p className="text-muted-foreground mb-3">{edu.institution}</p>
                <p className="text-sm text-muted-foreground/80">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
