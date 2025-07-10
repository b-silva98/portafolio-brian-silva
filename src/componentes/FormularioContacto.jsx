import { useRef } from "react";
import emailjs from "emailjs-com";

export default function FormularioContacto() {
  const form = useRef();

  const enviarFormulario = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w7hbeod", // Tu Service ID
        "template_q6z9b0q", // Reemplazá con tu Template ID
        form.current,
        "S2vxqNKUattUk9Etw" // Reemplazá con tu Public Key
      )
      .then(
        (result) => {
          alert("Mensaje enviado correctamente.");
          form.current.reset();
        },
        (error) => {
          alert("Hubo un error al enviar el mensaje.");
          console.error(error);
        }
      );
  };

  return (
    <form ref={form} onSubmit={enviarFormulario}>
      <div className="mb-3">
        <label className="form-label">Nombre completo</label>
        <input type="text" name="name" className="form-control" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input type="email" name="email" className="form-control" required />
      </div>

      <div className="mb-3">
        <label className="form-label">Asunto</label>
        <input type="text" name="title" className="form-control" />
      </div>

      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea
          name="message"
          rows="5"
          className="form-control"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar mensaje
      </button>
    </form>
  );
}
