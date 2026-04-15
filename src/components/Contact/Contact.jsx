import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

/**
 * Contact section with a simple form.
 * Submission is handled client-side only; the action URL should be
 * replaced with a real back-end endpoint or a service such as Formspree.
 */
const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Replace the URL below with a real endpoint.
    // Using a short delay here to simulate async submission.
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Error for now since there is no real endpoint, but this is where you would handle the response.
    setStatus('error');
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section-title">
          {t('contact.titleBefore')} <span className="highlight">{t('contact.titleHighlight')}</span>
        </h2>
        <p className="section-subtitle">{t('contact.subtitle')}</p>

        <div className="contact__layout">
          <div className="contact__info">
            <h3>{t('contact.workTogether')}</h3>
            <p>{t('contact.workTogetherText')}</p>
            <ul className="contact__channels">
              <li>
                <span className="contact__channel-label">{t('contact.email')}</span>
                <a href="mailto:machet.julian@gmail.com" className="contact__channel-link">
                  machet.julian@gmail.com
                </a>
              </li>
              <li>
                <span className="contact__channel-label">{t('contact.github')}</span>
                <a
                  href="https://github.com/JujuSquidy"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__channel-link"
                >
                  github.com/JujuSquidy
                </a>
              </li>
              <li>
                <span className="contact__channel-label">{t('contact.linkedin')}</span>
                <a
                  href="https://www.linkedin.com/in/julian-machet-04765b38a/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__channel-link"
                >
                  linkedin.com/in/julian-machet-04765b38a/
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div>
              <p className="contact__disclaimer">{t('contact.disclaimer')}</p>
            </div>

            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-input"
                placeholder={t('contact.namePlaceholder')}
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-input"
                placeholder={t('contact.emailPlaceholder')}
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder={t('contact.messagePlaceholder')}
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('contact.sending') : t('contact.send')}
            </button>

            {status === 'success' && (
              <p className="contact__feedback contact__feedback--success" role="status">
                {t('contact.success')}
              </p>
            )}
            {status === 'error' && (
              <p className="contact__feedback contact__feedback--error" role="alert">
                {t('contact.error')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
