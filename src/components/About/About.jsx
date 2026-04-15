import { useTranslation } from 'react-i18next';
import './About.css';

/**
 * Short personal biography section.
 * The avatar placeholder and text blocks are designed to be easily
 * replaced with real content.
 */
const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          {t('about.titleBefore')} <span className="highlight">{t('about.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">{t('about.subtitle')}</p>

        <div className="about__grid">
          <div className="about__avatar-wrapper">
            <div className="about__avatar" aria-hidden="true">
              <span>JM</span>
            </div>
          </div>

          <div className="about__text">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>

            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">{t('about.details.locationLabel')}</span>
                <span>{t('about.details.locationValue')}</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">{t('about.details.educationLabel')}</span>
                <span>{t('about.details.educationValue')}</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">{t('about.details.availabilityLabel')}</span>
                <span className="about__badge">{t('about.details.availabilityValue')}</span>
              </div>
            </div>

            <a
              href="/CV_Julian_Machet.pdf"
              className="btn btn--primary about__resume-btn"
              download
              aria-label={t('about.downloadResumeAria')}
            >
              {t('about.downloadResume')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
