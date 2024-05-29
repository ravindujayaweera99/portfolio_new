import "./Portfolio.css";
import sanlak from "../../assets/project-images/sanlak.png";
import portfolio from "../../assets/project-images/portfolio.png";
import coffee from "../../assets/project-images/coffee.png";
import dummy from "../../assets/project-images/dummy.webp";
import discussion from "../../assets/project-images/discussion.png";
import mern from "../../assets/project-images/mern.jpg";
import job from "../../assets/project-images/job.png";
import textSum from "../../assets/project-images/textSum.png"

const projects = [
  {
    id: 1,
    name: "Goal Setter Web App",
    desc: "This project developed using the MERN stack (MongoDB, Express.js, React, Node.js), incorporating JWT for secure authentication. Leveraging Redux for state management and Axios for API calls.",
    tech: "React, Express.js, MongoDB, Node.js",
    img: mern,
    link: "https://github.com/ravindujayaweera99/goalbuddyapp",
  },
  {
    id: 2,
    name: "Job Listing Site",
    desc: "This project developed using React as a Front end and JSON server as a backend ",
    tech: "React, JSON Server",
    img: job,
    link: "https://github.com/ravindujayaweera99/job_listing",
  },
  {
    id: 3,
    name: "AI Text Summerizer",
    desc: "This project developed using the Express and Node.js and REST APIs",
    tech: "Express.js, Node.js, REST APIs, HTML, CSS",
    img: textSum,
    link: "https://github.com/ravindujayaweera99/text-summarization",
  },
  {
    id: 4,
    name: "Personal Portfolio",
    desc: "This is the project you are currently visiting in.",
    tech: "React, CSS",
    img: portfolio,
    link: "/",
  },
  {
    id: 5,
    name: "Sales and Inventory System",
    desc: "This is a full stack web app created for a Paint shop to control their day to day sales and Inventory management work.",
    tech: "HTML, CSS, Javascript, php, mySQL",
    img: dummy,
    link: "https://github.com/ravindujayaweera99/Paint_Shop_App_New",
  },
  {
    id: 6,
    name: "Sanlak (Pvt) Ltd Official Website",
    desc: "Official Website of SANLAK (Pvt) Ltd.This is a website using to showcase their services and projects to customers.",
    tech: "HTML, CSS, Javascript, Figma",
    img: sanlak,
    link: "https://www.sanlak.lk",
  },
  {
    id: 7,
    name: "Coffee Shop Website",
    desc: "Specially made for a client from Romania.This is a website for a Coffee shop that showcase their products and details.",
    tech: "HTML, CSS, Javascript, Figma",
    img: coffee,
    link: "https://ravindujayaweera99.github.io/landing_coffee/",
  },
  {
    id: 8,
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
