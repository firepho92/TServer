'use strict';

var IndexModel = require('../models/index');


module.exports = async (router) => {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        res.send('hola');
        
    });

};
