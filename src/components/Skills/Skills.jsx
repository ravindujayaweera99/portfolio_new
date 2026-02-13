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

const skills = [
  { id: 1, name: "React.js", image: react },
  { id: 2, name: "Node.js", image: node },
  { id: 3, name: "Express.js", image: express },
  { id: 4, name: "MongoDB", image: mongodb },
  { id: 5, name: "Java", image: java },
  { id: 6, name: "Spring Boot", image: springboot },
  { id: 7, name: "Laravel", image: laravel },
  { id: 8, name: "Tailwind CSS", image: tailwind },
  { id: 9, name: "HTML", image: html },
  { id: 10, name: "CSS", image: css },
  { id: 11, name: "JavaScript", image: js },
  { id: 12, name: "PHP", image: php },
  { id: 13, name: "MySQL", image: mysql },
  { id: 14, name: "Figma", image: figma },
];

const Skills = () => {
  return (
    <section className="skills2" id="skills">
      <div className="skills2-bg" aria-hidden="true">
        <span className="skills2-spot s1" />
        <span className="skills2-spot s2" />
        <span className="skills2-spot s3" />
      </div>

      <header className="skills2-header">
        <p className="portfolio2-kicker">Skills</p>
        <h2 className="skills2-title">Tech Stack</h2>
      </header>

      <div className="skills2-frame">
        <div className="skills2-rail" />

        <div className="skills2-chips">
          {skills.map((s) => (
            <div key={s.id} className="skill-chip">
              <span className="chip-glow" aria-hidden="true" />
              <span className="chip-icon">
                <img src={s.image} alt={s.name} loading="lazy" />
              </span>
              <span className="chip-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
