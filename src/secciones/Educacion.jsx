// src/secciones/Educacion.jsx
export default function Educacion() {
  const formaciones = [
    {
      titulo: "Técnico Superior en Gestión y Producción Agropecuaria",
      institucion: "Instituto de Enseñanza Superior N°10",
      anio: "2017 – 2019",
    },
    {
      titulo: "Diplomatura en Administración a Instituciones del Estado y Empresas Privadas",
      institucion: "Universidad Nacional de Jujuy",
      anio: "2024",
    },
    {
      titulo: "Curso de Análisis de Datos con Excel y Power BI",
      institucion: "Formación Profesional",
      anio: "2023",
    },
    {
      titulo: "Formación en Desarrollo Web (React, JS, Git)",
      institucion: "Autodidacta / Cursos Online",
      anio: "2023 – Presente",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-4">Educación</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="list-group">
            {formaciones.map((item, i) => (
              <li key={i} className="list-group-item">
                <h6 className="mb-1">{item.titulo}</h6>
                <small className="text-muted">
                  {item.institucion} – {item.anio}
                </small>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
