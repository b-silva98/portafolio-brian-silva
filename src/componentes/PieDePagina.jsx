import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./PieDePagina.css"; // Archivo CSS para los estilos

export default function PieDePagina() {
  return (
    <footer className="footer-custom py-4 mt-5">
      <div className="container">
        <p className="text-center">
          © {new Date().getFullYear()} Brian Silva — Todos los derechos
          reservados.
        </p>
        <div className="d-flex justify-content-center gap-3 fs-4 social-icons">
          <a
            href="https://github.com/b-silva98"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-e-silva/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:briiansiilva08@gmail.com" aria-label="Enviar email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
