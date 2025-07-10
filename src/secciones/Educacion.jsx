import { FaGraduationCap, FaLaptopCode, FaChartLine, FaUniversity } from "react-icons/fa";
import "./Educacion.css";

export default function Educacion() {
  const formaciones = [
    {
      titulo: "Técnico Superior en Gestión y Producción Agropecuaria",
      institucion: "Instituto de Enseñanza Superior N°10",
      anio: "2017 – 2019",
      icono: <FaGraduationCap />,
      categoria: "agronomia"
    },
    {
      titulo: "Diplomatura en Administración a Instituciones del Estado y Empresas Privadas",
      institucion: "Universidad Nacional de Jujuy",
      anio: "2024",
      icono: <FaUniversity />,
      categoria: "administracion"
    },
    {
      titulo: "Curso de Análisis de Datos con Excel y Power BI",
      institucion: "Formación Profesional",
      anio: "2023",
      icono: <FaChartLine />,
      categoria: "datos"
    },
    {
      titulo: "Formación en Desarrollo Web (React, JS, Git)",
      institucion: "Autodidacta / Cursos Online",
      anio: "2023 – Presente",
      icono: <FaLaptopCode />,
      categoria: "desarrollo"
    },
  ];

  return (
    <section className="education-section">
      <div className="container">
        <h2 className="section-title">Educación</h2>
        <p className="section-subtitle">
          Mi trayectoria académica y de formación continua
        </p>
        
        <div className="timeline">
          {formaciones.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${item.categoria}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-icon">
                {item.icono}
              </div>
              <div className="timeline-content">
                <h3>{item.titulo}</h3>
                <div className="timeline-meta">
                  <span className="institution">{item.institucion}</span>
                  <span className="year">{item.anio}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
