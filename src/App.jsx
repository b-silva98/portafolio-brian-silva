import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Encabezado from "./componentes/Encabezado";
import PieDePagina from "./componentes/PieDePagina";


function App() {
  return (
    <Router>
      <Encabezado />

      <PieDePagina />
    </Router>
  );
}

export default App;

