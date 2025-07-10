import { Link } from "react-router-dom";

export default function Encabezado() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Brian Silva
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacion"
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
