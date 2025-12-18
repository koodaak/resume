"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FlaskConical, Shield } from "lucide-react"

const skills = [
  {
    name: "Penetration Testing",
    icon: "/penetration-testing.png",
    percentage: 95,
    useLucide: false,
  },
  {
    name: "Node.js",
    icon: "/node-js.png",
    percentage: 90,
    useLucide: false,
  },
  {
    name: "Python",
    icon: "/python.png",
    percentage: 85,
    useLucide: false,
  },
  {
    name: "Linux",
    icon: "/kali-linux.png",
    percentage: 92,
    useLucide: false,
  },
  {
    name: "Research & Development",
    icon: "flask",
    percentage: 88,
    useLucide: true,
  },
  {
    name: "Security Engineering",
    icon: "shield",
    percentage: 93,
    useLucide: true,
  },
]

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= skill.percentage) {
              clearInterval(interval)
              return skill.percentage
            }
            return prev + 1
          })
        }, 15)
        return () => clearInterval(interval)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.percentage, index])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 group overflow-hidden"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `all 0.6s ease-out ${index * 0.1}s`,
      }}
    >
      <div
        className="absolute w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          left: mousePosition.x - 64,
          top: mousePosition.y - 64,
          filter: "blur(20px)",
        }}
      />

      <div className="relative w-24 h-24 mb-4 z-10">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" fill="none" className="text-border/30" />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-primary transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {skill.useLucide ? (
              skill.icon === "flask" ? (
                <FlaskConical className="w-8 h-8 text-primary" />
              ) : (
                <Shield className="w-8 h-8 text-primary" />
              )
            ) : (
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={32}
                height={32}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            )}
          </div>
        </div>
      </div>
      <div className="text-2xl font-bold text-foreground mb-1 z-10">{progress}%</div>
      <div className="text-sm text-primary font-medium text-center z-10">{skill.name}</div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="px-4 py-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            With years of experience in cybersecurity and software development, I've mastered various technologies and
            methodologies to deliver secure, efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Security Testing</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Penetration Testing</li>
              <li>• Vulnerability Assessment</li>
              <li>• Security Auditing</li>
              <li>• Threat Modeling</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Development</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Node.js & Express</li>
              <li>• Python & Django</li>
              <li>• WordPress Development</li>
              <li>• Full-Stack Development</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Security Tools</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Metasploit & Burp Suite</li>
              <li>• Nmap & Wireshark</li>
              <li>• OWASP Tools</li>
              <li>• Custom Security Scripts</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Operating Systems</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Linux (Kali, Ubuntu)</li>
              <li>• Windows Server</li>
              <li>• System Administration</li>
              <li>• Network Configuration</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Leadership</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Team Management</li>
              <li>• Security Training</li>
              <li>• Project Planning</li>
              <li>• Client Consultation</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Compliance</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Security Standards</li>
              <li>• Risk Assessment</li>
              <li>• Documentation</li>
              <li>• Best Practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
