import React, { useState } from "react";
import "./portfolio.css";

const projects = [
  {title:"TaskFlow", type:"Full-stack SaaS dashboard", desc:"Task management product with CRUD workflows, search, filters, dashboard metrics and unified API + frontend deployment.", stack:["React","TypeScript","Node.js","Express"], live:"https://taskflow-dashboard-zme5.onrender.com/", code:"https://github.com/RTdeveloper2/Portfolio/tree/main/projects/taskflow-dashboard"},
  {title:"Wisdom Dashboard", type:"Enterprise product engineering", desc:"Modernized an analytics-heavy product experience with UI refactoring, reusable patterns and security improvements.", stack:["React","Node.js","Azure","Microservices"], code:"https://github.com/RTdeveloper2/Portfolio"},
  {title:"Schema Registry Services", type:"Backend / microservices", desc:"Service-oriented backend capabilities for schema management, APIs and integration workflows.", stack:["Node.js","REST","Microservices","Cloud"], code:"https://github.com/RTdeveloper2/Portfolio"}
];
const skills = [
  ["Frontend","React","TypeScript","JavaScript","Angular","HTML/CSS","Responsive UI"],
  ["Backend","Node.js","Express","REST APIs","Microservices","API Design"],
  ["Cloud","Azure","Databricks","Cloud Architecture","CI/CD"],
  ["Engineering","Git","Security","Testing","Performance","Agile"]
];

export default function App(){
  const [dark,setDark]=useState(false);
  const [menu,setMenu]=useState(false);
  const [selected,setSelected]=useState(0);
  const p=projects[selected];
  return <div className={dark?"site dark":"site"}>
    <div className="wrap">
      <nav className="nav">
        <a className="brand" href="#top">RT<span> / DEV</span></a>
        <div className="navlinks"><a href="#work">Work</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
        <div className="navActions"><button className="iconBtn" onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?"☀":"◐"}</button><button className="iconBtn menuBtn" onClick={()=>setMenu(!menu)} aria-label="Open menu">☰</button></div>
        {menu&&<div className="mobileMenu"><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#skills" onClick={()=>setMenu(false)}>Skills</a><a href="#experience" onClick={()=>setMenu(false)}>Experience</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div>}
      </nav>

      <main id="top">
        <section className="hero">
          <div><div className="kicker"><span className="dot"/> Available for selected freelance work</div><h1>Software engineer who builds <span className="accent">useful</span> products.</h1><p className="lead">I'm Rahul Taneja, a full-stack developer focused on React, Node.js and Azure. I build responsive interfaces, reliable APIs and product experiences that are simple to use and maintain.</p><div className="actions"><a className="btn primary" href="#work">Explore my work ↓</a><a className="btn" href="mailto:rtaneja1584@gmail.com">Let's work together ↗</a></div></div>
          <aside className="side"><div className="big">7+ yrs</div><p>Building enterprise software and modern web products across frontend, backend, APIs and cloud.</p><div className="mini"><span>Dehradun, India</span><strong>Remote ✓</strong></div></aside>
        </section>

        <section id="work"><div className="sectionTop"><div><div className="eyebrow">01 / Selected work</div><h2>Proof over promises.</h2></div><p className="intro">Examples showing how I approach product engineering, from polished UI to backend architecture.</p></div>
          <div className="projectLayout"><div className="projectList">{projects.map((x,i)=><button className={i===selected?"tab active":"tab"} key={x.title} onClick={()=>setSelected(i)}><small>0{i+1} · {x.type}</small><strong>{x.title}</strong></button>)}</div>
          <article className="detail"><div><span className="number">PROJECT 0{selected+1}</span><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.stack.map(s=><span className="chip" key={s}>{s}</span>)}</div></div><div className="actions">{p.live&&<a className="btn primary" href={p.live} target="_blank" rel="noreferrer">Open live demo ↗</a>}<a className="btn" href={p.code} target="_blank" rel="noreferrer">View source ↗</a></div></article></div>
        </section>

        <section id="skills"><div className="sectionTop"><div><div className="eyebrow">02 / Toolkit</div><h2>Built for the full stack.</h2></div><p className="intro">Comfortable moving from a responsive component to an API, data flow and cloud deployment.</p></div><div className="skills">{skills.map(g=><div className="skill" key={g[0]}><h3>{g[0]}</h3><ul>{g.slice(1).map(x=><li key={x}>— {x}</li>)}</ul></div>)}</div></section>

        <section id="experience"><div className="sectionTop"><div><div className="eyebrow">03 / Experience</div><h2>Enterprise experience.</h2></div><p className="intro">Product engineering, client delivery, UI modernization, microservices and security.</p></div>
          <div className="role"><div className="date">2025 — Present</div><div><h3>Software Developer</h3><div className="company">Concentrix Catalyst · India</div><p>Building product capabilities across React, Node.js, APIs, microservices and cloud. Recent work includes schema-registry-like services, dashboard refactoring and security fixes.</p></div></div>
          <div className="role"><div className="date">2022 — 2024</div><div><h3>Application Development Analyst</h3><div className="company">Accenture · Enterprise client delivery</div><p>Developed Angular applications, backend services and integrations while working with cross-functional teams on enterprise software.</p></div></div>
          <div className="role"><div className="date">2019 — 2022</div><div><h3>System Engineer</h3><div className="company">Tata Consultancy Services</div><p>Worked on frontend and backend engineering, performance optimization, reusable UI components and application modernization.</p></div></div>
        </section>

        <section><div className="about"><div className="card"><div className="eyebrow">What I value</div><p>Clean architecture, thoughtful UX, measurable performance and software another developer can understand six months later.</p></div><div className="card"><div className="eyebrow">Currently focused on</div><p>React + Node.js product work, Azure, AI-enabled workflows and practical freelance projects.</p></div></div></section>

        <section id="contact"><div className="contact"><div><div className="eyebrow">04 / Contact</div><h2>Have a product to build or improve?</h2><p>Tell me what you're trying to ship. I'm interested in focused freelance projects where I can own implementation end to end.</p></div><div className="actions"><a className="btn primary" href="mailto:rtaneja1584@gmail.com">Email me ↗</a><a className="btn darkBtn" href="https://github.com/RTdeveloper2" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
      </main>
      <footer><span>© 2026 Rahul Taneja</span><span>React · Node.js · Azure · Full-stack development</span></footer>
    </div>
  </div>;
}
