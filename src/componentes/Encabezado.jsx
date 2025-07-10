import { Link } from "react-router-dom";
import "./Encabezado.css"; // Asegúrate de crear este archivo CSS

export default function Encabezado() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm navbar-custom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Brian Silva
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacion"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavegacion">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobre-mi">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/proyectos">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/habilidades">Habilidades</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/educacion">Educación</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
