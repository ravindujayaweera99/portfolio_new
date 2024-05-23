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

const skills = [
  {
    id: 1,
    name: "React.js",
    image: react,
  },
  {
    id: 2,
    name: "Node.js",
    image: node,
  },
  {
    id: 3,
    name: "Express.js",
    image: express,
  },
  {
    id: 4,
    name: "MongoDB",
    image: mongodb,
  },
  {
    id: 5,
    name: "HTML",
    image: html,
  },
  {
    id: 6,
    name: "CSS",
    image: css,
  },
  {
    id: 7,
    name: "Javascript",
    image: js,
  },
  {
    id: 8,
    name: "php",
    image: php,
  },
  {
    id: 9,
    name: "mySQL",
    image: mysql,
  },
  {
    id: 10,
    name: "Java",
    image: java,
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
            <div className="img-container">
              <img src={s.image} alt="tech-image" />
            </div>
            <h1>{s.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
