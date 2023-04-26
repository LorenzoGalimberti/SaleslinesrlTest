import React, { useState } from "react";

function ConvertitoreValuta() {
  // Stato interno per la gestione del valore inserito dall'utente
  const [importoEuro, setImportoEuro] = useState<number>(0);
  const [tassoCambio, setTassoCambio] = useState<number>(1.21); // Valore di default del tasso di cambio

  // Funzione per la conversione da Euro a Dollaro
  const convertiInDollari = (): number => {
    return importoEuro * tassoCambio;
  };

  // Funzione per l'aggiunta di una quantità specifica di Euro all'importo corrente
  const aggiungiImportoEuro = (quantita: number): void => {
    setImportoEuro(importoEuro + quantita);
  };

  // Funzione per il reset dell'importo corrente
  const resetImportoEuro = (): void => {
    setImportoEuro(0);
  };

  // Funzione per la gestione dell'input del tasso di cambio
  const gestisciInputTassoCambio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nuovoTassoCambio = parseFloat(e.target.value);
    setTassoCambio(nuovoTassoCambio);
  };

  return (
    <div>
      <h1>Convertitore Valuta</h1>
      <p>
        Inserisci l'importo in Euro da convertire in Dollari:{" "}
        <input type="number" value={importoEuro} onChange={(e) => setImportoEuro(parseFloat(e.target.value))} />
      </p>
      <p>
        Inserisci il tasso di cambio attuale:{" "}
        <input type="number" value={tassoCambio} onChange={gestisciInputTassoCambio} />
      </p>
      <p>Importo in Dollari: {convertiInDollari().toFixed(2)}</p>
      <p>
        <button onClick={() => aggiungiImportoEuro(10)}>+10</button>
        <button onClick={() => aggiungiImportoEuro(100)}>+100</button>
        <button onClick={resetImportoEuro}>Reset</button>
      </p>
    </div>
  );
}

export default ConvertitoreValuta;
