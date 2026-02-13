import "./Portfolio.css";
import sanlak from "../../assets/project-images/sanlak.png";
import portfolio from "../../assets/project-images/portfolio.png";
import coffee from "../../assets/project-images/coffee.png";
import dummy from "../../assets/project-images/dummy.webp";
import discussion from "../../assets/project-images/discussion.png";
import mern from "../../assets/project-images/mern.jpg";
import job from "../../assets/project-images/job.png";
import textSum from "../../assets/project-images/textSum.png";
import tailwindLanding from "../../assets/project-images/tailwindLanding.png";
import scubaus from "../../assets/project-images/scubaus.png";
import blog from "../../assets/project-images/blog.png";

const projects = [
  {
    id: 1,
    name: "Goal Setter Web App",
    desc: "Built using MERN stack with JWT authentication. Redux for state management and Axios for API calls.",
    tech: "React, Express.js, MongoDB, Node.js",
    img: mern,
    link: "https://github.com/ravindujayaweera99/goalbuddyapp",
  },
  {
    id: 2,
    name: "Job Listing Site",
    desc: "Built using React as frontend and JSON Server as backend.",
    tech: "React, JSON Server",
    img: job,
    link: "https://github.com/ravindujayaweera99/job_listing",
  },
  {
    id: 3,
    name: "ScubaUs Landing Page",
    desc: "Self-made business idea landing page. Currently expanding section by section.",
    tech: "React, Tailwind CSS",
    img: scubaus,
    link: "https://scubaus.vercel.app",
  },
  {
    id: 4,
    name: "AI Text Summarizer",
    desc: "Built with Node.js + Express.js using REST APIs.",
    tech: "Express.js, Node.js, REST APIs, HTML, CSS",
    img: textSum,
    link: "https://github.com/ravindujayaweera99/text-summarization",
  },
  {
    id: 5,
    name: "Full Stack Blog App",
    desc: "Users can create posts and comment. Includes Admin and User dashboards.",
    tech: "Laravel, Tailwind CSS, MySQL, HTML",
    img: blog,
    link: "https://github.com/ravindujayaweera99/blog_web_app.git",
  },
  {
    id: 6,
    name: "Tailwind Landing Page",
    desc: "Frontend Mentor challenge solution using Tailwind.",
    tech: "Tailwind CSS, HTML",
    img: tailwindLanding,
    link: "https://ravindujayaweera99.github.io/tailwind_landing/",
  },
  {
    id: 7,
    name: "Personal Portfolio",
    desc: "The portfolio website you are currently viewing.",
    tech: "React, CSS",
    img: portfolio,
    link: "/",
  },
  {
    id: 8,
    name: "Sales & Inventory System",
    desc: "Full stack web app for a paint shop to manage sales and inventory.",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    img: dummy,
    link: "https://github.com/ravindujayaweera99/Paint_Shop_App_New",
  },
  {
    id: 9,
    name: "Sanlak (Pvt) Ltd Website",
    desc: "Official company website to showcase services and projects.",
    tech: "HTML, CSS, JavaScript, Figma",
    img: sanlak,
    link: "https://www.sanlak.lk",
  },
  {
    id: 10,
    name: "Coffee Shop Website",
    desc: "Client website for a coffee shop in Romania.",
    tech: "HTML, CSS, JavaScript, Figma",
    img: coffee,
    link: "https://ravindujayaweera99.github.io/landing_coffee/",
  },
  {
    id: 11,
    name: "Discussion Website Front-end",
    desc: "Front-end only discussion web application for a client in Malta.",
    tech: "HTML, CSS, Figma",
    img: discussion,
    link: "https://ravindujayaweera99.github.io/Discussion_web_frontend/",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio2" id="portfolio">
      <div className="portfolio2-bg" aria-hidden="true">
        <span className="pblob p1" />
        <span className="pblob p2" />
      </div>

      <header className="portfolio2-header">
        <p className="portfolio2-kicker">Portfolio</p>
        <h2 className="portfolio2-title">Projects I worked on</h2>
        <p className="portfolio2-sub">
          Projects focused on full-stack delivery, clean UI, and real world workflows.
        </p>
      </header>

      <div className="portfolio2-grid">
        {projects.map((p) => (
          <a
            key={p.id}
            className="p-card"
            href={p.link}
            target={p.link === "/" ? "_self" : "_blank"}
            rel={p.link === "/" ? undefined : "noreferrer"}
          >
            <div className="p-media">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="p-shade" aria-hidden="true" />
              <div className="p-topline" aria-hidden="true" />
            </div>

            <div className="p-body">
              <h3 className="p-title">{p.name}</h3>
              <p className="p-desc">{p.desc}</p>
              <p className="p-tech">{p.tech}</p>
            </div>

            <span className="p-cta" aria-hidden="true">
              View →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
