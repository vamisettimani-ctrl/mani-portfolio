'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Download, Mail, Menu, Moon, X, Sun, Copy, ExternalLink, Code2, BriefcaseBusiness } from 'lucide-react'

const email = 'mani.kumar@example.com'

const projects = [
  { title: 'Smart Cradle', type: 'IoT / Embedded Systems', description: 'An intelligent cradle that detects a baby’s cry and responds with automated soothing actions, combining sensing, control logic, and thoughtful human-centered design.', tags: ['Arduino', 'Sensors', 'C++'], accent: 'featured' },
  { title: 'Academic Foundations', type: 'Computer Science', description: 'Building a practical foundation across programming, data structures, databases, and web technologies through focused coursework and hands-on experiments.', tags: ['Python', 'SQL', 'Web'], accent: 'quiet' },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const nav = ['About', 'Work', 'Skills', 'Contact']
  return (
    <div className={dark ? 'portfolio dark' : 'portfolio light'}>
      <header className="site-header">
        <a href="#top" className="monogram" aria-label="Back to top">MK<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Use light theme' : 'Use dark theme'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero page-section">
          <div className="eyebrow"><span className="status-dot" /> Open to opportunities <span className="eyebrow-line" /></div>
          <h1>Building thoughtful<br /><em>digital systems.</em></h1>
          <p className="hero-copy">I&apos;m Mani Kumar — a Computer Science Engineering student who turns curious ideas into practical, human-centered technology.</p>
          <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Get in touch <span>↗</span></a></div>
          <div className="hero-index">01 <span>/</span> 04</div>
          <div className="hero-portrait">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professional%20pic-j0dnazyYUit8OzwMNiQT61Oicn8KvN.jpeg" alt="Mani Kumar in a professional suit" />
            <span>Mani Kumar / CSE</span>
          </div>
        </section>

        <section id="about" className="about page-section split-section">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="section-content"><h2>Curiosity is my<br /><em>starting point.</em></h2><p>I&apos;m currently pursuing my degree in Computer Science Engineering, where I&apos;m learning to think in systems — from the first line of code to the final user experience.</p><p>My work sits at the intersection of software, hardware, and everyday life. I&apos;m especially drawn to projects that make technology feel a little more intuitive and a lot more useful.</p><div className="signature">MK <span>— Mani Kumar</span></div></div>
        </section>

        <section id="work" className="work page-section">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="section-content"><h2>Small projects,<br /><em>real intent.</em></h2><div className="project-list">{projects.map((project, i) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-number">0{i + 1}</div><div className="project-body"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><button className="round-arrow" onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`}><ArrowUpRight size={20} /></button></article>)}</div></div>
        </section>

        <section id="skills" className="skills page-section split-section"><div className="section-label"><span>03</span><span>Capabilities</span></div><div className="section-content"><h2>Tools for<br /><em>making things work.</em></h2><div className="skill-grid"><div><small>01 / Languages</small><p>Python<br />C / C++<br />JavaScript</p></div><div><small>02 / Technologies</small><p>Arduino & IoT<br />HTML & CSS<br />SQL & Databases</p></div><div><small>03 / Approach</small><p>Problem solving<br />Rapid learning<br />Team collaboration</p></div></div></div></section>

        <section id="contact" className="contact page-section"><div className="section-label"><span>04</span><span>Start a conversation</span></div><div className="contact-content"><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p>Whether it&apos;s a project, an opportunity, or just a good conversation about technology — my inbox is open.</p><div className="contact-actions"><a className="primary-button" href={`mailto:${email}`}>Send me an email <Mail size={17} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Email copied' : 'Copy email'}</button></div></div></section>
      </main>

      <footer><span>© {new Date().getFullYear()} Mani Kumar</span><span>Designed & built with intent.</span><div className="socials"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={17} /></a><a href="https://blobs.vusercontent.net/blob/CV%20Recommended%20Format%20mani-UzeAV99ImewRyYIAP9l8Q1KlD6Hs2m.pdf" target="_blank" rel="noreferrer" aria-label="Download CV"><Download size={17} /></a></div></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button><div className="project-type">{activeProject.type}</div><h2 id="project-title">{activeProject.title}</h2><p>{activeProject.description}</p><div className="tag-row">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href="#contact" onClick={() => setActiveProject(null)}>Discuss a similar idea <ExternalLink size={15} /></a></div></div>}
    </div>
  )
}
