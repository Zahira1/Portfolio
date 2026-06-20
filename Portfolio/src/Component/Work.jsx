<<<<<<< HEAD
import Reveal from './Reveal';

const EXPERIENCE = [
  {
    org: 'Texas A&M Forest Service',
    role: 'Geospatial Developer II',
    period: 'Oct 2022 — Present',
    location: 'College Station, TX',
    highlights: [
      'Architected responsive web mapping applications with React and JavaScript, optimized for desktop and mobile.',
      'Built and maintained custom widgets for ArcGIS Experience Builder and Web AppBuilder to meet specialized business requirements.',
      'Developed C#/.NET Core backends and optimized RESTful APIs serving large geospatial datasets with dynamic filtering.',
      'Automated geospatial data ingestion, validation, and publishing pipelines using Python (ArcPy), integrating external APIs and WMS sources.',
      'Authored Arcade expressions translating business rules into dynamic map layer and dashboard visualizations for policymakers.',
    ],
  },
  {
    org: 'Asian Institute of Technology',
    role: 'Research Associate',
    period: 'Nov 2020 — May 2022',
    location: 'Pathum Thani, Thailand',
    highlights: [
      'Built a real-time web app with Web AppBuilder, ArcGIS Dashboards, and AGOL to help policymakers monitor COVID-19.',
      'Developed Python ETL pipelines automating geospatial data ingestion and transformation from satellite and drone sources for post-disaster response.',
      'Led a team designing a low-cost, high-accuracy GNSS receiver, deployed across drone projects for ground control point collection.',
    ],
  },
  {
    org: 'YouthMappers',
    role: 'Research Fellow',
    period: 'Jan 2020 — Dec 2021',
    location: 'Remote',
    highlights: [
      'Led a multidisciplinary student team in a geospatial study of the Chepang tribe using open-source GIS tools.',
      'Generated data-driven visualizations to support evidence-based policymaker decisions.',
    ],
  },
  {
    org: 'Geoinformatic Center',
    role: 'Intern',
    period: 'Oct 2019 — Jan 2020',
    location: 'Pathum Thani, Thailand',
    highlights: [],
  },
];

