import Modal from './Modal.jsx';
import ProjectVisual from './ProjectVisual.jsx';
import Icon from './Icon.jsx';

export default function ProjectDialog({ project, onClose, onContact }) {
  return (
    <Modal titleId="project-dialog-title" onClose={onClose} className="project-modal">
      <p className="eyebrow">{project.number} / {project.type}</p><h2 id="project-dialog-title">{project.name}</h2><p className="project-dialog-description">{project.description}</p><ProjectVisual project={project} /><div className="project-details"><h3>El contexto</h3><p>{project.context}</p>{project.contributions.length > 0 && <><h3>Mi participación</h3><div className="tags">{project.contributions.map((item) => <span key={item}>{item}</span>)}</div></>}<p className="project-disclosure">{project.image ? 'Material visual del proyecto. Las capturas deben estar anonimizadas para proteger la información sensible.' : 'La composición visual es un placeholder editorial, no una captura del producto. Este espacio está preparado para incorporar screenshots anonimizados; no contiene datos de empleados ni pacientes.'}</p>{project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">VISITAR PROYECTO <Icon name="diagonal" /></a>}<button className="text-link" onClick={onContact}>HABLEMOS DE TU IDEA <Icon name="arrow" /></button></div>
    </Modal>
  );
}
