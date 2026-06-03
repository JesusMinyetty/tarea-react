import { Link } from "react-router-dom";
import "../components/navbar.css";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/sumadora">Sumadora</Link> |{" "}
      <Link to="/traductor">Traductor</Link> |{" "}
      <Link to="/tabla">Tabla</Link> |{" "}
      <Link to="/experiencia">Experiencia</Link>
    </nav>
  );
}

export default Navbar;