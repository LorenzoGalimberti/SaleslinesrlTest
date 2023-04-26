import React, { useState } from 'react';
import axios from 'axios';
import './PaginaMeteo.css';

function PaginaMeteo() {
  // Definizione degli stati utilizzati nel componente
  const [citta, setCitta] = useState('');
  const [datiMeteo, setDatiMeteo] = useState(null);
  const [messaggioErrore, setMessaggioErrore] = useState(null);

  // Funzione che gestisce l'invio del form e la chiamata all'API per ottenere i dati del meteo
  const gestisciInvioForm = async (e) => {
    e.preventDefault();
    try {
      // Chiamata all'API con axios
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${citta}&units=metric&lang=it&appid=b54d7c9b8cc3707ee9af7a3fcd7e8c9c`
      );
      // Aggiornamento dello stato con i dati ottenuti dalla chiamata
      setDatiMeteo(response.data);
      // Azzeramento del messaggio di errore in caso di chiamata andata a buon fine
      setMessaggioErrore(null);

    } catch (error) {
      // Azzeramento dei dati del meteo in caso di errore
      setDatiMeteo(null);
      // Impostazione del messaggio di errore
      setMessaggioErrore(error.response?.data?.message === "city not found" ? "Città non trovata" : 'Errore');
    }
  };

  // Funzione che gestisce il cambio della città inserita dall'utente
  const gestisciCambioCitta = (e) => {
    setCitta(e.target.value);
  };

  return (
    <div className="container">
      <form onSubmit={gestisciInvioForm}>
      <div className="form-citta">
  <label htmlFor="citta">Inserisci la città:</label>
  <input
    type="text"
    id="citta"
    value={citta}
    onChange={gestisciCambioCitta}
  />
  <button type="submit">Cerca</button>
</div>
      </form>
      {/* Visualizzazione dei dati ottenuti dalla chiamata all'API */}
      {datiMeteo && (
        <div className="dati-meteo-container">
          <h2>{datiMeteo.name}</h2>
          <p>Temperatura: {datiMeteo.main?.temp}°C</p>
          <p>Umidità: {datiMeteo.main?.humidity}%</p>
          <p>Meteo: {datiMeteo.weather?.[0]?.description}</p>
        </div>
      )}
      {/* Visualizzazione del messaggio di errore solo se presente */}
      {messaggioErrore && (
        <div className="messaggio-errore-container">
          <p>{messaggioErrore}</p>
        </div>
      )}
    </div>
  );
}

export default PaginaMeteo;
