'use strict';

var Registro = require('../../models/Registro.js');

module.exports = async (router) => {

  router.post('/', async (req, res) => {
    var registro = new Registro(req.body.temperatura);
    registro = await registro.createRegistro();
    res.send(registro);
  });

};
