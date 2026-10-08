import { processSteps } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';

export default function Process() {
  return (
    <section className="process section-space" id="proceso" aria-labelledby="process-title">
      <div className="shell">
        <Reveal className="process-heading">
          <div>
            <p className="eyebrow section-label"><span aria-hidden="true">01 /</span> LA FORMA DE PENSAR</p>
            <h2 id="process-title">De una idea<br />a algo que <em>funciona.</em></h2>
          </div>
          <p className="process-intro">Me gusta entender cómo funcionan las cosas: los sistemas, los procesos y, sobre todo, las personas que los utilizan.</p>
        </Reveal>
        <Reveal className="process-steps">
          {processSteps.map((step) => (
            <div className="process-step" key={step.number}>
              <div className="step-top">
                <span>{step.number}</span>
                <Icon name={step.symbol} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
