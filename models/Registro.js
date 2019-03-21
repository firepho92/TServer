'use strict';
var DB = require('../config/configDB.js');
var db = new DB();
var connection = db.getConnection();

class Registro {
  constructor(temperatura){
    this.registro = {
      temperatura: temperatura
    }
  }

  async readRegistro() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT registro_id, fecha, temperatura FROM Registros', (error, results, fields) => {
        if(error) throw error;
        resolve(results);
      });
    });
  }

  async createRegistro() {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO Registros SET ?', {fecha: new Date(), temperatura: this.registro.temperatura}, (error, results, fields) => {
        if(error) resolve(false);
        resolve(true);
      });
    });
  }

}

module.exports = Registro;
