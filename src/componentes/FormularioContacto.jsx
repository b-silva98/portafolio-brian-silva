import { useRef } from "react";
import emailjs from "emailjs-com";
import "./FormularioContacto.css";

export default function FormularioContacto() {
  const form = useRef();

  const enviarFormulario = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w7hbeod",
        "template_q6z9b0q",
        form.current,
        "S2vxqNKUattUk9Etw"
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
    <form ref={form} onSubmit={enviarFormulario} className="contact-form">
      <div className="form-group">
        <label className="form-label">Nombre completo</label>
        <input 
          type="text" 
          name="name" 
          className="form-input" 
          required 
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Correo electrónico</label>
        <input 
          type="email" 
          name="email" 
          className="form-input" 
          required 
          placeholder="tucorreo@ejemplo.com"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Asunto</label>
        <input 
          type="text" 
          name="title" 
          className="form-input" 
          placeholder="¿Sobre qué quieres hablar?"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Mensaje</label>
        <textarea
          name="message"
          rows="5"
          className="form-textarea"
          required
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Enviar mensaje
      </button>
    </form>
  );
}
