// src/secciones/Contacto.jsx
import FormularioContacto from "../componentes/FormularioContacto";

export default function Contacto() {
  return (
    <section className="container py-5">
      <h2 className="text-center text-primary mb-4">Contacto</h2>
      <p className="text-center mb-4">
        Si querés contactarme para una oportunidad laboral, proyecto o colaboración, completá el formulario o escribime por mis redes.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <FormularioContacto />
        </div>
      </div>
    </section>
  );
}
