import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

function HomePage() {
  return (
    <div>
      <h1>Benvenuto nella tua dashboard</h1>
      <p>Seleziona una delle seguenti opzioni per iniziare:</p>
      
      <button>
        <Link to="/convertitore" className="button-link">Convertitore valuta</Link>
      </button>
      <button>
        <Link to="/meteo" className="button-link">Previsioni meteo</Link>
      </button>
      <button>
        <Link to="/tasks" className="button-link">Lista di task</Link>
      </button>   
    </div>
  );
}

export default HomePage;
