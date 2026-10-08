import { useRef, useState } from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import { site } from '../data/site.js';

export default function ContactDialog({ onClose }) {
  const [status, setStatus] = useState('idle');
  const confirmationRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const formData = new FormData(event.currentTarget);
    setStatus('sending');
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      requestAnimationFrame(() => confirmationRef.current?.focus());
    } catch {
      setStatus('error');
    }
  }

  return (
    <Modal titleId="contact-dialog-title" onClose={onClose} className="contact-modal">
      <p className="eyebrow">EL PRIMER PASO</p><h2 id="contact-dialog-title">Hagamos algo<br /><em>que funcione.</em></h2>
      {status === 'success' ? <div className="form-success" ref={confirmationRef} tabIndex={-1} role="status"><span className="success-icon"><Icon name="check" /></span>
      <h3>Tu idea ya está en camino.</h3><p>Gracias por escribir. Tu mensaje se ha enviado correctamente.</p><button className="text-link" onClick={onClose}>VOLVER AL PORTFOLIO <Icon name="arrow" /></button></div> : <>
      <p className="form-intro">
          Cuéntame un poco de tu proyecto y cómo puedo ayudarte.
        </p>

        {site.whatsapp && (
          <a
            className="primary-button whatsapp-button"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            ESCRÍBEME POR WHATSAPP <Icon name="diagonal" />
          </a>
        )}

        <p className="contact-or">
          O, si prefieres, cuéntame por aquí:
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          aria-busy={status === 'sending'}
        >
        <input type="hidden" name="form-name" value="contact" /><div hidden><label>No completar este campo<input name="bot-field" autoComplete="off" tabIndex={-1} /></label></div>
        <label htmlFor="contact-name">Tu nombre<input id="contact-name" name="name" autoComplete="name" placeholder="¿Cómo te llamas?" required maxLength={120} /></label>
        <label htmlFor="contact-email">Tu email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Para seguir la conversación" required maxLength={254} /></label>
        <label htmlFor="contact-message">Tu idea<textarea id="contact-message" name="message" placeholder="El problema, la idea o ese proyecto que tienes en mente…" required rows={4} maxLength={5000} /></label>
        {status === 'error' && <p className="form-error" role="alert">No se pudo enviar el mensaje. Tus datos siguen aquí; inténtalo de nuevo en unos momentos.</p>}
        <p className="form-privacy">Estos datos se utilizarán únicamente para responder a tu consulta. No incluyas información sensible.</p>
        <button type="submit" className="primary-button" disabled={status === 'sending'}>{status === 'sending' ? 'ENVIANDO…' : 'ENVIAR MENSAJE'}<Icon name="arrow" /></button>
      </form></>}
    </Modal>
  );
}
