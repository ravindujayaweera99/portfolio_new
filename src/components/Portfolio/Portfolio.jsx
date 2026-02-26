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
import smart from "../../assets/project-images/smart.png";

/* tech logos */
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

const projects = [
  {
    id: 1,
    name: "Smart Appointment and Notification Platform",
    desc: "Appointment booking + notifications with scalable architecture.",
    tech: "React, TailwindCSS, SpringBoot, PostgreSQL, RabbitMQ, Docker",
    img: smart,
    link: "https://github.com/ravindujayaweera99/Smart-Appointment-Notification-Platform",
    status: "Ongoing",
  },
  {
    id: 2,
    name: "Goal Setter Web App",
    desc: "MERN app with JWT auth, Redux state, and API integration.",
    tech: "React, Express.js, MongoDB, Node.js",
    img: mern,
    link: "https://github.com/ravindujayaweera99/goalbuddyapp",
    status: "Completed",
  },
  {
    id: 3,
    name: "Job Listing Site",
    desc: "React frontend with JSON Server backend for rapid prototyping.",
    tech: "React, JSON Server",
    img: job,
    link: "https://github.com/ravindujayaweera99/job_listing",
    status: "Completed",
  },
  {
    id: 4,
    name: "ScubaUs Landing Page",
    desc: "Business landing page, expanding section by section.",
    tech: "React, Tailwind CSS",
    img: scubaus,
    link: "https://scubaus.vercel.app",
    status: "Ongoing",
  },
  {
    id: 5,
    name: "AI Text Summarizer",
    desc: "Node + Express app consuming REST APIs to summarize text.",
    tech: "Express.js, Node.js, REST APIs, HTML, CSS",
    img: textSum,
    link: "https://github.com/ravindujayaweera99/text-summarization",
    status: "Completed",
  },
  {
    id: 6,
    name: "Full Stack Blog App",
    desc: "Posts + comments with separate Admin and User dashboards.",
    tech: "Laravel, Tailwind CSS, MySQL, HTML",
    img: blog,
    link: "https://github.com/ravindujayaweera99/blog_web_app.git",
    status: "Completed",
  },
  {
    id: 7,
    name: "Tailwind Landing Page",
    desc: "Frontend Mentor solution built with Tailwind.",
    tech: "Tailwind CSS, HTML",
    img: tailwindLanding,
    link: "https://ravindujayaweera99.github.io/tailwind_landing/",
    status: "Completed",
  },
  {
    id: 8,
    name: "Personal Portfolio",
    desc: "The portfolio website you are currently viewing.",
    tech: "React, CSS",
    img: portfolio,
    link: "/",
    status: "Completed",
  },
  {
    id: 9,
    name: "Sales & Inventory System",
    desc: "Full stack app to manage inventory and sales for a paint shop.",
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
    img: dummy,
    link: "https://github.com/ravindujayaweera99/Paint_Shop_App_New",
    status: "Completed",
  },
  {
    id: 10,
    name: "Sanlak (Pvt) Ltd Website",
    desc: "Official company website showcasing services and projects.",
    tech: "HTML, CSS, JavaScript, Figma",
    img: sanlak,
    link: "https://www.sanlak.lk",
    status: "Completed",
  },
  {
    id: 11,
    name: "Coffee Shop Website",
    desc: "Client website for a coffee shop in Romania.",
    tech: "HTML, CSS, JavaScript, Figma",
    img: coffee,
    link: "https://ravindujayaweera99.github.io/landing_coffee/",
    status: "Completed",
  },
  {
    id: 12,
    name: "Discussion Website Front-end",
    desc: "Front-end only discussion web app for a client in Malta.",
    tech: "HTML, CSS, Figma",
    img: discussion,
    link: "https://ravindujayaweera99.github.io/Discussion_web_frontend/",
    status: "Completed",
  },
];

const techLogoMap = {
  React: react,
  "TailwindCSS": tailwind,
  "Tailwind CSS": tailwind,
  HTML: html,
  CSS: css,
  JavaScript: js,
  PHP: php,
  MySQL: mysql,
  Node: node,
  "Node.js": node,
  "Express.js": express,
  Express: express,
  MongoDB: mongodb,
  Java: java,
  Figma: figma,
  Laravel: laravel,
  SpringBoot: springboot,
  "Spring Boot": springboot,
  RabbitMQ: rabbitmq,
  Docker: docker,
  PostgreSQL: postgresql,
  "REST APIs": null,
  "JSON Server": null,
};

const toChips = (tech) =>
  tech
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

const statusClass = (status) =>
  status === "Completed" ? "is-done" : "is-wip";

const Portfolio = () => {
  return (
    <section className="portC" id="portfolio">
      <div className="portC-bg" aria-hidden="true" />

      <div className="portC-wrap">
        <header className="portC-header">
          <p className="portC-kicker">Portfolio</p>
          <h2 className="portC-title">Projects I worked on</h2>
          <p className="portC-sub">
            Full-stack delivery, clean UI, and real-world workflows.
          </p>
        </header>

        <div className="portC-grid">
          {projects.map((p) => {
            const techList = toChips(p.tech);
            const maxTech = 6;
            const shown = techList.slice(0, maxTech);
            const extra = techList.length - shown.length;

            return (
              <a
                key={p.id}
                className="pC-card"
                href={p.link}
                target={p.link === "/" ? "_self" : "_blank"}
                rel={p.link === "/" ? undefined : "noreferrer"}
              >
                <div className="pC-media">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <div className={`pC-status ${statusClass(p.status)}`}>
                    <span className="pC-dot" aria-hidden="true" />
                    {p.status}
                  </div>

                  <div className="pC-shade" aria-hidden="true" />
                  <div className="pC-rail" aria-hidden="true" />
                </div>

                <div className="pC-body">
                  <div className="pC-row">
                    <h3 className="pC-title">{p.name}</h3>
                    <span className="pC-cta">View ↗</span>
                  </div>

                  <p className="pC-desc">{p.desc}</p>

                  {/* Compact Tech Logo Bar */}
                  <div className="pC-techbar">
                    <div
                      className="pC-techIcons"
                      aria-label={`Tech stack for ${p.name}`}
                    >
                      {shown.map((t) => {
                        const logo = techLogoMap[t];
                        return (
                          <span
                            key={`${p.id}-${t}`}
                            className={`tIcon ${logo ? "" : "tIconText"}`}
                            title={t}
                            aria-label={t}
                          >
                            {logo ? (
                              <img src={logo} alt={t} loading="lazy" />
                            ) : (
                              <span className="tTiny">{t}</span>
                            )}
                          </span>
                        );
                      })}

                      {extra > 0 && (
                        <span
                          className="tMore"
                          title={techList.join(", ")}
                          aria-label={`${extra} more technologies`}
                        >
                          +{extra}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
