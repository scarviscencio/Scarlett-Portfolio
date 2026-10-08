import { site } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import Wordmark from '../components/Wordmark.jsx';
import Star from '../components/Star.jsx';

export default function Contact({ onContact }) {
  const socials = [['LinkedIn', site.linkedin], ['GitHub', site.github], ['Email', site.email ? `mailto:${site.email}` : null]];
  return (
    <section className="contact" id="contacto" aria-labelledby="contact-title">
      <div className="shell">
        <Reveal className="contact-content">
          <p className="eyebrow section-label"><span aria-hidden="true">04 /</span> LO QUE VIENE</p>
          <div className="contact-heading">
            <h2 id="contact-title">¿Tienes una idea?<br /><em>Cuéntamela.</em></h2>
            <Star className="contact-star" />
          </div>
          <p>No tiene que estar todo resuelto.<br />Una buena conversación puede ser el primer paso.</p>
          <div className="contact-actions">
            <button className="primary-button" onClick={onContact}>HABLEMOS <Icon name="arrow" /></button>
            {site.cv ? (
              <a className="cv-link" href={site.cv} download>DESCARGAR CV <Icon name="down" /></a>
            ) : (
              <div className="cv-pending">
                <button className="cv-link" disabled aria-describedby="cv-status">DESCARGAR CV <Icon name="down" /></button>
                <small id="cv-status">Documento pendiente de añadir</small>
              </div>
            )}
          </div>
        </Reveal>
        <footer className="footer">
          <Wordmark light />
          <span className="footer-note">HECHO CON INTENCIÓN.</span>
          <div className="social-links">
            {socials.map(([label, url]) => url ? (
              <a key={label} href={url} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'}>
                {label} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span key={label} className="social-pending" title="Enlace pendiente de añadir">{label} <small>pendiente</small></span>
            ))}
          </div>
          <span className="copyright">© {new Date().getFullYear()} Scarlett Viscencio</span>
        </footer>
      </div>
    </section>
  );
}
