export default function ProjectVisual({ project }) {
  if (project.image) return <div className={`project-visual visual-${project.visual}`}><img src={project.image} alt={project.imageAlt} loading="lazy" width="1000" height="720" /></div>;
  return (
    <div className={`project-visual visual-${project.visual}`}>
      <div className="visual-grid" aria-hidden="true"></div>
      <div className="concept-window" aria-hidden="true">
        <div className="window-bar"><div className="window-dots"><i></i><i></i><i></i></div><span>{project.name.toLowerCase()} / espacio de trabajo</span><span>↗</span></div>
        <div className="window-body">
          <div className="window-sidebar"><span className="window-logo">{project.visual === 'time' ? 'a.' : 'a+'}</span><i className="active"></i><i></i><i></i><i></i><i></i><span className="sidebar-bottom">↗</span></div>
          <div className="window-content">
            <div className="concept-heading"><span>{project.visual === 'time' ? 'Una operación, conectada.' : 'Las personas, al centro.'}</span><div className="concept-avatar"></div></div>
            <div className="concept-line"></div>
            <div className="concept-blocks"><div><span className="abstract-icon">{project.visual === 'time' ? '◷' : '+'}</span><div className="skeleton-line"></div><div className="skeleton-line short"></div></div><div><div className="mini-bars"><i></i><i></i><i></i><i></i><i></i><i></i></div><div className="skeleton-line"></div></div></div>
            <div className="concept-table"><div className="table-heading"><span></span><span></span><span></span></div>{[0, 1, 2].map((row) => <div className="table-row" key={row}><span className="row-dot"></span><span className="row-line"></span><span className="row-line short"></span><span className="row-pill"></span></div>)}</div>
          </div>
        </div>
      </div>
      <span className="visual-stamp" aria-hidden="true">{project.visual === 'time' ? 'Sistemas que\nconectan.' : 'Diseñado para\nlas personas.'}</span>
      <span className="visual-placeholder"><span aria-hidden="true">↗</span> CONCEPTO VISUAL · CAPTURA REAL PENDIENTE</span>
    </div>
  );
}
