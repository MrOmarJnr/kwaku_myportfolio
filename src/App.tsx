import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MessageSquare, 
  Download, 
  ExternalLink, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { personalInfo, skillGroups, projects, experience, productionSystems } from './data';
import { Section, SectionTitle, Card, ArchitectureDiagram, cn } from './components/UI';


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen technical-grid">
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="font-mono font-bold text-white tracking-tighter text-xl">
            EKA<span className="text-brand-accent">.SYSTEMS</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-mono uppercase tracking-widest hover:text-brand-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={personalInfo.resumeUrl}
              className="px-4 py-2 border border-brand-accent text-brand-accent rounded-md text-sm font-mono hover:bg-brand-accent hover:text-brand-bg transition-all flex items-center gap-2"
            >
              <Download size={14} /> CV
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-mono"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <Section className="pt-40 md:pt-56 flex flex-col items-start min-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brand-accent font-mono mb-4 text-sm tracking-[0.3em] uppercase">
            Engineering Reliability & Scalability
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-[0.9]">
            {personalInfo.name.split(' ').map((n, i) => (
              <span key={i} className={i === 1 ? "text-zinc-600 block" : "block"}>{n}</span>
            ))}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.title} specializing in <span className="text-white">production-grade infrastructure</span> and <span className="text-white">automated delivery systems</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-brand-accent text-brand-bg font-bold rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all flex items-center gap-2"
            >
              View Infrastructure <ChevronRight size={18} />
            </a>
            <div className="flex items-center gap-4 px-4">
              <a href={personalInfo.github} className="text-zinc-500 hover:text-white transition-colors"><Github /></a>
              <a href={personalInfo.linkedin} className="text-zinc-500 hover:text-white transition-colors"><Linkedin /></a>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle title="The Architect" subtitle="Background & Philosophy" />
            <div className="space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>{personalInfo.about}</p>
              <p>
                My approach centers on <span className="text-white">Infrastructure as Code (IaC)</span> and <span className="text-white">Observability</span>. I don't just build systems; I build resilient environments that monitor themselves, scale automatically, and empower developers to ship with confidence.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-brand-border overflow-hidden relative group">
              <img 
                src="/images/my-profile.jpeg"
                alt="Technical Workspace" 
                className="object-cover w-full h-full opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 rounded-lg">
                  <p className="font-mono text-xs text-brand-accent mb-1 uppercase tracking-widest">Current Status</p>
                  <p className="text-white font-medium">Architecting high-availability platforms @ LEF Signature</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-brand-accent/30 rounded-tr-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-brand-accent/30 rounded-bl-3xl -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <SectionTitle title="Technical Arsenal" subtitle="Core Competencies" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillGroups.map((group, idx) => (
            <Card key={idx} className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-6">
                <group.icon size={24} />
              </div>
              <h3 className="text-xl mb-4">{group.title}</h3>
              <ul className="space-y-3 mt-auto">
                {group.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-zinc-500 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Strategic Production Systems Section */}
        <div className="mt-16 p-8 glass rounded-2xl border-l-4 border-brand-accent">
          <h3 className="text-2xl mb-6 text-white">Systems I’ve Built in Production</h3>
          <p className="text-zinc-400 mb-8 max-w-3xl">
            Beyond cloud infrastructure, I design and deploy real-world systems that operate at the intersection of networking, payments, and backend automation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {productionSystems.map((system, idx) => (
              <div key={idx} className="flex items-center gap-3 text-zinc-300 font-mono text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                {system}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* DevOps Credibility Section */}
      <Section id="methodology">
        <SectionTitle title="How I Build Systems" subtitle="Engineering Principles" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl flex items-center gap-2">
              <span className="text-brand-accent font-mono text-sm">01.</span> IaC First
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Infrastructure is never manual. I use <span className="text-white">Terraform</span> and <span className="text-white">Ansible</span> to ensure every environment is versioned, reproducible, and documented through code.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl flex items-center gap-2">
              <span className="text-brand-accent font-mono text-sm">02.</span> Observability
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              If it isn't monitored, it doesn't exist. I build deep visibility using <span className="text-white">Prometheus</span>, <span className="text-white">Grafana</span>, and <span className="text-white">ELK</span> to catch issues before they impact users.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl flex items-center gap-2">
              <span className="text-brand-accent font-mono text-sm">03.</span> Automation
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Eliminating toil through <span className="text-white">CI/CD</span>. From GitHub Actions to custom Bash/Python scripts, I automate the path from commit to production.
            </p>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <SectionTitle title="Production Systems" subtitle="Case Studies & Infrastructure" />
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  {project.flow && <ArchitectureDiagram flow={project.flow} />}
                  <div className="mt-4 p-4 glass rounded-lg border-l-2 border-brand-accent">
                    <p className="text-[10px] font-mono text-brand-accent uppercase tracking-widest mb-1">Deployment Proof</p>
                    <p className="text-xs text-white font-medium">{project.deployment}</p>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl md:text-3xl text-white">{project.title}</h3>
                    <ExternalLink size={20} className="text-zinc-600 group-hover:text-brand-accent transition-colors" />
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2">The Problem</h4>
                      <p className="text-zinc-400">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2">The Solution</h4>
                      <p className="text-zinc-400">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2">The Impact</h4>
                      <p className="text-white font-medium">{project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-zinc-900 border border-brand-border rounded-full text-[10px] font-mono text-zinc-500 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                    {project.links && (
                    <div className="mt-6 flex flex-col gap-2">
                      {project.links.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-brand-accent hover:text-white transition flex items-center gap-2"
                        >
                          {link.replace('https://', '')}
                          <ExternalLink size={14} />
                        </a>
                      ))}
                    </div>
)}
                  </div>
                </div>
              </div>
              {idx !== projects.length - 1 && <div className="h-[1px] bg-brand-border w-full mt-12"></div>}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <SectionTitle title="Professional Journey" subtitle="Career Timeline" />
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l border-brand-border pb-8 last:pb-0">
              <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-brand-accent shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl text-white">{exp.role}</h3>
                  <p className="text-brand-accent font-mono text-sm">{exp.company}</p>
                </div>
                <p className="text-zinc-500 font-mono text-sm mt-2 md:mt-0">{exp.period}</p>
              </div>
              <p className="text-zinc-400 max-w-3xl leading-relaxed mb-4">
                {exp.description}
              </p>
              {exp.highlights && (
                <ul className="space-y-2 max-w-3xl">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-zinc-500">
                      <ChevronRight size={14} className="text-brand-accent mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="mb-24">
        <div className="glass rounded-3xl p-8 md:p-16 text-center overflow-hidden relative">
          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
          
          <SectionTitle title="Let's Build Systems" subtitle="Get In Touch" />
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12">
            Currently open to discussing <span className="text-white">platform engineering</span> roles, <span className="text-white">infrastructure audits</span>, and <span className="text-white">DevOps consulting</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-brand-accent hover:text-brand-bg transition-all group">
              <Mail size={20} />
              <span className="font-mono text-sm">Email</span>
            </a>
            <a href={personalInfo.linkedin} className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-brand-accent hover:text-brand-bg transition-all group">
              <Linkedin size={20} />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a href={personalInfo.github} className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-brand-accent hover:text-brand-bg transition-all group">
              <Github size={20} />
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a href={personalInfo.whatsapp} className="flex items-center justify-center gap-3 p-4 glass rounded-xl hover:bg-brand-accent hover:text-brand-bg transition-all group">
              <MessageSquare size={20} />
              <span className="font-mono text-sm">WhatsApp</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-mono">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Breaking it and Building it Better.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs uppercase tracking-widest font-mono">Back to top</a>
            <a href={personalInfo.resumeUrl} className="text-zinc-600 hover:text-white transition-colors text-xs uppercase tracking-widest font-mono">Download CV</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
