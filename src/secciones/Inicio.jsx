import { Link } from "react-router-dom";
import "./Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio-container">
      <div className="inicio-content">
        <h1 className="inicio-title">Brian Emanuel Silva</h1>
        
        <p className="inicio-subtitle">
          Técnico Agrónomo | Desarrollador Web | Analista de Datos
        </p>

        <p className="inicio-description">
          Combino mi experiencia en el sector agropecuario con habilidades en programación y análisis de datos
          para crear soluciones digitales eficientes, modernas y con impacto real.
        </p>

        <div className="inicio-buttons">
          <a
            href="../assets/cv_Brian_Emanuel_Silva.pdf" 
            className="btn-cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>

          <Link to="/proyectos" className="btn-projects">
            Ver proyectos
          </Link>
        </div>
      </div>
    </section>
  );
}
