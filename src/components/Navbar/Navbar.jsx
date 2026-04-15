import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import useActiveSection from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact'];

/**
 * Fixed top navigation bar with scroll-aware active link highlighting
 * and a responsive hamburger menu for narrow screens.
 */
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
    closeMenu();
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          {t('navbar.logo')}
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Main navigation">
          <ul className="navbar__list">
            {NAV_LINKS.map(({ key, href }) => {
              const id = href.replace('#', '');
              return (
                <li key={id}>
                  <a
                    href={href}
                    className={`navbar__link${activeId === id ? ' navbar__link--active' : ''}`}
                    onClick={closeMenu}
                  >
                    {t(`navbar.links.${key}`)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar__lang-btn"
          aria-label={i18n.language === 'fr' ? 'Switch language to English' : 'Switch language to French'}
          title={i18n.language === 'fr' ? 'Switch language to English' : 'Switch language to French'}
          onClick={toggleLanguage}
        >
          {i18n.language === 'fr' ? 'FR' : 'EN'}
        </button>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          aria-label={menuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
