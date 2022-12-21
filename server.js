// import express
const express = require('express');

// initialiser l'application
let app = express();

app.use(express.urlencoded({ extended: true }));

//envoie un message par défaut a l'url
app.get('/', (req, res) => {
    res.send("bonjour le monde");
});

// envoyer liste des utilisateurs
app.get('/person', (req, res) => {
    console.log('test');
    res.render('home.ejs');
});
// envoyer liste des utilisateurs
app.get('/person', (req, res) => {
    console.log('test');
    connection.query("select * from user;", function(error, result) {
        console.log(result);
        if (error) console.log(error);
        res.render('home.ejs', {personnes: result});
    });
});

// envoyer liste des utilisateurs
app.get('/person/home', (req, res) => {
    console.log('test');
    res.render('person.ejs');
});








// charger l'application et l’écouter sur le port 80
app.listen(process.env.port ||80, function ()  {
    console.log("listening on port 80");
});