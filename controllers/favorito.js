'use strict'

var Favorito = require('../models/favorito');

function prueba(req, res) {

  var nombre = req.params.nombre;
  res.send({ text: "hola - " + nombre });
}

function getFavorito(req, res) {
  var favoritoId = req.params.id;

  Favorito.findById(favoritoId, function(err, favoritos){
    if (err) {
      res.status(500).send({mensaje: "error al devolver el marcador.."});
    }
    else{
      if(!favoritos){
        res.status(404).send({mensaje: "marcador mo existe.."});
      }
      else{
        res.status(200).send({favoritos});
      }
    }
  });

}

function getFavoritos(req, res){
  Favorito.find({}, (err, favoritos) => {
    if (err) {
      res.status(500).send({mensaje: "error al devolver datos.."});
    }

    if (!favoritos) {
      res.status(404).send({mensaje: "no hay marcadores..."});
    }

    res.status(200).send({favoritos});
  });
}

function saveFavorito(req, res){
  var params = req.body;
  var _favorito = new Favorito();
  _favorito.title = params.title;
  _favorito.descripcion = params.descripcion;
  _favorito.url = params.url;

  _favorito.save((err, guardado)=>{
    if (err) {
      res.status(500).send({mensaje: 'error al guardar favorito'});
      console.log(err);
    }else{
      res.status(200).send({favorito: guardado});
    }
  });
}  

function updateFavorito(req, res){
  var favoritoId = req.params.id;
  var update = req.body;

  Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoupdated) =>{
    if(err){
        res.status(500).send({mensaje: "error al actualizar el registro.."});
    }else{
        res.status(200).send({favorito: favoritoupdated});
     }
  })
}

function deleteFavorito(req, res){
  var favoritoId = req.params.id;

  Favorito.findByIdAndRemove(favoritoId, (err, favoritos) =>{
    if (err){
      res.status(500).send({mensaje: "error al borrar.."});
    }
    else{
      res.status(200).send({mensaje: "se ha eliminado favorito.."});
    }
  }


  );

}


// se exportan todos los modulos para que puedan ser usados
module.exports = {
  prueba,
  getFavorito,
  getFavoritos,
  saveFavorito,
  updateFavorito,
  deleteFavorito
}
