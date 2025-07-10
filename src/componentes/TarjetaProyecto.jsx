import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./TarjetaProyecto.css";

export default function TarjetaProyecto({
  titulo,
  descripcion,
  imagen,
  tecnologias,
  enlaceGitHub,
  enlaceDemo,
  animationDelay
}) {
  return (
    <div 
      className="project-card"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="card-image-container">
        <img src={imagen} alt={titulo} className="card-image" />
        <div className="image-overlay"></div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-description">{descripcion}</p>
        
        <div className="technologies-container">
          {tecnologias.map((tech, index) => (
            <span key={index} className="technology-tag">{tech}</span>
          ))}
        </div>
        
        <div className="card-actions">
          {enlaceGitHub && (
            <a
              href={enlaceGitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button github-button"
            >
              <FaGithub /> Código
            </a>
          )}
          
          {enlaceDemo && (
            <a
              href={enlaceDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button demo-button"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}