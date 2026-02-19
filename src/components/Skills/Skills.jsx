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

const skills = [
  { id: 1, name: "React.js", image: react, group: "Frontend" },
  { id: 2, name: "HTML", image: html, group: "Frontend" },
  { id: 3, name: "CSS", image: css, group: "Frontend" },
  { id: 4, name: "JavaScript", image: js, group: "Frontend" },
  { id: 5, name: "Tailwind CSS", image: tailwind, group: "Frontend" },
  { id: 6, name: "Figma", image: figma, group: "Design" },

  { id: 7, name: "Node.js", image: node, group: "Backend" },
  { id: 8, name: "Express.js", image: express, group: "Backend" },
  { id: 9, name: "Java", image: java, group: "Backend" },
  { id: 10, name: "Spring Boot", image: springboot, group: "Backend" },
  { id: 11, name: "Laravel", image: laravel, group: "Backend" },
  { id: 12, name: "PHP", image: php, group: "Backend" },

  { id: 13, name: "MySQL", image: mysql, group: "Database" },
  { id: 14, name: "PostgreSQL", image: postgresql, group: "Database" },
  { id: 15, name: "MongoDB", image: mongodb, group: "Database" },

  { id: 16, name: "Docker", image: docker, group: "Tools" },
  { id: 17, name: "RabbitMQ", image: rabbitmq, group: "Tools" },
];

const GROUPS = ["Frontend", "Backend", "Database", "Tools", "Design"];

const Skills = () => {
  return (
    <section className="skillsC" id="skills">
      <div className="skillsC-wrap">
        <header className="skillsC-header">
          <p className="skillsC-kicker">Skills</p>
          <h2 className="skillsC-title">Tech Stack</h2>
          <p className="skillsC-sub">
            My toolkit for building modern, production ready applications.
          </p>
        </header>

        <div className="skillsC-panel">
          <div className="skillsC-grid">
            {GROUPS.map((g) => (
              <div key={g} className="skillsC-col">
                <div className="skillsC-colHead">
                  <p className="skillsC-colTitle">{g}</p>
                  <div className="skillsC-colLine" aria-hidden="true" />
                </div>

                <div className="skillsC-list">
                  {skills
                    .filter((s) => s.group === g)
                    .map((s) => (
                      <div key={s.id} className="skillC">
                        <span className="skillC-icon">
                          <img src={s.image} alt={s.name} loading="lazy" />
                        </span>
                        <span className="skillC-name">{s.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="skillsC-footer">
            <div className="skillsC-note">
              <span className="dot" aria-hidden="true" />
              I Prefer clean UI, Efficient Backend, stable APIs, and maintainable codebases.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
