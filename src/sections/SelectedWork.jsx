import { projects, upcomingProject } from '../data/projects.js';
import Reveal from '../components/Reveal.jsx';
import ProjectVisual from '../components/ProjectVisual.jsx';
import Icon from '../components/Icon.jsx';

export default function SelectedWork({ onProject }) {
  return (
    <section className="selected-work section-space" id="proyectos" aria-labelledby="projects-title">
      <div className="shell">
        <Reveal className="work-heading">
          <div>
            <p className="eyebrow section-label"><span aria-hidden="true">02 /</span> IDEAS EN ACCIÓN</p>
            <h2 id="projects-title">Proyectos <em>destacados</em><span className="heading-dot">.</span></h2>
          </div>
          <span className="work-side-note">UNA SELECCIÓN DE MI TRABAJO<br />PENSADO PARA EL MUNDO REAL.</span>
        </Reveal>
        <div className="projects-list">
          {projects.map((project) => (
            <Reveal className={`project-piece project-${project.visual}`} as="article" key={project.id}>
              <button className="project-image-button" onClick={() => onProject(project)} aria-label={`Ver proyecto ${project.name}`}>
                <ProjectVisual project={project} />
                <span className="project-hover-arrow"><Icon name="diagonal" /></span>
              </button>
              <div className="project-info">
                <div className="project-name">
                  <span className="project-number">{project.number} /</span>
                  <div>
                    <p className="eyebrow project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                  </div>
                </div>
                <div className="project-summary">
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <button className="text-link" onClick={() => onProject(project)}>VER PROYECTO <Icon name="arrow" /></button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="upcoming-project">
          <span className="project-number">{upcomingProject.number} /</span>
          <div>
            <span className="eyebrow">EL SIGUIENTE CAPÍTULO</span>
            <p>{upcomingProject.candidates.join(' / ')}</p>
          </div>
          <span className="pending-label">{upcomingProject.status} <span aria-hidden="true">↗</span></span>
        </Reveal>
      </div>
    </section>
  );
}
