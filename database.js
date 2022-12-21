let mysql = require("mysql")





var mysql = require('mysql');
//connexion a la base de données
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Users',
    port:3306
});
connection.connect(function (error) { if (error) console.log(error); })

module.exports = connection
