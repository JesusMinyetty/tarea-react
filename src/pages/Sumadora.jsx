import { useState } from "react";
import "../styles/app.css";
function Sumadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  const sumar = () => {
    setResultado(Number(num1) + Number(num2));
  };

  return (
    <div className="card">
      <h1>Sumadora</h1>

      <input
        type="number"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={sumar}>
        Sumar
      </button>

      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default Sumadora;