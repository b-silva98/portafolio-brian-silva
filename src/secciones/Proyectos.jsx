import TarjetaProyecto from "../componentes/TarjetaProyecto";
import imagenEjemplo from "../assets/proyecto-ejemplo.png.jfif";
import "./Proyectos.css";

export default function Proyectos() {
  const listaProyectos = [
    {
      titulo: "Calculadora de Plazo Fijo",
      descripcion: "Aplicación que permite calcular intereses generados según TNA, monto y días.",
      imagen: imagenEjemplo,
      tecnologias: ["React", "JavaScript", "Bootstrap"],
      enlaceGitHub: "https://github.com/briiansiilva1998/plazo-fijo",
      enlaceDemo: "https://plazo-fijo-demo.vercel.app"
    },
    {
      titulo: "Dashboard Agropecuario",
      descripcion: "Visualización de datos de producción de cultivos. Ideal para técnicos agrónomos.",
      imagen: imagenEjemplo,
      tecnologias: ["Power BI", "Excel", "SQL"],
      enlaceGitHub: "",
      enlaceDemo: ""
    }
    // Agrega más proyectos aquí...
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <p className="section-subtitle">
          Algunos de mis trabajos recientes que combinan tecnología y agronomía
        </p>
        
        <div className="projects-grid">
          {listaProyectos.map((proyecto, index) => (
            <TarjetaProyecto 
              key={index} 
              {...proyecto} 
              animationDelay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
