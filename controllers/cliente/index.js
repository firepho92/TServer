'use strict';

var Registro = require('../../models/Registro.js');

module.exports = async (router) => {

  router.get('/', async (req, res) => {
    var registro = new Registro();
    registro = await registro.readRegistro();
    res.send(registro);
  });

  router.post('/', async (req, res) => {
    var registro = new Registro(req.body.registro);
    registro = await registro.createRegistro();
    res.send(registro);
  });
};
