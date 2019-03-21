'use strict';
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();
function random() {
    var min=18;
    var max=30;
    var random =Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

module.exports = async (router) => {

    router.get('/', function (req, res) {
        for(var i = 0; i < 86400000; i += 1000) {
            var r = random;
            connection.query('INSERT INTO Registros SET ?', {fecha: new Date(1553493600000 + i), temperatura: r()}, (error, results, fields) => {
                if(error) throw error;
            });
        }
        res.send(true);
    });

};
