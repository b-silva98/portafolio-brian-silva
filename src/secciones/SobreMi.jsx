import perfil from "../assets/mi-foto.png";

export default function SobreMi() {
  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-4">Sobre mí</h2>

      <div className="row align-items-center">
        {/* Imagen de perfil */}
        <div className="col-md-4 mb-4 mb-md-0 text-center">
          <img
            src={perfil}
            alt="Foto de Brian"
            className="img-fluid rounded-circle shadow"
            style={{ maxWidth: "250px" }}
          />
        </div>

        {/* Texto de presentación */}
        <div className="col-md-8">
          <p>
            ¡Hola! Soy <strong>Brian Emanuel Silva</strong>, Técnico Agrónomo con orientación en frutihorticultura y en constante formación como <strong>Desarrollador Web</strong> y <strong>Analista de Datos</strong>.
          </p>

          <p>
            Mi experiencia en el sector agropecuario me motivó a integrar herramientas tecnológicas que optimicen procesos, mejoren la toma de decisiones y generen un impacto positivo en el ámbito productivo.
          </p>

          <p>
            Actualmente desarrollo aplicaciones web utilizando tecnologías como React, Bootstrap y JavaScript, y también realizo análisis de datos con herramientas como Excel, Power BI y SQL. Me apasiona combinar el mundo agro con soluciones digitales.
          </p>

          <p>
            Me considero una persona comprometida, autodidacta y con ganas constantes de seguir aprendiendo. Busco oportunidades para aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.
          </p>
        </div>
      </div>
    </section>
  );
}
