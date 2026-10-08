import Star from './Star.jsx';

export default function Wordmark({ light = false }) {
  return (
    <a className={`wordmark ${light ? 'wordmark-light' : ''}`} href="#inicio" aria-label="Scarlett Viscencio, inicio">
      <span>SCARLETT<Star className="wordmark-star" /></span>
      <small>viscencio / digital</small>
    </a>
  );
}
