import { useMemo, useState } from "react";
import "./Skills.css";

import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node-js.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import java from "../../assets/java.png";
import figma from "../../assets/figma.png";
import tailwind from "../../assets/tailwind.png";
import laravel from "../../assets/laravel.png";
import springboot from "../../assets/springboot.png";
import rabbitmq from "../../assets/rabbitmq.png";
import docker from "../../assets/docker.png";
import postgresql from "../../assets/postgresql.png";
import csharp from "../../assets/csharp.png";
import dotnet from "../../assets/dotnet.png";

const skills = [
  // ===== Frameworks & Libraries =====
  { id: 1, name: "React.js", image: react, group: "Frameworks", type: "Frontend" },
  { id: 2, name: "Tailwind CSS", image: tailwind, group: "Frameworks", type: "Frontend" },

  { id: 3, name: "Node.js", image: node, group: "Frameworks", type: "Backend" },
  { id: 4, name: "Express.js", image: express, group: "Frameworks", type: "Backend" },
  { id: 5, name: "Spring Boot", image: springboot, group: "Frameworks", type: "Backend" },
  { id: 6, name: "Laravel", image: laravel, group: "Frameworks", type: "Backend" },
  { id: 7, name: ".NET", image: dotnet, group: "Frameworks", type: "Backend" },

  // ===== Languages =====
  { id: 8, name: "JavaScript", image: js, group: "Languages" },
  { id: 9, name: "Java", image: java, group: "Languages" },
  { id: 10, name: "C#", image: csharp, group: "Languages" },
  { id: 11, name: "PHP", image: php, group: "Languages" },

  // ===== Markup & Styling =====
  { id: 12, name: "HTML", image: html, group: "Markup" },
  { id: 13, name: "CSS", image: css, group: "Markup" },

  // ===== Design =====
  { id: 14, name: "Figma", image: figma, group: "Design" },

  // ===== Databases =====
  { id: 15, name: "MySQL", image: mysql, group: "Databases" },
  { id: 16, name: "PostgreSQL", image: postgresql, group: "Databases" },
  { id: 17, name: "MongoDB", image: mongodb, group: "Databases" },

  // ===== Tools =====
  { id: 18, name: "Docker", image: docker, group: "Tools" },
  { id: 19, name: "RabbitMQ", image: rabbitmq, group: "Tools" },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "Languages", label: "Languages" },
  { key: "Databases", label: "Databases" },
  { key: "Tools", label: "Tools" },
  { key: "Design", label: "Design" },
  { key: "Markup", label: "Markup" },
];

const SECTION_ORDER = ["Frameworks", "Languages", "Markup", "Databases", "Tools", "Design"];

function sectionTitle(group) {
  if (group === "Frameworks") return "Frameworks & Libraries";
  return group;
}

const Skills = () => {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchText = normalizedQuery
        ? s.name.toLowerCase().includes(normalizedQuery)
        : true;

      const matchFilter =
        active === "all"
          ? true
          : active === "frontend"
          ? s.type === "Frontend"
          : active === "backend"
          ? s.type === "Backend"
          : s.group === active;

      // In Frameworks group, Frontend/Backend filters apply. Others: by group key.
      return matchText && matchFilter;
    });
  }, [active, normalizedQuery]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const s of filtered) {
      const k = s.group;
      if (!map.has(k)) map.set(k, []);
      map.get(k).push(s);
    }

    // Stable ordering by SECTION_ORDER
    const ordered = [];
    for (const key of SECTION_ORDER) {
      if (map.has(key)) ordered.push([key, map.get(key)]);
    }
    // Anything else (if you add later)
    for (const [k, v] of map.entries()) {
      if (!SECTION_ORDER.includes(k)) ordered.push([k, v]);
    }

    return ordered;
  }, [filtered]);

  return (
    <section className="skillsX" id="skills">
      <div className="skillsX-wrap">
        <header className="skillsX-header">
          <p className="skillsX-kicker">Skills</p>
          <h2 className="skillsX-title">Tech Stack</h2>
          <p className="skillsX-sub">Modern tools I use to ship production-ready applications.</p>
        </header>

        <div className="skillsX-panel">
          {/* Controls */}
          <div className="skillsX-controls">
            <div className="skillsX-search">
              <span className="skillsX-searchIcon" aria-hidden="true">
                ⌕
              </span>
              <input
                className="skillsX-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills (e.g., React, Docker, Java)..."
                aria-label="Search skills"
              />
              {query ? (
                <button className="skillsX-clear" onClick={() => setQuery("")} aria-label="Clear search">
                  ×
                </button>
              ) : null}
            </div>

            <div className="skillsX-filters" role="tablist" aria-label="Skill filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  className={`skillsX-pill ${active === f.key ? "isActive" : ""}`}
                  onClick={() => setActive(f.key)}
                  type="button"
                  role="tab"
                  aria-selected={active === f.key}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="skillsX-body">
            {grouped.length === 0 ? (
              <div className="skillsX-empty">
                <p className="skillsX-emptyTitle">No matches</p>
                <p className="skillsX-emptySub">Try a different keyword or filter.</p>
              </div>
            ) : (
              grouped.map(([group, items]) => (
                <section key={group} className="skillsX-section">
                  <div className="skillsX-sectionHead">
                    <p className="skillsX-sectionTitle">{sectionTitle(group)}</p>
                    <div className="skillsX-sectionLine" aria-hidden="true" />
                    <span className="skillsX-count">{items.length}</span>
                  </div>

                  {/* For Frameworks: show badges indicating FE/BE */}
                  <div className="skillsX-grid">
                    {items.map((s) => (
                      <article key={s.id} className="skillCard">
                        <span className="skillCard-icon" aria-hidden="true">
                          <img src={s.image} alt={s.name} loading="lazy" />
                        </span>

                        <div className="skillCard-meta">
                          <p className="skillCard-name">{s.name}</p>
                          <div className="skillCard-tags">
                            {s.group === "Frameworks" && s.type ? (
                              <span className="tag">{s.type}</span>
                            ) : null}
                            <span className="tag isDim">{s.group}</span>
                          </div>
                        </div>

                        <span className="skillCard-glow" aria-hidden="true" />
                      </article>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="skillsX-footer">
            <div className="skillsX-note">
              <span className="dot" aria-hidden="true" />
              Clean UI • Efficient backend • Stable APIs • Maintainable codebases
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;