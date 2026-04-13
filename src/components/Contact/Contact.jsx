import { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

/**
 * Contact section with a simple form.
 * Submission is handled client-side only; the action URL should be
 * replaced with a real back-end endpoint or a service such as Formspree.
 */
function Contact() {
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

    // Optimistic success — replace this block with a real fetch call.
    setStatus('success');
    setForm(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section-title">
          Get in <span className="highlight">Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a question, a project idea, or just want to say hi?
        </p>

        <div className="contact__layout">
          <div className="contact__info">
            <h3>Let&apos;s work together</h3>
            <p>
              Whether it is a freelance project, a full-time role, or a
              collaborative side project, the inbox is always open.
            </p>
            <ul className="contact__channels">
              <li>
                <span className="contact__channel-label">Email</span>
                <a href="mailto:hello@example.com" className="contact__channel-link">
                  hello@example.com
                </a>
              </li>
              <li>
                <span className="contact__channel-label">GitHub</span>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__channel-link"
                >
                  github.com/yourusername
                </a>
              </li>
              <li>
                <span className="contact__channel-label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__channel-link"
                >
                  linkedin.com/in/yourusername
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                className="form-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-input form-textarea"
                placeholder="Tell me about your project..."
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
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="contact__feedback contact__feedback--success" role="status">
                Message sent! I will get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__feedback contact__feedback--error" role="alert">
                Something went wrong. Please try again or send an email directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
