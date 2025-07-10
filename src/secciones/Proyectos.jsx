import TarjetaProyecto from "../componentes/TarjetaProyecto";
import imagenEjemplo from "../assets/proyecto-ejemplo.png.jfif"; // Cambiar por tus imágenes reales

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
    // Podés seguir agregando más proyectos aquí...
  ];

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center text-primary">Mis Proyectos</h2>
      <div className="row">
        {listaProyectos.map((proyecto, index) => (
          <TarjetaProyecto key={index} {...proyecto} />
        ))}
      </div>
    </section>
  );
}
