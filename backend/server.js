const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host :"localhost",
    user :"root",
    password:"",
    database:"signup"
});

db.connect((err) => {
    if (err) {
        console.error('Errore di connessione al database: ' + err.stack);
        return;
    }
    console.log('Connessione al database effettuata con successo');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (name, email, password) VALUES (?)";
    const values=[
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql,[values],(err,result) => {
        if(err){
            console.error('Errore nell\'esecuzione della query: ' + err.stack);
            return res.status(500).json({ error: 'Errore nell\'esecuzione della query' });
        }
        console.log('Nuovo utente registrato con successo');
        return res.status(200).json({ message: 'Utente registrato con successo' });
    });
});
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE email=? AND password=?";
    
    db.query(sql,[req.body.email,req.body.password],(err,data) => {
        console.error(data)
        if(err){
            console.error('Errore nell\'esecuzione della query di login: ' + err.stack);
            return res.status(500).json({ error: 'Errore nell\'esecuzione della query di login' });
        }
        if(data.length >0){
            return res.json(("Successo"));
        }else{
            return res.json("fallimento");
        }
    });
})


app.listen(8081, () => {
    console.log("Server in ascolto sulla porta 8081");
});
