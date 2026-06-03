import foto from "../assets/foto.jpg";
import "../styles/app.css";

function Inicio() {
    return (
        <div className="card">
            <h1>Datos Personales</h1>

            <img
                src={foto}
                alt="Foto"
                width="150"
            />

            <h2>Jesús Bienvenido</h2>

            <p>Gomez Minyetty</p>
            <p>20198911</p>
            <p>20198911@itla.edu.do</p>
        </div>
    );
}

export default Inicio;