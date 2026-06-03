import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Sumadora from "./pages/Sumadora";
import Traductor from "./pages/Traductor";
import Tabla from "./pages/Tabla";
import Experiencia from "./pages/Experiencia";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sumadora" element={<Sumadora />} />
        <Route path="/traductor" element={<Traductor />} />
        <Route path="/tabla" element={<Tabla />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;