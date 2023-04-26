import React, { useState } from "react";
import "./ConvertitoreValuta.css";

function ConvertitoreValuta() {
  const [importoEuro, setImportoEuro] = useState(0);
  const [tassoCambio, setTassoCambio] = useState(1.21);

  const convertiInDollari = () => {
    return importoEuro * tassoCambio;
  };

  const aggiungiImportoEuro = (quantita) => {
    setImportoEuro(importoEuro + quantita);
  };

  const resetImportoEuro = () => {
    setImportoEuro(0);
  };

  const gestisciInputTassoCambio = (e) => {
    const nuovoTassoCambio = parseFloat(e.target.value);
    setTassoCambio(nuovoTassoCambio);
  };

  return (
    <div className="container">
      <h1 className="title">Convertitore Valuta</h1>
      <p>
        Inserisci l'importo in Euro da convertire in Dollari:{" "}
        <input className="input" type="number" value={importoEuro} onChange={(e) => setImportoEuro(parseFloat(e.target.value))} />
      </p>
      <p>
        Inserisci il tasso di cambio attuale:{" "}
        <input className="input" type="number" value={tassoCambio} onChange={gestisciInputTassoCambio} />
      </p>
      <p className="result">Importo in Dollari: {convertiInDollari().toFixed(2)}</p>
      <p>
        <button className="button" onClick={() => aggiungiImportoEuro(10)}>+10</button>
        <button className="button" onClick={() => aggiungiImportoEuro(100)}>+100</button>
        <button className="button" onClick={resetImportoEuro}>Reset</button>
      </p>
    </div>
  );
}

export default ConvertitoreValuta;
