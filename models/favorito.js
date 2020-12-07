'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var favoritoSchema = Schema({
  title: String,
  descripcion: String,
  url: String
});

module.exports = mongoose.model('Favorito', favoritoSchema);
