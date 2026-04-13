import './Hero.css';

/**
 * Full-viewport introductory section that greets visitors with the owner's
 * name, title, and two call-to-action buttons.
 */
const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container hero__content">
        <p className="hero__greeting">Hello, I am</p>
        <h1 className="hero__name">
          Julian <span className="highlight">Machet</span>
        </h1>
        <h2 className="hero__title">Full-Stack Developer</h2>
        <p className="hero__description">
          I craft clean, performant web applications with a focus on great user
          experiences and maintainable code.
        </p>
        <div className="hero__actions">
          <a href="#about" className="btn btn--outline">
            About Me
          </a>
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch
          </a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}

export default Hero;
