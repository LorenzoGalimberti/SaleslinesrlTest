# Salesline Test
Il progetto Salesline Test è una web app composta da quattro pagine con funzionalità diverse, organizzate in un unico progetto con routing e accesso tramite login.

# Funzionalità
Le quattro pagine sono:

- Pagina Convertitore: consente di convertire valori in euro in dollari. È possibile incrementare il valore da convertire di 10 o di 100, oppure azzerarlo.
- Pagina Meteo: permette di visualizzare le previsioni meteo di una città inserita tramite un form. Utilizza l'API di OpenWeatherMap per recuperare i dati meteo.
- Pagina Task: mostra un elenco di task da completare. È possibile aggiungere nuovi task tramite un form, che effettua una chiamata POST per aggiornare l'elenco.
- Pagina Registrazione: consente di registrarsi al servizio inserendo nome, cognome, email, data di nascita e validando i dati.
# Tecnologie utilizzate
Il progetto Salesline Test utilizza le seguenti tecnologie:

- React: libreria JavaScript per la creazione di interfacce utente.
- React Router: libreria per gestire il routing all'interno di un'applicazione React.
- Axios: libreria per effettuare richieste HTTP.
- Bootstrap: framework CSS per la creazione di interfacce responsive.
- Express: framework Node.js per la creazione di applicazioni web.
- MySQL: sistema di gestione di database relazionali.
- Nodemon: tool per il riavvio automatico del server quando il codice viene modificato.
# Installazione
Il progetto è diviso in due parti: il frontend e il backend. Entrambe le parti utilizzano Node.js, quindi è necessario averlo installato sulla propria macchina.

# Frontend
```
cd frontend
```
```
npm install axios@1.3.6 bootstrap@2.0.0 react@18.2.0 react-dom@18.2.0 react-router-dom@6.10.0 web-vitals@2.1.4 --save
npm install typescript@5.0.4 @babel/preset-typescript@7.21.4 @types/react@18.2.0 
```
Di seguito l'elenco dei pacchetti utilizzati per il progetto frontend:



1. Clonare il repository nella propria cartella locale
2. Aprire una finestra del terminale nella cartella "frontend"
3. Eseguire il comando npm install per installare le dipendenze del progetto
4. Eseguire il comando npm start per avviare l'applicazione su http://localhost:3000
# Backend
Per poter eseguire il progetto sul proprio computer, è necessario installare i seguenti pacchetti nella directory 'backend':
```
cd backend
```

- Cors v2.8.5
- Express v4.18.2
- MySql v2.18.1
- Nodemon v2.0.22
Per installare i pacchetti, è possibile utilizzare il comando npm install seguito dal nome del pacchetto e dalla versione specifica, come mostrato di seguito:

```
npm install cors@2.8.5
npm install express@4.18.2
npm install mysql@2.18.1
npm install nodemon@2.0.22
```

In alternativa, è possibile installare tutte le dipendenze contemporaneamente utilizzando il comando:

```
npm install
```

Per installare il backend:

1. Installare XAMPP seguendo le istruzioni per il proprio sistema operativo dal sito ufficiale: https://www.apachefriends.org/index.html
2. Clonare il repository nella propria cartella locale
3. Aprire una finestra del terminale nella cartella "backend"
4. Eseguire il comando npm install per installare le dipendenze del progetto
5. Creare un database MySQL con il nome "salesline_test_db" utilizzando il pannello di controllo di XAMPP
6. Configurare il file "server.js" inserendo le proprie credenziali per la connessione al database
7- Eseguire il comando npm start per avviare il server
# note finali


Vorrei scusarmi per il fatto che il progetto sia stato realizzato interamente in JavaScript e non in TypeScript. Inizialmente avevo pianificato di utilizzare TypeScript per tutta l'applicazione, ma durante lo sviluppo ho riscontrato dei problemi con il form di registrazione ed autenticazione, che mi hanno costretto a tornare al JavaScript.

Tuttavia, ho creato una cartella "typescript" all'interno della repository, dove è possibile trovare i file TypeScript che ho sviluppato in precedenza. 

Mi scuso ancora per qualsiasi inconveniente causato dalla mancanza di TypeScript nell'applicazione principale e spero che i file TypeScript nella cartella "typescript" possano essere comunque di valore per la vostra comprensione del progetto.

Grazie per la comprensione,

Galimberti Lorenzo
