'use client'

import { useState } from 'react'
import IntroScene from './intro-scene'
import { ArrowUpRight, Check, Download, Mail, Menu, Moon, X, Sun, Copy, ExternalLink, Code2, BriefcaseBusiness } from 'lucide-react'

const email = 'vamisettimani@gmail.com'

const projects = [
  { title: 'Smart Cradle Companion', type: 'IoT / Embedded Systems · May 2026', description: 'An ESP32-based smart cradle that continuously monitors infant conditions through temperature, moisture, sound, and motion sensors. Automated alerts and cradle-control mechanisms help parents respond quickly while reducing continuous manual supervision.', tags: ['ESP32', 'IoT', 'C++', 'Sensors'], accent: 'featured', demoUrl: 'https://smartcradlecompanion.vercel.app', repoUrl: 'https://github.com/durgasravan21-prog/smart-cradle-companion' },
  { title: 'Community Development Program', type: 'Extra-curricular · Times of India NGO', description: 'Conducted cleanliness awareness sessions and interactive quizzes for students, promoting hygiene, sanitation, and responsible community practices.', tags: ['Leadership', 'Awareness', 'Community'], accent: 'quiet' },
]

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(true)
  const [copied, setCopied] = useState(false)
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null)
  const [introVisible, setIntroVisible] = useState(true)
  const [formStatus, setFormStatus] = useState('')
  const submitContact = async (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); const formElement = event.currentTarget; setFormStatus('Sending...'); const form = new FormData(formElement); const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) }); setFormStatus(response.ok ? 'Message sent successfully.' : 'Delivery is not configured yet. Please use the email button.'); if (response.ok) formElement.reset() }

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const nav = ['About', 'Work', 'Skills', 'Contact']
  return (
    <div className={dark ? 'portfolio dark' : 'portfolio light'}>
      {introVisible && <IntroScene onEnter={() => setIntroVisible(false)} />}
      <header className="site-header">
        <a href="#top" className="monogram" aria-label="Back to top">MSS<span>.</span></a>
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
          <p className="hero-copy">I&apos;m Mani Sai Sudheer — a Computer Science Engineering student who turns curious ideas into practical, human-centered technology.</p>
          <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="text-link" href="#contact">Get in touch <span>↗</span></a><a className="text-link resume-link" href="https://blobs.vusercontent.net/blob/CV%20Recommended%20Format%20mani-UzeAV99ImewRyYIAP9l8Q1KlD6Hs2m.pdf" target="_blank" rel="noreferrer" download="Mani-Sai-Sudheer-Resume.pdf"><Download size={16} /> Download resume</a></div>
          <div className="hero-index">01 <span>/</span> 04</div>
          <div className="hero-portrait">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/professional%20pic-j0dnazyYUit8OzwMNiQT61Oicn8KvN.jpeg" alt="Mani Sai Sudheer in a professional suit" />
            <span>Mani Sai Sudheer / CSE</span>
          </div>
        </section>

        <section id="about" className="about page-section split-section">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="section-content"><h2>Curiosity is my<br /><em>starting point.</em></h2><p>I&apos;m pursuing a Bachelor of Technology in Computer Science and Engineering at Lovely Professional University, with a CGPA of 8.2. I enjoy turning technical concepts into dependable, practical systems.</p><p>My work connects software, embedded hardware, and community impact — from building sensor-driven IoT systems to leading awareness activities for students.</p><div className="signature">MSS <span>— Mani Sai Sudheer</span></div></div>
        </section>

        <section id="work" className="work page-section">
          <div className="section-label"><span>02</span><span>Selected work</span></div>
          <div className="section-content"><h2>Small projects,<br /><em>real intent.</em></h2><div className="project-list">{projects.map((project, i) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-number">0{i + 1}</div><div className="project-body"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-links">{project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>Live demo <ExternalLink size={14} /></a>}{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>Repository <Code2 size={14} /></a>}</div></div><button className="round-arrow" onClick={() => setActiveProject(project)} aria-label={`View ${project.title} details`}><ArrowUpRight size={20} /></button></article>)}</div></div>
        </section>

        <section id="skills" className="skills page-section split-section"><div className="section-label"><span>03</span><span>Capabilities</span></div><div className="section-content"><h2>Tools for<br /><em>making things work.</em></h2><div className="skill-grid"><div><small>01 / Languages</small><p>C++<br />Python<br />C<br />HTML · CSS · JavaScript</p></div><div><small>02 / Tools & platforms</small><p>Git & GitHub<br />VS Code<br />Figma<br />MySQL</p></div><div><small>03 / Strengths</small><p>Problem-solving<br />Project management<br />Adaptability</p></div><div><small>04 / Certificates</small><p>Introduction to Artificial Intelligence <a className="certificate-link" href="https://drive.google.com/file/d/1tN0E_DHPVNV3c_uAdv7IqmS8FI0Yp2uK/view?usp=sharing" target="_blank" rel="noreferrer">Infosys SpringBoard <ExternalLink size={13} /></a><br />C Language <a className="certificate-link" href="https://drive.google.com/file/d/1WBDw3ZX_q3bEkCra-asKxVAyUN0HLyyD/view?usp=sharing" target="_blank" rel="noreferrer">Learn Vern <ExternalLink size={13} /></a><br />Introduction to C++ <span className="certificate-provider">Saylor Academy</span><br />Leadership Management <a className="certificate-link" href="https://drive.google.com/file/d/114ZgxJsojfV6tWmgLNhLdtXUDt5p3QLI/view?usp=sharing" target="_blank" rel="noreferrer">Edu Tech Hub <ExternalLink size={13} /></a></p></div></div><div className="education-note"><small>Education</small><div className="education-list"><article><span>2025 — Present</span><h3>Bachelor of Technology</h3><p>Computer Science and Engineering<br />Lovely Professional University · Phagwara, Punjab<br />CGPA: 8.2</p></article><article><span>Mar 2023 — May 2025</span><h3>Intermediate</h3><p>PCM<br />Sri Chaitanya Educational Institutions · Vijayawada, Andhra Pradesh<br />Percentage: 95.7%</p></article><article><span>Mar 2019 — Mar 2023</span><h3>Matriculation</h3><p>Sri Chaitanya Techno School · Jangareddy Guddem, Andhra Pradesh<br />Percentage: 92.3%</p></article></div></div></div></section>

        <section id="contact" className="contact page-section"><div className="section-label"><span>04</span><span>Start a conversation</span></div><div className="contact-content"><h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2><p>Whether it&apos;s a project, an opportunity, or just a good conversation about technology — my inbox is open.</p><form className="contact-form" onSubmit={submitContact}><input name="name" placeholder="Your name" required aria-label="Your name" /><input name="email" type="email" placeholder="Your email" required aria-label="Your email" /><textarea name="message" placeholder="Tell me about your idea" required aria-label="Your message" rows={4} /><button className="primary-button" type="submit">{formStatus || 'Send message'} <Mail size={17} /></button></form><div className="contact-actions"><a className="text-link" href={`mailto:${email}`}>Open your email app <ArrowUpRight size={15} /></a><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Email copied' : 'Copy email'}</button></div></div></section>
      </main>

      <footer><span>© {new Date().getFullYear()} Mani Sai Sudheer</span><span>Designed & built with intent.</span><div className="socials"><a href="https://github.com/vamisettimani-ctrl" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a><a href="https://www.linkedin.com/in/mani-sai-sudheer-vamisetti/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a><a href={`mailto:${email}`} aria-label="Email"><Mail size={17} /></a><a href="https://blobs.vusercontent.net/blob/CV%20Recommended%20Format%20mani-UzeAV99ImewRyYIAP9l8Q1KlD6Hs2m.pdf" target="_blank" rel="noreferrer" aria-label="Download CV"><Download size={17} /></a></div></footer>

      {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button><div className="project-type">{activeProject.type}</div><h2 id="project-title">{activeProject.title}</h2><p>{activeProject.description}</p><div className="tag-row">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{activeProject.demoUrl && <a className="text-link" href={activeProject.demoUrl} target="_blank" rel="noreferrer">Open live demo <ExternalLink size={15} /></a>}{activeProject.repoUrl && <a className="text-link" href={activeProject.repoUrl} target="_blank" rel="noreferrer">View repository <Code2 size={15} /></a>}<a className="text-link" href="#contact" onClick={() => setActiveProject(null)}>Discuss a similar idea <ArrowUpRight size={15} /></a></div></div>}
    </div>
  )
}
