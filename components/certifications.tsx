"use client"

import { Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "Web Application Penetration Tester (OWASP New Zero)",
      issuer: "Voorivex Academy",
      date: "Aug 2024",
    },
    {
      title: "Narutow Hunters Web Application Penetration Tester",
      issuer: "Voorivex Academy",
      date: "Jun 2024",
    },
    {
      title: "Jiujitsu Hunters Web Application Penetration Tester",
      issuer: "Voorivex Academy",
      date: "Sep 2022",
    },
    {
      title: "LPIC-1 (Jadi)",
      issuer: "Maktabkhooneh",
      date: "Feb 2022",
    },
    {
      title: "JavaScript for Penetration Testing",
      issuer: "INE Security",
      date: "May 2021",
    },
    {
      title: "eLearnSecurity Web Application Penetration Tester",
      issuer: "INE Security",
      date: "May 2021",
    },
    {
      title: "Bug Hunting Professional",
      issuer: "Borna Nematzadeh",
      date: "Mar 2021",
    },
    {
      title: "Web Application Penetration Tester (OWASP Zero)",
      issuer: "Voorivex Academy",
      date: "Jan 2021",
    },
  ]

  return (
    <section ref={sectionRef} id="certifications" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-4xl font-bold text-balance">Licenses & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/40 to-violet-900/40 p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                <p className="text-sm text-primary font-medium">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
