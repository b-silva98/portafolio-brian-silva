// src/componentes/TarjetaHabilidad.jsx
export default function TarjetaHabilidad({ nombre, icono }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="card text-center shadow-sm h-100">
        <div className="card-body">
          <div style={{ fontSize: "2rem" }}>{icono}</div>
          <h6 className="mt-2">{nombre}</h6>
        </div>
      </div>
    </div>
  );
}
