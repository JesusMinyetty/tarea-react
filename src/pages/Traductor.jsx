import { useState } from "react";
import { numeroALetras } from "../utils/numerosALetras";
import "../styles/app.css";

function Traductor() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState("");

  const traducir = () => {
    setResultado(numeroALetras(numero));
  };

  return (
    <div className="card">
      <h1>Traductor de Números</h1>

      <input
        type="number"
        min="1"
        max="1000"
        placeholder="Ingrese un número del 1 al 1000"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <button onClick={traducir}>
        Convertir
      </button>

      <h2>{resultado}</h2>
    </div>
  );
}

export default Traductor;