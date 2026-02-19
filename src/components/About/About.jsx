import "./About.css";

const About = () => {
  return (
    <section className="aboutC" id="about">
      <div className="aboutC-bg" aria-hidden="true" />

      <div className="aboutC-wrap">
        <header className="aboutC-header">
          <p className="aboutC-kicker">About</p>
          <h2 className="aboutC-title">About Me</h2>
          <p className="aboutC-sub">
            Full Stack engineering mindset with a strong focus on UI quality and
            production ready delivery.
          </p>
        </header>

        <div className="aboutC-card">
          <div className="aboutC-rail" aria-hidden="true" />

          <p className="aboutC-text">
            Software Engineer with experience in full stack web development and scalable
            system design. Experienced in building, enhancing, and maintaining applications
            using modern frameworks and industry standard development practices. Strong
            background in frontend and backend development, API integration, and database
            design and development.
          </p>

          <div className="aboutC-stats">
            <div className="aStat">
              <p className="k">Focus</p>
              <p className="v">Full-Stack</p>
            </div>
            <div className="aStat">
              <p className="k">Strength</p>
              <p className="v">Clean UI</p>
            </div>
            <div className="aStat">
              <p className="k">Delivery</p>
              <p className="v">Reliable</p>
            </div>
          </div>
        </div>

        <div className="aboutC-chips" aria-hidden="true">
          <span className="chip">React</span>
          <span className="chip">Node / Express</span>
          <span className="chip">Java / SpringBoot</span>
          <span className="chip">Laravel</span>
          <span className="chip">REST APIs</span>
          <span className="chip">MySQL / PostgreSQL / MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default About;
