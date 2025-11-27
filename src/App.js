import React, { useState } from "react";
import "./index.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = (e) => {
    e.preventDefault();

    const alt = parseFloat(altura);
    const ps = parseFloat(peso);

    if (!alt || !ps) {
      alert("Informe altura e peso válidos!");
      return;
    }

    const imc = ps / (alt * alt);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";

    setResultado({ imc: imc.toFixed(2), classificacao });
  };

  const limpar = () => {
    setAltura("");
    setPeso("");
    setResultado(null);
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calcularIMC}>
        <input
          type="number"
          placeholder="Altura (m)"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          step="0.01"
        />
        <input
          type="number"
          placeholder="Peso (kg)"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          step="0.1"
        />
        <button type="submit">Calcular</button>
        <button type="button" onClick={limpar} className="limpar">
          Limpar
        </button>
      </form>

      {resultado && (
        <div className="resultado">
          <p>IMC: {resultado.imc}</p>
          <p>Classificação: {resultado.classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
