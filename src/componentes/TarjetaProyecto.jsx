import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function TarjetaProyecto({ titulo, descripcion, imagen, tecnologias, enlaceGitHub, enlaceDemo }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={imagen} className="card-img-top" alt={`Captura del proyecto ${titulo}`} />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>

          <div className="mb-2">
            {tecnologias.map((tec, index) => (
              <span key={index} className="badge bg-secondary me-1">{tec}</span>
            ))}
          </div>

          <div className="mt-auto d-flex gap-3">
            {enlaceGitHub && (
              <a href={enlaceGitHub} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark btn-sm">
                <FaGithub /> Código
              </a>
            )}
            {enlaceDemo && (
              <a href={enlaceDemo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                <FaExternalLinkAlt /> Ver demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
