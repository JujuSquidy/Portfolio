import { useTranslation } from 'react-i18next';
import './Hero.css';

/**
 * Full-viewport introductory section that greets visitors with the owner's
 * name, title, and three call-to-action buttons.
 */
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero section">
      <div className="container hero__content">
        <p className="hero__greeting">{t('hero.greeting')}</p>
        <h1 className="hero__name">
          Julian <span className="highlight">Machet</span>
        </h1>
        <h2 className="hero__title">{t('hero.title')}</h2>
        <p className="hero__description">{t('hero.description')}</p>
        <div className="hero__actions">
          <a href="#about" className="btn btn--outline">
            {t('hero.ctaAbout')}
          </a>
          <a href="#projects" className="btn btn--primary">
            {t('hero.ctaProjects')}
          </a>
          <a href="#contact" className="btn btn--outline">
            {t('hero.ctaContact')}
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
