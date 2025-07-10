import perfil from "../assets/mi-foto.png";
import "./SobreMi.css";

export default function SobreMi() {
  return (
    <section className="sobre-mi-section">
      <div className="container">
        <h2 className="sobre-mi-title">Sobre mí</h2>

        <div className="profile-container">
          <div className="profile-image-container">
            <img
              src={perfil}
              alt="Foto de Brian"
              className="profile-image"
            />
            <div className="image-border"></div>
          </div>

          <div className="profile-content">
            <p className="profile-text">
              ¡Hola! Soy <strong>Brian Emanuel Silva</strong>, Técnico Agrónomo con orientación en frutihorticultura y en constante formación como <strong>Desarrollador Web</strong> y <strong>Analista de Datos</strong>.
            </p>

            <p className="profile-text">
              Mi experiencia en el sector agropecuario me motivó a integrar herramientas tecnológicas que optimicen procesos, mejoren la toma de decisiones y generen un impacto positivo en el ámbito productivo.
            </p>

            <p className="profile-text">
              Actualmente desarrollo aplicaciones web utilizando tecnologías como React, Bootstrap y JavaScript, y también realizo análisis de datos con herramientas como Excel, Power BI y SQL. Me apasiona combinar el mundo agro con soluciones digitales.
            </p>

            <p className="profile-text">
              Me considero una persona comprometida, autodidacta y con ganas constantes de seguir aprendiendo. Busco oportunidades para aplicar mis conocimientos en proyectos reales y seguir creciendo profesionalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
