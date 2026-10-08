import { site } from '../data/site.js';
import Portrait from '../components/Portrait.jsx';
import Reveal from '../components/Reveal.jsx';

export default function About() {
  return (
    <section className="about section-space" id="sobre-mi" aria-labelledby="about-title">
      <div className="shell about-layout">
        <Reveal className="about-art">
          <Portrait src={site.aboutPortrait} variant="about" />
          <span className="about-art-label">CURIOSIDAD COMO PUNTO DE PARTIDA.</span>
        </Reveal>
        <Reveal className="about-copy">
          <p className="eyebrow section-label"><span aria-hidden="true">03 /</span> DETRÁS DE LAS IDEAS</p>
          <h2 id="about-title">Sobre <em>mí.</em></h2>
          <p className="about-lead">La tecnología es el medio.<br /><em>Las personas, el motivo.</em></p>
          {site.about.map((paragraph) => <p className="about-paragraph" key={paragraph}>{paragraph}</p>)}
          <div className="experience-note">
            <span className="small-cross" aria-hidden="true">+</span>
            <p>{site.experience}</p>
          </div>
          <div className="tags about-tags">
            {['Web', 'Software', 'Data', 'Automation'].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