const Work = () => {
  return (
    <section id="experience" aria-label="Work experience" className="bg-[#0b1220] text-gray-200 py-20 sm:py-28 border-t border-cyan-500/10">
      <div className="container mx-auto px-4 max-w-3xl">
        <Reveal>
          <p className="font-mono text-cyan-400 text-sm mb-2">
            <span aria-hidden="true">## </span>experience
          </p>
          <h2 className="text-3xl font-bold mb-12 text-white">Where I've worked</h2>
        </Reveal>

        <ol className="relative border-l border-cyan-500/20 pl-8 space-y-12">
          {EXPERIENCE.map((job, index) => (
            <Reveal as="li" key={`${job.org}-${job.period}`} delayMs={index * 100} className="relative group">
              <span
                className="absolute -left-[2.6rem] top-1.5 w-3 h-3 rounded-full bg-cyan-400 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
                aria-hidden="true"
              />
              <p className="font-mono text-xs text-cyan-300 mb-1">{job.period}</p>
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {job.org} · {job.location}
              </p>
              {job.highlights.length > 0 && (
                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-300">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Work;
=======
import { useState } from "react";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "Acme Corp · Full-time",
    date: "2022 — Present",
    desc: "Led the redesign of the core dashboard, improving load time by 40%. Mentored 3 junior developers and established a component library used across 5 product teams.",
    tags: ["React", "TypeScript", "GraphQL", "Figma"],
  },
  {
    title: "Frontend Developer",
    company: "Bright Labs · Full-time",
    date: "2020 — 2022",
    desc: "Built and shipped 12+ features for a SaaS platform serving 20k users. Owned the mobile-responsive overhaul from scratch.",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    title: "Junior Web Developer",
    company: "Studio Delta · Contract",
    date: "2018 — 2020",
    desc: "Developed marketing sites for clients in e-commerce and fintech. First exposure to CI/CD and agile workflows.",
    tags: ["JavaScript", "HTML/CSS", "WordPress"],
  },
];

const projects = [
  {
    emoji: "🛒",
    name: "ShopFlow",
    desc: "Open-source e-commerce checkout library with cart state management and payment hooks.",
    tags: ["React", "Stripe"],
    link: "https://github.com/you/shopflow",
    label: "View on GitHub",
  },
  {
    emoji: "📊",
    name: "Dashify",
    desc: "Drag-and-drop analytics dashboard builder with live JSON schema preview.",
    tags: ["Vue 3", "D3.js"],
    link: "https://dashify.demo",
    label: "Live demo",
  },
  {
    emoji: "🤖",
    name: "ReviewBot",
    desc: "GitHub Action that uses AI to review PRs and post inline comments automatically.",
    tags: ["Node.js", "Gemini API"],
    link: "https://github.com/you/reviewbot",
    label: "View on GitHub",
  },
  {
    emoji: "🎨",
    name: "Palette.ai",
    desc: "Generate accessible color palettes from a prompt. Exports to Figma, Tailwind, and CSS.",
    tags: ["Next.js", "OpenAI"],
    link: "https://palette.ai",
    label: "Live demo",
  },
];

export default function Work() {
  const [tab, setTab] = useState("jobs");

  return (
    <section style={{ maxWidth: 780, margin: "0 auto", padding: "3rem 1rem" }}>
      <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: 6 }}>
        Experience
      </p>
      <h2 style={{ fontSize: 28, fontWeight: 500, marginBottom: "2.5rem" }}>
        Where I've been &amp; what I've built
      </h2>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "1px solid #e5e5e5", marginBottom: "2rem" }}>
        {["jobs", "projects"].map((t) => (
          <button key={t} onClick={() => setTab(t)}
            style={{ background: "none", border: "none", borderBottom: tab === t ? "2px solid #111" : "2px solid transparent",
              padding: "8px 16px", fontSize: 14, fontWeight: tab === t ? 500 : 400,
              color: tab === t ? "#111" : "#888", cursor: "pointer", marginBottom: -1 }}>
            {t === "jobs" ? "Work history" : "Projects"}
          </button>
        ))}
      </div>

      {/* Jobs timeline */}
      {tab === "jobs" && (
        <div style={{ borderLeft: "1px solid #e5e5e5", paddingLeft: "1.5rem" }}>
          {jobs.map((job, i) => (
            <div key={i} style={{ position: "relative", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
              <div style={{ position: "absolute", left: -27, top: 7, width: 7, height: 7, borderRadius: "50%", background: "#111" }} />
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 4, marginBottom: 4 }}>
                <strong style={{ fontSize: 16 }}>{job.title}</strong>
                <span style={{ fontFamily: "monospace", fontSize: 12, color: "#888" }}>{job.date}</span>
              </div>
              <p style={{ fontSize: 14, color: "#888", margin: "0 0 8px" }}>{job.company}</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#555", margin: "0 0 10px" }}>{job.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "monospace", fontSize: 11, padding: "3px 10px", borderRadius: 20, border: "1px solid #ddd", color: "#666" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects grid */}
      {tab === "projects" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
          {projects.map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noreferrer"
              style={{ display: "block", border: "1px solid #e5e5e5", borderRadius: 12, padding: "1.25rem", textDecoration: "none", color: "inherit", transition: "border-color 0.15s, transform 0.15s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#aaa"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#e5e5e5"; e.currentTarget.style.transform = "translateY(0)"; }}>
              <span style={{ fontSize: 22, marginBottom: 10, display: "block" }}>{p.emoji}</span>
              <strong style={{ fontSize: 15, display: "block", marginBottom: 6 }}>{p.name}</strong>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: "0 0 12px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                {p.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "monospace", fontSize: 11, padding: "3px 10px", borderRadius: 20, border: "1px solid #ddd", color: "#666" }}>{tag}</span>
                ))}
              </div>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "#888" }}>{p.label} →</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
>>>>>>> c4d0905b78fb3cf97e6340d1c9938fd46f6b1c4d
