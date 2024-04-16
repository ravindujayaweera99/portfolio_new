import "./Skills.css";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/javascript.png";
import php from "../../assets/php.png";
import mysql from "../../assets/mysql.png";
import node from "../../assets/node-js.png";
import mongodb from "../../assets/mongodb.png";
import postgre from "../../assets/postgresql.png";
import java from "../../assets/java.png";
import figma from "../../assets/figma.png";

const skills = [
  {
    id: 1,
    name: "HTML",
    image: html,
  },
  {
    id: 2,
    name: "CSS",
    image: css,
  },
  {
    id: 3,
    name: "Javascript",
    image: js,
  },
  {
    id: 4,
    name: "React",
    image: react,
  },
  {
    id: 5,
    name: "php",
    image: php,
  },
  {
    id: 6,
    name: "mySQL",
    image: mysql,
  },
  {
    id: 7,
    name: "MongoDB",
    image: mongodb,
  },
  {
    id: 8,
    name: "PostgreSQL",
    image: postgre,
  },
  {
    id: 9,
    name: "Java",
    image: java,
  },
  {
    id: 10,
    name: "Node.js",
    image: node,
  },
  {
    id: 11,
    name: "Figma",
    image: figma,
  },
];
const Skills = () => {
  return (
    <div className="skills-wrapper" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills">
        {skills.map((s) => (
          <div key={s.id} className="skill">
            <img src={s.image} alt="tech-image" />
            <h1>{s.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
