import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function PieDePagina() {
  return (
    <footer className="bg-light text-center py-4 mt-5 border-top">
      <div className="container">
        <p className="mb-2 text-secondary">
          © {new Date().getFullYear()} Brian Silva — Todos los derechos reservados.
        </p>
        <div className="d-flex justify-content-center gap-3 fs-4 text-primary">
          <a href="https://github.com/b-silva98" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/brian-e-silva/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:briiansiilva08@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
