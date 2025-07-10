import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes comunes
import Encabezado from "./componentes/Encabezado";
import PieDePagina from "./componentes/PieDePagina";

// Secciones del portafolio
import Inicio from "./secciones/Inicio";


function App() {
  return (
    <Router>
      <Encabezado />

      <main className="mt-5 pt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </main>

      <PieDePagina />
    </Router>
  );
}

export default App;
