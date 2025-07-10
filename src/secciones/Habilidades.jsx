import { FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiBootstrap, SiMysql } from "react-icons/si";
import { BsBarChartLine, BsBarChartFill } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import TarjetaHabilidad from "../componentes/TarjetaHabilidad";
import "./Habilidades.css";

export default function Habilidades() {
  const habilidades = [
    { 
      nombre: "JavaScript", 
      icono: <FaJs />,
      color: "#f0db4f",
      categoria: "Desarrollo"
    },
    { 
      nombre: "React", 
      icono: <FaReact />,
      color: "#61dbfb",
      categoria: "Desarrollo"
    },
    { 
      nombre: "Bootstrap", 
      icono: <SiBootstrap />,
      color: "#7952b3",
      categoria: "Diseño"
    },
    { 
      nombre: "Excel Avanzado", 
      icono: <BsBarChartLine />,
      color: "#217346",
      categoria: "Datos"
    },
    { 
      nombre: "Power BI", 
      icono: <BsBarChartFill />,
      color: "#f2c811",
      categoria: "Datos"
    },
    {
      nombre: "Python",
      icono: <FaPython />,
      color: "#306998",
      categoria: "Datos"
    },
    { 
      nombre: "SQL", 
      icono: <CgDatabase />,
      color: "#00758f",
      categoria: "Datos"
    },
    { 
      nombre: "Git/GitHub", 
      icono: <FaGitAlt />,
      color: "#f34f29",
      categoria: "Herramientas"
    },
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <p className="section-subtitle">
          Tecnologías y herramientas que utilizo en mis proyectos
        </p>
        
        <div className="skills-grid">
          {habilidades.map((habilidad, index) => (
            <TarjetaHabilidad 
              key={index}
              nombre={habilidad.nombre}
              icono={habilidad.icono}
              color={habilidad.color}
              categoria={habilidad.categoria}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



