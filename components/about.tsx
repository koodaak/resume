export function About() {
  return (
    <section id="about" className="px-4 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-8 font-mono">About</h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-pretty">
            With over 5 years of experience in cybersecurity, I have been working as a web penetration testing
            specialist. My experience in security project management, software development, secure coding and DevSecOps
            implementation enables me to fortify systems against cyber threats and ensure data security.
          </p>

          <p className="text-pretty">
            My skill set includes advanced knowledge of operating systems, networking (TCP/IP, firewalls), programming
            and scripting (C, Python, PowerShell), and deep proficiency in tools like Burp Suite, Metasploit, and Nmap.
            I am well-versed in penetration testing methodology (OWASP).
          </p>

          <p className="text-pretty">
            Currently, I work as a{" "}
            <span className="text-foreground font-medium">cybersecurity specialist and QA expert</span> at{" "}
            <span className="text-foreground font-medium">Cyberno</span>, where I perform security assessments, manual
            and automated controls, as well as security consulting. In addition, I work at{" "}
            <span className="text-foreground font-medium">APA – University of Mazandaran</span> as a{" "}
            <span className="text-foreground font-medium">
              Senior Penetration Testing Manager and DevOps Specialist
            </span>
            , and I play an active role in driving technological initiatives and R&D activities.
          </p>
        </div>
      </div>
    </section>
  )
}
