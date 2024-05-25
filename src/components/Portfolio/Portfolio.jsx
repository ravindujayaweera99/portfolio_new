import "./Portfolio.css";
import sanlak from "../../assets/project-images/sanlak.png";
import portfolio from "../../assets/project-images/portfolio.png";
import coffee from "../../assets/project-images/coffee.png";
import dummy from "../../assets/project-images/dummy.webp";
import discussion from "../../assets/project-images/discussion.png";

const projects = [
  {
    id: 1,
    name: "Goal Setter Web App",
    desc: "This project developed using the MERN stack (MongoDB, Express.js, React, Node.js), incorporating JWT for secure authentication. Leveraging Redux for state management and Axios for API calls.",
    tech: "React, Express.js, MongoDB, Node.js",
    img: dummy,
    link: "https://github.com/ravindujayaweera99/goalbuddyapp",
  },
  {
    id: 2,
    name: "Personal Portfolio",
    desc: "This is the project you are currently visiting in.",
    tech: "React, CSS",
    img: portfolio,
    link: "/",
  },
  {
    id: 3,
    name: "Sales and Inventory System",
    desc: "This is a full stack web app created for a Paint shop to control their day to day sales and Inventory management work.",
    tech: "HTML, CSS, Javascript, php, mySQL",
    img: dummy,
    link: "https://github.com/ravindujayaweera99/Paint_Shop_App_New",
  },
  {
    id: 4,
    name: "Sanlak (Pvt) Ltd Official Website",
    desc: "Official Website of SANLAK (Pvt) Ltd.This is a website using to showcase their services and projects to customers.",
    tech: "HTML, CSS, Javascript, Figma",
    img: sanlak,
    link: "https://www.sanlak.lk",
  },
  {
    id: 5,
    name: "Coffee Shop Website",
    desc: "Specially made for a client from Romania.This is a website for a Coffee shop that showcase their products and details.",
    tech: "HTML, CSS, Javascript, Figma",
    img: coffee,
    link: "https://ravindujayaweera99.github.io/landing_coffee/",
  },
  {
    id: 6,
    name: "Discussion Website Front-end",
    desc: "Specially made for a client from Malta.This is only a front end Development for a discussion web application.",
    tech: "HTML, CSS, Figma",
    img: discussion,
    link: "https://ravindujayaweera99.github.io/Discussion_web_frontend/",
  },
];

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Portfolio</h1>
        <div className="portfolio">
          {projects.map((p) => (
            <div className="project" key={p.id}>
              <a href={p.link} target="_blank">
                <img src={p.img} alt="project-image" />
                <div className="details">
                  <h1>{p.name}</h1>
                  <p>{p.desc}</p>
                  <h3>Used Technologeis</h3>
                  <p id="tech-stack">{p.tech}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
