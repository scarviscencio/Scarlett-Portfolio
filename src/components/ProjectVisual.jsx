export default function ProjectVisual({ project }) {
  return (
    <div className={`project-visual visual-${project.visual}`}>
      {project.image ? (
        <div className="project-real-image">
          <div className="project-browser-bar" aria-hidden="true">
            <span className="browser-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>

            <span className="browser-url">
              {project.name.toLowerCase()}
            </span>

            <span className="browser-arrow">↗</span>
          </div>

          <div className="project-screenshot">
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              width="1600"
              height="900"
            />
          </div>
        </div>
      ) : (
        <div className="project-empty">
          Captura próximamente
        </div>
      )}

      <span className="visual-stamp">
        {project.visual === 'time' && (
          <>
            Sistemas que
            <br />
            conectan.
          </>
        )}

        {project.visual === 'medical' && (
          <>
            Diseñado para
            <br />
            las personas.
          </>
        )}

        {project.visual === 'biotempak' && (
          <>
            Claridad para
            <br />
            lo complejo.
          </>
        )}

        {project.visual === 'deckdepot' && (
          <>
            Diseño +
            <br />
            materia.
          </>
        )}
      </span>
    </div>
  );
}