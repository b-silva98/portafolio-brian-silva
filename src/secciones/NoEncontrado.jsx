// src/secciones/NoEncontrado.jsx
import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="mb-4">
        La página que estás buscando no existe o fue movida. Verificá la URL o volvé al inicio.
      </p>
      <Link to="/" className="btn btn-primary">
        Volver al inicio
      </Link>
    </section>
  );
}
