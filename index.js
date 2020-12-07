'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678 // CONFIGURAR PORT VARIABLES DE ENTORNO

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err,res) => {
  if (err) {
    throw err;
  }else {
    console.log('conexion a mongodb correcta..');
    app.listen(port, function() {
      console.log('API REST FAVORITOS funcionando... puerto: '+ port);
    });
  }
});
