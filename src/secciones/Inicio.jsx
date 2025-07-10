// src/secciones/Inicio.jsx
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center text-center py-5">
      <h1 className="display-4 fw-bold text-primary mb-3">Brian Emanuel Silva</h1>
      
      <p className="lead mb-4">
        Técnico Agrónomo | Desarrollador Web | Analista de Datos
      </p>

      <p className="mb-4">
        Combino mi experiencia en el sector agropecuario con habilidades en programación y análisis de datos
        para crear soluciones digitales eficientes, modernas y con impacto real.
      </p>

      <div className="d-flex gap-3 flex-wrap justify-content-center">
        <a
          href="../assets/cv_Brian_Emanuel_Silva.pdf" 
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>

        <Link to="/proyectos" className="btn btn-outline-primary">
          Ver proyectos
        </Link>
      </div>
    </section>
  );
}
