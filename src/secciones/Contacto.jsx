import FormularioContacto from "../componentes/FormularioContacto";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          Si querés contactarme para una oportunidad laboral, proyecto o colaboración, completá el formulario o escribime por mis redes.
        </p>
        <div className="form-container">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
