'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//middleware para las cabeceras http

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-API-KEY, Origin, X-Resquested-With, Content-type, Accept, Access-Control-Request-Method");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    res.header("Allow","GET, POST, PUT, DELETE");

    next();
});

//-----------------------
app.use('/api',api);

module.exports = app;
