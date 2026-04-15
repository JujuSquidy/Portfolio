import { useTranslation } from 'react-i18next';
import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/JujuSquidy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-machet-04765b38a/' }
];

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

/**
 * Site footer with navigation links, social links, and a copyright notice.
 */
const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#home" className="footer__logo">
            {t('footer.logo')}
          </a>
          <nav aria-label="Footer navigation">
            <ul className="footer__nav">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <a href={href} className="footer__nav-link">
                    {t(`footer.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="footer__social" aria-label={t('footer.socialAria')}>
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} Julian Machet. {t('footer.builtWith')}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
