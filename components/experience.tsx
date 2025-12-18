"use client"

import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    period: "Sep 2025 — Present",
    title: "Cyber Security Specialist || QA Engineering",
    company: "Cyberno | سایبرنو",
    location: "Sari, Mazandaran Province, Iran",
    description:
      "As a Quality Assurance Engineer with a strong background in cybersecurity, I focused on ensuring the reliability, security, and performance of software products. I integrated traditional QA methodologies—including functional, regression, and automated testing—with security-driven testing to identify vulnerabilities early in the development lifecycle and reduce overall risk.My responsibilities included conducting comprehensive security assessments and audits of web applications, performing both manual and automated penetration testing (vulnerability scanning and exploitation), and analyzing security risks to develop effective mitigation strategies. In addition, I provided security consulting services and designed and delivered cybersecurity training programs.By collaborating closely with development, infrastructure, and security teams, I contributed to building a more secure SDLC, improving system stability, and delivering secure, high-quality, and trustworthy products",
    technologies: ["Penetration Testing", "Cybersecurity", "Cyber Security Risk", "Information Security Analysis"],
  },
  {
    period: "Dec 2024 — Present",
    title: "Chief Penetration Test Officer",
    company: "APA-University of Mazandaran",
    location: "Babolsar, Mazandaran Province, Iran",
    description:
      "I am the CTO/R&D at APA-Mazandaran. I am responsible for leading and overseeing the company's technology and research and development activities. I work with a team of engineers and scientists to develop new products and services, improve the security and reliability of the company's technology.",
    technologies: ["Linux", "Team Leadership", "Soft Skills", "Project Management"],
  },
  {
    period: "Jan 2023 — Jun 2025",
    title: "Cyber Security Specialist",
    company: "Novin52",
    location: "Remote",
    description:
      "Perform penetration testing and web testing. Collaborate with other team members on automated and manual testing, source code analysis and analysis, documentation and reporting, creating security solutions for developers, and characterizing security vulnerabilities. Perform audits of security best practices and applications, ensuring compliance with industry standards and practices.",
    technologies: ["Cyber Security Risk", "Cybersecurity Tools", "Information Security Analysis", "Cybersecurity"],
  },
  {
    period: "Apr 2023 — Mar 2025",
    title: "Web Application Penetration Tester",
    company: "PAMTECH",
    location: "Remote",
    description:
      "Identified and recommended appropriate measures to manage vulnerabilities in web applications. Conducted thorough security assessments and provided actionable remediation strategies.",
    technologies: ["Web Application Security", "Vulnerability Assessment", "Security Testing"],
  },
  {
    period: "Apr 2022 — Feb 2025",
    title: "Security Researcher",
    company: "HackerOne",
    location: "Freelance",
    description:
      "Conducted security research and vulnerability discovery on various platforms. Specialized in web application security and OWASP methodologies.",
    technologies: ["Security Research", "Web Application Security", "OWASP"],
  },
  {
    period: "Mar 2020 — 2025",
    title: "Node.js Developer",
    company: "Freelance",
    location: "Babol, Mazandaran Province, Iran",
    description:
      "Designing and developing scalable backend systems using Node.js and Express. Implementing RESTful APIs, optimizing performance, and ensuring application security and reliability. Collaborating with frontend and DevOps teams to deliver robust web solutions.",
    technologies: ["Node.js", "Web Development", "Express.js", "RESTful APIs"],
  },
  {
    period: "Aug 2019 — Dec 2024",
    title: "WordPress Developer",
    company: "Freelance",
    location: "Remote",
    description:
      "Experienced WordPress Developer specializing in designing and building professional, user-friendly websites. Skilled in developing custom themes and plugins, customizing the CMS, and optimizing site performance for better user experience and speed. Proficient in implementing security best practices, improving SEO, and managing dynamic content efficiently. Collaborates closely with design, marketing, and development teams to deliver scalable, reliable, and high-quality web solutions. Passionate about leveraging the latest WordPress tools and techniques to create innovative solutions tailored to business needs.",
    technologies: ["PHP", "WordPress", "Search Engine Optimization (SEO)", "Site Build"],
  },
  {
    period: "Mar 2023 — May 2024",
    title: "Senior Research Engineer",
    company: "BNUT - Babol Noshirvani University of Technology",
    location: "Babol, Mazandaran Province, Iran",
    description:
      "As a Research Engineer and Programmer, I was responsible for leading and contributing to various electrical engineering and biomedical engineering projects. I collaborated with a team of engineers and scientists to develop innovative solutions, conduct research, and apply advanced technologies to solve complex engineering problems. In this role, in addition to working on advanced systems, I also took charge of the programming aspects of the projects, designing and implementing software solutions.",
    technologies: [
      "Engineering Research",
      "Research Development",
      "Arduino",
      "C Programming",
      "Electrical Engineering",
    ],
  },
]

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="px-4 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-6 h-6 text-accent" />
          <h2 className="text-3xl font-bold text-balance">Professional Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-20"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`absolute left-[-4px] md:left-[28px] top-6 w-3 h-3 rounded-full border-2 border-accent transition-all duration-300 ${
                    hoveredIndex === index ? "bg-accent scale-150 shadow-lg shadow-accent/50" : "bg-background"
                  }`}
                />

                <div
                  className={`relative overflow-hidden rounded-xl border border-border/50 transition-all duration-300 ${
                    hoveredIndex === index ? "border-accent/50 shadow-xl shadow-accent/10" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
                      hoveredIndex === index ? "opacity-100" : ""
                    }`}
                  />

                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-balance bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-semibold">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          {exp.location && (
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-pretty mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
