import BotanicalArt from './BotanicalArt.jsx';
import Star from './Star.jsx';

export default function Portrait({ src, variant = 'hero' }) {
  return (
    <figure className={`portrait portrait-${variant}`}>
      <div className="portrait-orbit" aria-hidden="true"></div>
      <div className="portrait-circle" aria-hidden="true"></div>
      <div className="portrait-paper">
        {src ? <img src={src} alt="Scarlett Viscencio" width="420" height="530" loading={variant === 'hero' ? 'eager' : 'lazy'} /> : <BotanicalArt className="botanical-art" />}
        {!src && <span className="art-caption" aria-hidden="true">Entre lógica<br /><em>e intuición.</em></span>}
      </div>
      <Star className="collage-star" />
      <span className="collage-note" aria-hidden="true">ideas que<br />cobran vida ↗</span>
      <figcaption>{src ? 'SCARLETT / EN SU ELEMENTO' : 'RETRATO PENDIENTE · ESPACIO REEMPLAZABLE'}</figcaption>
    </figure>
  );
}
