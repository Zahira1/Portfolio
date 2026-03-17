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
