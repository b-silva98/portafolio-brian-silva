// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes comunes
import Encabezado from "./componentes/Encabezado";
import PieDePagina from "./componentes/PieDePagina";

// Secciones del portafolio
import Inicio from "./secciones/Inicio";
import SobreMi from "./secciones/SobreMi";
import Proyectos from "./secciones/Proyectos";
import Habilidades from "./secciones/Habilidades";
import Educacion from "./secciones/Educacion";
import Contacto from "./secciones/Contacto";
import NoEncontrado from "./secciones/NoEncontrado";

function App() {
  return (
    <Router>
      <Encabezado />

      <main className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/educacion" element={<Educacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>

      <PieDePagina />
    </Router>
  );
}

export default App;

