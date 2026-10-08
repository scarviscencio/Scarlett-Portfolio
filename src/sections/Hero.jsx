import Portrait from '../components/Portrait.jsx';
import Icon from '../components/Icon.jsx';
import { site } from '../data/site.js';

export default function Hero() {
  return (
    <section className="hero shell" id="inicio" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow hero-eyebrow">
          <span className="small-cross" aria-hidden="true">+</span>
          SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> DIGITAL SOLUTIONS
        </div>
        <h1 id="hero-title">
          <em>Soy Scarlett,</em><br />
          y resuelvo tus<br />
          problemas <span className="digital-word">
            digitales
            <svg viewBox="0 0 340 20" preserveAspectRatio="none" aria-hidden="true">
              <path d="M3 12C83 2 197 3 336 8M10 17c132-10 215-7 312-3" />
            </svg>
          </span>.
        </h1>
        <p className="hero-description">
          Entiendo el problema, encuentro la oportunidad<br className="desktop-break" /> y construyo la solución.
        </p>
        <a className="explore-link" href="#proceso">
          <span className="round-arrow"><Icon name="down" /></span>
          <span>EXPLORAR</span>
        </a>
      </div>
      <Portrait src={site.portrait} />
      <div className="hero-bottom">
        <span>UNA MIRADA CREATIVA. UNA SOLUCIÓN REAL.</span>
        <span className="hero-bottom-right">DISEÑO + LÓGICA + UN POCO DE INTUICIÓN <span aria-hidden="true">↙</span></span>
      </div>
    </section>
  );
}
