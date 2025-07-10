// src/secciones/Habilidades.jsx
import TarjetaHabilidad from "../componentes/TarjetaHabilidad";

export default function Habilidades() {
  const habilidades = [
    { nombre: "JavaScript", icono: "🟨" },
    { nombre: "React", icono: "⚛️" },
    { nombre: "Bootstrap", icono: "🟪" },
    { nombre: "Excel Avanzado", icono: "📊" },
    { nombre: "Power BI", icono: "📈" },
    { nombre: "SQL", icono: "🗃️" },
    { nombre: "Git/GitHub", icono: "🔧" },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-4">Habilidades</h2>
      <div className="row justify-content-center">
        {habilidades.map((hab, i) => (
          <TarjetaHabilidad key={i} nombre={hab.nombre} icono={hab.icono} />
        ))}
      </div>
    </section>
  );
}
