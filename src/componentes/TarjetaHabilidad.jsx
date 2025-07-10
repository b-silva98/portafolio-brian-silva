import "./TarjetaHabilidad.css";

export default function TarjetaHabilidad({ nombre, icono, color, categoria, delay }) {
  return (
    <div 
      className="skill-card"
      style={{
        '--icon-color': color,
        'animation-delay': `${delay}s`
      }}
      data-category={categoria}
    >
      <div className="skill-icon-container">
        <div className="skill-icon-wrapper">
          {icono}
        </div>
      </div>
      <h3 className="skill-name">{nombre}</h3>
      <span className="skill-category">{categoria}</span>
    </div>
  );
}

