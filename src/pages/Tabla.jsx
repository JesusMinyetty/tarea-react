import { useState } from "react";
import "../styles/app.css";

function Tabla() {
    const [numero, setNumero] = useState("");
    const [tabla, setTabla] = useState([]);

    const generarTabla = () => {
        const resultados = [];

        for (let i = 1; i <= 13; i++) {
            resultados.push(
                `${numero} × ${i} = ${numero * i}`
            );
        }

        setTabla(resultados);
    };

    return (
        <div className="card">
            <h1>Tabla de Multiplicar</h1>

            <input
                type="number"
                placeholder="Ingrese un número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />

            <button onClick={generarTabla}>
                Generar Tabla
            </button>

            <div>
                {tabla.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default Tabla;