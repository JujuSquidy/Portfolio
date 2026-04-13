import './About.css';

/**
 * Short personal biography section.
 * The avatar placeholder and text blocks are designed to be easily
 * replaced with real content.
 */
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About <span className="highlight">Me</span>
        </h2>
        <p className="section-subtitle">A bit of background</p>

        <div className="about__grid">
          <div className="about__avatar-wrapper">
            <div className="about__avatar" aria-hidden="true">
              <span>YN</span>
            </div>
          </div>

          <div className="about__text">
            <p>
              A software developer with a passion for building things that live
              on the internet. From designing user interfaces to architecting
              back-end services, the goal is always the same: write code that is
              easy to read, easy to maintain, and enjoyable to use.
            </p>
            <p>
              When not writing code, time is spent exploring new technologies,
              contributing to open source, and tinkering with side projects that
              may or may not ever see the light of day.
            </p>
            <p>
              This portfolio is a living document — projects, skills, and
              experience will evolve here as work continues.
            </p>

            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">Location</span>
                <span>Your City, Country</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Education</span>
                <span>BSc Computer Science</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Availability</span>
                <span className="about__badge">Open to opportunities</span>
              </div>
            </div>

            <a
              href="/cv.pdf"
              className="btn btn--primary about__resume-btn"
              download
              aria-label="Download resume PDF"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
