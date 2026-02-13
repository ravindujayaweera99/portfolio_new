import "./About.css";

const About = () => {
  return (
    <section className="about2" id="about">
      <div className="about2-bg" aria-hidden="true">
        <span className="ablob a1" />
        <span className="ablob a2" />
      </div>

      <div className="about2-wrap">
        <header className="about2-header">
          <p className="about2-kicker">About</p>
          <h2 className="about2-title">A little about me</h2>
          <p className="about2-sub">
            Full-stack engineering mindset with a strong focus on UI quality and
            production-ready delivery.
          </p>
        </header>

        <div className="about2-card">
          <div className="about2-rail" aria-hidden="true" />

          <p className="about2-text">
            Software Engineer with experience in full stack web development and scalable
            system design. Experienced in building, enhancing, and maintaining applications
            using modern frameworks and industry-standard development practices. Strong
            background in frontend and backend development, API integration, and database
            design and development.
          </p>

          <div className="about2-stats">
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

        <div className="about2-chips" aria-hidden="true">
          <span className="chip">React</span>
          <span className="chip">Node / Express</span>
          <span className="chip">Java / SpringBoot</span>
          <span className="chip">Laravel</span>
          <span className="chip">REST APIs</span>
          <span className="chip">MySQL / MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default About;
