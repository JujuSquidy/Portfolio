import { useTranslation } from 'react-i18next';
import './Contact.css';

const CHANNELS = [
  {
    key: 'email',
    href: 'mailto:machet.julian@gmail.com',
    label: 'machet.julian@gmail.com',
    external: false,
  },
  {
    key: 'github',
    href: 'https://github.com/JujuSquidy',
    label: 'github.com/JujuSquidy',
    external: true,
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/julian-machet-04765b38a/',
    label: 'linkedin.com/in/julian-machet-04765b38a/',
    external: true,
  },
];

/**
 * Contact section listing the available contact channels.
 */
const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section-title">
          {t('contact.titleBefore')} <span className="highlight">{t('contact.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="contact__info">
          <h3>{t('contact.workTogether')}</h3>
          <p>{t('contact.workTogetherText')}</p>
        </div>

        <ul className="contact__channels">
          {CHANNELS.map(({ key, href, label, external }) => (
            <li key={key}>
              <a
                href={href}
                className="contact__channel"
                {...(external && { target: '_blank', rel: 'noreferrer' })}
              >
                <span className="contact__channel-label">{t(`contact.${key}`)}</span>
                <span className="contact__channel-link">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
