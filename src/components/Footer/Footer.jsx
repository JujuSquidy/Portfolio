import './Footer.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/JujuSquidy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-machet-04765b38a/' }
];

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Site footer with navigation links, social links, and a copyright notice.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <a href="#home" className="footer__logo">
            Portfolio
          </a>
          <nav aria-label="Footer navigation">
            <ul className="footer__nav">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__nav-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="footer__social" aria-label="Social media links">
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
            &copy; {year} Julian Machet. Built with React and Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
